import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { Mail, Terminal, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <ScrollReveal>
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
            className="glass-card relative overflow-hidden p-10 sm:p-16 md:p-24 text-center"
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 hover:opacity-100 transition-opacity duration-700"
              aria-hidden="true"
            />
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full -translate-y-1/2"
              aria-hidden="true"
            />

            <div className="relative z-10 space-y-8">
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4 block">
                Get in touch
              </span>
              <h2
                id="contact-heading"
                className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary"
              >
                Ready to automate?
              </h2>
              <p className="max-w-2xl mx-auto text-lg leading-relaxed text-text-secondary">
                I'm currently accepting new projects. If you have a business workflow that
                needs intelligence and automation, let's talk.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-5 pt-4">
                <a
                  href="https://wa.me/918248261165"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn inline-flex items-center gap-3 rounded-2xl bg-primary px-10 py-5 font-display font-semibold text-background transition-all hover:shadow-[0_0_40px_rgba(6,182,212,0.35)] hover:scale-105 active:scale-95"
                >
                  Hire Me on WhatsApp
                  <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </a>
                <div className="flex gap-4">
                  <a
                    href="mailto:ramxcreates@gmail.com"
                    className="glass-card p-4 flex items-center gap-2 transition-all hover:bg-white/[0.06] hover:-translate-y-1"
                    aria-label="Send email"
                  >
                    <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                    <span className="text-sm font-medium text-text-secondary">Email</span>
                  </a>
                  <a
                    href="https://github.com/sriram162007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-4 flex items-center gap-2 transition-all hover:bg-white/[0.06] hover:-translate-y-1"
                    aria-label="View GitHub profile"
                  >
                    <Terminal className="h-5 w-5 text-primary" aria-hidden="true" />
                    <span className="text-sm font-medium text-text-secondary">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
