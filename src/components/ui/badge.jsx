import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-[#6c47ff]/20 text-[#a78bfa] border-[#6c47ff]/30",
                secondary:
                    "border-transparent bg-white/10 text-white/70",
                destructive:
                    "border-transparent bg-red-500/20 text-red-400",
                outline:
                    "text-white border-white/20",
                accent:
                    "border-transparent bg-[#ff6b6b]/20 text-[#ff6b6b] border-[#ff6b6b]/30",
                gold:
                    "border-transparent bg-[#ffd166]/20 text-[#ffd166] border-[#ffd166]/30",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

function Badge({ className, variant, ...props }) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants }
