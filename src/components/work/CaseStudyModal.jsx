import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow || '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} Case Study`}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(3, 4, 7, 0.88)',
            backdropFilter: 'blur(12px)',
          }}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 26, stiffness: 220 }}
          style={{
            position: 'relative',
            zIndex: 10,
            width: '100%',
            maxWidth: 820,
            maxHeight: '90vh',
            background: '#080A10',
            border: '1px solid rgba(225, 6, 0, 0.45)',
            borderRadius: 16,
            boxShadow: '0 24px 60px rgba(0,0,0,0.9), 0 0 40px rgba(225,6,0,0.18)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Modal Header */}
          <div
            style={{
              padding: '20px 28px',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'rgba(255,255,255,0.02)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span
                style={{
                  fontFamily: "'Space Grotesk', monospace",
                  fontSize: 11,
                  color: '#E10600',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                }}
              >
                PROJECT ARCHITECTURE DEEP-DIVE
              </span>
              {project.badge && (
                <span
                  style={{
                    padding: '2px 8px',
                    borderRadius: 4,
                    background: 'rgba(225,6,0,0.12)',
                    border: '1px solid rgba(225,6,0,0.3)',
                    fontFamily: 'monospace',
                    fontSize: 9.5,
                    color: '#FF6B6B',
                  }}
                >
                  {project.badge}
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#FFFFFF',
                width: 32,
                height: 32,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: 16,
                lineHeight: 1,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#E10600';
                e.currentTarget.style.borderColor = '#E10600';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
              }}
            >
              ✕
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div
            style={{
              padding: '28px',
              overflowY: 'auto',
              flex: 1,
            }}
          >
            {/* Project Image Banner */}
            {project.image && (
              <div
                style={{
                  width: '100%',
                  height: 280,
                  borderRadius: 12,
                  overflow: 'hidden',
                  marginBottom: 24,
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: '#040507',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            )}

            {/* Title & Tagline */}
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 26,
                fontWeight: 800,
                color: '#FFFFFF',
                margin: '0 0 6px 0',
              }}
            >
              {project.title}
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                color: '#FF6B6B',
                margin: '0 0 20px 0',
                fontWeight: 500,
              }}
            >
              {project.tagline}
            </p>

            {/* Tech Stack Pills */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8,
                marginBottom: 24,
              }}
            >
              {project.tech?.map((t) => (
                <span
                  key={t}
                  style={{
                    padding: '4px 10px',
                    borderRadius: 4,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    fontFamily: 'monospace',
                    fontSize: 11,
                    color: 'rgba(255,255,255,0.85)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Architecture Card */}
            <div
              style={{
                padding: '16px 20px',
                borderRadius: 10,
                background: 'rgba(225,6,0,0.05)',
                border: '1px solid rgba(225,6,0,0.22)',
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  fontFamily: "'Space Grotesk', monospace",
                  fontSize: 10,
                  color: '#E10600',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  marginBottom: 6,
                }}
              >
                SYSTEM ARCHITECTURE DESIGN
              </div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 13.5,
                  color: '#FFFFFF',
                  fontWeight: 600,
                }}
              >
                {project.architecture}
              </div>
            </div>

            {/* Operational Overview */}
            <div style={{ marginBottom: 24 }}>
              <h4
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: 8,
                }}
              >
                SYSTEM DESCRIPTION &amp; BUSINESS IMPACT
              </h4>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13.5,
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {project.description}
              </p>
            </div>

            {/* Core Capabilities */}
            <div style={{ marginBottom: 28 }}>
              <h4
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: 12,
                }}
              >
                CORE ARCHITECTURAL CAPABILITIES
              </h4>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: 10,
                }}
              >
                {project.features?.map((feat, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      padding: '10px 14px',
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 6,
                      fontSize: 12.5,
                      color: 'rgba(255,255,255,0.85)',
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        background: '#00FF88',
                        boxShadow: '0 0 6px #00FF88',
                        flexShrink: 0,
                      }}
                    />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 12,
                paddingTop: 16,
                borderTop: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '10px 20px',
                    borderRadius: 8,
                    background: '#E10600',
                    color: '#FFFFFF',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textDecoration: 'none',
                    boxShadow: '0 0 16px rgba(225,6,0,0.5)',
                  }}
                >
                  VISIT LIVE APPLICATION ↗
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '10px 18px',
                    borderRadius: 8,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: '#FFFFFF',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textDecoration: 'none',
                  }}
                >
                  VIEW SOURCE CODE ↗
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
