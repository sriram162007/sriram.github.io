import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  GitBranch,
  Briefcase,
  Camera,
  Mail,
  ArrowDownRight,
  Code2,
  Brain,
  Zap,
  Cpu,
  Terminal,
  Download,
} from 'lucide-react';

const roles = [
  'AI Automation Developer',
  'Full Stack Developer',
  'Business Systems Engineer',
  'AI Content Creator',
];

const socials = [
  { name: 'GitHub', href: 'https://github.com/sriram162007', icon: GitBranch },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Briefcase },
  { name: 'Instagram', href: 'https://instagram.com', icon: Camera },
  { name: 'Email', href: 'mailto:ramxcreates@gmail.com', icon: Mail },
];

function FloatingParticles() {
  const particles = useRef(
    Array.from({ length: 40 }, () => ({
      id: Math.random().toString(36).slice(2),
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.4 + 0.1,
    }))
  ).current;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-primary"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `floatParticle ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

function MouseGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 20, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 20, mass: 0.5 });

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
        className="absolute w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]"
        style={{
          x: useTransform(springX, [0, window.innerWidth], [-300, 300]),
          y: useTransform(springY, [0, window.innerHeight], [-300, 300]),
        }}
      />
    </motion.div>
  );
}

function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-primary/15 rounded-full blur-[120px] animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-secondary/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-accent/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '6s' }} />
    </div>
  );
}

function AnimatedGrid() {
  return (
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
  );
}

function HexFrame({ imageUrl, alt }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-150, 150], [3, -3]);
  const rotateY = useTransform(x, [-150, 150], [-3, 3]);

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
      style={{ rotateX, rotateY, perspective: 1000 }}
      className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px]"
    >
      {/* Hexagon outer glow ring */}
      <div
        className="absolute inset-0 rounded-[40%] border border-primary/30"
        style={{
          boxShadow: '0 0 60px rgba(6,182,212,0.15), inset 0 0 40px rgba(6,182,212,0.05)',
          animation: 'hexPulse 4s ease-in-out infinite',
        }}
      />

      {/* Glass panel */}
      <div
        className="glass-card absolute inset-0 overflow-hidden rounded-[40%] p-1.5"
        style={{ backdropFilter: 'blur(24px) saturate(1.2)', background: 'rgba(10,15,35,0.6)' }}
      >
        <div className="relative w-full h-full rounded-[38%] overflow-hidden">
          <img
            src={imageUrl}
            alt={alt}
            width={400}
            height={400}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>
      </div>

      {/* Floating icons around frame */}
      <FloatingHexIcons />
    </motion.div>
  );
}

function FloatingHexIcons() {
  const icons = [
    { Icon: Code2, x: '-15%', y: '-10%', delay: '0s' },
    { Icon: Brain, x: '110%', y: '-5%', delay: '1s' },
    { Icon: Zap, x: '-10%', y: '105%', delay: '2s' },
    { Icon: Cpu, x: '105%', y: '90%', delay: '3s' },
    { Icon: Terminal, x: '-20%', y: '40%', delay: '0.5s' },
  ];

  return (
    <>
      {icons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute hidden sm:flex items-center justify-center w-10 h-10 rounded-xl glass-card text-primary"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -8, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: parseFloat(delay),
            ease: 'easeInOut',
          }}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </motion.div>
      ))}
      {/* Glowing dots */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.span
          key={`dot-${i}`}
          className="absolute rounded-full bg-primary/60 sm:block hidden"
          style={{
            width: 4,
            height: 4,
            left: `${20 + i * 14}%`,
            top: `${10 + (i % 3) * 30}%`,
          }}
          animate={{ opacity: [0.2, 0.9, 0.2], scale: [0.8, 1.4, 0.8] }}
          transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </>
  );
}

function RoleCycler() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[1.3em] overflow-hidden mt-2">
      <motion.div
        key={index}
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        exit={{ y: '-100%', opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute inset-0 font-display text-xl sm:text-2xl md:text-3xl font-semibold text-primary"
      >
        {roles[index]}
      </motion.div>
    </div>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
      aria-hidden="true"
    >
      <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDownRight className="h-4 w-4" />
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12"
      aria-labelledby="hero-heading"
    >
      {/* Background layers */}
      <AnimatedGrid />
      <FloatingOrbs />
      <FloatingParticles />
      <MouseGlow />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT SIDE */}
          <div className="lg:col-span-7 space-y-8">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase text-text-secondary">
                Hello, I&apos;m
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-text-primary"
            >
              Sri Ram{' '}
              <span className="gradient-text">V</span>
            </motion.h1>

            {/* Animated Roles */}
            <RoleCycler />

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-px w-24 bg-gradient-to-r from-primary to-transparent origin-left"
              aria-hidden="true"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-xl text-base sm:text-lg leading-relaxed text-text-secondary"
            >
              I build AI-powered automation systems, intelligent web applications, and
              business solutions that help companies automate workflows, improve
              productivity, and scale efficiently.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="magnetic-btn inline-flex items-center gap-3 rounded-2xl bg-primary/10 border border-primary/30 px-7 py-3.5 font-display font-semibold text-primary backdrop-blur-xl transition-all hover:bg-primary/20 hover:shadow-[0_0_28px_rgba(6,182,212,0.25)] hover:scale-105 active:scale-95"
              >
                View My Projects
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="magnetic-btn inline-flex items-center gap-3 rounded-2xl border border-white/[0.12] bg-white/[0.03] px-7 py-3.5 font-display font-semibold text-text-primary backdrop-blur-xl transition-all hover:border-primary/40 hover:bg-white/[0.06] hover:scale-105 active:scale-95"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-5 pt-2"
            >
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 rounded-xl glass-card text-text-muted transition-all hover:text-primary hover:-translate-y-1"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4 transition-transform group-hover:scale-110" aria-hidden="true" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <HexFrame
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCgcdU9Mi6FpYzHL2Q3UODmSE-fdNOke3jGZnQq9GDTx4Ot3NEwyD_5vtCigObKcH-VxO3h16EGzLrVP1ZtSjoiIFBEyxrJ6INJrRxEx453s3ZqTqQOS46wL0C_nQwZeYW19Usops_sc6viZDit0jy_JH7e1GkKuAWH1YlfyBz_B5WB6iztOqy7uwy0nImbJ6i-LHEf6r6kXxpI3uYUGkCbJNUApRcYJH8kUC6WJ-9C5JxiGgDrIeQcMulBFQONESUSLeKNtpZsPrsc"
                alt="Sri Ram V — AI Automation Developer"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  );
}
