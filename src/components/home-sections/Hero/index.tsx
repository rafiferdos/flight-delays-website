import heroBg from "@/assets/images/home/hero/hero-bg.png"
import ResponsiveContainer from "@/components/containers/ResponsiveContainer"
import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react"
import Image from "next/image"
import CheckCompensationForm from "./_components/HeroCompensationForm"

//* Constant Data
const Facilities = [
  "Free to Check",
  "Only Takes 2 minutes",
  "Fast payouts, hassle free"
]

export default function Hero() {
  return (
    <section className="px-24 py-4">
      <div className="relative grid place-items-center overflow-x-hidden lg:min-h-[90dvh]">
        {/* ------------------ Bg Image ---------------------- */}
        <Image
          src={heroBg}
          alt="Background image showing a happy couple in an airport"
          fill
          placeholder="blur"
          priority={true}
          sizes="(max-width: 768px) 33vw, (max-width: 1200px) 75vw, 100vw"
          className="absolute inset-0 -z-10 h-full w-full rounded-xl object-cover object-[35%] lg:object-center"
        />
        {/* --------------------------------------------------- */}

        <ResponsiveContainer className="flex h-full flex-col items-center justify-center gap-y-8 py-8 text-center">
          {/* ------------------ Trustpilot Banner ---------------------- */}
          <div className="w-full max-w-4xl">
            <div className="flex items-center justify-center gap-x-3">
              <Icon
                icon="simple-icons:trustpilot"
                color="#00b67a"
                height={20}
                width={20}
              />
              <span className="text-sm font-medium text-white">Trustpilot</span>
              <span className="text-sm font-semibold text-white">
                Excellent
              </span>
              <div className="flex gap-x-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="rounded bg-[#00b67a] p-1">
                    <Icon
                      icon="material-symbols:star"
                      color="white"
                      height={16}
                      width={16}
                    />
                  </div>
                ))}
                <div className="relative rounded bg-gray-300 p-1">
                  <Icon
                    icon="material-symbols:star"
                    color="white"
                    height={16}
                    width={16}
                  />
                  <div
                    className="absolute inset-0 rounded bg-[#00b67a]"
                    style={{ clipPath: "inset(0 50% 0 0)" }}
                  >
                    <div className="p-1">
                      <Icon
                        icon="material-symbols:star"
                        color="white"
                        height={16}
                        width={16}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------ Main Content ---------------------- */}
          <div className="w-full max-w-4xl text-white">
            <h1 className="lg:text-h1 text-h2 mb-4 leading-tight font-bold lg:leading-16 2xl:leading-20">
              Did you have a delayed or cancelled flight?
            </h1>

            <h2 className="text-h3 lg:text-h2 mb-6 font-bold text-[#7fdaf2]">
              Get up to £520!
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-lg font-medium text-white/90">
              Claim up to £520 compensation per passenger- No matter the ticket
              price! At Flight Delay Claims, we{" "}
              <span className="font-extrabold text-[#7fdaf2]">simplify</span>{" "}
              the process taking the stress off your shoulders whilst ensuring
              your claim has the best chance of{" "}
              <span className="font-extrabold text-[#7fdaf2]">success</span>.
            </p>
          </div>

          {/* ------------------ Form Section ---------------------- */}
          <div className="w-full max-w-4xl">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
              {/* Use Original Form Component for Functionality */}
              <CheckCompensationForm />

              {/* ------------------ Boarding Pass Option ---------------------- */}
              <div className="mt-4 flex items-center gap-x-2">
                <span className="text-sm font-medium text-white/90">
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
                  <span className="text-sm font-medium">Boarding pass</span>
                </Button>
              </div>
            </div>
          </div>

          {/* ------------------ Facilities ---------------------- */}
          <div className="flex w-full max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:justify-between">
            {Facilities.map((facility) => (
              <div
                key={facility}
                className="flex items-center gap-x-2 text-white"
              >
                <Icon
                  icon="lets-icons:check-fill"
                  color="var(--secondary)"
                  height={25}
                  width={25}
                />
                <span className="text-lg font-medium">{facility}</span>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
