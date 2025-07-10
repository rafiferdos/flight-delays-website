import { IWhyChooseUs } from "@/constants/home.constants"
import { cn } from "@/lib/utils"

interface WhyChooseUsCardProps {
  item: IWhyChooseUs
  index: number
}

export default function WhyChooseUsCard({ item, index }: WhyChooseUsCardProps) {
  const isActiveCard: boolean = index === 1

  return (
    <div
      className={cn(
        "flex-center border-secondary/20 h-[200px] w-full flex-col gap-y-5 rounded-2xl border-2 bg-white text-center transition-all duration-300 ease-in-out md:w-[45%] lg:h-[340px] xl:w-[30%]",
        isActiveCard && "primary-gradient border-none shadow-xl",
        !isActiveCard && "hover:shadow-xl"
      )}
    >
      <div
        className={cn(
          "flex-center border-secondary/20 size-20 rounded-xl border-2 bg-transparent p-4",
          isActiveCard && "border-none bg-white"
        )}
      >
        {item.icon}
      </div>

      <h4
        className={cn(
          "text-2xl font-semibold text-black",
          isActiveCard && "text-white"
        )}
      >
        {item.label}
      </h4>
    </div>
  )
}
