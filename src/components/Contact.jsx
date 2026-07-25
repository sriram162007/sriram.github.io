import { useState, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import {
  Mail,
  Briefcase,
  Camera,
  MapPin,
  GitBranch,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Send,
  User,
  AtSign,
  FileText,
  MessageSquare,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from 'lucide-react';

const servicesData = [
  {
    icon: Mail,
    title: 'Email',
    value: 'ramxcreates@gmail.com',
    href: 'mailto:ramxcreates@gmail.com',
    color: 'primary',
  },
  {
    icon: Briefcase,
    title: 'LinkedIn',
    value: 'https://www.linkedin.com/in/sri-ram16',
    href: 'https://www.linkedin.com/in/sri-ram16',
    color: 'secondary',
    external: true,
  },
  {
    icon: Camera,
    title: 'Instagram',
    value: 'https://www.instagram.com/ramxcreates',
    href: 'https://www.instagram.com/ramxcreates',
    color: 'accent',
    external: true,
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Chennai, Tamil Nadu, India',
    href: '#',
    color: 'primary',
  },
];

const colorMap = {
  primary: {
    iconBg: 'bg-primary/10',
    iconText: 'text-primary',
    glow: 'rgba(6,182,212,0.2)',
  },
  secondary: {
    iconBg: 'bg-secondary/10',
    iconText: 'text-secondary',
    glow: 'rgba(59,130,246,0.2)',
  },
  accent: {
    iconBg: 'bg-accent/10',
    iconText: 'text-accent',
    glow: 'rgba(34,211,238,0.2)',
  },
};

function ContactCard({ item, index }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [3, -3]);
  const rotateY = useTransform(x, [-100, 100], [-3, 3]);

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

  const colors = colorMap[item.color] || colorMap.primary;
  const Icon = item.icon;

  return (
    <motion.a
      href={item.href}
      target={item.external ? '_blank' : undefined}
      rel={item.external ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="block"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, perspective: 800, transformStyle: 'preserve-3d' }}
        className="glass-card p-5 sm:p-6 transition-all duration-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.08)] group"
      >
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center ${colors.iconText} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <h4 className="font-display font-semibold text-text-primary text-sm sm:text-base mb-1">
              {item.title}
            </h4>
            <p className="text-xs sm:text-sm text-text-muted break-all leading-relaxed">
              {item.value}
            </p>
          </div>
          {item.external && (
            <ExternalLink className="h-4 w-4 text-text-muted ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
          )}
        </div>
      </motion.div>
    </motion.a>
  );
}

function SocialButton({ icon: Icon, href, label, color, index }) {
  const colors = colorMap[color] || colorMap.primary;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
      whileTap={{ scale: 0.95 }}
      className={`w-12 h-12 rounded-full glass-card flex items-center justify-center ${colors.iconText} transition-all duration-300 hover:shadow-[0_0_24px_var(--color-primary-glow)]`}
      aria-label={label}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </motion.a>
  );
}

function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Aurora gradients */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-primary/8 rounded-full blur-[120px] animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-secondary/8 rounded-full blur-[100px] animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-accent/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: '6s' }} />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-primary/30"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

function FloatingLabelInput({ id, label, type = 'text', value, onChange, error, Icon: LabelIcon }) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <LabelIcon className="h-4 w-4 text-text-muted" aria-hidden="true" />
        </div>
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`w-full rounded-2xl border bg-white/[0.02] py-4 pl-11 pr-4 text-sm text-text-primary outline-none transition-all duration-300 ${
            focused
              ? 'border-primary/40 shadow-[0_0_20px_rgba(6,182,212,0.1)]'
              : 'border-white/[0.08]'
          } ${error ? 'border-red-400/60' : ''}`}
          placeholder={focused ? '' : ' '}
        />
        <motion.label
          htmlFor={id}
          animate={{
            y: focused || value ? -28 : 0,
            scale: focused || value ? 0.85 : 1,
          }}
          transition={{ duration: 0.2 }}
          className={`absolute left-11 top-1/2 -translate-y-1/2 pointer-events-none text-sm transition-colors duration-300 ${
            focused ? 'text-primary' : 'text-text-muted'
          }`}
        >
          {label}
        </motion.label>
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1.5 text-xs text-red-400 flex items-center gap-1 pl-1"
        >
          <AlertCircle className="h-3 w-3" aria-hidden="true" />
          {error}
        </motion.p>
      )}
    </div>
  );
}

