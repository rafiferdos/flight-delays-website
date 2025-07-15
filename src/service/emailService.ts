"use server"
import nodemailer from "nodemailer"

const mailTransporter = async (user: string, pass: string) => {
  return await nodemailer.createTransport({
    host: "smtp.hostinger.com",
    secure: true,
    port: 465,
    auth: {
      user: user,
      pass: pass
    },
    from: user
  })
}

type SendMailArgs = {
  email: string
  subject: string
  text?: string
  html: string
  from: string
  pass: string
}

export interface APIResponseError {
  success: boolean
  message: string
  error: Error | unknown
}

export const sendEmailMessage = async (data: SendMailArgs) => {
  try {
    const res = (await mailTransporter(data?.from, data?.pass))?.sendMail({
      from: data?.from,
      to: data.email,
      subject: data.subject,
      text: "",
      html: data.html,
      replyTo: data.email
    })

    return res
  } catch (error: unknown) {
    console.error("Email sending error: =============>", { error })
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred"
    return {
      success: false,
      message: errorMessage,
      error: error
    }
  }
}
