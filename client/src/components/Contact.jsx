import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// EmailJS Credentials - Replace with your actual IDs
const EMAILJS_SERVICE_ID = 'service_23xsn4s';
const EMAILJS_TEMPLATE_ID = 'template_s2s3su6';
const EMAILJS_PUBLIC_KEY = 'rGF28wIahPy68F7Sb';

const infoCards = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'imeshnbandara826@gmail.com',
    href: 'mailto:imeshnbandara826@gmail.com',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+94 703564926',
    href: 'tel:+94703564926',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Rambukkana, Sri Lanka',
    href: null,
  },
];

const socials = [
  {
    icon: FaGithub,
    href: 'https://github.com/imeshbandara',
    label: 'GitHub',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/imesh-bandara-57a129388',
    label: 'LinkedIn',
  },
  {
    icon: FaInstagram,
    href: 'https://www.instagram.com/_its.imesh',
    label: 'Instagram',
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage({ type: '', text: '' });

    try {
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
        to_email: 'imeshnbandara826@gmail.com',
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setStatusMessage({
        type: 'success',
        text: "Message sent successfully! I'll get back to you within 24 hours.",
      });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatusMessage({
        type: 'error',
        text: 'Failed to send message. Please try again or email me directly.',
      });
    } finally {
      setIsSending(false);
      // Clear success message after some time, but keep error message longer or until retry
      if (statusMessage.type === 'success') {
        setTimeout(() => setStatusMessage({ type: '', text: '' }), 6000);
      }
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4 md:px-12">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-white mb-16 flex items-center">
          <span className="text-cyan-400 font-mono text-xl mr-2">05.</span> Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {/* ─── LEFT COLUMN ─── */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Let's work together
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md">
                I'm currently open to internship opportunities and freelance projects. 
                Drop me a message and I'll get back to you as soon as possible.
              </p>

              {/* Info Cards */}
              <div className="space-y-4 mb-12">
                {infoCards.map((card) => {
                  const Icon = card.icon;
                  const Wrapper = card.href ? 'a' : 'div';
                  const wrapperProps = card.href
                    ? { href: card.href, target: '_blank', rel: 'noreferrer' }
                    : {};

                  return (
                    <Wrapper
                      key={card.label}
                      {...wrapperProps}
                      className="group flex items-center gap-5 p-4 rounded-xl bg-[#1e293b]/60 border border-slate-800 
                                 hover:border-cyan-400/40 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-400/5 
                                 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 font-mono uppercase tracking-wider">
                          {card.label}
                        </p>
                        <p className="text-base text-slate-200 group-hover:text-cyan-400 transition-colors">
                          {card.value}
                        </p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-11 h-11 rounded-full bg-[#1e293b] border border-slate-800 flex items-center justify-center
                               text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:scale-110
                               transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ─── RIGHT COLUMN — FORM ─── */}
          <form
            onSubmit={handleSubmit}
            className="relative bg-[#1e293b] border border-slate-800 rounded-2xl p-8 md:p-10
                       shadow-xl shadow-black/20 flex flex-col gap-5"
          >
            {/* Decorative glow */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-400/20 via-transparent to-transparent pointer-events-none" />

            <h4 className="text-xl font-bold text-white mb-1 relative">Send me a message</h4>
            <p className="text-slate-500 text-sm mb-2 relative">
              Fill the form and I'll reach out within 24 hours.
            </p>

            {/* Name */}
            <div className="relative">
              <label htmlFor="contact-name" className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-1.5 block">
                Your Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 text-base
                           outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all duration-300"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <label htmlFor="contact-email" className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-1.5 block">
                Your Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 text-base
                           outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all duration-300"
              />
            </div>

            {/* Subject */}
            <div className="relative">
              <label htmlFor="contact-subject" className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-1.5 block">
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 text-base
                           outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all duration-300"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <label htmlFor="contact-message" className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-1.5 block">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Hi Imesh, I'd like to discuss..."
                className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 text-base
                           outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all duration-300 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSending}
              className="relative mt-2 w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 
                         text-[#0f172a] font-bold py-3.5 rounded-lg text-base
                         transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 
                         disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSending ? (
                <>
                  <span className="inline-block w-5 h-5 border-2 border-[#0f172a] border-t-transparent rounded-full animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <FiSend className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {/* Status Notices */}
            {statusMessage.text && (
              <div className={`mt-4 p-4 rounded-lg border text-sm font-medium transition-all duration-300 ${
                statusMessage.type === 'success' 
                  ? 'bg-cyan-400/10 border-cyan-400/30 text-cyan-400' 
                  : 'bg-red-400/10 border-red-400/30 text-red-400'
              }`}>
                {statusMessage.type === 'success' ? '✓ ' : '✕ '}
                {statusMessage.text}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;