function FloatingLabelTextarea({ id, label, value, onChange, error }) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={5}
        className={`w-full rounded-2xl border bg-white/[0.02] py-4 px-4 text-sm text-text-primary outline-none transition-all duration-300 resize-none ${
          focused
            ? 'border-primary/40 shadow-[0_0_20px_rgba(6,182,212,0.1)]'
            : 'border-white/[0.08]'
        } ${error ? 'border-red-400/60' : ''}`}
      />
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1.5 text-xs text-red-400 flex items-center gap-1 pl-1"
        >
          <AlertCircle className="h-3 w-3" aria-hidden="true" />
          {error}
        </motion.p>
      )}
    </div>
  );
}

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const validate = () => {
    const newErrors = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required';
    if (!formState.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formState.email)) newErrors.email = 'Email is invalid';
    if (!formState.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formState.message.trim()) newErrors.message = 'Message is required';
    else if (formState.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Placeholder for EmailJS integration
    // Replace this block with EmailJS sendForm logic
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field) => (e) => {
    setFormState((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <BackgroundEffects />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-6"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Contact
          </motion.span>

          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary mb-6"
          >
            Let&apos;s Build <span className="gradient-text">Together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg leading-relaxed text-text-secondary"
          >
            Have an idea, internship opportunity, collaboration, or project in mind? I'd love to connect and discuss how we can build something meaningful.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* LEFT SIDE */}
          <div className="lg:col-span-5 space-y-6">
            {/* Introduction Card */}
            <ScrollReveal>
              <div className="glass-card p-6 sm:p-8">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-text-primary mb-4">
                  Let&apos;s Connect
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-text-secondary">
                  I&apos;m always excited to connect with people who enjoy building great products, solving real problems, and exploring AI. Whether it&apos;s an internship, freelance opportunity, collaboration, or simply a conversation about technology, feel free to reach out.
                </p>
              </div>
            </ScrollReveal>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {servicesData.map((item, i) => (
                <ContactCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 1 }}
                className="glass-card p-6 sm:p-8 md:p-10"
              >
                <form onSubmit={handleSubmit} noValidate>
                  <div className="space-y-6">
                    {/* Full Name */}
                    <FloatingLabelInput
                      id="name"
                      label="Full Name"
                      value={formState.name}
                      onChange={handleChange('name')}
                      error={errors.name}
                      Icon={User}
                    />

                    {/* Email Address */}
                    <FloatingLabelInput
                      id="email"
                      label="Email Address"
                      type="email"
                      value={formState.email}
                      onChange={handleChange('email')}
                      error={errors.email}
                      Icon={AtSign}
                    />

                    {/* Subject */}
                    <FloatingLabelInput
                      id="subject"
                      label="Subject"
                      value={formState.subject}
                      onChange={handleChange('subject')}
                      error={errors.subject}
                      Icon={FileText}
                    />

                    {/* Message */}
                    <div>
                      <FloatingLabelTextarea
                        id="message"
                        label="Message"
                        value={formState.message}
                        onChange={handleChange('message')}
                        error={errors.message}
                      />
                    </div>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-4 py-3 text-sm text-emerald-400"
                      >
                        <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                        Message sent successfully! I&apos;ll get back to you soon.
                      </motion.div>
                    )}
                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400"
                      >
                        <AlertCircle className="h-4 w-4" aria-hidden="true" />
                        Something went wrong. Please try again later.
                      </motion.div>
                    )}

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 font-display font-semibold text-background transition-all hover:shadow-[0_0_32px_rgba(6,182,212,0.35)] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" aria-hidden="true" />
                            Send Message
                          </>
                        )}
                      </motion.button>

                      <a
                        href="#"
                        className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-2xl border border-white/[0.12] bg-white/[0.03] px-8 py-4 font-display font-semibold text-text-primary transition-all hover:border-primary/40 hover:bg-white/[0.06] hover:scale-105 active:scale-95"
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        Download Resume
                      </a>
                    </div>
                  </div>
                </form>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="flex justify-center gap-5 mt-16"
        >
          <SocialButton icon={GitBranch} href="https://github.com/sriram162007" label="GitHub" color="primary" index={0} />
          <SocialButton icon={Briefcase} href="https://www.linkedin.com/in/sri-ram16" label="LinkedIn" color="secondary" index={1} />
          <SocialButton icon={Camera} href="https://www.instagram.com/ramxcreates" label="Instagram" color="accent" index={2} />
          <SocialButton icon={Mail} href="mailto:ramxcreates@gmail.com" label="Email" color="primary" index={3} />
        </motion.div>
      </div>
    </section>
  );
}
