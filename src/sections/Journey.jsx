import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const JOURNEY_PHASES = [
  {
    id: 'q1',
    phase: 'PHASE 01',
    timeframe: 'JAN – MAR 2026',
    codename: 'THE BREAKTHROUGH // ZERO-TO-ONE',
    headline: 'Curiosity to Shipping First AI Platforms',
    summary:
      'Started programming from zero in early 2026 driven by curiosity about how software and LLMs operate under the hood. Mastered modern React, TypeScript, and event-driven automation within weeks, shipping full-stack career intelligence and receipt-parsing OCR engines.',
    breakthrough:
      'Proved that intense daily focus and building real software beats years of passive tutorials. Deployed first Gemini multimodal production pipeline.',
    projects: [
      { name: 'AI Career Platform', tag: 'ATS Resume Engine', tech: 'React 19 · Gemini AI' },
      { name: 'WhatsApp Expense Tracker', tag: 'Multimodal OCR', tech: 'n8n · Twilio · Sheets' },
    ],
    skillsUnlocked: [
      'React & TypeScript Fundamentals',
      'Prompt Engineering & Structured JSON',
      'Event-Driven n8n Pipelines',
      'Cloud Webhooks & OCR Vision',
    ],
    velocityIndex: '35%',
    milestoneStat: '1st AI Platform Shipped',
  },
  {
    id: 'q2',
    phase: 'PHASE 02',
    timeframe: 'APR – JUN 2026',
    codename: 'LOGISTICS & CIVIC INFRASTRUCTURE',
    headline: 'Physical-to-Digital Operations & Smart Dispatch',
    summary:
      'Engineered real-world business dispatch systems. Built Packers CRM with multi-tier fleet allocation and cubic-feet volumetric quote calculators. Architected QR Resolution, allowing citizens and employees to scan physical asset QR codes for zero-barrier incident reporting.',
    breakthrough:
      'Bridged physical reality with digital workflows: QR-based zero-login state machines and vehicle fleet dispatch automation with sub-minute incident alerts.',
    projects: [
      { name: 'Packers CRM', tag: 'Fleet Dispatch Platform', tech: 'React 19 · Vite · Dispatch Logic' },
      { name: 'QR Resolution', tag: 'Civic Ticketing OS', tech: 'TypeScript · Firebase · Twilio' },
    ],
    skillsUnlocked: [
      'State-Machine Grievance Lifecycles',
      'Multi-Tier Fleet Routing Algorithms',
      'Zero-Login QR Geolocation Triage',
      'Real-time WhatsApp Webhooks',
    ],
    velocityIndex: '70%',
    milestoneStat: 'Sub-minute Grievance Triage',
  },
  {
    id: 'q3',
    phase: 'PHASE 03',
    timeframe: 'JUL – PRESENT 2026',
    codename: 'AUTONOMOUS MULTI-AGENT & FINTECH',
    headline: '14-Agent Autonomous Workforce & Integer-Paise Finance',
    summary:
      'Scaled to architecting multi-agent business operating systems. Built Namma Agency with 14 autonomous AI employees that research leads, audit digital presence, and build proposals. Built Namma Budget with integer-paise financial precision, loan prepayment simulators, and PWA push notifications.',
    breakthrough:
      'Eliminated manual agency bottlenecks through autonomous agent coordination and guaranteed zero data leakage using Supabase PostgreSQL Row-Level Security.',
    projects: [
      { name: 'Namma Agency', tag: 'Autonomous AI Agency OS', tech: 'Next.js 14 · Gemini 2.0 · Supabase' },
      { name: 'Namma Budget', tag: 'Production Fintech PWA', tech: 'Next.js 15 · Supabase RLS · PWA' },
      { name: 'Manai CRM', tag: 'Enterprise Real Estate', tech: 'Next.js SSR · RBAC · Firestore' },
    ],
    skillsUnlocked: [
      'Autonomous Multi-Agent Chaining',
      'Supabase PostgreSQL Row-Level Security',
      'Integer-Paise Financial Math Engine',
      'Next.js 15 App Router & PWA Web Push',
    ],
    velocityIndex: '100%',
    milestoneStat: '14 AI Agents · 8+ Production Platforms',
  },
];

