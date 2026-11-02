import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Live Action Button ── */
function ActionBtn({ href, variant = 'live', icon, label }) {
  const [hovered, setHovered] = useState(false);
  const isLive = variant === 'live';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '7px 14px',
        borderRadius: 6,
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.04em',
        textDecoration: 'none',
        background: isLive ? 'rgba(225, 6, 0, 0.12)' : 'rgba(255, 255, 255, 0.04)',
        border: isLive
          ? '1px solid rgba(225, 6, 0, 0.4)'
          : '1px solid rgba(255, 255, 255, 0.1)',
        color: isLive ? '#FFFFFF' : 'var(--color-text-2)',
        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: hovered ? 'translateY(-2px)' : 'none',
        boxShadow: hovered && isLive ? '0 4px 16px rgba(225, 6, 0, 0.3)' : 'none',
      }}
    >
      {icon}
      <span>{label}</span>
      <span style={{ fontSize: 10, opacity: 0.8 }}>↗</span>
    </a>
  );
}

/* ── Deep Dive Button ── */
function DeepDiveBtn({ onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '7px 16px',
        borderRadius: 6,
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.05em',
        background: 'linear-gradient(180deg, #E10600 0%, #B30000 100%)',
        border: 'none',
        color: '#FFFFFF',
        cursor: 'pointer',
        boxShadow: hovered
          ? '0 6px 20px rgba(225, 6, 0, 0.5)'
          : '0 2px 10px rgba(225, 6, 0, 0.3)',
        transform: hovered ? 'translateY(-2px)' : 'none',
        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <span>⚡</span>
      <span>DEEP DIVE</span>
    </button>
  );
}

