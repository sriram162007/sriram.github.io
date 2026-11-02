import { motion } from 'framer-motion';

const NAV_LINKS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'WORK', href: '#work' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'TERMINAL', href: '#terminal' },
  { label: 'CONTACT', href: '#contact' },
];

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/sriram162007',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sri-ram16',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ramxcreates',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#040404',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 80,
        paddingBottom: 40,
      }}
      aria-label="Site footer"
    >
      {/* Giant Background Watermark */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: -20,
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(90px, 17vw, 240px)',
          fontWeight: 900,
          color: 'rgba(255,255,255,0.018)',
          letterSpacing: '-0.04em',
          userSelect: 'none',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          zIndex: 0,
        }}
      >
        SRI RAM
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Main Footer Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.5fr) minmax(0, 1fr) minmax(0, 1fr)',
            gap: 40,
            marginBottom: 60,
          }}
          className="footer-grid"
        >
          {/* Col 1: Identity & Callout */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 22,
                  fontWeight: 800,
                  color: 'var(--color-text-1)',
                  letterSpacing: '0.04em',
                }}
              >
                SRI RAM
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.08em',
                  padding: '2px 8px',
                  borderRadius: 999,
                  background: 'rgba(225,6,0,0.1)',
                  color: 'var(--color-red)',
                  border: '1px solid rgba(225,6,0,0.25)',
                  fontWeight: 600,
                }}
              >
                PORTFOLIO v2.5
              </span>
            </div>

            <p
              style={{
                color: 'var(--color-text-2)',
                fontSize: 14,
                lineHeight: 1.7,
                maxWidth: 360,
                marginBottom: 20,
              }}
            >
              Crafting autonomous AI systems, high-speed full stack web apps, and bespoke operational platforms that solve real pain points.
            </p>

            {/* Availability indicator */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 14px',
                borderRadius: 999,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: '#28CA41',
                  boxShadow: '0 0 8px #28CA41',
                }}
              />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-text-2)' }}>
                Open for client projects & tech roles
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.12em',
                color: 'var(--color-red)',
                fontWeight: 700,
                marginBottom: 18,
              }}
            >
              NAVIGATION //
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 13,
                      fontWeight: 500,
                      color: 'var(--color-text-3)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease, transform 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                    className="footer-nav-link"
                  >
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social Links & Back to Top */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.12em',
                  color: 'var(--color-red)',
                  fontWeight: 700,
                  marginBottom: 18,
                }}
              >
                CONNECT //
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {SOCIAL_LINKS.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 10,
                      padding: '8px 14px',
                      borderRadius: 6,
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      color: 'var(--color-text-2)',
                      textDecoration: 'none',
                      fontSize: 13,
                      transition: 'all 0.2s ease',
                      width: 'fit-content',
                    }}
                    className="footer-social-btn"
                  >
                    {icon}
                    <span>{label}</span>
                    <span style={{ fontSize: 11, color: 'var(--color-text-3)' }}>↗</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              style={{
                marginTop: 24,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                color: 'var(--color-text-3)',
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.08em',
                transition: 'color 0.2s ease',
                width: 'fit-content',
              }}
              className="footer-back-to-top"
            >
              <span>BACK TO TOP</span>
              <span style={{ color: 'var(--color-red)' }}>↑</span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 28 }} />

        {/* Bottom Credits Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-text-3)', margin: 0 }}>
            © {year} SRI RAM. ALL RIGHTS RESERVED.
          </p>

          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-text-3)', margin: 0 }}>
            BUILT WITH <span style={{ color: 'var(--color-red)' }}>REACT 19</span> · VITE · FRAMER MOTION
          </p>
        </div>
      </div>

      <style>{`
        .footer-nav-link:hover {
          color: var(--color-red) !important;
          transform: translateX(4px);
        }
        .footer-social-btn:hover {
          background: rgba(225,6,0,0.1) !important;
          border-color: rgba(225,6,0,0.3) !important;
          color: #FFFFFF !important;
          transform: translateY(-2px);
        }
        .footer-back-to-top:hover {
          color: var(--color-text-1) !important;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
