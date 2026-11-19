import { AlertCircle, Check, Copy, ExternalLink, Loader2 } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState, type FormEvent } from 'react';
import { PROFILE } from '../data/portfolio';
import { MOTION_TOKENS } from '../motion/variants';
import { buildMailtoHref, validateContactForm } from '../utils/portfolioHelpers';
import { GlassCard } from './GlassCard';

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [status, setStatus] = useState<'idle' | 'preparing' | 'ready' | 'copied'>('idle');
  const [mailtoLink, setMailtoLink] = useState<string>('');
  const [copyError, setCopyError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setCopyError(null);
    const result = validateContactForm({ name, email, message });

    if (!result.valid) {
      setErrors(result.errors);
      setStatus('idle');
      return;
    }

    setErrors({});
    setStatus('preparing');
    const href = buildMailtoHref({ name, email, message });
    setMailtoLink(href);

    // Brief tactile preparation before presenting honest mailto handoff
    window.setTimeout(() => {
      setStatus('ready');
    }, 180);
  };

  const handleCopyDetails = async () => {
    setCopyError(null);
    const text = `To: ${PROFILE.email}\nFrom: ${name.trim()} <${email.trim()}>\n\n${message.trim()}`;
    try {
      await navigator.clipboard.writeText(text);
      setStatus('copied');
    } catch {
      setCopyError('Clipboard access is blocked in this browser. Use the email button or address below.');
    }
  };

  return (
    <GlassCard className="p-6 sm:p-7">
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-1.5 block text-[13px] font-medium text-zinc-300"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
            }}
            placeholder="Your name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            className="w-full rounded-xl border border-white/[0.09] bg-[#08080a]/90 px-4 py-3 text-[14px] text-white placeholder:text-zinc-500 focus:border-white/[0.25] focus:outline-none focus:ring-2 focus:ring-white/40"
          />
          {errors.name && (
            <p id="contact-name-error" className="mt-1.5 flex items-center gap-1.5 text-[12px] text-amber-300">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="mb-1.5 block text-[13px] font-medium text-zinc-300"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
            }}
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            className="w-full rounded-xl border border-white/[0.09] bg-[#08080a]/90 px-4 py-3 text-[14px] text-white placeholder:text-zinc-500 focus:border-white/[0.25] focus:outline-none focus:ring-2 focus:ring-white/40"
          />
          {errors.email && (
            <p id="contact-email-error" className="mt-1.5 flex items-center gap-1.5 text-[12px] text-amber-300">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="mb-1.5 block text-[13px] font-medium text-zinc-300"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
            }}
            placeholder="Share context about your project, product idea, or question..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'contact-message-error' : undefined}
            className="w-full resize-y rounded-xl border border-white/[0.09] bg-[#08080a]/90 px-4 py-3 text-[14px] leading-relaxed text-white placeholder:text-zinc-500 focus:border-white/[0.25] focus:outline-none focus:ring-2 focus:ring-white/40"
          />
          {errors.message && (
            <p id="contact-message-error" className="mt-1.5 flex items-center gap-1.5 text-[12px] text-amber-300">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {errors.message}
            </p>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={status === 'preparing'}
          whileHover={{ scale: 1.012 }}
          whileTap={{ scale: 0.985 }}
          transition={MOTION_TOKENS.springTactile}
          className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-[14px] font-semibold text-[#09090b] shadow-[0_6px_22px_-6px_rgba(255,255,255,0.35)] transition-colors hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-60"
        >
          {status === 'preparing' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Preparing message...
            </>
          ) : (
            'Send Message'
          )}
        </motion.button>

        <AnimatePresence mode="wait">
          {(status === 'ready' || status === 'copied') && mailtoLink && (
            <motion.div
              key="handoff"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              role="status"
              className="rounded-2xl border border-white/[0.1] bg-white/[0.04] p-4 text-[13px] leading-relaxed text-zinc-300"
            >
              <p className="font-semibold text-white">Ready to send via your email app</p>
              <p className="mt-1 text-zinc-400">
                This static portfolio does not store form submissions on a remote server. Open your
                email client with your message pre-filled, or copy it to send to{' '}
                <span className="font-mono text-[12px] text-zinc-200">{PROFILE.email}</span>.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2.5">
                <a
                  href={mailtoLink}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-white px-3.5 py-2 text-[12.5px] font-semibold text-[#09090b] transition-colors hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  Open Email App
                </a>
                <button
                  type="button"
                  onClick={handleCopyDetails}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.12] bg-white/[0.06] px-3.5 py-2 text-[12.5px] font-medium text-white transition-colors hover:bg-white/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {status === 'copied' ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-white" aria-hidden="true" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      Copy Message
                    </>
                  )}
                </button>
              </div>
              {copyError && <p className="mt-2 text-[12px] text-amber-300">{copyError}</p>}
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </GlassCard>
  );
}
