import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { NavbarLinks } from "@/constants/navbar.constants"
import { Icon } from "@iconify/react"
import Link from "next/link"
import { Dispatch, SetStateAction } from "react"

interface MobileNavbarProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const MobileNavbar = ({ open, setOpen }: MobileNavbarProps) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTitle className="sr-only">Open Mobile Navigation Menu</SheetTitle>
      <SheetContent side="left" className="px-4 py-14 md:hidden">
        {NavbarLinks.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className="flex-center-between border-b pb-1 text-sm font-medium dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
            onClick={() => setOpen(false)}
          >
            {link.label}

            <Icon
              icon="fe:arrow-right"
              className="text-gray-600 hover:text-black"
            />
          </Link>
        ))}
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavbar
