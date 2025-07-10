"use client"

import { AutoComplete, AutoCompleteOption } from "@/components/ui/autocomplete"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
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
    // if (debouncedSearchQuery?.length > 0) {
    //   setShowDepartureTooltip(false)
    // }

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
    <>
      <div className="text-h3 text-gradient mb-5 font-semibold">
        Check Compensation
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        <div className="grid gap-1">
          <Label className="text-base text-black/80">
            Select Departure Airport
          </Label>

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
            placeholder="Search airport..."
            onValueChange={setDepartureAirport}
            value={departureAirport}
            onChange={(searchInput) => {
              setSearchQuery(searchInput)
            }}
            isLoading={searchLoading}
            icon={
              <Icon
                icon="mdi:airplane-takeoff"
                className="text-gray-400"
                height={20}
                width={20}
              />
            }
            searchTooltipText="Search by airport name, not by city"
          />
        </div>

        <div className="grid gap-1">
          <Label className="flex items-start gap-3 text-base text-black/80">
            Select Arrival Airport
          </Label>
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
            placeholder="Search airport..."
            // isLoading={isLoading}
            // disabled={isDisabled}
            onValueChange={setArrivalAirport}
            value={arrivalAirport}
            onChange={(searchInput) => {
              setSearchQuery(searchInput)
            }}
            isLoading={searchLoading}
            icon={
              <Icon
                icon="mdi:airplane-landing"
                className="text-gray-400"
                height={20}
                width={20}
              />
            }
            searchTooltipText="Search by airport name, not by city"
          />
        </div>

        <Button
          variant="primary"
          size="xl"
          className="w-full"
          onClick={handleSubmit}
        >
          Check Compensation
        </Button>
      </form>
    </>
  )
}
