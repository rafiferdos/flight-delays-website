/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useCallback, useState } from "react"

type UseFormStepsProps = {
  initialSteps: any[]
  onStepValidation?: (step: any) => Promise<boolean> | boolean
}

export type UseMultiFormStepsReturn = {
  steps: any[]
  currentStep: number
  currentStepData: any
  progress: number
  isFirstStep: boolean
  isLastStep: boolean
  goToNext: () => Promise<boolean>
  goToPrevious: () => void
  setStep: (step: number) => void
}

export function useMultiStepForm({
  initialSteps,
  onStepValidation
}: UseFormStepsProps): UseMultiFormStepsReturn {
  const steps = initialSteps
  const [currentStep, setCurrentStep] = useState(1)

  const goToNext = useCallback(async () => {
    const currentStepData = initialSteps[currentStep - 1]

    if (onStepValidation) {
      const isValid = await onStepValidation(currentStepData)
      if (!isValid) return false
    }

    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1)
      return true
    }
    return false
  }, [currentStep, steps, onStepValidation, initialSteps])

  const goToPrevious = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }, [currentStep])

  const setStep = useCallback((step: number) => {
    if (step >= 1 && step <= steps.length) {
      setCurrentStep(step)
    }
  }, [steps.length])

  return {
    steps,
    currentStep,
    currentStepData: steps[currentStep - 1],
    progress: (currentStep / steps.length) * 100,
    isFirstStep: currentStep === 1,
    isLastStep: currentStep === steps.length,
    goToNext,
    goToPrevious,
    setStep
  }
}
