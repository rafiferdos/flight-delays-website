import AboutDistance from "@/components/home-sections/AboutDistance"
import CompensationForFamily from "@/components/home-sections/CompensationForFamily"
import CompensationGetProcess from "@/components/home-sections/CompensationGetProcess"
import FAQ from "@/components/home-sections/Faq"
import Hero from "@/components/home-sections/Hero"
import RecentSuccess from "@/components/home-sections/RecentSuccess"
import RulesAndRights from "@/components/home-sections/RulesAndRights"
import Stats from "@/components/home-sections/Stats"
import WhyChooseUs from "@/components/home-sections/WhyChooseUs"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Claiming compensation is easier than you think. We handle everything and you get paid."
}

export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <RulesAndRights />
      <WhyChooseUs />
      <AboutDistance />
      <CompensationGetProcess />
      <CompensationForFamily />
      <RecentSuccess />
      <FAQ />
    </div>
  )
}
