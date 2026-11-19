import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import type { ProjectItem } from '../data/portfolio';
import { MOTION_TOKENS, imageVariants } from '../motion/variants';

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.985 }}
      transition={MOTION_TOKENS.springTactile}
      className="group relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#0e0e11]/80 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.85)]"
    >
      <Link
        to={`/projects/${project.slug}`}
        aria-label={`View ${project.title} project details`}
        className="relative block aspect-[4/3] w-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#fdfbd4]"
      >
        <motion.img
          src={project.coverImage}
          alt={project.coverAlt}
          referrerPolicy="no-referrer"
          variants={imageVariants}
          className="h-full w-full object-cover object-center"
        />

        {/* Subtle editorial scrim ensuring 4.5:1+ contrast for top metadata and bottom title */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/35 to-black/38 transition-opacity duration-300 group-hover:from-black/95"
        />

        {/* Subtle project domain tag at top-left as clean unboxed text (no pill spam) */}
        <div className="absolute inset-x-6 top-5 flex items-center justify-between gap-3">
          <span className="text-[12px] font-medium tracking-[0.02em] text-zinc-300/90 drop-shadow">
            {project.category}
          </span>
          {project.statusNote && (
            <span className="text-[11px] font-medium text-amber-200/90 drop-shadow">
              {project.statusNote}
            </span>
          )}
        </div>

        {/* Lower-left title + lower-right arrow matching Projects reference */}
        <div className="absolute inset-x-6 bottom-5 flex items-end justify-between gap-4">
          <div className="min-w-0">
            <motion.h2
              variants={{
                rest: { x: 0 },
                hover: { x: 3, transition: MOTION_TOKENS.springTactile },
              }}
              className="truncate text-[24px] font-semibold tracking-[-0.02em] text-white sm:text-[26px]"
            >
              {project.title}
            </motion.h2>
            <p className="mt-1 line-clamp-2 max-w-[38ch] text-[13px] leading-snug text-zinc-300/90">
              {project.shortDescription}
            </p>
          </div>

          <motion.span
            aria-hidden="true"
            variants={{
              rest: { x: 0, y: 0 },
              hover: { x: 3, y: -1, transition: MOTION_TOKENS.springTactile },
            }}
            className="mb-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.14] bg-black/45 text-white backdrop-blur-md transition-colors group-hover:border-white/[0.28] group-hover:bg-white/[0.14]"
          >
            <ArrowRight className="h-4 w-4" />
          </motion.span>
        </div>
      </Link>
    </motion.div>
  );
}
