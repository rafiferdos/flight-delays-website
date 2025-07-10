import ResponsiveContainer from "@/components/containers/ResponsiveContainer"
import Image, { StaticImageData } from "next/image"

interface TopBannerProps {
  text: string
  backgroundImage: StaticImageData
}

export default function TopBanner({ text, backgroundImage }: TopBannerProps) {
  return (
    <div className="px-6">
      <div className="relative flex h-[40dvh] items-center justify-start rounded-xl md:h-[45dvh] lg:h-[50dvh]">
        <Image
          src={backgroundImage}
          alt={text}
          height={4000}
          width={4000}
          className="absolute inset-0 -z-10 h-full w-full rounded-xl object-cover"
        />

        <ResponsiveContainer>
          <h3 className="text-h2 lg:text-h1 font-bold text-white">{text}</h3>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
