import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import type { BlogArticle } from '../data/portfolio';
import { MOTION_TOKENS } from '../motion/variants';

interface BlogCardProps {
  article: BlogArticle;
  metaText?: string;
}

export function BlogCard({ article, metaText }: BlogCardProps) {
  const secondaryMeta = metaText ?? `${article.label} · ${article.category}`;

  return (
    <motion.div
      whileHover={{ x: 2 }}
      whileTap={{ scale: 0.99 }}
      transition={MOTION_TOKENS.springTactile}
    >
      <Link
        to={`/blog/${article.slug}`}
        aria-label={`${article.title} — ${secondaryMeta}`}
        className="group flex items-center gap-4 rounded-2xl p-2 -mx-2 transition-colors hover:bg-white/[0.045] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f7cb15]"
      >
        <div className="h-[72px] w-[104px] shrink-0 overflow-hidden rounded-xl border border-white/[0.08] bg-zinc-900 sm:h-[78px] sm:w-[116px]">
          <img
            src={article.coverImage}
            alt={article.coverAlt}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="line-clamp-2 text-[15px] font-semibold leading-[1.35] text-white transition-colors group-hover:text-white sm:text-[16px]">
            {article.title}
          </h3>
          <p className="mt-1.5 text-[12px] font-medium leading-[1.4] text-zinc-400">
            {secondaryMeta}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
