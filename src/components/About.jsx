import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { Bot, Code, Lightbulb, GraduationCap, ChevronRight } from 'lucide-react';

const highlights = [
  {
    icon: Bot,
    title: 'AI Automation',
    description:
      'Building intelligent workflows and automation systems that reduce manual work and improve productivity.',
  },
  {
    icon: Code,
    title: 'Full Stack Development',
    description:
      'Developing responsive, scalable, and modern web applications with clean architecture.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description:
      'Breaking complex ideas into simple, practical solutions through thoughtful software development.',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learning',
    description:
      'Learning by building real projects, exploring new technologies, and improving with every challenge.',
  },
];

const timeline = [
  {
    year: '2025',
    text: 'Started learning programming and web development while exploring the fundamentals of software engineering.',
  },
  {
    year: '2026',
    text: 'Built real-world AI applications, automation systems, and business-focused software projects while strengthening development skills and focusing on AI Automation, Full Stack Development, and creating practical products that solve real-world problems.',
  },
];

const stats = [
  { value: 3, suffix: '+', label: 'Projects Built' },
  { value: 15, suffix: '+', label: 'Technologies Explored' },
  { value: null, suffix: '', label: 'Current Focus', text: 'AI Automation' },
  { value: null, suffix: '', label: 'Learning Status', text: 'Building Every Day' },
];

function AnimatedCounter({ value, suffix, text }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const spring = useSpring(0, { damping: 20, mass: 0.5 });
  const display = useTransform(spring, [0, 100], [0, 100]);

  useEffect(() => {
    if (isInView && value !== null) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  const rounded = useTransform(display, (v) => Math.round(v));

  return (
    <div ref={ref} className="text-center">
      {value !== null ? (
        <motion.div className="font-display text-4xl font-bold text-primary">
          <motion.span>{rounded}</motion.span>
          {suffix}
        </motion.div>
      ) : (
        <div className="font-display text-lg font-bold text-primary">{text}</div>
      )}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden" aria-labelledby="about-heading">
      {/* Background layers */}
      <div className="absolute inset-0 bg-surface/60" aria-hidden="true" />
      <div
        className="glow-blob bg-primary/10 w-[500px] h-[500px] top-20 -right-40 opacity-50"
        aria-hidden="true"
      />
      <div
        className="glow-blob bg-secondary/10 w-[400px] h-[400px] bottom-20 -left-20 opacity-40"
        aria-hidden="true"
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
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
            About Me
          </motion.span>

          <motion.h2
            id="about-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary mb-6"
          >
            A glimpse into my <span className="gradient-text">journey</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg leading-relaxed text-text-secondary"
          >
            A glimpse into my journey, what I build, and the mindset that drives my work.
          </motion.p>
        </motion.div>

        {/* Profile Content */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1 }}
          className="glass-card p-8 sm:p-12 mb-16"
        >
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-6">
            Hi, I'm Sri Ram V
          </h3>
          <div className="space-y-5 text-base sm:text-lg leading-relaxed text-text-secondary">
            <p>
              I didn't start with years of experience or a long list of projects. I started by being curious about how technology works.
            </p>
            <p>
              Today, I spend most of my time building AI tools, automation systems, and web applications because I enjoy solving problems and learning something new with every project.
            </p>
            <p>
              Every project teaches me a better way to design, build, and improve software. My goal is simple: keep learning, keep building, and create technology that people find useful.
            </p>
          </div>
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-6 sm:p-8 group cursor-default"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h4 className="font-display text-lg font-bold text-text-primary mb-2">
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed text-text-muted">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* My Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-text-primary text-center mb-16">
            My <span className="gradient-text">Journey</span>
          </h3>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" aria-hidden="true" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className="relative flex gap-6 sm:gap-8"
                >
                  {/* Dot */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <span className="font-display text-sm sm:text-base font-bold text-primary">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="glass-card p-5 sm:p-6 flex-1 group hover:border-primary/20 transition-all duration-300">
                    <p className="text-sm sm:text-base leading-relaxed text-text-secondary">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 sm:p-8 text-center group"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} text={stat.text} />
              <p className="text-xs sm:text-sm font-medium text-text-muted mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
