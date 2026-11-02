import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';
import { services } from '../data/services';

/* ── SVG Icons tailored for each service ── */
const SERVICE_ICONS = {
  '01': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  '02': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  ),
  '03': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <path d="M7 8h10M7 12h6" />
    </svg>
  ),
  '04': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a8 8 0 0 0-8 8c0 3.36 2.07 6.24 5 7.42V20a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2.58c2.93-1.18 5-4.06 5-7.42a8 8 0 0 0-8-8z" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="10" y1="9" x2="14" y2="9" />
    </svg>
  ),
};

function ServiceAccordionItem({ service, index, isOpen, onToggle }) {
  const icon = SERVICE_ICONS[service.id] || SERVICE_ICONS['01'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        background: isOpen ? 'rgba(255,255,255,0.015)' : 'transparent',
        transition: 'background-color 0.3s ease',
      }}
      className="service-row"
    >
      {/* Header Button */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          textAlign: 'left',
          background: 'none',
          border: 'none',
          padding: '28px 0',
          cursor: 'pointer',
          display: 'grid',
          gridTemplateColumns: '50px 48px 1fr auto',
          alignItems: 'center',
          gap: 20,
          color: 'inherit',
        }}
        className="service-trigger"
      >
        {/* Index Number */}
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 13,
            color: isOpen ? 'var(--color-red)' : 'var(--color-text-3)',
            fontWeight: 600,
            transition: 'color 0.2s ease',
          }}
        >
          /{service.id}
        </span>

        {/* Category Icon */}
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: isOpen ? 'rgba(225,6,0,0.12)' : 'rgba(255,255,255,0.03)',
            border: `1px solid ${isOpen ? 'rgba(225,6,0,0.35)' : 'rgba(255,255,255,0.08)'}`,
            color: isOpen ? 'var(--color-red)' : 'var(--color-text-2)',
            transition: 'all 0.3s ease',
          }}
          aria-hidden="true"
        >
          {icon}
        </div>

        {/* Title & Tagline */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(18px, 2.2vw, 24px)',
                fontWeight: 700,
                color: isOpen ? 'var(--color-text-1)' : 'var(--color-text-1)',
                letterSpacing: '-0.02em',
                transition: 'color 0.2s ease',
                margin: 0,
              }}
              className="service-title-text"
            >
              {service.title}
            </h3>
            {service.timeline && (
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.08em',
                  padding: '3px 8px',
                  borderRadius: 999,
                  background: 'rgba(225,6,0,0.08)',
                  color: 'var(--color-red)',
                  border: '1px solid rgba(225,6,0,0.2)',
                  fontWeight: 600,
                }}
              >
                {service.timeline}
              </span>
            )}
          </div>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              color: 'var(--color-text-3)',
              margin: '4px 0 0 0',
            }}
          >
            {service.tagline}
          </p>
        </div>

        {/* Toggle Indicator */}
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: isOpen ? 'var(--color-red)' : 'rgba(255,255,255,0.04)',
            color: isOpen ? '#FFFFFF' : 'var(--color-text-3)',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.2s ease, color 0.2s ease',
          }}
          aria-hidden="true"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="7" y1="2" x2="7" y2="12" />
            <line x1="2" y1="7" x2="12" y2="7" />
          </svg>
        </div>
      </button>

      {/* Accordion Expandable Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ overflow: 'hidden' }}
          >
            <div
              style={{
                padding: '0 0 32px 118px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 28,
              }}
              className="service-expanded-content"
            >
              {/* Left Column: Description & Tech Stack */}
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: 'var(--color-text-2)',
                    marginBottom: 16,
                  }}
                >
                  {service.description}
                </p>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 11,
                        padding: '3px 9px',
                        borderRadius: 4,
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: 'var(--color-text-2)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Key Deliverables & Action */}
              <div
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: 8,
                  padding: '20px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      letterSpacing: '0.1em',
                      color: 'var(--color-red)',
                      fontWeight: 700,
                      display: 'block',
                      marginBottom: 12,
                    }}
                  >
                    WHAT YOU GET // DELIVERABLES
                  </span>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {service.deliverables.map((item, dIdx) => (
                      <li
                        key={dIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 10,
                          fontSize: 13,
                          color: 'var(--color-text-2)',
                          lineHeight: 1.45,
                        }}
                      >
                        <span style={{ color: 'var(--color-red)', fontSize: 11, marginTop: 2 }}>✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    marginTop: 20,
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    fontWeight: 600,
                    color: 'var(--color-text-1)',
                    textDecoration: 'none',
                    letterSpacing: '0.04em',
                    transition: 'color 0.2s ease',
                  }}
                  className="service-cta-link"
                >
                  <span>REQUEST THIS SERVICE</span>
                  <span style={{ color: 'var(--color-red)' }}>→</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Services() {
  const [openId, setOpenId] = useState('01');

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="services"
      className="section"
      aria-labelledby="services-heading"
      style={{ background: 'var(--color-bg-2)', position: 'relative' }}
    >
      <div className="container">
        {/* Header Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(24px, 4vw, 48px)',
            marginBottom: 56,
            alignItems: 'end',
          }}
          className="services-header-grid"
        >
          <div style={{ gridColumn: 'span 4' }} className="services-label-col">
            <SectionLabel number="02" text="SERVICES & SOLUTIONS" />
          </div>
          <div style={{ gridColumn: 'span 8' }} className="services-heading-col">
            <motion.h2
              id="services-heading"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                color: 'var(--color-text-1)',
                margin: 0,
              }}
            >
              WHAT I BUILD & DELIVER
            </motion.h2>
            <p
              style={{
                color: 'var(--color-text-3)',
                fontSize: 'clamp(14px, 1.5vw, 16px)',
                marginTop: 10,
                maxWidth: 580,
                lineHeight: 1.6,
              }}
            >
              Production-tested engineering. From AI pipelines to high-throughput SaaS platforms, built for immediate business utility.
            </p>
          </div>
        </div>

        {/* Service Accordion List */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          {services.map((service, index) => (
            <ServiceAccordionItem
              key={service.id}
              service={service}
              index={index}
              isOpen={openId === service.id}
              onToggle={() => toggle(service.id)}
            />
          ))}
        </div>
      </div>

      <style>{`
        .service-trigger:hover .service-title-text {
          color: var(--color-red) !important;
        }
        .service-cta-link:hover {
          color: var(--color-red) !important;
        }
        @media (max-width: 768px) {
          .services-header-grid {
            grid-template-columns: 1fr !important;
          }
          .services-label-col,
          .services-heading-col {
            grid-column: span 1 !important;
          }
          .service-trigger {
            grid-template-columns: 36px 36px 1fr auto !important;
            gap: 12px !important;
            padding: 20px 0 !important;
          }
          .service-expanded-content {
            padding: 0 0 24px 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