export default function Journey() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(2); // Default to current flagship phase
  const activePhase = JOURNEY_PHASES[activePhaseIndex];

  return (
    <section
      id="journey"
      aria-label="2026 Trajectory & Engineering Journey"
      style={{
        padding: '100px 0',
        background: '#040508',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Background ambient red glow & cyber grid elements */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '70vw',
          height: '450px',
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(225,6,0,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(80px)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ marginBottom: 48, textAlign: 'center' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '4px 14px',
              background: 'rgba(225,6,0,0.08)',
              border: '1px solid rgba(225,6,0,0.3)',
              borderRadius: 20,
              marginBottom: 16,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#E10600',
                boxShadow: '0 0 8px #E10600',
              }}
            />
            <span
              style={{
                fontFamily: "'Space Grotesk', monospace",
                fontSize: 10.5,
                color: '#FFFFFF',
                letterSpacing: '0.14em',
                fontWeight: 700,
              }}
            >
              2026 TRAJECTORY // DAY 0 TO ENTERPRISE SHIPPING
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(28px, 3.8vw, 52px)',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              margin: '0 auto 12px auto',
              maxWidth: 720,
              lineHeight: 1.1,
            }}
          >
            FROM DAY ZERO TO <span style={{ color: '#E10600' }}>SHIPPING AT SCALE</span>
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              color: 'rgba(255,255,255,0.65)',
              maxWidth: 620,
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Started building in 2026. Rather than spending years in passive theory, I committed to
            extreme shipping velocity — building real systems for real operations in months.
          </p>
        </div>

        {/* ─── UNIQUE HORIZONTAL INTERACTIVE CYBER WARP RAIL ─── */}
        <div
          style={{
            position: 'relative',
            maxWidth: 920,
            margin: '0 auto 40px auto',
            padding: '0 16px',
          }}
        >
          {/* Background Connecting Glowing Track */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 26,
              left: 40,
              right: 40,
              height: 2,
              background: 'rgba(255,255,255,0.1)',
              zIndex: 0,
            }}
          >
            <motion.div
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #E10600, #FF2E2E)',
                boxShadow: '0 0 12px #E10600',
              }}
              animate={{
                width:
                  activePhaseIndex === 0
                    ? '0%'
                    : activePhaseIndex === 1
                    ? '50%'
                    : '100%',
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          </div>

          {/* 3 Interactive Warp Stations */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 16,
              position: 'relative',
              zIndex: 1,
            }}
          >
            {JOURNEY_PHASES.map((p, idx) => {
              const isActive = activePhaseIndex === idx;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePhaseIndex(idx)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 0,
                    outline: 'none',
                  }}
                >
                  {/* Orbit Node Circle */}
                  <motion.div
                    animate={{
                      scale: isActive ? 1.25 : 1,
                      borderColor: isActive ? '#E10600' : 'rgba(255,255,255,0.2)',
                      backgroundColor: isActive ? '#E10600' : '#080A10',
                      boxShadow: isActive
                        ? '0 0 24px rgba(225,6,0,0.9), 0 0 40px rgba(225,6,0,0.4)'
                        : 'none',
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: '50%',
                      border: '2px solid rgba(255,255,255,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 12,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', monospace",
                        fontSize: 13,
                        fontWeight: 800,
                        color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.6)',
                      }}
                    >
                      0{idx + 1}
                    </span>
                  </motion.div>

                  {/* Station Label */}
                  <div style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', monospace",
                        fontSize: 11,
                        fontWeight: 700,
                        color: isActive ? '#E10600' : 'rgba(255,255,255,0.45)',
                        letterSpacing: '0.08em',
                        marginBottom: 3,
                      }}
                    >
                      {p.timeframe}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 12.5,
                        fontWeight: 700,
                        color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.6)',
                      }}
                    >
                      {p.codename.split(' // ')[0]}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ─── DYNAMIC BENTO MISSION DECK (ACTIVE PHASE DEEP-DIVE) ─── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            style={{
              maxWidth: 960,
              margin: '0 auto',
              background: '#07090F',
              border: '1px solid rgba(225, 6, 0, 0.35)',
              borderRadius: 18,
              padding: 'clamp(24px, 3.5vw, 40px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 0 35px rgba(225,6,0,0.1)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top Phase Header Bar */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 12,
                paddingBottom: 20,
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                marginBottom: 24,
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: "'Space Grotesk', monospace",
                    fontSize: 11,
                    color: '#E10600',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                  }}
                >
                  {activePhase.phase} // {activePhase.timeframe}
                </span>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 'clamp(22px, 2.2vw, 32px)',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    margin: '6px 0 0 0',
                  }}
                >
                  {activePhase.headline}
                </h3>
              </div>

              {/* Milestone Badge */}
              <div
                style={{
                  padding: '6px 14px',
                  background: 'rgba(0, 255, 136, 0.08)',
                  border: '1px solid rgba(0, 255, 136, 0.3)',
                  borderRadius: 20,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: '#00FF88',
                    boxShadow: '0 0 8px #00FF88',
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Space Grotesk', monospace",
                    fontSize: 11,
                    color: '#00FF88',
                    fontWeight: 700,
                  }}
                >
                  {activePhase.milestoneStat}
                </span>
              </div>
            </div>

            {/* Bento Grid: Story & Projects */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 28,
              }}
            >
              {/* Left Column: Narrative & Breakthrough */}
              <div>
                <div style={{ marginBottom: 20 }}>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', monospace",
                      fontSize: 10,
                      color: 'rgba(255,255,255,0.4)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    PHASE NARRATIVE
                  </span>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.78)',
                      lineHeight: 1.65,
                      marginTop: 6,
                    }}
                  >
                    {activePhase.summary}
                  </p>
                </div>

                {/* The Breakthrough Quote Box */}
                <div
                  style={{
                    padding: '16px 18px',
                    borderRadius: 10,
                    background: 'rgba(225,6,0,0.06)',
                    borderLeft: '3px solid #E10600',
                    borderTop: '1px solid rgba(225,6,0,0.15)',
                    borderRight: '1px solid rgba(225,6,0,0.15)',
                    borderBottom: '1px solid rgba(225,6,0,0.15)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', monospace",
                      fontSize: 9.5,
                      color: '#FF6B6B',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      marginBottom: 4,
                    }}
                  >
                    THE TURNING POINT
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 13,
                      color: '#FFFFFF',
                      lineHeight: 1.5,
                    }}
                  >
                    "{activePhase.breakthrough}"
                  </div>
                </div>
              </div>

              {/* Right Column: Codebases Shipped & Technical Arsenal */}
              <div>
                <div style={{ marginBottom: 20 }}>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', monospace",
                      fontSize: 10,
                      color: 'rgba(255,255,255,0.4)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    PRODUCTION CODEBASES SHIPPED
                  </span>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 10 }}>
                    {activePhase.projects.map((proj, pIdx) => (
                      <div
                        key={pIdx}
                        style={{
                          padding: '12px 16px',
                          background: 'rgba(255,255,255,0.02)',
                          border: '1px solid rgba(255,255,255,0.07)',
                          borderRadius: 8,
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          transition: 'border-color 0.2s ease, background 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(225,6,0,0.4)';
                          e.currentTarget.style.background = 'rgba(225,6,0,0.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                          e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                        }}
                      >
                        <div>
                          <div
                            style={{
                              fontFamily: "'Space Grotesk', sans-serif",
                              fontSize: 13.5,
                              fontWeight: 700,
                              color: '#FFFFFF',
                            }}
                          >
                            {proj.name}
                          </div>
                          <div
                            style={{
                              fontFamily: 'monospace',
                              fontSize: 10.5,
                              color: '#FF6B6B',
                              marginTop: 2,
                            }}
                          >
                            {proj.tech}
                          </div>
                        </div>

                        <span
                          style={{
                            padding: '3px 8px',
                            borderRadius: 4,
                            background: 'rgba(255,255,255,0.05)',
                            fontFamily: 'monospace',
                            fontSize: 10,
                            color: 'rgba(255,255,255,0.6)',
                          }}
                        >
                          {proj.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Arsenal Unlocked */}
                <div>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', monospace",
                      fontSize: 10,
                      color: 'rgba(255,255,255,0.4)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    CAPABILITIES UNLOCKED IN THIS PHASE
                  </span>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
                    {activePhase.skillsUnlocked.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          padding: '4px 10px',
                          background: 'rgba(225,6,0,0.08)',
                          border: '1px solid rgba(225,6,0,0.22)',
                          borderRadius: 6,
                          fontFamily: 'monospace',
                          fontSize: 11,
                          color: '#FFFFFF',
                        }}
                      >
                        ✓ {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Velocity Metric Bar */}
            <div
              style={{
                marginTop: 28,
                paddingTop: 18,
                borderTop: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 12,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span
                  style={{
                    fontFamily: "'Space Grotesk', monospace",
                    fontSize: 10,
                    color: 'rgba(255,255,255,0.5)',
                  }}
                >
                  2026 VELOCITY METER:
                </span>
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 13,
                    fontWeight: 800,
                    color: '#E10600',
                  }}
                >
                  {activePhase.velocityIndex} COMPOUNDED CAPACITY
                </span>
              </div>

              <div style={{ display: 'flex', gap: 8 }}>
                {JOURNEY_PHASES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePhaseIndex(i)}
                    style={{
                      width: activePhaseIndex === i ? 24 : 8,
                      height: 6,
                      borderRadius: 3,
                      background: activePhaseIndex === i ? '#E10600' : 'rgba(255,255,255,0.2)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
