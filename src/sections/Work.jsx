import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';
import { projects } from '../data/projects';

/* ── Tech pill ── */
function TechPill({ label }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        padding: '4px 10px',
        border: '1px solid var(--color-border)',
        borderRadius: 3,
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--color-text-3)',
        letterSpacing: '0.04em',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </span>
  );
}

/* ── Featured project (MANAI CRM) — large editorial card ── */
function FeaturedProject({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      aria-label={`Featured project: ${project.title}`}
      style={{
        border: '1px solid var(--color-border)',
        borderRadius: 4,
        overflow: 'hidden',
        background: 'var(--color-bg-3)',
        marginBottom: 24,
        transition: 'border-color 0.3s ease',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(225,6,0,0.3)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; }}
    >
      <div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)' }}
        className="featured-inner"
      >
        {/* Left — Content */}
        <div
          style={{
            gridColumn: 'span 5',
            padding: 'clamp(32px, 4vw, 56px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
          className="featured-content"
        >
          <div>
            {/* Number + Category */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-red)' }}>
                {project.id}
              </span>
              <span style={{ width: 20, height: 1, background: 'var(--color-border)', display: 'inline-block' }} />
              <span className="label" style={{ color: 'var(--color-text-3)', fontSize: 10 }}>
                {project.category}
              </span>
            </div>

            {/* Featured badge */}
            <div style={{ marginBottom: 20 }}>
              <span
                style={{
                  display: 'inline-flex',
                  padding: '3px 10px',
                  background: 'rgba(225,6,0,0.1)',
                  border: '1px solid rgba(225,6,0,0.25)',
                  borderRadius: 3,
                  fontFamily: 'var(--font-body)',
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: 'var(--color-red)',
                }}
              >
                FEATURED
              </span>
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 3.2vw, 44px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'var(--color-text-1)',
                lineHeight: 1,
                marginBottom: 20,
              }}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p
              className="body-md"
              style={{ color: 'var(--color-text-2)', marginBottom: 28, lineHeight: 1.7, maxWidth: 360 }}
            >
              {project.description}
            </p>

            {/* Tech stack */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
              {project.tech.map((t) => (
                <TechPill key={t} label={t} />
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <p className="label" style={{ color: 'var(--color-text-3)', marginBottom: 14, fontSize: 10 }}>
              KEY FEATURES
            </p>
            <div
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 20px' }}
              className="features-grid"
            >
              {project.features.map((f) => (
                <div
                  key={f}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    fontFamily: 'var(--font-body)',
                    fontSize: 12,
                    color: 'var(--color-text-2)',
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      width: 3,
                      height: 3,
                      borderRadius: '50%',
                      background: 'var(--color-red)',
                      flexShrink: 0,
                    }}
                  />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Real Image */}
        <div
          style={{
            gridColumn: 'span 7',
            borderLeft: '1px solid var(--color-border)',
            position: 'relative',
            overflow: 'hidden',
            minHeight: 460,
            background: 'var(--color-bg-4)',
          }}
          className="featured-visual"
        >
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} showcase`}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                transition: 'transform 0.6s ease, filter 0.3s ease',
                filter: 'brightness(0.9)',
                display: 'block',
              }}
              className="featured-img"
            />
          ) : null}

          {/* Subtle red glow overlay */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '40%',
              background: 'linear-gradient(to top, rgba(225,6,0,0.06) 0%, transparent 100%)',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>

      <style>{`
        .featured-inner:hover .featured-img {
          transform: scale(1.02);
          filter: brightness(1.0);
        }
        @media (max-width: 900px) {
          .featured-inner {
            grid-template-columns: 1fr !important;
          }
          .featured-content {
            grid-column: span 1 !important;
          }
          .featured-visual {
            grid-column: span 1 !important;
            min-height: 280px !important;
            border-left: none !important;
            border-top: 1px solid var(--color-border) !important;
          }
          .features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </motion.article>
  );
}

/* ── Large alternating project (for proj 02 & 04) ── */
function LargeProjectCard({ project, reverse }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      aria-label={`Project: ${project.title}`}
      style={{
        display: 'grid',
        gridTemplateColumns: reverse ? '1fr 1.1fr' : '1.1fr 1fr',
        border: '1px solid var(--color-border)',
        borderRadius: 4,
        overflow: 'hidden',
        background: 'var(--color-bg-3)',
        transition: 'border-color 0.3s ease',
        cursor: 'default',
      }}
      className={`large-card ${reverse ? 'large-card-reverse' : ''}`}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(225,6,0,0.22)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; }}
    >
      {/* Content */}
      <div
        style={{
          padding: 'clamp(28px, 3.5vw, 44px)',
          order: reverse ? 2 : 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        className="lc-content"
      >
        <div>
          {/* Number + Category */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-red)' }}>
              {project.id}
            </span>
            <span style={{ width: 16, height: 1, background: 'var(--color-border)', display: 'inline-block' }} />
            <span className="label" style={{ color: 'var(--color-text-3)', fontSize: 10 }}>
              {project.category}
            </span>
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(18px, 2.2vw, 28px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--color-text-1)',
              lineHeight: 1.1,
              marginBottom: 14,
            }}
          >
            {project.title}
          </h3>

          <p
            className="body-md"
            style={{ color: 'var(--color-text-2)', marginBottom: 20, lineHeight: 1.7 }}
          >
            {project.description}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
            {project.tech.map((t) => <TechPill key={t} label={t} />)}
          </div>
        </div>

        {/* Features compact */}
        <div style={{ paddingTop: 16, borderTop: '1px solid var(--color-border-2)' }}>
          <p className="label" style={{ color: 'var(--color-text-3)', marginBottom: 8, fontSize: 10 }}>
            FEATURES
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {project.features.map((f) => (
              <span
                key={f}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 11,
                  color: 'var(--color-text-3)',
                  padding: '3px 8px',
                  border: '1px solid var(--color-border-2)',
                  borderRadius: 2,
                }}
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Image */}
      <div
        style={{
          order: reverse ? 1 : 2,
          borderLeft: reverse ? 'none' : '1px solid var(--color-border)',
          borderRight: reverse ? '1px solid var(--color-border)' : 'none',
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
              filter: 'brightness(0.85)',
              transition: 'transform 0.5s ease, filter 0.3s ease',
              display: 'block',
            }}
            className="lc-img"
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 1px, transparent 1px, transparent 8px)',
            }}
          >
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 10, letterSpacing: '0.2em', color: 'var(--color-text-3)' }}>
              {project.id}
            </span>
          </div>
        )}

        {/* Red accent on hover — right edge */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 2,
            height: '100%',
            background: 'linear-gradient(to bottom, transparent, rgba(225,6,0,0.5), transparent)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
          }}
          className="lc-red-accent"
        />
      </div>

      <style>{`
        .large-card:hover .lc-img {
          transform: scale(1.04);
          filter: brightness(0.95);
        }
        .large-card:hover .lc-red-accent {
          opacity: 1;
        }
        @media (max-width: 768px) {
          .large-card,
          .large-card-reverse {
            grid-template-columns: 1fr !important;
          }
          .lc-content { order: 2 !important; }
          .lc-visual {
            order: 1 !important;
            min-height: 220px !important;
            border-left: none !important;
            border-right: none !important;
            border-bottom: 1px solid var(--color-border);
          }
        }
      `}</style>
    </motion.article>
  );
}

