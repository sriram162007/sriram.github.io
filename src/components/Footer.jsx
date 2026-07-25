import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-12">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              <span className="font-display text-sm font-bold tracking-tight text-primary">
                RAMXCREATES
              </span>
            </div>

            <nav className="flex gap-8" aria-label="Footer navigation">
              <a
                href="https://github.com/sriram162007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-muted transition-colors duration-300 hover:text-primary"
              >
                GitHub
              </a>
              <a
                href="https://wa.me/918248261165"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-muted transition-colors duration-300 hover:text-primary"
              >
                WhatsApp
              </a>
              <a
                href="mailto:ramxcreates@gmail.com"
                className="text-sm text-text-muted transition-colors duration-300 hover:text-primary"
              >
                Email
              </a>
            </nav>

            <p className="text-sm text-text-muted">
              &copy; {new Date().getFullYear()} RAMXCREATES. All rights reserved.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
