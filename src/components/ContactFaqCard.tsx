import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { CONTACT_FAQS } from '../data/portfolio';
import { MOTION_TOKENS, accordionVariants } from '../motion/variants';
import { GlassCard } from './GlassCard';

export function ContactFaqCard() {
  // Start with all 3 visible or toggleable; default first two open so it matches the rich chat-bubble reference while remaining interactive!
  const [openIds, setOpenIds] = useState<string[]>(CONTACT_FAQS.map((f) => f.id));

  const toggle = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <GlassCard className="p-6 sm:p-7">
      <h2 className="text-center text-[13px] font-medium tracking-[0.02em] text-zinc-300">
        Frequently Asked Questions
      </h2>

      <div className="mt-6 flex flex-col gap-5">
        {CONTACT_FAQS.map((item) => {
          const isOpen = openIds.includes(item.id);
          return (
            <div key={item.id} className="flex flex-col gap-2.5">
              {/* Right-aligned bright white question bubble matching reference Contact screenshot */}
              <div className="flex justify-end">
                <motion.button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.985 }}
                  transition={MOTION_TOKENS.springTactile}
                  className="inline-flex max-w-[85%] items-center gap-2 rounded-2xl rounded-br-sm bg-white px-4 py-3 text-left text-[13.5px] font-medium leading-snug text-[#09090b] shadow-sm transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f7cb15]"
                >
                  <span>{item.question}</span>
                  <motion.span
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={MOTION_TOKENS.springTactile}
                    className="shrink-0 text-zinc-600"
                  >
                    <ChevronDown className="h-3.5 w-3.5" />
                  </motion.span>
                </motion.button>
              </div>

              {/* Left-aligned dark translucent answer bubble */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer"
                    variants={accordionVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    className="overflow-hidden"
                  >
                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-2xl rounded-bl-sm border border-white/[0.08] bg-black/50 px-4 py-3.5 text-[13.5px] leading-relaxed text-zinc-200">
                        {item.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
}
