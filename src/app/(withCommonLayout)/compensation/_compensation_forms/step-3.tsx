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
      {/* Good News Message */}
      <div className="mb-2 rounded-lg border border-green-200 bg-green-50 p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-green-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-green-800">
              <span className="font-semibold">Good news!</span> Based on the
              information you have provided it looks like you may be eligible
              for compensation.
            </p>
          </div>
        </div>
      </div>

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

                  <UCheckbox
                    name={`additionalPassengers[${index}].isUnder18`}
                    label="Under 18?"
                  />
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

      <div className="mt-1">
        {/* Professional Terms Text with Checkbox */}
        <div className="rounded-lg bg-gray-50 p-4 text-xs text-gray-600 italic">
          <div className="flex items-start gap-3">
            <UCheckbox name="acceptTerms" label="" className="mt-1" />
            <p className="flex-1">
              By completing this form you consent to instruct our partner law
              firm to present a claim to the airline on behalf of the passengers
              listed above, which could include issuing proceedings. You
              understand that they work on a no-win-no-fee basis, which means if
              they aren&apos;t successful you won&apos;t have to pay anything.
              When they do recover compensation from the airline they will
              deduct their fees. You confirm your agreement to these{" "}
              <a
                href="/terms-and-conditions.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 underline hover:text-blue-800"
              >
                terms and conditions
              </a>{" "}
              and you also agree to digitally sign this{" "}
              <a
                href="/letter-of-claim.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 underline hover:text-blue-800"
              >
                letter of claim
              </a>{" "}
              which will be sent to the airline in your name.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
