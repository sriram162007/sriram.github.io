import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const CONTACT_LINKS = [
  {
    label: 'EMAIL',
    value: 'ramxcreates@gmail.com',
    href: 'mailto:ramxcreates@gmail.com',
    external: false,
  },
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/sri-ram16',
    href: 'https://www.linkedin.com/in/sri-ram16',
    external: true,
  },
  {
    label: 'INSTAGRAM',
    value: '@ramxcreates',
    href: 'https://www.instagram.com/ramxcreates',
    external: true,
  },
];

const SOCIAL_ICONS = [
  {
    label: 'GitHub',
    href: 'https://github.com/sriram162007',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sri-ram16',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ramxcreates',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
];

function ContactLink({ link, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={link.href}
      target={link.external ? '_blank' : undefined}
      rel={link.external ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '22px 0',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        textDecoration: 'none',
        gap: 20,
        cursor: 'pointer',
        transform: hovered ? 'translateX(6px)' : 'translateX(0)',
        transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
      aria-label={`${link.label}: ${link.value}`}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <span className="label" style={{ color: 'var(--color-text-3)', minWidth: 90 }}>
          {link.label}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(14px, 2vw, 20px)',
            fontWeight: 600,
            color: hovered ? 'var(--color-red)' : 'var(--color-text-1)',
            letterSpacing: '-0.01em',
            transition: 'color 0.2s ease',
          }}
        >
          {link.value}
        </span>
      </div>

      {/* Arrow — fixed: using state-driven opacity not inline static */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        aria-hidden="true"
        style={{
          flexShrink: 0,
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translate(2px, -2px)' : 'translate(0, 0)',
          transition: 'opacity 0.2s ease, transform 0.25s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      >
        <path
          d="M3 15L15 3M15 3H7M15 3V11"
          stroke="var(--color-red)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.a>
  );
}

export default function Contact() {
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <section
      id="contact"
      className="section"
      aria-labelledby="contact-heading"
      style={{ background: 'var(--color-bg-2)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Ambient glow */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60%',
        height: '40%',
        background: 'radial-gradient(ellipse, rgba(225,6,0,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="divider" style={{ marginBottom: 64 }} />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(32px, 5vw, 80px)',
          }}
          className="contact-grid"
        >
          {/* Left */}
          <div style={{ gridColumn: 'span 5' }} className="contact-left">
            <SectionLabel number="05" text="CONTACT" />

            <motion.h2
              id="contact-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 3.5vw, 46px)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: 'var(--color-text-1)',
                marginTop: 20,
                marginBottom: 16,
              }}
            >
              LET'S BUILD
              <br />
              <span style={{ color: 'var(--color-red)' }}>SOMETHING</span>
              <br />
              USEFUL.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="body-md"
              style={{ color: 'var(--color-text-2)', marginBottom: 28, maxWidth: 320 }}
            >
              Have an idea, business problem, or project?
              <br />
              Let's talk — I reply fast.
            </motion.p>

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}
            >
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 16px',
                border: '1px solid rgba(34,197,94,0.2)',
                borderRadius: 999,
                background: 'rgba(34,197,94,0.05)',
                width: 'fit-content',
              }}>
                <span
                  aria-hidden="true"
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: '#22C55E',
                    boxShadow: '0 0 8px rgba(34,197,94,0.7)',
                    display: 'inline-block',
                    flexShrink: 0,
                    animation: 'glow-green 2s ease-in-out infinite',
                  }}
                />
                <span className="label" style={{ color: '#22C55E', fontSize: 10 }}>
                  OPEN TO OPPORTUNITIES
                </span>
              </div>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 14px',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 8,
                width: 'fit-content',
              }}>
                <span aria-hidden="true" style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  color: 'var(--color-text-3)',
                }}>
                  📍
                </span>
                <span className="label" style={{ color: 'var(--color-text-3)' }}>
                  CHENNAI, INDIA
                </span>
              </div>
            </motion.div>

            {/* Hire Me CTA */}
            <motion.a
              href="mailto:ramxcreates@gmail.com"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '14px 28px',
                background: btnHovered ? '#FF2A1A' : 'var(--color-red)',
                borderRadius: 999,
                fontFamily: 'var(--font-display)',
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: '0.02em',
                color: '#fff',
                textDecoration: 'none',
                transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transform: btnHovered ? 'translateY(-3px) scale(1.03)' : 'translateY(0) scale(1)',
                boxShadow: btnHovered
                  ? '0 12px 32px rgba(225,6,0,0.4), 0 0 0 3px rgba(225,6,0,0.15)'
                  : '0 4px 16px rgba(225,6,0,0.25)',
              }}
              aria-label="Send an email to hire Sri Ram"
            >
              HIRE ME
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ display: 'flex', gap: 12, marginTop: 24 }}
            >
              {SOCIAL_ICONS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'var(--color-text-3)',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(225,6,0,0.4)';
                    e.currentTarget.style.color = 'var(--color-red)';
                    e.currentTarget.style.background = 'rgba(225,6,0,0.06)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.color = 'var(--color-text-3)';
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — links */}
          <div style={{ gridColumn: 'span 7' }} className="contact-right">
            <div className="divider" />
            {CONTACT_LINKS.map((link, i) => (
              <ContactLink key={link.label} link={link} index={i} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes glow-green {
          0%, 100% { box-shadow: 0 0 6px rgba(34,197,94,0.5); }
          50%       { box-shadow: 0 0 14px rgba(34,197,94,0.9); }
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-left, .contact-right {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
