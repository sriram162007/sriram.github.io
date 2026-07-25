import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring ,useTransform} from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 30, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 30, mass: 0.5 });
  const glowX = useTransform(
  springX,
  (v) => (v / window.innerWidth) * 100 - 150
);

const glowY = useTransform(
  springY,
  (v) => (v / window.innerHeight) * 100 - 150
);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px]"
          style={{
            x: glowX,
            y: glowY,
          }}
        />
      </motion.div>

      <nav
        className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12"
        aria-label="Primary navigation"
      >
        <a
          href="#hero"
          className="relative flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-text-primary transition-colors hover:text-accent"
          aria-label="RAMXCREATES home"
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
          </span>
          RAMXCREATES
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
                activeSection === link.href.replace('#', '')
                  ? 'text-accent'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-accent transition-all duration-300 ${
                  activeSection === link.href.replace('#', '')
                    ? 'w-full shadow-[0_0_10px_rgba(255,106,0,0.6)]'
                    : 'w-0 group-hover:w-full'
                }`}
                aria-hidden="true"
              />
            </a>
          ))}
          <a
            href="#contact"
            className="magnetic-btn ml-4 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-all hover:shadow-[0_0_28px_rgba(255,106,0,0.4)] hover:scale-105 active:scale-95"
          >
            Let&apos;s Talk
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <button
          className="md:hidden flex items-center justify-center rounded-lg p-2 text-text-secondary transition-colors hover:text-accent"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-expanded={isMobileOpen}
          aria-label="Toggle navigation menu"
        >
          <AnimatePresence mode="wait">
            {isMobileOpen ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-6 w-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-white/[0.08]"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-accent bg-accent/[0.06]'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-center font-semibold text-background"
              >
                Let&apos;s Talk
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

