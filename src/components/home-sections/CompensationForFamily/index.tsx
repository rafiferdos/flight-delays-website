import ResponsiveContainer from "@/components/containers/ResponsiveContainer"
import moneyBagIcon from "@/assets/images/home/compesnation-for-family/Frame.svg"
import rightUser1 from "@/assets/images/home/compesnation-for-family/left-frame/image.svg"
import rightUser2 from "@/assets/images/home/compesnation-for-family/left-frame/image-1.svg"
import rightUser3 from "@/assets/images/home/compesnation-for-family/left-frame/image-2.svg"
import leftUser1 from "@/assets/images/home/compesnation-for-family/right-frame/image.svg"
import leftUser2 from "@/assets/images/home/compesnation-for-family/right-frame/image-1.svg"
import leftUser3 from "@/assets/images/home/compesnation-for-family/right-frame/image-2.svg"
import mobileImgTop from "@/assets/images/home/compesnation-for-family/mobile/top.svg"
import mobileImgBottom from "@/assets/images/home/compesnation-for-family/mobile/bottom.svg"
import Image from "next/image"

export default function CompensationForFamily() {
  return (
    <ResponsiveContainer className="primary-gradient mt-20 flex flex-col items-stretch justify-between gap-5 rounded-xl !px-10 py-6 text-center text-white lg:h-[330px] lg:flex-row">
      {/* ---------------------- Left Gallery Frame ------------------------- */}
      <div className="relative hidden h-full w-1/4 lg:block">
        <Image
          src={leftUser1}
          alt="Family and Friends Image"
          height={100}
          width={100}
          className="absolute top-0 left-1/2 -translate-x-1/2"
        />
        <Image
          src={leftUser2}
          alt="Family and Friends Image"
          height={80}
          width={80}
          className="absolute top-1/2 left-0"
        />
        <Image
          src={leftUser3}
          alt="Family and Friends Image"
          height={60}
          width={60}
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
        />

        <div className="flex-center absolute top-1/2 right-0 aspect-square size-24 -translate-y-1/2 rounded-full bg-white">
          <Image
            src={moneyBagIcon}
            alt="Money Bag Icon"
            aria-hidden="true"
            height={40}
            width={40}
          />
        </div>
      </div>

      {/* Mobile Images */}
      <Image
        src={mobileImgTop}
        alt="Family and Friends Image"
        height={1200}
        width={1200}
        className="mx-auto block h-auto w-3/4 object-cover object-center lg:hidden"
      />

      {/* ---------------------- Text Content ------------------------------- */}
      <div className="grid flex-1 place-content-center space-y-3">
        <h3 className="text-h3 font-semibold">
          Get Family, Friends or Colleagues Compensation to
        </h3>
        <p className="text-lg text-white/95">
          Each person you traveled with could be owed £520! Just mention them in
          your claim.
        </p>
      </div>

      {/* --------------------- Right Gallery Frame ------------------------- */}
      <div className="relative hidden w-1/4 lg:block">
        <div className="flex-center absolute top-1/2 left-0 aspect-square size-24 -translate-y-1/2 rounded-full bg-white">
          <Image
            src={moneyBagIcon}
            alt="Money Bag Icon"
            aria-hidden="true"
            height={40}
            width={40}
          />
        </div>

        <Image
          src={rightUser1}
          alt="Family and Friends Image"
          height={100}
          width={100}
          className="absolute top-0 left-1/2 -translate-x-1/2"
        />
        <Image
          src={rightUser2}
          alt="Family and Friends Image"
          height={80}
          width={80}
          className="absolute top-1/2 right-0"
        />
        <Image
          src={rightUser3}
          alt="Family and Friends Image"
          height={60}
          width={60}
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
        />
      </div>

      {/* Mobile Images */}
      <Image
        src={mobileImgBottom}
        alt="Family and Friends Image"
        height={1200}
        width={1200}
        className="mx-auto block h-auto w-3/4 object-cover object-center lg:hidden"
      />
    </ResponsiveContainer>
  )
}
