import { useCallback, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/* ─── Tech Stack Items (Text-Only) ─── */
const TECH_LIST = [
  'React',
  'JavaScript',
  'Python',
  'Node.js',
  'Firebase',
  'Gemini',
  'n8n',
  'Twilio',
  'Git',
];

/* ─── Film Grain Texture ─── */
function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 20,
        opacity: 0.022,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '160px 160px',
        mixBlendMode: 'overlay',
      }}
    />
  );
}

/* ─── Cursive Signature ─── */
function Signature() {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      <span
        style={{
          fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
          fontSize: 'clamp(38px, 3.2vw, 54px)',
          color: '#FFFFFF',
          fontWeight: 700,
          letterSpacing: '0.01em',
          lineHeight: 1,
          textShadow: '0 2px 20px rgba(0,0,0,0.9), 0 0 14px rgba(225,6,0,0.4)',
        }}
      >
        Sri Ram
      </span>
      <div
        style={{
          height: 2.5,
          width: 85,
          background: 'linear-gradient(90deg, transparent 0%, #E10600 30%, #FF1E1E 100%)',
          marginTop: 4,
          borderRadius: 2,
          boxShadow: '0 0 8px rgba(225,6,0,0.7)',
        }}
      />
    </div>
  );
}

/* ─── Center Silhouette with Parallax Tilt ─── */
function CenterSilhouette({ mouseX, mouseY }) {
  const springCfg = { damping: 28, stiffness: 85, mass: 0.8 };
  const sx = useSpring(mouseX, springCfg);
  const sy = useSpring(mouseY, springCfg);
  const rotateY = useTransform(sx, [-400, 400], [-2.5, 2.5]);
  const rotateX = useTransform(sy, [-400, 400], [1.8, -1.8]);
  const translateX = useTransform(sx, [-400, 400], [-3, 3]);

  return (
    <div
      className="hero-silhouette-wrapper"
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        pointerEvents: 'none',
        zIndex: 5,
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          translateX,
          transformStyle: 'preserve-3d',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          height: '100%',
          width: '100%',
          maxWidth: 960,
        }}
      >
        {/* Cinematic red rim aura behind head & shoulders */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '8%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'clamp(340px, 38vw, 580px)',
            height: 'clamp(340px, 38vw, 580px)',
            background:
              'radial-gradient(ellipse at 50% 45%, rgba(225,6,0,0.58) 0%, rgba(225,6,0,0.22) 42%, transparent 70%)',
            filter: 'blur(52px)',
            zIndex: 0,
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        {/* Sri Ram Cutout PNG extending all the way to bottom edge */}
        <img
          src="/images/profile-suit-cutout.png"
          alt="Sri Ram — Software Builder"
          loading="eager"
          decoding="async"
          className="hero-center-img"
          style={{
            position: 'relative',
            zIndex: 1,
            height: 'clamp(560px, 86vh, 920px)',
            width: 'auto',
            maxHeight: '98%',
            objectFit: 'contain',
            objectPosition: 'bottom center',
            display: 'block',
            filter:
              'contrast(1.05) brightness(1.01) drop-shadow(0 0 28px rgba(225,6,0,0.45)) drop-shadow(0 14px 44px rgba(0,0,0,0.95))',
          }}
        />
      </motion.div>
    </div>
  );
}

