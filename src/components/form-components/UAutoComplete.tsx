import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { AutoComplete, AutoCompleteOption } from "../ui/autocomplete"
import RequiredSign from "./RequiredSign"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useFormContext } from "react-hook-form"

interface UAutoCompleteProps {
  name: string
  label?: string
  placeholder?: string
  icon?: string
  options: AutoCompleteOption[]
  required?: boolean
}

export default function UAutoComplete({
  name,
  label,
  placeholder,
  icon,
  options,
  required
}: UAutoCompleteProps) {
  const { control } = useFormContext() ?? {}

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem className="w-full">
          <FormLabel className="flex-center-start mb-0.5 gap-x-1">
            {label} {required && <RequiredSign />}
          </FormLabel>

          <FormControl>
            <AutoComplete
              options={options}
              emptyMessage="No results."
              placeholder={placeholder}
              // isLoading={isLoading}
              // disabled={isDisabled}
              onValueChange={(option) =>
                field.onChange((option as AutoCompleteOption)?.value)
              }
              value={options.find(
                (option: AutoCompleteOption) => option.value === field.value
              )}
              icon={
                icon ? (
                  <Icon
                    icon={icon}
                    className="text-gray-400"
                    height={20}
                    width={20}
                  />
                ) : null
              }
              isAriaInvalid={error !== undefined}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}
