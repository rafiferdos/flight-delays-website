"use client"

import Footer from "@/components/shared/Footer"
import SimplifiedFooter from "@/components/shared/Footer/SimplifiedFooter"
import Navbar from "@/components/shared/Navbar"
import SimplifiedNavbar from "@/components/shared/Navbar/SimplifiedNavbar"
import { usePathname } from "next/navigation"
import React from "react"

export default function CommonLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname()

  // Only compensation pages should use simplified navbar and footer
  const simplifiedPages = ["/compensation", "/compensation/track"]
  const useSimplified = simplifiedPages.includes(pathname)

  return (
    <div className="flex flex-col justify-between">
      {useSimplified ? <SimplifiedNavbar /> : <Navbar />}
      <main className="min-h-[75dvh] flex-1">{children}</main>
      {useSimplified ? <SimplifiedFooter /> : <Footer />}
    </div>
  )
}
