import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';
import {
  projects,
  PROJECT_CATEGORIES,
  githubRepositories,
} from '../data/projects';
import ProjectFilter from '../components/work/ProjectFilter';
import BentoProjectGrid from '../components/work/BentoProjectGrid';
import RepoArchiveDrawer from '../components/work/RepoArchiveDrawer';
import CaseStudyModal from '../components/work/CaseStudyModal';

/* ── Stat Pill ── */
function StatPill({ value, label }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
      padding: '10px 20px',
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 8,
      backdropFilter: 'blur(8px)',
    }}>
      <span style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(20px, 2.5vw, 28px)',
        fontWeight: 800,
        color: 'var(--color-red)',
        letterSpacing: '-0.02em',
        lineHeight: 1,
      }}>
        {value}
      </span>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 9,
        color: 'var(--color-text-3)',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
      }}>
        {label}
      </span>
    </div>
  );
}

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  /* Live project counts per category */
  const getCount = (catId) => {
    if (catId === 'all') return projects.length;
    return projects.filter((p) => p.domains?.includes(catId)).length;
  };

  /* Filtered projects based on active domain filter */
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => p.domains?.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section
      id="work"
      className="section"
      aria-labelledby="work-heading"
      style={{
        background: 'var(--color-bg)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient glow */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        top: '10%',
        left: '-5%',
        width: '40%',
        height: '60%',
        background: 'radial-gradient(ellipse, rgba(225,6,0,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute',
        bottom: '5%',
        right: '-5%',
        width: '35%',
        height: '50%',
        background: 'radial-gradient(ellipse, rgba(225,6,0,0.03) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ marginBottom: 36 }}>
          <SectionLabel number="03" text="SELECTED WORK" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ marginTop: 20 }}
          >
            <h2
              id="work-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 3.5vw, 52px)',
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                color: 'var(--color-text-1)',
              }}
            >
              REAL PROJECTS.
            </h2>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 3.5vw, 52px)',
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                color: 'var(--color-text-2)',
              }}
            >
              REAL SYSTEMS.
            </h2>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 3.5vw, 52px)',
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                color: 'var(--color-text-3)',
              }}
            >
              ENGINEERED FOR SCALE.
            </h2>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              display: 'flex',
              gap: 10,
              marginTop: 22,
              flexWrap: 'wrap',
            }}
          >
            <StatPill value={`0${projects.length}`} label="Projects Built" />
            <StatPill value={`0${githubRepositories.length}`} label="GitHub Repos" />
            <StatPill value="3+" label="Domains" />
            <StatPill value="∞" label="Ambition" />
          </motion.div>
        </div>

        {/* Dynamic Category Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ marginBottom: 24 }}
        >
          <ProjectFilter
            categories={PROJECT_CATEGORIES}
            activeFilter={activeFilter}
            onSelect={setActiveFilter}
            getCount={getCount}
          />
        </motion.div>

        {/* 🍱 Apple Pro Bento Grid (Zero Tabs, Zero Scrollbars, Full Visibility) */}
        <BentoProjectGrid
          projects={filteredProjects}
          onOpenModal={setSelectedProject}
        />

        {/* GitHub Repositories Drawer */}
        <RepoArchiveDrawer repositories={githubRepositories} />

        {/* Project Case Study Deep-Dive Modal */}
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>

      <style>{`
        .featured-article:hover .featured-img {
          transform: scale(1.04);
        }
        .large-card:hover .lc-img {
          transform: scale(1.06);
        }
        .large-card:hover .lc-red-accent {
          opacity: 1;
        }

        .project-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.05em;
          padding: 7px 14px;
          border-radius: 6px;
          text-decoration: none;
          transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
          font-weight: 600;
        }
        .project-action-live {
          background: rgba(225, 6, 0, 0.1);
          border: 1px solid rgba(225, 6, 0, 0.35);
          color: var(--color-text-1);
        }
        .project-action-live:hover {
          background: rgba(225, 6, 0, 0.22);
          border-color: var(--color-red);
          color: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(225,6,0,0.25);
        }
        .project-action-github {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          color: var(--color-text-2);
        }
        .project-action-github:hover {
          border-color: rgba(255, 255, 255, 0.28);
          color: var(--color-text-1);
          transform: translateY(-2px);
          background: rgba(255,255,255,0.04);
        }

        @media (max-width: 900px) {
          .featured-inner {
            grid-template-columns: 1fr !important;
          }
          .featured-content {
            grid-column: span 1 !important;
          }
          .featured-visual {
            grid-column: span 1 !important;
            min-height: 260px !important;
            border-left: none !important;
            border-top: 1px solid rgba(255,255,255,0.06) !important;
          }
          .features-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 768px) {
          .large-card,
          .large-card-reverse {
            grid-template-columns: 1fr !important;
          }
          .lc-content {
            order: 2 !important;
          }
          .lc-visual {
            order: 1 !important;
            min-height: 220px !important;
            border-left: none !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.06) !important;
          }
        }
      `}</style>
    </section>
  );
}
