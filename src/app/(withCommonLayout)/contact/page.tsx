import TopBanner from "@/components/shared/TopBanner"
import contactBannerImg from "@/assets/images/contact/Airplane Above Clouds 1.png"
import ResponsiveContainer from "@/components/containers/ResponsiveContainer"
import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { socialIcons } from "@/utils/icons"
import ContactForm from "./_components/ContactForm"
import FAQ from "@/components/home-sections/Faq"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact us for any kind of flight cancel and delay issue."
}

export default function Contact() {
  return (
    <div>
      <TopBanner text="Contact Us" backgroundImage={contactBannerImg} />

      <ResponsiveContainer className="flex-stretch-between mt-10 flex-col gap-8 lg:mt-20 lg:flex-row">
        {/* ------------------------- Contact Info ------------------------- */}
        <div
          className="relative z-20 w-full overflow-hidden rounded-xl p-10 text-white lg:w-1/2"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #0180A2 67.28%, #01B8E9 100%)"
          }}
        >
          <h2 className="text-h3 lg:text-h2 mb-2 font-semibold lg:mb-1">
            Contact Information
          </h2>
          <p className="text-lg font-light">
            Contact us for any kind of flight cancel and delay issue.
          </p>

          <ul className="mt-6 mb-8 space-y-3 lg:mt-8">
            <li className="flex items-center gap-3 font-light">
              <div className="size-[18px]">
                <MapPin size={18} />
              </div>
              <span>
                2 Charlesworth Court, Knights Way, Battlefield Enterprise Park,
                Shrewsbury, Shropshire, SYI 3AB
              </span>
            </li>
            <li className="flex items-center gap-3 font-light">
              <Phone size={18} />
              <span>0330 043 5407</span>
            </li>
            <li className="flex items-center gap-3 font-light">
              <Mail size={18} />
              <span>info@flight-delay-claims.com</span>
            </li>
          </ul>

          <div className="flex flex-row items-center gap-3">
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

          {/* Rounded Shapes */}
          <div className="absolute -right-20 -bottom-20 -z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="138"
              height="138"
              viewBox="0 0 138 138"
              fill="none"
              className="absolute -top-5 -left-8"
            >
              <circle
                cx="69"
                cy="69"
                r="69"
                fill="#FFF9F9"
                fillOpacity="0.13"
              />
            </svg>

            <div className="size-[270px] rounded-full bg-[rgba(255,255,255,0.12)]" />
          </div>
        </div>

        {/* ------------------------- Contact Form ------------------------- */}
        <div className="bg-secondary-light border-secondary/10 w-full rounded-xl border-2 p-10 lg:w-1/2">
          <ContactForm />
        </div>
      </ResponsiveContainer>

      <FAQ />
    </div>
  )
}
