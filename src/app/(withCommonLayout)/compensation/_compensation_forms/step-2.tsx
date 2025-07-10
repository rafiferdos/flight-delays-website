"use client"

import RequiredSign from "@/components/form-components/RequiredSign"
import UInput from "@/components/form-components/UInput"
import { AutoComplete, AutoCompleteOption } from "@/components/ui/autocomplete"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import envConfig from "@/config/envConfig"
import useDebounce from "@/hooks/useDebounce"
import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react/dist/iconify.js"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useFormContext } from "react-hook-form"
import { toast } from "sonner"

export interface IAirlineSearchResult {
  id: string
  fleet_average_age: string
  airline_id: string
  callsign: string
  hub_code: string
  iata_code: string
  icao_code: string
  country_iso2: string
  date_founded: string
  iata_prefix_accounting: string
  airline_name: string
  country_name: string
  fleet_size: string
  status: string
  type: string
}

export default function CompensationStep2() {
  const router = useRouter()
  const currentPathname = usePathname()
  const searchParams = useSearchParams()

  const { control, watch, setValue } = useFormContext() ?? {}
  const [selectedAirlineIataCode, setSelectedAirlineIataCode] =
    useState<string>("")
  const selectedAirline = watch("airline")
  const airlineSearchParam = useSearchParams()?.get("airline") || ""

  const [airlineSearchLoading, setAirlineSearchLoading] =
    useState<boolean>(false)
  const [airlineSearchQuery, setAirlineSearchQuery] = useState<string>("")
  const [airlineSearchResults, setAirlineSearchResults] = useState<
    IAirlineSearchResult[]
  >([])

  const debouncedAirlineSearchQuery = useDebounce(airlineSearchQuery, 500)

  // Get airline search results based on debounced search query
  useEffect(() => {
    const fetchResults = async () => {
      if (debouncedAirlineSearchQuery?.length < 3) {
        return
      }

      const apiKey = envConfig.apiKey

      if (!apiKey) {
        toast.error("Server is experiencing issues. Please try again later.")
        return
      }

      setAirlineSearchLoading(true)
      try {
        const res = await fetch(
          envConfig.apiBaseUrl +
            `/airlines?access_key=${apiKey}&search=${debouncedAirlineSearchQuery}&limit=9999999`
        )
        const data = await res.json()
        setAirlineSearchResults(data?.data)
      } catch (error) {
        console.error("Fetch error:", error)
        setAirlineSearchResults([])
      } finally {
        setAirlineSearchLoading(false)
      }
    }

    if (debouncedAirlineSearchQuery.trim()) {
      fetchResults()
    }
  }, [debouncedAirlineSearchQuery])

  // Check if airline is found in search params
  useEffect(() => {
    if (airlineSearchParam) {
      setValue("airline", airlineSearchParam)
    } else {
      setValue("airline", "")
    }

    if (searchParams?.get("airlineIATACode")) {
      setSelectedAirlineIataCode(searchParams.get("airlineIATACode") || "")
    }
  }, [airlineSearchParam, searchParams, setValue])

  const handleRemoveParam = (paramToRemove: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete(paramToRemove)

    router.push(`?${params.toString()}`)
  }

  return (
    <div className="grid gap-4">
      <FormField
        control={control}
        name="airline"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel className="flex-center-start mb-0.5 gap-1">
              Which airline did you fly with? <RequiredSign />
            </FormLabel>
            {airlineSearchParam ? (
              <div className="bg-accent text-accent-foreground relative rounded-lg p-3">
                <p>{airlineSearchParam}</p>
                <button
                  type="button"
                  className="animate-in fade-in-50 absolute top-1/2 right-3.5 -translate-y-1/2"
                  onClick={() => handleRemoveParam("airline")}
                >
                  <Icon
                    icon="icon-park-solid:close-one"
                    height={18}
                    width={18}
                    className="text-gray-600 hover:text-gray-900"
                  />
                </button>
              </div>
            ) : (
              <FormControl>
                <AutoComplete
                  options={
                    airlineSearchResults?.length > 0
                      ? airlineSearchResults?.map((result) => ({
                          label: `${result?.airline_name} (${result?.iata_code || ""})`,
                          value: result?.iata_code,
                          searchText: result.airline_name
                        }))
                      : []
                  }
                  emptyMessage="No results."
                  placeholder="Search airline..."
                  isLoading={airlineSearchLoading}
                  // disabled={isDisabled}
                  onValueChange={(option) => {
                    field.onChange((option as AutoCompleteOption)?.label)
                    setSelectedAirlineIataCode(
                      (option as AutoCompleteOption)?.value as string
                    )

                    // Current url params
                    const urlParams = new URLSearchParams(searchParams)
                    urlParams.set(
                      "airline",
                      (option as AutoCompleteOption)?.label as string
                    )
                    urlParams.set(
                      "airlineIATACode",
                      (option as AutoCompleteOption)?.value as string
                    )

                    router.push(currentPathname + "?" + urlParams.toString())
                  }}
                  value={field.value}
                  onChange={(searchInput) => {
                    setAirlineSearchQuery(searchInput)
                  }}
                  searchTooltipText="Search by airline name"
                />
              </FormControl>
            )}

            <FormMessage />
          </FormItem>
        )}
      />

      {selectedAirline && (
        <UInput
          variant="primary"
          name="flightNumber"
          autoComplete="Flight number"
          label="Flight Number"
          placeholder="0030"
          className={cn(selectedAirlineIataCode && "pl-16")}
          prefixIcon={
            selectedAirlineIataCode ? (
              <div className="text-primary border-primary absolute top-1/2 left-2 -translate-y-1/2 rounded-md border px-3 py-1 text-sm font-bold uppercase">
                {selectedAirlineIataCode}
              </div>
            ) : null
          }
          required
        />
      )}

      {watch("flightNumber")?.length > 1 && (
        <UInput
          name="bookingReferenceNumber"
          label="Your Booking Reference Number / PNR"
          placeholder="Enter booking reference number"
          required
        />
      )}
    </div>
  )
}
