import { useState, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  GitBranch,
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  Zap,
  Brain,
  Mic,
  Camera,
  Truck,
  Users,
  Calendar,
  CreditCard,
  LayoutDashboard,
  FileText,
  BarChart3,
  CheckCircle2,
  XCircle,
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI Career Development Platform',
    status: 'In Development',
    statusType: 'warning',
    category: 'AI SaaS Platform',
    description:
      'An AI-powered career development platform designed to help students and professionals improve resumes, analyse ATS compatibility, prepare for interviews, receive personalised career guidance, and track career growth through intelligent AI features.',
    tech: ['React', 'Firebase', 'Gemini AI', 'Tailwind CSS'],
    features: [
      { icon: FileText, title: 'AI Resume Analysis', desc: 'Smart resume parsing and enhancement suggestions' },
      { icon: BarChart3, title: 'ATS Score Checker', desc: 'Real-time ATS compatibility scoring' },
      { icon: Mic, title: 'AI Interview Preparation', desc: 'Mock interviews with AI feedback' },
      { icon: Brain, title: 'Career Roadmap', desc: 'Personalised career path planning' },
      { icon: CheckCircle2, title: 'Resume Builder', desc: 'Professional resume templates and builder' },
    ],
    image: '/images/project-career.png',
    buttons: [
      { label: 'Case Study', href: '#', variant: 'primary' },
      { label: 'GitHub', href: 'https://github.com/sriram162007', variant: 'secondary', hasGithub: true },
    ],
  },
  {
    id: 2,
    title: 'WhatsApp AI Expense Tracker',
    category: 'AI Automation',
    description:
      'A smart WhatsApp-based expense management system that automatically records expenses from text messages, voice notes, and receipt images while generating intelligent reports, analytics, and spending insights.',
    tech: ['n8n', 'Twilio', 'Gemini AI', 'Google Sheets'],
    features: [
      { icon: Mic, title: 'Voice Expense Tracking', desc: 'Transcribe voice notes into structured data' },
      { icon: Camera, title: 'Receipt OCR', desc: 'Extract amounts from receipt images automatically' },
      { icon: Brain, title: 'AI Expense Categorisation', desc: 'Smart category assignment using LLMs' },
      { icon: BarChart3, title: 'Monthly Reports', desc: 'Automated spending summaries and reports' },
      { icon: Zap, title: 'Budget Analytics', desc: 'Intelligent budget tracking and alerts' },
    ],
    image: '/images/project-expense.png',
    buttons: [],
  },
  {
    id: 3,
    title: 'Milk Delivery Management System',
    category: 'Business Management System',
    description:
      'A digital milk delivery management platform that simplifies customer subscriptions, delivery scheduling, billing, payment tracking, and daily operations for dairy businesses through a modern web application.',
    tech: ['React', 'Firebase', 'Node.js', 'Tailwind CSS'],
    features: [
      { icon: Users, title: 'Customer Management', desc: 'Complete customer profile and history tracking' },
      { icon: Calendar, title: 'Subscription Management', desc: 'Flexible subscription plans and cycles' },
      { icon: Truck, title: 'Daily Delivery Scheduling', desc: 'Optimised route planning and scheduling' },
      { icon: CreditCard, title: 'Billing & Payment Tracking', desc: 'Automated invoicing and payment records' },
      { icon: LayoutDashboard, title: 'Admin Dashboard', desc: 'Comprehensive admin control panel' },
    ],
    image: '/images/project-milk.png',
    buttons: [],
  },
];

