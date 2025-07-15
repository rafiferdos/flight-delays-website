/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormStep } from "@/app/(withCommonLayout)/compensation/_components/CompensationForm"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import ProcessingLoader from "@/components/shared/LoadingAnimation/ProcessingLoader"
import { useMultiStepForm } from "@/hooks/use-multi-step-form"
import { JSX, useEffect, useRef, useState } from "react"

interface MultiStepViewerProps {
  isSubmitting: boolean
  formSteps: FormStep[]
  form: any
}

export function MultiStepViewer({
  isSubmitting,
  formSteps,
  form
}: MultiStepViewerProps) {
  const submitBtnRef = useRef<HTMLButtonElement>(null)
  const [isShowingLoader, setIsShowingLoader] = useState(false)

  const stepFormElements: {
    [key: number]: JSX.Element
  } = formSteps.reduce((acc: { [key: number]: JSX.Element }, step, index) => {
    acc[index] = step.formElement

    return acc
  }, {})

  const steps = Object.keys(stepFormElements).map(
    (index: string) => stepFormElements[Number(index)]
  )

  const { currentStep, isLastStep, isFirstStep, goToNext, goToPrevious, setStep } =
    useMultiStepForm({
      initialSteps: steps,
      onStepValidation: async () => {
        /**
         ** Handle step validation
         */
        const output = await form.trigger(formSteps[currentStep - 1]?.fields, {
          shouldFocus: true
        })

        if (!output) return false

        return true
      }
    })

  const current = stepFormElements[currentStep - 1]

  // Show alert of data lost if refresh or leave page
  useEffect(() => {
    const beforeUnloadHandler = (event: BeforeUnloadEvent) => {
      if (currentStep > 1) {
        event.preventDefault()
        event.returnValue = ""
        return "" // For some browsers
      }
    }

    // Add event listener for beforeunload
    window.addEventListener("beforeunload", beforeUnloadHandler)

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("beforeunload", beforeUnloadHandler)
    }
  }, [form, currentStep])

  const handleNextClick = async () => {
    if (isLastStep) {
      submitBtnRef.current?.click()
    } else {
      // If moving from step 2 to step 3, show loading animation
      if (currentStep === 2) {
        // First validate the current step
        const output = await form.trigger(formSteps[currentStep - 1]?.fields, {
          shouldFocus: true
        })
        
        if (!output) return // Don't proceed if validation fails
        
        // Show loading animation
        setIsShowingLoader(true)
      } else {
        // For other steps, proceed normally
        goToNext()
      }
    }
  }

  const handleLoaderComplete = () => {
    setIsShowingLoader(false)
    // Directly set step to 3 instead of using goToNext()
    setStep(3)
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-start gap-y-2">
        <span className="font-semibold">
          Step {currentStep} / {steps.length}
        </span>

        <Progress value={(currentStep / steps.length) * 100} />
      </div>

      <div key={currentStep} className="mt-8 mb-8 flex w-full flex-col gap-2">
        {isShowingLoader ? (
          <ProcessingLoader onComplete={handleLoaderComplete} duration={4000} />
        ) : (
          current
        )}
      </div>

      <div className="justify-between-between flex w-full flex-row gap-3 pt-3">
        <div className="w-full">
          {!isFirstStep && (
            <Button
              type="button"
              size="lg"
              variant="outline"
              onClick={goToPrevious}
              className="shadow-none"
              disabled={isShowingLoader}
            >
              Previous
            </Button>
          )}
        </div>

        <Button
          type="button"
          size="lg"
          variant={"primary"}
          onClick={handleNextClick}
          disabled={isSubmitting || isShowingLoader}
        >
          {isLastStep ? "Submit Your Claim" : "Next"}
        </Button>

        {/* Submit Button */}
        <button type="submit" className="hidden" ref={submitBtnRef} />
      </div>
    </div>
  )
}
