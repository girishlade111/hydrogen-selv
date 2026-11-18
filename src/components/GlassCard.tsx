import type { ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';
import { MOTION_TOKENS } from '../motion/variants';

type GlassVariant = 'default' | 'hero' | 'dense' | 'interactive' | 'footer';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  variant?: GlassVariant;
  className?: string;
}

const VARIANT_CLASSES: Record<GlassVariant, string> = {
  default:
    'rounded-[28px] bg-[#0e0e11]/72 border border-white/[0.085] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-2xl',
  hero:
    'rounded-[30px] bg-[#101013]/76 border border-white/[0.095] shadow-[0_28px_70px_-20px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl',
  dense:
    'rounded-[24px] bg-[#0c0c0f]/82 border border-white/[0.08] shadow-[0_18px_40px_-16px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl',
  interactive:
    'rounded-[28px] bg-[#0e0e11]/74 border border-white/[0.085] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-2xl',
  footer:
    'rounded-[24px] bg-[#0c0c0f]/76 border border-white/[0.08] shadow-[0_16px_38px_-16px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl',
};

export function GlassCard({
  children,
  variant = 'default',
  className = '',
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={`relative overflow-hidden ${VARIANT_CLASSES[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function GlassCardHero(props: Omit<GlassCardProps, 'variant'>) {
  return <GlassCard variant="hero" {...props} />;
}

export function GlassCardDense(props: Omit<GlassCardProps, 'variant'>) {
  return <GlassCard variant="dense" {...props} />;
}

export function GlassCardInteractive({
  className = '',
  ...props
}: Omit<GlassCardProps, 'variant'>) {
  return (
    <GlassCard
      variant="interactive"
      whileHover={{
        y: -2,
        borderColor: 'rgba(255,255,255,0.16)',
        transition: MOTION_TOKENS.springTactile,
      }}
      className={className}
      {...props}
    />
  );
}

export function GlassCardFooter(props: Omit<GlassCardProps, 'variant'>) {
  return <GlassCard variant="footer" {...props} />;
}