/* ── Small compact card (for proj 03 & 05) ── */
function CompactCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
      aria-label={`Project: ${project.title}`}
      style={{
        border: '1px solid var(--color-border)',
        borderRadius: 4,
        background: 'var(--color-bg-3)',
        overflow: 'hidden',
        transition: 'border-color 0.25s ease',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(225,6,0,0.25)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; }}
    >
      {/* Image */}
      <div
        style={{
          height: 200,
          background: 'var(--color-bg-4)',
          borderBottom: '1px solid var(--color-border)',
          overflow: 'hidden',
          position: 'relative',
          flexShrink: 0,
        }}
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
              filter: 'brightness(0.82)',
              transition: 'transform 0.5s ease, filter 0.3s ease',
              display: 'block',
            }}
            className="compact-img"
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(255,255,255,0.02) 24px, rgba(255,255,255,0.02) 25px)',
            }}
          >
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: '0.2em', color: 'var(--color-text-3)' }}>
              {project.id}
            </span>
          </div>
        )}

        {/* Red accent bottom edge on hover */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 2,
            background: 'linear-gradient(90deg, transparent, rgba(225,6,0,0.6), transparent)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
          }}
          className="compact-red"
        />
      </div>

      {/* Content */}
      <div style={{ padding: 'clamp(18px, 2.5vw, 26px)', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Number + Category */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-red)' }}>
            {project.id}
          </span>
          <span style={{ width: 14, height: 1, background: 'var(--color-border)', display: 'inline-block' }} />
          <span className="label" style={{ color: 'var(--color-text-3)', fontSize: 10 }}>
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(15px, 1.6vw, 18px)',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            color: 'var(--color-text-1)',
            marginBottom: 10,
            lineHeight: 1.2,
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="body-md"
          style={{ color: 'var(--color-text-2)', marginBottom: 16, flex: 1, lineHeight: 1.65 }}
        >
          {project.description}
        </p>

        {/* Tech */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
          {project.tech.map((t) => <TechPill key={t} label={t} />)}
        </div>

        {/* Workflow (QR) */}
        {project.workflow && (
          <div style={{ paddingTop: 14, borderTop: '1px solid var(--color-border-2)', marginBottom: 14 }}>
            <p className="label" style={{ color: 'var(--color-text-3)', marginBottom: 10, fontSize: 10 }}>
              WORKFLOW
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, alignItems: 'center' }}>
              {project.workflow.map((step, i) => (
                <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      color: 'var(--color-text-2)',
                      padding: '2px 8px',
                      border: '1px solid var(--color-border-2)',
                      borderRadius: 2,
                    }}
                  >
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

        {/* Features compact */}
        <div style={{ paddingTop: 12, borderTop: '1px solid var(--color-border-2)' }}>
          <p className="label" style={{ color: 'var(--color-text-3)', marginBottom: 8, fontSize: 10 }}>
            FEATURES
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
            {project.features.slice(0, 4).map((f) => (
              <span
                key={f}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 11,
                  color: 'var(--color-text-3)',
                  padding: '2px 8px',
                  border: '1px solid var(--color-border-2)',
                  borderRadius: 2,
                }}
              >
                {f}
              </span>
            ))}
            {project.features.length > 4 && (
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--color-text-3)' }}>
                +{project.features.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>

      <style>{`
        article:hover .compact-img {
          transform: scale(1.04);
          filter: brightness(0.95);
        }
        article:hover .compact-red {
          opacity: 1;
        }
      `}</style>
    </motion.article>
  );
}

export default function Work() {
  const featured = projects.find((p) => p.featured);
  // Arrange: proj 02 and 04 as large alternating, 03 and 05 as compact grid
  const proj02 = projects.find((p) => p.id === '02');
  const proj03 = projects.find((p) => p.id === '03');
  const proj04 = projects.find((p) => p.id === '04');
  const proj05 = projects.find((p) => p.id === '05');

  return (
    <section
      id="work"
      className="section"
      aria-labelledby="work-heading"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <SectionLabel number="03" text="SELECTED WORK" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ marginTop: 20 }}
          >
            <h2
              id="work-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 3.5vw, 50px)',
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                color: 'var(--color-text-1)',
              }}
            >
              REAL PROJECTS.
            </h2>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 3.5vw, 50px)',
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                color: 'var(--color-text-2)',
              }}
            >
              REAL SYSTEMS.
            </h2>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 3.5vw, 50px)',
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                color: 'var(--color-text-3)',
              }}
            >
              BUILT TO SOLVE REAL PROBLEMS.
            </h2>
          </motion.div>
        </div>

        {/* 01 — Featured MANAI CRM */}
        {featured && <FeaturedProject project={featured} />}

        {/* 02 — AI Career Platform (large left) */}
        {proj02 && (
          <div style={{ marginBottom: 24 }}>
            <LargeProjectCard project={proj02} reverse={false} />
          </div>
        )}

        {/* 03 + 04 — Compact side by side grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}
          className="compact-grid"
        >
          {proj03 && <CompactCard project={proj03} />}
          {proj04 && <CompactCard project={proj04} />}
        </div>

        {/* 05 — Milk Delivery (large right) */}
        {proj05 && (
          <div>
            <LargeProjectCard project={proj05} reverse={true} />
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .compact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
