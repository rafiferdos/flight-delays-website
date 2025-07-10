import ResponsiveContainer from "@/components/containers/ResponsiveContainer"
import { StatsData } from "@/constants/home.constants"

export default function Stats() {
  return (
    <ResponsiveContainer className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-3 2xl:grid-cols-4">
      {StatsData?.map((stat) => (
        <div
          key={stat.key}
          style={{
            borderRadius: "16px",
            background: "#FFF",
            boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.05)",
            padding: "28px",
            position: "relative",
            zIndex: 20
          }}
          className="text-center lg:text-left"
        >
          <span className="md:text-h4 text-h5 lg:text-h3 text-gradient text-center font-semibold">
            {new Intl.NumberFormat().format(stat.stat)}
            {stat.valueText}
          </span>

          <p className="mt-0.5 text-xs font-normal text-gray-500 md:text-sm lg:text-base">
            {stat.label}
          </p>

          <span className="absolute right-0 bottom-3 -z-10 lg:right-4">
            {stat.icon}
          </span>
        </div>
      ))}
    </ResponsiveContainer>
  )
}
