export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
            <span className="font-display text-sm font-bold tracking-tight text-text-primary">
              RAMXCREATES
            </span>
          </div>

          <nav className="flex flex-wrap gap-6" aria-label="Footer navigation">
            <a
              href="https://github.com/sriram162007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary transition-colors duration-200 hover:text-accent link-underline"
            >
              GitHub
            </a>
            <a
              href="https://wa.me/918248261165"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary transition-colors duration-200 hover:text-accent link-underline"
            >
              WhatsApp
            </a>
            <a
              href="mailto:ramxcreates@gmail.com"
              className="text-sm text-text-secondary transition-colors duration-200 hover:text-accent link-underline"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/sri-ram16"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary transition-colors duration-200 hover:text-accent link-underline"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/ramxcreates"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary transition-colors duration-200 hover:text-accent link-underline"
            >
              Instagram
            </a>
            <a
              href="#contact"
              className="text-sm text-text-secondary transition-colors duration-200 hover:text-accent link-underline"
            >
              Contact
            </a>
          </nav>

          <p className="text-sm text-text-muted">
            &copy; {currentYear} RAMXCREATES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
