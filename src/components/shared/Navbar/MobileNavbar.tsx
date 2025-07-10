import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"
import Link from "next/link"
import { NavbarLinks } from "@/constants/navbar.constants"
import { Dispatch, SetStateAction } from "react"
import { Icon } from "@iconify/react"
import { Button } from "@/components/ui/button"

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

        {/* Contact Button */}
        <Button variant="primary" size="lg" className="mt-2 w-max" asChild>
          <Link href="tel:03300435407">
            <Icon icon="fa:phone" aria-hidden="true" />
            0330 043 5407
          </Link>
        </Button>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavbar
