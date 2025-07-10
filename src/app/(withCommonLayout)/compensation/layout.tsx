import { Skeleton } from "@/components/ui/skeleton"
import { CompensationStats } from "@/constants/compensation-form.constants"
import { PropsWithChildren, Suspense } from "react"

export default function CompensationLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex-center min-h-dvh">
      <div className="w-11/12 space-y-8 lg:w-1/2 xl:w-1/3">
        <Suspense fallback={<FormSuspenseLoader />}>{children}</Suspense>

        {/* Some Stats */}
        <div className="bg-secondary-light border-secondary/20 space-y-4 rounded-xl border p-8">
          {CompensationStats.map((stat) => (
            <div
              key={stat.key}
              className="flex items-center justify-start gap-x-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
              >
                <path
                  d="M15.6686 11.4806L0.811792 4.62366C0.575226 4.51624 0.292947 4.58024 0.12838 4.78366C0.0478527 4.88219 0.00273109 5.00491 0.000244505 5.13214C-0.00224208 5.25937 0.0380503 5.38375 0.114666 5.48536L5.00026 11.9995L0.114666 18.5136C-0.0430445 18.7227 -0.0373304 19.013 0.127237 19.2153C0.238091 19.3536 0.403802 19.4279 0.571797 19.4279C0.652938 19.4279 0.734079 19.4107 0.810649 19.3753L15.6674 12.5183C15.8709 12.4246 16 12.2223 16 11.9995C16 11.7766 15.8708 11.5744 15.6686 11.4806Z"
                  fill="url(#paint0_linear_5270_1547)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_5270_1547"
                    x1="7.99999"
                    y1="4.57214"
                    x2="7.99999"
                    y2="19.4279"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.672847" stopColor="#0180A2" />
                    <stop offset="1" stopColor="#01B8E9" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="font-light text-gray-800">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const FormSuspenseLoader = () => {
  return (
    <div className="rounded-xl border bg-white p-6 shadow">
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
