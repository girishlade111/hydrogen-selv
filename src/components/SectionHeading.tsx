interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  size = 'md',
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  const titleSize =
    size === 'lg'
      ? 'text-[clamp(1.9rem,3.6vw,2.35rem)] leading-[1.12] tracking-[-0.025em]'
      : size === 'sm'
      ? 'text-[18px] leading-[1.3] tracking-[-0.015em]'
      : 'text-[clamp(1.5rem,3vw,1.85rem)] leading-[1.18] tracking-[-0.02em]';

  return (
    <div className={`flex flex-col gap-1.5 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="text-[12px] font-medium tracking-[0.04em] text-zinc-400">
          {eyebrow}
        </span>
      )}
      <h2 className={`font-semibold text-white ${titleSize}`}>{title}</h2>
      {subtitle && (
        <p className="mt-0.5 text-[14px] leading-relaxed text-zinc-400">{subtitle}</p>
      )}
    </div>
  );
}
