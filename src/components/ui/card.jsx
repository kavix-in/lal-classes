import * as React from "react"
import { cn } from "@/lib/utils"

function Card({ className, ...props }) {
    return (
        <div
            className={cn(
                "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white shadow-xl",
                className
            )}
            {...props}
        />
    )
}

function CardHeader({ className, ...props }) {
    return (
        <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
    )
}

function CardTitle({ className, ...props }) {
    return (
        <div
            className={cn("text-2xl font-bold leading-none tracking-tight", className)}
            {...props}
        />
    )
}

function CardDescription({ className, ...props }) {
    return (
        <div className={cn("text-sm text-[#8888bb]", className)} {...props} />
    )
}

function CardContent({ className, ...props }) {
    return <div className={cn("p-6 pt-0", className)} {...props} />
}

function CardFooter({ className, ...props }) {
    return (
        <div className={cn("flex items-center p-6 pt-0", className)} {...props} />
    )
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
