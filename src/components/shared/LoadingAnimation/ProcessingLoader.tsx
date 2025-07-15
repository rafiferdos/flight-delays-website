"use client"

import { useEffect, useState } from "react"

interface ProcessingLoaderProps {
  onComplete?: () => void
  duration?: number
}

export default function ProcessingLoader({
  onComplete
}: ProcessingLoaderProps) {
  const [progress, setProgress] = useState(0)
  const [currentMessage, setCurrentMessage] = useState("")

  // Progress messages with timing
  const progressMessages = [
    { progress: 0, message: "Starting up..." },
    { progress: 15, message: "Initializing..." },
    { progress: 30, message: "Checking your answers..." },
    { progress: 45, message: "Validating flight details..." },
    { progress: 60, message: "Processing information..." },
    { progress: 75, message: "Analyzing eligibility..." },
    { progress: 90, message: "Finalizing..." },
    { progress: 100, message: "All done!" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            onComplete?.()
          }, 500)
          return 100
        }

        // Variable speed progression for smooth animation
        let increment = 1
        if (prev < 20)
          increment = 2 // Fast start
        else if (prev < 40)
          increment = 1.5 // Moderate
        else if (prev < 70)
          increment = 1 // Slow middle
        else if (prev < 90)
          increment = 1.5 // Pick up speed
        else increment = 0.5 // Slow finish

        return Math.min(prev + increment, 100)
      })
    }, 50)

    return () => clearInterval(interval)
  }, [onComplete])

  // Update message based on progress
  useEffect(() => {
    const currentMsg = progressMessages
      .reverse()
      .find((msg) => progress >= msg.progress)

    if (currentMsg) {
      setCurrentMessage(currentMsg.message)
    }
  }, [progress])

  const circumference = 2 * Math.PI * 54 // radius = 54
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center space-y-8 py-12">
      {/* Circular Progress */}
      <div className="relative">
        <svg className="h-32 w-32 -rotate-90 transform" viewBox="0 0 120 120">
          {/* Background circle */}
          <circle
            cx="60"
            cy="60"
            r="54"
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
          />

          {/* Progress circle */}
          <circle
            cx="60"
            cy="60"
            r="54"
            stroke="#3b82f6"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-300 ease-out"
          />
        </svg>

        {/* Progress percentage */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-700">
            {Math.round(progress)}%
          </span>
        </div>
      </div>

      {/* Loading message */}
      <div className="text-center">
        <p className="mb-2 text-lg font-medium text-gray-700">
          {currentMessage}
        </p>
        <p className="text-sm text-gray-500">
          Please wait while we process your information...
        </p>
      </div>

      {/* Animated dots */}
      <div className="flex space-x-2">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="h-2 w-2 animate-pulse rounded-full bg-blue-500"
            style={{
              animationDelay: `${index * 0.3}s`,
              animationDuration: "1.5s"
            }}
          />
        ))}
      </div>
    </div>
  )
}