/* ─── Ultra-Bold Condensed Metallic PORTFOLIO Text ─── */
function GiantPortfolioText({ mounted }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 'clamp(32px, 7vh, 85px)',
        left: 0,
        right: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        userSelect: 'none',
        pointerEvents: 'none',
        zIndex: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={mounted ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: '94%',
          maxWidth: 1680,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <svg
          viewBox="0 0 1600 280"
          preserveAspectRatio="xMidYMid meet"
          style={{
            width: '100%',
            height: 'auto',
            overflow: 'visible',
            display: 'block',
            filter:
              'drop-shadow(0 0 40px rgba(225,6,0,0.85)) drop-shadow(0 0 90px rgba(200,0,0,0.45)) drop-shadow(0 14px 40px rgba(0,0,0,0.96))',
          }}
        >
          <defs>
            {/* Chrome / Metallic Silver Gradient */}
            <linearGradient id="portfolio-chrome" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="20%" stopColor="#EDEDED" />
              <stop offset="52%" stopColor="#8A8A8A" />
              <stop offset="80%" stopColor="#2A2A2A" />
              <stop offset="100%" stopColor="#0E0E0E" />
            </linearGradient>
            {/* Subtle Red Edge Glow Stroke */}
            <linearGradient id="portfolio-edge-glow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
              <stop offset="40%" stopColor="rgba(225,6,0,0.78)" />
              <stop offset="80%" stopColor="rgba(225,6,0,0.4)" />
              <stop offset="100%" stopColor="rgba(225,6,0,0.15)" />
            </linearGradient>
          </defs>
          <text
            x="800"
            y="185"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="url(#portfolio-chrome)"
            stroke="url(#portfolio-edge-glow)"
            strokeWidth="1.5"
            fontFamily="'Space Grotesk', 'Syne', sans-serif"
            fontWeight="900"
            fontSize="248"
            letterSpacing="-0.035em"
          >
            PORTFOLIO
          </text>
        </svg>
      </motion.div>
    </div>
  );
}

/* ─── Mouse Scroll Indicator ─── */
function ScrollIndicator() {
  return (
    <a
      href="#about"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      }}
      aria-label="Scroll to explore"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        textDecoration: 'none',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          width: 22,
          height: 36,
          border: '1.5px solid rgba(255,255,255,0.32)',
          borderRadius: 12,
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 6,
          background: 'rgba(10,10,10,0.6)',
          backdropFilter: 'blur(6px)',
        }}
      >
        <motion.div
          animate={{ y: [0, 13, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 3.5,
            height: 6,
            borderRadius: 2,
            background: '#E10600',
            boxShadow: '0 0 8px #E10600',
          }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 9.5,
            letterSpacing: '0.22em',
            color: 'rgba(255,255,255,0.5)',
            fontWeight: 600,
          }}
        >
          SCROLL
        </span>
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 9.5,
            letterSpacing: '0.22em',
            color: 'rgba(255,255,255,0.5)',
            fontWeight: 600,
            marginTop: 1,
          }}
        >
          TO EXPLORE
        </span>
      </div>
    </a>
  );
}

