"use client"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import React from "react"
import { useFormContext } from "react-hook-form"

interface UTextareaProps extends React.ComponentProps<"textarea"> {
  name: string
  label?: string
  max?: number
}

export default function UTextarea({
  name,
  label,
  max,
  className,
  placeholder,
  disabled,
  ref,
  required,
  ...props
}: UTextareaProps) {
  const { control } = useFormContext() ?? {}

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel>
              {label} {required && <span className="text-destructive">*</span>}
            </FormLabel>
          )}

          <FormControl>
            <Textarea
              {...field}
              placeholder={placeholder}
              className={cn(
                "min-h-[100px] resize-none border border-gray-400",
                className
              )}
              maxLength={max}
              readOnly={props?.readOnly}
              disabled={disabled}
              ref={ref}
            />
          </FormControl>
          <FormMessage className="text-destructive" />
        </FormItem>
      )}
    />
  )
}
