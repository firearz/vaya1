/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Workflow, 
  Zap, 
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Play,
  ArrowUpRight
} from 'lucide-react';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1200px]">
    <div className="bg-white/70 backdrop-blur-xl border border-vaya-border rounded-full px-6 md:px-10 h-16 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        <img 
          src="https://i.ibb.co/XfBFwP0z/new.png" 
          alt="VAYA Logo" 
          className="h-12 w-auto" 
          referrerPolicy="no-referrer"
        />
        <span className="text-[16px] font-bold tracking-[0.1em] uppercase text-vaya-ink/40">Labs</span>
      </div>
      
      <div className="hidden md:flex items-center gap-10 text-[12px] font-medium tracking-tight">
        <a href="#experiments" className="hover:text-vaya-accent-blue transition-colors">Experiments</a>
        <a href="#mission" className="hover:text-vaya-accent-blue transition-colors">Mission</a>
        <a href="#contact" className="hover:text-vaya-accent-blue transition-colors">Connect</a>
      </div>
      
      <button className="px-6 py-2 bg-white text-vaya-accent-blue border border-vaya-accent-blue text-[12px] font-bold rounded-full hover:bg-vaya-accent-blue hover:text-white transition-all duration-300">
        Sign In
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-40 pb-24 md:pt-56 md:pb-32 px-8 md:px-16 overflow-hidden flex flex-col items-center text-center">
    {/* Background Decorative Blobs */}
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-vaya-bubblegum/30 blur-[100px] blob-1 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-vaya-periwinkle/30 blur-[120px] blob-2 animate-pulse" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/4 right-[5%] w-[400px] h-[400px] bg-vaya-lemon/20 blur-[100px] blob-3" />
    </div>
    
    <div className="max-w-[900px] mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-vaya-bubblegum/20 border border-vaya-bubblegum/30 text-vaya-accent-pink rounded-full text-[11px] font-bold tracking-[0.05em] uppercase mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Ai Automation Studio</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl leading-[1.1] font-bold text-vaya-ink mb-8 tracking-tight text-balance">
          We eliminate the tasks. <br />
          <span className="text-vaya-accent-blue">You keep the hours.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-vaya-ink/60 max-w-2xl mx-auto mb-12 leading-relaxed font-normal">
          We build the automations. They run the busywork. You run the business.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-vaya-accent-blue border border-vaya-accent-blue text-base font-bold rounded-full hover:bg-vaya-accent-blue hover:text-white transition-all duration-300 shadow-lg shadow-vaya-accent-blue/10">
            Get My Free Audit ⇾
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-vaya-ink border-2 border-vaya-ink text-base font-bold rounded-full hover:bg-vaya-ink hover:text-white transition-all duration-300">
            See How It Works ⇾
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const Experiments = () => {
  const experiments = [
    { 
      title: "Project Genie", 
      icon: <Workflow className="w-8 h-8 text-vaya-accent-pink" />,
      description: "An autonomous workflow engine that designs its own logic based on your goals.",
      bg: "bg-vaya-bubblegum/30",
      accent: "bg-vaya-accent-pink",
      tag: "Featured"
    },
    { 
      title: "Neural Flow", 
      icon: <Zap className="w-8 h-8 text-vaya-accent-blue" />,
      description: "Real-time process optimization that eliminates friction before it happens.",
      bg: "bg-vaya-periwinkle/30",
      accent: "bg-vaya-accent-blue",
      tag: "Lab Session"
    },
    { 
      title: "Amoeba AI", 
      icon: <MessageSquare className="w-8 h-8 text-vaya-accent-green" />,
      description: "Self-shaping agents that adapt their interface to match your communication style.",
      bg: "bg-vaya-mint/30",
      accent: "bg-vaya-accent-green",
      tag: "Experimental"
    },
  ];

  return (
    <section id="experiments" className="py-20 md:py-32 px-8 md:px-16 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-vaya-ink">Recommended for you</h2>
          <p className="text-base md:text-lg text-vaya-ink/50 max-w-xl mx-auto font-normal">
            Discover the latest experiments from our research labs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {experiments.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`group ${exp.bg} p-10 rounded-[48px] flex flex-col h-[480px] relative overflow-hidden hover-labs border border-vaya-border`}
            >
              <div className="absolute top-8 left-8">
                <span className="text-[11px] font-bold tracking-[0.05em] uppercase px-3 py-1 bg-white/90 rounded-full text-vaya-ink/60">
                  {exp.tag}
                </span>
              </div>
              
              <div className="mt-12 w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                {exp.icon}
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight text-vaya-ink">{exp.title}</h3>
              <p className="text-sm md:text-base text-vaya-ink/60 leading-relaxed mb-auto font-normal">
                {exp.description}
              </p>
              
              <div className="flex items-center justify-between pt-6">
                <button className="text-sm font-bold text-vaya-ink hover:text-vaya-accent-blue transition-colors flex items-center gap-2">
                  Try it out <ArrowRight className="w-4 h-4" />
                </button>
                <div className={`w-10 h-10 ${exp.accent} rounded-full flex items-center justify-center text-vaya-white shadow-md`}>
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Mission = () => (
  <section id="mission" className="py-20 md:py-32 px-8 md:px-16 bg-vaya-off-white relative overflow-hidden">
    {/* Decorative Blobs */}
    <div className="absolute top-1/2 left-[-10%] -translate-y-1/2 w-[500px] h-[500px] bg-vaya-lemon/30 blur-[100px] blob -z-10" />
    <div className="absolute bottom-[-5%] right-[-5%] w-[400px] h-[400px] bg-vaya-bubblegum/20 blur-[80px] blob -z-10" />
    
    <div className="max-w-[1200px] mx-auto relative z-10">
      <div className="flex flex-col items-center text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1] tracking-tight text-vaya-ink max-w-3xl">
          Demystifying AI through <br /> 
          <span className="text-vaya-accent-blue">playful design.</span>
        </h2>
        <p className="text-lg md:text-xl text-vaya-ink/60 max-w-2xl leading-relaxed font-normal">
          We believe that the most powerful technology should feel like a toy. Our mission is to make autonomous systems approachable, safe, and fun for everyone.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "Safe Play", desc: "Experiments designed for exploration without risk.", color: "text-vaya-accent-pink", bg: "bg-vaya-bubblegum/10" },
            { title: "Human First", desc: "Technology that adapts to you, not the other way around.", color: "text-vaya-accent-blue", bg: "bg-vaya-periwinkle/10" },
            { title: "Open Access", desc: "Tools built for everyone to explore and build upon.", color: "text-vaya-accent-green", bg: "bg-vaya-mint/10" },
            { title: "Future Ready", desc: "Systems that evolve with the changing landscape.", color: "text-vaya-accent-yellow", bg: "bg-vaya-lemon/10" }
          ].map((item, i) => (
            <div key={i} className={`${item.bg} p-8 rounded-[40px] border border-vaya-border shadow-sm hover-labs cursor-default`}>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className={`w-5 h-5 ${item.color}`} />
                <h4 className="text-lg font-bold tracking-tight text-vaya-ink">{item.title}</h4>
              </div>
              <p className="text-vaya-ink/50 text-sm font-normal leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="relative">
          <div className="aspect-square bg-white rounded-[60px] p-10 flex flex-col justify-center items-center group overflow-hidden relative border border-vaya-border shadow-xl shadow-vaya-ink/5">
            <div className="absolute inset-0 opacity-10 grayscale group-hover:grayscale-0 transition-all duration-1000">
              <img 
                src="https://picsum.photos/seed/play/800/800" 
                alt="Playful AI" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="relative z-10 text-center space-y-6">
              <div className="w-20 h-20 bg-vaya-ink rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-700">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
              <h3 className="text-2xl font-bold text-vaya-ink">See it in action</h3>
              <p className="text-sm text-vaya-ink/60 font-normal max-w-[240px]">Watch how Project Genie builds a workflow in seconds.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Gallery = () => {
  const items = [
    { title: "Neural Flow Visualization", bg: "bg-vaya-bubblegum/30", size: "col-span-2 row-span-2", img: "https://picsum.photos/seed/neural/800/800" },
    { title: "Amoeba Agents", bg: "bg-vaya-periwinkle/30", size: "col-span-1 row-span-1", img: "https://picsum.photos/seed/amoeba/400/400" },
    { title: "Genie Logic", bg: "bg-vaya-lemon/30", size: "col-span-1 row-span-1", img: "https://picsum.photos/seed/logic/400/400" },
    { title: "Lab Sessions", bg: "bg-vaya-mint/30", size: "col-span-2 row-span-1", img: "https://picsum.photos/seed/lab/800/400" },
  ];

  return (
    <section className="py-20 md:py-32 px-8 md:px-16 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-vaya-ink">Gallery</h2>
          <p className="text-base md:text-lg text-vaya-ink/50 max-w-xl mx-auto font-normal">
            A visual journey through our latest research and design.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-6 h-[600px]">
          {items.map((item, i) => (
            <div key={i} className={`${item.bg} ${item.size} rounded-[48px] border border-vaya-border p-8 flex flex-col justify-end group cursor-pointer overflow-hidden relative hover-labs`}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-vaya-ink relative z-10 group-hover:translate-x-2 transition-transform duration-300">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const stories = [
    {
      name: "Sarah Jenkins",
      role: "CEO, TechFlow",
      content: "VAYA redesigned our entire operational logic. It feels like magic.",
      avatar: "https://picsum.photos/seed/sarah/200/200",
      bg: "bg-vaya-bubblegum/20",
      accent: "text-vaya-accent-pink"
    },
    {
      name: "Marcus Chen",
      role: "Operations Manager",
      content: "The most intuitive AI tools I've ever used. My team loves it.",
      avatar: "https://picsum.photos/seed/marcus/200/200",
      bg: "bg-vaya-periwinkle/20",
      accent: "text-vaya-accent-blue"
    },
    {
      name: "Elena Rodriguez",
      role: "Creative Director",
      content: "Finally, technology that feels human and inspiring.",
      avatar: "https://picsum.photos/seed/elena/200/200",
      bg: "bg-vaya-mint/20",
      accent: "text-vaya-accent-green"
    }
  ];

  return (
    <section className="py-20 md:py-32 px-8 md:px-16 bg-vaya-off-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-vaya-ink">What people are saying</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`p-10 rounded-[48px] ${s.bg} border border-vaya-border flex flex-col gap-8 hover-labs`}
            >
              <p className="text-lg md:text-xl text-vaya-ink/80 leading-relaxed font-normal italic">
                "{s.content}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-vaya-ink/5">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <img src={s.avatar} alt={s.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className={`text-sm font-bold ${s.accent}`}>{s.name}</h4>
                  <p className="text-[10px] text-vaya-ink/40 font-bold uppercase tracking-wider">{s.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }

      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      console.error(error);
      setErrorMessage(error.message);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-8 md:px-16 bg-white">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-vaya-ink">Let's build together</h2>
          <p className="text-base md:text-lg text-vaya-ink/50 font-normal">
            Have an idea for an experiment? We'd love to hear it.
          </p>
        </div>

        <div className="bg-vaya-off-white p-10 md:p-16 rounded-[60px] border border-vaya-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-vaya-ink/40 ml-4">Name</label>
                <input required name="name" type="text" placeholder="Your Name" className="w-full px-6 py-4 bg-white rounded-full border border-vaya-border focus:border-vaya-accent-blue focus:outline-none transition-all text-base font-normal" />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-vaya-ink/40 ml-4">Email</label>
                <input required name="email" type="email" placeholder="hello@example.com" className="w-full px-6 py-4 bg-white rounded-full border border-vaya-border focus:border-vaya-accent-blue focus:outline-none transition-all text-base font-normal" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-vaya-ink/40 ml-4">Message</label>
              <textarea required name="message" rows={4} placeholder="Tell us about your project..." className="w-full px-8 py-6 bg-white rounded-[32px] border border-vaya-border focus:border-vaya-accent-blue focus:outline-none transition-all text-base font-normal resize-none" />
            </div>
            
            <button 
              disabled={status === 'loading'}
              type="submit" 
              className="w-full py-4 bg-white text-vaya-accent-blue border border-vaya-accent-blue text-base font-bold rounded-full hover:bg-vaya-accent-blue hover:text-white transition-all duration-300 disabled:opacity-50 shadow-lg shadow-vaya-accent-blue/10"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            <AnimatePresence>
              {status === 'success' && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center text-vaya-accent-green text-sm font-bold">
                  Message sent successfully!
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center text-vaya-accent-coral text-sm font-bold">
                  {errorMessage}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-white pt-20 pb-12 px-8 md:px-16 border-t border-vaya-border relative overflow-hidden">
    {/* Background Blobs */}
    <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-vaya-bubblegum/20 blur-[80px] blob-1 -z-10" />
    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-vaya-periwinkle/10 blur-[80px] blob-2 -z-10" />
    
    <div className="max-w-[1200px] mx-auto">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex flex-col items-start gap-2 mb-6">
            <img 
              src="https://i.ibb.co/XfBFwP0z/new.png" 
              alt="VAYA Logo" 
              className="h-12 w-auto" 
              referrerPolicy="no-referrer"
            />
            <span className="text-xl font-bold tracking-tight">VAYA Labs</span>
          </div>
          <p className="text-vaya-ink/50 max-w-xs font-normal leading-relaxed">
            Building the playground for autonomous intelligence.
          </p>
        </div>
        
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-vaya-ink/30 mb-6">Explore</h4>
          <ul className="space-y-3 text-vaya-ink/60 text-sm font-normal">
            <li><a href="#" className="hover:text-vaya-accent-blue transition-colors">Experiments</a></li>
            <li><a href="#" className="hover:text-vaya-accent-blue transition-colors">Lab Sessions</a></li>
            <li><a href="#" className="hover:text-vaya-accent-blue transition-colors">Events</a></li>
            <li><a href="#" className="hover:text-vaya-accent-blue transition-colors">Gallery</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-vaya-ink/30 mb-6">Connect</h4>
          <ul className="space-y-3 text-vaya-ink/60 text-sm font-normal">
            <li><a href="#" className="hover:text-vaya-accent-blue transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-vaya-accent-blue transition-colors">GitHub</a></li>
            <li><a href="#" className="hover:text-vaya-accent-blue transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-vaya-accent-blue transition-colors">Discord</a></li>
          </ul>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-vaya-border gap-6 text-[11px] font-bold text-vaya-ink/30">
        <p>© 2024 VAYA AI. All rights reserved.</p>
        <div className="flex items-center gap-8">
          <a href="#" className="hover:text-vaya-ink transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-vaya-ink transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-vaya-accent-blue selection:text-white bg-white">
      <Navbar />
      <main>
        <Hero />
        <Experiments />
        <Mission />
        <Gallery />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
