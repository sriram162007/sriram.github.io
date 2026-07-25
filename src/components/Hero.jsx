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
} from 'lucide-react';

const roles = [
  'AI Automation Developer',
  'Full Stack Developer',
  'Business Systems Engineer',
  'Modern Web Developer',
];

const socials = [
  { name: 'GitHub', href: 'https://github.com/sriram162007', icon: GitBranch },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Briefcase },
  { name: 'Instagram', href: 'https://instagram.com', icon: Camera },
  { name: 'Email', href: 'mailto:ramxcreates@gmail.com', icon: Mail },
];

function LightRays() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]" aria-hidden="true">
      <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-accent to-transparent rotate-12" />
      <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-accent to-transparent -rotate-6" />
      <div className="absolute top-0 left-3/4 w-1 h-full bg-gradient-to-b from-transparent via-accent to-transparent rotate-6" />
    </div>
  );
}

function FloatingParticles() {
  const particles = useRef(
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 0.5,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.3 + 0.05,
    }))
  ).current;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-accent"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `particle-float ${p.duration}s ease-in-out ${p.delay}s infinite`,
            boxShadow: `0 0 ${p.size * 3}px rgba(255,106,0,0.3)`,
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
        className="absolute w-[600px] h-[600px] rounded-full bg-accent/10 blur-[150px]"
        style={{
          x: useTransform(springX, [0, window.innerWidth], [-300, 300]),
          y: useTransform(springY, [0, window.innerHeight], [-300, 300]),
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]"
        style={{
          x: useTransform(springX, [0, window.innerWidth], [-200, 200]),
          y: useTransform(springY, [0, window.innerHeight], [-200, 200]),
        }}
      />
    </motion.div>
  );
}

function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-accent/10 rounded-full blur-[120px] animate-float"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-accent/8 rounded-full blur-[100px] animate-float"
        style={{ animationDelay: '3s' }}
      />
      <div
        className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-accent/5 rounded-full blur-[100px] animate-float"
        style={{ animationDelay: '6s' }}
      />
    </div>
  );
}

function AnimatedGrid() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.04]"
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
  const rotateX = useTransform(y, [-150, 150], [5, -5]);
  const rotateY = useTransform(x, [-150, 150], [-5, 5]);

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
      className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px]"
    >
      {/* Wireframe outer ring */}
      <div
        className="absolute inset-[-12px] rounded-[40%] border border-white/[0.04]"
        style={{ animation: 'rotate-slow 25s linear infinite' }}
        aria-hidden="true"
      />

      {/* Second wireframe ring */}
      <div
        className="absolute inset-[-24px] rounded-[40%] border border-accent/10"
        style={{ animation: 'rotate-slow 35s linear infinite reverse' }}
        aria-hidden="true"
      />

      {/* Animated orbit ring */}
      <div
        className="absolute inset-[-4px] rounded-[40%] border border-accent/20"
        style={{
          boxShadow: '0 0 60px rgba(255,106,0,0.12), inset 0 0 40px rgba(255,106,0,0.04)',
          animation: 'pulse-glow 4s ease-in-out infinite',
        }}
        aria-hidden="true"
      />

      {/* Hexagon glow ring */}
      <div
        className="absolute inset-0 rounded-[40%] border border-accent/30"
        style={{
          boxShadow: '0 0 80px rgba(255,106,0,0.15), inset 0 0 50px rgba(255,106,0,0.05)',
        }}
        aria-hidden="true"
      />

      {/* Glass panel */}
      <div
        className="absolute inset-0 overflow-hidden rounded-[40%]"
        style={{
          background: 'rgba(21,21,21,0.6)',
          backdropFilter: 'blur(24px) saturate(1.2)',
          WebkitBackdropFilter: 'blur(24px) saturate(1.2)',
          border: '1px solid rgba(255,106,0,0.12)',
        }}
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
          {/* Orange rim light */}
          <div className="absolute inset-0 rounded-[38%] border border-accent/20" style={{ boxShadow: 'inset 0 0 30px rgba(255,106,0,0.1)' }} />
        </div>
      </div>

      {/* Floating elements */}
      <FloatingHexIcons />
    </motion.div>
  );
}

