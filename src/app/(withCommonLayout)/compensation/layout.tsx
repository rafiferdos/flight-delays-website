import { Skeleton } from "@/components/ui/skeleton"
import { PropsWithChildren, Suspense } from "react"

export default function CompensationLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex-center min-h-dvh bg-gray-50">
      <div className="w-11/12 space-y-8 lg:w-1/2 xl:w-1/3">
        <Suspense fallback={<FormSuspenseLoader />}>{children}</Suspense>

        {/* Martin Lewis Recommendation */}
        <div className="flex items-center justify-center gap-4 rounded-lg border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4">
          <div className="flex-shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm font-semibold text-blue-900">
              Recommended by Martin Lewis
            </p>
            <p className="text-xs text-blue-700">Money Saving Expert</p>
          </div>
        </div>

        {/* Professional Trust Badges */}
        {/* <div className="flex items-center justify-center gap-6 py-4">
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/compensation-images/GDPR-badge.png"
              alt="GDPR Compliant"
              width={80}
              height={80}
              className="object-contain"
            />
            <span className="text-xs font-medium text-gray-600">
              GDPR Compliant
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Image
              src="/compensation-images/SSL medal.png"
              alt="SSL Secured"
              width={80}
              height={80}
              className="object-contain"
            />
            <span className="text-xs font-medium text-gray-600">
              SSL Secured
            </span>
          </div>
        </div> */}

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