/* ══════════════════════════════════════════════
   HERO COMPONENT
══════════════════════════════════════════════ */
export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="hero-section"
      style={{
        position: 'relative',
        height: '100vh',
        maxHeight: '100vh',
        width: '100%',
        maxWidth: '100vw',
        background: '#040404',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 68,
        margin: 0,
        boxSizing: 'border-box',
      }}
    >
      <GrainOverlay />

      {/* Atmospheric Center Red Ambient Glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90vw',
          height: '65vh',
          background:
            'radial-gradient(ellipse 65% 50% at 50% 35%, rgba(225,6,0,0.3) 0%, rgba(225,6,0,0.08) 50%, transparent 78%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* ══ MAIN STAGE ══ */}
      <div
        className="hero-stage"
        style={{
          position: 'relative',
          flex: 1,
          display: 'flex',
          alignItems: 'stretch',
          width: '100%',
          minHeight: 0,
        }}
      >
        {/* CENTER BACKGROUND: GIANT METALLIC "PORTFOLIO" VECTOR TEXT */}
        <GiantPortfolioText mounted={mounted} />

        {/* CENTER FOREGROUND: SRI RAM PORTRAIT OVERLAPPING PORTFOLIO */}
        <CenterSilhouette mouseX={mouseX} mouseY={mouseY} />

        {/* ══ ART-DIRECTED 3-COLUMN CONTENT GRID ══ */}
        <div
          className="hero-content-grid"
          style={{
            position: 'relative',
            zIndex: 10,
            width: '100%',
            height: '100%',
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 440px) 1fr minmax(240px, 320px)',
            alignItems: 'stretch',
            padding: 'clamp(14px, 2.2vh, 26px) clamp(32px, 5vw, 84px) 52px',
            gap: 24,
            boxSizing: 'border-box',
          }}
        >
          {/* ════ LEFT COLUMN: HERO MESSAGE & ACTIONS ════ */}
          <div
            className="hero-left-col"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              gap: 'clamp(12px, 1.8vh, 18px)',
              paddingBottom: 4,
            }}
          >
            {/* Tag / Sub-header badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <div
                aria-hidden="true"
                style={{ width: 28, height: 2, background: '#E10600', flexShrink: 0 }}
              />
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: 'rgba(255,255,255,0.65)',
                  fontSize: 'clamp(10px, 0.8vw, 11.5px)',
                  letterSpacing: '0.24em',
                  fontWeight: 700,
                }}
              >
                SOFTWARE BUILDER · AI AUTOMATION
              </span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-heading"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(26px, 2.8vw, 44px)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                margin: 0,
              }}
            >
              <span style={{ color: '#D4D4D4', fontWeight: 700 }}>
                Turning Ideas Into
              </span>
              <br />
              <span style={{ color: '#FFFFFF', fontWeight: 900 }}>
                Working Software<span style={{ color: '#E10600' }}>.</span>
              </span>
            </h1>

            {/* Subtitle Description */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(12px, 0.95vw, 14px)',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.65,
                maxWidth: 400,
                margin: 0,
              }}
            >
              I build practical software systems, automate real workflows,
              and create digital products that solve everyday problems.
            </p>

            {/* 2 CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 12,
              }}
            >
              <motion.a
                href="#work"
                id="hero-cta-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '12px 22px',
                  background: '#E10600',
                  color: '#FFFFFF',
                  borderRadius: 24,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 10.5,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  border: '1px solid #E10600',
                  textDecoration: 'none',
                  boxShadow: '0 0 28px rgba(225,6,0,0.75)',
                  transition: 'box-shadow 0.25s ease, background 0.25s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 38px rgba(225,6,0,0.95)';
                  e.currentTarget.style.background = '#FF0B05';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 28px rgba(225,6,0,0.75)';
                  e.currentTarget.style.background = '#E10600';
                }}
              >
                ↗ EXPLORE WHAT I BUILD ↗
              </motion.a>

              <motion.a
                href="#contact"
                id="hero-cta-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '12px 20px',
                  background: 'rgba(16,16,16,0.75)',
                  color: 'rgba(255,255,255,0.9)',
                  borderRadius: 24,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 10.5,
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  border: '1px solid rgba(255,255,255,0.24)',
                  backdropFilter: 'blur(10px)',
                  textDecoration: 'none',
                  transition: 'border-color 0.25s ease, background 0.25s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.55)';
                  e.currentTarget.style.background = 'rgba(26,26,26,0.9)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.24)';
                  e.currentTarget.style.background = 'rgba(16,16,16,0.75)';
                }}
              >
                START A CONVERSATION
              </motion.a>
            </div>

            {/* Tech Stack Row — TEXT ONLY */}
            <div className="hero-tech-block" style={{ marginTop: 2 }}>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: 'rgba(255,255,255,0.44)',
                  marginBottom: 6,
                  fontSize: 9.5,
                  letterSpacing: '0.22em',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                }}
              >
                TECH I WORK WITH
              </p>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: 'clamp(11px, 0.85vw, 12.5px)',
                  fontWeight: 500,
                  letterSpacing: '0.03em',
                  lineHeight: 1.6,
                  maxWidth: 390,
                  margin: 0,
                }}
              >
                {TECH_LIST.map((tech, idx) => (
                  <span key={tech}>
                    <span style={{ color: '#FFFFFF', fontWeight: 600 }}>{tech}</span>
                    {idx < TECH_LIST.length - 1 && (
                      <span
                        style={{
                          color: '#E10600',
                          margin: '0 5px',
                          fontWeight: 700,
                          userSelect: 'none',
                        }}
                      >
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* ════ CENTER COLUMN: CLEARANCE FOR PORTRAIT & PORTFOLIO ════ */}
          <div className="hero-center-col" aria-hidden="true" style={{ pointerEvents: 'none' }} />

          {/* ════ RIGHT COLUMN: IDENTITY & DETAILS ════ */}
          <div
            className="hero-right-col"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              paddingBottom: 4,
            }}
          >
            {/* Top: IDEAS / CODE / BUILD / REPEAT */}
            <div
              className="hero-meta-top"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: 2,
              }}
            >
              {['IDEAS', 'CODE', 'BUILD', 'REPEAT'].map((word, i) => (
                <div key={word} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: 'rgba(255,255,255,0.44)',
                      fontSize: 9.5,
                      letterSpacing: '0.28em',
                      fontWeight: 700,
                      lineHeight: 1.35,
                    }}
                  >
                    {word}
                  </span>
                  {i === 3 && (
                    <div
                      style={{
                        height: 2,
                        width: '100%',
                        background: '#E10600',
                        marginTop: 3,
                        boxShadow: '0 0 6px #E10600',
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Middle: Signature + Location & Availability */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: 'clamp(14px, 2vh, 20px)',
                margin: 'auto 0 clamp(16px, 2.2vh, 24px)',
              }}
            >
              {/* Sri Ram signature */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={mounted ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="hero-signature-container"
              >
                <Signature />
              </motion.div>

              {/* Location & Availability Block */}
              <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: 2,
                    background: 'linear-gradient(to bottom, #E10600 0%, rgba(225,6,0,0.15) 100%)',
                    alignSelf: 'stretch',
                    flexShrink: 0,
                    borderRadius: 1,
                    boxShadow: '0 0 6px rgba(225,6,0,0.5)',
                  }}
                />
                <div style={{ textAlign: 'right' }}>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: 'rgba(255,255,255,0.85)',
                      fontSize: 11,
                      letterSpacing: '0.2em',
                      marginBottom: 8,
                      fontWeight: 700,
                    }}
                  >
                    CHENNAI, INDIA
                  </p>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: 'rgba(255,255,255,0.36)',
                      fontSize: 9,
                      letterSpacing: '0.22em',
                      marginBottom: 5,
                      fontWeight: 600,
                    }}
                  >
                    AVAILABLE FOR
                  </p>
                  {['INTERNSHIPS', 'FREELANCE', 'COLLABORATION'].map((item) => (
                    <p
                      key={item}
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        color: 'rgba(255,255,255,0.62)',
                        fontSize: 9.5,
                        letterSpacing: '0.16em',
                        lineHeight: 1.85,
                        fontWeight: 600,
                        margin: 0,
                      }}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom: Scroll indicator */}
            <ScrollIndicator />
          </div>
        </div>
      </div>

      {/* ══ BOTTOM BAR PINNED FLUSH TO BOTTOM ══ */}
      <div
        className="hero-bottom-bar"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 12,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 40,
          padding: '0 clamp(32px, 5vw, 84px)',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          background: 'rgba(4,4,4,0.85)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 20, height: 2, background: '#E10600', flexShrink: 0 }} />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: 'rgba(255,255,255,0.4)',
              fontSize: 9,
              letterSpacing: '0.24em',
              fontWeight: 600,
            }}
          >
            BUILD · LEARN · IMPROVE · REPEAT
          </span>
          <div
            style={{
              width: 32,
              height: 2,
              background: '#E10600',
              borderRadius: 1,
              marginLeft: 6,
              boxShadow: '0 0 6px #E10600',
            }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 14, height: 2, background: '#E10600', flexShrink: 0 }} />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: 'rgba(255,255,255,0.4)',
              fontSize: 9,
              letterSpacing: '0.2em',
              fontWeight: 600,
            }}
          >
            A BETTER TOMORROW THROUGH SOFTWARE.
          </span>
        </div>
      </div>

      <style>{`
        /* Desktop: strictly 100vh, fits inside viewport without any clipping or scrolling */
        @media (min-width: 1024px) {
          .hero-section {
            height: 100vh !important;
            max-height: 100vh !important;
            overflow: hidden !important;
          }
        }

        /* Responsive tablet & mobile handling */
        @media (max-width: 1023px) {
          .hero-section {
            min-height: 100vh !important;
            height: auto !important;
            max-height: none !important;
            overflow: visible !important;
          }
          .hero-stage {
            min-height: 540px;
          }
          .hero-content-grid {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 28px !important;
            padding-top: 320px !important;
            padding-bottom: 60px !important;
          }
          .hero-left-col {
            text-align: center !important;
            align-items: center !important;
          }
          .hero-left-col p {
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .hero-left-col > div {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .hero-right-col {
            align-items: center !important;
          }
          .hero-right-col > div {
            text-align: center !important;
          }
          .hero-center-col {
            display: none !important;
          }
          .hero-center-img {
            height: clamp(340px, 50vh, 480px) !important;
          }
        }
        @media (max-width: 860px) {
          .hero-meta-top {
            display: none !important;
          }
        }
        @media (max-width: 540px) {
          .hero-bottom-bar span:last-child {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
