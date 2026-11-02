import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Language color map ─── */
const LANG_COLORS = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  Python: '#3776ab',
  'TypeScript / React': '#3178c6',
  'JavaScript / React': '#f7df1e',
  'Markdown / SVG': '#083fa1',
  CSS: '#563d7c',
  HTML: '#e34c26',
  Go: '#00add8',
  Rust: '#dea584',
};

function LangDot({ language }) {
  const base = language?.split(' /')[0]?.trim();
  const color = LANG_COLORS[language] || LANG_COLORS[base] || '#555';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
      <span style={{
        width: 8, height: 8,
        borderRadius: '50%',
        background: color,
        flexShrink: 0,
        boxShadow: `0 0 4px ${color}60`,
      }} />
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        color: 'var(--color-text-3)',
      }}>
        {language}
      </span>
    </span>
  );
}

function RepoCard({ repo, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '20px',
        borderRadius: 10,
        border: `1px solid ${hovered ? 'rgba(225,6,0,0.3)' : 'rgba(255,255,255,0.07)'}`,
        background: hovered
          ? 'rgba(225,6,0,0.04)'
          : 'rgba(14,14,14,0.7)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'border-color 0.25s ease, background 0.25s ease, box-shadow 0.3s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)',
        boxShadow: hovered
          ? '0 12px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(225,6,0,0.08)'
          : '0 2px 8px rgba(0,0,0,0.2)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        cursor: 'default',
      }}
    >
      {/* Top: category + stars */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 9,
          color: hovered ? 'rgba(225,6,0,0.9)' : 'var(--color-text-3)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          transition: 'color 0.2s ease',
          padding: '2px 7px',
          borderRadius: 3,
          border: `1px solid ${hovered ? 'rgba(225,6,0,0.25)' : 'rgba(255,255,255,0.05)'}`,
          background: hovered ? 'rgba(225,6,0,0.06)' : 'transparent',
          transition: 'all 0.2s ease',
        }}>
          {repo.category}
        </span>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 3,
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          color: 'var(--color-red)',
        }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          {repo.stars}
        </span>
      </div>

      {/* Repo name */}
      <div style={{ marginBottom: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ color: 'var(--color-text-3)', flexShrink: 0 }}>
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          <h4 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 13,
            fontWeight: 700,
            color: hovered ? '#FFFFFF' : 'var(--color-text-1)',
            wordBreak: 'break-word',
            transition: 'color 0.2s ease',
            lineHeight: 1.3,
          }}>
            {repo.name}
          </h4>
        </div>
        <p style={{
          fontFamily: 'var(--font-body)',
          color: 'var(--color-text-2)',
          fontSize: 12,
          lineHeight: 1.55,
        }}>
          {repo.description}
        </p>
      </div>

      {/* Footer */}
      <div style={{
        paddingTop: 12,
        borderTop: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,
      }}>
        <LangDot language={repo.language} />
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          {repo.live && (
            <a
              href={repo.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                color: 'var(--color-red)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 3,
                padding: '3px 8px',
                borderRadius: 4,
                border: '1px solid rgba(225,6,0,0.25)',
                background: 'rgba(225,6,0,0.06)',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(225,6,0,0.15)';
                e.currentTarget.style.borderColor = 'rgba(225,6,0,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(225,6,0,0.06)';
                e.currentTarget.style.borderColor = 'rgba(225,6,0,0.25)';
              }}
            >
              LIVE ↗
            </a>
          )}
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              color: 'var(--color-text-2)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 3,
              padding: '3px 8px',
              borderRadius: 4,
              border: '1px solid rgba(255,255,255,0.08)',
              transition: 'all 0.2s ease',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.color = 'var(--color-text-2)';
            }}
          >
            CODE ↗
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function RepoArchiveDrawer({ repositories }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        marginTop: 48,
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 12,
        background: 'rgba(11,11,11,0.7)',
        backdropFilter: 'blur(16px)',
        overflow: 'hidden',
      }}
    >
      {/* Header / Toggle */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          width: '100%',
          padding: '20px 28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          transition: 'background 0.2s ease',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.025)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
        aria-expanded={isOpen}
        aria-controls="repo-archive-panel"
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {/* GitHub icon */}
          <div style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            background: 'rgba(225,6,0,0.08)',
            border: '1px solid rgba(225,6,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--color-red)' }} aria-hidden="true">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" strokeWidth="2" stroke="currentColor" fill="none" />
            </svg>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 13,
                letterSpacing: '0.05em',
                color: 'var(--color-text-1)',
                fontWeight: 700,
              }}>
                github.com/sriram162007
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                padding: '2px 9px',
                borderRadius: 20,
                background: 'rgba(225,6,0,0.12)',
                border: '1px solid rgba(225,6,0,0.3)',
                color: 'var(--color-red)',
                fontWeight: 600,
              }}>
                {repositories.length} REPOS
              </span>
            </div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 12,
              color: 'var(--color-text-3)',
              marginTop: 2,
            }}>
              Open source repositories &amp; public projects
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-text-3)' }}>
            {isOpen ? 'COLLAPSE' : 'VIEW ALL'}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              width: 28,
              height: 28,
              borderRadius: 6,
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: 'var(--color-text-2)' }} aria-hidden="true">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </motion.div>
        </div>
      </button>

      {/* Expandable Repos Grid */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="repo-archive-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              padding: '24px 28px 28px',
              borderTop: '1px solid rgba(255,255,255,0.06)',
            }}>
              {/* Live profile link */}
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginBottom: 20,
              }}>
                <a
                  href="https://github.com/sriram162007"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: 'var(--color-text-2)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '6px 14px',
                    borderRadius: 6,
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(225,6,0,0.4)';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.background = 'rgba(225,6,0,0.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.color = 'var(--color-text-2)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  VIEW FULL PROFILE ↗
                </a>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: 14,
              }}>
                {repositories.map((repo, i) => (
                  <RepoCard key={repo.name} repo={repo} index={i} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
