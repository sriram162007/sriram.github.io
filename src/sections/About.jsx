import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

/* ── Animated Counter ── */
function Counter({ to, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1200;
          const step = Math.ceil(to / (duration / 16));
          const timer = setInterval(() => {
            start = Math.min(start + step, to);
            setCount(start);
            if (start >= to) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to]);

  return (
    <span ref={ref} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {prefix}{count}{suffix}
    </span>
  );
}

const STATS = [
  { value: 8, suffix: '+', label: 'Projects Shipped' },
  { value: 3, suffix: '', label: 'Domains Mastered' },
  { value: 15, suffix: 'k+', label: 'Lines of Code' },
  { value: 1, suffix: '', label: 'Started: 2026' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function About() {
  return (
    <section
      id="about"
      className="section"
      aria-labelledby="about-heading"
      style={{ background: 'var(--color-bg)', paddingTop: '40px' }}
    >
      <div className="container">
        <div className="divider" style={{ marginBottom: 32 }} />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(32px, 5vw, 80px)',
          }}
          className="about-grid"
        >
          {/* Left — label + metadata + "currently building" */}
          <div style={{ gridColumn: 'span 3' }} className="about-label-col">
            <SectionLabel number="01" text="ABOUT ME" />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 20 }}
            >
              {[
                ['LOCATION', 'Chennai, India'],
                ['STATUS', 'CS Engineering Student'],
                ['FOCUS', 'AI & Full Stack'],
              ].map(([key, val]) => (
                <div key={key}>
                  <p className="label" style={{ color: 'var(--color-text-3)', marginBottom: 4 }}>
                    {key}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 14,
                    color: 'var(--color-text-2)',
                    fontWeight: 400,
                  }}>
                    {val}
                  </p>
                </div>
              ))}



              {/* Open to opportunities */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.75, duration: 0.5 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 7,
                  padding: '7px 12px',
                  background: 'rgba(225,6,0,0.06)',
                  border: '1px solid rgba(225,6,0,0.2)',
                  borderRadius: 999,
                  width: 'fit-content',
                }}
              >
                <span style={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  background: 'var(--color-red)',
                  boxShadow: '0 0 6px rgba(225,6,0,0.8)',
                  display: 'inline-block',
                  animation: 'glow-pulse 2.4s ease-in-out infinite',
                }} aria-hidden="true" />
                <span className="label" style={{ color: 'var(--color-red)', fontSize: 9 }}>
                  OPEN TO WORK
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right — content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            style={{ gridColumn: 'span 9' }}
            className="about-content-col"
          >
            <motion.h2
              id="about-heading"
              variants={fadeUp}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 3.8vw, 52px)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: 'var(--color-text-1)',
                marginBottom: 'clamp(20px, 2.5vw, 36px)',
              }}
            >
              I DIDN'T START WITH
              <br />
              <span style={{ color: 'var(--color-text-2)' }}>EXPERIENCE.</span>
              <br />
              <span style={{
                background: 'linear-gradient(90deg, var(--color-red), #FF6B6B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                I STARTED CURIOUS.
              </span>
            </motion.h2>

            <motion.div
              variants={stagger}
              style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
            >
              {[
                'I didn\'t start with years of experience or a long list of projects. I started by being curious about how technology actually works — and I haven\'t stopped since.',
                'I build AI tools, automation systems, and full-stack web applications because solving real problems is what drives me. Every project ships something people actually use.',
                'My goal is simple: keep learning, keep shipping, and build technology that makes a real dent.',
              ].map((para, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  className="body-lg"
                  style={{ color: 'var(--color-text-2)', maxWidth: 600, lineHeight: 1.7 }}
                >
                  {para}
                </motion.p>
              ))}
            </motion.div>

            {/* Animated Stats */}
            <motion.div
              variants={fadeUp}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 16,
                marginTop: 44,
                paddingTop: 36,
                borderTop: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {STATS.map(({ value, suffix, label }) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                    minWidth: 110,
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(28px, 3vw, 40px)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    color: 'var(--color-red)',
                    lineHeight: 1,
                  }}>
                    <Counter to={value} suffix={suffix} />
                  </span>
                  <span className="label" style={{ color: 'var(--color-text-3)', fontSize: 10 }}>
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes glow-green {
          0%, 100% { box-shadow: 0 0 6px rgba(34,197,94,0.5); }
          50%       { box-shadow: 0 0 14px rgba(34,197,94,0.9); }
        }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-label-col, .about-content-col { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  );
}
