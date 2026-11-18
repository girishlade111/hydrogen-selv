import type { ReactNode } from 'react';
import { GlassCard } from './GlassCard';

interface ProjectDetailSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function ProjectDetailSection({
  title,
  children,
  className = '',
}: ProjectDetailSectionProps) {
  return (
    <GlassCard className={`p-6 sm:p-7 ${className}`}>
      <h2 className="text-[13px] font-medium tracking-[0.04em] text-zinc-400">{title}</h2>
      <div className="mt-3">{children}</div>
    </GlassCard>
  );
}
