import logo from "@/assets/logos/logo-mobile.svg"
import ResponsiveContainer from "@/components/containers/ResponsiveContainer"
import { NavbarLinks } from "@/constants/navbar.constants"
import { socialIcons } from "@/utils/icons"
import { Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-10 bg-[linear-gradient(180deg,#002029_0%,#001419_100%)] pt-8 pb-4 text-white sm:mt-20 sm:pt-12">
      <ResponsiveContainer>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Company Info */}
          <div className="space-y-4 sm:space-y-6 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src={logo}
                alt="Logo of FLIGHT DELAYS"
                height={80}
                width={109}
                className="sm:h-[100px] sm:w-[136px]"
              />
            </Link>
            <p className="max-w-md text-sm text-gray-300 sm:text-base lg:hidden">
              Helping passengers claim compensation for flight delays,
              cancellations, and disruptions under UK & EU law.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold sm:text-lg">Quick links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {NavbarLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm font-light transition-colors hover:text-gray-300 sm:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm font-light transition-colors hover:text-gray-300 sm:text-base"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold sm:text-lg">
              Contact information
            </h3>
            <ul className="space-y-3 sm:space-y-3">
              <li className="flex items-start gap-2 font-light sm:gap-3">
                <div className="mt-1 w-[16px] flex-shrink-0 sm:w-[18px]">
                  <MapPin size={16} className="sm:h-[18px] sm:w-[18px]" />
                </div>
                <span className="text-sm sm:text-base">
                  2 Charlesworth Court, Knights Way, Battlefield Enterprise
                  Park, Shrewsbury, Shropshire, SYI 3AB
                </span>
              </li>
              <li className="flex items-center gap-2 font-light sm:gap-3">
                <Mail
                  size={16}
                  className="flex-shrink-0 sm:h-[18px] sm:w-[18px]"
                />
                <span className="text-sm sm:text-base">
                  info@flight-delay-claims.com
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 md:justify-start lg:flex-col lg:items-start lg:gap-3">
            <Link
              href="#"
              aria-label="Facebook"
              className="rounded-full p-2 transition-colors hover:bg-white/10 hover:[&>svg]:fill-red-100"
            >
              {socialIcons.facebook}
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="rounded-full p-2 transition-colors hover:bg-white/10 hover:text-gray-300"
            >
              {socialIcons.instagram}
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="rounded-full p-2 transition-colors hover:bg-white/10 hover:text-gray-300"
            >
              {socialIcons.twitter}
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="rounded-full p-2 transition-colors hover:bg-white/10 hover:text-gray-300"
            >
              {socialIcons.linkedIn}
            </Link>
          </div>
        </div>
      </ResponsiveContainer>

      {/* Divider */}
      <div className="mt-10 mb-4 border-t border-gray-700 sm:mt-16"></div>

      {/* Privacy Policy Link */}
      <div className="mb-4 text-center">
        <Link
          href="/privacy-policy"
          className="text-sm font-light transition-colors hover:text-gray-300 sm:text-base"
        >
          Privacy Policy
        </Link>
      </div>

      {/* Copyright */}
      <div className="text-muted-foreground px-4 text-center text-xs sm:text-sm">
        Copyright &copy; 2025 FLIGHT-DELAYS. All Rights Reserved
      </div>
    </footer>
  )
}
