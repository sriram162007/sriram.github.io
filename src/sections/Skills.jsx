import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';
import { skillCategories } from '../data/skills';

/* ── SVG Icons per category ── */
const CATEGORY_ICONS = {
  Languages: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Frontend: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  Backend: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  'AI & Automation': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
      <circle cx="7.5" cy="14.5" r="1.5" />
      <circle cx="16.5" cy="14.5" r="1.5" />
    </svg>
  ),
  'Tools & Cloud': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
};

const CATEGORY_COLORS = {
  Languages: '#3178c6',
  Frontend: '#61dafb',
  Backend: '#339933',
  'AI & Automation': '#E10600',
  'Tools & Cloud': '#f05032',
};

const CATEGORY_DESC = {
  Languages: 'Primary languages I write production code in daily.',
  Frontend: 'Frameworks and tools I use to build fast, responsive UIs.',
  Backend: 'Server-side stack for APIs, databases, and real-time systems.',
  'AI & Automation': 'LLM APIs, multimodal pipelines, and workflow automation.',
  'Tools & Cloud': 'Developer toolchain, deployment, and version control.',
};

function SkillCard({ category, index }) {
  const [hovered, setHovered] = useState(false);
  const color = CATEGORY_COLORS[category.label] || 'var(--color-red)';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '24px',
        borderRadius: 12,
        border: `1px solid ${hovered ? `${color}40` : 'rgba(255,255,255,0.07)'}`,
        background: hovered
          ? `rgba(${hexToRgb(color)}, 0.04)`
          : 'rgba(14,14,14,0.6)',
        backdropFilter: 'blur(12px)',
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        boxShadow: hovered
          ? `0 12px 40px rgba(0,0,0,0.3), 0 0 0 1px ${color}20`
          : '0 2px 8px rgba(0,0,0,0.15)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
        <div style={{
          width: 44,
          height: 44,
          borderRadius: 10,
          background: `${color}15`,
          border: `1px solid ${color}30`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: color,
          flexShrink: 0,
          transition: 'all 0.3s ease',
          boxShadow: hovered ? `0 0 16px ${color}30` : 'none',
        }}>
          {CATEGORY_ICONS[category.label]}
        </div>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 9,
          color: hovered ? color : 'var(--color-text-3)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          padding: '3px 8px',
          borderRadius: 4,
          border: `1px solid ${hovered ? `${color}30` : 'rgba(255,255,255,0.06)'}`,
          transition: 'all 0.2s ease',
          whiteSpace: 'nowrap',
        }}>
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Category name */}
      <div>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 16,
          fontWeight: 700,
          color: hovered ? '#fff' : 'var(--color-text-1)',
          letterSpacing: '-0.01em',
          marginBottom: 6,
          transition: 'color 0.2s ease',
        }}>
          {category.label}
        </h3>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 12,
          color: 'var(--color-text-3)',
          lineHeight: 1.5,
        }}>
          {CATEGORY_DESC[category.label]}
        </p>
      </div>

      {/* Divider */}
      <div style={{
        height: 1,
        background: `linear-gradient(90deg, ${color}30, transparent)`,
        transition: 'opacity 0.2s ease',
        opacity: hovered ? 1 : 0.4,
      }} />

      {/* Skills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {category.skills.map((skill) => (
          <span
            key={skill}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '4px 10px',
              borderRadius: 5,
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              fontWeight: 500,
              color: hovered ? '#e0e0e0' : 'var(--color-text-2)',
              background: hovered ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              transition: 'all 0.2s ease',
              letterSpacing: '0.02em',
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Proficiency bar */}
      <div style={{
        height: 2,
        background: 'rgba(255,255,255,0.06)',
        borderRadius: 1,
        overflow: 'hidden',
        marginTop: 'auto',
      }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${[85, 90, 80, 88, 82][index] || 85}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.1 + 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            height: '100%',
            background: `linear-gradient(90deg, ${color}, ${color}80)`,
            borderRadius: 1,
            boxShadow: `0 0 6px ${color}60`,
          }}
        />
      </div>
    </motion.div>
  );
}

/* hex to rgb helper for rgba() */
function hexToRgb(hex) {
  if (!hex || hex.startsWith('var')) return '225,6,0';
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`
    : '225,6,0';
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section"
      aria-labelledby="skills-heading"
      style={{ background: 'var(--color-bg-2)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Ambient */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '40%',
        height: '60%',
        background: 'radial-gradient(ellipse, rgba(49,120,198,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(32px, 5vw, 80px)',
            marginBottom: 56,
          }}
          className="skills-header"
        >
          <div style={{ gridColumn: 'span 4' }} className="skills-label">
            <SectionLabel number="04" text="SKILLS" />
          </div>
          <div style={{ gridColumn: 'span 8' }} className="skills-title">
            <motion.h2
              id="skills-heading"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: '-0.03em',
                color: 'var(--color-text-1)',
              }}
            >
              TECH STACK
              <br />
              <span style={{ color: 'var(--color-text-3)' }}>I BUILD WITH</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                color: 'var(--color-text-3)',
                marginTop: 12,
                maxWidth: 440,
                lineHeight: 1.6,
              }}
            >
              Not just a list of tools — these are the technologies I use to ship real production systems.
            </motion.p>
          </div>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 16,
          }}
        >
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.label} category={cat} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-header { grid-template-columns: 1fr !important; }
          .skills-label, .skills-title { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  );
}
