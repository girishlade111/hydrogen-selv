import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { buttonVariants } from '../motion/variants';

interface AnimatedButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'dark' | 'ghost';
  to?: string;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  ariaLabel?: string;
}

const STYLES: Record<'primary' | 'dark' | 'ghost', string> = {
  primary:
    'bg-[#f7cb15] text-[#09090b] font-semibold hover:bg-[#ffd93b] shadow-[0_6px_20px_-6px_rgba(247,203,21,0.45)]',
  dark:
    'bg-white/[0.06] text-white/95 font-medium border border-white/[0.1] hover:bg-white/[0.11] hover:border-white/[0.18]',
  ghost:
    'bg-transparent text-zinc-300 font-medium hover:text-white hover:bg-white/[0.06]',
};

export function AnimatedButton({
  children,
  variant = 'dark',
  to,
  href,
  type = 'button',
  onClick,
  disabled = false,
  fullWidth = false,
  className = '',
  ariaLabel,
}: AnimatedButtonProps) {
  const baseClass = `inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0 rounded-xl px-5 py-2.5 text-[14px] leading-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f7cb15] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] disabled:opacity-50 disabled:pointer-events-none ${STYLES[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (to) {
    return (
      <motion.div
        variants={buttonVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        className={fullWidth ? 'w-full' : 'inline-block'}
      >
        <Link to={to} aria-label={ariaLabel} className={baseClass}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
        variants={buttonVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        className={baseClass}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      variants={buttonVariants}
      initial="rest"
      whileHover={disabled ? undefined : 'hover'}
      whileTap={disabled ? undefined : 'tap'}
      className={baseClass}
    >
      {children}
    </motion.button>
  );
}
