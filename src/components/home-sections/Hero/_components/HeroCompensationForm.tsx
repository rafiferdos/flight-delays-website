"use client"

import { AutoComplete, AutoCompleteOption } from "@/components/ui/autocomplete"
import { Button } from "@/components/ui/button"
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
  const [departureAirport, setDepartureAirport] = useState<
    AutoCompleteOption | undefined
  >(undefined)
  const [arrivalAirport, setArrivalAirport] = useState<
    AutoCompleteOption | undefined
  >(undefined)

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
    // Set arrival and departure airport value in search params for
    // retrieving compensation details from compensation form page
    router.push(
      "/compensation" +
        `?departureAirport=${departureAirport?.label || ""}&arrivalAirport=${arrivalAirport?.label || ""}`
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
              <div className="space-y-2 bg-white/90 p-4">
                {/* Departure Airport */}
                <div className="flex items-center rounded-xl border-b border-gray-200 bg-white/90 px-4 py-4">
                  <AutoComplete
                    options={
                      searchResults?.length > 0
                        ? searchResults?.map((result) => ({
                            label: `${result?.airport_name} (${result?.iata_code})`,
                            value: result.iata_code,
                            searchText: result.airport_name
                          }))
                        : []
                    }
                    emptyMessage="No results."
                    placeholder="Departure airport"
                    onValueChange={setDepartureAirport}
                    value={departureAirport}
                    onChange={(searchInput) => {
                      setSearchQuery(searchInput)
                    }}
                    isLoading={searchLoading}
                    icon={
                      <Icon
                        icon="material-symbols:flight-takeoff"
                        className="text-gray-400"
                        height={20}
                        width={20}
                      />
                    }
                    searchTooltipText="Search by airport name, not by city"
                  />
                </div>

                {/* Arrival Airport */}
                <div className="flex items-center rounded-xl bg-white/90 px-4 py-4">
                  <AutoComplete
                    options={
                      searchResults?.length > 0
                        ? searchResults?.map((result) => ({
                            label: `${result?.airport_name} (${result?.iata_code})`,
                            value: result.iata_code,
                            searchText: result.airport_name
                          }))
                        : []
                    }
                    emptyMessage="No results."
                    placeholder="Final destination airport"
                    onValueChange={setArrivalAirport}
                    value={arrivalAirport}
                    onChange={(searchInput) => {
                      setSearchQuery(searchInput)
                    }}
                    isLoading={searchLoading}
                    icon={
                      <Icon
                        icon="material-symbols:flight-land"
                        className="text-gray-400"
                        height={20}
                        width={20}
                      />
                    }
                    searchTooltipText="Search by airport name, not by city"
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
                <AutoComplete
                  options={
                    searchResults?.length > 0
                      ? searchResults?.map((result) => ({
                          label: `${result?.airport_name} (${result?.iata_code})`,
                          value: result.iata_code,
                          searchText: result.airport_name
                        }))
                      : []
                  }
                  emptyMessage="No results."
                  placeholder="Departure airport"
                  onValueChange={setDepartureAirport}
                  value={departureAirport}
                  onChange={(searchInput) => {
                    setSearchQuery(searchInput)
                  }}
                  isLoading={searchLoading}
                  icon={
                    <Icon
                      icon="material-symbols:flight-takeoff"
                      className="text-gray-400"
                      height={20}
                      width={20}
                    />
                  }
                  searchTooltipText="Search by airport name, not by city"
                />
              </div>

              {/* Arrival Airport - NO border-r */}
              <div className="flex flex-1 items-center px-4 py-4">
                <AutoComplete
                  options={
                    searchResults?.length > 0
                      ? searchResults?.map((result) => ({
                          label: `${result?.airport_name} (${result?.iata_code})`,
                          value: result.iata_code,
                          searchText: result.airport_name
                        }))
                      : []
                  }
                  emptyMessage="No results."
                  placeholder="Final destination airport"
                  onValueChange={setArrivalAirport}
                  value={arrivalAirport}
                  onChange={(searchInput) => {
                    setSearchQuery(searchInput)
                  }}
                  isLoading={searchLoading}
                  icon={
                    <Icon
                      icon="material-symbols:flight-land"
                      className="text-gray-400"
                      height={20}
                      width={20}
                    />
                  }
                  searchTooltipText="Search by airport name, not by city"
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
