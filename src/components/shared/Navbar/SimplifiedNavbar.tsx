"use client"

import Logo from "@/assets/logos/Logo"
import ResponsiveContainer from "@/components/containers/ResponsiveContainer"
import { Button } from "@/components/ui/button"
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

        {/* Check Eligibility Button */}
        <div>
          <Button
            variant="primary"
            size="lg"
            className="group transition-all duration-300 hover:-translate-y-[1px] hover:shadow-lg"
            asChild
          >
            <Link href="tel:03300435407">
              Check Eligibility
              <Icon
                icon="ic:round-arrow-forward"
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                height={20}
                width={20}
                color="white"
              />
            </Link>
          </Button>
        </div>
      </ResponsiveContainer>
    </nav>
  )
}
