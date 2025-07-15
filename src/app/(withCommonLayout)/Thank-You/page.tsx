import { Metadata } from "next"
import { Suspense } from "react"
import ThankYouContent from "./_components/ThankYouContent"

export const metadata: Metadata = {
  title: "Thank You - Flight Delay Claims",
  description:
    "Thank you for your enquiry. We will review your claim and get back to you soon."
}

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        <Suspense fallback={<div>Loading...</div>}>
          <ThankYouContent />
        </Suspense>
      </div>
    </div>
  )
}
