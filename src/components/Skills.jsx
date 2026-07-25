import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import {
  Terminal,
  Network,
  Code2,
  Brain,
  FileCode2,
  Table,
  Phone,
  GitBranch,
  Webhook,
} from 'lucide-react';

const skills = [
  { name: 'Python', icon: Terminal },
  { name: 'n8n', icon: Network },
  { name: 'REST APIs', icon: Webhook },
  { name: 'Gemini AI', icon: Brain },
  { name: 'JavaScript', icon: FileCode2 },
  { name: 'HTML5 / CSS3', icon: Code2 },
  { name: 'Google Sheets', icon: Table },
  { name: 'Twilio', icon: Phone },
  { name: 'Git & GitHub', icon: GitBranch },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 overflow-hidden"
      aria-labelledby="skills-heading"
    >
      <div className="absolute inset-0 bg-surface/50" aria-hidden="true" />
      <div
        className="glow-blob bg-secondary/10 w-[500px] h-[500px] bottom-0 right-0 opacity-50"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal className="text-center mb-20">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4 block">
            Expertise
          </span>
          <h2
            id="skills-heading"
            className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text-primary"
          >
            The <span className="gradient-text">Engine Room</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-5 max-w-5xl mx-auto">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="glass-card px-6 py-4 flex items-center gap-3 cursor-default group"
              >
                <skill.icon
                  className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
                <span className="font-display font-semibold text-sm sm:text-base text-text-primary">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
