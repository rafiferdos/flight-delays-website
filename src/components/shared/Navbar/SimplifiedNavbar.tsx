"use client"

import Logo from "@/assets/logos/Logo"
import ResponsiveContainer from "@/components/containers/ResponsiveContainer"
import Link from "next/link"

export default function SimplifiedNavbar() {
  return (
    <nav className="w-full bg-white dark:bg-gray-950">
      <ResponsiveContainer className="flex-center-between h-[85px]">
        {/* Logo */}
        <Link href="/">
          <Logo />
        </Link>

        {/* Simple Compensation Text */}
        <div className="text-primary text-sm font-semibold sm:text-base">
          Claim Up to £520 Per Passenger
        </div>
      </ResponsiveContainer>
    </nav>
  )
}
