/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import envConfig from "@/config/envConfig"

export const uploadImage = async (imgFile: File) => {
  // return console.log(imgFile)
  try {
    const formData = new FormData()
    formData.append("image", imgFile)

    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${envConfig.imgbbApiKey}`,
      {
        method: "POST",
        body: formData
      }
    )

    const data = await res.json()

    return data
  } catch (error: any) {
    console.error("IMage upload error= =============> ", error)
    return Error(error)
  }
}
