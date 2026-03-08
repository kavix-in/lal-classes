import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const items = [
    'IIT Delhi', 'AIIMS Delhi', 'IIM Ahmedabad', 'IIT Bombay', 'AIIMS Mumbai',
    'IIM Bangalore', 'IIT Madras', 'NIT Trichy', 'IIM Calcutta', 'IIT Kharagpur',
    'IIT Delhi', 'AIIMS Delhi', 'IIM Ahmedabad', 'IIT Bombay', 'AIIMS Mumbai',
    'IIM Bangalore', 'IIT Madras', 'NIT Trichy', 'IIM Calcutta', 'IIT Kharagpur',
]

export default function Marquee() {
    const trackRef = useRef()

    return (
        <div className="py-8 border-y border-white/5 overflow-hidden relative">
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(90deg, #050508 0%, transparent 15%, transparent 85%, #050508 100%)' }} />
            <div className="marquee-inner gap-12">
                {items.map((item, i) => (
                    <span key={i} className="flex items-center gap-12 shrink-0">
                        <span className="text-[#64648a] text-sm font-bold uppercase tracking-[0.2em]">{item}</span>
                        <span className="w-1 h-1 rounded-full bg-[#00f5c4] shrink-0" />
                    </span>
                ))}
            </div>
        </div>
    )
}
