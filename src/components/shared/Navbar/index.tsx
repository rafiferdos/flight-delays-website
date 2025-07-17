"use client"

import Logo from "@/assets/logos/Logo"
import ResponsiveContainer from "@/components/containers/ResponsiveContainer"
import { Button } from "@/components/ui/button"
import { NavbarLinks } from "@/constants/navbar.constants"
import { Icon } from "@iconify/react"
import Link from "next/link"
import { useState } from "react"
import MobileNavbar from "./MobileNavbar"
import NavLink from "./NavLink"

export default function Navbar() {
  const [showMobileSidebar, setShowMobileSidebar] = useState<boolean>(false)

  return (
    <nav className="w-full bg-white dark:bg-gray-950">
      <ResponsiveContainer className="flex-center-between h-[85px]">
        {/* Logo */}
        <Link href="/">
          <Logo />
        </Link>

        {/* NavLinks */}
        <div className="hidden items-center gap-8 md:flex">
          {NavbarLinks.map((link) => {
            if (link.excludeFromTopNav) return null
            return (
              <NavLink key={link.key} label={link.label} href={link.href} />
            )
          })}
        </div>

        <div>
          <Button
            variant="primary"
            size="lg"
            className="group hidden transition-all duration-300 hover:-translate-y-[1px] hover:shadow-lg md:inline-flex"
            asChild
          >
            <Link href="tel:03300435407">
              Check Eligibility
            </Link>
          </Button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setShowMobileSidebar(true)}
            className="md:hidden"
          >
            <Icon
              icon="ic:round-menu"
              height={30}
              width={30}
              color="rgba(0,0,0,0.85)"
            />
            <span className="sr-only">Toggle navigation menu</span>
          </button>
        </div>
      </ResponsiveContainer>

      {/* Mobile Menu */}
      <MobileNavbar open={showMobileSidebar} setOpen={setShowMobileSidebar} />
    </nav>
  )
}
