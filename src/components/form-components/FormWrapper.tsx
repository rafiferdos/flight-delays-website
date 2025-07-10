/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */

"use client"
import {
  FieldValues,
  Resolver,
  SubmitHandler,
  useForm,
  UseFormProps
} from "react-hook-form"
import { Form } from "../ui/form"
import { cn } from "@/lib/utils"
import React from "react"
import envConfig from "@/config/envConfig"

interface FormWrapperProps {
  onSubmit: SubmitHandler<any>
  children: React.ReactNode
  defaultValues?: FieldValues
  resolver?: Resolver<FieldValues | any>
  className?: string
  onKeyDown?: (event: React.KeyboardEvent<HTMLFormElement>) => void
  formProp?: any
}

const FormWrapper = ({
  children,
  resolver,
  defaultValues,
  className,
  onSubmit,
  onKeyDown,
  formProp
}: FormWrapperProps) => {
  const formConfig: UseFormProps = {}

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues
  }

  if (resolver) {
    formConfig["resolver"] = resolver
  }

  const generatedForm = useForm({ defaultValues, resolver })

  const form = formProp || generatedForm

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data)

    if (!envConfig.devMode) {
      form.reset()
    }
  }

  return (
    <Form {...form}>
      <form
        className={cn("!font-dm-sans w-full space-y-4", className)}
        onSubmit={form.handleSubmit(submit)}
        onKeyDown={onKeyDown}
      >
        {children}
      </form>
    </Form>
  )
}

export default FormWrapper
