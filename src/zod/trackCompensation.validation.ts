import { z } from "zod"

export const trackCompensationSchema = z.object({
  boardingPass: z
    .array(z.instanceof(File))
    .optional()
    .refine(
      (files) => !files || files.every((file) => file.size <= 10 * 1024 * 1024),
      {
        message: "Each boarding pass must be under 10MB."
      }
    )
    .refine(
      (files) =>
        !files ||
        files.every((file) =>
          ["image/jpeg", "image/jpg", "image/png", "application/pdf"].includes(
            file.type
          )
        ),
      {
        message: "Boarding passes must be JPG/JPEG, PNG, or PDF files."
      }
    )
})
