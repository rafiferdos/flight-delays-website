"use client"

import RequiredSign from "@/components/form-components/RequiredSign"
import UDatePicker from "@/components/form-components/UDatePicker"
import { IAirportSearchResult } from "@/components/home-sections/Hero/_components/HeroCompensationForm"
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
import { Icon } from "@iconify/react/dist/iconify.js"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useFormContext } from "react-hook-form"
import { toast } from "sonner"

export default function CompensationStep1() {
  const { control, setValue } = useFormContext() ?? {}
  const searchParams = useSearchParams()
  const router = useRouter()

  const departureAirportSearchParam = useSearchParams()?.get("departureAirport")
  const arrivalAirportSearchParam = useSearchParams()?.get("arrivalAirport")

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

  const handleRemoveParam = (paramToRemove: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete(paramToRemove)

    router.push(`?${params.toString()}`)
  }

  useEffect(() => {
    if (departureAirportSearchParam) {
      setValue("departureAirport", departureAirportSearchParam)
    } else {
      setValue("departureAirport", "")
    }
    if (arrivalAirportSearchParam) {
      setValue("arrivalAirport", arrivalAirportSearchParam)
    } else {
      setValue("arrivalAirport", "")
    }
  }, [departureAirportSearchParam, arrivalAirportSearchParam, setValue])

  return (
    <div className="grid gap-4">
      <FormField
        control={control}
        name={"departureAirport"}
        render={({ field, fieldState: { error } }) => (
          <FormItem className="w-full">
            <FormLabel className="flex-center-start mb-0.5 gap-x-1">
              Select Departure Airport <RequiredSign />
            </FormLabel>
            {departureAirportSearchParam ? (
              <div className="bg-accent text-accent-foreground relative rounded-lg p-3">
                <p>{departureAirportSearchParam}</p>
                <button
                  type="button"
                  className="animate-in fade-in-50 absolute top-1/2 right-3.5 -translate-y-1/2"
                  onClick={() => handleRemoveParam("departureAirport")}
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
                    searchResults?.length > 0
                      ? searchResults?.map((result) => ({
                          label: `${result?.airport_name} (${result?.iata_code})`,
                          value: result.iata_code,
                          searchText: result.airport_name
                        }))
                      : []
                  }
                  emptyMessage="No results."
                  placeholder={"Search airport..."}
                  isLoading={searchLoading}
                  // disabled={isDisabled}
                  onValueChange={(option) =>
                    field.onChange((option as AutoCompleteOption)?.label)
                  }
                  onChange={(searchInput) => {
                    setSearchQuery(searchInput)
                  }}
                  //
                  // value={field.value}
                  icon={
                    <Icon
                      icon={"mdi:airplane-takeoff"}
                      className="text-gray-400"
                      height={20}
                      width={20}
                    />
                  }
                  isAriaInvalid={error !== undefined}
                  searchTooltipText="Search by airport name, not by city"
                />
              </FormControl>
            )}

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name={"arrivalAirport"}
        render={({ field, fieldState: { error } }) => (
          <FormItem className="w-full">
            <FormLabel className="flex-center-start mb-0.5 gap-x-1">
              Select Arrival Airport <RequiredSign />
            </FormLabel>
            {arrivalAirportSearchParam ? (
              <div className="bg-accent text-accent-foreground relative rounded-lg p-3">
                <p>{arrivalAirportSearchParam}</p>
                <button
                  type="button"
                  className="animate-in fade-in-50 absolute top-1/2 right-3.5 -translate-y-1/2"
                  onClick={() => handleRemoveParam("arrivalAirport")}
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
                    searchResults?.length > 0
                      ? searchResults?.map((result) => ({
                          label: `${result?.airport_name} (${result?.iata_code})`,
                          value: result.iata_code,
                          searchText: result.airport_name
                        }))
                      : []
                  }
                  emptyMessage="No results."
                  placeholder={"Search airport..."}
                  isLoading={searchLoading}
                  // disabled={isDisabled}
                  onValueChange={(option) =>
                    field.onChange((option as AutoCompleteOption)?.label)
                  }
                  onChange={(searchInput) => {
                    setSearchQuery(searchInput)
                  }}
                  //
                  // value={field.value}
                  icon={
                    <Icon
                      icon={"mdi:airplane-takeoff"}
                      className="text-gray-400"
                      height={20}
                      width={20}
                    />
                  }
                  isAriaInvalid={error !== undefined}
                  searchTooltipText="Search by airport name, not by city"
                />
              </FormControl>
            )}
            <FormMessage />
          </FormItem>
        )}
      />

      <UDatePicker
        name="departureDate"
        label="Select Departure Date"
        required
      />
    </div>
  )
}
