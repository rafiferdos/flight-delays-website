import ResponsiveContainer from "@/components/containers/ResponsiveContainer"
import { StatsData } from "@/constants/home.constants"

export default function Stats() {
  return (
    <ResponsiveContainer className="mt-10 sm:mt-16 lg:mt-20">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        {StatsData?.map((stat) => (
          <div
            key={stat.key}
            className="group relative transform cursor-pointer overflow-hidden rounded-2xl bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-6 lg:p-8"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
              border: "1px solid rgba(2, 171, 217, 0.1)"
            }}
          >
            {/* Background decoration */}
            <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-br from-blue-50 to-transparent opacity-30 transition-all duration-300 group-hover:opacity-50 sm:h-32 sm:w-32 lg:h-40 lg:w-40"></div>

            {/* Icon container */}
            <div className="relative z-10 mb-3 flex justify-center sm:mb-4 lg:mb-6">
              <div className="transform transition-all duration-300 group-hover:scale-110">
                {stat.icon}
              </div>
            </div>

            {/* Stats number */}
            <div className="relative z-10 text-center">
              <div className="text-gradient text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                {stat.stat}
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                  {stat.valueText}
                </span>
              </div>
            </div>

            {/* Label */}
            <div className="relative z-10 mt-2 text-center sm:mt-3 lg:mt-4">
              <p className="text-xs font-medium text-gray-600 sm:text-sm lg:text-base xl:text-lg">
                {stat.label}
              </p>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
            </div>
          </div>
        ))}
      </div>
    </ResponsiveContainer>
  )
}
