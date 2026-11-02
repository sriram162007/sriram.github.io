import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function ProjectFilter({ categories, activeFilter, onSelect, getCount }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div
      role="tablist"
      aria-label="Filter projects by domain"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        alignItems: 'center',
        marginBottom: 40,
        padding: '6px',
        background: 'rgba(255,255,255,0.025)',
        borderRadius: 10,
        border: '1px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(10px)',
        width: 'fit-content',
      }}
    >
      {categories.map((cat) => {
        const isActive = activeFilter === cat.id;
        const isHovered = hoveredId === cat.id;
        const count = getCount(cat.id);

        return (
          <button
            key={cat.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(cat.id)}
            onMouseEnter={() => setHoveredId(cat.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              padding: '8px 16px',
              borderRadius: 7,
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.05em',
              background: isActive
                ? 'rgba(225,6,0,0.14)'
                : isHovered
                  ? 'rgba(255,255,255,0.05)'
                  : 'transparent',
              color: isActive ? '#FFFFFF' : isHovered ? 'var(--color-text-1)' : 'var(--color-text-2)',
              border: isActive
                ? '1px solid rgba(225,6,0,0.5)'
                : '1px solid transparent',
              transition: 'all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1)',
              cursor: 'pointer',
              boxShadow: isActive ? '0 0 16px rgba(225,6,0,0.15), inset 0 1px 0 rgba(255,255,255,0.06)' : 'none',
              transform: isActive ? 'scale(1.02)' : isHovered ? 'scale(1.01)' : 'scale(1)',
              whiteSpace: 'nowrap',
            }}
          >
            {isActive && (
              <motion.span
                layoutId="activeFilterDot"
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  background: 'var(--color-red)',
                  display: 'inline-block',
                  boxShadow: '0 0 8px rgba(225,6,0,0.8)',
                  flexShrink: 0,
                }}
              />
            )}
            <span>{cat.label}</span>
            <motion.span
              animate={{
                color: isActive ? '#E10600' : '#444',
                scale: isActive ? 1.05 : 1,
              }}
              transition={{ duration: 0.18 }}
              style={{
                fontSize: 10,
                fontFamily: 'var(--font-mono)',
              }}
            >
              [{count < 10 ? `0${count}` : count}]
            </motion.span>
          </button>
        );
      })}
    </div>
  );
}
