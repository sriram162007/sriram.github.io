import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WORKFLOW_EXAMPLES = [
  {
    id: 'namma-agency',
    name: 'AI Agency Operations',
    tagline: 'Namma Agency Platform',
    steps: [
      {
        number: '01',
        title: 'CLIENT ENQUIRY & INTAKE',
        shortDesc: 'A client submits their business problem or requirements.',
        detail:
          'Instead of manual discovery calls, the client enters their core friction points, required tech stack, and budget preferences in seconds.',
        tech: ['Next.js 14', 'Zero-Friction Forms', 'Zod Validation'],
        pill: 'STEP 1: INTAKE',
        icon: '📥',
      },
      {
        number: '02',
        title: 'GEMINI AI REASONING',
        shortDesc: 'AI analyzes the problem and calculates transparent costs.',
        detail:
          'Google Gemini AI chains with a custom pricing engine to structure one-time development costs, server infrastructure expenses, and generate persuasive proposal copy with zero hallucination.',
        tech: ['Google Gemini 2.0 AI', 'Deterministic Pricing Engine', '14 AI Specialists'],
        pill: 'STEP 2: INTELLIGENCE',
        icon: '🧠',
      },
      {
        number: '03',
        title: 'INSTANT CONTRACT & WORKSPACE',
        shortDesc: 'One-click client acceptance triggers live contracts and tasks.',
        detail:
          'When the client approves the proposal, the system automatically creates the Master Service Agreement (MSA), provisions their Supabase workspace, and notifies the team.',
        tech: ['Supabase PostgreSQL', 'Automated MSA Generator', 'Live Client Portal'],
        pill: 'STEP 3: AUTOMATION',
        icon: '🚀',
      },
    ],
  },
  {
    id: 'qr-resolution',
    name: 'Smart Incident Dispatch',
    tagline: 'QR Resolution Platform',
    steps: [
      {
        number: '01',
        title: 'PHYSICAL ASSET QR SCAN',
        shortDesc: 'A citizen or worker scans a QR code on any equipment or room.',
        detail:
          'Zero app downloads or logins required. The camera opens instantly, tags the exact physical asset ID, and captures geolocated grievance details.',
        tech: ['Physical QR Encoding', 'Zero-Login Flow', 'Geolocation Sensors'],
        pill: 'STEP 1: SCAN',
        icon: '📱',
      },
      {
        number: '02',
        title: 'AUTOMATED SEVERITY TRIAGE',
        shortDesc: 'System classifies priority and determines urgency.',
        detail:
          'State-machine algorithms verify the asset category (e.g. Electrical, Plumbing, HVAC), check past maintenance history, and select the nearest active technician.',
        tech: ['State-Machine Engine', 'Technician Routing', 'SLA Monitoring'],
        pill: 'STEP 2: TRIAGE',
        icon: '⚡',
      },
      {
        number: '03',
        title: 'WHATSAPP ALERTS & DISPATCH',
        shortDesc: 'Technicians receive instant WhatsApp alerts with live resolution tracking.',
        detail:
          'Technician gets a WhatsApp notification with the exact location and issue description. The reporter receives live status updates as the ticket progresses to resolved.',
        tech: ['Twilio WhatsApp API', 'Admin Console', 'Real-Time Sync'],
        pill: 'STEP 3: RESOLUTION',
        icon: '✅',
      },
    ],
  },
  {
    id: 'namma-budget',
    name: 'Personal Finance & Allowance',
    tagline: 'Namma Budget Platform',
    steps: [
      {
        number: '01',
        title: 'MULTI-STREAM CASH INTAKE',
        shortDesc: 'Sync liquid bank cash, upcoming EMIs, and irregular incomes.',
        detail:
          'Reconciles actual liquid cash in hand against fixed monthly commitments (rent, utilities, loan EMIs) rather than flawed monthly averages.',
        tech: ['Next.js 15 App Router', 'Integer-Paise Precision', 'Income Classification'],
        pill: 'STEP 1: CASHFLOW',
        icon: '💳',
      },
      {
        number: '02',
        title: 'TODAY’S MONEY ALGORITHM',
        shortDesc: 'Dynamically computes a safe daily spending limit.',
        detail:
          'Protects emergency buffers and amortizes student loan prepayments by computing the exact amount safe to spend today without risking future obligations.',
        tech: ['Loan Prepayment Math', 'Emergency Buffer Engine', 'Supabase RLS'],
        pill: 'STEP 2: ALGORITHM',
        icon: '📊',
      },
      {
        number: '03',
        title: 'PWA MORNING PUSH NOTIFICATIONS',
        shortDesc: 'Morning allowance alerts and advance auto-debit reminders.',
        detail:
          'Progressive Web App schedules daily 8:00 AM push alerts showing today’s spending room and sends 3-day advance alerts before any loan EMI auto-debit occurs.',
        tech: ['Web Push Notifications', 'PWA Offline Storage', 'Zero Firebase Tracking'],
        pill: 'STEP 3: ALERTS',
        icon: '🔔',
      },
    ],
  },
];

