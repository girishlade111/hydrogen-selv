import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { pageVariants } from '../motion/variants';

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

interface PageShellProps {
  children: ReactNode;
  className?: string;
}

export function PageShell({ children, className = '' }: PageShellProps) {
  return (
    <PageTransition>
      <main
        className={`relative z-10 mx-auto w-full max-w-[540px] px-4 pt-8 pb-28 sm:px-5 md:pt-12 md:pb-16 ${className}`}
      >
        <div className="flex flex-col gap-4">{children}</div>
      </main>
    </PageTransition>
  );
}
