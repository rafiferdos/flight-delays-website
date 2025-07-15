"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useRouter } from "nextjs-toploader/app"
import { useState } from "react"

export interface IAirportSearchResult {
  airport_id: string
  airport_name: string
  city_iata_code: string
  country_iso2: string
  country_name: string
  geoname_id: string
  gmt: null
  iata_code: string
  icao_code: string
  id: string
  latitude: string
  longitude: string
  phone_number: string
  timezone: string
}

export default function HeroCompensationForm() {
  const [departureAirport, setDepartureAirport] = useState<string>("")
  const [arrivalAirport, setArrivalAirport] = useState<string>("")

  const router = useRouter()

  const handleSubmit = () => {
    router.push(
      "/compensation" +
        `?departureAirport=${departureAirport}&arrivalAirport=${arrivalAirport}`
    )
  }

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="rounded-2xl sm:border-transparent sm:bg-transparent">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Mobile Layout */}
          {/* Mobile Layout - Boarding Pass design */}
          <div className="block sm:hidden">
            <div className="overflow-hidden rounded-2xl shadow-lg backdrop-blur-sm">
              {/* Top section with inputs */}
              <div className="bg-white/90 p-4 space-y-2">
                {/* Departure Airport */}
                <div className="flex items-center border-b border-gray-200 px-4 py-4 bg-white/90 rounded-xl">
                  <Icon
                    icon="material-symbols:flight-takeoff"
                    className="mr-3 text-gray-400"
                    height={20}
                    width={20}
                  />
                  <Input
                    type="text"
                    placeholder="Departure airport"
                    value={departureAirport}
                    onChange={(e) => setDepartureAirport(e.target.value)}
                    className="border-none bg-transparent p-0 text-sm font-medium text-gray-600 placeholder:text-gray-400 focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>

                {/* Arrival Airport */}
                <div className="flex items-center px-4 py-4 bg-white/90 rounded-xl">
                  <Icon
                    icon="material-symbols:flight-land"
                    className="mr-3 text-gray-400"
                    height={20}
                    width={20}
                  />
                  <Input
                    type="text"
                    placeholder="Final destination airport"
                    value={arrivalAirport}
                    onChange={(e) => setArrivalAirport(e.target.value)}
                    className="border-none bg-transparent p-0 text-sm font-medium text-gray-600 placeholder:text-gray-400 focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </div>

              {/* Ticket perforation line */}
              <div className="relative bg-white/90 px-4 py-2">
                <div className="border-t border-dashed border-gray-400"></div>
                <div className="absolute top-1/2 -left-3 h-6 w-6 -translate-y-1/2 transform rounded-full bg-black/90"></div>
                <div className="absolute top-1/2 -right-3 h-6 w-6 -translate-y-1/2 transform rounded-full bg-slate-800"></div>
              </div>

              {/* Bottom section with button */}
              <div className="bg-white/90 p-4">
                <Button
                  className="h-12 w-full rounded-xl bg-blue-600 font-semibold text-white transition-colors hover:bg-blue-700"
                  onClick={handleSubmit}
                >
                  Check Compensation
                </Button>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Keep same as current */}
          <div className="hidden sm:block">
            <div className="flex items-center overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              {/* Departure Airport */}
              <div className="flex flex-1 items-center border-r border-gray-200 px-4 py-4">
                <Icon
                  icon="material-symbols:flight-takeoff"
                  className="mr-3 text-gray-400"
                  height={20}
                  width={20}
                />
                <Input
                  type="text"
                  placeholder="Departure airport"
                  value={departureAirport}
                  onChange={(e) => setDepartureAirport(e.target.value)}
                  className="border-none bg-transparent p-0 text-sm font-medium text-gray-600 placeholder:text-gray-400 focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              {/* Arrival Airport - NO border-r */}
              <div className="flex flex-1 items-center px-4 py-4">
                <Icon
                  icon="material-symbols:flight-land"
                  className="mr-3 text-gray-400"
                  height={20}
                  width={20}
                />
                <Input
                  type="text"
                  placeholder="Final destination airport"
                  value={arrivalAirport}
                  onChange={(e) => setArrivalAirport(e.target.value)}
                  className="border-none bg-transparent p-0 text-sm font-medium text-gray-600 placeholder:text-gray-400 focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              {/* Check Compensation Button */}
              <div className="px-2 py-2">
                <Button
                  className="h-12 rounded-xl bg-blue-600 px-6 font-semibold text-white transition-colors hover:bg-blue-700"
                  onClick={handleSubmit}
                >
                  Check Compensation
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
