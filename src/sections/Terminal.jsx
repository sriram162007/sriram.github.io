import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const COMMAND_MAP = {
  whoami: {
    cmd: 'whoami',
    output: [
      'SRI RAM // Software Builder & AI Solutions Engineer',
      'Location: Chennai, India (UTC +5:30)',
      'Focus: Autonomous AI Workflows, Scalable Web Apps, Enterprise CRMs',
      'Status: Available for High-Impact Roles & Custom Builds',
    ],
  },
  stack: {
    cmd: 'cat ~/.techstack',
    output: [
      'Frontend: React 19, Next.js, TypeScript, Tailwind CSS, Framer Motion',
      'Backend : Node.js, Express, Python, REST & Webhook architectures',
      'Data/Cloud: Firebase Suite, PostgreSQL, Supabase, Cloudflare Workers',
      'AI & Automations: Google Gemini Multimodal, n8n, LangChain, WhatsApp Cloud API',
    ],
  },
  projects: {
    cmd: 'git log --oneline -n 6',
    output: [
      'c91a02f [AGENT] Namma Agency — Autonomous AI workforce & proposal studio',
      'a7e28b1 [PWA] Namma Budget — Integer-paise personal finance & loan simulator',
      'f4a89c2 [PROD] Manai CRM — Real estate automation & pipeline management',
      'd5821c9 [FLEET] Packers CRM — Logistics smart dispatch & quotation engine',
      '8b21de4 [GEMINI] AI Career Platform — Resume intelligence & mock interview engine',
      '31cc2b5 [IOT] QR Resolution — Facility maintenance & real-time dispatch ticketing',
    ],
  },
  stats: {
    cmd: 'fetch-dev-metrics --summary',
    output: [
      'Repositories: 21+ public & client codebases',
      'Clean Code Rating: A+ (Strict linting & modern React conventions)',
      'Workflow Runs: 10,000+ automated executions via n8n pipelines',
      'Production Deployments: Vercel, Firebase & Cloudflare Pages',
    ],
  },
  contact: {
    cmd: 'curl -s https://sriram.dev/api/contact',
    output: [
      'Email    : ramxcreates@gmail.com',
      'LinkedIn : linkedin.com/in/sri-ram16',
      'Instagram: @ramxcreates',
      'GitHub   : github.com/sriram162007',
    ],
  },
};

const INITIAL_COMMANDS = ['whoami', 'stack', 'projects'];

