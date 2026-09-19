import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Brain,
  Code2,
  Terminal,
  GitBranch,
  Sparkles,
} from 'lucide-react';

const categories = [
  {
    icon: Brain,
    title: 'AI & Automation',
    description:
      'Building AI-powered applications and intelligent automation workflows that connect tools and eliminate repetitive work.',
    skills: ['Gemini AI', 'Claude AI', 'OpenAI API', 'Prompt Engineering', 'AI Workflows', 'n8n', 'Twilio', 'Google Sheets API', 'REST APIs', 'Webhooks'],
  },
  {
    icon: Code2,
    title: 'Development',
    description:
      'Creating fast, responsive, and modern user interfaces with clean code and thoughtful architecture.',
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Vite'],
  },
  {
    icon: Terminal,
    title: 'Backend / APIs',
    description:
      'Developing secure backend services, managing application data, and building reliable API integrations.',
    skills: ['Firebase', 'Node.js', 'Express.js', 'Firestore'],
  },
  {
    icon: GitBranch,
    title: 'Tools / Infrastructure',
    description:
      'Daily tools I use for development, collaboration, and deployment.',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Vercel'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="skills"
      className="relative bg-light-bg py-24 sm:py-32"
      aria-labelledby="skills-heading"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase text-text-muted mb-6"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            Skills & Technologies
          </motion.span>
          <motion.h2
            id="skills-heading"
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-light mb-6"
          >
            The <span className="text-accent">stack</span> I work with
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-lg text-text-secondary">
            The tools, technologies, and platforms I use to build AI applications, automation systems, and modern web experiences.
          </motion.p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-text-light">
                    {category.title}
                  </h3>
                </div>

                <p className="text-lg leading-relaxed text-text-secondary max-w-md">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-lg border border-border-subtle px-3 py-1.5 text-xs font-medium text-text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
