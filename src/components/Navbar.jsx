import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const NAV_LINKS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'JOURNEY', href: '#journey' },
  { label: 'WORK', href: '#work' },
  { label: 'PIPELINE', href: '#architecture' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'CONTACT', href: '#contact' },
];

function useActiveSection() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace('#', ''));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: '-30% 0px -60% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection();

  /* Scroll progress */
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 40, mass: 0.5 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = useCallback((href) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, []);

  return (
    <>
      {/* ── Scroll Progress Bar ── */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: 'linear-gradient(90deg, var(--color-red), #FF6B6B)',
          transformOrigin: '0%',
          scaleX,
          zIndex: 200,
          boxShadow: '0 0 8px rgba(225,6,0,0.6)',
        }}
        aria-hidden="true"
      />

      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`main-navbar ${scrolled ? 'is-scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          borderBottom: scrolled
            ? '1px solid rgba(255,255,255,0.08)'
            : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          backgroundColor: scrolled ? 'rgba(5,5,5,0.92)' : 'rgba(5,5,5,0.5)',
          transition: 'background-color 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
          boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.04)' : 'none',
        }}
        aria-label="Main navigation"
      >
        <div
          className="container"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: '0.06em',
              color: 'var(--color-text-1)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
            aria-label="Sri Ram — home"
          >
            SRI RAM
            <span
              aria-hidden="true"
              style={{
                width: 5,
                height: 5,
                borderRadius: '50%',
                background: 'var(--color-red)',
                display: 'inline-block',
                flexShrink: 0,
                boxShadow: '0 0 8px rgba(225,6,0,0.8)',
                animation: 'glow-pulse 2.4s ease-in-out infinite',
              }}
            />
          </a>

          {/* Desktop Nav */}
          <ul
            style={{ display: 'flex', gap: 32, listStyle: 'none', alignItems: 'center' }}
            className="nav-desktop"
            role="list"
          >
            {NAV_LINKS.map(({ label, href }) => {
              const sectionId = href.replace('#', '');
              const isActive = active === sectionId;
              return (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      color: isActive ? 'var(--color-text-1)' : 'var(--color-text-3)',
                      transition: 'color 0.2s ease',
                      position: 'relative',
                      paddingBottom: 3,
                      textDecoration: 'none',
                    }}
                    className="nav-link"
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        style={{
                          position: 'absolute',
                          bottom: -1,
                          left: 0,
                          right: 0,
                          height: 1.5,
                          background: 'var(--color-red)',
                          borderRadius: 1,
                          boxShadow: '0 0 6px rgba(225,6,0,0.6)',
                        }}
                      />
                    )}
                  </a>
                </li>
              );
            })}

            {/* CTA — Now a filled red pill */}
            <li>
              <a
                href="#contact"
                id="nav-cta"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '8px 20px',
                  background: 'var(--color-red)',
                  borderRadius: 999,
                  fontFamily: 'var(--font-body)',
                  fontSize: 11.5,
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  color: '#fff',
                  textDecoration: 'none',
                  transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 2px 12px rgba(225,6,0,0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#FF2A1A';
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.04)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(225,6,0,0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--color-red)';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(225,6,0,0.3)';
                }}
              >
                Let's Talk
                <span style={{ fontSize: 12 }}>↗</span>
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="nav-hamburger"
            style={{ display: 'flex', flexDirection: 'column', gap: 5, padding: '8px', cursor: 'pointer' }}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              style={{ display: 'block', width: 22, height: 1.5, background: 'var(--color-text-1)', transformOrigin: 'center' }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              style={{ display: 'block', width: 22, height: 1.5, background: 'var(--color-text-1)' }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              style={{ display: 'block', width: 22, height: 1.5, background: 'var(--color-text-1)', transformOrigin: 'center' }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 68,
              left: 0,
              right: 0,
              zIndex: 99,
              background: 'rgba(5,5,5,0.97)',
              backdropFilter: 'blur(24px)',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              padding: '32px 24px 40px',
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                    style={{
                      display: 'block',
                      padding: '14px 0',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      fontFamily: 'var(--font-display)',
                      fontSize: 28,
                      fontWeight: 700,
                      color: active === href.replace('#', '') ? 'var(--color-red)' : 'var(--color-text-1)',
                      letterSpacing: '-0.02em',
                      transition: 'color 0.2s ease',
                      textDecoration: 'none',
                    }}
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div style={{ marginTop: 32, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="mailto:ramxcreates@gmail.com" className="label" style={{ color: 'var(--color-text-3)' }}>
                EMAIL
              </a>
              <span className="label" style={{ color: 'rgba(255,255,255,0.15)' }}>·</span>
              <a href="https://linkedin.com/in/sri-ram16" target="_blank" rel="noopener noreferrer" className="label" style={{ color: 'var(--color-text-3)' }}>
                LINKEDIN
              </a>
              <span className="label" style={{ color: 'rgba(255,255,255,0.15)' }}>·</span>
              <a href="https://github.com/sriram162007" target="_blank" rel="noopener noreferrer" className="label" style={{ color: 'var(--color-text-3)' }}>
                GITHUB
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .nav-hamburger { display: none !important; }
          .nav-desktop { display: flex !important; }
        }
        @media (max-width: 767px) {
          .nav-hamburger { display: flex !important; }
          .nav-desktop { display: none !important; }
          .main-navbar { opacity: 1 !important; pointer-events: auto !important; transform: none !important; }
        }
        .nav-link:hover {
          color: var(--color-text-1) !important;
        }
      `}</style>
    </>
  );
}
