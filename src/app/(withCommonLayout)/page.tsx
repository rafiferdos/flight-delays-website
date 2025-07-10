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
    "Did you have a delayed or cancelled flight? Claim up to £520 compensation per passenger- No matter the ticket price! At Flight Delay Claims, we simplify the process taking the stress off your shoulders whilst ensuring your claim has the best chance of success."
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
