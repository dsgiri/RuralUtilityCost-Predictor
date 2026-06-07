import * as React from "react"
import { cn } from "@/src/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "danger" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  
  const variants = {
    default: "border-transparent bg-slate-100 text-slate-900",
    success: "border-transparent bg-emerald-100 text-emerald-800",
    warning: "border-transparent bg-amber-100 text-amber-800",
    danger: "border-transparent bg-red-100 text-red-800",
    outline: "text-slate-900 border-slate-200",
  };

  return (
    <div className={cn(baseClasses, variants[variant], className)} {...props} />
  )
}

export { Badge }
