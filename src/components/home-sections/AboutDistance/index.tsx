import worldMapImage from "@/assets/images/home/about-distance/map.svg"
import ResponsiveContainer from "@/components/containers/ResponsiveContainer"
import Image from "next/image"

export default function AboutDistance() {
  return (
    <ResponsiveContainer className="px-0">
      <div className="mt-20 space-y-2 text-center">
        <h2 className="text-h3 lg:text-h2 font-bold">
          It's about <span className="text-gradient">distance.</span>
        </h2>
        <p className="font-light text-[#1D1F2C]">
          The further you fly, the more you get paid.
        </p>
      </div>

      <div className="mt-12">
        <Image
          src={worldMapImage}
          alt="World Map"
          height={1000}
          width={1200}
          className="mx-auto w-full object-cover object-center"
        />
      </div>
    </ResponsiveContainer>
  )
}
