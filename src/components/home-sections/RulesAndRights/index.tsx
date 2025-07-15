import airplaneImg from "@/assets/images/home/claim-compensation/aeroplane.svg"
import arrowIcon from "@/assets/images/home/claim-compensation/arrow.svg"
import ResponsiveContainer from "@/components/containers/ResponsiveContainer"
import {
  CompensationRights,
  CompensationRules
} from "@/constants/home.constants"
import Image from "next/image"

export default function RulesAndRights() {
  return (
    <ResponsiveContainer className="mt-10 flex flex-col items-stretch justify-between gap-12 lg:mt-28 lg:flex-row">
      <div className="bg-secondary-light w-full rounded-[16px] border border-[#DBF8FF] p-8 lg:w-1/2">
        <h2 className="text-h3 md:text-h2 font-semibold lg:leading-14">
          When can I <span className="text-gradient">claim compensation</span>{" "}
          for a delayed flight?
        </h2>

        <div className="mt-6 space-y-4">
          {CompensationRules.map((rule, index) => (
            <div key={`rule-${index}`} className="flex items-baseline gap-x-4">
              <Image src={arrowIcon} alt="Arrow Icon" height={20} width={20} />
              <p className="text-gray-600">{rule}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-secondary-light relative w-full overflow-hidden rounded-[16px] border border-[#DBF8FF] p-8 lg:w-1/2">
        <h2 className="text-h3 md:text-h2 font-semibold lg:leading-14">
          Experts in <span className="text-gradient">air passenger rights</span>
        </h2>

        <div className="mt-5 space-y-6">
          {CompensationRights.map((right) => (
            <div key={right.key} className="flex-center-start gap-x-4">
              <Image src={right.countryFlag} alt="Arrow Icon" />
              <p className="text-h6 font-light text-gray-600">{right.label}</p>
            </div>
          ))}
        </div>

        <Image
          src={airplaneImg}
          alt="Image of an Airplane"
          height={370}
          width={370}
          className="ms-auto -mt-10 hidden h-[200px] w-auto object-cover object-center lg:block"
        />
      </div>
    </ResponsiveContainer>
  )
}
