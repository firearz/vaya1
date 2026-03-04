import { motion } from 'motion/react';
import { ArrowRight, Bot, Zap, Target, Mail } from 'lucide-react';

const Navbar = () => (
    <nav className="fixed w-full z-50 bg-vaya-offwhite/80 backdrop-blur-md border-b border-vaya-dark/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="font-['Press_Start_2P'] text-xl text-vaya-blue tracking-tighter">VAYA</div>
            <div className="hidden md:flex gap-8 text-sm font-semibold text-vaya-dark/80">
                <a href="#mission" className="hover:text-vaya-blue transition-colors">Mission</a>
                <a href="#approach" className="hover:text-vaya-blue transition-colors">Approach</a>
                <a href="#works" className="hover:text-vaya-blue transition-colors">Works</a>
            </div>
            <button className="bg-vaya-blue text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-vaya-dark transition-colors">
                Let's Talk
            </button>
        </div>
    </nav>
);

const Hero = () => (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-vaya-mint/20">
        {/* Background Shapes */}
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-vaya-mint/40 blur-3xl rounded-full organic-shape-1"></div>
        <div className="absolute bottom-20 -right-20 w-[600px] h-[600px] bg-vaya-periwinkle/40 blur-3xl rounded-full organic-shape-2"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-6xl md:text-8xl font-black text-vaya-dark tracking-tight leading-[1.1] mb-6">
                    Automate the Boring.<br />
                    <span className="text-vaya-blue">Create the Extraordinary.</span>
                </h1>
                <p className="text-xl md:text-2xl text-vaya-dark/70 max-w-2xl mx-auto mb-10 font-medium pb-2">
                    VAYA is an AI Automation Agency dedicated to eliminating repetitive tasks so your team can focus on what matters.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="bg-vaya-coral text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-vaya-dark transition-all transform hover:scale-105 shadow-xl flex items-center gap-2">
                        Get an AI Audit <ArrowRight size={20} />
                    </button>
                    <button className="bg-white text-vaya-dark border-2 border-vaya-dark/10 px-8 py-4 rounded-full font-bold text-lg hover:border-vaya-dark/30 transition-colors">
                        View Our Work
                    </button>
                </div>
            </motion.div>
        </div>
    </section>
);

const Mission = () => (
    <section id="mission" className="py-32 bg-vaya-offwhite relative">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-black mb-6">Built for Scale.</h2>
                <p className="text-xl text-vaya-dark/70 max-w-2xl mx-auto">We architect intelligent systems that learn, adapt, and grow with your business.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { icon: <Bot size={32} />, title: "Intelligent Workflows", desc: "Custom AI pipelines that handle your data routing, processing, and output generation." },
                    { icon: <Zap size={32} />, title: "Rapid Execution", desc: "Slash processing times from days to seconds with advanced agentic architectures." },
                    { icon: <Target size={32} />, title: "Precision Output", desc: "Minimize human error through deterministic rule sets and advanced LLM validation." }
                ].map((card, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        key={i}
                        className="bg-white p-8 rounded-[2rem] shadow-sm border border-vaya-dark/5 hover:shadow-xl transition-shadow relative overflow-hidden group"
                    >
                        <div className="w-16 h-16 bg-vaya-mint rounded-2xl flex items-center justify-center text-vaya-blue mb-6 group-hover:bg-vaya-blue group-hover:text-white transition-colors duration-300 organic-shape-3">
                            {card.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                        <p className="text-vaya-dark/70 text-lg leading-relaxed">{card.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const Works = () => (
    <section id="works" className="py-32 bg-vaya-dark text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-vaya-blue/20 blur-[100px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10 flex items-end justify-between">
            <div>
                <h2 className="text-4xl md:text-6xl font-black mb-6">Selected Works</h2>
                <p className="text-xl text-white/70 max-w-md">Real systems built for real businesses. See how we transform operations.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-vaya-coral font-bold hover:text-white transition-colors">
                View All Cases <ArrowRight size={20} />
            </button>
        </div>

        {/* Horizontal Scroll Area */}
        <div className="flex gap-8 px-6 pb-8 overflow-x-auto no-scrollbar snap-x snap-mandatory max-w-[100vw]">
            {/* Cards */}
            {[
                { title: "Support Agent", tag: "Customer Success", color: "bg-vaya-mint text-vaya-dark", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71" },
                { title: "Lead Scraper AI", tag: "Sales", color: "bg-vaya-blue text-white", img: "https://images.unsplash.com/photo-1551434678-e076c223a692" },
                { title: "Invoice Processor", tag: "Finance", color: "bg-vaya-periwinkle text-vaya-dark", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85" },
                { title: "Content Engine", tag: "Marketing", color: "bg-vaya-coral text-white", img: "https://images.unsplash.com/photo-1432888498266-3d4432a13812" }
            ].map((work, i) => (
                <div key={i} className={`min-w-[85vw] md:min-w-[500px] h-[600px] rounded-[3rem] p-10 flex flex-col justify-between snap-center shrink-0 ${work.color} relative overflow-hidden group`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                    <img src={`${work.img}?auto=format&fit=crop&q=80&w=1000`} alt={work.title} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700" />

                    <div className="relative z-20">
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold uppercase tracking-wider">{work.tag}</span>
                    </div>
                    <div className="relative z-20">
                        <h3 className="text-4xl font-black mb-4">{work.title}</h3>
                        <button className="flex items-center gap-2 font-bold hover:gap-4 transition-all">
                            View Case Study <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

const CTA = () => (
    <section className="py-32 bg-vaya-blue relative overflow-hidden text-center text-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-vaya-coral/20 blur-[100px] rounded-full organic-shape-2"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-5xl md:text-7xl font-black mb-8">Ready to evolve?</h2>
                <p className="text-2xl text-white/80 mb-12 max-w-2xl mx-auto">Stop wasting human potential on robotic tasks. Let's map out your automation strategy.</p>
                <button className="bg-vaya-coral text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-vaya-dark transition-all transform hover:-translate-y-1 shadow-2xl flex items-center justify-center gap-3 mx-auto">
                    <Mail size={24} /> Start the Conversation
                </button>
            </motion.div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-vaya-dark text-white/50 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="font-['Press_Start_2P'] text-lg text-white/80 tracking-tighter">VAYA</div>
            <div className="text-sm">© {new Date().getFullYear()} VAYA Automation. All rights reserved.</div>
            <div className="flex gap-6 text-sm">
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
        </div>
    </footer>
);

function App() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <Mission />
            <Works />
            <CTA />
            <Footer />
        </div>
    );
}

export default App;
