/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { 
  ArrowRight, 
  Workflow, 
  Zap, 
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Play,
  ArrowUpRight,
  Clock,
  Users,
  TrendingUp,
  Shield,
  ChevronDown,
  Mail,
  Calendar,
  Star,
  Search,
  FileText,
  Settings,
  Send,
  Menu,
  X,
  ExternalLink,
  Bot,
  BarChart3,
  RefreshCw,
  Globe,
  Check
} from 'lucide-react';
import heroDashboard from './assets/hero-dashboard.png';
import workflowDiagram from './assets/workflow-diagram.png';

// --- Scroll Animation Wrapper ---
const ScrollReveal = ({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- Navbar ---
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className={`max-w-[1200px] mx-auto px-4 md:px-6`}>
        <div className={`glass-nav rounded-full px-6 md:px-10 h-16 flex items-center justify-between transition-all duration-500 ${scrolled ? 'shadow-lg shadow-black/5' : ''}`}>
          <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src="https://i.ibb.co/XfBFwP0z/new.png" 
              alt="VAYA Logo" 
              className="h-10 w-auto" 
              referrerPolicy="no-referrer"
            />
            <span className="text-[14px] font-bold tracking-[0.1em] uppercase text-vaya-ink/40">Labs</span>
          </a>
          
          <div className="hidden md:flex items-center gap-10 text-[12px] font-semibold tracking-tight text-vaya-ink/70">
            <a href="#services" className="hover:text-vaya-accent-blue transition-colors">Services</a>
            <a href="#process" className="hover:text-vaya-accent-blue transition-colors">Process</a>
            <a href="#work" className="hover:text-vaya-accent-blue transition-colors">Our Work</a>
            <a href="#testimonials" className="hover:text-vaya-accent-blue transition-colors">Results</a>
            <a href="#faq" className="hover:text-vaya-accent-blue transition-colors">FAQ</a>
          </div>
          
          <a 
            href="#contact" 
            className="hidden md:inline-flex items-center gap-2 px-7 py-2.5 bg-vaya-accent-blue text-white text-[12px] font-bold rounded-full hover:bg-blue-700 transition-all duration-300 cta-glow"
          >
            Get My Free Audit
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <button 
            className="md:hidden p-2 text-vaya-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 glass-nav rounded-3xl p-6 flex flex-col gap-4"
            >
              <a href="#services" onClick={() => setMobileOpen(false)} className="text-sm font-semibold py-2 hover:text-vaya-accent-blue transition-colors">Services</a>
              <a href="#process" onClick={() => setMobileOpen(false)} className="text-sm font-semibold py-2 hover:text-vaya-accent-blue transition-colors">Process</a>
              <a href="#work" onClick={() => setMobileOpen(false)} className="text-sm font-semibold py-2 hover:text-vaya-accent-blue transition-colors">Our Work</a>
              <a href="#testimonials" onClick={() => setMobileOpen(false)} className="text-sm font-semibold py-2 hover:text-vaya-accent-blue transition-colors">Results</a>
              <a href="#faq" onClick={() => setMobileOpen(false)} className="text-sm font-semibold py-2 hover:text-vaya-accent-blue transition-colors">FAQ</a>
              <a 
                href="#contact" 
                onClick={() => setMobileOpen(false)}
                className="mt-2 text-center px-7 py-3 bg-vaya-accent-blue text-white text-sm font-bold rounded-full"
              >
                Get My Free Audit →
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

// --- Hero ---
const Hero = () => (
  <section className="relative pt-32 pb-12 md:pt-44 md:pb-20 px-6 md:px-16 overflow-hidden">
    {/* Background Decorative Blobs */}
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-vaya-bubblegum/30 blur-[100px] blob-1 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-vaya-periwinkle/30 blur-[120px] blob-2 animate-pulse" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/4 right-[5%] w-[400px] h-[400px] bg-vaya-lemon/20 blur-[100px] blob-3" />
    </div>
    
    <div className="max-w-[1200px] mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left - Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-vaya-bubblegum/20 border border-vaya-bubblegum/30 text-vaya-accent-pink rounded-full text-[11px] font-bold tracking-[0.05em] uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Automation Studio</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] font-bold text-vaya-ink mb-6 tracking-tight text-balance">
            We build automations that
            <span className="gradient-text"> save you 10+ hours</span> every week.
          </h1>
          
          <p className="text-base md:text-lg text-vaya-dark-gray max-w-xl mb-8 leading-relaxed">
            Lead routing, client onboarding, invoice automation, follow-up sequences — we build the systems that run your busywork so you can grow your business.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
            <a 
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-vaya-accent-blue text-white text-base font-bold rounded-full hover:bg-blue-700 transition-all duration-300 cta-glow text-center"
            >
              Get My Free Audit →
            </a>
            <a 
              href="#process"
              className="w-full sm:w-auto px-8 py-4 bg-white text-vaya-ink border-2 border-vaya-ink/10 text-base font-bold rounded-full hover:border-vaya-ink/30 hover:bg-vaya-off-white transition-all duration-300 text-center"
            >
              See How It Works
            </a>
          </div>

          {/* Stats line */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-vaya-dark-gray">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-vaya-accent-blue" />
              <span className="font-semibold">10+ hrs saved/week</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-vaya-accent-pink" />
              <span className="font-semibold">Delivered in 2 weeks</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-vaya-accent-green" />
              <span className="font-semibold">3x faster response</span>
            </div>
          </div>
        </motion.div>

        {/* Right - Product Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="animate-float">
            <img 
              src={heroDashboard}
              alt="VAYA Automation Dashboard showing workflow builder with connected nodes and metrics"
              className="w-full rounded-3xl shadow-2xl shadow-vaya-accent-blue/10 border border-vaya-border"
            />
          </div>
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -bottom-4 -left-4 md:-left-8 bg-white px-5 py-3 rounded-2xl shadow-xl border border-vaya-border flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-vaya-accent-green/20 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-vaya-accent-green" />
            </div>
            <div>
              <p className="text-xs font-bold text-vaya-ink">80% less manual work</p>
              <p className="text-[10px] text-vaya-ink/50">Average client result</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>

    {/* Trust Bar */}
    <div className="max-w-[1200px] mx-auto mt-20">
      <ScrollReveal>
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-vaya-ink/30 mb-6">
          Built with the tools you already use
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-vaya-ink/25">
          {['Zapier', 'Make', 'Airtable', 'HubSpot', 'Notion', 'Slack', 'Google Sheets', 'Calendly'].map((tool) => (
            <span key={tool} className="text-sm md:text-base font-bold tracking-tight hover:text-vaya-ink/50 transition-colors cursor-default">
              {tool}
            </span>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

// --- Services ---
const Services = () => {
  const services = [
    { 
      title: "Workflow Automation", 
      icon: <Workflow className="w-7 h-7 text-vaya-accent-pink" />,
      outcome: "Save 10+ hours per week on repetitive admin",
      description: "We map where your time is leaking and automate the tasks draining your team.",
      tasks: ["Lead capture & CRM routing", "Follow-up email sequences", "Internal alerts & notifications", "Task assignment & handoffs", "Report generation"],
      proof: "Avg. result: 12 hrs/week saved",
      bg: "bg-vaya-bubblegum/20",
      accent: "bg-vaya-accent-pink",
      accentText: "text-vaya-accent-pink",
      tag: "SAVE TIME"
    },
    { 
      title: "Business Process Automation", 
      icon: <Zap className="w-7 h-7 text-vaya-accent-blue" />,
      outcome: "Scale operations without adding headcount",
      description: "Your core processes — rebuilt as automated, error-free systems that run themselves.",
      tasks: ["Client onboarding flows", "Invoice & billing automation", "Inventory & order management", "Data sync across platforms", "Approval workflows"],
      proof: "Avg. result: 80% less manual work",
      bg: "bg-vaya-periwinkle/20",
      accent: "bg-vaya-accent-blue",
      accentText: "text-vaya-accent-blue",
      tag: "SCALE FASTER"
    },
    { 
      title: "AI Chatbot & Lead Qualifier", 
      icon: <MessageSquare className="w-7 h-7 text-vaya-accent-green" />,
      outcome: "Respond to every lead in under 2 minutes, 24/7",
      description: "Intelligent chatbots that qualify leads, book calls, and answer FAQs — without a single human.",
      tasks: ["24/7 lead qualification", "Appointment booking", "FAQ auto-responses", "CRM integration", "Handoff to human when needed"],
      proof: "Avg. result: 3x faster lead response",
      bg: "bg-vaya-mint/20",
      accent: "bg-vaya-accent-green",
      accentText: "text-vaya-accent-green",
      tag: "NEVER MISS A LEAD"
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 px-6 md:px-16 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-vaya-accent-blue mb-4 block">WHAT WE BUILD</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-vaya-ink">
              Automations that deliver <span className="text-vaya-accent-blue">real business value</span>
            </h2>
            <p className="text-base md:text-lg text-vaya-dark-gray max-w-2xl mx-auto">
              Not just tools — outcomes. Every automation is designed to solve a specific problem and deliver measurable results.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className={`group ${svc.bg} p-8 md:p-10 rounded-[32px] flex flex-col h-full relative overflow-hidden border border-vaya-border shadow-sm card-hover cursor-default`}>
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-[11px] font-bold tracking-[0.05em] uppercase px-3 py-1.5 bg-white/90 rounded-full ${svc.accentText}`}>
                    {svc.tag}
                  </span>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    {svc.icon}
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight text-vaya-ink">{svc.title}</h3>
                <p className={`text-sm font-bold ${svc.accentText} mb-3`}>{svc.outcome}</p>
                <p className="text-sm text-vaya-dark-gray leading-relaxed mb-6">
                  {svc.description}
                </p>

                {/* Task list */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {svc.tasks.map((task, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-vaya-ink/70">
                      <Check className={`w-4 h-4 ${svc.accentText} mt-0.5 flex-shrink-0`} />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>

                {/* Proof point */}
                <div className={`mt-auto pt-5 border-t border-vaya-ink/5`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-vaya-ink/50 uppercase tracking-wider">{svc.proof}</span>
                    <div className={`w-9 h-9 ${svc.accent} rounded-full flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- How It Works ---
const HowItWorks = () => {
  const steps = [
    { 
      step: "01", 
      title: "Discovery Call", 
      desc: "One 30-minute call. We learn how your business runs, where the bottlenecks are, and what's eating your time.",
      deliverables: "Workflow map & priority list",
      timeline: "Day 1",
      color: "text-vaya-accent-pink", 
      bg: "bg-vaya-bubblegum/15",
      borderColor: "border-vaya-accent-pink/20"
    },
    { 
      step: "02", 
      title: "Audit & Spec", 
      desc: "We document every time leak, map your processes, and design the automation blueprint — before writing a single line.",
      deliverables: "Automation spec document",
      timeline: "Days 2–3",
      color: "text-vaya-accent-blue", 
      bg: "bg-vaya-periwinkle/15",
      borderColor: "border-vaya-accent-blue/20"
    },
    { 
      step: "03", 
      title: "Build & Test", 
      desc: "We build your custom automations, connect your tools, and rigorously test every workflow before handoff.",
      deliverables: "Working automations + test report",
      timeline: "Days 4–10",
      color: "text-vaya-accent-green", 
      bg: "bg-vaya-mint/15",
      borderColor: "border-vaya-accent-green/20"
    },
    { 
      step: "04", 
      title: "Launch & Support", 
      desc: "We deploy, train your team, and provide 30 days of support. If something breaks, we fix it — free.",
      deliverables: "Docs + training + 30-day support",
      timeline: "Days 11–14",
      color: "text-vaya-accent-yellow", 
      bg: "bg-vaya-lemon/15",
      borderColor: "border-vaya-accent-yellow/20"
    }
  ];

  return (
    <section id="process" className="py-20 md:py-32 px-6 md:px-16 bg-vaya-dark-section relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-vaya-accent-blue/5 blur-[120px] blob-1" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-vaya-accent-pink/5 blur-[100px] blob-2" />
      </div>
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-vaya-accent-blue mb-4 block">OUR PROCESS</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-[1.1] tracking-tight text-white max-w-3xl">
              From first call to <span className="text-vaya-accent-blue">fully automated</span> in 14 days
            </h2>
            <p className="text-base md:text-lg text-white/50 max-w-2xl leading-relaxed">
              A clear, proven process. You always know what's happening, what you're getting, and when it'll be done.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className={`bg-vaya-dark-card p-8 rounded-[28px] border border-vaya-border-light dark-card-hover cursor-default flex flex-col h-full`}>
                <div className="mb-5">
                  <span className={`text-3xl font-black ${item.color} opacity-40`}>
                    {item.step}
                  </span>
                </div>
                <h4 className="text-lg font-bold tracking-tight text-white mb-3">{item.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
                
                <div className="space-y-3 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <FileText className={`w-3.5 h-3.5 ${item.color}`} />
                    <span className="text-xs text-white/40">{item.deliverables}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className={`w-3.5 h-3.5 ${item.color}`} />
                    <span className="text-xs text-white/40">{item.timeline}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/30 text-sm">
            <span className="font-semibold">Tools we work with:</span>
            {['Zapier', 'Make', 'Airtable', 'HubSpot', 'Notion', 'Slack', 'OpenAI', 'Google Workspace'].map((tool) => (
              <span key={tool} className="px-3 py-1 rounded-full border border-white/10 text-xs font-medium text-white/40 hover:text-white/60 hover:border-white/20 transition-colors">
                {tool}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

// --- Automations Gallery ---
const Gallery = () => {
  const items = [
    { 
      title: "Lead Follow-Up Flow", 
      problem: "Leads waited 6+ hours for a response",
      result: "Response time cut to under 2 minutes",
      metric: "98% faster response",
      bg: "bg-vaya-bubblegum/20", 
      size: "md:col-span-2 md:row-span-2",
      icon: <Send className="w-6 h-6" />,
      accentColor: "text-vaya-accent-pink"
    },
    { 
      title: "24/7 Lead Qualifier", 
      problem: "Unqualified leads clogging the pipeline",
      result: "Auto-qualifies and routes to the right rep",
      metric: "3x more qualified leads",
      bg: "bg-vaya-periwinkle/20", 
      size: "col-span-1 row-span-1",
      icon: <Bot className="w-6 h-6" />,
      accentColor: "text-vaya-accent-blue"
    },
    { 
      title: "Auto Invoicing", 
      problem: "Hours spent on manual billing each month",
      result: "Invoices sent automatically on completion",
      metric: "Zero billing admin",
      bg: "bg-vaya-lemon/20", 
      size: "col-span-1 row-span-1",
      icon: <FileText className="w-6 h-6" />,
      accentColor: "text-vaya-accent-yellow"
    },
    { 
      title: "Client Onboarding", 
      problem: "Manual setup took 2+ hours per client",
      result: "Fully automated from signed to set up",
      metric: "80% less setup time",
      bg: "bg-vaya-mint/20", 
      size: "md:col-span-2 row-span-1",
      icon: <Users className="w-6 h-6" />,
      accentColor: "text-vaya-accent-green"
    },
  ];

  return (
    <section id="work" className="py-20 md:py-32 px-6 md:px-16 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-vaya-accent-blue mb-4 block">WHAT WE'VE SHIPPED</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-vaya-ink">
              Real automations. <span className="text-vaya-accent-blue">Real results.</span>
            </h2>
            <p className="text-base md:text-lg text-vaya-dark-gray max-w-2xl mx-auto">
              Every automation solves a real business problem and delivers measurable ROI from day one.
            </p>
          </div>
        </ScrollReveal>

        {/* Workflow Diagram */}
        <ScrollReveal>
          <div className="mb-12 bg-vaya-off-white rounded-3xl border border-vaya-border p-6 md:p-10">
            <p className="text-xs font-bold uppercase tracking-wider text-vaya-ink/40 mb-4">Example Workflow: Lead Follow-Up</p>
            <img 
              src={workflowDiagram} 
              alt="Lead follow-up automation workflow diagram showing the process from new lead to sales notification" 
              className="w-full rounded-2xl"
            />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08} className={item.size}>
              <div className={`${item.bg} rounded-[28px] border border-vaya-border p-8 flex flex-col justify-between group cursor-default card-hover h-full min-h-[200px]`}>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm ${item.accentColor}`}>
                      {item.icon}
                    </div>
                    <span className={`text-xs font-bold ${item.accentColor} bg-white/80 px-3 py-1 rounded-full`}>
                      {item.metric}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-vaya-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-vaya-ink/50 mb-1"><span className="font-semibold text-vaya-ink/60">Before:</span> {item.problem}</p>
                  <p className="text-sm text-vaya-ink/50"><span className="font-semibold text-vaya-accent-green">After:</span> {item.result}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Testimonials ---
const Testimonials = () => {
  const stories = [
    {
      name: "James Richardson",
      role: "CEO, Sterling Properties",
      industry: "Real Estate",
      content: "We were spending 12 hours a week manually qualifying leads and sending follow-ups. VAYA automated the entire pipeline — from lead capture to CRM routing to follow-up emails. Our response time went from 6 hours to under 2 minutes, and we haven't missed a lead since.",
      result: "12 hrs/week saved · 98% faster response",
      avatar: "https://picsum.photos/seed/james_r/200/200",
      bg: "bg-vaya-bubblegum/15",
      accent: "text-vaya-accent-pink",
      stars: 5
    },
    {
      name: "Priya Sharma",
      role: "Founder & MD, Pixel&Flow Agency",
      industry: "Marketing Agency",
      content: "Client onboarding used to take a full day of manual work — contracts, welcome emails, Slack invites, Notion setup, project boards. VAYA built a flow that does it all the moment a contract is signed. Our team now onboards 3x more clients with zero extra effort.",
      result: "80% less onboarding time · 3x capacity",
      avatar: "https://picsum.photos/seed/priya_s/200/200",
      bg: "bg-vaya-periwinkle/15",
      accent: "text-vaya-accent-blue",
      stars: 5
    },
    {
      name: "Aman Rajput",
      role: "Operations Director, QuickCart India",
      industry: "E-Commerce",
      content: "I was skeptical about automation — thought it was only for big companies. Within the first week, VAYA saved me 3 hours every single day on inventory updates, order confirmations, and invoice generation. The ROI was clear before the first month ended.",
      result: "3 hrs/day saved · ROI in 2 weeks",
      avatar: "https://picsum.photos/seed/aman_r/200/200",
      bg: "bg-vaya-mint/15",
      accent: "text-vaya-accent-green",
      stars: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 px-6 md:px-16 bg-vaya-off-white">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-vaya-accent-blue mb-4 block">CLIENT RESULTS</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-vaya-ink">
              Don't take our word for it
            </h2>
            <p className="text-base md:text-lg text-vaya-dark-gray max-w-xl mx-auto">
              Real businesses. Real outcomes. Real hours saved.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className={`p-8 md:p-10 rounded-[28px] ${s.bg} border border-vaya-border flex flex-col gap-6 card-hover shadow-sm cursor-default h-full`}>
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: s.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-vaya-accent-yellow text-vaya-accent-yellow" />
                  ))}
                </div>

                <p className="text-base md:text-lg text-vaya-ink/80 leading-relaxed flex-grow">
                  "{s.content}"
                </p>

                {/* Result badge */}
                <div className={`px-4 py-2 bg-white rounded-full text-xs font-bold ${s.accent} inline-flex items-center gap-2 self-start`}>
                  <TrendingUp className="w-3.5 h-3.5" />
                  {s.result}
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-vaya-ink/5">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
                    <img src={s.avatar} alt={s.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold text-vaya-ink`}>{s.name}</h4>
                    <p className="text-[11px] text-vaya-ink/50 font-semibold">{s.role}</p>
                    <p className={`text-[10px] ${s.accent} font-bold uppercase tracking-wider`}>{s.industry}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- FAQ Section ---
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How long does it take to build my automations?",
      a: "Most projects are completed within 7–14 days. Simple workflows can be done in under a week, while complex multi-tool integrations typically take 10–14 days. We'll give you a clear timeline after the discovery call."
    },
    {
      q: "What tools do you work with?",
      a: "We build with Zapier, Make (Integromat), Airtable, HubSpot, Notion, Slack, Google Workspace, Calendly, Stripe, OpenAI, and 200+ other platforms. If you use it, we can probably automate it."
    },
    {
      q: "How much does it cost?",
      a: "Every project is scoped after the free audit call. Pricing depends on complexity, number of workflows, and tools involved. Most clients invest between $1,500–$5,000 for a full automation package. ROI is typically seen within the first month."
    },
    {
      q: "What if something breaks after launch?",
      a: "Every project includes 30 days of free support. If an automation breaks or needs adjustment, we fix it at no extra cost. After 30 days, we offer ongoing support plans or you can manage it yourself with our documentation."
    },
    {
      q: "Do I need any technical skills?",
      a: "Not at all. We handle everything — from design to build to deployment. You'll get full documentation and a training walkthrough so your team can understand and manage the systems confidently."
    },
    {
      q: "What happens during the free audit?",
      a: "A 30-minute call where we learn about your business, identify time leaks, and show you exactly what can be automated. You'll walk away with a prioritized list of automation opportunities — no obligation."
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-32 px-6 md:px-16 bg-white">
      <div className="max-w-[800px] mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-vaya-accent-blue mb-4 block">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-vaya-ink">
              Common questions
            </h2>
            <p className="text-base md:text-lg text-vaya-dark-gray max-w-xl mx-auto">
              Everything you need to know before getting started.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
                  openIndex === i ? 'border-vaya-accent-blue/30 bg-vaya-periwinkle/10 shadow-sm' : 'border-vaya-border bg-white hover:border-vaya-ink/10'
                }`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex items-center justify-between p-5 md:p-6">
                  <h3 className="text-sm md:text-base font-bold text-vaya-ink pr-4">{faq.q}</h3>
                  <ChevronDown className={`w-5 h-5 text-vaya-ink/30 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-vaya-accent-blue' : ''}`} />
                </div>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-vaya-dark-gray leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Contact Form ---
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
    <section id="contact" className="py-20 md:py-32 px-6 md:px-16 bg-vaya-dark-section relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-vaya-accent-blue/8 blur-[120px] blob-1" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-vaya-accent-pink/5 blur-[100px] blob-2" />
      </div>

      <div className="max-w-[900px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-vaya-accent-blue mb-4 block">GET STARTED</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white">
              Ready to get your time back?
            </h2>
            <p className="text-base md:text-lg text-white/50 max-w-xl mx-auto">
              Book a free 30-minute audit. We'll show you exactly what to automate first — and how fast we can do it.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid md:grid-cols-5 gap-8">
            {/* Form */}
            <div className="md:col-span-3 bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-[28px] border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-white/40 ml-1">Name</label>
                    <input required name="name" type="text" placeholder="Your Name" className="w-full px-5 py-3.5 bg-white/5 rounded-xl border border-white/10 focus:border-vaya-accent-blue focus:outline-none transition-all text-sm text-white placeholder-white/20" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-white/40 ml-1">Email</label>
                    <input required name="email" type="email" placeholder="hello@example.com" className="w-full px-5 py-3.5 bg-white/5 rounded-xl border border-white/10 focus:border-vaya-accent-blue focus:outline-none transition-all text-sm text-white placeholder-white/20" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-white/40 ml-1">What's eating your time?</label>
                  <textarea required name="message" rows={3} placeholder="Tell us about the repetitive tasks you want to eliminate..." className="w-full px-5 py-3.5 bg-white/5 rounded-xl border border-white/10 focus:border-vaya-accent-blue focus:outline-none transition-all text-sm text-white placeholder-white/20 resize-none" />
                </div>
                
                <button 
                  disabled={status === 'loading'}
                  type="submit" 
                  className="w-full py-4 bg-vaya-accent-blue text-white text-base font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 cta-glow"
                >
                  {status === 'loading' ? 'Sending...' : 'Get My Free Audit →'}
                </button>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center bg-vaya-accent-green/10 border border-vaya-accent-green/20 rounded-xl p-4">
                      <p className="text-vaya-accent-green text-sm font-bold">🎉 Message sent! We'll reply within 1 business day.</p>
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center text-vaya-accent-coral text-sm font-bold">
                      {errorMessage}
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </div>

            {/* Side Info */}
            <div className="md:col-span-2 flex flex-col gap-6 justify-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-vaya-accent-blue" />
                  What happens next?
                </h4>
                <ul className="space-y-2.5">
                  {[
                    "We reply within 1 business day",
                    "30-min discovery call scheduled",
                    "Free audit of your workflows",
                    "No obligation, no pressure"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/50 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-vaya-accent-green mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-vaya-accent-pink" />
                  Prefer to book directly?
                </h4>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-vaya-accent-blue hover:text-blue-400 transition-colors"
                >
                  Book a call on Calendly
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              
              <div className="flex items-center gap-2 px-2">
                <Shield className="w-4 h-4 text-white/20" />
                <p className="text-xs text-white/30">Your data is never shared. We respect your privacy.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => (
  <footer className="bg-vaya-dark-section pt-20 pb-12 px-6 md:px-16 border-t border-white/5 relative overflow-hidden">
    <div className="max-w-[1200px] mx-auto">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img 
              src="https://i.ibb.co/XfBFwP0z/new.png" 
              alt="VAYA Logo" 
              className="h-10 w-auto brightness-200" 
              referrerPolicy="no-referrer"
            />
            <span className="text-lg font-bold tracking-tight text-white">VAYA Labs</span>
          </div>
          <p className="text-white/40 max-w-sm leading-relaxed text-sm mb-6">
            We build custom automations that save businesses 10+ hours a week. Lead routing, onboarding, invoicing, and more — delivered in 14 days or less.
          </p>
          <div className="flex items-center gap-4 text-white/30">
            <a href="mailto:hello@vayalabs.com" className="text-sm font-semibold hover:text-white/60 transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" />
              hello@vayalabs.com
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-white/20 mb-6">Services</h4>
          <ul className="space-y-3 text-white/40 text-sm">
            <li><a href="#services" className="hover:text-white/70 transition-colors">Workflow Automation</a></li>
            <li><a href="#services" className="hover:text-white/70 transition-colors">Process Automation</a></li>
            <li><a href="#services" className="hover:text-white/70 transition-colors">AI Chatbots</a></li>
            <li><a href="#work" className="hover:text-white/70 transition-colors">Case Studies</a></li>
            <li><a href="#faq" className="hover:text-white/70 transition-colors">FAQ</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-white/20 mb-6">Industries</h4>
          <ul className="space-y-3 text-white/40 text-sm">
            <li><span className="cursor-default">Real Estate</span></li>
            <li><span className="cursor-default">Marketing Agencies</span></li>
            <li><span className="cursor-default">E-Commerce</span></li>
            <li><span className="cursor-default">Professional Services</span></li>
            <li><span className="cursor-default">SaaS & Startups</span></li>
          </ul>
        </div>
      </div>

      {/* Stats bar */}
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 py-8 mb-8 border-y border-white/5">
        {[
          { value: "50+", label: "Automations Built" },
          { value: "10+", label: "Hours Saved Weekly (Avg)" },
          { value: "14", label: "Days to Launch" },
          { value: "98%", label: "Client Satisfaction" },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <p className="text-2xl md:text-3xl font-black text-vaya-accent-blue">{stat.value}</p>
            <p className="text-[10px] font-bold uppercase tracking-wider text-white/30 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-semibold text-white/20">
        <p>© 2026 VAYA Labs. All rights reserved.</p>
        <div className="flex items-center gap-8">
          <a href="#" className="hover:text-white/40 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white/40 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white/40 transition-colors">Twitter</a>
          <a href="#" className="hover:text-white/40 transition-colors">LinkedIn</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- App ---
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Gallery />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
