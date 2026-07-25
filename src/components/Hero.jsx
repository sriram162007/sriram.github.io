import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  GitBranch,
  Briefcase,
  Camera,
  Mail,
  ArrowDownRight,
} from 'lucide-react';

const roles = [
  'AI Automation Developer',
  'Full Stack Developer',
  'Business Systems Engineer',
  'AI Workflow Builder',
];

const socials = [
  { name: 'GitHub', href: 'https://github.com/sriram162007', icon: GitBranch },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Briefcase },
  { name: 'Instagram', href: 'https://instagram.com', icon: Camera },
  { name: 'Email', href: 'mailto:ramxcreates@gmail.com', icon: Mail },
];

function GeometricLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.02] rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 150, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent/[0.03] rounded-full"
      />
    </div>
  );
}

function MinimalParticles() {
  const particles = useRef(
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 6,
      opacity: Math.random() * 0.2 + 0.05,
    }))
  ).current;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-accent"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

function MouseGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 25, mass: 0.4 });
  const springY = useSpring(mouseY, { damping: 25, mass: 0.4 });

  const glowX = useTransform(springX, [0, window.innerWidth], [-250, 250]);
  const glowY = useTransform(springY, [0, window.innerHeight], [-250, 250]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-accent/8 blur-[120px]"
        style={{ x: glowX, y: glowY }}
      />
    </motion.div>
  );
}

function RoleCycler() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
      <div className="relative h-[1.6em] overflow-hidden mt-5">
      <motion.div
        key={index}
        initial={{ y: '100%', opacity: 0, filter: 'blur(8px)' }}
        animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
        exit={{ y: '-100%', opacity: 0, filter: 'blur(8px)' }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute inset-0 font-display text-[28px] font-semibold text-accent"
      >
        {roles[index]}
      </motion.div>
    </div>
  );
}

function WordReveal({ children, className, delay = 0 }) {
  const isString = typeof children === 'string';
  const words = isString ? children.split(' ') : [];

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.07, delayChildren: delay },
        },
      }}
    >
      {isString ? (
        words.map((word, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30, filter: 'blur(12px)' },
              visible: {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
              },
            }}
            className="inline-block"
          >
            {word}
            {i < words.length - 1 && '\u00A0'}
          </motion.span>
        ))
      ) : (
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
            },
          }}
          className="inline-block"
        >
          {children}
        </motion.span>
      )}
    </motion.span>
  );
}

function PremiumFrame({ imageUrl, alt }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-150, 150], [4, -4]);
  const rotateY = useTransform(x, [-150, 150], [-4, 4]);

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
      style={{ rotateX, rotateY, perspective: 1200 }}
      className="relative"
    >
      {/* Outer wireframe */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-[-16px] border border-white/[0.03] rounded-[32px]"
      />

      {/* Floating ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-[-8px] border border-accent/15 rounded-[28px]"
        style={{ boxShadow: '0 0 60px rgba(255,106,0,0.08)' }}
      />

      {/* Main glass frame */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[400px] md:w-[360px] md:h-[460px] rounded-[24px] overflow-hidden"
        style={{
          background: 'rgba(18,18,18,0.7)',
          backdropFilter: 'blur(24px) saturate(1.2)',
          WebkitBackdropFilter: 'blur(24px) saturate(1.2)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 0 80px rgba(255,106,0,0.12), 0 40px 80px rgba(0,0,0,0.5)',
        }}
      >
        {/* Profile image */}
        <div className="absolute inset-0">
          <img
            src={imageUrl}
            alt={alt}
            width={360}
            height={460}
            loading="eager"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent" />

          {/* Orange rim light */}
          <div
            className="absolute inset-0 rounded-[24px]"
            style={{ boxShadow: 'inset 0 0 40px rgba(255,106,0,0.15), inset 0 0 80px rgba(255,106,0,0.05)' }}
          />
        </div>

        {/* Reflection line */}
        <div
          className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.03) 0%, transparent 100%)',
          }}
        />
      </motion.div>

      {/* Floating particles around frame */}
      <div className="absolute -inset-6 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-accent/60"
            style={{
              left: `${15 + (i * 10)}%`,
              top: `${20 + (i % 3) * 25}%`,
              boxShadow: '0 0 6px rgba(255,106,0,0.6)',
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2.5 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      aria-hidden="true"
    >
      <motion.div
        animate={{ scaleY: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="w-5 h-8 rounded-full border border-accent/40 flex justify-center pt-1.5"
      >
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-1 h-1.5 rounded-full bg-accent"
        />
      </motion.div>
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
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24"
        aria-labelledby="hero-heading"
      >
      {/* Background layers */}
      <GeometricLines />
      <MinimalParticles />
      <MouseGlow />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 40%, rgba(8,8,8,0.8) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          {/* LEFT SIDE */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="inline-flex items-center gap-3"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-[15px] font-semibold tracking-[0.3em] uppercase text-accent">
                AI Automation Developer
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              id="hero-heading"
              className="font-display font-bold tracking-[-0.02em] leading-[0.9] text-text-primary"
              initial="hidden"
              animate={isMounted ? 'visible' : 'hidden'}
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.06, delayChildren: 0.3 },
                },
              }}
            >
              <span className="block text-[56px] font-bold">
                <WordReveal delay={0.4}>Hi, I&apos;m</WordReveal>
              </span>
              <span className="block mt-4" style={{ fontSize: 'clamp(66px, 7.2vw, 100px)' }}>
                <WordReveal delay={0.6}>SRI RAM</WordReveal>
              </span>
            </motion.h1>

            {/* Role Cycler */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-2"
            >
              <RoleCycler />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.95 }}
              className="max-w-[560px] text-[22px] leading-[1.8] text-white/72"
            >
              I build AI automation systems and modern web applications that solve real business problems. I enjoy creating intelligent workflows, beautiful user experiences, and practical software that helps people work smarter.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05 }}
              className="flex flex-wrap gap-4 mt-1"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="magnetic-btn inline-flex items-center gap-3 rounded-2xl bg-accent/10 border border-accent/30 px-7 py-3.5 font-display font-semibold text-accent backdrop-blur-xl transition-all hover:bg-accent/20 hover:shadow-[0_0_32px_rgba(255,106,0,0.25)]"
              >
                Explore My Projects
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="magnetic-btn inline-flex items-center gap-3 rounded-2xl border border-white/[0.12] bg-white/[0.03] backdrop-blur-xl px-7 py-3.5 font-display font-semibold text-text-primary transition-all hover:border-accent/40 hover:bg-accent/[0.06]"
              >
                Let&apos;s Connect
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.15 }}
              className="flex items-center gap-4 mt-2"
            >
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full glass-card text-text-muted transition-all hover:text-accent"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              <PremiumFrame
                imageUrl="/images/profile-portrait.png"
                alt="Sri Ram V — AI Automation Developer"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
