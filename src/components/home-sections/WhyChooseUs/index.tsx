import ResponsiveContainer from "@/components/containers/ResponsiveContainer"
import { WhyChooseUsData } from "@/constants/home.constants"
import WhyChooseUsCard from "./WhyChooseUsCard"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WhyChooseUs() {
  return (
    <div className="bg-secondary-light mt-20 space-y-10 py-10 text-center lg:py-20">
      <h3 className="text-h3 lg:text-h2 font-bold">Why Choose Us</h3>

      <ResponsiveContainer className="flex flex-wrap items-stretch justify-center gap-5">
        {WhyChooseUsData?.map((item, idx) => (
          <WhyChooseUsCard key={item.key} item={item} index={idx} />
        ))}
      </ResponsiveContainer>

      <Button size="xl" variant="primary" asChild>
        <Link href="/compensation">Check Compensation</Link>
      </Button>
    </div>
  )
}
