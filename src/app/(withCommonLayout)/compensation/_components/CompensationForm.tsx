/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { MultiStepViewer } from "@/components/form-components/MultiStepFormViewer"
import { Form } from "@/components/ui/form"
import envConfig from "@/config/envConfig"
import { APIResponseError, sendEmailMessage } from "@/service/emailService"
import { compensationFormValidationSchema } from "@/zod/compensationForm.validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { useRouter } from "nextjs-toploader/app"
import { JSX } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import CompensationStep1 from "../_compensation_forms/step-1"
import CompensationStep2 from "../_compensation_forms/step-2"
import CompensationStep3 from "../_compensation_forms/step-3"

export interface FormStep {
  step: number
  formElement: JSX.Element
  fields: string[]
}

interface CompensationFormProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

type FormValues = z.infer<typeof compensationFormValidationSchema>

export default function CompensationForm({
  searchParams
}: CompensationFormProps) {
  const router = useRouter()

  const form = useForm<FormValues>({
    resolver: zodResolver(compensationFormValidationSchema),
    defaultValues: {
      acceptTerms: false,
      departureAirport: searchParams?.departureAirport as string | undefined,
      arrivalAirport: searchParams?.arrivalAirport as string | undefined,
      additionalPassengers: [
        { id: "passenger-1", name: "" },
        { id: "passenger-2", name: "" },
        { id: "passenger-3", name: "" }
      ]
    }
  })

  const formSteps: FormStep[] = [
    {
      step: 1,
      formElement: <CompensationStep1 key="Step-1" />,
      fields: ["departureAirport", "arrivalAirport", "departureDate"]
    },
    {
      step: 2,
      formElement: <CompensationStep2 key="Step-2" />,
      fields: ["airline", "flightNumber", "bookingReferenceNumber"]
    },
    {
      step: 3,
      formElement: <CompensationStep3 key="Step-3" />,
      fields: [
        "leadPassengerFullName",
        "dateOfBirth",
        "email",
        "contact",
        "additionalPassenger",
        "additionalPassenger1",
        "acceptTerms"
      ]
    }
  ]

  const { isSubmitting } = form.formState

  const handleFormSubmit: SubmitHandler<FormValues> = async (data) => {
    // Send confirmation email to applicant
    try {
      const applicantEmailPayload = {
        from: envConfig.infoEmail as string,
        pass: envConfig.emailPass as string,
        email: data?.email,
        subject: "Compensation Application Confirmation",
        html: `<!DOCTYPE html>
            <html>
            <body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f4f4f4; color: #333;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
                <tr>
                  <td align="center">
                    <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                      <!-- Header -->
                      <tr>
                        <td style="background-color: #017292; border-radius: 8px 8px 0 0; padding: 20px; text-align: center;">
                          <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Flight Delay Claims Application Confirmation</h1>
                        </td>
                      </tr>
                      <!-- Body -->
                      <tr>
                        <td style="padding: 30px; padding-bottom: 10px;">
                          <p style="font-size: 16px; line-height: 1.5; margin: 0 0 20px;">
                            Hi ${data?.leadPassengerFullName},
                          </p>
                          <p style="font-size: 16px; line-height: 1.5; margin: 0 0 20px;">
                            Thank you for submitting your claim with Flight Delay Claims.
                          </p>
                          <p style="font-size: 16px; line-height: 1.5; margin: 0 0 20px;">
                            Please accept this email confirmation of receipt of your claim for flight <strong>${data?.flightNumber}</strong> on <strong>${format(new Date(data?.departureDate), "dd MMM yyyy")}</strong>.
                          </p>
                          <p style="font-size: 16px; line-height: 1.5; margin: 0 0 20px;">
                            Our team is now verifying the flight information you've provided. We'll be in touch shortly to confirm the status of your claim and the next steps.
                          </p>
                          <p style="font-size: 16px; line-height: 1.5; margin: 0 0 20px;">
                            We look forward to working together in getting you the compensation you deserve.
                          </p>
                          <p style="font-size: 16px; line-height: 1.5; margin: 0 0 20px;">
                            If you have any questions or need to provide additional information, please contact us at
                            <a href="mailto:info@flight-delay-claims.com" style="color: #007bff; text-decoration: none;">info@flight-delay-claims.com</a>.
                          </p>
                        </td>
                      </tr>
                                  
                      <!-- Footer -->
                      <tr>
                        <td style="background-color: #f8f9fa; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
                          <p style="font-size: 14px; color: #666; margin: 0 0 10px;">
                            © 2025 Flight Delay Claims. All rights reserved.
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              
              
            </body>

            </html>
            `
      }

      const resSendingUserMail = await sendEmailMessage(applicantEmailPayload)

      //@ts-ignore
      if (resSendingUserMail?.accepted?.length === 0) {
        toast.error(
          (resSendingUserMail as APIResponseError)?.message ||
            "Email sent failed!"
        )
        return console.error((resSendingUserMail as APIResponseError)?.error)
      }

      // Send user details to admin
      const adminEmailPayload = {
        from: envConfig.infoEmail as string,
        pass: envConfig.emailPass as string,
        email: envConfig.submissionsEmail as string,
        subject: "New Compensation Application",
        html: `<body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f4f4f4; color: #333;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <!-- Header -->
                    <tr>
                      <td style="background-color: #017292; border-radius: 8px 8px 0 0; padding: 20px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Flight Application Submission</h1>
                      </td>
                    </tr>
                    <!-- Body -->
                    <tr>
                      <td style="padding: 30px;">
                        <p style="font-size: 16px; line-height: 1.5; margin: 0 0 20px;">
                          A new application from ${data?.email} has been submitted.
                        </p>
                        <h2 style="font-size: 18px; margin: 20px 0 10px;">Application Details</h2>
                        <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse: collapse; font-size: 14px; background-color: #f8f9fa; border-radius: 4px;">
                          <tr style="background-color: #e9ecef;">
                            <th style="text-align: left; border-bottom: 1px solid #dee2e6; padding: 8px;">Field</th>
                            <th style="text-align: left; border-bottom: 1px solid #dee2e6; padding: 8px;">Details</th>
                          </tr>
                          <tr>
                            <td style="border-bottom: 1px solid #dee2e6; padding: 8px;">Lead Passenger Name</td>
                            <td style="border-bottom: 1px solid #dee2e6; padding: 8px;">${data.leadPassengerFullName}</td>
                          </tr>
                          <tr>
                            <td style="border-bottom: 1px solid #dee2e6; padding: 8px;">Airline</td>
                            <td style="border-bottom: 1px solid #dee2e6; padding: 8px;">${data.airline}</td>
                          </tr>
                          <tr>
                            <td style="border-bottom: 1px solid #dee2e6; padding: 8px;">Flight Number</td>
                            <td style="border-bottom: 1px solid #dee2e6; padding: 8px;">${data.flightNumber}</td>
                          </tr>

                          <tr>
                            <td style="border-bottom: 1px solid #dee2e6; padding: 8px;">Departure Airport</td>
                            <td style="border-bottom: 1px solid #dee2e6; padding: 8px;">${data.departureAirport}</td>
                          </tr>
                          <tr>
                            <td style="border-bottom: 1px solid #dee2e6; padding: 8px;">Arrival Airport</td>
                            <td style="border-bottom: 1px solid #dee2e6; padding: 8px;">${data.arrivalAirport}</td>
                          </tr>
                          <tr>
                            <td style="border-bottom: 1px solid #dee2e6; padding: 8px;">Departure Date</td>
                            <td style="border-bottom: 1px solid #dee2e6; padding: 8px;">${format(new Date(data.departureDate), "MMM dd, yyyyy")}</td>
                          </tr>
                          <tr>
                            <td style="border-bottom: 1px solid #dee2e6; padding: 8px;">Date of Birth</td>
                            <td style="border-bottom: 1px solid #dee2e6; padding: 8px;">${format(new Date(data.dateOfBirth), "MMM dd, yyyy")}</td>
                          </tr>
                          <tr>
                            <td style="border-bottom: 1px solid #dee2e6; padding: 8px;">Email</td>
                            <td style="border-bottom: 1px solid #dee2e6; padding: 8px;">${data.email}</td>
                          </tr>
                          <tr>
                            <td style="border-bottom: 1px solid #dee2e6; padding: 8px;">Contact Number</td>
                            <td style="border-bottom: 1px solid #dee2e6; padding: 8px;">${data.contact}</td>
                          </tr>
                          <tr>
                            <td style="border-bottom: 1px solid #dee2e6; padding: 8px;">Additional Passenger</td>
                            <td style="border-bottom: 1px solid #dee2e6; padding: 8px;">${data.additionalPassenger}</td>
                          </tr>
                          
                          ${
                            data.additionalPassenger === "Yes" &&
                            data?.additionalPassengers?.length
                              ? data.additionalPassengers
                                  .map(
                                    (
                                      passenger: { name?: string; dob?: Date },
                                      idx: number
                                    ) => `
                                      <tr>
                                        <td style="border-bottom: 1px solid #dee2e6; padding: 8px;">
                                          Additional Passenger ${idx + 1} Name
                                        </td>
                                        <td style="border-bottom: 1px solid #dee2e6; padding: 8px;">
                                          ${passenger?.name || "N/A"}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style="border-bottom: 1px solid #dee2e6; padding: 8px;">
                                          Additional Passenger ${idx + 1} DOB
                                        </td>
                                        <td style="border-bottom: 1px solid #dee2e6; padding: 8px;">
                                          ${passenger?.dob ? format(new Date(passenger.dob), "MMM dd, yyyyy") : "N/A"}
                                        </td>
                                      </tr>
                                    `
                                  )
                                  .join("")
                              : ""
                          }
                          <tr>
                            <td style="border-bottom: 1px solid #dee2e6; padding: 8px;">Terms Accepted</td>
                            <td style="border-bottom: 1px solid #dee2e6; padding: 8px;">${data.acceptTerms}</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
              </table>
            </td>
          </tr>
        </table>
          </body>`
      }

      const resSendingAdminMail = await sendEmailMessage(adminEmailPayload)

      //@ts-ignore
      if (resSendingAdminMail?.accepted?.length === 0) {
        toast.error(
          (resSendingAdminMail as APIResponseError)?.message ||
            "Email sent failed!"
        )
        return console.error((resSendingAdminMail as APIResponseError)?.error)
      }

      toast.success(
        "Thank you for your submission. Please check your email(also spam) for confirmation message."
      )

      router.push(`/Thank-You?name=${encodeURIComponent(data.leadPassengerFullName)}&email=${data.email}`)

      // Google Tag tracking - this will trigger the event listener in the GoogleTag component
      if (window.dataLayer) {
        window.dataLayer.push({
          event: "form_submission",
          form_id: "claim_compensation_form",
          form_data: {
            submission_time: new Date().toString()
          }
        })
      }
    } catch (error: any) {
      console.error(
        "Claim compensation form submission error ==========>",
        error
      )
      toast.error(error.message || "Something went wrong")
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleFormSubmit)}
        className="border-secondary/20 rounded-xl border py-5 shadow-md"
      >
        <div className="mb-4 border-b px-4 pb-2 md:px-6">
          <h4 className="text-h4 text-gradient font-semibold">
            Claim Compensation
          </h4>
          <p className="text-gray-600">
            Please fill out the form to continue with your claim.
          </p>
        </div>

        <div className="p-2 px-4 md:px-6">
          <MultiStepViewer
            form={form}
            isSubmitting={isSubmitting}
            formSteps={formSteps}
          />
        </div>
      </form>
    </Form>
  )
}
