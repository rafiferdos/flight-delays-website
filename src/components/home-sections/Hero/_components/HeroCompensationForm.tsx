"use client"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import envConfig from "@/config/envConfig"
import useDebounce from "@/hooks/useDebounce"
import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react/dist/iconify.js"
import { Check, ChevronsUpDown } from "lucide-react"
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
  const [departureOpen, setDepartureOpen] = useState(false)
  const [arrivalOpen, setArrivalOpen] = useState(false)

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
    const departureLabel =
      searchResults.find((r) => r.iata_code === departureAirport)
        ?.airport_name || ""
    const arrivalLabel =
      searchResults.find((r) => r.iata_code === arrivalAirport)?.airport_name ||
      ""

    router.push(
      "/compensation" +
        `?departureAirport=${departureLabel}&arrivalAirport=${arrivalLabel}`
    )
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-full">
      {/* Inputs and Button on Same Line */}
      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Departure Airport */}
        <div className="space-y-2">
          <Label className="block text-sm font-medium text-white/90">
            Select Departure Airport
          </Label>
          <div className="flex h-12 items-center rounded-xl bg-white px-4 py-3 shadow-sm">
            <Icon
              icon="material-symbols:flight-takeoff"
              className="mr-3 text-gray-400"
              height={20}
              width={20}
            />
            <Popover open={departureOpen} onOpenChange={setDepartureOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  role="combobox"
                  aria-expanded={departureOpen}
                  className="w-full justify-between border-none bg-transparent p-0 text-sm font-medium text-gray-700 hover:bg-transparent focus:ring-0 focus:ring-offset-0"
                >
                  {departureAirport
                    ? searchResults.find(
                        (airport) => airport.iata_code === departureAirport
                      )?.airport_name
                    : "Search airport..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[300px] p-0">
                <Command>
                  <CommandInput
                    placeholder="Search airport..."
                    onValueChange={setSearchQuery}
                    className="border-none outline-none focus:ring-0"
                  />
                  <CommandList>
                    <CommandEmpty>
                      {searchLoading ? "Loading..." : "No airport found."}
                    </CommandEmpty>
                    <CommandGroup>
                      {searchResults?.map((airport) => (
                        <CommandItem
                          key={airport.iata_code}
                          value={airport.iata_code}
                          onSelect={(currentValue) => {
                            setDepartureAirport(
                              currentValue === departureAirport
                                ? ""
                                : currentValue
                            )
                            setDepartureOpen(false)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              departureAirport === airport.iata_code
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {airport.airport_name} ({airport.iata_code})
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Arrival Airport */}
        <div className="space-y-2">
          <Label className="block text-sm font-medium text-white/90">
            Select Arrival Airport
          </Label>
          <div className="flex h-12 items-center rounded-xl bg-white px-4 py-3 shadow-sm">
            <Icon
              icon="material-symbols:flight-land"
              className="mr-3 text-gray-400"
              height={20}
              width={20}
            />
            <Popover open={arrivalOpen} onOpenChange={setArrivalOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  role="combobox"
                  aria-expanded={arrivalOpen}
                  className="w-full justify-between border-none bg-transparent p-0 text-sm font-medium text-gray-700 hover:bg-transparent focus:ring-0 focus:ring-offset-0"
                >
                  {arrivalAirport
                    ? searchResults.find(
                        (airport) => airport.iata_code === arrivalAirport
                      )?.airport_name
                    : "Search airport..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[300px] p-0">
                <Command>
                  <CommandInput
                    placeholder="Search airport..."
                    onValueChange={setSearchQuery}
                    className="border-none outline-none focus:ring-0"
                  />
                  <CommandList>
                    <CommandEmpty>
                      {searchLoading ? "Loading..." : "No airport found."}
                    </CommandEmpty>
                    <CommandGroup>
                      {searchResults?.map((airport) => (
                        <CommandItem
                          key={airport.iata_code}
                          value={airport.iata_code}
                          onSelect={(currentValue) => {
                            setArrivalAirport(
                              currentValue === arrivalAirport
                                ? ""
                                : currentValue
                            )
                            setArrivalOpen(false)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              arrivalAirport === airport.iata_code
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {airport.airport_name} ({airport.iata_code})
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Check Compensation Button */}
        <div className="flex flex-col justify-end">
          <Button
            variant="primary"
            size="lg"
            className="h-12 w-full rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            onClick={handleSubmit}
          >
            Check Compensation
          </Button>
        </div>
      </div>
    </form>
  )
}
