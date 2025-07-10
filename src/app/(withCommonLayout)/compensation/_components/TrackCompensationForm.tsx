/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"

import FormWrapper from "@/components/form-components/FormWrapper"
import { Button } from "@/components/ui/button"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import envConfig from "@/config/envConfig"
import { sendEmailMessage, APIResponseError } from "@/service/emailService"
import { uploadImage } from "@/service/imgUploadService"
import { trackCompensationSchema } from "@/zod/trackCompensation.validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { CircleXIcon } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { SubmitHandler, useFormContext } from "react-hook-form"
import { toast } from "sonner"

interface FormData {
  boardingPass?: File[]
}

const escapeHtml = (unsafe: string) =>
  unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")

export default function TrackCompensationForm() {
  const applicantEmail = useSearchParams()?.get("email") || ""
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setIsSubmitting(true)

      const defaultImgUrl =
        "https://i.postimg.cc/kGcw6BLv/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image-40966566.jpg"

      let boardingPassImgUrls: string[] = []

      if (data?.boardingPass?.length) {
        for (const file of data.boardingPass) {
          const resUploadingImage = await uploadImage(file)
          if (
            !resUploadingImage?.success ||
            !resUploadingImage?.data?.display_url
          ) {
            toast.error(
              `Failed to upload boarding pass: ${file.name}. Skipping.`
            )
            continue
          }
          boardingPassImgUrls.push(resUploadingImage.data.display_url)
        }
      }

      if (!boardingPassImgUrls.length) {
        boardingPassImgUrls = [defaultImgUrl]
      }

      const adminEmailPayload = {
        from: envConfig.infoEmail as string,
        pass: envConfig.emailPass as string,
        email: envConfig.submissionsEmail as string,
        subject: "New Compensation Application (2nd Form)",
        html: `<!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <title>New Application Submitted</title>
              <style>
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
                          <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Application Submission (2nd Form)</h1>
                        </td>
                      </tr>
                      <!-- Body -->
                      <tr>
                        <td style="padding: 30px;">
                          <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
                            A new application from <strong>${escapeHtml(applicantEmail)}</strong> has been submitted.
                          </p>
                          <h2 style="font-size: 18px; margin: 20px 0 10px;">Application Details</h2>
                          <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 14px; background-color: #f8f9fa;">
                            <thead>
                              <tr style="background-color: #e9ecef;">
                                <th align="left" style="padding: 10px; border-bottom: 1px solid #dee2e6;">Field</th>
                                <th align="left" style="padding: 10px; border-bottom: 1px solid #dee2e6;">Details</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">Applicant Email</td>
                                <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">${escapeHtml(applicantEmail)}</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <!-- Boarding Passes -->
                      <tr>
                        <td style="padding: 30px;">
                          <h2 style="font-size: 18px; margin-bottom: 16px;">Boarding Passes</h2>
                          ${boardingPassImgUrls
                            .map(
                              (url, idx) => `
                                <div style="margin-bottom: 20px;">
                                  <p style="font-size: 14px; font-weight: bold; margin-bottom: 8px;">
                                    Boarding Pass ${idx + 1}
                                  </p>
                                  <img src="${escapeHtml(url)}" alt="Boarding Pass ${idx + 1}" width="300" height="300" style="border-radius: 6px; object-fit: cover; object-position: center;" />
                                </div>
                              `
                            )
                            .join("")}
                          <p style="margin-top: 10px; font-style: italic; font-weight: bold;">
                            Please download and save the images locally to ensure they don't disappear or break if the original source is moved or deleted.
                          </p>
                        </td>
                      </tr>
                      <!-- Footer -->
                      <tr>
                        <td align="center" style="padding: 20px; font-size: 12px; color: #888888;">
                          <p style="margin: 0;">© 2025 Flight Delay Claims Ltd</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </body>
          </html>`
      }

      const resSendingAdminMail = await sendEmailMessage(adminEmailPayload)

      //@ts-ignore
      if (!resSendingAdminMail?.accepted?.length) {
        toast.error(
          (resSendingAdminMail as APIResponseError)?.message ||
            "Email send failed!"
        )
        console.error((resSendingAdminMail as APIResponseError)?.error)
        return
      }

      toast.success(
        "Thank you for your submission. We will get back to you shortly."
      )
      router.push("/")
    } catch (error: any) {
      toast.error(
        error?.message || "Something went wrong. Please try again later."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <FormWrapper
      onSubmit={onSubmit}
      resolver={zodResolver(trackCompensationSchema)}
      className="bg-secondary-light grid gap-3 rounded-xl p-6"
    >
      <BoardingPassInput isSubmitting={isSubmitting} />
    </FormWrapper>
  )
}

const BoardingPassInput = ({ isSubmitting }: { isSubmitting: boolean }) => {
  const { control, watch } = useFormContext<FormData>() ?? {}
  const boardingPassFiles = watch("boardingPass")

  return (
    <>
      <FormField
        control={control}
        name="boardingPass"
        render={({ field: { value, onChange, ...fieldProps } }) => (
          <FormItem>
            <FormLabel>Upload Boarding Passes (if any)</FormLabel>
            <FormControl>
              <div className="relative">
                <Input
                  {...fieldProps}
                  id="boardingPassInput"
                  accept="image/*, application/pdf"
                  type="file"
                  multiple
                  className="border-secondary h-12 border-2 py-1.5"
                  onChange={(event) =>
                    onChange(
                      event.target.files ? Array.from(event.target.files) : []
                    )
                  }
                />
                {value && value?.length > 0 && (
                  <button
                    className="text-destructive hover:text-destructive/70 absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                    onClick={() => {
                      onChange([])
                      ;(
                        document.getElementById(
                          "boardingPassInput"
                        ) as HTMLInputElement
                      ).value = ""
                    }}
                  >
                    <CircleXIcon size={18} />
                  </button>
                )}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <Button
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting || !boardingPassFiles?.length}
      >
        Submit
      </Button>
    </>
  )
}
