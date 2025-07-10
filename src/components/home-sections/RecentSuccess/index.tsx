"use client"

import ResponsiveContainer from "@/components/containers/ResponsiveContainer"
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import { RecentSuccessCarouselData } from "@/constants/home.constants"
import Autoplay from "embla-carousel-autoplay"

export default function RecentSuccess() {
  return (
    <ResponsiveContainer className="mt-20 text-center">
      <h2 className="text-h3 lg:text-h2 mb-10 font-bold">
        <span className="text-gradient">Recent successful flight</span>
        <br />
        compensation claims
      </h2>

      <Carousel
        opts={{
          loop: false,
          duration: 30,
          align: "start"
        }}
        plugins={[
          Autoplay({
            delay: 4500,
            stopOnInteraction: false,
            stopOnMouseEnter: true
          })
        ]}
        className="3xl:w-2/3 mx-auto w-full lg:w-3/4"
      >
        <CarouselContent className="mx-auto w-[90%] gap-x-3">
          {RecentSuccessCarouselData?.map((item) => (
            <CarouselItem
              key={item.key}
              className="bg-secondary-light border-secondary/10 basis-1/1 space-y-3 rounded-xl border-2 px-5 py-14"
            >
              <h3 className="text-h3 font-semibold">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          variant="primary"
          iconSize={24}
          className="hidden !size-10 lg:inline-flex"
        />
        <CarouselNext
          variant="primary"
          iconSize={24}
          className="hidden !size-10 lg:inline-flex"
        />

        <CarouselDots className="mt-5" style={{ height: 7, width: 7 }} />
      </Carousel>
    </ResponsiveContainer>
  )
}
