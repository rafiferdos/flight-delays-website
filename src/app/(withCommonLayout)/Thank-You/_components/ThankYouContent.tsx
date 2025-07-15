"use client"

import { CheckCircle } from "lucide-react"
import { useSearchParams } from "next/navigation"

export default function ThankYouContent() {
  const searchParams = useSearchParams()
  const leadPassengerName = searchParams?.get("name") || "there"

  return (
    <div className="text-center">
      {/* Main Headline */}
      <h1 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
        Thank you for your enquiry{" "}
        <span className="text-blue-600">{leadPassengerName}</span>
      </h1>

      {/* Great News Section */}
      <div className="mb-8 rounded-lg bg-green-50 p-6 text-left">
        <p className="text-lg font-medium text-green-800">
          <strong>Great News!</strong> It looks like you may be eligible for
          Flight Compensation worth up to{" "}
          <span className="font-bold text-green-900">£520 per passenger</span>.
        </p>
      </div>

      {/* What Happens Next Section */}
      <div className="text-left">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
          What Happens Next?
        </h2>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
            <p className="text-lg text-gray-700">
              <strong>We&apos;ve received your claim</strong> and our Partner
              will review the details.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
            <p className="text-lg text-gray-700">
              <strong>They will contact you</strong> if we need more info.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
            <p className="text-lg text-gray-700">
              <strong>They will fight</strong> for the compensation you may
              deserve.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-8 rounded-lg bg-blue-50 p-6 text-left">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> Please check your email (including spam folder)
          for a confirmation message with more details about your claim.
        </p>
      </div>
    </div>
  )
}
