import { motion } from 'framer-motion';

export default function SectionHeader({ badge, title, subtitle, badgeIcon: BadgeIcon, headingId }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-6"
        >
          {BadgeIcon && <BadgeIcon className="h-3.5 w-3.5" aria-hidden="true" />}
          {badge}
        </motion.span>
      )}
      {title && (
        <motion.h2
          id={headingId}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary mb-6"
        >
          {title}
        </motion.h2>
      )}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto text-lg leading-relaxed text-text-secondary"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
