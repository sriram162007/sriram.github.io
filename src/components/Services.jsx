import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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
  primary: { iconBg: 'bg-accent/10', iconText: 'text-accent', borderColor: 'border-accent/20' },
  secondary: { iconBg: 'bg-accent/10', iconText: 'text-accent', borderColor: 'border-accent/20' },
  accent: { iconBg: 'bg-accent/10', iconText: 'text-accent', borderColor: 'border-accent/20' },
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="services"
      className="relative bg-tertiary-bg py-24 sm:py-32"
      aria-labelledby="services-heading"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? 'visible' : 'hidden'}
          variants={container}
          className="text-center mb-20"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase text-text-muted mb-6"
          >
            Services
          </motion.span>
          <motion.h2
            id="services-heading"
            variants={item}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary mb-6"
          >
            What I <span className="text-accent">Build</span>
          </motion.h2>
          <motion.p variants={item} className="max-w-2xl mx-auto text-lg text-text-secondary">
            I build practical software and AI-powered solutions that help businesses simplify work, improve productivity, and create better digital experiences.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={container}
          className="space-y-16 mb-24"
        >
          {services.map((service, index) => {
            const colors = colorMap[service.color] || colorMap.primary;
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.title}
                variants={item}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                {/* Text */}
                <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${colors.iconBg} flex items-center justify-center ${colors.iconText}`}>
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-text-primary">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-lg leading-relaxed text-text-secondary mb-6 max-w-lg">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center rounded-lg border border-border-subtle px-3 py-1.5 text-xs font-medium text-text-muted"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual placeholder — alternating side */}
                <div className={isEven ? 'lg:order-2' : 'lg:order-1'} aria-hidden="true">
                  <div className="relative w-full aspect-square rounded-2xl border border-border-subtle flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.05]">
                      <Icon className="h-32 w-32 text-text-primary" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? 'visible' : 'hidden'}
          variants={item}
          className="text-center"
        >
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            Have an idea you&apos;d like to build?
          </h3>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-text-secondary mb-10">
            Whether it&apos;s an AI automation, a modern web application, or a custom business solution, I&apos;m always excited to work on meaningful projects and explore new ideas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="https://wa.me/918248261165"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-display font-semibold text-background transition-all hover:shadow-[0_0_24px_rgba(34,197,94,0.3)]"
            >
              Let&apos;s Connect
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border-subtle px-8 py-4 font-display font-semibold text-text-primary transition-all hover:border-accent/30 hover:text-accent"
            >
              View My Projects
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
