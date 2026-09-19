import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  GitBranch,
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  FileText,
  BarChart3,
  Mic,
  Brain,
  Users,
  CheckCircle2,
  XCircle,
  QrCode,
  Bot,
  Smartphone,
  Zap,
  Camera,
  Calendar,
  Truck,
  CreditCard,
  LayoutDashboard,
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
  {
    id: 4,
    title: 'AI QR Resolution System',
    category: 'AI Automation',
    description:
      'An intelligent field-issue resolution system that scans QR codes placed on equipment or locations and uses AI to diagnose problems, suggest resolution steps, and trigger automated workflows for technicians and support teams.',
    tech: ['n8n', 'Gemini AI', 'Twilio', 'Google Sheets', 'REST APIs'],
    features: [
      { icon: QrCode, title: 'QR Code Scanning', desc: 'Scans equipment QR tags to capture context and asset data' },
      { icon: Bot, title: 'AI Diagnosis', desc: 'Classifies issues and recommends resolution steps using LLMs' },
      { icon: Smartphone, title: 'Mobile Workflow', desc: 'Triggers automated actions and notifications to relevant teams' },
      { icon: BarChart3, title: 'Issue Analytics', desc: 'Tracks recurring problems and resolution effectiveness' },
    ],
    image: '/images/project-qr.svg',
    buttons: [
      { label: 'GitHub', href: 'https://github.com/sriram162007', variant: 'secondary', hasGithub: true },
    ],
  },
];

const statusStyles = {
  success: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    icon: CheckCircle2,
  },
  warning: {
    bg: 'bg-amber-500/10',
    text: 'text-amber-400',
    icon: XCircle,
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const statusConfig = project.status ? statusStyles[project.statusType] || statusStyles.success : null;
  const StatusIcon = statusConfig?.icon;
  const isEven = index % 2 === 0;
  const projectNumber = String(index + 1).padStart(2, '0');

  return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        {/* Image */}
        <motion.div
          className={`relative group ${isEven ? '' : 'lg:order-2'}`}
          variants={itemVariants}
        >
        <div className="relative overflow-hidden rounded-2xl border border-border-subtle">
          <motion.img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-auto object-cover grayscale-[0.3] contrast-110 brightness-105 transition-transform duration-700 group-hover:scale-102"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div className="project-text space-y-8" variants={itemVariants}>
        <div>
          <span className="text-xs font-mono font-semibold text-text-muted tracking-wider">
            {projectNumber}
          </span>
          <div className="flex flex-wrap gap-2 mt-3 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-accent/5 px-3 py-1.5 text-xs font-semibold text-accent">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              {project.category}
            </span>
            {statusConfig && (
              <span className={`inline-flex items-center gap-1.5 rounded-full border ${statusConfig.bg} ${statusConfig.text} backdrop-blur-xl px-3 py-1.5 text-xs font-semibold`}>
                <StatusIcon className="h-3.5 w-3.5" aria-hidden="true" />
                {project.status}
              </span>
            )}
          </div>

          <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text-primary mb-4">
            {project.title}
          </h3>

          <p className="text-lg leading-relaxed text-text-secondary max-w-lg">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-lg border border-border-subtle px-3 py-1.5 text-xs font-medium text-text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-3"
            >
              <div className="rounded-lg bg-accent/10 p-2 text-accent flex-shrink-0">
                <feature.icon className="h-4 w-4" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-text-primary">{feature.title}</h4>
                <p className="text-xs text-text-muted mt-0.5 leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {project.buttons.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-2">
            {project.buttons.map((btn) => (
              <motion.a
                key={btn.label}
                href={btn.href}
                target={btn.hasGithub ? '_blank' : undefined}
                rel={btn.hasGithub ? 'noopener noreferrer' : undefined}
                whileHover={{ y: -2 }}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  btn.variant === 'primary'
                    ? 'border border-accent/30 bg-accent/5 text-accent hover:bg-accent/10'
                    : 'border border-border-subtle bg-transparent text-text-secondary hover:border-accent/30 hover:text-accent'
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
                  <ExternalLink className="h-3 w-3 opacity-40" aria-hidden="true" />
                )}
              </motion.a>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="projects"
      className="relative bg-secondary-bg py-24 sm:py-32"
      aria-labelledby="projects-heading"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase text-text-muted mb-6"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            Featured Projects
          </motion.span>
          <motion.h2
            id="projects-heading"
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary mb-6"
          >
            Real-world <span className="text-accent">AI applications</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-lg text-text-secondary">
            Real-world AI applications, automation systems, and software solutions built to solve practical business problems.
          </motion.p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
