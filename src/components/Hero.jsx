import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  GitBranch,
  Briefcase,
  Camera,
  Mail,
  ArrowUpRight,
} from 'lucide-react';

const roles = [
  'AI Automation Developer',
  'Full Stack Developer',
  'Business Systems Engineer',
  'AI Workflow Builder',
];

const socials = [
  { name: 'GitHub', href: 'https://github.com/sriram162007', icon: GitBranch },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sri-ram16', icon: Briefcase },
  { name: 'Instagram', href: 'https://www.instagram.com/ramxcreates', icon: Camera },
  { name: 'Email', href: 'mailto:ramxcreates@gmail.com', icon: Mail },
];

function RoleCycler() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-7 overflow-hidden mt-3">
      <motion.div
        key={index}
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        exit={{ y: '-100%', opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute inset-0 text-xl font-semibold text-accent"
      >
        {roles[index]}
      </motion.div>
    </div>
  );
}

function Portrait() {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 40, mass: 0.5 });
  const springY = useSpring(y, { damping: 40, mass: 0.5 });
  const rotateX = useTransform(springY, [-100, 100], [4, -4]);
  const rotateY = useTransform(springX, [-100, 100], [-4, 4]);

  const handleMouseMove = useCallback(
    (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
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

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      className="relative"
    >
      <div className="relative w-full max-w-[360px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[520px] aspect-[3/4]">
        <img
          src="/images/profile-portrait.png"
          alt="Sri Ram V — AI Automation Developer"
          className="w-full h-full object-cover grayscale contrast-110 brightness-110"
          loading="eager"
          style={{ imageRendering: 'crispEdges' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
      </div>
    </motion.div>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      aria-hidden="true"
    >
      <span className="text-xs tracking-widest uppercase text-text-muted mb-2">
        Scroll to explore
      </span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="w-px h-12 bg-text-muted/30"
      />
    </motion.div>
  );
}

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen bg-background pt-20 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full filter blur-[120px]" aria-hidden="true" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 w-full pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-text-muted">
                AI Automation Developer
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="hero-heading"
              className="font-display font-bold tracking-tight leading-[0.9] text-text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="block text-[40px] sm:text-[48px] md:text-[56px] font-bold">
                I build AI systems
              </span>
              <span className="block text-[32px] sm:text-[40px] md:text-[48px] font-bold text-accent mt-1">
                that automate business operations.
              </span>
            </motion.h1>

            {/* Role Cycler */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <RoleCycler />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-[560px] text-[18px] sm:text-[20px] leading-[1.7] text-text-secondary"
            >
              I build AI automation systems and modern web applications that solve real business problems. I enjoy creating intelligent workflows, beautiful user experiences, and practical software that helps people work smarter.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <motion.a
                href="#projects"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent px-7 py-3.5 font-display font-semibold text-background text-sm transition-all hover:shadow-[0_0_24px_rgba(34,197,94,0.3)]"
              >
                View My Work
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-transparent px-7 py-3.5 font-display font-semibold text-text-primary text-sm transition-all hover:border-accent/30 hover:text-accent"
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-4 pt-2"
            >
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-border-subtle text-text-muted transition-all hover:border-accent/30 hover:text-accent"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE - Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Portrait />
            </motion.div>
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
