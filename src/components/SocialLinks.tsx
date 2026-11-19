import { Codepen, Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { PROFILE } from '../data/portfolio';
import { MOTION_TOKENS } from '../motion/variants';

const ICON_MAP = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  codepen: Codepen,
  email: Mail,
} as const;

export function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {PROFILE.socialLinks.map((item) => {
        const Icon = ICON_MAP[item.id];
        const isExternal = item.href.startsWith('http');

        return (
          <motion.a
            key={item.id}
            href={item.href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            aria-label={item.label}
            title={item.label}
            whileHover={{ y: -2, scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            transition={MOTION_TOKENS.springTactile}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-zinc-300 transition-colors hover:border-white/[0.2] hover:bg-white/[0.1] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fdfbd4]"
          >
            <Icon className="h-[17px] w-[17px]" aria-hidden="true" />
          </motion.a>
        );
      })}
    </div>
  );
}
