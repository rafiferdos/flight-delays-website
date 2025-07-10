import { cn } from "@/lib/utils"

interface AnimatedLabelProps {
  label: string
  htmlFor: string
  className?: string
  labelClassName?: string
}

export default function AnimatedLabel({
  label,
  htmlFor,
  className,
  labelClassName
}: AnimatedLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "origin-start group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-2 text-sm text-gray-500 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium",
        labelClassName
      )}
    >
      <span className={cn("bg-background inline-flex px-2", className)}>
        {label}
      </span>
    </label>
  )
}
