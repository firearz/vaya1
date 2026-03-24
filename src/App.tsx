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
      <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <img 
          src="https://i.ibb.co/XfBFwP0z/new.png" 
          alt="VAYA Logo" 
          className="h-12 w-auto" 
          referrerPolicy="no-referrer"
        />
        <span className="text-[16px] font-bold tracking-[0.1em] uppercase text-vaya-ink/40">Labs</span>
      </a>
      
      <div className="hidden md:flex items-center gap-10 text-[12px] font-medium tracking-tight">
        <a href="#experiments" className="hover:text-vaya-accent-blue transition-colors">Services</a>
        <a href="#mission" className="hover:text-vaya-accent-blue transition-colors">Process</a>
        <a href="#gallery" className="hover:text-vaya-accent-blue transition-colors">Our Work</a>
        <a href="#contact" className="hover:text-vaya-accent-blue transition-colors">Connect</a>
      </div>
      
      <a href="#contact" className="px-6 py-2 bg-white text-vaya-accent-blue border border-vaya-accent-blue text-[12px] font-bold rounded-full hover:bg-vaya-accent-blue hover:text-white transition-all duration-300">
        Get My Free Audit ⇗
      </a>
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
      title: "Workflow Automation", 
      icon: <Workflow className="w-8 h-8 text-vaya-accent-pink" />,
      description: "We map exactly where your time is leaking — and show you what to automate first.",
      bg: "bg-vaya-bubblegum/30",
      accent: "bg-vaya-accent-pink",
      tag: "SAVE TIME",
      cta: "See an example →"
    },
    { 
      title: "Business Process Automation", 
      icon: <Zap className="w-8 h-8 text-vaya-accent-blue" />,
      description: "Your entire operation — running itself. We map your core business processes end-to-end and rebuild them as automated systems.",
      bg: "bg-vaya-periwinkle/30",
      accent: "bg-vaya-accent-blue",
      tag: "SCALE FASTER",
      cta: "How it works →"
    },
    { 
      title: "ChatBot", 
      icon: <MessageSquare className="w-8 h-8 text-vaya-accent-green" />,
      description: "Always-on. Always responsive. We build intelligent chatbots that handle enquiries, qualify leads, book appointments, and answer FAQs — 24/7, without a single human needed.",
      bg: "bg-vaya-mint/30",
      accent: "bg-vaya-accent-green",
      tag: "NEVER MISS A LEAD",
      cta: "Talk to ours →"
    },
  ];

  return (
    <section id="experiments" className="py-20 md:py-32 px-8 md:px-16 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-vaya-ink">SERVICES</h2>
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
              className={`group ${exp.bg} p-10 rounded-[48px] flex flex-col h-[480px] relative overflow-hidden hover-labs border border-vaya-border shadow-sm cursor-default`}
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
                  {exp.cta}
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
          HOW IT <span className="text-vaya-accent-blue">WORKS.</span>
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-vaya-ink mb-4">From manual chaos to running itself.</h3>
        <p className="text-lg md:text-xl text-vaya-ink/60 max-w-2xl leading-relaxed font-normal">
          Most clients are saving 10+ hours a week within 2 weeks of working with us.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { step: "Step 1", title: "Discovery", desc: "One call. We learn how your business actually runs.", color: "text-vaya-accent-pink", bg: "bg-vaya-bubblegum/20" },
          { step: "Step 2", title: "Audit", desc: "We find every time leak and map what to automate.", color: "text-vaya-accent-blue", bg: "bg-vaya-periwinkle/20" },
          { step: "Step 3", title: "Build", desc: "Custom automations delivered in 5–7 days. Tested and documented.", color: "text-vaya-accent-green", bg: "bg-vaya-mint/20" },
          { step: "Step 4", title: "Launch", desc: "We hand it over, train your team, and stay on for support.", color: "text-vaya-accent-yellow", bg: "bg-vaya-lemon/20" }
        ].map((item, i) => (
          <div key={i} className={`${item.bg} p-10 rounded-[48px] border border-vaya-border shadow-sm hover-labs cursor-default flex flex-col h-full`}>
            <div className="mb-6">
              <span className={`text-[11px] font-bold uppercase tracking-widest ${item.color} bg-white px-3 py-1 rounded-full shadow-sm`}>
                {item.step}
              </span>
            </div>
            <h4 className="text-xl font-bold tracking-tight text-vaya-ink mb-4">{item.title}</h4>
            <p className="text-vaya-ink/60 text-base font-normal leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Gallery = () => {
  const items = [
    { 
      title: "Lead Follow-Up Flow", 
      desc: "Up to 10 hrs back. Every week.", 
      bg: "bg-vaya-bubblegum/30", 
      size: "col-span-2 row-span-2", 
      img: "https://picsum.photos/seed/followup/800/800",
      descPos: "top-right"
    },
    { 
      title: "24/7 Lead Qualifier", 
      desc: "Never miss a lead. Ever.", 
      bg: "bg-vaya-periwinkle/30", 
      size: "col-span-1 row-span-1", 
      img: "https://picsum.photos/seed/qualifier/400/400",
      descPos: "top-left"
    },
    { 
      title: "Auto Invoicing", 
      desc: "Get paid. Without asking.", 
      bg: "bg-vaya-lemon/30", 
      size: "col-span-1 row-span-1", 
      img: "https://picsum.photos/seed/invoice/400/400",
      descPos: "top-left"
    },
    { 
      title: "Client Onboarding", 
      desc: "From signed to set up. Automatically.", 
      bg: "bg-vaya-mint/30", 
      size: "col-span-2 row-span-1", 
      img: "https://picsum.photos/seed/onboarding/800/400",
      descPos: "top-right"
    },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 px-8 md:px-16 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-vaya-ink">Automations that ship.</h2>
          <p className="text-base md:text-lg text-vaya-ink/50 max-w-xl mx-auto font-normal">
            This is what your week looks like after VAYA builds your system — less admin, more momentum.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-6 h-[600px]">
          {items.map((item, i) => (
            <div key={i} className={`${item.bg} ${item.size} rounded-[48px] border border-vaya-border p-8 flex flex-col justify-between group cursor-pointer overflow-hidden relative`}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              
              <div className={`relative z-10 flex ${item.descPos === 'top-right' ? 'justify-end' : 'justify-start'}`}>
                <p className="text-[11px] font-bold uppercase tracking-wider text-vaya-ink/40 bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full">
                  {item.desc}
                </p>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-vaya-ink relative z-10 group-hover:translate-x-2 transition-transform duration-300">
                {item.title}
              </h3>
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
      name: "James R.",
      role: "Real Estate Agency Owner",
      content: "We were spending hours every week chasing leads manually. VAYA automated the whole thing. It just runs.",
      avatar: "https://picsum.photos/seed/james/200/200",
      bg: "bg-vaya-bubblegum/20",
      accent: "text-vaya-accent-pink"
    },
    {
      name: "Priya S.",
      role: "Marketing Agency Founder",
      content: "Our onboarding used to take a full day. Now it's done before I finish my morning coffee.",
      avatar: "https://picsum.photos/seed/priya/200/200",
      bg: "bg-vaya-periwinkle/20",
      accent: "text-vaya-accent-blue"
    },
    {
      name: "Aman R.",
      role: "E-Commerce Business Owner",
      content: "I was skeptical. Within the first week I got 3 hours back. Every single day.",
      avatar: "https://picsum.photos/seed/aman/200/200",
      bg: "bg-vaya-mint/20",
      accent: "text-vaya-accent-green"
    }
  ];

  return (
    <section className="py-20 md:py-32 px-8 md:px-16 bg-vaya-off-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-vaya-ink">What people are saying</h2>
          <p className="text-base md:text-lg text-vaya-ink/50 max-w-xl mx-auto font-normal">
            Early clients. Real feedback.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`p-10 rounded-[48px] ${s.bg} border border-vaya-border flex flex-col gap-8 hover-labs shadow-sm cursor-default`}
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
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-vaya-accent-blue mb-4 block">GET STARTED</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-vaya-ink">Your competitors are already automating.</h2>
          <p className="text-base md:text-lg text-vaya-ink/50 font-normal">
            The best time to automate was last year. The second best is now.
          </p>
        </div>

        <div className="bg-vaya-off-white p-10 md:p-16 rounded-[60px] border border-vaya-border hover-labs shadow-sm cursor-default">
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
              <textarea required name="message" rows={4} placeholder="What's eating most of your time right now?" className="w-full px-8 py-6 bg-white rounded-[32px] border border-vaya-border focus:border-vaya-accent-blue focus:outline-none transition-all text-base font-normal resize-none" />
            </div>
            
            <button 
              disabled={status === 'loading'}
              type="submit" 
              className="w-full py-4 bg-white text-vaya-accent-blue border border-vaya-accent-blue text-base font-bold rounded-full hover:bg-vaya-accent-blue hover:text-white transition-all duration-300 disabled:opacity-50 shadow-lg shadow-vaya-accent-blue/10"
            >
              {status === 'loading' ? 'Sending...' : 'Start Saving Time →'}
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
            <li><a href="#experiments" className="hover:text-vaya-accent-blue transition-colors">Service</a></li>
            <li><a href="#mission" className="hover:text-vaya-accent-blue transition-colors">Process</a></li>
            <li><a href="#gallery" className="hover:text-vaya-accent-blue transition-colors">Our Work</a></li>
            <li><a href="#contact" className="hover:text-vaya-accent-blue transition-colors">Connect</a></li>
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
        <p>© 2026 VAYA AI. All rights reserved.</p>
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
