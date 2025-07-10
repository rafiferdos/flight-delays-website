import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"
import React from "react"

export default function CommonLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col justify-between">
      <Navbar />
      <main className="min-h-[75dvh] flex-1">{children}</main>
      <Footer />
    </div>
  )
}