function FloatingHexIcons() {
  const icons = [
    { Icon: Code2, x: '-18%', y: '-8%', delay: 0 },
    { Icon: Brain, x: '115%', y: '-3%', delay: 1.2 },
    { Icon: Zap, x: '-12%', y: '108%', delay: 2.4 },
    { Icon: Cpu, x: '108%', y: '85%', delay: 3.6 },
    { Icon: Terminal, x: '-22%', y: '38%', delay: 0.6 },
  ];

  return (
    <>
      {icons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute hidden sm:flex items-center justify-center w-10 h-10 rounded-xl glass-card text-accent"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay,
            ease: 'easeInOut',
          }}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </motion.div>
      ))}
      {/* Glowing dots */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.span
          key={`dot-${i}`}
          className="absolute rounded-full bg-accent/50 hidden sm:block"
          style={{
            width: 3,
            height: 3,
            left: `${15 + i * 9}%`,
            top: `${8 + (i % 3) * 28}%`,
          }}
          animate={{ opacity: [0.1, 0.8, 0.1], scale: [0.8, 1.5, 0.8] }}
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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[1.4em] overflow-hidden mt-3">
      <motion.div
        key={index}
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        exit={{ y: '-100%', opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute inset-0 font-display text-xl sm:text-2xl md:text-3xl font-semibold text-accent"
      >
        {roles[index]}
      </motion.div>
    </div>
  );
}

function WordByWordReveal({ text, className, delay = 0 }) {
  const words = text.split(' ');

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 1 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: delay } },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0)', transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
          }}
          className="inline-block"
        >
          {word}
          {i < words.length - 1 && ' '}
        </motion.span>
      ))}
    </motion.div>
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
      aria-labelledby="hero-heading"
    >
      <AnimatedGrid />
      <LightRays />
      <FloatingOrbs />
      <FloatingParticles />
      <MouseGlow />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT SIDE */}
          <div className="lg:col-span-7 space-y-8">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-text-secondary">
                AI Automation Developer
              </span>
            </motion.div>

            {/* Name — word-by-word reveal */}
            <motion.h1
              id="hero-heading"
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-text-primary break-words"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 1 },
                visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
              }}
            >
              <span className="block">Hey, This is</span>
              <span className="block mt-2">
                {'SRI RAM '}
                <span className="gradient-text glow-text">V</span>
              </span>
            </motion.h1>

            {/* Role Cycler */}
            <RoleCycler />

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="h-px w-24 bg-gradient-to-r from-accent to-transparent origin-left"
              aria-hidden="true"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-xl text-base sm:text-lg leading-relaxed text-text-secondary"
            >
              I build AI-powered automation systems, intelligent web applications, and
              modern digital experiences that help businesses automate workflows and scale efficiently.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="magnetic-btn inline-flex items-center gap-3 rounded-2xl bg-accent px-7 py-3.5 font-display font-semibold text-background transition-all hover:shadow-[0_0_32px_rgba(255,106,0,0.35)] hover:scale-105 active:scale-95"
              >
                Explore Projects
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="magnetic-btn inline-flex items-center gap-3 rounded-2xl border border-white/[0.12] bg-white/[0.03] backdrop-blur-xl px-7 py-3.5 font-display font-semibold text-text-primary transition-all hover:border-accent/40 hover:bg-accent/[0.06] hover:scale-105 active:scale-95"
              >
                Let&apos;s Connect
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center gap-5 pt-2"
            >
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 rounded-xl glass-card text-text-muted transition-all hover:text-accent hover:-translate-y-1"
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
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <HexFrame
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
