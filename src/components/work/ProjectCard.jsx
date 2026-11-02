import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import ProjectLinks from './ProjectLinks';

/* ─────────────────────────────────────────────────────────────
   TECH PILL  — glows on hover
───────────────────────────────────────────────────────────── */
function TechPill({ label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        padding: '3px 9px',
        border: `1px solid ${hovered ? 'rgba(225,6,0,0.45)' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: 4,
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        color: hovered ? '#ff6b6b' : 'var(--color-text-3)',
        letterSpacing: '0.04em',
        whiteSpace: 'nowrap',
        transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
        background: hovered ? 'rgba(225,6,0,0.07)' : 'transparent',
        transform: hovered ? 'translateY(-1px)' : 'translateY(0)',
        cursor: 'default',
      }}
    >
      {label}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────
   FEATURE DOT ROW
───────────────────────────────────────────────────────────── */
function FeatureItem({ text }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 8,
        fontFamily: 'var(--font-body)',
        fontSize: 12,
        color: 'var(--color-text-2)',
        lineHeight: 1.4,
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: 4,
          height: 4,
          borderRadius: '50%',
          background: 'var(--color-red)',
          flexShrink: 0,
          marginTop: 5,
          boxShadow: '0 0 4px rgba(225,6,0,0.6)',
        }}
      />
      {text}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   3-D TILT HOOK — spring physics
───────────────────────────────────────────────────────────── */
function useTilt(intensity = 8) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springCfg = { stiffness: 300, damping: 30, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), springCfg);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), springCfg);

  const onMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave };
}

/* ─────────────────────────────────────────────────────────────
   FEATURED EDITORIAL SPOTLIGHT
───────────────────────────────────────────────────────────── */
export function FeaturedProjectCard({ project, onOpenModal }) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(3);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      style={{ perspective: 1200, marginBottom: 28 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.article
        ref={ref}
        layout
        aria-label={`Featured project: ${project.title}`}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          border: `1px solid ${hovered ? 'rgba(225,6,0,0.4)' : 'rgba(255,255,255,0.08)'}`,
          borderRadius: 12,
          overflow: 'hidden',
          background: 'rgba(17,17,17,0.9)',
          backdropFilter: 'blur(20px)',
          transition: 'border-color 0.3s ease, box-shadow 0.4s ease',
          boxShadow: hovered
            ? '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(225,6,0,0.15), inset 0 1px 0 rgba(255,255,255,0.06)'
            : '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)',
          willChange: 'transform',
          cursor: 'default',
        }}
        onMouseMove={onMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { onMouseLeave(); setHovered(false); }}
        className="featured-article"
      >
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)' }}
          className="featured-inner"
        >
          {/* ── Left: Content ── */}
          <div
            style={{
              gridColumn: 'span 5',
              padding: 'clamp(28px, 4vw, 52px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            className="featured-content"
          >
            <div>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-red)', fontWeight: 700 }}>
                  {project.id}
                </span>
                <span style={{ width: 16, height: 1, background: 'var(--color-border)', display: 'inline-block' }} />
                <span className="label" style={{ color: 'var(--color-text-3)', fontSize: 10 }}>
                  {project.category}
                </span>
              </div>

              {/* Badge */}
              <div style={{ marginBottom: 16 }}>
                <span style={{
                  display: 'inline-flex',
                  padding: '4px 12px',
                  background: 'rgba(225,6,0,0.12)',
                  border: '1px solid rgba(225,6,0,0.35)',
                  borderRadius: 6,
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: 'var(--color-red)',
                  boxShadow: '0 0 12px rgba(225,6,0,0.12)',
                }}>
                  {project.badge || 'FEATURED SYSTEM'}
                </span>
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(26px, 3.2vw, 44px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'var(--color-text-1)',
                lineHeight: 1.05,
                marginBottom: 8,
              }}>
                {project.title}
              </h3>

              {/* Tagline */}
              {project.tagline && (
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  color: 'var(--color-text-2)',
                  marginBottom: 16,
                  fontStyle: 'italic',
                }}>
                  {project.tagline}
                </p>
              )}

              {/* Architecture */}
              {project.architecture && (
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: '#ff8a80',
                  background: 'rgba(225,6,0,0.06)',
                  padding: '6px 12px',
                  borderRadius: 6,
                  borderLeft: '2px solid var(--color-red)',
                  marginBottom: 18,
                  lineHeight: 1.5,
                }}>
                  ARCH: {project.architecture}
                </div>
              )}

              {/* Description */}
              <p className="body-md" style={{
                color: 'var(--color-text-2)',
                marginBottom: 20,
                lineHeight: 1.7,
                maxWidth: 440,
              }}>
                {project.description}
              </p>

              {/* Tech Stack */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                {project.tech.map((t) => <TechPill key={t} label={t} />)}
              </div>
            </div>

            {/* Features + Actions */}
            <div>
              <p className="label" style={{ color: 'var(--color-text-3)', marginBottom: 12, fontSize: 10 }}>
                KEY CAPABILITIES
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px', marginBottom: 24 }} className="features-grid">
                {project.features.map((f) => <FeatureItem key={f} text={f} />)}
              </div>
              <ProjectLinks
                live={project.live}
                github={project.github}
                onDeepDive={onOpenModal ? () => onOpenModal(project) : undefined}
              />
            </div>
          </div>

          {/* ── Right: Visual ── */}
          <div
            style={{
              gridColumn: 'span 7',
              borderLeft: '1px solid rgba(255,255,255,0.06)',
              position: 'relative',
              overflow: 'hidden',
              minHeight: 440,
              background: 'var(--color-bg-4)',
            }}
            className="featured-visual"
          >
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  transition: 'transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.4s ease',
                  filter: hovered ? 'brightness(0.95) saturate(1.05)' : 'brightness(0.85)',
                  transform: hovered ? 'scale(1.04)' : 'scale(1)',
                  display: 'block',
                }}
                className="featured-img"
              />
            ) : (
              <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, var(--color-bg-3), var(--color-bg-4))',
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--color-text-3)', letterSpacing: '0.1em' }}>
                  {project.id} — {project.title}
                </span>
              </div>
            )}

            {/* Gradient overlay */}
            <div aria-hidden="true" style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(120deg, rgba(225,6,0,0.04) 0%, transparent 60%, rgba(225,6,0,0.08) 100%)',
              pointerEvents: 'none',
              transition: 'opacity 0.4s ease',
              opacity: hovered ? 1 : 0,
            }} />
            <div aria-hidden="true" style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '40%',
              background: 'linear-gradient(to top, rgba(5,5,5,0.7) 0%, transparent 100%)',
              pointerEvents: 'none',
            }} />

            {/* Corner accent */}
            <div aria-hidden="true" style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: 3,
              height: '100%',
              background: 'linear-gradient(to bottom, transparent, rgba(225,6,0,0.6), transparent)',
              opacity: hovered ? 1 : 0,
              transition: 'opacity 0.4s ease',
            }} />
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   STANDARD PROJECT CARD — alternating, 3D tilt
───────────────────────────────────────────────────────────── */
export default function ProjectCard({ project, reverse = false, index = 0, onOpenModal }) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(5);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      style={{ perspective: 1000, marginBottom: 20 }}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <motion.article
        ref={ref}
        layout
        aria-label={`Project: ${project.title}`}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          display: 'grid',
          gridTemplateColumns: reverse ? '1fr 1.15fr' : '1.15fr 1fr',
          border: `1px solid ${hovered ? 'rgba(225,6,0,0.3)' : 'rgba(255,255,255,0.07)'}`,
          borderRadius: 10,
          overflow: 'hidden',
          background: 'rgba(14,14,14,0.9)',
          backdropFilter: 'blur(16px)',
          transition: 'border-color 0.3s ease, box-shadow 0.4s ease',
          boxShadow: hovered
            ? '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(225,6,0,0.1), inset 0 1px 0 rgba(255,255,255,0.05)'
            : '0 4px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.03)',
          cursor: 'default',
          willChange: 'transform',
        }}
        className={`large-card ${reverse ? 'large-card-reverse' : ''}`}
        onMouseMove={onMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { onMouseLeave(); setHovered(false); }}
      >
        {/* ── Content ── */}
        <div
          style={{
            padding: 'clamp(22px, 3vw, 40px)',
            order: reverse ? 2 : 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
          className="lc-content"
        >
          <div>
            {/* Number + Category + Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-red)', fontWeight: 700 }}>
                {project.id}
              </span>
              <span style={{ width: 14, height: 1, background: 'var(--color-border)', display: 'inline-block' }} />
              <span className="label" style={{ color: 'var(--color-text-3)', fontSize: 10 }}>
                {project.category}
              </span>
              {project.badge && (
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 9,
                  padding: '2px 7px',
                  borderRadius: 4,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  color: 'var(--color-text-2)',
                  letterSpacing: '0.08em',
                  marginLeft: 'auto',
                }}>
                  {project.badge}
                </span>
              )}
            </div>

            {/* Title */}
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(19px, 2.2vw, 28px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--color-text-1)',
              lineHeight: 1.1,
              marginBottom: 8,
              transition: 'color 0.2s ease',
            }}>
              {project.title}
            </h3>

            {/* Architecture */}
            {project.architecture && (
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10.5,
                color: '#ff8a80',
                background: 'rgba(225,6,0,0.05)',
                padding: '5px 10px',
                borderRadius: 5,
                borderLeft: '2px solid var(--color-red)',
                marginBottom: 14,
                lineHeight: 1.45,
              }}>
                ARCH: {project.architecture}
              </div>
            )}

            {/* Description */}
            <p className="body-md" style={{ color: 'var(--color-text-2)', marginBottom: 16, lineHeight: 1.65 }}>
              {project.description}
            </p>

            {/* Tech Stack */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
              {project.tech.map((t) => <TechPill key={t} label={t} />)}
            </div>
          </div>

          {/* Features + Workflow + Links */}
          <div>
            <div style={{ paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <p className="label" style={{ color: 'var(--color-text-3)', marginBottom: 10, fontSize: 10 }}>
                CAPABILITIES
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 12 }}>
                {project.features.map((f) => (
                  <span key={f} style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 11,
                    color: 'var(--color-text-3)',
                    padding: '3px 9px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: 4,
                    transition: 'border-color 0.2s ease, color 0.2s ease',
                  }}>
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Pipeline workflow */}
            {project.workflow && (
              <div style={{ paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: 10 }}>
                <p className="label" style={{ color: 'var(--color-text-3)', marginBottom: 8, fontSize: 10 }}>
                  PIPELINE WORKFLOW
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, alignItems: 'center' }}>
                  {project.workflow.map((step, i) => (
                    <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 10,
                        color: 'var(--color-text-2)',
                        padding: '2px 8px',
                        border: '1px solid rgba(255,255,255,0.07)',
                        borderRadius: 3,
                      }}>
                        {step}
                      </span>
                      {i < project.workflow.length - 1 && (
                        <span style={{ color: 'var(--color-red)', fontSize: 10 }}>→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <ProjectLinks
              live={project.live}
              github={project.github}
              onDeepDive={onOpenModal ? () => onOpenModal(project) : undefined}
            />
          </div>
        </div>

        {/* ── Visual ── */}
        <div
          style={{
            order: reverse ? 1 : 2,
            borderLeft: reverse ? 'none' : '1px solid rgba(255,255,255,0.05)',
            borderRight: reverse ? '1px solid rgba(255,255,255,0.05)' : 'none',
            overflow: 'hidden',
            position: 'relative',
            background: 'var(--color-bg-4)',
            minHeight: 280,
          }}
          className="lc-visual"
        >
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: hovered ? 'brightness(0.92) saturate(1.08)' : 'brightness(0.82)',
                transition: 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.35s ease',
                transform: hovered ? 'scale(1.06)' : 'scale(1)',
                display: 'block',
              }}
              className="lc-img"
            />
          ) : (
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              background: 'linear-gradient(135deg, rgba(225,6,0,0.04), rgba(17,17,17,0.6))',
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 28, color: 'rgba(225,6,0,0.15)', fontWeight: 900 }}>
                {project.id}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--color-text-3)', letterSpacing: '0.12em', textAlign: 'center', padding: '0 16px' }}>
                {project.title}
              </span>
            </div>
          )}

          {/* Hover red accent side line */}
          <div aria-hidden="true" style={{
            position: 'absolute',
            top: 0,
            right: reverse ? 'auto' : 0,
            left: reverse ? 0 : 'auto',
            width: 2,
            height: '100%',
            background: 'linear-gradient(to bottom, transparent, rgba(225,6,0,0.6), transparent)',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.35s ease',
          }} className="lc-red-accent" />

          {/* Bottom gradient */}
          <div aria-hidden="true" style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '35%',
            background: 'linear-gradient(to top, rgba(5,5,5,0.65), transparent)',
            pointerEvents: 'none',
          }} />
        </div>
      </motion.article>
    </motion.div>
  );
}
