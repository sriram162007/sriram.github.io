import { motion } from 'framer-motion';
import { ArrowRight, Code2, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20"
      aria-labelledby="hero-heading"
    >
      {/* Ambient background effects */}
      <div className="absolute inset-0 depth-grid" aria-hidden="true" />
      <div
        className="glow-blob bg-primary/20 w-[600px] h-[600px] -top-40 -right-40 opacity-60 animate-float"
        aria-hidden="true"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="glow-blob bg-secondary/15 w-[500px] h-[500px] top-1/2 -left-32 opacity-40 animate-float"
        aria-hidden="true"
        style={{ animationDelay: '2s' }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2.5"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase text-text-secondary">
                Open for freelance
              </span>
              <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-text-primary"
            >
              I build AI systems that{' '}
              <span className="gradient-text">automate</span> business operations.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl text-lg leading-relaxed text-text-secondary"
            >
              Ram is an Independent AI Automation Developer & Continuous Learner,
              dedicated to crafting production-ready systems that eliminate repetitive
              tasks and scale with your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://wa.me/918248261165"
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn inline-flex items-center gap-3 rounded-2xl bg-primary px-8 py-4 font-display font-semibold text-background transition-all hover:shadow-[0_0_32px_rgba(6,182,212,0.35)] hover:scale-105 active:scale-95"
              >
                Hire Me on WhatsApp
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/sriram162007"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/[0.12] px-8 py-4 font-display font-semibold text-text-primary transition-all hover:border-primary/40 hover:bg-white/[0.04] hover:scale-105 active:scale-95"
              >
                <Code2 className="h-5 w-5" aria-hidden="true" />
                GitHub
              </a>
            </motion.div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div
                className="absolute -inset-10 bg-primary/15 blur-[100px] rounded-full"
                aria-hidden="true"
              />
              <div className="relative rounded-full border-2 border-primary/30 p-1.5 shadow-[0_0_60px_rgba(6,182,212,0.2)] animate-float">
                <div className="overflow-hidden rounded-full">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgcdU9Mi6FpYzHL2Q3UODmSE-fdNOke3jGZnQq9GDTx4Ot3NEwyD_5vtCigObKcH-VxO3h16EGzLrVP1ZtSjoiIFBEyxrJ6INJrRxEx453s3ZqTqQOS46wL0C_nQwZeYW19Usops_sc6viZDit0jy_JH7e1GkKuAWH1YlfyBz_B5WB6iztOqy7uwy0nImbJ6i-LHEf6r6kXxpI3uYUGkCbJNUApRcYJH8kUC6WJ-9C5JxiGgDrIeQcMulBFQONESUSLeKNtpZsPrsc"
                    alt="Ram — AI Automation Developer"
                    width={400}
                    height={400}
                    loading="eager"
                    className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
        >
          {[
            { value: '3+', label: 'Production Projects' },
            { value: 'AI', label: 'Automation Enthusiast' },
            { value: '24/7', label: 'System Monitoring' },
            { value: '100%', label: 'Client Dedication' },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass-card p-6 text-center group"
            >
              <div className="font-display text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-300 inline-block">
                {stat.value}
              </div>
              <div className="text-xs font-medium tracking-wide uppercase text-text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
