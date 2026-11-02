import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_NUMBER = '919025983791'; // Sri Ram's verified contact

const QUICK_INQUIRIES = [
  {
    title: 'Autonomous AI Pipeline',
    desc: 'Agency OS, Gemini integration, n8n workflows',
    message: "Hey Sri Ram, I'm interested in architecting an Autonomous AI Pipeline / Agency system for my business.",
  },
  {
    title: 'Full-Stack Web Platform',
    desc: 'Next.js 15, React 19, Supabase RLS, Fintech PWA',
    message: "Hey Sri Ram, let's discuss building a production Full-Stack Web Platform.",
  },
  {
    title: 'Tech Role or Consultation',
    desc: 'Enterprise engineering & advisory',
    message: 'Hey Sri Ram, exploring engineering roles and consulting opportunities with you.',
  },
];

export default function WhatsAppDock() {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = (msg) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 9000,
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              bottom: 60,
              right: 0,
              width: 320,
              background: '#07090F',
              border: '1px solid rgba(225, 6, 0, 0.4)',
              borderRadius: 14,
              boxShadow: '0 16px 40px rgba(0,0,0,0.85), 0 0 30px rgba(225,6,0,0.15)',
              overflow: 'hidden',
              backdropFilter: 'blur(16px)',
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: '14px 16px',
                background: 'rgba(255,255,255,0.03)',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#00FF88',
                    boxShadow: '0 0 8px #00FF88',
                  }}
                />
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: '#FFFFFF',
                    letterSpacing: '0.04em',
                  }}
                >
                  DIRECT WHATSAPP DISPATCH
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255,255,255,0.5)',
                  cursor: 'pointer',
                  fontSize: 14,
                }}
              >
                ✕
              </button>
            </div>

            {/* Quick Templates List */}
            <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {QUICK_INQUIRIES.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => openWhatsApp(item.message)}
                  style={{
                    padding: '10px 12px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 8,
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(225,6,0,0.1)';
                    e.currentTarget.style.borderColor = 'rgba(225,6,0,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span>{item.title}</span>
                    <span style={{ color: '#25D366', fontSize: 13 }}>💬</span>
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 10.5,
                      color: 'rgba(255,255,255,0.55)',
                      marginTop: 3,
                    }}
                  >
                    {item.desc}
                  </div>
                </button>
              ))}

              {/* Direct In-page Jump */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  padding: '8px',
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255,255,255,0.45)',
                  fontSize: 10.5,
                  cursor: 'pointer',
                  textAlign: 'center',
                  textDecoration: 'underline',
                  marginTop: 4,
                }}
              >
                Or submit full project brief on Contact section →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Pill */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '10px 18px',
          background: '#080A10',
          border: '1px solid rgba(225, 6, 0, 0.5)',
          borderRadius: 30,
          color: '#FFFFFF',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(0,0,0,0.7), 0 0 16px rgba(225,6,0,0.3)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: '#25D366',
            boxShadow: '0 0 10px #25D366',
          }}
        />
        <span
          style={{
            fontSize: 11.5,
            fontWeight: 700,
            letterSpacing: '0.06em',
          }}
        >
          QUICK CHAT / WHATSAPP
        </span>
      </motion.button>
    </div>
  );
}
