import TopBanner from "@/components/shared/TopBanner"
import aboutPageHeaderImg from "@/assets/images/about/Airplane Above Clouds 1.png"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import section1Img from "@/assets/images/about/section-1.webp"
import section2Img from "@/assets/images/about/section-2.webp"
import ResponsiveContainer from "@/components/containers/ResponsiveContainer"
import { WhatSpecial } from "@/constants/about.constants"
import arrowIcon from "@/assets/images/home/claim-compensation/arrow.svg"
import RecentSuccess from "@/components/home-sections/RecentSuccess"
import FAQ from "@/components/home-sections/Faq"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "FLIGHT-DELAYS is an online platform where we understand how frustrating flight disruptions can be. Whether your flight was delayed, canceled, or overbooked, you may be entitled to compensation—and we’re here to make the process simple. Our team of experts navigates complex airline policies and legal regulations to ensure you get the compensation you deserve, without the hassle."
}

export default function About() {
  return (
    <div>
      <TopBanner backgroundImage={aboutPageHeaderImg} text={"About Us"} />

      <ResponsiveContainer className="flex-center-between mt-10 flex-col gap-12 lg:mt-20 lg:flex-row lg:gap-16">
        <div className="w-full lg:w-1/2">
          <h2 className="text-h3 lg:text-h2 font-semibold">
            Helping You Claim{" "}
            <span className="text-gradient">What’s Rightfully Yours</span>
          </h2>

          <p className="mt-4 mb-10 font-light text-gray-700">
            At FLIGHT-DELAYS, we understand how frustrating flight disruptions
            can be. Whether your flight was delayed, canceled, or overbooked,
            you may be entitled to compensation—and we’re here to make the
            process simple. Our team of experts navigates complex airline
            policies and legal regulations to ensure you get the compensation
            you deserve, without the hassle. Let us handle the claim while you
            focus on your journey. Check your eligibility today and take the
            first step toward claiming your rightful compensation.
          </p>

          <Button variant="primary" size="xl">
            Check Compensation
          </Button>
        </div>

        <Image
          src={section1Img}
          alt="Couple going to airport"
          height={1200}
          width={1200}
          placeholder="blur"
          className="w-full rounded-xl object-cover object-center lg:h-[500px] lg:w-1/2"
        />
      </ResponsiveContainer>

      <ResponsiveContainer className="flex-center-between mt-20 mb-20 flex-col gap-8 lg:mt-28 lg:mb-28 lg:flex-row lg:gap-16">
        <Image
          src={section2Img}
          alt="Couple going to airport"
          height={1200}
          width={1200}
          placeholder="blur"
          className="w-full rounded-xl object-cover object-center lg:h-[500px] lg:w-1/2"
        />

        <div className="w-full lg:w-1/2">
          <h2 className="text-h3 lg:text-h2 font-semibold">
            What makes us <span className="text-gradient">special?</span>
          </h2>

          <div className="mt-6 space-y-5">
            {WhatSpecial.map((rule) => (
              <div key={rule.key} className="flex items-baseline gap-x-4">
                <Image
                  src={arrowIcon}
                  alt="Arrow Icon"
                  height={20}
                  width={20}
                />

                <div>
                  <h4 className="text-h5 font-semibold">{rule.title}</h4>
                  <p className="font-light text-gray-700">{rule.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ResponsiveContainer>

      <RecentSuccess />
      <FAQ />
    </div>
  )
}
