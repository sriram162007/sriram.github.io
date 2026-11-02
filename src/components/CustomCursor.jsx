import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  // Raw Motion Values for instant responsiveness
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Organic spring physics for the trailing magnetic outer ring
  const ringX = useSpring(rawX, { stiffness: 420, damping: 28, mass: 0.15 });
  const ringY = useSpring(rawY, { stiffness: 420, damping: 28, mass: 0.15 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      const isInteractive =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        target.closest('.project-card') ||
        target.closest('.service-row') ||
        target.closest('.skill-card') ||
        target.closest('.interactive-node');

      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [rawX, rawY]);

  if (!isVisible) return null;

  const ringSize = isMouseDown ? 18 : isHovered ? 48 : 28;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 999999,
        overflow: 'hidden',
      }}
    >
      {/* 1. Trailing Outer Magnetic Ring (follows with smooth spring physics) */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: ringX,
          y: ringY,
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            transform: 'translate(-50%, -50%)',
            width: ringSize,
            height: ringSize,
            borderRadius: '50%',
            border: `1.5px solid ${
              isMouseDown
                ? '#FF2E2E'
                : isHovered
                ? '#E10600'
                : 'rgba(255, 255, 255, 0.35)'
            }`,
            backgroundColor: isMouseDown
              ? 'rgba(225, 6, 0, 0.35)'
              : isHovered
              ? 'rgba(225, 6, 0, 0.12)'
              : 'transparent',
            boxShadow: isMouseDown
              ? '0 0 24px rgba(225, 6, 0, 0.9), inset 0 0 8px rgba(255, 46, 46, 0.6)'
              : isHovered
              ? '0 0 20px rgba(225, 6, 0, 0.45)'
              : 'none',
            transition:
              'width 0.18s cubic-bezier(0.25, 1, 0.5, 1), height 0.18s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease',
          }}
        />
      </motion.div>

      {/* 2. Direct Precise Center Dot (locked directly to mouse tip with zero latency) */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: rawX,
          y: rawY,
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            transform: 'translate(-50%, -50%)',
            width: isMouseDown ? 6 : isHovered ? 4 : 5,
            height: isMouseDown ? 6 : isHovered ? 4 : 5,
            borderRadius: '50%',
            backgroundColor: isMouseDown ? '#FFFFFF' : '#FF2E2E',
            boxShadow: '0 0 10px #FF2E2E, 0 0 4px #FFFFFF',
            transition: 'width 0.12s ease, height 0.12s ease, background-color 0.12s ease',
          }}
        />
      </motion.div>
    </div>
  );
}
