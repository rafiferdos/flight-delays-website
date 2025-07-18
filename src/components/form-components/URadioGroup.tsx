"use client"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useFormContext } from "react-hook-form"
import RequiredSign from "./RequiredSign"

interface URadioGroupProps {
  name: string
  label: string
  options: { value: string; label: string }[]
  required?: boolean
}

export default function URadioGroup({
  name,
  label,
  options,
  required
}: URadioGroupProps) {
  const { control } = useFormContext() ?? {}

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="flex-center-start mb-0.5 gap-1 text-[15px]">
            {label} {required && <RequiredSign />}
          </FormLabel>

          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              value={field.value}
              className="flex space-x-1"
            >
              {options?.map((item) => (
                <FormItem
                  key={item.label}
                  className="flex items-center space-y-0"
                >
                  <FormControl>
                    <RadioGroupItem
                      value={item.value}
                      className="border-secondary border shadow-none"
                    />
                  </FormControl>
                  <FormLabel className="cursor-pointer text-base font-normal">
                    {item.label}
                  </FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}
