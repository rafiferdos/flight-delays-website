"use client"

import { useEffect } from "react"
import ReactPixel from "react-facebook-pixel"

const PixelTracker = () => {
  useEffect(() => {
    const pixelId = "2101732896959351"
    ReactPixel.init(pixelId)
    ReactPixel.pageView()
  }, [])

  return <></>
}

export default PixelTracker
