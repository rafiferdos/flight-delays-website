"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./Navbar.css"
import { INavLink } from "@/types"

export default function NavLink({
  label,
  href
}: Pick<INavLink, "label" | "href">) {
  const currentPath = usePathname()
  const isActivePath = currentPath === href

  return (
    <Link
      href={href}
      className={cn(
        "hover-animated-underline navLink text-[1.1rem] font-normal",
        isActivePath ? "text-gradient active font-medium" : "text-black/90"
      )}
    >
      {label}
    </Link>
  )
}
