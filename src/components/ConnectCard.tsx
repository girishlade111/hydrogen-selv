import { GlassCard } from './GlassCard';
import { SocialLinks } from './SocialLinks';

export function ConnectCard() {
  return (
    <GlassCard className="px-7 py-10 text-center sm:px-9 sm:py-12">
      <p className="text-[12px] font-medium tracking-[0.02em] text-zinc-400">
        Have a question or an idea?
      </p>
      <h2 className="mt-2.5 text-[clamp(1.75rem,3.6vw,2.15rem)] font-semibold tracking-[-0.025em] text-white">
        Let&apos;s connect
      </h2>
      <div className="mt-6">
        <SocialLinks />
      </div>
    </GlassCard>
  );
}
