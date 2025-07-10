"use client"

import PageTopLoader from "@/components/shared/PageTopLoader"
import dynamic from "next/dynamic"
import React from "react"
import { Toaster } from "sonner"

const PixelTracker = dynamic(
  () => import("@/components/PixelTracker/PixelTracker"),
  {
    ssr: false
  }
)

interface ProviderProps {
  children: React.ReactNode
}

export default function Provider({ children }: ProviderProps) {
  return (
    <div>
      <PixelTracker />

      {children}

      <PageTopLoader />

      <Toaster duration={4000} position="bottom-right" richColors />
    </div>
  )
}
