import { BackButton } from '../components/BackButton';
import { ConnectCard } from '../components/ConnectCard';
import { ContactFaqCard } from '../components/ContactFaqCard';
import { ContactForm } from '../components/ContactForm';
import { GlassCardHero } from '../components/GlassCard';
import { MotionReveal } from '../components/MotionReveal';
import { NewsletterCard } from '../components/NewsletterCard';
import { PageShell } from '../components/PageShell';
import { SeoHead } from '../components/SeoHead';
import { SiteFooter } from '../components/SiteFooter';
import { PROFILE } from '../data/portfolio';

export function ContactPage() {
  return (
    <PageShell>
      <SeoHead
        title="Contact Girish Lade — Developer & LadeStack Founder"
        description="Get in touch with Girish Balaso Lade for web development projects, UI/UX interaction design consulting, developer tools, and engineering collaborations."
        canonicalPath="/contact"
        keywords="Contact Girish Lade, Hire Frontend Developer Pune, Hire UI UX Designer India, LadeStack Contact"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Contact', item: '/contact' },
        ]}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Girish Lade',
          description: 'Get in touch with Girish Balaso Lade for collaborations and inquiries.',
          url: 'https://ladestack.in/contact',
          mainEntity: {
            '@type': 'Person',
            name: 'Girish Balaso Lade',
            email: 'admin@ladestack.in',
            url: 'https://ladestack.in/',
          },
        }}
      />
      {/* 1. Large Title Card matching Contact screenshot */}
      <MotionReveal>
        <GlassCardHero className="flex min-h-[196px] flex-col justify-between p-6 sm:p-7">
          <div>
            <BackButton to="/" label="Back to home" />
          </div>
          <div className="mt-8">
            <h1 className="text-[clamp(2rem,4.5vw,2.5rem)] font-bold tracking-[-0.03em] text-white">
              Get in touch
            </h1>
            <p className="mt-1.5 text-[14px] text-zinc-400">
              Reach out at{' '}
              <a
                href={`mailto:${PROFILE.email}`}
                className="font-mono text-[13px] text-zinc-200 underline decoration-white/25 underline-offset-4 hover:text-white"
              >
                {PROFILE.email}
              </a>{' '}
              or compose a message below.
            </p>
          </div>
        </GlassCardHero>
      </MotionReveal>

      {/* 2. Contact Form Card */}
      <MotionReveal>
        <ContactForm />
      </MotionReveal>

      {/* 3. FAQ Chat-Bubble Card */}
      <MotionReveal>
        <ContactFaqCard />
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
