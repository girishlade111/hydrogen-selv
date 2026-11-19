import { Accordion } from '../components/Accordion';
import { BackButton } from '../components/BackButton';
import { ConnectCard } from '../components/ConnectCard';
import { GlassCard, GlassCardHero } from '../components/GlassCard';
import { MotionReveal } from '../components/MotionReveal';
import { NewsletterCard } from '../components/NewsletterCard';
import { PageShell } from '../components/PageShell';
import { PhilosophyCard } from '../components/PhilosophyCard';
import { SeoHead } from '../components/SeoHead';
import { SiteFooter } from '../components/SiteFooter';
import { JOURNEY_PRACTICE, PROFILE, SITE_ASSETS } from '../data/portfolio';

export function AboutPage() {
  return (
    <PageShell>
      <SeoHead
        title="About Girish Lade — Engineer, Product Designer & Developer"
        description="Learn about Girish Balaso Lade, founder of LadeStack. Mechanical Engineering roots, UI/UX interaction design, and modern full-stack web software in Pune, India."
        canonicalPath="/about"
        keywords="About Girish Lade, Girish Balaso Lade, LadeStack Founder, Mechanical Engineer Software Developer, Pune, Web Development"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'About', item: '/about' },
        ]}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About Girish Lade',
          description: 'Background, education, design philosophy, and technical practice of Girish Balaso Lade.',
          url: 'https://ladestack.in/about',
          mainEntity: {
            '@type': 'Person',
            name: 'Girish Balaso Lade',
            jobTitle: 'UI/UX Designer & Full-Stack Developer',
            worksFor: {
              '@type': 'Organization',
              name: 'LadeStack',
              url: 'https://ladestack.in/',
            },
          },
        }}
      />
      {/* 1. Visual Hero Card matching About screenshot */}
      <MotionReveal>
        <GlassCardHero className="overflow-hidden">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <img
              src={SITE_ASSETS.profilePicture}
              alt="Girish Balaso Lade - Developer & Product Designer"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover object-[center_20%]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/35 to-black/20"
            />

            <div className="absolute left-5 top-5">
              <BackButton to="/" label="Back to home" />
            </div>

            <div className="absolute inset-x-6 bottom-6">
              <p className="text-[12px] font-medium tracking-[0.04em] text-zinc-300">
                {PROFILE.supportingPositioning}
              </p>
              <h1 className="mt-1 text-[clamp(2rem,4.6vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-white">
                {PROFILE.displayName}
              </h1>
              <p className="mt-1 text-[13px] text-zinc-400">{PROFILE.location}</p>
            </div>
          </div>
        </GlassCardHero>
      </MotionReveal>

      {/* 2. Introduction & Extended Bio Card */}
      <MotionReveal>
        <GlassCard className="p-6 sm:p-8">
          <p className="text-[15px] font-medium leading-[1.68] text-zinc-100">
            {PROFILE.mediumBio}
          </p>

          <div className="my-5 h-px bg-white/[0.08]" />

          <div className="flex flex-col gap-4">
            {PROFILE.extendedBio.map((paragraph, idx) => (
              <p key={idx} className="text-[14.5px] leading-[1.68] text-zinc-300">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Truthful Mechanical Engineering Education */}
          <div className="mt-6 border-t border-white/[0.08] pt-5">
            <h2 className="text-[12px] font-medium tracking-[0.05em] text-zinc-400 uppercase">
              Education Foundation
            </h2>
            <div className="mt-3 flex flex-col gap-3">
              {PROFILE.education.map((edu) => (
                <div key={edu.qualification}>
                  <p className="text-[14px] font-semibold text-white">{edu.qualification}</p>
                  <p className="text-[13px] text-zinc-300">{edu.institution}</p>
                  <p className="text-[12px] text-zinc-400">{edu.note}</p>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </MotionReveal>

      {/* 3. Journey & Practice Accordion Card (truthful adaptation of Experience card) */}
      <MotionReveal>
        <GlassCard className="p-6 sm:p-7">
          <h2 className="mb-4 text-[clamp(1.5rem,3.4vw,1.9rem)] font-semibold tracking-[-0.025em] text-white">
            Journey &amp; Practice
          </h2>
          <Accordion items={JOURNEY_PRACTICE} variant="detailed" defaultOpenId="mechanical-engineering" />
        </GlassCard>
      </MotionReveal>

      {/* 4. Signature Philosophy Card */}
      <MotionReveal>
        <PhilosophyCard />
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