/* ── 1. Hero Bento Card (Span 2 / Full Width) ── */
function BentoHeroCard({ project, onOpenModal }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bento-hero-card"
      style={{
        gridColumn: '1 / -1',
        position: 'relative',
        borderRadius: 18,
        background: 'linear-gradient(135deg, rgba(22, 22, 28, 0.9) 0%, rgba(11, 11, 15, 0.95) 100%)',
        border: hovered
          ? '1px solid rgba(225, 6, 0, 0.5)'
          : '1px solid rgba(255, 255, 255, 0.09)',
        boxShadow: hovered
          ? '0 24px 60px -12px rgba(0, 0, 0, 0.8), 0 0 35px rgba(225, 6, 0, 0.15)'
          : '0 16px 48px -12px rgba(0, 0, 0, 0.7)',
        overflow: 'hidden',
        backdropFilter: 'blur(20px)',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
    >
      {/* Top Laser Accent */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: 'linear-gradient(90deg, transparent 0%, #E10600 50%, transparent 100%)',
          opacity: hovered ? 1 : 0.4,
          transition: 'opacity 0.3s',
        }}
      />

      <div className="bento-hero-grid">
        {/* Left Dossier Info */}
        <div
          style={{
            padding: 'clamp(24px, 3.5vw, 42px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            zIndex: 2,
          }}
        >
          <div>
            {/* Badge & Index */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 12,
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  color: 'var(--color-red)',
                  background: 'rgba(225, 6, 0, 0.1)',
                  border: '1px solid rgba(225, 6, 0, 0.3)',
                  padding: '3px 9px',
                  borderRadius: 4,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                }}
              >
                FLAGSHIP 0{project.id}
              </span>
              {project.badge && (
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 9,
                    color: 'var(--color-text-2)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '3px 8px',
                    borderRadius: 4,
                    letterSpacing: '0.06em',
                  }}
                >
                  {project.badge}
                </span>
              )}
            </div>

            {/* Title & Tagline */}
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(24px, 3vw, 40px)',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '-0.025em',
                lineHeight: 1.1,
                marginBottom: 8,
              }}
            >
              {project.title}
            </h3>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: 'var(--color-red)',
                marginBottom: 14,
                letterSpacing: '0.02em',
              }}
            >
              // {project.tagline}
            </div>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                color: 'var(--color-text-2)',
                lineHeight: 1.6,
                marginBottom: 20,
                maxWidth: 580,
              }}
            >
              {project.description}
            </p>

            {/* Architecture Pill */}
            {project.architecture && (
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.025)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderLeft: '3px solid var(--color-red)',
                  borderRadius: 6,
                  padding: '10px 14px',
                  marginBottom: 20,
                  maxWidth: 560,
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
                  // ARCHITECTURE PATTERN
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 12,
                    color: 'var(--color-text-1)',
                    lineHeight: 1.4,
                  }}
                >
                  {project.architecture}
                </div>
              </div>
            )}

            {/* Tech Chips */}
            <div
              style={{
                display: 'flex',
                gap: 6,
                flexWrap: 'wrap',
                marginBottom: 24,
              }}
            >
              {project.tech?.map((t, idx) => (
                <span
                  key={idx}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    color: 'var(--color-text-3)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    padding: '3px 8px',
                    borderRadius: 4,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Trigger Row */}
          <div
            style={{
              display: 'flex',
              gap: 10,
              alignItems: 'center',
              flexWrap: 'wrap',
              paddingTop: 16,
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            <DeepDiveBtn onClick={() => onOpenModal(project)} />
            {project.live && (
              <ActionBtn
                href={project.live}
                variant="live"
                label="LIVE DEMO"
                icon={
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: 'var(--color-red)',
                      boxShadow: '0 0 6px var(--color-red)',
                    }}
                  />
                }
              />
            )}
            {project.github && (
              <ActionBtn
                href={project.github}
                variant="github"
                label="SOURCE CODE"
                icon={
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                }
              />
            )}
          </div>
        </div>

        {/* Right UI Viewport (Clean, high-fidelity uncropped preview) */}
        <div
          className="bento-hero-visual"
          style={{
            position: 'relative',
            background: '#07070A',
            borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            minHeight: 420,
          }}
        >
          {/* Subtle back ambient glow */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse at center, rgba(225, 6, 0, 0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              display: 'block',
              transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: hovered ? 'scale(1.03)' : 'scale(1)',
            }}
          />

          {/* Floating Metric Tags on visual */}
          <div
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              alignItems: 'flex-end',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                color: '#FFFFFF',
                background: 'rgba(10, 10, 14, 0.85)',
                border: '1px solid rgba(225, 6, 0, 0.4)',
                padding: '4px 10px',
                borderRadius: 999,
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                letterSpacing: '0.05em',
              }}
            >
              ⚡ PRODUCTION READY
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── 2. Standard Bento Grid Card (Half-Width or Third-Width) ── */
function BentoCard({ project, onOpenModal, span = 1 }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: 16,
        background: 'linear-gradient(180deg, rgba(20, 20, 26, 0.85) 0%, rgba(12, 12, 16, 0.95) 100%)',
        border: hovered
          ? '1px solid rgba(225, 6, 0, 0.45)'
          : '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: hovered
          ? '0 20px 48px -10px rgba(0, 0, 0, 0.75), 0 0 24px rgba(225, 6, 0, 0.12)'
          : '0 12px 36px -10px rgba(0, 0, 0, 0.6)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backdropFilter: 'blur(16px)',
        transition: 'border-color 0.25s, box-shadow 0.25s',
      }}
    >
      {/* Top Accent Strip on hover */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: 'var(--color-red)',
          opacity: hovered ? 1 : 0,
          boxShadow: '0 0 10px var(--color-red)',
          transition: 'opacity 0.25s',
          zIndex: 5,
        }}
      />

      {/* Top Half: High-fidelity Visual Preview */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 10',
          background: '#070709',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top center',
            display: 'block',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
          }}
          loading="lazy"
        />

        {/* Floating ID & Category Badge */}
        <div
          style={{
            position: 'absolute',
            top: 12,
            left: 12,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              fontWeight: 700,
              color: '#FFFFFF',
              background: 'rgba(10, 10, 14, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '2px 7px',
              borderRadius: 4,
              backdropFilter: 'blur(8px)',
            }}
          >
            0{project.id}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 9,
              color: 'var(--color-red)',
              background: 'rgba(10, 10, 14, 0.85)',
              border: '1px solid rgba(225, 6, 0, 0.3)',
              padding: '2px 7px',
              borderRadius: 4,
              backdropFilter: 'blur(8px)',
              letterSpacing: '0.04em',
            }}
          >
            {project.domains ? project.domains[0]?.toUpperCase() : 'SYSTEM'}
          </span>
        </div>
      </div>

      {/* Bottom Half: Specs & Action Triggers */}
      <div
        style={{
          padding: '20px 22px',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h4
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(18px, 1.8vw, 22px)',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              marginBottom: 6,
            }}
          >
            {project.title}
          </h4>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              color: 'var(--color-text-2)',
              lineHeight: 1.5,
              marginBottom: 14,
            }}
          >
            {project.tagline || project.description}
          </p>

          {/* Architecture snippet */}
          {project.architecture && (
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                color: 'var(--color-text-3)',
                background: 'rgba(255, 255, 255, 0.025)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                padding: '6px 10px',
                borderRadius: 4,
                marginBottom: 14,
                lineHeight: 1.4,
              }}
            >
              <span style={{ color: 'var(--color-red)', marginRight: 4 }}>▸</span>
              {project.architecture}
            </div>
          )}

          {/* Tech tags */}
          <div
            style={{
              display: 'flex',
              gap: 5,
              flexWrap: 'wrap',
              marginBottom: 18,
            }}
          >
            {project.tech?.slice(0, 3).map((t, idx) => (
              <span
                key={idx}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 9,
                  color: 'var(--color-text-3)',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  padding: '2px 6px',
                  borderRadius: 3,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Card Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 12,
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            flexWrap: 'wrap',
            gap: 8,
          }}
        >
          <DeepDiveBtn onClick={() => onOpenModal(project)} />

          <div style={{ display: 'flex', gap: 6 }}>
            {project.live && (
              <ActionBtn
                href={project.live}
                variant="live"
                label="DEMO"
                icon={
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: '50%',
                      background: 'var(--color-red)',
                    }}
                  />
                }
              />
            )}
            {project.github && (
              <ActionBtn
                href={project.github}
                variant="github"
                label="CODE"
                icon={
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                }
              />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Apple Pro Bento Grid Master Component ── */
export default function BentoProjectGrid({ projects, onOpenModal }) {
  if (!projects || projects.length === 0) return null;

  // Designate Flagship project for the Hero slot (e.g. Namma Agency '06' or Manai CRM '01' or first item)
  const heroProject =
    projects.find((p) => p.slug === 'namma-agency') ||
    projects.find((p) => p.featured) ||
    projects[0];

  const remainingProjects = projects.filter((p) => p.id !== heroProject.id);

  return (
    <div style={{ position: 'relative', width: '100%', marginBottom: 40 }}>
      {/* Bento Grid Container */}
      <div className="apple-bento-grid">
        {/* Slot 1: Masterpiece Hero Bento */}
        <BentoHeroCard project={heroProject} onOpenModal={onOpenModal} />

        {/* Slots 2-8: Dynamic Bento Grid Cards */}
        <AnimatePresence mode="popLayout">
          {remainingProjects.map((proj, idx) => (
            <BentoCard
              key={proj.id}
              project={proj}
              onOpenModal={onOpenModal}
            />
          ))}
        </AnimatePresence>
      </div>

      <style>{`
        .apple-bento-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .bento-hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
        }

        @media (max-width: 960px) {
          .apple-bento-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .bento-hero-grid {
            grid-template-columns: 1fr;
          }
          .bento-hero-visual {
            border-left: none !important;
            border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
            min-height: 280px !important;
          }
        }
      `}</style>
    </div>
  );
}
