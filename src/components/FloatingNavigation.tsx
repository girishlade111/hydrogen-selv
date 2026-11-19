import { Briefcase, FileText, Home, Send, User } from 'lucide-react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { MOTION_TOKENS, navItemVariants } from '../motion/variants';
import { normalizeRouteSection, type NavSection } from '../utils/portfolioHelpers';

export const NAV_ITEMS: { path: NavSection; label: string; icon: typeof Home }[] = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/projects', label: 'Projects', icon: Briefcase },
  { path: '/blog', label: 'Notes', icon: FileText },
  { path: '/about', label: 'About', icon: User },
  { path: '/contact', label: 'Contact', icon: Send },
];

export function FloatingNavigation() {
  const { pathname } = useLocation();
  const activeSection = normalizeRouteSection(pathname);

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 md:flex"
    >
      <div className="flex flex-col items-center gap-1.5 rounded-full border border-white/[0.09] bg-[#0e0e11]/78 p-1.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-2xl">
        {NAV_ITEMS.map(({ path, label, icon: Icon }) => {
          const isActive = activeSection === path;
          return (
            <motion.div
              key={path}
              variants={navItemVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="relative"
            >
              <Link
                to={path}
                aria-label={label}
                aria-current={isActive ? 'page' : undefined}
                title={label}
                className={`group relative flex h-10 w-10 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="desktopNavActive"
                    transition={MOTION_TOKENS.springTactile}
                    className="absolute inset-0 rounded-full border border-white/[0.14] bg-white/[0.14] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
                  />
                )}
                <Icon className="relative z-10 h-[17px] w-[17px]" aria-hidden="true" />
                <span className="pointer-events-none absolute right-13 whitespace-nowrap rounded-lg border border-white/[0.1] bg-[#111114]/95 px-2.5 py-1 text-[12px] font-medium text-white opacity-0 shadow-lg backdrop-blur-md transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  {label}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </nav>
  );
}
