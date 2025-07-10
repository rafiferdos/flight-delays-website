"use client"

import {
  CommandGroup,
  CommandItem,
  CommandList,
  CommandInput
} from "@/components/ui/command"
import { Command as CommandPrimitive } from "cmdk"
import {
  useState,
  useRef,
  useCallback,
  type KeyboardEvent,
  Dispatch,
  SetStateAction,
  ReactNode
} from "react"
import { Skeleton } from "./skeleton"
import { Check, Info } from "lucide-react"
import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"

export type AutoCompleteOption = Record<"value" | "label", string> &
  Record<string, string>

type AutoCompleteProps = {
  options: AutoCompleteOption[]
  emptyMessage: ReactNode
  value?: AutoCompleteOption
  onValueChange?: Dispatch<SetStateAction<AutoCompleteOption | undefined>>
  onChange?: (_value: string) => void
  isLoading?: boolean | "idle"
  disabled?: boolean
  placeholder?: string
  icon?: ReactNode
  isAriaInvalid?: boolean
  autoComplete?: string
  onFocus?: () => void
  searchTooltipText?: string
}

export const AutoComplete = ({
  options,
  placeholder,
  emptyMessage,
  value,
  onValueChange,
  onChange,
  disabled,
  isLoading = false,
  icon,
  isAriaInvalid = false,
  autoComplete,
  onFocus,
  searchTooltipText
}: AutoCompleteProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [isOpen, setOpen] = useState(false)
  const [selected, setSelected] = useState<AutoCompleteOption>(
    value as AutoCompleteOption
  )
  const [inputValue, setInputValue] = useState<string>(value?.label || "")

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current
      if (!input) {
        return
      }

      // Keep the options displayed when the user is typing
      if (!isOpen) {
        setOpen(true)
      }

      onChange?.(input.value)

      // This is not a default behavior of the <input /> field
      if (event.key === "Enter" && input.value !== "") {
        const optionToSelect = options.find(
          (option) => option.searchText === input.value
        )
        if (optionToSelect) {
          setSelected(optionToSelect)
          onValueChange?.(optionToSelect)
        }
      } else if (event.key === "Enter" && input.value === "") {
        setSelected(value as AutoCompleteOption)
        onValueChange?.(undefined)
      }

      if (event.key === "Escape") {
        input.blur()
      }
    },
    [isOpen, options, onValueChange, onChange, value]
  )

  const handleBlur = useCallback(() => {
    if (!inputValue) {
      setSelected({} as AutoCompleteOption)
    }
    setInputValue(selected?.label)
    setOpen(false)
  }, [selected, inputValue])

  const handleSelectOption = useCallback(
    (selectedOption: AutoCompleteOption) => {
      if (selectedOption?.value === selected?.value) {
        setInputValue("")

        setSelected({} as AutoCompleteOption)
        onValueChange?.(undefined)
      } else {
        setInputValue(selectedOption.label)

        setSelected(selectedOption)
        onValueChange?.(selectedOption)

        // This is a hack to prevent the input from being focused after the user selects an option
        // We can call this hack: "The next tick"
        setTimeout(() => {
          inputRef?.current?.blur()
        }, 0)
      }
    },
    [onValueChange, selected]
  )

  const handleClearSelection = useCallback(() => {
    setSelected({} as AutoCompleteOption)
    setInputValue("")
    onValueChange?.(undefined)
  }, [onValueChange])

  return (
    <CommandPrimitive onInput={handleKeyDown}>
      <div className="relative">
        {icon && (
          <div className="absolute top-1/2 left-3 -translate-y-1/2">{icon}</div>
        )}

        <CommandInput
          ref={inputRef}
          value={inputValue}
          onValueChange={setInputValue}
          onBlur={handleBlur}
          onFocus={() => {
            onFocus?.()
            setOpen(true)
          }}
          placeholder={placeholder}
          disabled={disabled}
          className="text-sm"
          wrapperClassName={cn(
            "border-[2px] border-secondary py-[22px] rounded-lg focus-within:ring-[2px] focus-within:ring-secondary/50 transition-all ease-in",
            icon ? "pl-10" : "",
            isAriaInvalid && "border-destructive"
          )}
          autoComplete={autoComplete}
        />

        {selected?.label && (
          <button
            className="animate-in fade-in-50 absolute top-1/2 right-3.5 -translate-y-1/2"
            onClick={handleClearSelection}
          >
            <Icon
              icon="icon-park-solid:close-one"
              height={18}
              width={18}
              className="text-gray-600 hover:text-gray-900"
            />
          </button>
        )}
      </div>
      <div className="relative mt-1">
        {isOpen && (
          <div className="absolute top-[2px] z-10 w-full rounded-lg border bg-white outline-none">
            <CommandList className="scrollbar-thin scrollbar-w-2 scrollbar-track-white scrollbar-thumb-secondary scrollbar-thumb-rounded-full rounded-lg">
              {isLoading === true ? (
                <CommandPrimitive.Loading>
                  <div className="space-y-2 p-2">
                    {Array.from({ length: 10 }).map((_, index) => (
                      <Skeleton key={index} className="h-8 w-full" />
                    ))}
                  </div>
                </CommandPrimitive.Loading>
              ) : null}
              {options?.length > 0 && !isLoading ? (
                <CommandGroup>
                  {options?.map((option) => {
                    const isSelected = selected?.value === option.value
                    return (
                      <CommandItem
                        key={option.value}
                        value={option.label}
                        onMouseDown={(event) => {
                          event.preventDefault()
                          event.stopPropagation()
                        }}
                        onSelect={() => handleSelectOption(option)}
                        className={cn(
                          "data-[selected=true]:bg-secondary/10 flex w-full items-center gap-2 text-sm font-medium",
                          !isSelected ? "pl-8" : null
                        )}
                      >
                        {isSelected ? <Check className="w-4" /> : null}
                        {option.label}
                      </CommandItem>
                    )
                  })}
                </CommandGroup>
              ) : null}

              {!isLoading ? (
                <CommandPrimitive.Empty className="rounded-sm px-2 py-5 text-center text-sm select-none">
                  {!inputValue ? (
                    <p className="flex items-center justify-center font-medium text-gray-600">
                      <Info className="mr-2 h-5 w-5 text-blue-500" />
                      {searchTooltipText}
                    </p>
                  ) : inputValue && inputValue?.length < 3 ? (
                    <p className="flex items-center justify-center font-medium text-gray-600">
                      <Info className="mr-2 h-5 w-5 text-blue-500" />
                      Enter at least 3 characters to search
                    </p>
                  ) : (
                    <p className="text-destructive font-medium">
                      {emptyMessage}
                    </p>
                  )}
                </CommandPrimitive.Empty>
              ) : null}
            </CommandList>
          </div>
        )}
      </div>
    </CommandPrimitive>
  )
}
