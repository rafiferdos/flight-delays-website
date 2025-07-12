/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import UCheckbox from "@/components/form-components/UCheckbox"
import UDatePicker from "@/components/form-components/UDatePicker"
import UInput from "@/components/form-components/UInput"
import UPhoneInput from "@/components/form-components/UPhoneInput"
import URadioGroup from "@/components/form-components/URadioGroup"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
// import { cn } from "@/lib/utils"
import { Trash2 } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import { useFormContext } from "react-hook-form"

export default function CompensationStep3() {
  const { watch, setValue } = useFormContext() ?? {}
  const isAdditionalPassengerPresent = watch("additionalPassenger")

  const handleAddPassenger = () => {
    setValue("additionalPassengers", [
      ...(watch("additionalPassengers") || []),
      {
        id: `passenger-${Date.now()}`,
        name: "",
        isUnder18: false,
        dob: undefined
      }
    ])
  }

  const handleRemovePassenger = (index: number) => {
    const updatedPassengers = watch("additionalPassengers").filter(
      (_: any, i: number) => i !== index
    )
    setValue("additionalPassengers", updatedPassengers)
  }

  const additionalPassengers = watch("additionalPassengers")

  // Watch for changes in under18 checkboxes
  useEffect(() => {
    if (additionalPassengers) {
      additionalPassengers.forEach((passenger: any, index: number) => {
        const isUnder18 = watch(`additionalPassengers[${index}].isUnder18`)
        if (isUnder18 !== passenger.isUnder18) {
          // Clear DOB if switching from under18 to over18
          if (!isUnder18 && passenger.dob) {
            setValue(`additionalPassengers[${index}].dob`, undefined)
          }
        }
      })
    }
  }, [additionalPassengers, setValue, watch])

  return (
    <div className="grid gap-6">
      <UInput
        name="leadPassengerFullName"
        autoComplete="name"
        label="Lead Passenger Full Name"
        placeholder="Enter lead passenger full name"
        required
      />

      <UDatePicker name="dateOfBirth" label="Select Date of Birth" required />

      <UInput
        type="email"
        name="email"
        autoComplete="email"
        label="Email"
        placeholder="Enter email"
        required
      />

      <UPhoneInput
        name="contact"
        autoComplete="tel"
        label="Contact Number"
        placeholder="Enter contact number"
        required
      />

      <URadioGroup
        name="additionalPassenger"
        label="Did you have any additional passenger on your booking?"
        options={[
          {
            value: "Yes",
            label: "Yes"
          },
          {
            value: "No",
            label: "No"
          }
        ]}
        required
      />

      {isAdditionalPassengerPresent === "Yes" && (
        <div className="grid gap-4">
          {additionalPassengers?.map(
            (
              passenger: {
                id: string
                name: string
                isUnder18?: boolean
                dob?: Date | string
              },
              index: number
            ) => (
              <div
                key={passenger.id}
                className="grid gap-3 rounded-lg border border-gray-200 p-4"
              >
                <Label className="text-base font-semibold">
                  Additional Passenger {index + 1}
                </Label>

                <div className="grid gap-3">
                  <UCheckbox
                    name={`additionalPassengers[${index}].isUnder18`}
                    label="Under 18?"
                  />

                  {/* Name and DOB Fields - Side by side when under 18 is checked */}
                  {watch(`additionalPassengers[${index}].isUnder18`) ? (
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      <UInput
                        name={`additionalPassengers[${index}].name`}
                        placeholder="Enter full name"
                        label="Full Name"
                        required
                      />
                      <UDatePicker
                        name={`additionalPassengers[${index}].dob`}
                        placeholder="Select date of birth"
                        label="Date of Birth"
                        required
                      />
                    </div>
                  ) : (
                    <UInput
                      name={`additionalPassengers[${index}].name`}
                      placeholder="Enter full name"
                      label="Full Name"
                      required
                    />
                  )}
                </div>

                {index >= 3 && (
                  <Button
                    type="button"
                    variant="destructive"
                    size="lg"
                    className="mt-2 w-fit"
                    onClick={() => handleRemovePassenger(index)}
                  >
                    <Trash2 />
                    <span className="sr-only">Remove</span>
                  </Button>
                )}
              </div>
            )
          )}

          {/* Add More Button */}
          <button
            type="button"
            className="text-primary mt-2 cursor-pointer hover:underline"
            onClick={handleAddPassenger}
          >
            Add More Passenger
          </button>
        </div>
      )}

      <div className="mt-6">
        {/* Professional Terms Text - Italic and Smaller */}
        <div className="rounded-lg bg-gray-50 p-4 text-xs text-gray-600 italic">
          <p className="mb-2">
            By completing this form you consent to instruct Bolt and Co
            Solicitors to present a claim to the airline on behalf of the
            passengers listed above, which could include issuing proceedings.
            You understand that they work on a no-win-no-fee basis, which means
            if they aren't successful you won't have to pay anything. When they
            do recover compensation from the airline they will deduct their
            fees. You confirm your agreements to{" "}
            <Link
              href="/terms-conditions"
              className="font-medium text-blue-600 underline hover:text-blue-800"
            >
              these terms and conditions
            </Link>{" "}
            and you also, agree to digitally sign this letter of claim which
            will be sent to the airline in your name.
          </p>
        </div>
      </div>
    </div>
  )
}
