import { AnimatedButton } from '../components/AnimatedButton';
import { BackButton } from '../components/BackButton';
import { GlassCardHero } from '../components/GlassCard';
import { PageShell } from '../components/PageShell';
import { SeoHead } from '../components/SeoHead';
import { SiteFooter } from '../components/SiteFooter';

export function NotFoundPage() {
  return (
    <PageShell>
      <SeoHead
        title="Page Not Found — Girish Lade"
        description="The page you requested does not exist in this portfolio."
        noindex
      />
      <GlassCardHero className="flex min-h-[260px] flex-col justify-between p-7">
        <div>
          <BackButton to="/" label="Back to home" />
        </div>
        <div className="mt-8">
          <p className="font-mono text-[12px] text-zinc-400">404</p>
          <h1 className="mt-1 text-[28px] font-bold tracking-[-0.03em] text-white">
            Page not found
          </h1>
          <p className="mt-2 text-[14px] text-zinc-400">
            The page you requested doesn&apos;t exist in this portfolio.
          </p>
          <div className="mt-6">
            <AnimatedButton to="/" variant="primary">
              Return Home
            </AnimatedButton>
          </div>
        </div>
      </GlassCardHero>
      <SiteFooter />
    </PageShell>
  );
}
