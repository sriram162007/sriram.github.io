import { useRef, useCallback } from 'react';
import BackgroundEffects from './BackgroundEffects';
import SectionHeader from './SectionHeader';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import {
  Brain,
  Workflow,
  Code2,
  Terminal,
  GitBranch,
  Sparkles,
} from 'lucide-react';

const categories = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description:
      'Building AI-powered applications using modern language models and prompt engineering techniques.',
    skills: ['Gemini AI', 'Claude AI', 'OpenAI API', 'Prompt Engineering', 'AI Workflows'],
    color: 'primary',
  },
  {
    icon: Workflow,
    title: 'Automation',
    description:
      'Designing workflows that automate repetitive tasks and connect different business systems.',
    skills: ['n8n', 'Twilio', 'Google Sheets API', 'REST APIs', 'Webhooks'],
    color: 'secondary',
  },
  {
    icon: Code2,
    title: 'Frontend Development',
    description:
      'Creating fast, responsive, and modern user interfaces with a focus on great user experience.',
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Vite'],
    color: 'accent',
  },
  {
    icon: Terminal,
    title: 'Backend & Database',
    description: 'Developing secure backend services and managing application data.',
    skills: ['Firebase', 'Node.js', 'Express.js', 'Firestore'],
    color: 'primary',
  },
  {
    icon: GitBranch,
    title: 'Tools',
    description: 'Daily tools I use for development, collaboration, and deployment.',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Vercel'],
    color: 'secondary',
  },
];

const colorMap = {
  primary: {
    iconBg: 'bg-accent/10',
    iconText: 'text-accent',
    badgeBorder: 'border-accent/20',
    badgeBg: 'bg-accent/5',
    badgeText: 'text-accent',
    glow: 'rgba(255,106,0,0.15)',
  },
  secondary: {
    iconBg: 'bg-accent/10',
    iconText: 'text-accent',
    badgeBorder: 'border-accent/20',
    badgeBg: 'bg-accent/5',
    badgeText: 'text-accent',
    glow: 'rgba(255,138,51,0.15)',
  },
  accent: {
    iconBg: 'bg-accent/10',
    iconText: 'text-accent',
    badgeBorder: 'border-accent/20',
    badgeBg: 'bg-accent/5',
    badgeText: 'text-accent',
    glow: 'rgba(255,106,0,0.15)',
  },
};

function SkillBadge({ skill, color, index }) {
  const badgeRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-20, 20], [3, -3]);
  const rotateY = useTransform(x, [-20, 20], [-3, 3]);

  const handleMouseMove = useCallback(
    (e) => {
      if (!badgeRef.current) return;
      const rect = badgeRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(e.clientX - centerX);
      y.set(e.clientY - centerY);
    },
    [x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const colors = colorMap[color] || colorMap.primary;

  return (
    <motion.span
      ref={badgeRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 500 }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ scale: 1.08, y: -3 }}
      className={`inline-flex items-center rounded-xl border ${colors.badgeBorder} ${colors.badgeBg} px-4 py-2 text-xs font-semibold ${colors.badgeText} cursor-default transition-shadow duration-300 hover:shadow-[0_0_20px_${colors.glow}]`}
    >
      {skill}
    </motion.span>
  );
}

function CategoryCard({ category, index }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-150, 150], [3, -3]);
  const rotateY = useTransform(x, [-150, 150], [-3, 3]);
  const glowX = useTransform(x, [-150, 150], ['-30%', '30%']);
  const glowY = useTransform(y, [-150, 150], ['-30%', '30%']);

  const handleMouseMove = useCallback(
    (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(e.clientX - centerX);
      y.set(e.clientY - centerY);
    },
    [x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const colors = colorMap[category.color] || colorMap.primary;
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative group"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, perspective: 1000, transformStyle: 'preserve-3d' }}
        className="relative glass-card orange-glow overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,106,0,0.08)]"
      >
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            x: glowX,
            y: glowY,
            left: '50%',
            top: '50%',
            translateX: '-50%',
            translateY: '-50%',
            background: `radial-gradient(circle, ${colors.glow} 0%, transparent 70%)`,
          }}
          aria-hidden="true"
        />

        <div className="relative p-6 sm:p-8 space-y-5">
          <motion.div
            whileHover={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
            className={`w-14 h-14 rounded-2xl ${colors.iconBg} flex items-center justify-center ${colors.iconText} group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className="h-7 w-7" aria-hidden="true" />
          </motion.div>

          <h3 className="font-display text-xl sm:text-2xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
            {category.title}
          </h3>

          <p className="text-sm sm:text-base leading-relaxed text-text-secondary">
            {category.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {category.skills.map((skill, i) => (
              <SkillBadge key={skill} skill={skill} color={category.color} index={i} />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 overflow-hidden"
      aria-labelledby="skills-heading"
    >
      <BackgroundEffects particleCount={15} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          badge="Skills & Technologies"
          badgeIcon={Sparkles}
          title={<>The <span className="gradient-text">stack</span> I work with</>}
          subtitle="The tools, technologies, and platforms I use to build AI applications, automation systems, and modern web experiences."
          headingId="skills-heading"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
