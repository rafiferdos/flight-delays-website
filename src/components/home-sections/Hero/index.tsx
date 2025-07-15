import heroBg from "@/assets/images/home/hero/hero-bg.png"
import ResponsiveContainer from "@/components/containers/ResponsiveContainer"
import { Icon } from "@iconify/react"
import Image from "next/image"
import CheckCompensationForm from "./_components/HeroCompensationForm"

//* Constant Data
const Facilities = [
  "Free compensation check",
  "Fast & Risk-Free",
  "Highest Success Rate"
]

export default function Hero() {
  return (
    <section className="px-4 py-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 2xl:px-48">
      <div className="relative grid min-h-[80dvh] place-items-center overflow-x-hidden sm:min-h-[85dvh] lg:min-h-[85dvh]">
        {/* ------------------ Bg Image ---------------------- */}
        <Image
          src={heroBg}
          alt="Background image showing a happy couple in an airport"
          fill
          placeholder="blur"
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 100vw"
          className="absolute inset-0 -z-10 h-full w-full rounded-xl object-cover object-[35%] sm:object-[40%] lg:object-center"
        />
        {/* --------------------------------------------------- */}

        <ResponsiveContainer className="flex h-full flex-col items-center justify-center gap-y-6 py-6 text-center sm:gap-y-6 sm:py-8">
          {/* ------------------ Trustpilot Banner ---------------------- */}
          <div className="w-full max-w-4xl">
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 sm:gap-x-3">
              <Icon
                icon="simple-icons:trustpilot"
                color="#00b67a"
                height={18}
                width={18}
                className="sm:h-5 sm:w-5"
              />
              <span className="text-xs font-medium text-white sm:text-sm">
                Trustpilot
              </span>
              <span className="text-xs font-semibold text-white sm:text-sm">
                Excellent
              </span>
              <div className="flex gap-x-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-[#00b67a]">
                    <Icon
                      icon="material-symbols:star"
                      color="white"
                      height={14}
                      width={14}
                      className="sm:h-4 sm:w-4"
                    />
                  </div>
                ))}
                <div className="relative bg-gray-300">
                  <Icon
                    icon="material-symbols:star"
                    color="white"
                    height={14}
                    width={14}
                    className="sm:h-4 sm:w-4"
                  />
                  <div
                    className="absolute inset-0 bg-[#00b67a]"
                    style={{ clipPath: "inset(0 50% 0 0)" }}
                  >
                    <div className="">
                      <Icon
                        icon="material-symbols:star"
                        color="white"
                        height={14}
                        width={14}
                        className="sm:h-4 sm:w-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------ Main Content ---------------------- */}
          <div className="w-full max-w-3xl text-white">
            <h1 className="lg:text-h1 mb-3 text-2xl leading-tight font-bold sm:mb-4 sm:text-3xl md:text-4xl lg:leading-16 2xl:leading-20">
              Did you have a delayed or cancelled flight?
            </h1>

            <h2 className="lg:text-h2 mb-4 text-xl font-bold text-[#7fdaf2] sm:mb-6 sm:text-2xl md:text-3xl">
              Get up to £520!
            </h2>

            <p className="mx-auto mb-6 max-w-xl px-2 text-sm font-medium text-white/90 sm:mb-8 sm:px-0 sm:text-base lg:text-lg">
              Claiming compensation is easier than you think. We handle{" "}
              <span className="font-extrabold text-[#7fdaf2]">everything</span>{" "}
              and you get{" "}
              <span className="font-extrabold text-[#7fdaf2]">paid</span>.
            </p>
          </div>

          {/* ------------------ Form Section ---------------------- */}
          <div className="w-full max-w-4xl">
            <div className="rounded-xl border border-white/10 bg-white/5 shadow-2xl sm:rounded-2xl">
              {/* check compensation gradient text */}
              {/* <h3 className="mb-6 text-center text-2xl font-bold text-[#7fdaf2] sm:mb-8 sm:text-3xl md:text-4xl">
                Check Compensation
              </h3> */}
              {/* Use Original Form Component for Functionality */}
              <CheckCompensationForm />

              {/* ------------------ Boarding Pass Option ---------------------- */}
              {/* <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-x-2">
                <span className="text-xs font-medium text-white/90 sm:text-sm">
                  OR FAST CHECK WITH
                </span>
                <Button
                  variant="ghost"
                  className="flex h-auto items-center gap-x-2 rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-white backdrop-blur-sm transition-all duration-200 hover:bg-black/30 hover:text-white"
                >
                  <Icon
                    icon="material-symbols:airplane-ticket"
                    color="white"
                    height={16}
                    width={16}
                  />
                  <span className="text-xs font-medium sm:text-sm">
                    Boarding pass
                  </span>
                </Button>
              </div> */}
            </div>
          </div>

          {/* ------------------ Facilities ---------------------- */}
          <div className="flex w-full max-w-4xl flex-col items-center justify-center gap-y-3 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-4 lg:justify-between lg:gap-x-8">
            {Facilities.map((facility) => (
              <div
                key={facility}
                className="flex items-center gap-x-2 text-white"
              >
                <Icon
                  icon="lets-icons:check-fill"
                  color="var(--secondary)"
                  height={20}
                  width={20}
                  className="sm:h-6 sm:w-6"
                />
                <span className="text-base font-medium sm:text-lg">
                  {facility}
                </span>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
