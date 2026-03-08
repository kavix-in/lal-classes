import { GraduationCap, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const links = {
    Programs: ['Sainik School', 'Military School', 'R.K. Mission', 'Navodaya', 'IIT Foundation'],
    Resources: ['Study Material', 'Test Series', 'Entrance Tips', 'Syllabus', 'Results'],
    Institute: ['About Us', 'Our Faculty', 'Principal Message', 'Gallery', 'Contact Us'],
};

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 pt-24 pb-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-1 rounded-lg bg-white overflow-hidden w-12 h-12 shadow-md">
                                <img src="/images/logo1.jpg" alt="Lal Classes Logo" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-black text-white leading-none tracking-tight">LAL CLASSES</span>
                                <span className="text-[10px] text-[#FFF200] uppercase tracking-[0.2em] font-bold">Concept School Bihar Sharif</span>
                            </div>
                        </div>
                        <p className="text-lg leading-relaxed mb-10 max-w-sm">
                            An initiative of innovative educationists making competitive entrance exams a cakewalk for students since 2005.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#800000] hover:text-white transition-all transition-colors transform hover:scale-110">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {Object.entries(links).map(([title, items]) => (
                        <div key={title}>
                            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">{title}</h4>
                            <ul className="space-y-4">
                                {items.map(item => (
                                    <li key={item}>
                                        <a href="#" className="text-sm hover:text-[#FFF200] transition-colors font-medium">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-3 gap-12 py-12 border-y border-white/5 mb-12">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#FFF200]">
                            <Phone className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Call Us</div>
                            <div className="text-white font-black">+91 93042 22662</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#FFF200]">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Us</div>
                            <div className="text-white font-black">lalclassesbs@gmail.com</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#FFF200]">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Visit Us</div>
                            <div className="text-white font-black text-[10px] leading-tight max-w-[150px]">Musadpur, Chhoti Pahari Road, Bihar Sharif</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-bold text-slate-500 uppercase tracking-widest">
                    <div>© 2026 LAL CLASSES — ALL RIGHTS RESERVED</div>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Refund</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
