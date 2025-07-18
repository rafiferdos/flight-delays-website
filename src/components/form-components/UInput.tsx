import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { InputMask, Replacement } from "@react-input/mask"
import { cva } from "class-variance-authority"
import React from "react"
import { useFormContext } from "react-hook-form"
import EyeIconInverse from "../others/EyeIconInverse"
import RequiredSign from "./RequiredSign"

export const inputVariants = cva(
  "disabled:text-muted w-full border border-gray-400 px-4 py-6 disabled:border-gray-300 disabled:opacity-100",
  {
    variants: {
      variant: {
        primary:
          "border-[2px] border-secondary py-[22px] rounded-lg focus-within:ring-[2px] focus-within:ring-secondary/50 transition-all ease-in"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
)

interface UInputProps extends React.ComponentProps<"input"> {
  id?: string
  name: string
  type?: React.HTMLInputTypeAttribute
  label?: string
  labelClass?: string
  loading?: boolean
  max?: number
  showPassword?: boolean
  setShowPassword?: React.Dispatch<React.SetStateAction<boolean>>
  mask?: string
  maskReplacement?: string | Replacement
  helperText?: string
  variant?: "primary" | null
  prefixIcon?: React.ReactNode
}

const UInput = ({
  id,
  loading,
  type = "text",
  label,
  placeholder,
  name,
  required = false,
  accept,
  className,
  disabled,
  max,
  value,
  readOnly,
  labelClass,
  showPassword,
  setShowPassword,
  mask,
  maskReplacement,
  helperText,
  variant,
  autoComplete,
  prefixIcon
}: UInputProps) => {
  const {
    control,
    formState: { errors: entireFormErrors }
  } = useFormContext() ?? {}

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, formState: { errors } }) => (
        <FormItem className="w-full">
          {label && (
            <FormLabel
              className={cn("flex-center-start mb-0.5 gap-1", labelClass)}
            >
              {label} {required && <RequiredSign />}
            </FormLabel>
          )}

          <FormControl>
            {type === "password" ? (
              <div className="relative">
                <Input
                  className={cn(
                    inputVariants({ variant }),
                    "w-full border border-gray-400 px-4 py-6",
                    className
                  )}
                  {...field}
                  id={id}
                  name={name}
                  type={showPassword ? "text" : "password"}
                  placeholder={placeholder}
                  disabled={disabled || loading}
                  accept={accept}
                  onChange={field.onChange}
                  autoComplete={autoComplete}
                />

                <EyeIconInverse
                  showPassword={showPassword as boolean}
                  setShowPassword={
                    setShowPassword as React.Dispatch<
                      React.SetStateAction<boolean>
                    >
                  }
                />
              </div>
            ) : !mask ? (
              <div className={prefixIcon ? "relative" : ""}>
                {prefixIcon && <>{prefixIcon}</>}
                <Input
                  className={cn(inputVariants({ variant }), className)}
                  {...field}
                  id={id}
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  disabled={disabled || loading}
                  accept={accept}
                  onChange={field.onChange}
                  maxLength={max}
                  readOnly={readOnly}
                  autoComplete={autoComplete}
                />
              </div>
            ) : (
              <InputMask
                {...field}
                id={id}
                className={cn(
                  inputVariants({ variant }),
                  "aria-invalid:border-destructive h-12 py-0 text-sm",
                  className
                )}
                mask={mask}
                replacement={maskReplacement}
                placeholder={placeholder}
                disabled={disabled || loading}
                autoComplete={autoComplete}
              />
            )}
          </FormControl>

          {helperText && <FormDescription>{helperText}</FormDescription>}

          {Object.keys(entireFormErrors)?.length > 0 && !errors?.[name] ? (
            <div className="min-h-8" />
          ) : (
            <FormMessage className="text-destructive" />
          )}
        </FormItem>
      )}
    />
  )
}

export default UInput
