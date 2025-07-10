import { Metadata } from "next"
import TrackCompensationForm from "../_components/TrackCompensationForm"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Track Compensation Claim",
  description:
    "Help us fast-track your claim, we need your airline booking reference number."
}
export default function TrackCompensationClaim() {
  return (
    <div>
      <div className="mb-5 space-y-8">
        <h1 className="md:text-h3 text-h4 lg:text-h2 text-center font-semibold lg:leading-14">
          Thank you for submitting your claim.
        </h1>
        <p className="text-center text-lg font-medium text-gray-700">
          To help us fast-track your claim, it would be great if you could
          upload a picture of all passengers boarding passes.
        </p>
      </div>

      <TrackCompensationForm />

      <Link
        href="/"
        className="text-primary/70 hover:text-primary mt-3 flex items-start justify-center gap-2 text-center text-sm font-medium"
      >
        <ArrowLeft size={16} /> Go back to home
      </Link>
    </div>
  )
}
