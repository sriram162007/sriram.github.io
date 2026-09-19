import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

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
        {/* Top divider */}
        <div className="divider" style={{ marginBottom: 32 }} />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(32px, 5vw, 80px)',
          }}
          className="about-grid"
        >
          {/* Left — label column */}
          <div
            style={{ gridColumn: 'span 3' }}
            className="about-label-col"
          >
            <SectionLabel number="01" text="ABOUT ME" />

            {/* Metadata */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{ marginTop: 40 }}
            >
              {[
                ['LOCATION', 'Chennai, India'],
                ['STATUS', 'CS Engineering Student'],
                ['FOCUS', 'AI & Full Stack'],
              ].map(([key, val]) => (
                <div key={key} style={{ marginBottom: 20 }}>
                  <p className="label" style={{ color: 'var(--color-text-3)', marginBottom: 4 }}>
                    {key}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 14,
                      color: 'var(--color-text-2)',
                      fontWeight: 400,
                    }}
                  >
                    {val}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — content column */}
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
                fontSize: 'clamp(32px, 4vw, 52px)',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
                color: 'var(--color-text-1)',
                marginBottom: 'clamp(24px, 3vw, 40px)',
              }}
            >
              I DIDN'T START WITH YEARS OF EXPERIENCE.
              <br />
              <span style={{ color: 'var(--color-text-2)' }}>
                I STARTED BY BEING CURIOUS.
              </span>
            </motion.h2>

            <motion.div
              variants={stagger}
              style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
            >
              {[
                'I didn\'t start with years of experience or a long list of projects. I started by being curious about how technology works.',
                'Today, I spend most of my time building AI tools, automation systems, and web applications because I enjoy solving problems and learning something new with every project.',
                'Every project teaches me a better way to design, build, and improve software. My goal is simple: keep learning, keep building, and create technology that people find useful.',
              ].map((para, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  className="body-lg"
                  style={{ color: 'var(--color-text-2)', maxWidth: 640 }}
                >
                  {para}
                </motion.p>
              ))}
            </motion.div>

            {/* Red accent line */}
            <motion.div
              variants={fadeUp}
              style={{ marginTop: 48 }}
            >
              <div className="red-line" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .about-label-col {
            grid-column: span 1 !important;
          }
          .about-content-col {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
