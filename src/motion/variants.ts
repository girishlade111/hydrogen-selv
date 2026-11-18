import type { Transition, Variants } from 'motion/react';

export const MOTION_TOKENS = {
  easeOutExpo: [0.16, 1, 0.3, 1] as const,
  easeSubtle: [0.22, 1, 0.36, 1] as const,
  durationFast: 0.18,
  durationBase: 0.36,
  durationSlow: 0.52,
  springTactile: {
    type: 'spring',
    stiffness: 420,
    damping: 32,
    mass: 0.8,
  } satisfies Transition,
  springGentle: {
    type: 'spring',
    stiffness: 280,
    damping: 28,
    mass: 0.9,
  } satisfies Transition,
};

export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 12,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.36,
      ease: MOTION_TOKENS.easeOutExpo,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.2,
      ease: MOTION_TOKENS.easeSubtle,
    },
  },
};

export const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.44,
      ease: MOTION_TOKENS.easeOutExpo,
    },
  },
};

export const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: MOTION_TOKENS.easeOutExpo,
    },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: MOTION_TOKENS.easeOutExpo,
    },
  },
};

export const buttonVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.018,
    transition: MOTION_TOKENS.springTactile,
  },
  tap: {
    scale: 0.975,
    transition: MOTION_TOKENS.springTactile,
  },
};

export const navItemVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.06,
    transition: MOTION_TOKENS.springTactile,
  },
  tap: {
    scale: 0.94,
    transition: MOTION_TOKENS.springTactile,
  },
};

export const imageVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.028,
    transition: {
      duration: 0.45,
      ease: MOTION_TOKENS.easeOutExpo,
    },
  },
};

export const accordionVariants: Variants = {
  collapsed: {
    opacity: 0,
    height: 0,
    transition: {
      height: { duration: 0.24, ease: MOTION_TOKENS.easeOutExpo },
      opacity: { duration: 0.16 },
    },
  },
  expanded: {
    opacity: 1,
    height: 'auto',
    transition: {
      height: { duration: 0.3, ease: MOTION_TOKENS.easeOutExpo },
      opacity: { duration: 0.24, delay: 0.05 },
    },
  },
};

export const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};
