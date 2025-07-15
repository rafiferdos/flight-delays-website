import logo from "@/assets/logos/logo-mobile.svg"
import ResponsiveContainer from "@/components/containers/ResponsiveContainer"
import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SimplifiedFooter() {
  return (
    <footer className="mt-20 bg-[linear-gradient(180deg,#002029_0%,#001419_100%)] pt-12 pb-4 text-white">
      <ResponsiveContainer>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Logo & Company Info */}
          <div className="space-y-6">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo of FLIGHT DELAYS"
                height={100}
                width={136}
              />
            </Link>
            <p className="max-w-md text-gray-300">
              Helping passengers claim compensation for flight delays,
              cancellations, and disruptions under UK & EU law.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact information</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 font-light">
                <div className="mt-1 w-[18px]">
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
