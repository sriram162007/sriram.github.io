import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'WORK', href: '#work' },
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
          borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          backgroundColor: scrolled ? 'rgba(5,5,5,0.94)' : 'rgba(5,5,5,0.6)',
          transition: 'background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
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
                boxShadow: '0 0 8px rgba(225,6,0,0.6)',
              }}
            />
          </a>

          {/* Desktop Nav Links */}
          <ul
            style={{ display: 'flex', gap: 36, listStyle: 'none', alignItems: 'center' }}
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
                      letterSpacing: '0.16em',
                      color: isActive ? 'var(--color-text-1)' : 'var(--color-text-3)',
                      transition: 'color 0.2s ease',
                      position: 'relative',
                      paddingBottom: 2,
                      textDecoration: 'none',
                    }}
                    className="nav-link"
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        style={{
                          position: 'absolute',
                          bottom: -2,
                          left: 0,
                          right: 0,
                          height: 1,
                          background: 'var(--color-red)',
                        }}
                      />
                    )}
                  </a>
                </li>
              );
            })}

            {/* CTA button + 3x3 dots menu */}
            <li style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <a
                href="#contact"
                id="nav-cta"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '7px 18px',
                  border: '1px solid rgba(255,255,255,0.22)',
                  borderRadius: 999,
                  fontFamily: 'var(--font-body)',
                  fontSize: 11.5,
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  color: 'var(--color-text-1)',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s ease, background 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-red)';
                  e.currentTarget.style.background = 'rgba(225,6,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                Let's Talk
                <span style={{ fontSize: 13, marginLeft: 2 }}>↗</span>
              </a>

              {/* 3x3 grid dots icon */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 3px)',
                  gap: 3,
                  cursor: 'pointer',
                  padding: 4,
                  opacity: 0.7,
                  transition: 'opacity 0.2s ease',
                }}
                title="Menu"
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.7'; }}
              >
                {[...Array(9)].map((_, i) => (
                  <span
                    key={i}
                    style={{
                      width: 3,
                      height: 3,
                      borderRadius: '50%',
                      background: '#fff',
                      display: 'block',
                    }}
                  />
                ))}
              </div>
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

      {/* Mobile Menu Overlay */}
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
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--color-border)',
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
                      borderBottom: '1px solid var(--color-border-2)',
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

            <div style={{ marginTop: 32, display: 'flex', gap: 16 }}>
              <a href="mailto:ramxcreates@gmail.com" className="label" style={{ color: 'var(--color-text-3)' }}>
                EMAIL
              </a>
              <span className="label" style={{ color: 'var(--color-border)' }}>·</span>
              <a href="https://linkedin.com/in/sri-ram16" target="_blank" rel="noopener noreferrer" className="label" style={{ color: 'var(--color-text-3)' }}>
                LINKEDIN
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
