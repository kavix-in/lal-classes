import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
    {
        init: 'KR', name: 'Kavya Reddy', result: 'NEET AIR 45', accent: '#ff4d6d',
        text: "Apex Academy's faculty is unmatched. Biology classes made concepts come alive — I couldn't have cracked NEET without their structured approach!"
    },
    {
        init: 'IT', name: 'Ishan Trivedi', result: 'JEE AIR 89', accent: '#00f5c4',
        text: "The DPPs and doubt-clearing sessions were absolute game changers. Prof. Mehta's math classes are legendary. Mock tests perfectly simulate the real exam."
    },
    {
        init: 'PB', name: 'Pooja Bansal', result: 'CAT 99.8%ile', accent: '#c8ff00',
        text: "From basics to advanced strategies, Apex's CAT program covered everything. The GD/PI prep was exceptional. Got IIM Ahmedabad as my dream call!"
    },
    {
        init: 'VJ', name: 'Vikram Joshi', result: 'JEE Main AIR 156', accent: '#7c3aed',
        text: "As someone from a small town, I never thought IIT was possible. Apex's platform with live doubt sessions made it both accessible and highly effective."
    },
    {
        init: 'AP', name: 'Aisha Patel', result: 'AIIMS Delhi', accent: '#00f5c4',
        text: "The systematic approach to NCERT and beyond is brilliant. Weekly tests constantly tracked my progress. Best investment my parents ever made."
    },
    {
        init: 'RC', name: 'Rahul Choudhary', result: 'JEE Adv AIR 203', accent: '#ff4d6d',
        text: "The scholarship program made premium coaching accessible to me. The community of motivated students pushed me to give my absolute best every day."
    },
]

export default function Testimonials() {
    const sectionRef = useRef()
    const cardsRef = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            cardsRef.current.forEach((card, i) => {
                if (!card) return
                gsap.fromTo(card,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
                        scrollTrigger: { trigger: card, start: 'top 92%', once: true },
                        delay: (i % 3) * 0.1,
                    }
                )
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="py-20 relative bg-[#080810]">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7c3aed]/40 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 text-[#7c3aed] text-xs font-bold uppercase tracking-[0.3em] mb-4">
                        <span className="w-8 h-px bg-[#7c3aed]" /> Student Voice
                    </div>
                    {/* Fixed: solid colored text instead of transparent text-stroke which looked broken */}
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display uppercase leading-tight">
                        <span className="text-white block">Loved by</span>
                        <span className="text-[#7c3aed] block">50,000+ Students</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {testimonials.map((t, i) => (
                        <div
                            key={t.name}
                            ref={el => cardsRef.current[i] = el}
                            className="border border-white/10 bg-[#0a0a11] p-5 hover:border-white/20 transition-all duration-300 group hover:-translate-y-1 flex flex-col"
                        >
                            {/* Stars */}
                            <div className="flex gap-0.5 mb-3">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} className="w-3.5 h-3.5 fill-[#c8ff00] text-[#c8ff00]" />
                                ))}
                            </div>

                            {/* Quote text */}
                            <p className="text-sm text-[#8888aa] leading-relaxed mb-5 flex-1">&ldquo;{t.text}&rdquo;</p>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                                <div className="w-9 h-9 clip-corner-sm flex items-center justify-center text-xs font-black text-black shrink-0"
                                    style={{ background: t.accent }}>
                                    {t.init}
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white">{t.name}</div>
                                    <div className="text-xs font-bold" style={{ color: t.accent }}>{t.result}</div>
                                </div>
                            </div>

                            <div className="mt-3 h-px w-0 group-hover:w-full transition-all duration-600" style={{ background: t.accent }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
