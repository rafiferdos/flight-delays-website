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
  bookingReferenceNumber: z
    .string()
    .min(1, { message: "Please enter your booking reference number." }),
  flightNumber: z
    .string({ required_error: "Please enter your flight number" })
    .min(1, "Please enter your flight number"),
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
        dob: z.date().optional()
      })
    )
    .optional(),

  acceptTerms: z.boolean().refine((val) => val === true, "")
})
// .superRefine(
//   ({ additionalPassenger, additionalPassenger1 }, refinementContext) => {
//     if (additionalPassenger === "Yes") {
//       if (!additionalPassenger1) {
//         return refinementContext.addIssue({
//           code: z.ZodIssueCode.custom,
//           message: "Please enter passenger name",
//           path: ["additionalPassenger1"]
//         })
//       }
//     }
//   }
// )
