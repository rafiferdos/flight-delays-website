/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import envConfig from "@/config/envConfig"
import React from "react"
import Provider from "@/lib/Providers/provider"
import GoogleTag from "@/components/GTMTracker/GoogleTag"

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap"
})

export const metadata: Metadata = {
  title: {
    default: "Flight Delays",
    template: "%s - Flight Delays"
  },
  description:
    "Claiming compensation is easier than you think. We handle everything and you get paid.",
  metadataBase: new URL((envConfig?.metadataBaseUrl as string) || "/"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Flight Delays",
    description:
      "The ultimate flight delay compensation platform. Claim up to £520 compensation per passenger- No matter the ticket price with Flight Delays!",
    images: [
      {
        url: "/og-image/og-root.png",
        width: 1200,
        height: 630,
        alt: "Flight Delays"
      }
    ]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-200 scrollbar-thumb-rounded-xl scrollbar-track-rounded-xl"
    >
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />

        {/* <!-- Meta Pixel Code --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
                !function(f,b,e,v,n,t,s)

                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?

                n.callMethod.apply(n,arguments):n.queue.push(arguments)};

                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';

                n.queue=[];t=b.createElement(e);t.async=!0;

                t.src=v;s=b.getElementsByTagName(e)[0];

                s.parentNode.insertBefore(t,s)}(window, document,'script',

                'https://connect.facebook.net/en_US/fbevents.js');

                fbq('init', '2101732896959351');

                fbq('track', 'PageView');`
          }}
        ></script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2101732896959351&ev=PageView&noscript=1"
          />
        </noscript>
        {/* <!-- End Meta Pixel Code --> */}

        {/* Google Tag Manager */}
        <GoogleTag id={envConfig?.gtmId} />
        {/* End Google Tag Manager */}
      </head>

      <body className={`${roboto.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${envConfig.gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
