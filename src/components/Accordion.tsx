import {
  ChevronDown,
  Code2,
  Cog,
  Globe,
  Layers,
  Layout,
  Plus,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import type { AccordionEntry } from '../data/portfolio';
import { MOTION_TOKENS, accordionVariants } from '../motion/variants';

const JOURNEY_ICON_MAP: Record<string, LucideIcon> = {
  mechanical: Cog,
  'mechanical-engineering': Cog,
  design: Layout,
  'ui-ux-design': Layout,
  fullstack: Code2,
  'fullstack-dev': Code2,
  browser: Globe,
  'browser-first': Globe,
  ai: Sparkles,
  'ai-engineering': Sparkles,
  ladestack: Layers,
};

interface AccordionProps {
  items: AccordionEntry[];
  variant?: 'pill' | 'detailed';
  defaultOpenId?: string | null;
}

export function Accordion({ items, variant = 'pill', defaultOpenId = null }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  if (variant === 'detailed') {
    return (
      <div className="flex flex-col divide-y divide-white/[0.06]">
        {items.map((item) => {
          const isOpen = openId === item.id;
          const IconComponent =
            (item.iconName && JOURNEY_ICON_MAP[item.iconName]) ||
            JOURNEY_ICON_MAP[item.id] ||
            Layers;

          return (
            <div key={item.id} className="py-1 first:pt-0 last:pb-0">
              <button
                type="button"
                onClick={() => toggle(item.id)}
                aria-expanded={isOpen}
                className="group flex w-full items-center justify-between gap-3.5 rounded-2xl py-3 px-2 -mx-2 text-left transition-colors hover:bg-white/[0.035] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <div className="flex min-w-0 items-center gap-3.5">
                  <span
                    aria-hidden="true"
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-200 ${
                      isOpen
                        ? 'border-white/40 bg-white/10 text-white shadow-[0_0_12px_rgba(255,255,255,0.15)]'
                        : 'border-white/[0.08] bg-[#141418]/90 text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] group-hover:border-white/[0.16] group-hover:text-white'
                    }`}
                  >
                    <IconComponent className="h-[18px] w-[18px]" strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[14px] font-semibold text-white sm:text-[15px]">
                      {item.title}
                    </p>
                    {item.subtitle && (
                      <p className="truncate text-[12px] text-zinc-400">{item.subtitle}</p>
                    )}
                  </div>
                </div>
                <motion.span
                  aria-hidden="true"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={MOTION_TOKENS.springTactile}
                  className={`shrink-0 transition-colors ${
                    isOpen ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'
                  }`}
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    variants={accordionVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    className="overflow-hidden"
                  >
                    <p className="pb-3.5 pl-[54px] pr-2 text-[13.5px] leading-relaxed text-zinc-300">
                      {item.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2.5">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-2xl border border-white/[0.08] bg-black/35 transition-colors hover:border-white/[0.14]"
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
            >
              <span className="text-[15px] font-medium text-white">{item.title}</span>
              <motion.span
                aria-hidden="true"
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={MOTION_TOKENS.springTactile}
                className="shrink-0 text-zinc-400"
              >
                <Plus className="h-4 w-4" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  variants={accordionVariants}
                  initial="collapsed"
                  animate="expanded"
                  exit="collapsed"
                  className="overflow-hidden"
                >
                  <p className="border-t border-white/[0.06] px-4 py-3 text-[13.5px] leading-relaxed text-zinc-300">
                    {item.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
