import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';
import { skillCategories } from '../data/skills';

function SkillTag({ skill, delay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '8px 14px',
        border: `1px solid ${hovered ? 'var(--color-red)' : 'var(--color-border)'}`,
        borderRadius: 3,
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        fontWeight: 500,
        color: hovered ? 'var(--color-text-1)' : 'var(--color-text-2)',
        letterSpacing: '0.01em',
        cursor: 'default',
        transition: 'border-color 0.2s ease, color 0.2s ease, background 0.2s ease',
        background: hovered ? 'rgba(225,6,0,0.05)' : 'transparent',
        whiteSpace: 'nowrap',
      }}
    >
      {skill}
    </motion.span>
  );
}

function CategoryRow({ category, categoryIndex }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: categoryIndex * 0.08 }}
      style={{
        display: 'grid',
        gridTemplateColumns: '140px 1fr',
        gap: 32,
        paddingTop: 28,
        paddingBottom: 28,
        borderBottom: '1px solid var(--color-border)',
        alignItems: 'start',
      }}
      className="category-row"
    >
      <span
        className="label"
        style={{ color: 'var(--color-text-3)', paddingTop: 10 }}
      >
        {category.label.toUpperCase()}
      </span>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {category.skills.map((skill, si) => (
          <SkillTag key={skill} skill={skill} delay={categoryIndex * 0.06 + si * 0.04} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section"
      aria-labelledby="skills-heading"
      style={{ background: 'var(--color-bg-2)' }}
    >
      <div className="container">
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
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: '-0.025em',
                color: 'var(--color-text-1)',
              }}
            >
              TECH STACK
            </motion.h2>
          </div>
        </div>

        {/* Top border */}
        <div className="divider" />

        {/* Category rows */}
        {skillCategories.map((cat, i) => (
          <CategoryRow key={cat.label} category={cat} categoryIndex={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-header {
            grid-template-columns: 1fr !important;
          }
          .skills-label, .skills-title {
            grid-column: span 1 !important;
          }
          .category-row {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
        }
      `}</style>
    </section>
  );
}
