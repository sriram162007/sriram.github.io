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

function ContactLink({ link, index }) {
  return (
    <motion.a
      href={link.href}
      target={link.external ? '_blank' : undefined}
      rel={link.external ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ x: 4 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 0',
        borderBottom: '1px solid var(--color-border)',
        textDecoration: 'none',
        gap: 20,
        cursor: 'pointer',
      }}
      className="contact-link"
      aria-label={`${link.label}: ${link.value}`}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <span
          className="label"
          style={{ color: 'var(--color-text-3)', minWidth: 90 }}
        >
          {link.label}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(14px, 2vw, 20px)',
            fontWeight: 600,
            color: 'var(--color-text-1)',
            letterSpacing: '-0.01em',
            transition: 'color 0.2s ease',
          }}
          className="contact-value"
        >
          {link.value}
        </span>
      </div>

      {/* Arrow */}
      <motion.svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        aria-hidden="true"
        style={{ flexShrink: 0, opacity: 0, transition: 'opacity 0.2s ease' }}
        className="contact-arrow"
      >
        <path
          d="M3 15L15 3M15 3H7M15 3V11"
          stroke="var(--color-red)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.a>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="section"
      aria-labelledby="contact-heading"
      style={{ background: 'var(--color-bg-2)' }}
    >
      <div className="container">
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
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
                color: 'var(--color-text-1)',
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              LET'S BUILD SOMETHING USEFUL.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="body-md"
              style={{ color: 'var(--color-text-2)', marginBottom: 32, maxWidth: 360 }}
            >
              Have an idea, business problem, or project in mind?
              <br />
              Let's talk.
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 14px',
                border: '1px solid var(--color-border)',
                borderRadius: 3,
              }}
            >
              <span
                aria-hidden="true"
                style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 6px rgba(34,197,94,0.5)', display: 'inline-block', flexShrink: 0 }}
              />
              <span className="label" style={{ color: 'var(--color-text-3)' }}>
                CHENNAI, INDIA
              </span>
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
        .contact-link:hover .contact-value {
          color: var(--color-red) !important;
        }
        .contact-link:hover .contact-arrow {
          opacity: 1 !important;
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
