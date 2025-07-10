import ResponsiveContainer from "@/components/containers/ResponsiveContainer"
import ProcessTimeline from "./ProcessTimeline"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CompensationGetProcess() {
  return (
    <div className="bg-secondary-light mt-20 py-20">
      <ResponsiveContainer className="text-center">
        <h2 className="text-h3 lg:text-h2 mb-10 text-center font-bold">
          Simple & Easy <span className="text-gradient">Process</span>
        </h2>

        <ProcessTimeline />

        <Button variant="primary" size="xl" asChild className="mt-10">
          <Link href="/compensation">Check Compensation</Link>
        </Button>
      </ResponsiveContainer>
    </div>
  )
}
