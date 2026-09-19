import { motion } from 'framer-motion';

/**
 * SectionLabel — small eyebrow label shown above section headings.
 * Props:
 *   number: string (e.g. "01")
 *   text: string
 *   light: bool — if true, renders slightly brighter
 */
export default function SectionLabel({ number, text, className = '' }) {
  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {number && (
        <span
          className="label"
          style={{ color: 'var(--color-red)', fontFamily: 'var(--font-mono)' }}
        >
          {number}
        </span>
      )}
      <span className="label" style={{ color: 'var(--color-text-3)' }}>
        {text}
      </span>
    </motion.div>
  );
}
