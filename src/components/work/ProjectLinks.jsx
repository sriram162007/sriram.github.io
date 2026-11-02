import { useState } from 'react';

function ActionBtn({ href, variant, icon, label, ariaLabel }) {
  const [hovered, setHovered] = useState(false);

  const isLive = variant === 'live';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`project-action-btn ${isLive ? 'project-action-live' : 'project-action-github'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ gap: 7, position: 'relative', overflow: 'hidden' }}
    >
      {/* Shimmer sweep on hover */}
      {hovered && (
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)',
            transform: 'translateX(-100%)',
            animation: 'shimmerBtn 0.5s ease forwards',
            pointerEvents: 'none',
          }}
        />
      )}
      {icon}
      {label}
      <span style={{ fontSize: 11, opacity: 0.8 }}>↗</span>

      <style>{`
        @keyframes shimmerBtn {
          from { transform: translateX(-100%); }
          to   { transform: translateX(100%); }
        }
      `}</style>
    </a>
  );
}

export default function ProjectLinks({ live, github, onDeepDive }) {
  if (!live && !github && !onDeepDive) return null;

  return (
    <div
      style={{
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        marginTop: 20,
        flexWrap: 'wrap',
      }}
    >
      {onDeepDive && (
        <button
          onClick={onDeepDive}
          type="button"
          aria-label="View architecture deep dive case study"
          className="project-action-btn"
          style={{
            background: 'rgba(225, 6, 0, 0.15)',
            border: '1px solid rgba(225, 6, 0, 0.45)',
            color: '#FFFFFF',
            cursor: 'pointer',
            padding: '7px 14px',
            borderRadius: 6,
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.05em',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            boxShadow: '0 0 12px rgba(225,6,0,0.25)',
          }}
        >
          <span style={{ color: '#FF3B30' }}>⚡</span>
          <span>DEEP DIVE</span>
        </button>
      )}

      {live && (
        <ActionBtn
          href={live}
          variant="live"
          ariaLabel="View live demo"
          label="LIVE DEMO"
          icon={
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--color-red)',
                display: 'inline-block',
                boxShadow: '0 0 6px rgba(225,6,0,0.9)',
                flexShrink: 0,
              }}
            />
          }
        />
      )}

      {github && (
        <ActionBtn
          href={github}
          variant="github"
          ariaLabel="View source code on GitHub"
          label="CODE"
          icon={
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          }
        />
      )}
    </div>
  );
}
