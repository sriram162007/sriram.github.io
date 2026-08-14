import { useRef, useCallback } from 'react';
import BackgroundEffects from './BackgroundEffects';
import SectionHeader from './SectionHeader';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import {
  Bot,
  MonitorSmartphone,
  BriefcaseBusiness,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Automation',
    description:
      'Automate repetitive tasks using intelligent workflows that connect different tools, reduce manual effort, and save time.',
    features: ['Workflow Automation', 'AI Agents', 'Process Automation', 'Business Integration'],
    color: 'primary',
  },
  {
    icon: MonitorSmartphone,
    title: 'Web Applications',
    description:
      'Develop fast, responsive, and scalable web applications with clean user interfaces and modern technologies.',
    features: ['Responsive Design', 'Modern UI', 'Secure Authentication', 'Dashboard Development'],
    color: 'secondary',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Business Systems',
    description:
      'Build custom software that helps businesses manage customers, operations, reports, and daily workflows more efficiently.',
    features: ['Admin Dashboards', 'CRM Solutions', 'Business Portals', 'Data Management'],
    color: 'accent',
  },
  {
    icon: Sparkles,
    title: 'AI Integration',
    description:
      'Integrate modern AI capabilities into websites and applications to improve user experience and automate decision making.',
    features: ['Gemini AI', 'OpenAI APIs', 'Prompt Engineering', 'AI Features'],
    color: 'primary',
  },
];

const colorMap = {
  primary: {
    iconBg: 'bg-accent/10',
    iconText: 'text-accent',
    badgeBorder: 'border-accent/20',
    badgeBg: 'bg-accent/5',
    badgeText: 'text-accent',
    glow: 'rgba(255,106,0,0.2)',
  },
  secondary: {
    iconBg: 'bg-accent/10',
    iconText: 'text-accent',
    badgeBorder: 'border-accent/20',
    badgeBg: 'bg-accent/5',
    badgeText: 'text-accent',
    glow: 'rgba(255,138,51,0.2)',
  },
  accent: {
    iconBg: 'bg-accent/10',
    iconText: 'text-accent',
    badgeBorder: 'border-accent/20',
    badgeBg: 'bg-accent/5',
    badgeText: 'text-accent',
    glow: 'rgba(255,106,0,0.2)',
  },
};

function ServiceCard({ service, index }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-150, 150], [3, -3]);
  const rotateY = useTransform(x, [-150, 150], [-3, 3]);
  const glowX = useTransform(x, [-150, 150], ['-30%', '30%']);
  const glowY = useTransform(y, [-150, 150], ['-30%', '30%']);

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

  const colors = colorMap[service.color] || colorMap.primary;
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative group"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, perspective: 1000, transformStyle: 'preserve-3d' }}
        className="relative glass-card orange-glow overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,106,0,0.08)]"
      >
        <motion.div
          className="absolute w-[350px] h-[350px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            x: glowX,
            y: glowY,
            left: '50%',
            top: '50%',
            translateX: '-50%',
            translateY: '-50%',
            background: `radial-gradient(circle, ${colors.glow} 0%, transparent 70%)`,
          }}
          aria-hidden="true"
        />

        <div className="relative p-6 sm:p-8 space-y-5">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className={`w-16 h-16 rounded-2xl ${colors.iconBg} flex items-center justify-center ${colors.iconText} group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className="h-8 w-8" aria-hidden="true" />
          </motion.div>

          <h3 className="font-display text-xl sm:text-2xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
            {service.title}
          </h3>

          <p className="text-sm sm:text-base leading-relaxed text-text-secondary">
            {service.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {service.features.map((feature) => (
              <motion.span
                key={feature}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`inline-flex items-center rounded-xl border ${colors.badgeBorder} ${colors.badgeBg} px-3 py-2 text-xs font-semibold ${colors.badgeText} cursor-default transition-shadow duration-300 hover:shadow-[0_0_16px_${colors.glow}]`}
              >
                {feature}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
export default function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden" aria-labelledby="services-heading">
      <BackgroundEffects particleCount={12} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          badge="Services"
          title={<>What I <span className="gradient-text">Build</span></>}
          subtitle="I build practical software and AI-powered solutions that help businesses simplify work, improve productivity, and create better digital experiences."
          headingId="services-heading"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="glass-card orange-glow relative overflow-hidden p-8 sm:p-12 md:p-16 text-center">
            <div
              className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-700"
              aria-hidden="true"
            />
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 blur-[120px] rounded-full -translate-y-1/2"
              aria-hidden="true"
            />

            <div className="relative z-10 space-y-6">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text-primary"
              >
                Have an idea you&apos;d like to build?
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-text-secondary"
              >
                Whether it&apos;s an AI automation, a modern web application, or a custom business solution, I&apos;m always excited to work on meaningful projects and explore new ideas.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4 pt-2"
              >
                <a
                  href="https://wa.me/918248261165"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn inline-flex items-center gap-2 rounded-2xl bg-accent px-8 py-4 font-display font-semibold text-background transition-all hover:shadow-[0_0_32px_rgba(255,106,0,0.35)] hover:scale-105 active:scale-95"
                >
                  Let&apos;s Connect
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#projects"
                  className="magnetic-btn inline-flex items-center gap-2 rounded-2xl border border-white/[0.12] bg-white/[0.03] px-8 py-4 font-display font-semibold text-text-primary transition-all hover:border-accent/40 hover:bg-accent/[0.06] hover:scale-105 active:scale-95"
                >
                  View My Projects
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
