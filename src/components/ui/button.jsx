import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
    {
        variants: {
            variant: {
                default:
                    "bg-[#6c47ff] text-white hover:bg-[#5536d4] hover:shadow-[0_0_25px_rgba(108,71,255,0.5)] active:scale-95",
                destructive:
                    "bg-red-500 text-white hover:bg-red-600",
                outline:
                    "border border-[#6c47ff] text-[#6c47ff] bg-transparent hover:bg-[#6c47ff] hover:text-white",
                secondary:
                    "bg-[#1a1a3e] text-white hover:bg-[#252550]",
                ghost:
                    "text-white hover:bg-white/10",
                accent:
                    "bg-gradient-to-r from-[#6c47ff] to-[#ff6b6b] text-white hover:shadow-[0_0_30px_rgba(108,71,255,0.6)] active:scale-95",
                glow:
                    "bg-[#6c47ff] text-white shadow-[0_0_20px_rgba(108,71,255,0.4)] hover:shadow-[0_0_40px_rgba(108,71,255,0.7)] hover:scale-105 active:scale-95",
            },
            size: {
                default: "h-10 px-6 py-2",
                sm: "h-9 rounded-lg px-4 text-xs",
                lg: "h-13 rounded-xl px-8 text-base",
                xl: "h-15 rounded-2xl px-10 text-lg",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? Slot : "button"
    return (
        <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    )
}

export { Button, buttonVariants }
