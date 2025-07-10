import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image"
import { PropsWithChildren, Suspense } from "react"

export default function CompensationLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex-center min-h-dvh bg-gray-50">
      <div className="w-11/12 space-y-8 lg:w-1/2 xl:w-1/3">
        <Suspense fallback={<FormSuspenseLoader />}>{children}</Suspense>

        {/* Professional Trust Badges */}
        <div className="flex items-center justify-center gap-6 py-4">
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/compensation-images/GDPR-badge.png"
              alt="GDPR Compliant"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>

          <div className="flex flex-col items-center gap-2">
            <Image
              src="/compensation-images/SSL medal.png"
              alt="SSL Secured"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>

        {/* Trust Message */}
        <div className="text-center text-sm text-gray-500">
          <p>Your data is protected with industry-standard security measures</p>
        </div>
      </div>
    </div>
  )
}

const FormSuspenseLoader = () => {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-lg">
      <div className="space-y-3">
        <Skeleton className="h-6 w-60" />
        <Skeleton className="h-4 w-80" />

        <div className="mt-4 space-y-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-2 w-full rounded-full" />
        </div>

        <div className="mt-6 grid gap-4">
          <div className="space-y-4">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-12 w-full rounded-md" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-12 w-full rounded-md" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-12 w-full rounded-md" />
          </div>
        </div>

        <div className="mt-6">
          <Skeleton className="h-10 w-24 rounded-md" />
        </div>
      </div>
    </div>
  )
}
