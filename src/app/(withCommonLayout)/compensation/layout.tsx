import { Skeleton } from "@/components/ui/skeleton"
import { PropsWithChildren, Suspense } from "react"

export default function CompensationLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex-center min-h-dvh bg-gray-50">
      <div className="w-11/12 space-y-8 lg:w-1/2 xl:w-1/3">
        <Suspense fallback={<FormSuspenseLoader />}>{children}</Suspense>

        {/* Martin Lewis Recommendation - Mobile Optimized */}
        <div className="relative">
          {/* Speech bubble container */}
          <div className="relative rounded-xl border border-blue-200 bg-blue-50 p-4 shadow-md">
            {/* Content - Mobile First Layout */}
            <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:gap-4 sm:text-left">
              {/* Profile icon */}
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 shadow-sm">
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

              {/* Text content */}
              <div className="flex-1">
                <p className="text-base font-bold text-blue-900 sm:text-lg">
                  Recommended by Martin Lewis
                </p>
                <p className="text-sm text-blue-700">Money Saving Expert</p>
              </div>
            </div>

            {/* Speech bubble tail - Hidden on mobile, visible on desktop */}
            <div className="absolute bottom-0 left-6 hidden translate-y-full transform sm:block">
              <div className="h-0 w-0 border-t-[12px] border-r-[12px] border-l-[12px] border-t-blue-50 border-r-transparent border-l-transparent"></div>
            </div>
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
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-24" />
      </div>
    </div>
  )
}
