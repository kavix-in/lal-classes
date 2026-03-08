import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Menu, X, Phone, User } from 'lucide-react';

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Courses', href: '#courses' },
    { label: 'Faculty', href: '#faculty' },
    { label: 'Results', href: '#results' },
    { label: 'About', href: '#features' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-4">
                        <div className={`transition-all duration-300 ${scrolled ? 'h-12' : 'h-16'} p-1 bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden`}>
                            <img src="https://www.lalclasses.com/Images/logo1.jpg" alt="Lal Classes Logo" className="h-full w-auto object-contain" />
                        </div>
                        <div className="flex flex-col">
                            <span className={`text-xl md:text-2xl font-black leading-none ${scrolled ? 'text-[#800000]' : 'text-white drop-shadow-md'}`}>
                                LAL CLASSES
                            </span>
                            <span className={`text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold ${scrolled ? 'text-slate-500' : 'text-white/80'}`}>
                                CONCEPT SCHOOL BIHAR SHARIF
                            </span>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <ul className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className={`text-[13px] font-extrabold uppercase tracking-widest transition-all relative group ${scrolled ? 'text-slate-700 hover:text-[#800000]' : 'text-white hover:text-[#FFF200]'
                                        }`}
                                >
                                    {link.label}
                                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#800000] transition-all duration-300 group-hover:w-full ${scrolled ? 'bg-[#800000]' : 'bg-[#FFF200]'}`} />
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Actions */}
                    <div className="hidden lg:flex items-center gap-6">
                        <a href="tel:+919304222662" className={`flex items-center gap-2 text-sm font-black ${scrolled ? 'text-[#800000]' : 'text-white'}`}>
                            <Phone className="w-4 h-4 text-[#C59D5F]" />
                            +91 93042 22662
                        </a>
                        <button className="btn-yellow scale-90">
                            ADMISSION OPEN
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-[#800000]' : 'text-white'}`}
                        onClick={() => setMobileOpen(true)}
                    >
                        <Menu className="w-8 h-8" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[2000] bg-white flex flex-col p-8"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <span className="text-xl font-black text-slate-900">LAL CLASSES</span>
                            <button onClick={() => setMobileOpen(false)} className="p-2 text-slate-900 bg-slate-100 rounded-full">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-3xl font-bold text-slate-800 hover:text-red-600 transition-colors"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        <div className="mt-auto flex flex-col gap-4">
                            <button className="w-full bg-red-600 text-white py-4 rounded-2xl font-bold text-xl">
                                ENROLL NOW
                            </button>
                            <button className="w-full border-2 border-slate-200 text-slate-900 py-4 rounded-2xl font-bold text-xl">
                                STUDENT LOGIN
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
