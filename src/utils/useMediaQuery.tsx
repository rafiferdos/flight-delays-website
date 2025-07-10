import { useEffect, useState } from "react"

export default function useMediaQuery() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    const checkIfTablet = () => {
      setIsTablet(window.innerWidth < 1024)
    }

    checkIfMobile()
    checkIfTablet()

    window.addEventListener("resize", checkIfMobile)
    window.addEventListener("resize", checkIfTablet)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
      window.removeEventListener("resize", checkIfTablet)
    }
  }, [])

  return { isMobile, isTablet }
}