const statusStyles = {
  success: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    border: 'border-emerald-500/20',
    icon: CheckCircle2,
  },
  warning: {
    bg: 'bg-amber-500/10',
    text: 'text-amber-400',
    border: 'border-amber-500/20',
    icon: XCircle,
  },
};

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-200, 200], [4, -4]);
  const rotateY = useTransform(x, [-200, 200], [-4, 4]);
  const glowX = useTransform(x, [-200, 200], ['-20%', '20%']);
  const glowY = useTransform(y, [-200, 200], ['-20%', '20%']);

  const handleMouseMove = useCallback(
    (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(e.clientX - centerX);
      y.set(e.clientY - centerY);
    },
    [x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const statusConfig = project.status ? statusStyles[project.statusType] || statusStyles.success : null;
  const StatusIcon = statusConfig?.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.9, delay: index * 0.15 }}
      className="relative group"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, perspective: 1200, transformStyle: 'preserve-3d' }}
        className="relative glass-card overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_rgba(6,182,212,0.08)]"
      >
        {/* Animated gradient border glow */}
        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0%, rgba(6,182,212,0.15) 25%, transparent 50%, rgba(59,130,246,0.15) 75%, transparent 100%)',
            filter: 'blur(1px)',
            maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'xor',
            WebkitMaskComposite: 'xor',
            padding: '1px',
          }}
        />

        {/* Mouse-follow glow */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{ x: glowX, y: glowY, left: '50%', top: '50%', translateX: '-50%', translateY: '-50%' }}
          aria-hidden="true"
        />

        <div className="relative p-1">
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-2xl aspect-[16/9]">
            <motion.img
              src={project.image}
              alt={`${project.title} preview`}
              width={1200}
              height={675}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />

            {/* Badges overlay */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.06] backdrop-blur-xl px-3 py-1.5 text-xs font-semibold text-text-primary">
                <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                {project.category}
              </span>
              {statusConfig && (
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border ${statusConfig.border} ${statusConfig.bg} backdrop-blur-xl px-3 py-1.5 text-xs font-semibold ${statusConfig.text}`}
                >
                  <StatusIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  {project.status}
                </span>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Title */}
            <motion.h3
              className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-text-primary group-hover:text-primary transition-colors duration-300"
              style={{ transformStyle: 'preserve-3d', translateZ: 20 }}
            >
              {project.title}
            </motion.h3>

            {/* Description */}
            <p className="text-base leading-relaxed text-text-secondary max-w-3xl">
              {project.description}
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-text-muted transition-all duration-300 group-hover:border-primary/20 group-hover:text-primary"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {project.features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.04] bg-white/[0.02] p-4 transition-all duration-300 group-hover:border-white/[0.08] group-hover:bg-white/[0.04]"
                  style={{ transformStyle: 'preserve-3d', translateZ: 10 }}
                >
                  <div className="mt-0.5 rounded-lg bg-primary/10 p-2 text-primary">
                    <feature.icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">{feature.title}</h4>
                    <p className="text-xs text-text-muted mt-0.5 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              {project.buttons.map((btn) => (
                <motion.a
                  key={btn.label}
                  href={btn.href}
                  target={btn.hasGithub ? '_blank' : undefined}
                  rel={btn.hasGithub ? 'noopener noreferrer' : undefined}
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                    btn.variant === 'primary'
                      ? 'bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:shadow-[0_0_24px_rgba(6,182,212,0.2)]'
                      : 'glass-card text-text-primary hover:text-primary hover:border-primary/30'
                  }`}
                >
                  {btn.hasGithub ? (
                    <GitBranch className="h-4 w-4" aria-hidden="true" />
                  ) : btn.label === 'Case Study' ? (
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  )}
                  {btn.label}
                  {btn.hasGithub && (
                    <ExternalLink className="h-3 w-3 opacity-60" aria-hidden="true" />
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Aurora gradient */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-primary/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-secondary/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-accent/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: '6s' }} />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-primary/40"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden" aria-labelledby="projects-heading">
      <BackgroundEffects />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-6"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Featured Projects
          </motion.span>

          <motion.h2
            id="projects-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary mb-6"
          >
            Real-world <span className="gradient-text">AI applications</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg leading-relaxed text-text-secondary"
          >
            Real-world AI applications, automation systems, and software solutions built to solve practical business problems.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
