import { socialIcons } from "@/utils/icons"
import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import logo from "@/assets/logos/logo-mobile.svg"
import Image from "next/image"
import { NavbarLinks } from "@/constants/navbar.constants"
import ResponsiveContainer from "@/components/containers/ResponsiveContainer"

export default function Footer() {
  return (
    <footer className="mt-20 bg-[linear-gradient(180deg,#002029_0%,#001419_100%)] pt-12 pb-4 text-white">
      <ResponsiveContainer>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Logo */}
          <Link href="/">
            <Image
              src={logo}
              alt="Logo of FLIGHT DELAYS"
              height={100}
              width={136}
            />
          </Link>

          {/* Quick Links Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick links</h3>
            <ul className="space-y-3">
              {NavbarLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="font-light transition-colors hover:text-gray-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {[
                {
                  key: "terms-conditions",
                  label: "Terms & Conditions",
                  href: "/terms-conditions"
                },
                {
                  key: "privacy-policy",
                  label: "Privacy Policy",
                  href: "/privacy-policy"
                }
              ].map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="font-light transition-colors hover:text-gray-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact information</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 font-light">
                <div className="w-[18px]">
                  <MapPin size={18} />
                </div>
                <span>
                  2 Charlesworth Court, Knights Way, Battlefield Enterprise
                  Park, Shrewsbury, Shropshire, SYI 3AB
                </span>
              </li>
              <li className="flex items-center gap-2 font-light">
                <Phone size={18} />
                <span>0330 043 5407</span>
              </li>
              <li className="flex items-center gap-2 font-light">
                <Mail size={18} />
                <span>info@flight-delay-claims.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-row items-center gap-3 lg:flex-col">
            <Link
              href="#"
              aria-label="Facebook"
              className="transition-colors hover:[&>svg]:fill-red-100"
            >
              {socialIcons.facebook}
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="transition-colors hover:text-gray-300"
            >
              {socialIcons.instagram}
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="transition-colors hover:text-gray-300"
            >
              {socialIcons.twitter}
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="transition-colors hover:text-gray-300"
            >
              {socialIcons.linkedIn}
            </Link>
          </div>
        </div>
      </ResponsiveContainer>

      {/* Divider */}
      <div className="mt-16 mb-4 border-t border-gray-700"></div>

      {/* Copyright */}
      <div className="text-muted-foreground text-center text-sm">
        Copyright &copy; 2025 FLIGHT-DELAYS. All Rights Reserved
      </div>
    </footer>
  )
}
