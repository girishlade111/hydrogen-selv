import { useParams } from 'react-router-dom';
import { AnimatedButton } from '../components/AnimatedButton';
import { BackButton } from '../components/BackButton';
import { ConnectCard } from '../components/ConnectCard';
import { GlassCard, GlassCardHero } from '../components/GlassCard';
import { MotionReveal } from '../components/MotionReveal';
import { NewsletterCard } from '../components/NewsletterCard';
import { PageShell } from '../components/PageShell';
import { SiteFooter } from '../components/SiteFooter';
import { getBlogPostBySlug } from '../utils/portfolioHelpers';

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = getBlogPostBySlug(slug);

  if (!article) {
    return (
      <PageShell>
        <GlassCardHero className="p-7 text-center">
          <h1 className="text-[24px] font-semibold text-white">Note not found</h1>
          <p className="mt-2 text-[14px] text-zinc-400">
            The requested technical note could not be found.
          </p>
          <div className="mt-6 flex justify-center">
            <AnimatedButton to="/blog" variant="primary">
              Back to Notes
            </AnimatedButton>
          </div>
        </GlassCardHero>
        <SiteFooter />
      </PageShell>
    );
  }

  return (
    <PageShell>
      {/* 1. Large Visual Hero Card matching Blog Detail screenshot */}
      <MotionReveal>
        <GlassCardHero className="overflow-hidden">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <img
              src={article.coverImage}
              alt={article.coverAlt}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/40 to-black/25"
            />

            <div className="absolute left-5 top-5">
              <BackButton to="/blog" label="Back to notes" />
            </div>

            <div className="absolute inset-x-6 bottom-6">
              <p className="text-[12px] font-medium tracking-[0.04em] text-zinc-300">
                {article.label}
              </p>
              <h1 className="mt-1.5 text-[clamp(1.7rem,4.2vw,2.3rem)] font-bold leading-[1.12] tracking-[-0.025em] text-white">
                {article.title}
              </h1>
            </div>
          </div>
        </GlassCardHero>
      </MotionReveal>

      {/* 2. Article Body Card */}
      <MotionReveal>
        <GlassCard className="p-6 sm:p-8">
          <article className="flex flex-col gap-5">
            <p className="text-[15.5px] font-medium leading-[1.65] text-zinc-100">
              {article.summary}
            </p>

            <div className="h-px bg-white/[0.08]" />

            {article.paragraphs.map((section, idx) => (
              <section key={idx} className="flex flex-col gap-2">
                {section.heading && (
                  <h2 className="text-[17px] font-semibold tracking-[-0.015em] text-white">
                    {section.heading}
                  </h2>
                )}
                <p className="text-[14.5px] leading-[1.7] text-zinc-300">{section.body}</p>
              </section>
            ))}
          </article>
        </GlassCard>
      </MotionReveal>

      <MotionReveal>
        <NewsletterCard />
      </MotionReveal>

      <MotionReveal>
        <ConnectCard />
      </MotionReveal>

      <SiteFooter />
    </PageShell>
  );
}
