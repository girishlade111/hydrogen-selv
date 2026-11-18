import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { cardVariants, sectionVariants } from '../motion/variants';

interface MotionRevealProps {
  children: ReactNode;
  variant?: 'card' | 'section';
  delay?: number;
  className?: string;
}

export function MotionReveal({
  children,
  variant = 'card',
  delay = 0,
  className = '',
}: MotionRevealProps) {
  const chosen = variant === 'card' ? cardVariants : sectionVariants;

  return (
    <motion.div
      variants={chosen}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      transition={delay ? { delay } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}