export default function ArchitecturePlayground() {
  const [selectedWorkflowId, setSelectedWorkflowId] = useState('namma-agency');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const currentWorkflow =
    WORKFLOW_EXAMPLES.find((w) => w.id === selectedWorkflowId) || WORKFLOW_EXAMPLES[0];
  const activeStep = currentWorkflow.steps[activeStepIndex];

  return (
    <section
      id="architecture"
      aria-label="How I Architect Systems"
      style={{
        padding: '90px 0',
        background: '#040508',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Background ambient red glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '30%',
          right: '-5%',
          width: 450,
          height: 450,
          background: 'radial-gradient(circle, rgba(225,6,0,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header — Simple & Direct */}
        <div style={{ marginBottom: 40, textAlign: 'center' }}>
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
              SIMPLE 3-STEP SYSTEM BLUEPRINT
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(28px, 3.8vw, 48px)',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              margin: '0 auto 12px auto',
              lineHeight: 1.15,
            }}
          >
            HOW MY SYSTEMS <span style={{ color: '#E10600' }}>ACTUALLY WORK</span>
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14.5,
              color: 'rgba(255,255,255,0.68)',
              maxWidth: 620,
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Every software product I build turns complex business operations into a simple, automated 3-step loop:
            Listen ➔ Reason ➔ Instant Action.
          </p>
        </div>

        {/* Real Example Workflow Selector Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 10,
            marginBottom: 36,
            flexWrap: 'wrap',
          }}
        >
          {WORKFLOW_EXAMPLES.map((wf) => {
            const isSelected = wf.id === selectedWorkflowId;
            return (
              <button
                key={wf.id}
                onClick={() => {
                  setSelectedWorkflowId(wf.id);
                  setActiveStepIndex(0);
                }}
                style={{
                  padding: '8px 18px',
                  background: isSelected ? 'rgba(225,6,0,0.15)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${isSelected ? '#E10600' : 'rgba(255,255,255,0.1)'}`,
                  borderRadius: 24,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 0 16px rgba(225,6,0,0.3)' : 'none',
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: isSelected ? '#E10600' : 'rgba(255,255,255,0.3)',
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    color: isSelected ? '#FFFFFF' : 'rgba(255,255,255,0.65)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {wf.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── 3-STEP INTERACTIVE CARDS ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
            maxWidth: 1000,
            margin: '0 auto 32px auto',
          }}
        >
          {currentWorkflow.steps.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStepIndex(idx)}
                style={{
                  padding: '24px 22px',
                  background: isActive ? 'rgba(225,6,0,0.08)' : 'rgba(12,14,20,0.7)',
                  border: `1.5px solid ${isActive ? '#E10600' : 'rgba(255,255,255,0.08)'}`,
                  borderRadius: 14,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isActive ? '0 0 24px rgba(225,6,0,0.25)' : 'none',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  {/* Top Step Number & Icon */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: 14,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', monospace",
                        fontSize: 11,
                        fontWeight: 800,
                        color: isActive ? '#FF3B30' : 'rgba(255,255,255,0.4)',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {step.pill}
                    </span>
                    <span style={{ fontSize: 22 }}>{step.icon}</span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 17,
                      fontWeight: 800,
                      color: '#FFFFFF',
                      marginBottom: 8,
                      lineHeight: 1.25,
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 13,
                      color: 'rgba(255,255,255,0.7)',
                      lineHeight: 1.55,
                      margin: '0 0 16px 0',
                    }}
                  >
                    {step.shortDesc}
                  </p>
                </div>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {step.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        padding: '3px 8px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: 4,
                        fontFamily: 'monospace',
                        fontSize: 10,
                        color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.5)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── STEP DEEP-DIVE SPOTLIGHT (Expanded View of Active Step) ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentWorkflow.id}-${activeStepIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            style={{
              maxWidth: 1000,
              margin: '0 auto',
              background: '#07090F',
              border: '1px solid rgba(225,6,0,0.3)',
              borderRadius: 14,
              padding: '24px 28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 24,
              flexWrap: 'wrap',
              boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
            }}
          >
            <div style={{ flex: 1, minWidth: 260 }}>
              <div
                style={{
                  fontFamily: "'Space Grotesk', monospace",
                  fontSize: 10.5,
                  color: '#E10600',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  marginBottom: 6,
                }}
              >
                REAL-WORLD EXECUTION // {currentWorkflow.tagline}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  color: '#FFFFFF',
                  lineHeight: 1.6,
                }}
              >
                {activeStep.detail}
              </div>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 16px',
                background: 'rgba(0, 255, 136, 0.06)',
                border: '1px solid rgba(0, 255, 136, 0.25)',
                borderRadius: 20,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
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
                Zero Manual Data Entry
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
