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

const TECH_LINE_1 = ['React', 'JavaScript', 'Python', 'Node.js'];
const TECH_LINE_2 = ['Firebase', 'Gemini', 'n8n', 'Twilio', 'Git'];

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
function Signature({ isMobile = false }) {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-end' }}>
      <span
        style={{
          fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
          fontSize: isMobile ? 38 : 'clamp(38px, 3.2vw, 54px)',
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
          background: isMobile
            ? 'linear-gradient(90deg, transparent 0%, #E10600 50%, transparent 100%)'
            : 'linear-gradient(90deg, transparent 0%, #E10600 30%, #FF1E1E 100%)',
          marginTop: 4,
          borderRadius: 2,
          boxShadow: '0 0 8px rgba(225,6,0,0.7)',
        }}
      />
    </div>
  );
}

/* ─── Desktop Center Silhouette with Parallax Tilt ─── */
function DesktopCenterSilhouette({ mouseX, mouseY }) {
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

/* ─── Ultra-Bold Condensed Metallic PORTFOLIO Text (Desktop) ─── */
function DesktopGiantPortfolioText({ mounted }) {
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
            <linearGradient id="portfolio-chrome" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="20%" stopColor="#EDEDED" />
              <stop offset="52%" stopColor="#8A8A8A" />
              <stop offset="80%" stopColor="#2A2A2A" />
              <stop offset="100%" stopColor="#0E0E0E" />
            </linearGradient>
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
function ScrollIndicator({ isMobile = false }) {
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
        justifyContent: isMobile ? 'center' : 'flex-end',
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
      <div style={{ display: 'flex', flexDirection: 'column', textAlign: isMobile ? 'left' : 'right' }}>
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
        width: '100%',
        maxWidth: '100vw',
        background: '#040404',
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

      {/* ═══════════════════════════════════════════════════
          DESKTOP HERO (min-width: 1024px)
          Strictly 100vh · 3-Column Art-Directed Composition
          Left Content | Center Portrait+PORTFOLIO | Right Details
          (UNTOUCHED AS REQUESTED)
         ═══════════════════════════════════════════════════ */}
      <div className="hero-desktop-wrapper">
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
          <DesktopGiantPortfolioText mounted={mounted} />

          {/* CENTER FOREGROUND: SRI RAM PORTRAIT OVERLAPPING PORTFOLIO */}
          <DesktopCenterSilhouette mouseX={mouseX} mouseY={mouseY} />

          {/* ══ BALANCED 3-COLUMN CONTENT GRID ══ */}
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
            {/* ── LEFT COLUMN: HERO MESSAGE & ACTIONS ── */}
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
                  EXPLORE WHAT I BUILD ↗
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

            {/* ── CENTER COLUMN: CLEARANCE FOR PORTRAIT & PORTFOLIO ── */}
            <div className="hero-center-col" aria-hidden="true" style={{ pointerEvents: 'none' }} />

            {/* ── RIGHT COLUMN: IDENTITY & DETAILS ── */}
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
                  <Signature isMobile={false} />
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
              <ScrollIndicator isMobile={false} />
            </div>
          </div>
        </div>

        {/* ══ DESKTOP BOTTOM BAR ══ */}
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
      </div>

      {/* ═══════════════════════════════════════════════════
          MOBILE HERO (max-width: 1023px)
          Strict Vertical Hierarchy As Requested:
          NAVBAR → EYEBROW → HEADLINE → DESCRIPTION →
          CTA BUTTONS → TECH I WORK WITH → PORTRAIT →
          SIGNATURE → LOCATION / AVAILABILITY → SCROLL INDICATOR
         ═══════════════════════════════════════════════════ */}
      <div className="hero-mobile-wrapper">
        {/* 1. EYEBROW */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 14,
          }}
        >
          <div
            aria-hidden="true"
            style={{ width: 24, height: 2, background: '#E10600', flexShrink: 0 }}
          />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: 'rgba(255,255,255,0.68)',
              fontSize: 10.5,
              letterSpacing: '0.22em',
              fontWeight: 700,
            }}
          >
            SOFTWARE BUILDER · AI AUTOMATION
          </span>
        </div>

        {/* 2. HEADLINE */}
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(28px, 7.6vw, 38px)',
            fontWeight: 800,
            lineHeight: 1.12,
            letterSpacing: '-0.03em',
            margin: '0 0 14px 0',
            textAlign: 'center',
            maxWidth: 380,
          }}
        >
          <span style={{ color: '#D4D4D4', fontWeight: 700 }}>Turning Ideas Into</span>
          <br />
          <span style={{ color: '#FFFFFF', fontWeight: 900 }}>
            Working Software<span style={{ color: '#E10600' }}>.</span>
          </span>
        </h1>

        {/* 3. DESCRIPTION */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(13px, 3.6vw, 14.5px)',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.65,
            maxWidth: 350,
            margin: '0 0 20px 0',
            textAlign: 'center',
          }}
        >
          I build practical software systems, automate real workflows,
          and create digital products that solve everyday problems.
        </p>

        {/* 4. CTA BUTTONS (Stacked) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,
            width: '100%',
            maxWidth: 320,
            margin: '0 0 22px 0',
          }}
        >
          <motion.a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              width: '100%',
              padding: '13px 24px',
              background: '#E10600',
              color: '#FFFFFF',
              borderRadius: 24,
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.12em',
              border: '1px solid #E10600',
              textDecoration: 'none',
              boxShadow: '0 0 26px rgba(225,6,0,0.75)',
              textAlign: 'center',
            }}
          >
            EXPLORE WHAT I BUILD ↗
          </motion.a>

          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              width: '100%',
              padding: '12px 24px',
              background: 'rgba(16,16,16,0.85)',
              color: 'rgba(255,255,255,0.92)',
              borderRadius: 24,
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.1em',
              border: '1px solid rgba(255,255,255,0.22)',
              backdropFilter: 'blur(10px)',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            START A CONVERSATION
          </motion.a>
        </div>

        {/* 5. TECH I WORK WITH (Above Portrait · Wrapped in 2 lines · Zero Horizontal Overflow) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
            maxWidth: 340,
            margin: '0 0 26px 0',
          }}
        >
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: 'rgba(255,255,255,0.44)',
              marginBottom: 8,
              fontSize: 9.5,
              letterSpacing: '0.22em',
              fontWeight: 700,
              textTransform: 'uppercase',
            }}
          >
            TECH I WORK WITH
          </p>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: 'rgba(255,255,255,0.85)',
              fontSize: 12.5,
              fontWeight: 500,
              letterSpacing: '0.02em',
              lineHeight: 1.8,
              textAlign: 'center',
            }}
          >
            <div style={{ whiteSpace: 'nowrap' }}>
              {TECH_LINE_1.map((tech, idx) => (
                <span key={tech}>
                  <span style={{ color: '#FFFFFF', fontWeight: 600 }}>{tech}</span>
                  {idx < TECH_LINE_1.length - 1 && (
                    <span style={{ color: '#E10600', margin: '0 5px', fontWeight: 700 }}>·</span>
                  )}
                </span>
              ))}
            </div>
            <div style={{ whiteSpace: 'nowrap' }}>
              {TECH_LINE_2.map((tech, idx) => (
                <span key={tech}>
                  <span style={{ color: '#FFFFFF', fontWeight: 600 }}>{tech}</span>
                  {idx < TECH_LINE_2.length - 1 && (
                    <span style={{ color: '#E10600', margin: '0 5px', fontWeight: 700 }}>·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 6. PORTRAIT (Centered · Visually Important · Lower Position · Original Face · No Overlapping Text) */}
        <div
          className="hero-mobile-portrait-stage"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: 440,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            margin: '0 0 24px 0',
          }}
        >
          {/* Subtle Ambient Red Glow Behind Hair */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '10%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 280,
              height: 280,
              background:
                'radial-gradient(circle at 50% 50%, rgba(225,6,0,0.48) 0%, rgba(225,6,0,0.18) 45%, transparent 72%)',
              filter: 'blur(40px)',
              zIndex: 0,
              borderRadius: '50%',
              pointerEvents: 'none',
            }}
          />

          {/* Sri Ram Portrait Cutout (High Resolution, Original Face) */}
          <img
            src="/images/profile-suit-cutout.png"
            alt="Sri Ram — Software Builder"
            loading="eager"
            decoding="async"
            style={{
              position: 'relative',
              zIndex: 2,
              height: 'clamp(360px, 52vh, 460px)',
              width: 'auto',
              maxWidth: '100%',
              objectFit: 'contain',
              objectPosition: 'bottom center',
              display: 'block',
              filter:
                'contrast(1.05) brightness(1.01) drop-shadow(0 0 24px rgba(225,6,0,0.4)) drop-shadow(0 14px 36px rgba(0,0,0,0.95))',
            }}
          />
        </div>

        {/* 7. SIGNATURE (Below Portrait) */}
        <div style={{ marginBottom: 20 }}>
          <Signature isMobile={true} />
        </div>

        {/* 8. LOCATION / AVAILABILITY (Clean Vertical Information Block) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '14px 20px',
            background: 'rgba(12,12,12,0.6)',
            borderRadius: 12,
            border: '1px solid rgba(255,255,255,0.06)',
            marginBottom: 24,
            maxWidth: 280,
            width: '100%',
          }}
        >
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: 'rgba(255,255,255,0.9)',
              fontSize: 11.5,
              letterSpacing: '0.2em',
              marginBottom: 8,
              fontWeight: 700,
            }}
          >
            CHENNAI, INDIA
          </p>
          <div
            style={{
              width: 32,
              height: 1.5,
              background: '#E10600',
              marginBottom: 8,
              borderRadius: 1,
            }}
          />
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: 'rgba(255,255,255,0.4)',
              fontSize: 9,
              letterSpacing: '0.22em',
              marginBottom: 6,
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
                color: 'rgba(255,255,255,0.65)',
                fontSize: 10,
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

        {/* 9. SCROLL INDICATOR */}
        <div style={{ marginBottom: 26 }}>
          <ScrollIndicator isMobile={true} />
        </div>

        {/* 10. MOBILE BOTTOM STRIP */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            paddingTop: 12,
            borderTop: '1px solid rgba(255,255,255,0.06)',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <div style={{ width: 16, height: 2, background: '#E10600', flexShrink: 0 }} />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: 'rgba(255,255,255,0.4)',
              fontSize: 9,
              letterSpacing: '0.2em',
              fontWeight: 600,
            }}
          >
            BUILD · LEARN · IMPROVE · REPEAT
          </span>
          <div style={{ width: 16, height: 2, background: '#E10600', flexShrink: 0 }} />
        </div>
      </div>

      <style>{`
        /* ═══════════════════════════════════════
           DESKTOP (min-width: 1024px)
           Strictly 100vh · 3-column composition
           ═══════════════════════════════════════ */
        @media (min-width: 1024px) {
          .hero-section {
            height: 100vh !important;
            max-height: 100vh !important;
            overflow: hidden !important;
            display: flex !important;
            flex-direction: column !important;
            justifyContent: space-between !important;
            padding-top: 68px !important;
          }
          .hero-desktop-wrapper {
            display: flex !important;
            flex-direction: column !important;
            height: 100% !important;
            width: 100% !important;
            position: relative !important;
          }
          .hero-mobile-wrapper {
            display: none !important;
          }
        }

        /* ═══════════════════════════════════════
           MOBILE & TABLET (max-width: 1023px)
           Clean Vertical Art-Directed Hierarchy
           ═══════════════════════════════════════ */
        @media (max-width: 1023px) {
          .hero-section {
            min-height: 100vh !important;
            height: auto !important;
            max-height: none !important;
            overflow-x: hidden !important;
            overflow-y: visible !important;
            display: block !important;
            padding-top: 76px !important;
            padding-bottom: 24px !important;
          }
          .hero-desktop-wrapper {
            display: none !important;
          }
          .hero-mobile-wrapper {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            width: 100% !important;
            max-width: 100vw !important;
            padding: 0 20px !important;
            box-sizing: border-box !important;
            overflow-x: hidden !important;
          }
        }
      `}</style>
    </section>
  );
}
