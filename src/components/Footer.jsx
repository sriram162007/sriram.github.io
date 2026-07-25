import { motion } from 'framer-motion';
import { CircleDot } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08]" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2.5">
            <CircleDot className="h-3 w-3 text-accent animate-pulse" aria-hidden="true" />
            <span className="font-display text-sm font-bold tracking-tight text-accent">
              RAMXCREATES
            </span>
          </div>

          <nav className="flex gap-8" aria-label="Footer navigation">
            <a
              href="https://github.com/sriram162007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted transition-colors duration-300 hover:text-accent link-underline"
            >
              GitHub
            </a>
            <a
              href="https://wa.me/918248261165"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted transition-colors duration-300 hover:text-accent link-underline"
            >
              WhatsApp
            </a>
            <a
              href="mailto:ramxcreates@gmail.com"
              className="text-sm text-text-muted transition-colors duration-300 hover:text-accent link-underline"
            >
              Email
            </a>
            <a
              href="#contact"
              className="text-sm text-text-muted transition-colors duration-300 hover:text-accent link-underline"
            >
              Contact
            </a>
          </nav>

          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} RAMXCREATES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
