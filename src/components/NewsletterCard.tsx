import { Check, Mail } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState, type FormEvent } from 'react';
import { MOTION_TOKENS } from '../motion/variants';
import { buildNewsletterMailtoHref, validateNewsletterEmail } from '../utils/portfolioHelpers';
import { GlassCard } from './GlassCard';

export function NewsletterCard() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const check = validateNewsletterEmail(email);
    if (!check.valid) {
      setError(check.error ?? 'Please enter a valid email address.');
      setSubmittedEmail(null);
      return;
    }

    setError(null);
    const cleaned = email.trim();
    try {
      const existing = JSON.parse(localStorage.getItem('girish_updates_waitlist') || '[]');
      if (Array.isArray(existing) && !existing.includes(cleaned)) {
        localStorage.setItem('girish_updates_waitlist', JSON.stringify([...existing, cleaned]));
      }
    } catch {
      // Ignore storage quota / restricted mode errors
    }
    setSubmittedEmail(cleaned);
    setEmail('');
  };

  return (
    <GlassCard className="p-7 sm:p-8">
      <h2 className="text-[clamp(1.6rem,3.4vw,2rem)] font-semibold leading-[1.14] tracking-[-0.025em] text-white">
        From my desk{' '}
        <br />
        to your inbox.
      </h2>

      <form onSubmit={handleSubmit} noValidate className="mt-6">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address for updates
        </label>
        <div className="flex items-center gap-2 rounded-2xl border border-white/[0.08] bg-[#08080a]/90 p-1.5 pl-4 focus-within:border-white/[0.22] focus-within:ring-2 focus-within:ring-white/40">
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError(null);
            }}
            placeholder="name@email.com"
            autoComplete="email"
            className="min-w-0 flex-1 bg-transparent py-2 text-[14px] text-white placeholder:text-zinc-500 focus:outline-none"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={MOTION_TOKENS.springTactile}
            className="shrink-0 whitespace-nowrap rounded-xl bg-white px-4 py-2.5 text-[13px] font-semibold text-[#09090b] transition-colors hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Notify Me
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          {error && (
            <motion.p
              key="error"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              role="alert"
              className="mt-2.5 text-[12.5px] font-medium text-amber-300"
            >
              {error}
            </motion.p>
          )}
          {submittedEmail && !error && (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              role="status"
              className="mt-3 rounded-xl border border-white/[0.08] bg-white/[0.04] p-3 text-[12.5px] leading-relaxed text-zinc-300"
            >
              <div className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" aria-hidden="true" />
                <div>
                  <p className="font-medium text-white">
                    No automated mailing list is connected yet.
                  </p>
                  <p className="mt-0.5 text-zinc-400">
                    Your address ({submittedEmail}) was saved locally in this browser. To request
                    updates directly, open a quick email note:
                  </p>
                  <a
                    href={buildNewsletterMailtoHref(submittedEmail)}
                    className="mt-2 inline-flex items-center gap-1.5 font-medium text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                    Email admin@ladestack.in
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>

      <p className="mt-3.5 text-[12.5px] leading-relaxed text-zinc-400">
        New LadeStack tools, technical notes, and product updates when mailing list delivery opens.
      </p>
    </GlassCard>
  );
}
