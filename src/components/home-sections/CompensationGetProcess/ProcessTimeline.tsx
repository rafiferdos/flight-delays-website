"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { CompensationProcessData } from "@/constants/home.constants"
import useMediaQuery from "@/utils/useMediaQuery"

export default function TimelineComponent() {
  const { isTablet } = useMediaQuery()
  const stepRef = useRef<HTMLDivElement>(null)
  const [singleStepWidth, setSingleStepWidth] = useState(0)
  const [singleStepHeight, setSingleStepHeight] = useState(0)

  // Calculate timeline width and height(similar as width) to make it responsive
  // Current formula: singleStepWidth * (total number of steps - 1)
  // We need to reduce one step width because the last and first step have half timelines both
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (stepRef.current) {
        setSingleStepWidth(stepRef.current.getBoundingClientRect()?.width)
      }
    })

    return () => {
      window.removeEventListener("resize", () => {})
    }
  }, [isTablet])

  // Set initial timeline width
  useEffect(() => {
    if (stepRef.current) {
      setSingleStepWidth(stepRef.current.getBoundingClientRect()?.width)
      setSingleStepHeight(stepRef.current.getBoundingClientRect()?.height)
    }
  }, [isTablet])

  return (
    <div
      className={cn(
        "relative",
        isTablet
          ? "flex flex-col gap-y-5"
          : "flex items-stretch justify-between"
      )}
    >
      {/* Timeline line */}
      <div
        className={cn(
          "absolute bg-[#CCF5FF]",
          isTablet ? `bottom-0 left-[23px]` : "right-0 left-0 mx-auto"
        )}
        style={{
          width: isTablet
            ? 4
            : singleStepWidth * (CompensationProcessData.length - 1),
          height: isTablet
            ? singleStepHeight * (CompensationProcessData.length - 1) + 100
            : 4,
          top: isTablet ? singleStepHeight / 2 : 23
        }}
      />

      {CompensationProcessData.map((step, index) => (
        <div
          key={index}
          className={cn(
            "relative flex flex-col",
            isTablet ? "pl-16" : "flex-1 px-2"
          )}
          ref={stepRef}
        >
          {/* Number circle */}
          <div
            className={cn(
              "border-secondary absolute z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white font-medium text-sky-500",
              isTablet
                ? "top-1/2 left-0 -translate-y-1/2"
                : "top-0 left-1/2 -translate-x-1/2"
            )}
          >
            {step.number}
          </div>

          {/* Content */}
          <div
            className={cn(
              "border-secondary/10 flex flex-1 flex-col justify-between gap-y-3 rounded-xl border-2 bg-white p-4",
              isTablet ? "text-center" : "mt-16 text-left"
            )}
          >
            <div className="flex-1">
              <h3 className="text-xl font-bold">{step.title}</h3>
              <h4 className="mt-2 text-lg font-medium text-gray-700">
                {step.subtitle}
              </h4>
              <p className="mt-1 text-gray-600">{step.description}</p>
            </div>

            {/* Rounded Bar */}
            <div className="h-3 w-full rounded-xl bg-[#CCF5FF]" />
          </div>
        </div>
      ))}
    </div>
  )
}
