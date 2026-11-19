import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { MOTION_TOKENS } from '../motion/variants';
import { normalizeRouteSection } from '../utils/portfolioHelpers';
import { NAV_ITEMS } from './FloatingNavigation';

export function MobileNavigation() {
  const { pathname } = useLocation();
  const activeSection = normalizeRouteSection(pathname);

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden"
    >
      <div className="flex w-full max-w-[360px] items-center justify-between rounded-full border border-white/[0.1] bg-[#0d0d10]/88 px-2 py-1.5 shadow-[0_18px_45px_-10px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-2xl">
        {NAV_ITEMS.map(({ path, label, icon: Icon }) => {
          const isActive = activeSection === path;
          return (
            <Link
              key={path}
              to={path}
              aria-label={label}
              aria-current={isActive ? 'page' : undefined}
              className={`relative flex h-11 min-w-[48px] flex-1 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fdfbd4] ${
                isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="mobileNavActive"
                  transition={MOTION_TOKENS.springTactile}
                  className="absolute inset-x-1.5 inset-y-0.5 rounded-full border border-white/[0.14] bg-white/[0.14]"
                />
              )}
              <Icon className="relative z-10 h-[18px] w-[18px]" aria-hidden="true" />
              <span className="sr-only">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
