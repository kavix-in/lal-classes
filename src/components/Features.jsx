import { motion } from 'framer-motion';
import { Brain, Video, BarChart2, MessageCircle, Clock, Shield, Smartphone, Globe } from 'lucide-react';

const features = [
    { icon: Brain, title: 'Shortcut Tricks', desc: 'Master conceptual shortcuts for rapid problem solving.', color: 'text-[#800000]', bg: 'bg-[#800000]/5' },
    { icon: Globe, title: 'Lucid Methods', desc: 'Complex topics explained in the most simple & clear way.', color: 'text-[#C59D5F]', bg: 'bg-[#C59D5F]/5' },
    { icon: BarChart2, title: 'Results Legend', desc: 'Highest success rate in Bihar Sharif for 15+ years.', color: 'text-[#800000]', bg: 'bg-[#800000]/5' },
    { icon: Smartphone, title: 'Daily Practice', desc: 'Rigorous DPPS and weekly tests to ensure mastery.', color: 'text-[#C59D5F]', bg: 'bg-[#C59D5F]/5' },
];

export default function Features() {
    return (
        <section id="features" className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[#800000] font-black uppercase tracking-widest text-sm"
                        >
                            The Lal Classes Edge
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-8 leading-tight"
                        >
                            Why Bihar's Best Toppers <br /> Choose <span className="text-[#800000]">Us</span>
                        </motion.h2>
                        <p className="text-xl text-slate-500 mb-12 leading-relaxed">
                            LAL CLASSES is not just a coaching center; it's a legacy of excellence that has been shaping the futures of students since 2005.
                        </p>

                        <div className="space-y-6">
                            {[
                                'Pioneers of Entrance Coaching in Bihar Sharif',
                                'Innovative shortcut tricks for Math & Science',
                                'Special focus on Sainik & Military School entrance',
                                'Personalized care under Devendra Prasad\'s vision'
                            ].map((item, i) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 text-slate-700 font-bold"
                                >
                                    <div className="w-6 h-6 rounded-full bg-[#800000] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#800000]/20">
                                        <Shield className="w-3.5 h-3.5" />
                                    </div>
                                    {item}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 relative">
                        {/* Decorative background element */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#FFF200]/10 blur-[100px] rounded-full -z-10" />

                        {features.map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 bg-white rounded-3xl border border-slate-100 hover:border-[#800000]/20 hover:shadow-2xl transition-all hover:-translate-y-2 group"
                            >
                                <div className={`w-14 h-14 ${feature.bg} ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="font-black text-slate-900 mb-2 text-lg">{feature.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
