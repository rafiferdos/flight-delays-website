"use client"

import {
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command"
import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"
import { Command as CommandPrimitive } from "cmdk"
import { Check, Info } from "lucide-react"
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent
} from "react"
import { createPortal } from "react-dom"
import { Skeleton } from "./skeleton"

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
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
    width: 0
  })

  const [isOpen, setOpen] = useState(false)
  const [selected, setSelected] = useState<AutoCompleteOption>(
    value as AutoCompleteOption
  )
  const [inputValue, setInputValue] = useState<string>(value?.label || "")

  // Calculate dropdown position
  useEffect(() => {
    if (isOpen && wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect()
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width
      })
    }
  }, [isOpen])

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
    // Add a small delay to allow option selection before closing
    setTimeout(() => {
      if (!inputValue) {
        setSelected({} as AutoCompleteOption)
      }
      setInputValue(selected?.label || "")
      setOpen(false)
    }, 150)
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

  const DropdownContent = () => (
    <div
      className="absolute rounded-lg border border-gray-200 bg-white shadow-2xl"
      style={{
        top: `${dropdownPosition.top}px`,
        left: `${dropdownPosition.left}px`,
        width: `${dropdownPosition.width}px`,
        zIndex: 10000
      }}
    >
      <CommandList className="scrollbar-thin scrollbar-w-2 scrollbar-track-white scrollbar-thumb-secondary scrollbar-thumb-rounded-full max-h-60 overflow-y-auto rounded-lg">
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
                    "flex w-full cursor-pointer items-center gap-2 px-4 py-2 text-sm font-medium hover:bg-gray-50 data-[selected=true]:bg-gray-100",
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
          <CommandPrimitive.Empty className="rounded-sm px-4 py-5 text-center text-sm select-none">
            {!inputValue || inputValue?.length < 2 ? (
              <p className="flex items-center justify-center rounded-lg border border-blue-200 bg-blue-50 p-3 font-medium text-gray-700">
                <Info className="mr-2 h-5 w-5 animate-pulse text-blue-600" />
                <span className="font-semibold text-blue-800">
                  {searchTooltipText}
                </span>
              </p>
            ) : inputValue && inputValue?.length < 3 ? (
              <p className="flex items-center justify-center font-medium text-gray-600">
                <Info className="mr-2 h-5 w-5 text-blue-500" />
                Enter at least 3 characters to search
              </p>
            ) : (
              <p className="text-destructive font-medium">{emptyMessage}</p>
            )}
          </CommandPrimitive.Empty>
        ) : null}
      </CommandList>
    </div>
  )

  return (
    <CommandPrimitive onInput={handleKeyDown}>
      <div className="relative w-full" ref={wrapperRef}>
        {icon && (
          <div className="absolute top-1/2 left-3 z-10 -translate-y-1/2">
            {icon}
          </div>
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
          className="w-full text-sm"
          wrapperClassName={cn(
            "border-0 border-transparent bg-transparent focus-within:ring-0 focus-within:ring-transparent focus-within:border-transparent outline-none shadow-none w-full",
            icon ? "pl-10" : "",
            isAriaInvalid && "border-destructive"
          )}
          autoComplete={autoComplete}
        />

        {selected?.label && (
          <button
            className="animate-in fade-in-50 absolute top-1/2 right-3.5 z-10 -translate-y-1/2"
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

      {/* Render dropdown using portal to avoid clipping */}
      {isOpen &&
        typeof document !== "undefined" &&
        createPortal(<DropdownContent />, document.body)}
    </CommandPrimitive>
  )
}
