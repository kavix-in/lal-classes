import { motion } from 'framer-motion';
import { Star, BookOpen } from 'lucide-react';
const faculty = [
    {
        name: 'Devendra Prasad (Devi Lal)',
        role: 'Principal & Director',
        college: 'Devi Lal Educational & Welfare Trust',
        exp: '25+ Years',
        image: 'http://www.lalclasses.com/images/dir-photo.png',
        color: 'bg-[#800000]'
    },
    {
        name: 'R. K. Singh',
        role: 'HOD - Mathematics',
        college: 'Innovation Specialist',
        exp: '15+ Years',
        avatar: 'RS',
        color: 'bg-[#C59D5F]'
    },
    {
        name: 'M. K. Verma',
        role: 'HOD - Science',
        college: 'Conceptual Master',
        exp: '12+ Years',
        avatar: 'MV',
        color: 'bg-[#800000]'
    },
    {
        name: 'S. Kumari',
        role: 'Junior Foundation Lead',
        college: 'Bihar Sharif Alumnus',
        exp: '10+ Years',
        avatar: 'SK',
        color: 'bg-[#C59D5F]'
    },
];

export default function Faculty() {
    return (
        <section id="faculty" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-[#800000] font-black uppercase tracking-[0.3em] text-sm"
                >
                    Leadership & Mentorship
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-black text-slate-900 mt-2 mb-12"
                >
                    Our <span className="text-[#800000]">Guiding</span> Lights
                </motion.h2>

                <div className="grid md:grid-cols-4 gap-8">
                    {faculty.map((f, i) => (
                        <motion.div
                            key={f.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group"
                        >
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-slate-100">
                                {f.image ? (
                                    <img src={f.image} alt={f.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                ) : (
                                    <div className={`absolute inset-0 flex items-center justify-center text-6xl font-black text-white ${f.color} opacity-40`}>
                                        {f.avatar}
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <h3 className="text-xl font-black text-slate-900 mb-1 group-hover:text-[#800000] transition-colors">{f.name}</h3>
                            <p className="text-[#800000] text-xs font-black uppercase tracking-widest mb-4 italic">{f.role}</p>

                            <div className="flex items-center justify-center gap-4 pt-4 border-t border-slate-100">
                                <div className="flex items-center gap-1.5">
                                    <Star className="w-4 h-4 text-[#C59D5F] fill-[#C59D5F]" />
                                    <span className="text-xs font-bold text-white bg-[#C59D5F] px-2 py-0.5 rounded">Excellent</span>
                                </div>
                                <div className="w-1 h-1 rounded-full bg-slate-300" />
                                <div className="flex items-center gap-1.5">
                                    <BookOpen className="w-4 h-4 text-slate-400" />
                                    <span className="text-xs font-bold text-slate-500">{f.exp}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
