import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Fast high-speed progress sequence (1.1s total)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            if (onFinish) onFinish();
          }, 250);
          return 100;
        }
        // Accelerating curve
        const step = Math.max(3, Math.floor(Math.random() * 12) + (prev > 70 ? 10 : 5));
        return Math.min(100, prev + step);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            background: '#040404',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            userSelect: 'none',
            overflow: 'hidden',
          }}
        >
          {/* Subtle background red radial glow */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              width: 380,
              height: 380,
              background: 'radial-gradient(circle, rgba(225,6,0,0.18) 0%, transparent 70%)',
              filter: 'blur(60px)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              zIndex: 1,
              width: '85%',
              maxWidth: 360,
            }}
          >
            {/* Title / Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 24,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 26,
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '0.04em',
                }}
              >
                SRI RAM
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.1em',
                  padding: '2px 7px',
                  borderRadius: 4,
                  background: 'rgba(225,6,0,0.15)',
                  color: 'var(--color-red)',
                  border: '1px solid rgba(225,6,0,0.3)',
                  fontWeight: 700,
                }}
              >
                v2.5
              </span>
            </motion.div>

            {/* Progress bar container */}
            <div
              style={{
                width: '100%',
                height: 3,
                background: 'rgba(255,255,255,0.08)',
                borderRadius: 2,
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, var(--color-red), #FF4D4D)',
                  boxShadow: '0 0 12px rgba(225,6,0,0.8)',
                  transition: 'width 0.08s ease',
                  borderRadius: 2,
                }}
              />
            </div>

            {/* Bottom Meta & % */}
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 14,
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--color-text-3)',
              }}
            >
              <span style={{ letterSpacing: '0.08em' }}>INITIALIZING ENVIRONMENT...</span>
              <span style={{ color: '#FFFFFF', fontWeight: 600 }}>{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
