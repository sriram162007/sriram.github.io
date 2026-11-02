import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function ProjectDock({ projects, activeId, onSelect }) {
  const scrollRef = useRef(null);

  const activeIndex = projects.findIndex((p) => p.id === activeId);

  const handlePrev = () => {
    if (activeIndex > 0) {
      onSelect(projects[activeIndex - 1]);
    } else {
      onSelect(projects[projects.length - 1]); // Loop back
    }
  };

  const handleNext = () => {
    if (activeIndex < projects.length - 1) {
      onSelect(projects[activeIndex + 1]);
    } else {
      onSelect(projects[0]); // Loop to start
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        marginTop: 16,
      }}
    >
      {/* Header with Navigation Controls */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 12,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              color: 'var(--color-text-3)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            SELECT PROJECT DOCK ({projects.length})
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 9,
              color: 'var(--color-red)',
              background: 'rgba(225, 6, 0, 0.08)',
              padding: '2px 6px',
              borderRadius: 3,
            }}
          >
            {activeIndex + 1} OF {projects.length}
          </span>
        </div>

        {/* Prev / Next Arrow Buttons */}
        <div style={{ display: 'flex', gap: 6 }}>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous project"
            className="dock-nav-btn"
          >
            ← PREV
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next project"
            className="dock-nav-btn"
          >
            NEXT →
          </button>
        </div>
      </div>

      {/* Dock Thumbnails Strip */}
      <div
        ref={scrollRef}
        className="project-dock-strip"
        style={{
          display: 'grid',
          gridAutoFlow: 'column',
          gridAutoColumns: 'minmax(180px, 1fr)',
          gap: 12,
          overflowX: 'auto',
          paddingBottom: 8,
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'thin',
        }}
      >
        {projects.map((proj, idx) => {
          const isActive = proj.id === activeId;

          return (
            <motion.button
              key={proj.id}
              type="button"
              onClick={() => onSelect(proj)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className={`dock-item ${isActive ? 'dock-item-active' : ''}`}
              style={{
                position: 'relative',
                background: isActive
                  ? 'linear-gradient(180deg, rgba(225, 6, 0, 0.12) 0%, rgba(20, 20, 26, 0.9) 100%)'
                  : 'rgba(15, 15, 20, 0.65)',
                border: isActive
                  ? '1px solid var(--color-red)'
                  : '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: 10,
                padding: 10,
                cursor: 'pointer',
                textAlign: 'left',
                scrollSnapAlign: 'start',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                transition: 'border-color 0.2s, background 0.2s, box-shadow 0.2s',
                boxShadow: isActive
                  ? '0 8px 24px rgba(225, 6, 0, 0.2), inset 0 1px 0 rgba(225, 6, 0, 0.4)'
                  : 'none',
              }}
            >
              {/* Active top line */}
              {isActive && (
                <span
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '15%',
                    right: '15%',
                    height: 2,
                    background: 'var(--color-red)',
                    boxShadow: '0 0 8px var(--color-red)',
                    borderRadius: '0 0 2px 2px',
                  }}
                />
              )}

              {/* Thumbnail Container */}
              <div
                style={{
                  width: '100%',
                  height: 90,
                  borderRadius: 6,
                  overflow: 'hidden',
                  background: '#08080A',
                  position: 'relative',
                }}
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: isActive ? 'none' : 'grayscale(35%) brightness(0.8)',
                    transition: 'filter 0.25s, transform 0.25s',
                  }}
                  className="dock-thumb-img"
                  loading="lazy"
                />
                <span
                  style={{
                    position: 'absolute',
                    bottom: 4,
                    left: 4,
                    fontFamily: 'var(--font-mono)',
                    fontSize: 9,
                    color: '#FFFFFF',
                    background: 'rgba(0, 0, 0, 0.75)',
                    padding: '1px 5px',
                    borderRadius: 3,
                    letterSpacing: '0.05em',
                  }}
                >
                  {proj.id}
                </span>
              </div>

              {/* Text Info */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 12,
                    fontWeight: 700,
                    color: isActive ? '#FFFFFF' : 'var(--color-text-2)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    lineHeight: 1.2,
                    marginBottom: 3,
                  }}
                >
                  {proj.title}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 9,
                    color: isActive ? 'var(--color-red)' : 'var(--color-text-3)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  {proj.domains ? proj.domains.join(' · ') : proj.category}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      <style>{`
        .dock-nav-btn {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--color-text-2);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 5px 10px;
          border-radius: 6px;
          cursor: pointer;
          letter-spacing: 0.08em;
          transition: all 0.2s;
        }
        .dock-nav-btn:hover {
          background: rgba(225, 6, 0, 0.15);
          border-color: rgba(225, 6, 0, 0.4);
          color: #FFFFFF;
        }
        .dock-item:hover .dock-thumb-img {
          filter: grayscale(0%) brightness(1) !important;
          transform: scale(1.04);
        }
        .project-dock-strip::-webkit-scrollbar {
          height: 4px;
        }
        .project-dock-strip::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 4px;
        }
        .project-dock-strip::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .project-dock-strip::-webkit-scrollbar-thumb:hover {
          background: var(--color-red);
        }
      `}</style>
    </div>
  );
}
