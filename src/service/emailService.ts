/* eslint-disable @typescript-eslint/no-explicit-any */
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
  error: any
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
  } catch (error: any) {
    console.log("Email sending error: =============>", { error })
    return {
      success: false,
      message: error.message,
      error: error
    }
  }
}
