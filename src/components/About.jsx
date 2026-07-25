import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { Brain, Zap, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden" aria-labelledby="about-heading">
      <div className="absolute inset-0 bg-surface/60" aria-hidden="true" />
      <div
        className="glow-blob bg-primary/10 w-[500px] h-[500px] top-20 -right-40 opacity-50"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4 block">
              Behind the code
            </span>
            <h2
              id="about-heading"
              className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text-primary"
            >
              About <span className="gradient-text">Ram</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <ScrollReveal className="lg:col-span-5" delay={0.1}>
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-3xl" aria-hidden="true" />
              <div className="glass-card p-3 relative">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgcdU9Mi6FpYzHL2Q3UODmSE-fdNOke3jGZnQq9GDTx4Ot3NEwyD_5vtCigObKcH-VxO3h16EGzLrVP1ZtSjoiIFBEyxrJ6INJrRxEx453s3ZqTqQOS46wL0C_nQwZeYW19Usops_sc6viZDit0jy_JH7e1GkKuAWH1YlfyBz_B5WB6iztOqy7uwy0nImbJ6i-LHEf6r6kXxpI3uYUGkCbJNUApRcYJH8kUC6WJ-9C5JxiGgDrIeQcMulBFQONESUSLeKNtpZsPrsc"
                    alt="Ram portrait"
                    width={500}
                    height={600}
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal delay={0.2}>
              <p className="text-xl leading-relaxed text-text-primary">
                I am a <span className="text-primary font-semibold">builder at heart</span>,
                obsessed with the potential of AI to transform how businesses operate. My focus
                is creating custom automation workflows that aren't just technical curiosities
                but robust, production-level tools that solve real problems.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-lg leading-relaxed text-text-secondary">
                Whether it's optimizing complex delivery routes or building voice-activated
                assistants, I approach every project with a commitment to continuous learning
                and technical excellence. My goal is to bridge the gap between cutting-edge AI
                research and practical, everyday business utility.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                {[
                  { icon: Brain, title: 'AI-First', desc: 'LLMs & automation agents' },
                  { icon: Zap, title: 'Fast Delivery', desc: 'Production-ready in weeks' },
                  { icon: Target, title: 'Precision', desc: 'Scalable business solutions' },
                ].map((item, i) => (
                  <div key={i} className="glass-card p-6 group">
                    <item.icon
                      className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300"
                      aria-hidden="true"
                    />
                    <h3 className="font-display font-semibold text-text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
