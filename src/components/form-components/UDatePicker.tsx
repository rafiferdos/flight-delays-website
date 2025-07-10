"use client"

import { useFormContext } from "react-hook-form"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { DateTimePicker } from "../ui/datetime-picker"
import RequiredSign from "./RequiredSign"

interface UDatePickerProps {
  name: string
  label: string
  disabledBeforeToday?: boolean
  required?: boolean
  placeholder?: string
}

export default function UDatePicker({
  name,
  label,
  required,
  placeholder
}: UDatePickerProps) {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem>
          {label && (
            <FormLabel className="gap-1">
              {label} {required && <RequiredSign />}
            </FormLabel>
          )}
          <FormControl className="w-full">
            <DateTimePicker
              value={field?.value}
              onChange={field.onChange}
              timeZone="UTC"
              hideTime
              clearable
              isAriaInvalid={error !== undefined}
              max={new Date()}
              placeholder={placeholder}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}
