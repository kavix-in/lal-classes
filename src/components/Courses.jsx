import { motion } from 'framer-motion';
import { BookOpen, UserCheck, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

const courses = [
    {
        title: 'Learner (Class III)',
        description: 'Specialized program for Class 3 students aiming for the initial stages of competitive excellence.',
        duration: '1 Year Foundation',
        icon: BookOpen,
        color: 'bg-[#800000]',
        tags: ['Class III', 'Foundation'],
    },
    {
        title: 'Junior Foundation (Class IV)',
        description: 'Intensive preparation for entrance exams like Sainik School, Military School, and R.K. Mission.',
        duration: '1 Year Foundation',
        icon: ShieldCheck,
        color: 'bg-[#C59D5F]',
        tags: ['Class IV', 'Military School'],
    },
    {
        title: 'Target (Class V)',
        description: 'High-focus target batch for absolute results in prestigious boarding school entrances across India.',
        duration: '1 Year Intensive',
        icon: UserCheck,
        color: 'bg-[#800000]',
        tags: ['Class V', 'Selection Target'],
    },
];

export default function Courses() {
    return (
        <section id="courses" className="py-24 px-6 max-w-7xl mx-auto bg-white">
            <div className="text-center mb-16">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-red-600 font-black uppercase tracking-widest text-sm"
                >
                    Our Programs
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-6"
                >
                    Designed for <span className="text-red-600">Victory</span>
                </motion.h2>
                <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {courses.map((course, i) => (
                    <motion.div
                        key={course.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-red-600/20 hover:shadow-2xl transition-all duration-500"
                    >
                        <div className={`w-14 h-14 ${course.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                            <course.icon className="w-7 h-7" />
                        </div>

                        <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-red-600 transition-colors">
                            {course.title}
                        </h3>

                        <p className="text-slate-500 mb-8 leading-relaxed">
                            {course.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {course.tags.map(tag => (
                                <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-white border border-slate-200 text-slate-600 px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-slate-400 text-sm font-bold">
                                <Clock className="w-4 h-4" />
                                {course.duration}
                            </div>
                            <button className="text-red-600 font-black flex items-center gap-1 group/btn">
                                LEARN MORE <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <button className="px-8 py-3 border-2 border-red-600 text-red-600 rounded-full font-semibold transition-all hover:bg-red-50 active:scale-95">
                    VIEW ALL COURSES
                </button>
            </div>
        </section>
    );
}
