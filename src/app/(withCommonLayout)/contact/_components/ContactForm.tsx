/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import FormWrapper from "@/components/form-components/FormWrapper"
import UInput from "@/components/form-components/UInput"
import UTextarea from "@/components/form-components/UTextarea"
import { Button } from "@/components/ui/button"
import envConfig from "@/config/envConfig"
import { sendEmailMessage } from "@/service/emailService"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { FieldValues, SubmitHandler } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const contactFormValidationSchema = z.object({
  firstName: z
    .string({ required_error: "Required", invalid_type_error: "Required" })
    .min(1, "Required"),
  lastName: z.string().optional(),
  email: z
    .string({ required_error: "Required" })
    .email("Invalid email address"),
  phone: z.coerce.string().optional(),
  message: z.string().optional()
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { firstName, lastName, email, phone, message } = data

    try {
      setIsSubmitting(true)
      const res = await sendEmailMessage({
        from: envConfig.infoEmail as string,
        pass: envConfig.emailPass as string,
        email: envConfig.submissionsEmail as string,
        subject: "New Contact Form Submission",
        html: `<!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <title>New Application Submitted</title>
              <style>
                /* Fallback styling for email clients */
                body {
                  margin: 0;
                  padding: 0;
                  font-family: Arial, Helvetica, sans-serif;
                  background-color: #f4f4f4;
                  color: #333333;
                }
                table {
                  border-spacing: 0;
                }
                img {
                  display: block;
                  max-width: 100%;
                  height: auto;
                  border: none;
                  line-height: 100%;
                  outline: none;
                  text-decoration: none;
                }
              </style>
            </head>
            <body>
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px 0;">
                <tr>
                  <td align="center">
                    <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); overflow: hidden;">
                      <!-- Header -->
                      <tr>
                        <td style="background-color: #02b520; padding: 20px; text-align: center;">
                          <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Contact Form</h1>
                        </td>
                      </tr>

                      <!-- Body -->
                      <tr>
                        <td style="padding: 30px;">
                          <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
                            Contact information was submitted by <strong>${email}</strong></p>

                          <h2 style="font-size: 18px; margin: 20px 0 10px;">Submission Details</h2>
                          <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 14px; background-color: #f8f9fa;">
                            <thead>
                              <tr style="background-color: #e9ecef;">
                                <th align="left" style="padding: 10px; border-bottom: 1px solid #dee2e6;">Field</th>
                                <th align="left" style="padding: 10px; border-bottom: 1px solid #dee2e6;">Details</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">First Name</td>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">${firstName}</td>
                              </tr>
                              
                               <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">Last Name</td>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">${lastName}</td>
                              </tr>
                              
                               <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">Email</td>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">${email}</td>
                              </tr>
                              
                               <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">Phone</td>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">${phone}</td>
                              </tr>
                              
                               <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">Message</td>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">
                                  <pre>
                                    ${message}
                                  </pre>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </body>
          </html>`
      })

      //@ts-ignore
      if (res?.accepted?.length > 0) {
        return toast.success(
          "Message sent successfully. We'll get back to you shortly."
        )
      }

      toast.error("Message failed to send")
    } catch (error: any) {
      console.error(error)
      toast.error(error?.message || "Something went wrong")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <FormWrapper
      onSubmit={onSubmit}
      resolver={zodResolver(contactFormValidationSchema)}
    >
      <div className="grid grid-cols-2 gap-4">
        <UInput
          type="text"
          id="firstName"
          name="firstName"
          label="First Name"
          autoComplete="first name"
          placeholder="Enter first name"
          className="border-secondary focus-visible:border-secondary w-full border-2 !ring-0"
        />

        <UInput
          id="lastName"
          name="lastName"
          label="Last Name"
          autoComplete="last name"
          type="text"
          placeholder="Enter last name"
          className="border-secondary focus-visible:border-secondary w-full border-2 !ring-0"
        />

        <UInput
          id="email"
          name="email"
          label="Email"
          autoComplete="email"
          type="email"
          placeholder="Enter email"
          className="border-secondary focus-visible:border-secondary w-full border-2 !ring-0"
        />

        <UInput
          id="phone"
          name="phone"
          label="Phone"
          autoComplete="tel"
          type="tel"
          placeholder="Enter phone number"
          className="border-secondary focus-visible:border-secondary w-full border-2 !ring-0"
        />
      </div>
      <UTextarea
        name="message"
        id="message"
        label="Message"
        autoComplete="message"
        placeholder="Enter message"
        className="border-secondary focus-visible:border-secondary !col-span-2 w-full border-2 !ring-0"
      />

      <Button
        type="submit"
        variant="primary"
        size="xl"
        className="mt-3 w-full"
        disabled={isSubmitting}
      >
        Submit
      </Button>
    </FormWrapper>
  )
}
