import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { MOTION_TOKENS } from '../motion/variants';

interface BackButtonProps {
  to?: string;
  label?: string;
  className?: string;
}

export function BackButton({ to, label = 'Go back', className = '' }: BackButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      aria-label={label}
      whileHover={{ scale: 1.05, x: -1 }}
      whileTap={{ scale: 0.94 }}
      transition={MOTION_TOKENS.springTactile}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.12] bg-black/45 text-white/90 backdrop-blur-md transition-colors hover:border-white/[0.22] hover:bg-black/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${className}`}
    >
      <ArrowLeft className="h-4 w-4" aria-hidden="true" />
    </motion.button>
  );
}
