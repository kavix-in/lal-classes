import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
    const dotRef = useRef()
    const ringRef = useRef()
    const rafRef = useRef()

    useEffect(() => {
        const dot = dotRef.current
        const ring = ringRef.current

        document.body.style.cursor = 'none'

        let mx = window.innerWidth / 2
        let my = window.innerHeight / 2
        let rx = mx, ry = my

        const onMove = (e) => {
            mx = e.clientX
            my = e.clientY
            gsap.to(dot, { x: mx, y: my, duration: 0.05, ease: 'none' })
        }

        const animateRing = () => {
            rx += (mx - rx) * 0.1
            ry += (my - ry) * 0.1
            gsap.set(ring, { x: rx, y: ry })
            rafRef.current = requestAnimationFrame(animateRing)
        }
        animateRing()
        window.addEventListener('mousemove', onMove)

        // Hover states
        const onEnter = () => {
            gsap.to(ring, { scale: 1.5, duration: 0.3, ease: 'power2.out' })
            gsap.to('.c-dot', { scale: 0, duration: 0.15 })
        }
        const onLeave = () => {
            gsap.to(ring, { scale: 1, duration: 0.4, ease: 'power2.out' })
            gsap.to('.c-dot', { scale: 1, duration: 0.25 })
        }
        const onDown = () => gsap.to(ring, { scale: 0.75, duration: 0.1 })
        const onUp = () => gsap.to(ring, { scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.4)' })

        document.querySelectorAll('a, button, input').forEach(el => {
            el.addEventListener('mouseenter', onEnter)
            el.addEventListener('mouseleave', onLeave)
        })
        window.addEventListener('mousedown', onDown)
        window.addEventListener('mouseup', onUp)

        // Spin the ring
        gsap.to('.c-ring-svg', {
            rotation: 360, duration: 6, ease: 'none', repeat: -1, transformOrigin: '50% 50%'
        })

        return () => {
            document.body.style.cursor = 'auto'
            window.removeEventListener('mousemove', onMove)
            window.removeEventListener('mousedown', onDown)
            window.removeEventListener('mouseup', onUp)
            cancelAnimationFrame(rafRef.current)
        }
    }, [])

    return (
        <>
            {/* Outer ring — lags behind */}
            <div
                ref={ringRef}
                className="fixed pointer-events-none z-[9998]"
                style={{ left: 0, top: 0, width: 52, height: 52, transform: 'translate(-50%,-50%)' }}
            >
                <svg
                    className="c-ring-svg w-full h-full"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Solid base ring */}
                    <circle cx="26" cy="26" r="24" stroke="#00f5c4" strokeWidth="1.5" opacity="0.35" />

                    {/* Bright dashed arcs — these are the visible part */}
                    <circle
                        cx="26" cy="26" r="24"
                        stroke="#00f5c4"
                        strokeWidth="2.5"
                        strokeDasharray="16 64"
                        strokeLinecap="round"
                        opacity="1"
                    />

                    {/* 4 bright tick marks */}
                    <line x1="26" y1="1" x2="26" y2="9" stroke="#00f5c4" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="51" y1="26" x2="43" y2="26" stroke="#00f5c4" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="26" y1="51" x2="26" y2="43" stroke="#00f5c4" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="1" y1="26" x2="9" y2="26" stroke="#00f5c4" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
            </div>

            {/* Inner dot — snaps instantly */}
            <div
                ref={dotRef}
                className="fixed pointer-events-none z-[9999]"
                style={{ left: 0, top: 0, transform: 'translate(-50%,-50%)' }}
            >
                <div
                    className="c-dot rounded-full bg-[#00f5c4]"
                    style={{
                        width: 10,
                        height: 10,
                        boxShadow: '0 0 0 2px rgba(0,245,196,0.3), 0 0 16px #00f5c4, 0 0 32px rgba(0,245,196,0.5)',
                    }}
                />
            </div>
        </>
    )
}