export default function TerminalSection() {
  const [history, setHistory] = useState([
    {
      cmd: 'whoami',
      output: COMMAND_MAP.whoami.output,
    },
    {
      cmd: 'cat ~/.techstack',
      output: COMMAND_MAP.stack.output,
    },
  ]);
  const [copied, setCopied] = useState(false);
  const terminalEndRef = useRef(null);

  const executeCommand = (key) => {
    if (key === 'copy-email') {
      navigator.clipboard.writeText('ramxcreates@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
      setHistory((prev) => [
        ...prev,
        {
          cmd: 'pbcopy < email',
          output: ['✓ Copied ramxcreates@gmail.com to clipboard! Send me a message.'],
        },
      ]);
      return;
    }

    if (key === 'clear') {
      setHistory([]);
      return;
    }

    const commandData = COMMAND_MAP[key];
    if (commandData) {
      setHistory((prev) => [
        ...prev,
        {
          cmd: commandData.cmd,
          output: commandData.output,
        },
      ]);
    }
  };

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollTop = terminalEndRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <section
      id="terminal"
      className="section"
      aria-labelledby="terminal-heading"
      style={{
        background: 'var(--color-bg)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Heading */}
        <div style={{ marginBottom: 44 }}>
          <SectionLabel number="05" text="DEV TELEMETRY // SYSTEM TERMINAL" />
          <motion.h2
            id="terminal-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              color: 'var(--color-text-1)',
              margin: '12px 0 0 0',
            }}
          >
            BEHIND THE CODEBASE
          </motion.h2>
        </div>

        {/* 2-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.45fr) minmax(0, 1fr)',
            gap: 28,
            alignItems: 'stretch',
          }}
          className="terminal-dual-grid"
        >
          {/* Left Column: Interactive Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: '#070707',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: 12,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
            }}
          >
            {/* Window Chrome Header */}
            <div
              style={{
                padding: '12px 18px',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
                  <span
                    key={c}
                    aria-hidden="true"
                    style={{
                      width: 11,
                      height: 11,
                      borderRadius: '50%',
                      background: c,
                      display: 'inline-block',
                      boxShadow: `0 0 6px ${c}40`,
                    }}
                  />
                ))}
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 12,
                    color: 'var(--color-text-3)',
                    marginLeft: 12,
                    letterSpacing: '0.02em',
                  }}
                >
                  sriram@hyperion: ~/portfolio (zsh)
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: '#28CA41',
                    display: 'inline-block',
                    animation: 'pulse 2s infinite',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: '#28CA41',
                  }}
                >
                  ONLINE
                </span>
              </div>
            </div>

            {/* Terminal Body */}
            <div
              ref={terminalEndRef}
              style={{
                padding: '24px 20px',
                fontFamily: 'var(--font-mono)',
                fontSize: 12.5,
                lineHeight: 1.75,
                flex: 1,
                minHeight: 290,
                maxHeight: 380,
                overflowY: 'auto',
                background: '#040404',
              }}
              className="terminal-scroll-area"
              aria-live="polite"
            >
              <div style={{ color: 'var(--color-text-3)', marginBottom: 16 }}>
                Last login: {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} from 127.0.0.1 on ttys001
              </div>

              {history.map((entry, idx) => (
                <div key={idx} style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--color-text-2)' }}>
                    <span style={{ color: 'var(--color-red)', fontWeight: 700 }}>❯</span>
                    <span style={{ color: '#FFFFFF', fontWeight: 600 }}>{entry.cmd}</span>
                  </div>
                  <div style={{ marginTop: 4, paddingLeft: 18 }}>
                    {entry.output.map((line, lIdx) => (
                      <div
                        key={lIdx}
                        style={{
                          color: line.startsWith('✓') ? '#28CA41' : 'var(--color-text-2)',
                          fontWeight: line.startsWith('✓') ? 600 : 400,
                        }}
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Live Cursor Prompt */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ color: 'var(--color-red)', fontWeight: 700 }}>❯</span>
                <span
                  style={{
                    display: 'inline-block',
                    width: 8,
                    height: 15,
                    background: 'var(--color-red)',
                    verticalAlign: 'middle',
                    animation: 'cursor-blink 1.06s infinite',
                  }}
                />
              </div>
            </div>

            {/* Quick Command Bar */}
            <div
              style={{
                padding: '12px 18px',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(255,255,255,0.02)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: 'var(--color-text-3)',
                  marginRight: 4,
                }}
              >
                QUICK EXECUTE:
              </span>

              {[
                { label: 'whoami', key: 'whoami' },
                { label: 'stack', key: 'stack' },
                { label: 'projects', key: 'projects' },
                { label: 'stats', key: 'stats' },
                { label: copied ? 'Copied ✓' : 'copy-email', key: 'copy-email' },
                { label: 'clear', key: 'clear' },
              ].map((btn) => (
                <button
                  key={btn.key}
                  onClick={() => executeCommand(btn.key)}
                  style={{
                    background: btn.key === 'copy-email' && copied ? 'rgba(40,202,65,0.15)' : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${btn.key === 'copy-email' && copied ? '#28CA41' : 'rgba(255,255,255,0.1)'}`,
                    color: btn.key === 'copy-email' && copied ? '#28CA41' : 'var(--color-text-2)',
                    padding: '4px 10px',
                    borderRadius: 4,
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  className="terminal-quick-btn"
                >
                  ${btn.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Live Dev Telemetry & Architecture Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              background: '#090909',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 12,
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top red glow accent */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 140,
                height: 140,
                background: 'radial-gradient(circle, rgba(225,6,0,0.12) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
              aria-hidden="true"
            />

            <div>
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.1em',
                    color: 'var(--color-red)',
                    fontWeight: 700,
                  }}
                >
                  DEV TELEMETRY // STATS
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    color: 'var(--color-text-3)',
                    background: 'rgba(255,255,255,0.04)',
                    padding: '2px 8px',
                    borderRadius: 4,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  HOST: VERCEL EDGE
                </span>
              </div>

              {/* Big Stat Row */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 16,
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 8,
                    padding: '16px 18px',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 28,
                      fontWeight: 700,
                      color: 'var(--color-text-1)',
                      lineHeight: 1,
                    }}
                  >
                    99.9%
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color: 'var(--color-text-3)',
                      marginTop: 6,
                    }}
                  >
                    SYSTEM RELIABILITY
                  </div>
                </div>

                <div
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 8,
                    padding: '16px 18px',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 28,
                      fontWeight: 700,
                      color: 'var(--color-red)',
                      lineHeight: 1,
                    }}
                  >
                    10K+
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color: 'var(--color-text-3)',
                      marginTop: 6,
                    }}
                  >
                    AUTOMATION RUNS
                  </div>
                </div>
              </div>

              {/* Progress & Spec Bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { label: 'ARCHITECTURE MODULARITY', value: '98%', width: '98%' },
                  { label: 'API RESPONSE LATENCY', value: '< 140ms', width: '92%' },
                  { label: 'LIGHTHOUSE PERFORMANCE', value: '96/100', width: '96%' },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontFamily: 'var(--font-mono)',
                        fontSize: 11,
                        marginBottom: 6,
                      }}
                    >
                      <span style={{ color: 'var(--color-text-3)' }}>{item.label}</span>
                      <span style={{ color: 'var(--color-text-1)', fontWeight: 600 }}>{item.value}</span>
                    </div>
                    <div
                      style={{
                        height: 4,
                        background: 'rgba(255,255,255,0.06)',
                        borderRadius: 2,
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          width: item.width,
                          background: 'linear-gradient(90deg, var(--color-red), #FF4D4D)',
                          borderRadius: 2,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Status Footer */}
            <div
              style={{
                marginTop: 24,
                padding: '14px 16px',
                background: 'rgba(225,6,0,0.04)',
                border: '1px solid rgba(225,6,0,0.15)',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: 'var(--color-red)',
                  boxShadow: '0 0 10px var(--color-red)',
                }}
              />
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-text-2)' }}>
                Production-ready code. Clean commits, zero bloat, typed contracts.
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .terminal-quick-btn:hover {
          background: rgba(225,6,0,0.15) !important;
          border-color: var(--color-red) !important;
          color: #FFFFFF !important;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.9); }
        }
        @keyframes cursor-blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @media (max-width: 900px) {
          .terminal-dual-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
