import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectLinks from './ProjectLinks';

/* ── Interactive Hotspot Pin ── */
function HotspotPin({ spot, index }) {
  const [active, setActive] = useState(false);

  return (
    <div
      style={{
        position: 'absolute',
        left: `${spot.x}%`,
        top: `${spot.y}%`,
        transform: 'translate(-50%, -50%)',
        zIndex: active ? 30 : 10,
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => setActive(!active)}
    >
      {/* Outer pulsing ping */}
      <span
        style={{
          position: 'absolute',
          inset: -6,
          borderRadius: '50%',
          background: 'rgba(225, 6, 0, 0.4)',
          animation: 'hotspotPing 2s cubic-bezier(0, 0, 0.2, 1) infinite',
          pointerEvents: 'none',
        }}
      />

      {/* Center glowing dot */}
      <button
        type="button"
        aria-label={`Hotspot: ${spot.title}`}
        style={{
          width: 22,
          height: 22,
          borderRadius: '50%',
          background: '#0D0D10',
          border: '2px solid #E10600',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 10,
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
          cursor: 'pointer',
          boxShadow: '0 0 14px rgba(225,6,0,0.8), inset 0 0 6px rgba(225,6,0,0.4)',
          padding: 0,
          transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
          transform: active ? 'scale(1.25)' : 'scale(1)',
        }}
      >
        +
      </button>

      {/* Tooltip Card */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            style={{
              position: 'absolute',
              bottom: 'calc(100% + 10px)',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 220,
              background: 'rgba(13, 13, 16, 0.95)',
              border: '1px solid rgba(225, 6, 0, 0.45)',
              borderRadius: 8,
              padding: '10px 12px',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.7), 0 0 15px rgba(225,6,0,0.2)',
              pointerEvents: 'none',
              zIndex: 40,
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 9,
                color: 'var(--color-red)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 3,
                display: 'flex',
                alignItems: 'center',
                gap: 5,
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  background: 'var(--color-red)',
                  boxShadow: '0 0 6px var(--color-red)',
                }}
              />
              SYSTEM COMPONENT
            </div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 13,
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.25,
                marginBottom: 4,
              }}
            >
              {spot.title}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--color-text-2)',
                lineHeight: 1.4,
              }}
            >
              {spot.desc}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function KeynoteShowcase({ activeProject, onOpenModal }) {
  if (!activeProject) return null;

  return (
    <div
      style={{
        position: 'relative',
        marginBottom: 36,
      }}
    >
      {/* Ambient Theater Back-Glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          right: '10%',
          height: '60%',
          background: 'radial-gradient(ellipse at center, rgba(225, 6, 0, 0.12) 0%, transparent 68%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Master Theater Glass Deck */}
      <div
        className="keynote-theater-card"
        style={{
          position: 'relative',
          zIndex: 1,
          background: 'linear-gradient(180deg, rgba(20, 20, 26, 0.85) 0%, rgba(10, 10, 14, 0.95) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 24px 64px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(225,6,0,0.06)',
          borderRadius: 16,
          overflow: 'hidden',
          backdropFilter: 'blur(20px)',
        }}
      >
        {/* Terminal Header Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 20px',
            background: 'rgba(255, 255, 255, 0.02)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          {/* Window dots */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F56' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#27C93F' }} />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--color-text-3)',
                marginLeft: 12,
                letterSpacing: '0.08em',
              }}
            >
              KEYNOTE SHOWCASE // STAGE 01
            </span>
          </div>

          {/* Active project ID pill */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                color: 'var(--color-red)',
                background: 'rgba(225, 6, 0, 0.1)',
                border: '1px solid rgba(225, 6, 0, 0.3)',
                padding: '3px 10px',
                borderRadius: 999,
                letterSpacing: '0.12em',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: 5,
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  background: 'var(--color-red)',
                  boxShadow: '0 0 6px var(--color-red)',
                }}
              />
              {activeProject.id} · {activeProject.title}
            </span>
          </div>
        </div>

        {/* 2-Column Split: Viewport (Left/Top) & Dossier (Right) */}
        <div className="keynote-grid">
          {/* 1. Cinematic Viewport */}
          <div
            className="keynote-viewport-wrapper"
            style={{
              position: 'relative',
              background: '#070709',
              minHeight: 380,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              borderRight: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            {/* Ambient image background */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    maxHeight: 520,
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  loading="lazy"
                />

                {/* Subtle vignette gradient */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'radial-gradient(circle at center, transparent 40%, rgba(7,7,9,0.5) 100%), linear-gradient(180deg, rgba(7,7,9,0.3) 0%, transparent 20%, transparent 80%, rgba(7,7,9,0.7) 100%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Interactive Hotspots */}
                {activeProject.hotspots &&
                  activeProject.hotspots.map((spot, idx) => (
                    <HotspotPin key={idx} spot={spot} index={idx} />
                  ))}
              </motion.div>
            </AnimatePresence>

            {/* Hint overlay badge */}
            <div
              style={{
                position: 'absolute',
                bottom: 14,
                left: 14,
                fontFamily: 'var(--font-mono)',
                fontSize: 9,
                color: 'var(--color-text-2)',
                background: 'rgba(10, 10, 14, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '4px 10px',
                borderRadius: 4,
                backdropFilter: 'blur(8px)',
                letterSpacing: '0.08em',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                zIndex: 5,
              }}
            >
              <span style={{ color: 'var(--color-red)' }}>✦</span>
              HOVER PINS FOR SYSTEM ANATOMY
            </div>
          </div>

          {/* 2. Project Dossier Panel */}
          <div
            className="keynote-dossier"
            style={{
              padding: 'clamp(20px, 3vw, 36px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              {/* Category & Badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 12,
                  flexWrap: 'wrap',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    color: 'var(--color-red)',
                    letterSpacing: '0.12em',
                    fontWeight: 700,
                  }}
                >
                  // {activeProject.category}
                </span>
                {activeProject.badge && (
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 9,
                      color: 'var(--color-text-2)',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      padding: '2px 8px',
                      borderRadius: 4,
                      letterSpacing: '0.08em',
                    }}
                  >
                    {activeProject.badge}
                  </span>
                )}
              </div>

              {/* Title & Tagline */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(22px, 2.5vw, 34px)',
                  fontWeight: 800,
                  color: 'var(--color-text-1)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  marginBottom: 10,
                }}
              >
                {activeProject.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 14,
                  color: 'var(--color-text-2)',
                  lineHeight: 1.6,
                  marginBottom: 20,
                }}
              >
                {activeProject.description}
              </p>

              {/* Architecture Blueprint Block */}
              {activeProject.architecture && (
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderLeft: '3px solid var(--color-red)',
                    borderRadius: 6,
                    padding: '10px 14px',
                    marginBottom: 20,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 9,
                      color: 'var(--color-red)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      marginBottom: 4,
                    }}
                  >
                    // ARCHITECTURE BLUEPRINT
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 12,
                      color: 'var(--color-text-1)',
                      lineHeight: 1.4,
                    }}
                  >
                    {activeProject.architecture}
                  </div>
                </div>
              )}

              {/* Core Capabilities */}
              {activeProject.features && (
                <div style={{ marginBottom: 20 }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      color: 'var(--color-text-3)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      marginBottom: 10,
                    }}
                  >
                    CORE CAPABILITIES
                  </div>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                      gap: '8px 14px',
                    }}
                  >
                    {activeProject.features.slice(0, 4).map((feat, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 7,
                          fontFamily: 'var(--font-mono)',
                          fontSize: 11,
                          color: 'var(--color-text-2)',
                          lineHeight: 1.4,
                        }}
                      >
                        <span
                          style={{
                            color: 'var(--color-red)',
                            fontSize: 12,
                            lineHeight: 1,
                            marginTop: 2,
                            flexShrink: 0,
                          }}
                        >
                          ▸
                        </span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack Pills */}
              <div
                style={{
                  display: 'flex',
                  gap: 6,
                  flexWrap: 'wrap',
                  marginBottom: 16,
                }}
              >
                {activeProject.tech?.map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      color: 'var(--color-text-3)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.07)',
                      padding: '3px 8px',
                      borderRadius: 4,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions: Deep Dive & Live Links */}
            <div
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                paddingTop: 16,
              }}
            >
              <ProjectLinks
                live={activeProject.live}
                github={activeProject.github}
                onDeepDive={() => onOpenModal(activeProject)}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes hotspotPing {
          0% {
            transform: scale(0.9);
            opacity: 0.8;
          }
          70% {
            transform: scale(2.2);
            opacity: 0;
          }
          100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }

        .keynote-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
        }

        @media (max-width: 960px) {
          .keynote-grid {
            grid-template-columns: 1fr;
          }
          .keynote-viewport-wrapper {
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important;
            min-height: 280px !important;
          }
        }
      `}</style>
    </div>
  );
}
