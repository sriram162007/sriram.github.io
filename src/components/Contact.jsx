import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Mail,
  Briefcase,
  Camera,
  MapPin,
  GitBranch,
  Sparkles,
  Send,
  User,
  AtSign,
  FileText,
  CheckCircle2,
  Loader2,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'ramxcreates@gmail.com',
    href: 'mailto:ramxcreates@gmail.com',
  },
  {
    icon: Briefcase,
    title: 'LinkedIn',
    value: 'https://www.linkedin.com/in/sri-ram16',
    href: 'https://www.linkedin.com/in/sri-ram16',
    external: true,
  },
  {
    icon: Camera,
    title: 'Instagram',
    value: 'https://www.instagram.com/ramxcreates',
    href: 'https://www.instagram.com/ramxcreates',
    external: true,
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Chennai, Tamil Nadu, India',
    href: '#',
  },
];

const socials = [
  { icon: GitBranch, href: 'https://github.com/sriram162007', label: 'GitHub' },
  { icon: Briefcase, href: 'https://www.linkedin.com/in/sri-ram16', label: 'LinkedIn' },
  { icon: Camera, href: 'https://www.instagram.com/ramxcreates', label: 'Instagram' },
  { icon: Mail, href: 'mailto:ramxcreates@gmail.com', label: 'Email' },
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

function InputField({ id, label, type = 'text', value, onChange, error, Icon: LabelIcon }) {
  const [focused, setFocused] = useState(false);

  return (
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
        className={`w-full rounded-xl border bg-tertiary-bg py-3.5 pl-11 pr-4 text-sm text-text-primary outline-none transition-all duration-200 ${
          focused
            ? 'border-accent/40'
            : 'border-border-subtle'
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
        className={`absolute left-11 top-1/2 -translate-y-1/2 pointer-events-none text-sm transition-colors duration-200 ${
          focused ? 'text-accent' : 'text-text-secondary'
        }`}
      >
        {label}
      </motion.label>
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

function TextareaField({ id, label, value, onChange, error }) {
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
        className={`w-full rounded-xl border bg-tertiary-bg py-3.5 px-4 pt-8 text-sm text-text-primary outline-none transition-all duration-200 resize-none ${
          focused
            ? 'border-accent/40'
            : 'border-border-subtle'
        } ${error ? 'border-red-400/60' : ''}`}
      />
      <motion.label
        htmlFor={id}
        animate={{
          y: focused || value ? -20 : 0,
          scale: focused || value ? 0.85 : 1,
        }}
        transition={{ duration: 0.2 }}
        className={`absolute left-4 top-5 pointer-events-none text-sm transition-colors duration-200 origin-left ${
          focused ? 'text-accent' : 'text-text-secondary'
        }`}
      >
        {label}
      </motion.label>
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

function ContactInfoCard({ item, index }) {
  const Icon = item.icon;
  return (
    <motion.a
      href={item.href}
      target={item.external ? '_blank' : undefined}
      rel={item.external ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group flex items-start gap-4 rounded-xl p-5 transition-colors duration-200 hover:bg-tertiary-bg/50"
    >
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <h4 className="font-display font-semibold text-text-primary text-sm sm:text-base mb-1">
          {item.title}
        </h4>
        <p className="text-xs sm:text-sm text-text-secondary break-all leading-relaxed">
          {item.value}
        </p>
      </div>
      {item.external && (
        <ExternalLink className="h-4 w-4 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-auto flex-shrink-0" aria-hidden="true" />
      )}
    </motion.a>
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
  const [submitStatus, setSubmitStatus] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

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
      className="relative bg-secondary-bg py-24 sm:py-32"
      aria-labelledby="contact-heading"
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
            Contact
          </motion.span>
          <motion.h2
            id="contact-heading"
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary mb-6"
          >
            Let&apos;s Build <span className="text-accent">Together</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-lg text-text-secondary">
            Have an idea, internship opportunity, collaboration, or project in mind? I&apos;d love to connect and discuss how we can build something meaningful.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT SIDE - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? 'visible' : 'hidden'}
            variants={itemVariants}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-5">
              {contactInfo.map((item, i) => (
                <ContactInfoCard key={item.title} item={item} index={i} />
              ))}
            </div>

            <div className="pt-8">
              <h3 className="font-display text-xl font-bold text-text-primary mb-4">
                Social Links
              </h3>
              <div className="flex gap-4">
                {socials.map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-12 h-12 rounded-full border border-border-subtle text-text-secondary transition-all hover:border-accent/30 hover:text-accent hover:bg-accent/5"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" aria-hidden="true" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <motion.a
                href="https://wa.me/918248261165"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -2 }}
                className="inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 font-display font-semibold text-background transition-all hover:shadow-[0_0_24px_rgba(34,197,94,0.3)]"
              >
                Let&apos;s talk on WhatsApp
                <Send className="h-4 w-4" aria-hidden="true" />
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? 'visible' : 'hidden'}
            variants={itemVariants}
            className="lg:col-span-7"
          >
            <div className="space-y-6">
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <InputField
                    id="name"
                    label="Full Name"
                    value={formState.name}
                    onChange={handleChange('name')}
                    error={errors.name}
                    Icon={User}
                  />
                  <InputField
                    id="email"
                    label="Email Address"
                    type="email"
                    value={formState.email}
                    onChange={handleChange('email')}
                    error={errors.email}
                    Icon={AtSign}
                  />
                </div>

                <div className="mt-6">
                  <InputField
                    id="subject"
                    label="Subject"
                    value={formState.subject}
                    onChange={handleChange('subject')}
                    error={errors.subject}
                    Icon={FileText}
                  />
                </div>

                <div className="mt-6">
                  <TextareaField
                    id="message"
                    label="Message"
                    value={formState.message}
                    onChange={handleChange('message')}
                    error={errors.message}
                  />
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 flex items-center gap-2 rounded-xl bg-accent/10 border border-accent/20 px-4 py-3 text-sm text-accent"
                  >
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    Message sent successfully! I&apos;ll get back to you soon.
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 flex items-center gap-2 rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400"
                  >
                    <AlertCircle className="h-4 w-4" aria-hidden="true" />
                    Something went wrong. Please try again later.
                  </motion.div>
                )}

                <div className="mt-8">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full rounded-full bg-accent px-8 py-4 font-display font-semibold text-background transition-all hover:shadow-[0_0_24px_rgba(34,197,94,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="h-4 w-4" aria-hidden="true" />
                        Send Message
                      </span>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
