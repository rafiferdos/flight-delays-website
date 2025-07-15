"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import envConfig from "@/config/envConfig"
import useDebounce from "@/hooks/useDebounce"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useRouter } from "nextjs-toploader/app"
import { useEffect, useState } from "react"
import { toast } from "sonner"

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

  // Search States
  const router = useRouter()
  const [searchLoading, setSearchLoading] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [searchResults, setSearchResults] = useState<IAirportSearchResult[]>([])

  const debouncedSearchQuery = useDebounce(searchQuery, 500)

  // Get search results based on debounced search query
  useEffect(() => {
    const fetchResults = async () => {
      if (debouncedSearchQuery?.length < 3) {
        return
      }

      const apiKey = envConfig.apiKey

      if (!apiKey) {
        toast.error("Server is experiencing issues. Please try again later.")
        return
      }

      setSearchLoading(true)
      try {
        const res = await fetch(
          envConfig.apiBaseUrl +
            `/airports?access_key=${apiKey}&search=${debouncedSearchQuery}&limit=9999999`
        )
        const data = await res.json()

        setSearchResults(data?.data)
      } catch (error) {
        console.error("Fetch error:", error)
        setSearchResults([])
      } finally {
        setSearchLoading(false)
      }
    }

    if (debouncedSearchQuery.trim()) {
      fetchResults()
    }
  }, [debouncedSearchQuery])

  const handleSubmit = () => {
    router.push(
      "/compensation" +
        `?departureAirport=${departureAirport}&arrivalAirport=${arrivalAirport}`
    )
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4">
      <div className="rounded-2xl p-2">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Mobile Layout */}
          <div className="block sm:hidden">
            <div className="space-y-3">
              {/* Departure Airport */}
              <div className="flex items-center overflow-hidden rounded-xl border border-gray-200 bg-white px-4 py-4 shadow-sm">
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
              <div className="flex items-center overflow-hidden rounded-xl border border-gray-200 bg-white px-4 py-4 shadow-sm">
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
              <Button
                className="h-12 w-full rounded-xl bg-blue-600 font-semibold text-white transition-colors hover:bg-blue-700"
                onClick={handleSubmit}
              >
                Check Compensation
              </Button>
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
