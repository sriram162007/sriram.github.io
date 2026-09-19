import { motion } from 'framer-motion';

const NAV_LINKS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'WORK', href: '#work' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'CONTACT', href: '#contact' },
];

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/sriram162007' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sri-ram16' },
  { label: 'Instagram', href: 'https://www.instagram.com/ramxcreates' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'var(--color-bg)',
        borderTop: '1px solid var(--color-border)',
        padding: '48px 0 36px',
      }}
      aria-label="Site footer"
    >
      <div className="container">
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: 32,
            marginBottom: 40,
          }}
        >
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 18,
                fontWeight: 700,
                color: 'var(--color-text-1)',
                letterSpacing: '0.04em',
                marginBottom: 6,
              }}
            >
              SRI RAM
            </p>
            <p className="label" style={{ color: 'var(--color-text-3)', lineHeight: 1.6 }}>
              SOFTWARE BUILDER · AI AUTOMATION · BUSINESS SYSTEMS
            </p>
          </motion.div>

          {/* Nav */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            aria-label="Footer navigation"
          >
            <ul
              style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '8px 24px' }}
              role="list"
            >
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="label footer-link"
                    style={{ color: 'var(--color-text-3)', transition: 'color 0.2s ease' }}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        </div>

        {/* Divider */}
        <div className="divider" style={{ marginBottom: 24 }} />

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <p className="label" style={{ color: 'var(--color-text-3)' }}>
            © {year} SRI RAM. ALL RIGHTS RESERVED.
          </p>

          {/* Socials */}
          <nav aria-label="Social links">
            <ul style={{ listStyle: 'none', display: 'flex', gap: 20 }} role="list">
              {SOCIAL_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label footer-link"
                    style={{ color: 'var(--color-text-3)', transition: 'color 0.2s ease' }}
                    aria-label={`${label} — opens in new tab`}
                  >
                    {label.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <style>{`
        .footer-link:hover {
          color: var(--color-text-1) !important;
        }
      `}</style>
    </footer>
  );
}
