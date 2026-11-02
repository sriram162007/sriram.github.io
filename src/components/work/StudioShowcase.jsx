import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StudioShowcase({
  projects,
  activeProject,
  onSelectProject,
  onOpenModal,
}) {
  const [hovered, setHovered] = useState(false);
  const currentIndex = projects.findIndex((p) => p.id === activeProject.id);

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectProject(projects[currentIndex - 1]);
    } else {
      onSelectProject(projects[projects.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      onSelectProject(projects[currentIndex + 1]);
    } else {
      onSelectProject(projects[0]);
    }
  };

  // Keyboard navigation support (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, projects]);

  return (
    <div style={{ position: 'relative', width: '100%', marginBottom: 40 }}>
      {/* ── 1. Top Segmented Selector Bar ── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          marginBottom: 16,
          flexWrap: 'wrap',
        }}
      >
        {/* Project Tabs Strip */}
        <div
          className="studio-tabs-strip"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            overflowX: 'auto',
            paddingBottom: 4,
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            flex: 1,
            minWidth: 280,
          }}
        >
          {projects.map((proj, idx) => {
            const isActive = proj.id === activeProject.id;
            return (
              <button
                key={proj.id}
                type="button"
                onClick={() => onSelectProject(proj)}
                className={`studio-tab-pill ${isActive ? 'studio-tab-active' : ''}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 7,
                  padding: '8px 14px',
                  borderRadius: 8,
                  border: isActive
                    ? '1px solid rgba(225, 6, 0, 0.6)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isActive
                    ? 'linear-gradient(180deg, rgba(225, 6, 0, 0.15) 0%, rgba(20, 20, 26, 0.9) 100%)'
                    : 'rgba(255, 255, 255, 0.02)',
                  color: isActive ? '#FFFFFF' : 'var(--color-text-3)',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  fontWeight: isActive ? 700 : 500,
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isActive
                    ? '0 0 16px rgba(225, 6, 0, 0.2), inset 0 1px 0 rgba(225, 6, 0, 0.4)'
                    : 'none',
                }}
              >
                <span
                  style={{
                    color: isActive ? 'var(--color-red)' : 'var(--color-text-3)',
                    fontSize: 10,
                    fontWeight: 700,
                  }}
                >
                  {proj.id}
                </span>
                <span>{proj.title}</span>
                {isActive && (
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: '50%',
                      background: 'var(--color-red)',
                      boxShadow: '0 0 6px var(--color-red)',
                      marginLeft: 2,
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Counter & Arrows */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--color-text-3)',
              letterSpacing: '0.08em',
            }}
          >
            <span style={{ color: '#FFFFFF', fontWeight: 700 }}>
              {String(currentIndex + 1).padStart(2, '0')}
            </span>{' '}
            / {String(projects.length).padStart(2, '0')}
          </span>

          <div style={{ display: 'flex', gap: 4 }}>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous project"
              className="studio-nav-btn"
            >
              ←
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next project"
              className="studio-nav-btn"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* ── 2. Massive Widescreen Stage (Linear / Stripe Style) ── */}
      <div
        className="studio-stage-frame"
        style={{
          position: 'relative',
          borderRadius: 16,
          background: '#09090C',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow:
            '0 32px 80px -16px rgba(0, 0, 0, 0.85), 0 0 40px rgba(225, 6, 0, 0.08)',
          overflow: 'hidden',
          backdropFilter: 'blur(24px)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Ambient Underglow */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: '15%',
            right: '15%',
            height: '40%',
            background:
              'radial-gradient(ellipse at top, rgba(225, 6, 0, 0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Browser Top Window Chrome */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 18px',
            background: 'rgba(16, 16, 22, 0.85)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
            gap: 12,
          }}
        >
          {/* macOS traffic light dots */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <span
              style={{
                width: 11,
                height: 11,
                borderRadius: '50%',
                background: '#FF5F56',
                boxShadow: '0 0 6px rgba(255, 95, 86, 0.4)',
              }}
            />
            <span
              style={{
                width: 11,
                height: 11,
                borderRadius: '50%',
                background: '#FFBD2E',
                boxShadow: '0 0 6px rgba(255, 189, 46, 0.4)',
              }}
            />
            <span
              style={{
                width: 11,
                height: 11,
                borderRadius: '50%',
                background: '#27C93F',
                boxShadow: '0 0 6px rgba(39, 201, 63, 0.4)',
              }}
            />
          </div>

          {/* Center Address Pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: 6,
              padding: '4px 14px',
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--color-text-2)',
              letterSpacing: '0.04em',
              maxWidth: 420,
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: 'var(--color-red)', fontSize: 10 }}>🔒</span>
            <span
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {activeProject.live ||
                `system://internal.staging/${activeProject.slug}`}
            </span>
          </div>

          {/* Right badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                color: 'var(--color-red)',
                background: 'rgba(225, 6, 0, 0.1)',
                border: '1px solid rgba(225, 6, 0, 0.3)',
                padding: '3px 8px',
                borderRadius: 4,
                letterSpacing: '0.06em',
                fontWeight: 600,
              }}
            >
              PRODUCTION LIVE
            </span>
          </div>
        </div>

        {/* ── Fullscreen UI Viewport (16:9 natural aspect ratio, completely visible) ── */}
        <div
          className="studio-viewport"
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            aspectRatio: '16 / 9.2',
            background: '#070709',
            overflow: 'hidden',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
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
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: hovered ? 'scale(1.02)' : 'scale(1)',
                }}
              />

              {/* Edge subtle inner shadow so image sits naturally inside screen */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  boxShadow: 'inset 0 0 40px rgba(0,0,0,0.5)',
                  pointerEvents: 'none',
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── 3. Integrated Production HUD (Dossier & Actions) ── */}
        <div
          className="studio-hud"
          style={{
            position: 'relative',
            zIndex: 2,
            background: 'linear-gradient(180deg, rgba(14, 14, 18, 0.95) 0%, #0A0A0E 100%)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '24px 28px',
            display: 'grid',
            gridTemplateColumns: '1.4fr 0.6fr',
            gap: 24,
            alignItems: 'center',
          }}
        >
          {/* Left: Metadata & Tech */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 8,
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
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    padding: '2px 8px',
                    borderRadius: 4,
                    letterSpacing: '0.06em',
                  }}
                >
                  {activeProject.badge}
                </span>
              )}
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(20px, 2.2vw, 28px)',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                marginBottom: 6,
              }}
            >
              {activeProject.title}
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                color: 'var(--color-text-2)',
                lineHeight: 1.5,
                marginBottom: 14,
                maxWidth: 680,
              }}
            >
              {activeProject.description}
            </p>

            {/* Architecture pill & Tech stack */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                flexWrap: 'wrap',
              }}
            >
              {activeProject.architecture && (
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: 'var(--color-text-1)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderLeft: '2px solid var(--color-red)',
                    padding: '4px 10px',
                    borderRadius: 4,
                  }}
                >
                  <span style={{ color: 'var(--color-red)', marginRight: 5 }}>
                    ARCH:
                  </span>
                  {activeProject.architecture}
                </div>
              )}

              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {activeProject.tech?.slice(0, 4).map((t, i) => (
                  <span
                    key={i}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      color: 'var(--color-text-3)',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      padding: '3px 8px',
                      borderRadius: 4,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Premium Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              alignItems: 'stretch',
              justifyContent: 'center',
            }}
          >
            {/* Deep Dive Case Study */}
            <button
              type="button"
              onClick={() => onOpenModal(activeProject)}
              className="hud-action-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                background: 'linear-gradient(180deg, #E10600 0%, #B30000 100%)',
                color: '#FFFFFF',
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.06em',
                padding: '12px 20px',
                borderRadius: 8,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(225, 6, 0, 0.35)',
                transition: 'all 0.2s',
              }}
            >
              <span>⚡</span>
              <span>DEEP DIVE ARCHITECTURE</span>
            </button>

            {/* Live Demo or Github Code */}
            <div style={{ display: 'flex', gap: 8 }}>
              {activeProject.live && (
                <a
                  href={activeProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hud-action-secondary"
                  style={{
                    flex: 1,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    padding: '10px 14px',
                    borderRadius: 8,
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: '#27C93F',
                      boxShadow: '0 0 6px #27C93F',
                    }}
                  />
                  <span>LIVE DEMO ↗</span>
                </a>
              )}

              {activeProject.github && (
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hud-action-secondary"
                  style={{
                    flex: 1,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: 'var(--color-text-2)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    padding: '10px 14px',
                    borderRadius: 8,
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>SOURCE ↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .studio-tabs-strip::-webkit-scrollbar {
          display: none;
        }
        .studio-nav-btn {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--color-text-2);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-family: var(--font-mono);
          font-size: 13px;
          transition: all 0.2s;
        }
        .studio-nav-btn:hover {
          background: rgba(225, 6, 0, 0.15);
          border-color: rgba(225, 6, 0, 0.4);
          color: #FFFFFF;
        }
        .studio-tab-pill:hover {
          color: #FFFFFF;
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.05);
        }
        .hud-action-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(225, 6, 0, 0.5) !important;
          background: linear-gradient(180deg, #FF1E16 0%, #D00500 100%) !important;
        }
        .hud-action-secondary:hover {
          background: rgba(255, 255, 255, 0.08) !important;
          border-color: rgba(255, 255, 255, 0.25) !important;
          color: #FFFFFF !important;
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .studio-hud {
            grid-template-columns: 1fr !important;
            padding: 18px !important;
          }
          .studio-viewport {
            aspect-ratio: 16 / 10 !important;
          }
        }
      `}</style>
    </div>
  );
}
