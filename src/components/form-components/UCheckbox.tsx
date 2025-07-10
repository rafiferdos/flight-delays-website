import React, { ReactNode } from "react"
import { useFormContext } from "react-hook-form"
import { Checkbox } from "@/components/ui/checkbox"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form"
import { cn } from "@/lib/utils"

interface UCheckboxProps {
  name: string
  label: ReactNode
  className?: string
}

export default function UCheckbox({ name, label, className }: UCheckboxProps) {
  const { control } = useFormContext() ?? {}

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-row items-center space-y-0 space-x-2">
            <FormControl>
              <Checkbox
                className={className}
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>

            <FormLabel className={cn("leading-none font-normal", className)}>
              {label}
            </FormLabel>
          </div>
        </FormItem>
      )}
    />
  )
}
