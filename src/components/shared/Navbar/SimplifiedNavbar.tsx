"use client"

import Logo from "@/assets/logos/Logo"
import ResponsiveContainer from "@/components/containers/ResponsiveContainer"
import { Icon } from "@iconify/react"
import Link from "next/link"

export default function SimplifiedNavbar() {
  return (
    <nav className="w-full bg-white dark:bg-gray-950">
      <ResponsiveContainer className="flex-center-between h-[85px]">
        {/* Logo */}
        <Link href="/">
          <Logo />
        </Link>

        {/* Decorative Compensation Text */}
        <div className="relative">
          {/* Background glow effect */}
          <div className="absolute inset-0 -m-2 animate-pulse rounded-2xl bg-gradient-to-r from-blue-100/50 via-emerald-100/50 to-blue-100/50 blur-sm"></div>

          {/* Main container */}
          <div className="relative flex items-center gap-2 rounded-xl border border-blue-200/50 bg-gradient-to-r from-blue-50 to-emerald-50 px-4 py-2 shadow-sm">
            {/* Left currency icon */}
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 shadow-md">
              <Icon
                icon="mdi:currency-gbp"
                className="text-white"
                height={18}
                width={18}
              />
            </div>

            {/* Main text */}
            <div className="flex flex-col items-center">
              <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-blue-600 bg-clip-text text-sm leading-tight font-bold text-transparent">
                Claim Up To
              </span>
              <span className="-mt-0.5 bg-gradient-to-r from-emerald-600 via-blue-600 to-emerald-600 bg-clip-text text-lg leading-tight font-extrabold text-transparent">
                £520 Per Passenger
              </span>
            </div>

            {/* Right sparkle icon */}
            <div className="flex h-8 w-8 animate-pulse items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-md">
              <Icon
                icon="mdi:star-four-points"
                className="text-white"
                height={16}
                width={16}
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-1 -right-1 h-3 w-3 animate-ping rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 opacity-75"></div>
            <div className="absolute -bottom-1 -left-1 h-2 w-2 animate-pulse rounded-full bg-gradient-to-br from-blue-400 to-emerald-500"></div>
          </div>
        </div>
      </ResponsiveContainer>
    </nav>
  )
}
