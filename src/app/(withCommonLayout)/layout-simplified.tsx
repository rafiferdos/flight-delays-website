import SimplifiedFooter from "@/components/shared/Footer/SimplifiedFooter"
import SimplifiedNavbar from "@/components/shared/Navbar/SimplifiedNavbar"
import React from "react"

export default function SimplifiedLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col justify-between">
      <SimplifiedNavbar />
      <main className="min-h-[75dvh] flex-1">{children}</main>
      <SimplifiedFooter />
    </div>
  )
}
