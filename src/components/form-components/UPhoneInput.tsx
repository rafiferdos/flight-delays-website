import { useFormContext } from "react-hook-form"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { PhoneInput } from "../ui/PhoneInput"
import RequiredSign from "./RequiredSign"

interface UPhoneInputProps {
  name: string
  label?: string
  className?: string
  inputClassName?: string
  countrySelectClassName?: string
  placeholder?: string
  readOnly?: boolean
  required?: boolean
  autoComplete?: string
}

export default function UPhoneInput({
  name,
  label = "Phone Number",
  className,
  placeholder = "Enter a phone number",
  readOnly,
  required,
  autoComplete
}: UPhoneInputProps) {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col items-start">
          <FormLabel className="text-left">
            {label} {required && <RequiredSign />}
          </FormLabel>
          <FormControl className="w-full">
            <PhoneInput
              placeholder={placeholder}
              international
              defaultCountry="FR"
              className={className}
              value={field.value}
              onChange={field.onChange}
              readOnly={readOnly}
              autoComplete={autoComplete}
            />
          </FormControl>

          <FormMessage className="w-full" />
        </FormItem>
      )}
    />
  )
}
