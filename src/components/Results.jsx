import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
    { value: 2847, suffix: '+', label: 'IITs Selected', accent: '#00f5c4' },
    { value: 1523, suffix: '+', label: 'AIIMS Selections', accent: '#ff4d6d' },
    { value: 156, suffix: '', label: 'Top 100 AIR Ranks', accent: '#c8ff00' },
    { value: 98, suffix: '%', label: 'Success Rate', accent: '#7c3aed' },
]

const toppers = [
    { rank: '01', name: 'Aryan Gupta', exam: 'JEE Advanced', score: 'AIR 7', accent: '#00f5c4' },
    { rank: '02', name: 'Meera Pillai', exam: 'NEET UG', score: 'AIR 12', accent: '#ff4d6d' },
    { rank: '03', name: 'Rohan Verma', exam: 'CAT 2024', score: '99.97%ile', accent: '#c8ff00' },
    { rank: '04', name: 'Shreya Iyer', exam: 'JEE Main', score: 'AIR 18', accent: '#7c3aed' },
    { rank: '05', name: 'Dev Malhotra', exam: 'NEET UG', score: 'AIR 23', accent: '#00f5c4' },
    { rank: '06', name: 'Ananya Singh', exam: 'JEE Advanced', score: 'AIR 31', accent: '#ff4d6d' },
]

function Counter({ value, suffix, accent }) {
    const ref = useRef()
    const [display, setDisplay] = useState(0)

    useEffect(() => {
        const st = ScrollTrigger.create({
            trigger: ref.current,
            start: 'top 80%',
            once: true,
            onEnter: () => {
                gsap.to({ val: 0 }, {
                    val: value, duration: 2, ease: 'power2.out',
                    onUpdate: function () { setDisplay(Math.floor(this.targets()[0].val)) }
                })
            }
        })
        return () => st.kill()
    }, [value])

    return (
        <span ref={ref} className="text-4xl sm:text-5xl font-black number-counter" style={{ color: accent }}>
            {display.toLocaleString()}{suffix}
        </span>
    )
}

export default function Results() {
    const sectionRef = useRef()
    const toppersRef = useRef()

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = toppersRef.current.querySelectorAll('.topper-card')
            cards.forEach((card, i) => {
                gsap.fromTo(card,
                    { x: i % 2 === 0 ? -40 : 40, opacity: 0 },
                    {
                        x: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
                        scrollTrigger: { trigger: card, start: 'top 90%', once: true },
                        delay: (i % 3) * 0.08
                    }
                )
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section id="results" ref={sectionRef} className="py-20 relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f5c4]/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 text-[#00f5c4] text-xs font-bold uppercase tracking-[0.3em] mb-4">
                        <span className="w-8 h-px bg-[#00f5c4]" /> Proven Results
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display uppercase leading-tight">
                        <span className="text-white block">Our Students</span>
                        <span className="text-gradient-fire block">Dominate Every Exam</span>
                    </h2>
                </div>

                {/* Stats — 4 cols on lg, 2 on md */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                    {stats.map((s) => (
                        <div key={s.label} className="border border-white/10 bg-[#0a0a11] p-5 group hover:border-white/20 transition-all duration-300">
                            <Counter value={s.value} suffix={s.suffix} accent={s.accent} />
                            <div className="text-xs text-[#64648a] uppercase tracking-widest mt-2">{s.label}</div>
                            <div className="mt-3 h-0.5 w-0 group-hover:w-full transition-all duration-700" style={{ background: s.accent }} />
                        </div>
                    ))}
                </div>

                {/* Toppers table */}
                <div className="border border-white/10">
                    <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between bg-[#0a0a11]">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#64648a]">Class of 2024 — Top Performers</span>
                        <span className="flex items-center gap-1.5 text-[10px] text-[#00f5c4] font-bold uppercase tracking-widest">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00f5c4] animate-pulse" /> Live
                        </span>
                    </div>
                    <div ref={toppersRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {toppers.map((t) => (
                            <div key={t.rank}
                                className="topper-card flex items-center gap-3 p-4 border-r border-b border-white/8 hover:bg-[#0a0a11] transition-colors group"
                            >
                                <span className="text-2xl font-black font-display text-white/10 group-hover:text-white/20 transition-colors shrink-0 w-10">{t.rank}</span>
                                <div className="flex-1 min-w-0">
                                    <div className="font-bold text-white text-sm truncate">{t.name}</div>
                                    <div className="text-xs text-[#64648a]">{t.exam}</div>
                                </div>
                                <div className="text-sm font-black shrink-0" style={{ color: t.accent }}>{t.score}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
