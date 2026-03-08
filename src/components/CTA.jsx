import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
    const sectionRef = useRef()
    const headRef = useRef()
    const btnRef = useRef()

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(headRef.current.children, { y: 60, opacity: 0 }, {
                y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: 'power4.out',
                scrollTrigger: { trigger: headRef.current, start: 'top 85%', once: true }
            })

            gsap.fromTo(btnRef.current.children, { y: 30, opacity: 0 }, {
                y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: 'power3.out',
                scrollTrigger: { trigger: btnRef.current, start: 'top 90%', once: true },
                delay: 0.3,
            })

            // Pulsing animation on the neon line
            gsap.to('.cta-neon-line', {
                scaleX: 1.5,
                opacity: 0.5,
                duration: 1.5,
                ease: 'power2.inOut',
                yoyo: true,
                repeat: -1,
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="py-32 relative border-t border-white/5 overflow-hidden">
            {/* Big number decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] font-black text-white/[0.018] select-none pointer-events-none font-display leading-none">
                NOW
            </div>

            <div className="absolute inset-0" style={{
                background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,245,196,0.06) 0%, transparent 70%)'
            }} />

            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#00f5c4] mb-10">
                    <div className="cta-neon-line w-12 h-px bg-[#00f5c4] origin-center" />
                    Limited Seats · Batch Starts Soon
                    <div className="cta-neon-line w-12 h-px bg-[#00f5c4] origin-center" />
                </div>

                <div ref={headRef}>
                    <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black font-display uppercase leading-tight mb-8">
                        <span className="text-white block">Ready to Start</span>
                        <span className="text-gradient-neon block">Your Journey?</span>
                    </h2>
                    <p className="text-lg text-[#64648a] max-w-2xl mx-auto mb-12">
                        Book your <span className="text-white font-semibold">free demo session</span> today and see why 50,000+ students chose Apex Academy to achieve their dreams.
                    </p>
                </div>

                <div ref={btnRef} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <button className="clip-corner bg-[#00f5c4] text-black font-black text-base uppercase tracking-widest px-10 py-5 hover:neon-glow transition-all duration-300 hover:scale-105">
                        Book Free Demo →
                    </button>
                    <button className="clip-corner border border-white/20 text-white font-bold text-base uppercase tracking-widest px-10 py-5 hover:border-[#00f5c4]/60 hover:text-[#00f5c4] transition-all duration-300">
                        Download Brochure
                    </button>
                </div>

                {/* Trust */}
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs text-[#64648a] uppercase tracking-widest">
                    {['No Credit Card', 'Free 7-Day Trial', 'Cancel Anytime', '30-Day Refund'].map(t => (
                        <span key={t} className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-[#00f5c4]" />{t}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
