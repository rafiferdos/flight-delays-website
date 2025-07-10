import logoSymbol from "@/assets/logos/logo-symbol.svg"
import Image from "next/image"

export default function Logo() {
  return (
    <div className="flex-center flex-col gap-1">
      <Image
        src={logoSymbol}
        alt="Flight Delays Logo"
        height={1200}
        width={1200}
        className="size-[38px] object-cover object-center"
        priority
      />

      <h6 className="text-gradient font-roboto text-center text-[14px] font-bold">
        FLIGHT-DELAYS
      </h6>
    </div>
  )
}
