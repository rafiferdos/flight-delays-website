/* eslint-disable @typescript-eslint/no-explicit-any */
// components/GoogleTag.tsx
"use client"

import envConfig from "@/config/envConfig"
import Script from "next/script"
import { useEffect } from "react"

interface GoogleTagProps {
  id?: string
}

export default function GoogleTag({ id }: GoogleTagProps) {
  const gtmId = id || envConfig?.gtmId

  // For form submission tracking
  useEffect(() => {
    const handleFormSubmit = () => {
      if ((window as any).dataLayer) {
        ;(window as any).dataLayer.push({
          event: "form_submission",
          form_id: "claim_compensation_form"
        })
      }
    }
    // Add event listeners to forms
    const form = document.querySelector("form")
    if (form) {
      form.addEventListener("submit", handleFormSubmit)
    }

    return () => {
      if (form) {
        form.removeEventListener("submit", handleFormSubmit)
      }
    }
  }, [])

  return (
    <>
      {/* Google Tag Manager - Script that goes as high as possible in <head> */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');
        `}
      </Script>
    </>
  )
}
