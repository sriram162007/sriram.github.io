import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const COMMANDS = [
  { cmd: '> whoami', output: 'SRI RAM' },
  { cmd: '> focus', output: 'AI AUTOMATION\nBUSINESS SYSTEMS\nSOFTWARE DEVELOPMENT' },
  { cmd: '> currently_building', output: 'REAL WORLD SOFTWARE' },
  { cmd: '> status', output: 'BUILDING EVERY DAY_' },
];

/* Types characters one-by-one */
function useTyping(lines, active) {
  const [typed, setTyped] = useState([]);
  const indexRef = useRef(0);
  const charRef = useRef(0);

  useEffect(() => {
    if (!active) return;

    setTyped([]);
    indexRef.current = 0;
    charRef.current = 0;

    let timeout;

    function typeNext() {
      const line = COMMANDS[indexRef.current];
      if (!line) return;

      const full = line.cmd;
      if (charRef.current <= full.length) {
        setTyped((prev) => {
          const next = [...prev];
          next[indexRef.current * 2] = full.slice(0, charRef.current);
          return next;
        });
        charRef.current++;
        timeout = setTimeout(typeNext, 45);
      } else {
        // Show output after command is fully typed
        timeout = setTimeout(() => {
          setTyped((prev) => {
            const next = [...prev];
            next[indexRef.current * 2 + 1] = line.output;
            return next;
          });
          // Move to next command after a pause
          timeout = setTimeout(() => {
            indexRef.current++;
            charRef.current = 0;
            typeNext();
          }, 500);
        }, 200);
      }
    }

    timeout = setTimeout(typeNext, 400);
    return () => clearTimeout(timeout);
  }, [active]);

  return typed;
}

function Terminal() {
  const [active, setActive] = useState(false);
  const ref = useRef(null);
  const typed = useTyping(COMMANDS, active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      style={{
        background: 'var(--color-bg-3)',
        border: '1px solid var(--color-border)',
        borderRadius: 4,
        overflow: 'hidden',
        maxWidth: 560,
        margin: '0 auto',
      }}
      role="region"
      aria-label="Developer terminal showcase"
    >
      {/* Window chrome */}
      <div
        style={{
          padding: '12px 16px',
          borderBottom: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: 'var(--color-bg-4)',
        }}
      >
        {['#FF5F57', '#FFBD2E', '#28CA41'].map((c) => (
          <div
            key={c}
            aria-hidden="true"
            style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.7 }}
          />
        ))}
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--color-text-3)',
            marginLeft: 8,
          }}
        >
          terminal — sriram
        </span>
      </div>

      {/* Terminal body */}
      <div
        style={{
          padding: '24px 20px',
          fontFamily: 'var(--font-mono)',
          fontSize: 13,
          lineHeight: 1.8,
          minHeight: 220,
        }}
        aria-live="polite"
        aria-atomic="false"
      >
        {COMMANDS.map((_, i) => {
          const cmdText = typed[i * 2];
          const outputText = typed[i * 2 + 1];
          const isCurrent = typed.length > 0 && i === Math.floor(typed.filter(Boolean).length / 2);

          return (
            <div key={i}>
              {cmdText !== undefined && (
                <div style={{ color: 'var(--color-text-2)' }}>
                  {cmdText}
                  {!outputText && isCurrent && (
                    <span
                      className="cursor-blink"
                      aria-hidden="true"
                      style={{ color: 'var(--color-red)', marginLeft: 1 }}
                    >
                      █
                    </span>
                  )}
                </div>
              )}
              {outputText !== undefined && (
                <div style={{ color: 'var(--color-text-1)', marginBottom: 16 }}>
                  {outputText.split('\n').map((line, li) => (
                    <div
                      key={li}
                      style={{
                        paddingLeft: 16,
                        color: i === COMMANDS.length - 1 ? 'var(--color-red)' : 'var(--color-text-1)',
                        fontWeight: 500,
                      }}
                    >
                      {line}
                      {i === COMMANDS.length - 1 && li === 0 && (
                        <span className="cursor-blink" aria-hidden="true" style={{ marginLeft: 1 }}>
                          █
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function TerminalSection() {
  return (
    <section
      id="terminal"
      className="section"
      style={{ background: 'var(--color-bg)', paddingTop: 80, paddingBottom: 80 }}
    >
      <div className="container">
        <SectionLabel text="DEVELOPER OVERVIEW" />
        <Terminal />
      </div>
    </section>
  );
}
