import ResponsiveContainer from "@/components/containers/ResponsiveContainer"
import { StatsData } from "@/constants/home.constants"

export default function Stats() {
  return (
    <ResponsiveContainer className="mt-10">
      <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {StatsData?.map((stat) => (
          <div
            key={stat.key}
            style={{
              borderRadius: "16px",
              background: "#FFF",
              boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.05)",
              padding: "20px",
              position: "relative",
              zIndex: 20
            }}
            className="text-center"
          >
            <div className="mb-4 flex justify-center">{stat.icon}</div>

            <div className="text-gradient text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
              {stat.stat}
              {stat.valueText}
            </div>

            <p className="mt-2 text-xs font-medium text-gray-600 sm:text-sm lg:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </ResponsiveContainer>
  )
}
