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
import { isValidPhoneNumber } from "react-phone-number-input"
import { z } from "zod"

export const compensationFormValidationSchema = z.object({
  departureAirport: z
    .string({ required_error: "Please select an airport" })
    .min(1, "Please select an airport"),
  arrivalAirport: z
    .string({ required_error: "Please select an airport" })
    .min(1, "Please select an airport"),
  departureDate: z.date({
    required_error: "Please select a date",
    invalid_type_error: "Please select a date"
  }),
  airline: z
    .string({ required_error: "Please select airline" })
    .min(1, "Please select airline"),
  flightNumber: z
    .string({ required_error: "Please enter your flight number" })
    .min(1, "Please enter your flight number"),
  claimType: z
    .string({ required_error: "Please select claim type" })
    .min(1, "Please select claim type"),
  additionalComments: z.string().optional(),
  leadPassengerFullName: z
    .string({ required_error: "Please enter passenger name" })
    .min(1, "Please enter passenger name"),
  dateOfBirth: z.date({
    required_error: "Please enter date of birth",
    invalid_type_error: "Please enter date of birth"
  }),
  email: z
    .string({ required_error: "Please enter email address" })
    .email("Please enter a valid email address"),
  contact: z
    .string({ required_error: "Please enter contact number" })
    .refine(isValidPhoneNumber, { message: "Invalid phone number!" })
    .or(z.literal("")),
  additionalPassenger: z.string({
    required_error: "Please select yes/no"
  }),
  additionalPassengers: z
    .array(
      z.object({
        id: z.string(),
        name: z.string().optional(),
        dob: z.date().optional(),
        isUnder18: z.boolean().optional()
      })
    )
    .optional(),
  acceptTerms: z.boolean().refine((val) => val === true, "")
})

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



  return (
    <div className="grid gap-6">
      {/* Airline Selection */}
      <FormField
        control={control}
        name="airline"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex-center-start mb-0.5 gap-1">
              Choose airline <RequiredSign />
            </FormLabel>
            <FormControl>
              <AutoComplete
                options={
                  airlineSearchResults?.length
                    ? airlineSearchResults
                        .filter(
                          (result) =>
                            result?.airline_name && result?.airline_name.trim()
                        )
                        .map((result, index) => ({
                          label: `${result?.airline_name} (${result?.iata_code || ""})`,
                          value:
                            result?.iata_code ||
                            `airline-${result.id}-${index}`,
                          searchText: result.airline_name
                        }))
                    : []
                }
                emptyMessage="No results."
                placeholder="Search airline..."
                isLoading={airlineSearchLoading}
                onValueChange={(option) => {
                  field.onChange((option as AutoCompleteOption)?.label)
                  setSelectedAirlineIataCode(
                    (option as AutoCompleteOption)?.value as string
                  )

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
                icon={
                  <Icon
                    icon={"mdi:airplane"}
                    className="text-gray-400"
                    height={20}
                    width={20}
                  />
                }
                searchTooltipText="Search by airline name"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Flight Number */}
      {selectedAirline && (
        <div className="space-y-2">
          <FormLabel className="flex-center-start mb-0.5 gap-1">
            Flight Number <RequiredSign />
          </FormLabel>
          <div className="flex items-stretch">
            {selectedAirlineIataCode && (
              <div className="border-primary bg-primary/10 text-primary flex items-center justify-center rounded-l-md border border-r-0 px-3 py-2 text-sm font-bold uppercase">
                {selectedAirlineIataCode}
              </div>
            )}
            <div className="flex-1">
              <UInput
                variant="primary"
                name="flightNumber"
                autoComplete="Flight number"
                placeholder="0030"
                className={cn(
                  selectedAirlineIataCode && "rounded-l-none border-l-0"
                )}
                required
              />
            </div>
          </div>
        </div>
      )}

      {/* Claim Type - Big Boxed Radio Options */}
      {watch("flightNumber")?.length > 1 && (
        <div className="space-y-4">
          <FormLabel className="flex-center-start mb-0.5 gap-1">
            Reason for your compensation claim <RequiredSign />
          </FormLabel>
          <div className="grid gap-4 md:grid-cols-2">
            <FormField
              control={control}
              name="claimType"
              render={({ field }) => (
                <>
                  <div
                    className={cn(
                      "cursor-pointer rounded-lg border-2 p-4 transition-all hover:border-blue-300",
                      field.value === "delay"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 bg-white"
                    )}
                    onClick={() => field.onChange("delay")}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "h-4 w-4 rounded-full border-2 transition-all",
                          field.value === "delay"
                            ? "border-blue-500 bg-blue-500"
                            : "border-gray-300"
                        )}
                      >
                        {field.value === "delay" && (
                          <div className="h-full w-full rounded-full bg-white scale-50" />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          Delay for 3 hours or more
                        </p>
                        <p className="text-sm text-gray-600">
                          Flight was delayed by 3+ hours
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={cn(
                      "cursor-pointer rounded-lg border-2 p-4 transition-all hover:border-blue-300",
                      field.value === "cancelled"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 bg-white"
                    )}
                    onClick={() => field.onChange("cancelled")}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "h-4 w-4 rounded-full border-2 transition-all",
                          field.value === "cancelled"
                            ? "border-blue-500 bg-blue-500"
                            : "border-gray-300"
                        )}
                      >
                        {field.value === "cancelled" && (
                          <div className="h-full w-full rounded-full bg-white scale-50" />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          Cancelled Flight
                        </p>
                        <p className="text-sm text-gray-600">
                          Flight was cancelled by the airline
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            />
          </div>
        </div>
      )}

      {/* Additional Comments */}
      {watch("claimType") && (
        <div className="space-y-2">
          <FormLabel className="flex-center-start mb-0.5 gap-1">
            Additional Comments
          </FormLabel>
          <p className="text-sm text-gray-600 mb-2">
            Please tell us more about your delay or cancellation (optional)
          </p>
          <FormField
            control={control}
            name="additionalComments"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <textarea
                    {...field}
                    rows={4}
                    placeholder="e.g., Flight was delayed due to technical issues, we waited at the gate for 4 hours..."
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      )}
    </div>
  )
}
