import { PROFILE } from '../data/portfolio';
import { GlassCard } from './GlassCard';

export function PhilosophyCard() {
  return (
    <GlassCard className="px-7 py-10 text-center sm:px-9 sm:py-12">
      {/* Subtle misty atmospheric horizon glow inspired by the signature highlight card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 h-44 -translate-y-1/2 opacity-55"
        style={{
          background:
            'radial-gradient(ellipse 72% 48% at 50% 50%, rgba(255,255,255,0.2) 0%, rgba(160,160,175,0.08) 45%, transparent 78%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent"
      />

      <div className="relative z-10 flex flex-col items-center justify-between gap-10">
        <span className="text-[12px] font-medium tracking-[0.04em] text-zinc-400">
          Product Philosophy
        </span>

        <p
          aria-label="Useful software"
          className="text-[clamp(2.6rem,7vw,3.6rem)] font-bold leading-none tracking-[-0.04em] text-white drop-shadow-[0_4px_24px_rgba(255,255,255,0.14)]"
        >
          USEFUL
        </p>

        <div className="max-w-[30ch] space-y-1">
          <p className="text-[13px] font-medium leading-relaxed text-zinc-200">
            {PROFILE.philosophyTagline}
          </p>
          <p className="text-[12px] leading-relaxed text-zinc-400">
            {PROFILE.philosophySupporting}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}
