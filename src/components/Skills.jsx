import { useState, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import {
  Brain,
  Workflow,
  Code2,
  Terminal,
  GitBranch,
  Sparkles,
} from 'lucide-react';

const categories = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description:
      'Building AI-powered applications using modern language models and prompt engineering techniques.',
    skills: ['Gemini AI', 'Claude AI', 'OpenAI API', 'Prompt Engineering', 'AI Workflows'],
    color: 'primary',
  },
  {
    icon: Workflow,
    title: 'Automation',
    description:
      'Designing workflows that automate repetitive tasks and connect different business systems.',
    skills: ['n8n', 'Twilio', 'Google Sheets API', 'REST APIs', 'Webhooks'],
    color: 'secondary',
  },
  {
    icon: Code2,
    title: 'Frontend Development',
    description:
      'Creating fast, responsive, and modern user interfaces with a focus on great user experience.',
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Vite'],
    color: 'accent',
  },
  {
    icon: Terminal,
    title: 'Backend & Database',
    description: 'Developing secure backend services and managing application data.',
    skills: ['Firebase', 'Node.js', 'Express.js', 'Firestore'],
    color: 'primary',
  },
  {
    icon: GitBranch,
    title: 'Tools',
    description: 'Daily tools I use for development, collaboration, and deployment.',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Vercel'],
    color: 'secondary',
  },
];

const colorMap = {
  primary: {
    iconBg: 'bg-primary/10',
    iconText: 'text-primary',
    badgeBorder: 'border-primary/20',
    badgeBg: 'bg-primary/5',
    badgeText: 'text-primary',
    glow: 'rgba(6,182,212,0.15)',
  },
  secondary: {
    iconBg: 'bg-secondary/10',
    iconText: 'text-secondary',
    badgeBorder: 'border-secondary/20',
    badgeBg: 'bg-secondary/5',
    badgeText: 'text-secondary',
    glow: 'rgba(59,130,246,0.15)',
  },
  accent: {
    iconBg: 'bg-accent/10',
    iconText: 'text-accent',
    badgeBorder: 'border-accent/20',
    badgeBg: 'bg-accent/5',
    badgeText: 'text-accent',
    glow: 'rgba(34,211,238,0.15)',
  },
};

function SkillBadge({ skill, color, index }) {
  const badgeRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-20, 20], [3, -3]);
  const rotateY = useTransform(x, [-20, 20], [-3, 3]);

  const handleMouseMove = useCallback(
    (e) => {
      if (!badgeRef.current) return;
      const rect = badgeRef.current.getBoundingClientRect();
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

  const colors = colorMap[color] || colorMap.primary;

  return (
    <motion.span
      ref={badgeRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 500 }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ scale: 1.08, y: -3 }}
      className={`inline-flex items-center rounded-xl border ${colors.badgeBorder} ${colors.badgeBg} px-4 py-2 text-xs font-semibold ${colors.badgeText} cursor-default transition-shadow duration-300 hover:shadow-[0_0_20px_var(--color-primary-glow)]`}
    >
      {skill}
    </motion.span>
  );
}

function CategoryCard({ category, index }) {
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

  const colors = colorMap[category.color] || colorMap.primary;
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
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
        className="relative glass-card overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(6,182,212,0.06)]"
      >
        {/* Mouse-follow glow */}
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
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
          {/* Icon */}
          <motion.div
            whileHover={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
            className={`w-14 h-14 rounded-2xl ${colors.iconBg} flex items-center justify-center ${colors.iconText} group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className="h-7 w-7" aria-hidden="true" />
          </motion.div>

          {/* Title */}
          <h3 className="font-display text-xl sm:text-2xl font-bold text-text-primary group-hover:text-primary transition-colors duration-300">
            {category.title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base leading-relaxed text-text-secondary">
            {category.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {category.skills.map((skill, i) => (
              <SkillBadge key={skill} skill={skill} color={category.color} index={i} />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Aurora gradients */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-primary/8 rounded-full blur-[120px] animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-secondary/8 rounded-full blur-[100px] animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-accent/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: '6s' }} />

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
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-primary/30"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 overflow-hidden"
      aria-labelledby="skills-heading"
    >
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
            Skills & Technologies
          </motion.span>

          <motion.h2
            id="skills-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary mb-6"
          >
            The <span className="gradient-text">stack</span> I work with
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg leading-relaxed text-text-secondary"
          >
            The tools, technologies, and platforms I use to build AI applications, automation systems, and modern web experiences.
          </motion.p>
        </motion.div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
