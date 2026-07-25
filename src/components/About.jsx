import { useState, useRef, useEffect } from 'react';
import SectionHeader from './SectionHeader';
import { motion, useInView } from 'framer-motion';
import { Bot, Code2, Lightbulb, GraduationCap } from 'lucide-react';

const highlights = [
  {
    icon: Bot,
    title: 'AI Automation',
    description:
      'Building intelligent workflows and automation systems that reduce manual work and improve productivity.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description:
      'Breaking complex ideas into simple, practical solutions through thoughtful software development.',
  },
  {
    icon: Code2,
    title: 'Full Stack Development',
    description:
      'Developing responsive, scalable, and modern web applications with clean architecture.',
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
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView && value !== null) {
      const duration = 1500;
      const startTime = performance.now();
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(eased * value));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      const raf = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(raf);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      {value !== null ? (
        <motion.div className="font-display text-4xl font-bold text-accent">
          <motion.span>{display}</motion.span>
          {suffix}
        </motion.div>
      ) : (
        <div className="font-display text-lg font-bold text-accent">{text}</div>
      )}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden" aria-labelledby="about-heading">
      <div className="absolute inset-0 bg-secondary-bg/60" aria-hidden="true" />
      <div
        className="glow-blob bg-accent/10 w-[500px] h-[500px] top-20 -right-40 opacity-40"
        aria-hidden="true"
      />
      <div
        className="glow-blob bg-accent/10 w-[400px] h-[400px] bottom-20 -left-20 opacity-30"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
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
        <SectionHeader
          badge="About Me"
          title={<>A glimpse into my <span className="gradient-text">journey</span></>}
          subtitle="A glimpse into my journey, what I build, and the mindset that drives my work."
          headingId="about-heading"
        />

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div
                className="absolute inset-[-4px] rounded-3xl bg-accent/20 blur-lg"
                aria-hidden="true"
              />
              <div className="relative rounded-3xl border border-accent/20 overflow-hidden glass-card p-1.5">
                <div className="rounded-[22px] overflow-hidden aspect-square">
                  <img
                    src="/images/profile-portrait.png"
                    alt="Sri Ram V — AI Automation Developer portrait"
                    width={400}
                    height={400}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-accent/60 animate-pulse" aria-hidden="true" />
              <div className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-accent/50 animate-pulse" style={{ animationDelay: '0.5s' }} aria-hidden="true" />
            </div>
          </motion.div>

          {/* Right - Story text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-text-primary">
              Who I <span className="gradient-text">Am</span>
            </h3>
            <div className="space-y-5 text-base sm:text-lg leading-relaxed text-text-secondary">
              <p>
                I didn&apos;t start with years of experience or a long list of projects. I started by being curious about how technology works.
              </p>
              <p>
                Today, I spend most of my time building AI tools, automation systems, and web applications because I enjoy solving problems and learning something new with every project.
              </p>
              <p>
                Every project teaches me a better way to design, build, and improve software. My goal is simple: keep learning, keep building, and create technology that people find useful.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.slice(0, 4).map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="glass-card p-4 text-center"
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} text={stat.text} />
                  <p className="text-xs text-text-muted mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-6 sm:p-8 group cursor-default"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 text-accent group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
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
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-text-primary text-center mb-16">
            My <span className="gradient-text">Journey</span>
          </h3>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" aria-hidden="true" />

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
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <span className="font-display text-sm sm:text-base font-bold text-accent">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  <div className="glass-card p-5 sm:p-6 flex-1 group hover:border-accent/20 transition-all duration-300">
                    <p className="text-sm sm:text-base leading-relaxed text-text-secondary">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

