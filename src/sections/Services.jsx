import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';
import { services } from '../data/services';

function ServiceItem({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        padding: '32px 0',
        borderBottom: '1px solid var(--color-border)',
        display: 'grid',
        gridTemplateColumns: '80px 1fr',
        gap: 24,
        alignItems: 'start',
        position: 'relative',
        cursor: 'default',
      }}
      className="service-item"
    >
      {/* Number */}
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 13,
          color: 'var(--color-red)',
          fontWeight: 500,
          paddingTop: 2,
        }}
      >
        {service.id}
      </span>

      <div>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(18px, 2vw, 22px)',
            fontWeight: 700,
            color: 'var(--color-text-1)',
            letterSpacing: '-0.01em',
            marginBottom: 10,
            transition: 'color 0.2s ease',
          }}
          className="service-title"
        >
          {service.title}
        </h3>
        <p
          className="body-md"
          style={{ color: 'var(--color-text-2)', maxWidth: 480 }}
        >
          {service.description}
        </p>
      </div>

      {/* Left red accent line on hover */}
      <motion.div
        initial={{ height: 0 }}
        whileHover={{ height: '100%' }}
        style={{
          position: 'absolute',
          left: -24,
          top: 0,
          width: 2,
          background: 'var(--color-red)',
          borderRadius: 1,
        }}
        aria-hidden="true"
      />

      <style>{`
        .service-item:hover .service-title {
          color: var(--color-red) !important;
        }
      `}</style>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="section"
      aria-labelledby="services-heading"
      style={{ background: 'var(--color-bg-2)' }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(32px, 5vw, 80px)',
            marginBottom: 64,
          }}
          className="services-header-grid"
        >
          <div style={{ gridColumn: 'span 4' }} className="services-label-col">
            <SectionLabel number="02" text="SERVICES" />
          </div>
          <div style={{ gridColumn: 'span 8' }} className="services-heading-col">
            <motion.h2
              id="services-heading"
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
              WHAT I BUILD
            </motion.h2>
          </div>
        </div>

        {/* Service List */}
        <div>
          {/* Top border */}
          <div className="divider" />
          {services.map((service, i) => (
            <ServiceItem key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-header-grid {
            grid-template-columns: 1fr !important;
          }
          .services-label-col,
          .services-heading-col {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
