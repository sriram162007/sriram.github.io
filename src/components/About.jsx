import { useRef } from 'react';
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

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      className="relative bg-light-bg py-24 sm:py-32"
      aria-labelledby="about-heading"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
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
            About Me
          </motion.span>
          <motion.h2
            id="about-heading"
            variants={item}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-light mb-6"
          >
            A glimpse into my <span className="text-accent">journey</span>
          </motion.h2>
          <motion.p variants={item} className="max-w-2xl mx-auto text-lg text-text-secondary">
            A glimpse into my journey, what I build, and the mindset that drives my work.
          </motion.p>
        </motion.div>

        {/* Split Layout: Image Right, Content Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? 'visible' : 'hidden'}
          variants={container}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24"
        >
          {/* LEFT - Story text */}
          <motion.div variants={item} className="space-y-8">
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-text-light">
              Who I <span className="text-accent">Am</span>
            </h3>
            <div className="space-y-5 text-lg leading-relaxed text-text-secondary max-w-prose">
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

            {/* Stats - clean typography */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div>
                <span className="font-display text-4xl font-bold text-accent">3+</span>
                <span className="block text-sm text-text-muted mt-1">Projects Built</span>
              </div>
              <div>
                <span className="font-display text-4xl font-bold text-accent">15+</span>
                <span className="block text-sm text-text-muted mt-1">Technologies Explored</span>
              </div>
              <div>
                <span className="font-display text-lg font-bold text-accent">AI Automation</span>
                <span className="block text-sm text-text-muted mt-1">Current Focus</span>
              </div>
              <div>
                <span className="font-display text-lg font-bold text-accent">Every Day</span>
                <span className="block text-sm text-text-muted mt-1">Learning Status</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - Portrait */}
          <motion.div
            variants={item}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-[420px]">
              <img
                src="/images/profile-portrait.png"
                alt="Sri Ram V — AI Automation Developer portrait"
                className="w-full h-auto grayscale contrast-110 brightness-105"
                loading="lazy"
                style={{ imageRendering: 'crispEdges' }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Highlights - clean editorial grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? 'visible' : 'hidden'}
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-24"
        >
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              variants={item}
              className="flex flex-col text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 text-accent mx-auto">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h4 className="font-display text-lg font-bold text-text-light mb-2">
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed text-text-secondary">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? 'visible' : 'hidden'}
          variants={item}
          className="mb-24"
        >
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-text-light text-center mb-16">
            My <span className="text-accent">Journey</span>
          </h3>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-text-muted/20" aria-hidden="true" />

            <div className="space-y-16">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
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

                  <div className="flex-1">
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
