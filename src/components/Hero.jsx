import { motion } from 'framer-motion';
import { ChevronRight, Play, Users, Award, BookOpen } from 'lucide-react';

const stats = [
    { icon: Users, value: '50K+', label: 'Students' },
    { icon: Award, value: '98%', label: 'Success' },
    { icon: BookOpen, value: '15+', label: 'Years' },
];

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="http://www.lalclasses.com/Admin/images/071221031623.jpg"
                    alt="Lal Classes Campus"
                    className="w-full h-full object-cover scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#800000]/95 via-[#800000]/80 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 bg-[#FFF200]/10 border border-[#FFF200]/20 px-4 py-2 rounded-lg mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#FFF200] animate-pulse" />
                        <span className="text-[#FFF200] text-xs font-black uppercase tracking-widest">A Centre of Results Makers!</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-8"
                    >
                        IIT/PMT <br />
                        <span className="text-[#FFF200]">FOUNDATION</span> <br />
                        SCHOOL.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl md:text-2xl text-white/80 mb-12 max-w-lg leading-relaxed font-medium"
                    >
                        LAL CLASSES Concept School Bihar Sharif - Preparing students to excel in competitive exams through conceptual excellence.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="flex flex-wrap gap-4"
                    >
                        <button className="btn-yellow text-lg py-4 px-10 shadow-2xl shadow-yellow-500/20 uppercase tracking-tighter">
                            ADMISSION 2026-27
                        </button>
                        <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-lg font-black hover:bg-white/20 transition-all uppercase tracking-tighter">
                            EXPLORE COURSES
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="relative hidden lg:block perspective-1000"
                >
                    <div className="relative group overflow-hidden rounded-3xl border-4 border-[#FFF200]/30 shadow-3xl">
                        <img
                            src="http://www.lalclasses.com/Admin/images/271121030029.jpg"
                            alt="Students"
                            className="w-full h-auto grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#800000] via-transparent to-transparent opacity-60" />

                        <div className="absolute bottom-8 left-8 right-8 text-white">
                            <div className="text-4xl font-black mb-2 leading-none">98% SUCCESS</div>
                            <div className="text-[#FFF200] font-black tracking-widest text-sm uppercase">Legacy of Bihar Sharif</div>
                        </div>
                    </div>

                    {/* Floating Result Card */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -top-10 -right-10 bg-white p-6 rounded-2xl shadow-2xl border-l-8 border-[#800000]"
                    >
                        <div className="text-[#800000] font-black text-3xl mb-1">AIR 1</div>
                        <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Sainik School Results</div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
