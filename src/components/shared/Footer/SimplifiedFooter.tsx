import logo from "@/assets/logos/logo-mobile.svg"
import ResponsiveContainer from "@/components/containers/ResponsiveContainer"
import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SimplifiedFooter() {
  return (
    <footer className="mt-10 bg-[linear-gradient(180deg,#002029_0%,#001419_100%)] pt-8 pb-4 text-white sm:mt-20 sm:pt-12">
      <ResponsiveContainer>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {/* Logo & Company Info */}
          <div className="space-y-4 text-center sm:space-y-6 md:text-left">
            <Link href="/" className="inline-block">
              <Image
                src={logo}
                alt="Logo of FLIGHT DELAYS"
                height={80}
                width={109}
                className="sm:h-[100px] sm:w-[136px]"
              />
            </Link>
            <p className="mx-auto max-w-md text-sm text-gray-300 sm:text-base md:mx-0">
              Helping passengers claim compensation for flight delays,
              cancellations, and disruptions under UK & EU law.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-base font-semibold sm:text-lg">
              Contact information
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start justify-center gap-2 font-light sm:gap-3 md:justify-start">
                <div className="mt-1 w-[16px] flex-shrink-0 sm:w-[18px]">
                  <MapPin size={16} className="sm:h-[18px] sm:w-[18px]" />
                </div>
                <span className="text-left text-sm sm:text-base">
                  2 Charlesworth Court, Knights Way, Battlefield Enterprise
                  Park, Shrewsbury, Shropshire, SYI 3AB
                </span>
              </li>
              <li className="flex items-center justify-center gap-2 font-light sm:gap-3 md:justify-start">
                <Phone
                  size={16}
                  className="flex-shrink-0 sm:h-[18px] sm:w-[18px]"
                />
                <span className="text-sm sm:text-base">0330 043 5407</span>
              </li>
              <li className="flex items-center justify-center gap-2 font-light sm:gap-3 md:justify-start">
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
        </div>
      </ResponsiveContainer>

      {/* Divider */}
      <div className="mt-10 mb-4 border-t border-gray-700 sm:mt-16"></div>

      {/* Copyright */}
      <div className="text-muted-foreground px-4 text-center text-xs sm:text-sm">
        Copyright &copy; 2025 FLIGHT-DELAYS. All Rights Reserved
      </div>
    </footer>
  )
}
