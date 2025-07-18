import { Skeleton } from "@/components/ui/skeleton"
import { PropsWithChildren, Suspense } from "react"

export default function CompensationLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex-center min-h-dvh bg-gray-50">
      <div className="w-11/12 space-y-8 lg:w-1/2 xl:w-1/3">
        <Suspense fallback={<FormSuspenseLoader />}>{children}</Suspense>

        {/* Martin Lewis Recommendation - Creative Speech Bubble */}
        <div className="relative">
          {/* Background glow effect */}
          <div className="absolute inset-0 -m-3 animate-pulse rounded-2xl bg-gradient-to-r from-green-100/50 via-blue-100/50 to-green-100/50 blur-sm"></div>

          {/* Speech bubble container */}
          <div className="relative rounded-2xl border border-green-200/50 bg-gradient-to-r from-green-50 to-blue-50 p-6 shadow-lg">
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 h-4 w-4 animate-ping rounded-full bg-gradient-to-br from-green-400 to-blue-500 opacity-75"></div>
            <div className="absolute -bottom-2 -left-2 h-3 w-3 animate-pulse rounded-full bg-gradient-to-br from-blue-400 to-green-500"></div>

            {/* Content */}
            <div className="flex items-center gap-4">
              {/* Profile icon */}
              <div className="flex-shrink-0">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-blue-600 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {/* Badge indicator */}
                  <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-3 w-3 text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Text content */}
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <p className="bg-gradient-to-r from-green-700 via-blue-700 to-green-700 bg-clip-text text-lg font-bold text-transparent">
                    "Recommended by Martin Lewis"
                  </p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-sm font-medium text-green-800">
                  Money Saving Expert
                </p>
                <p className="mt-1 text-xs text-blue-700">
                  Trusted by millions of UK consumers
                </p>
              </div>
            </div>

            {/* Speech bubble tail */}
            <div className="absolute bottom-0 left-8 translate-y-full transform">
              <div className="h-0 w-0 border-t-[15px] border-r-[15px] border-l-[15px] border-t-green-50 border-r-transparent border-l-transparent"></div>
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
