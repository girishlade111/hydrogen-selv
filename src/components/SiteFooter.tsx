import { Link } from 'react-router-dom';
import { PROFILE } from '../data/portfolio';
import { GlassCardFooter } from './GlassCard';

export function SiteFooter() {
  return (
    <GlassCardFooter className="px-6 py-4 sm:px-7">
      <footer className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-[12.5px] text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="font-medium text-zinc-200">{PROFILE.displayName}</span>
          <span aria-hidden="true">·</span>
          <span>{PROFILE.location}</span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/projects"
            className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f7cb15]"
          >
            Projects
          </Link>
          <a
            href={PROFILE.brandUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-200 transition-colors hover:text-[#f7cb15] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f7cb15]"
          >
            {PROFILE.brandName}
          </a>
        </div>
      </footer>
    </GlassCardFooter>
  );
}
