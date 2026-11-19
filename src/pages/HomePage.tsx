import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Accordion } from '../components/Accordion';
import { AnimatedButton } from '../components/AnimatedButton';
import { BlogCard } from '../components/BlogCard';
import { ConnectCard } from '../components/ConnectCard';
import { GlassCard, GlassCardHero } from '../components/GlassCard';
import { MotionReveal } from '../components/MotionReveal';
import { NewsletterCard } from '../components/NewsletterCard';
import { PageShell } from '../components/PageShell';
import { PhilosophyCard } from '../components/PhilosophyCard';
import { SeoHead } from '../components/SeoHead';
import { SiteFooter } from '../components/SiteFooter';
import { BLOG_POSTS, CAPABILITIES, PROFILE, PROJECTS, SITE_ASSETS } from '../data/portfolio';
import { MOTION_TOKENS, staggerContainerVariants, staggerItemVariants } from '../motion/variants';

const PREVIEW_PROJECTS = [
  PROJECTS[1], // GB Coder
  PROJECTS[0], // LadeStack (center)
  PROJECTS[2], // LS PDF
];

export function HomePage() {
  return (
    <PageShell>
      <SeoHead
        title="Girish Lade — UI/UX Designer, Full-Stack Developer & LadeStack Founder"
        description="Explore the portfolio of Girish Balaso Lade, a UI/UX designer and full-stack developer in Pune, India creating developer tools, web apps, and LadeStack products."
        canonicalPath="/"
        keywords="Girish Lade, Girish Balaso Lade, UI/UX Designer, Full-Stack Developer, LadeStack, Pune, React, TypeScript, Developer Tools"
        ogType="website"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          '@id': 'https://ladestack.in/#girishlade',
          name: 'Girish Balaso Lade',
          alternateName: ['Girish Lade', 'LadeStack Founder'],
          url: 'https://ladestack.in/',
          jobTitle: 'UI/UX Designer & Full-Stack Developer',
          worksFor: {
            '@type': 'Organization',
            name: 'LadeStack',
            url: 'https://ladestack.in/',
          },
          sameAs: [
            'https://github.com/girishlade111',
            'https://www.linkedin.com/in/girish-lade/',
            'https://www.instagram.com/girish_lade_/',
            'https://codepen.io/Girish-Lade-the-looper',
          ],
        }}
      />
      {/* 1. Identity / Hero Card */}
      <MotionReveal>
        <GlassCardHero className="p-6 sm:p-7">
          <div className="text-center">
            <p className="text-[11px] font-medium tracking-[0.12em] text-zinc-400 uppercase">
              {PROFILE.eyebrow}
            </p>
          </div>

          <div className="mt-5 flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:gap-6">
            {/* Girish Lade Official Profile Picture */}
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-[22px] border border-white/[0.14] bg-zinc-900 shadow-2xl sm:h-32 sm:w-32">
              <img
                src={SITE_ASSETS.profilePicture}
                alt="Girish Balaso Lade - Developer & Product Designer"
                className="h-full w-full object-cover object-[center_15%]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-inset ring-white/10"
              />
            </div>

            <div className="text-center sm:text-left">
              <h1 className="text-[clamp(1.95rem,4.5vw,2.45rem)] font-bold leading-[1.06] tracking-[-0.03em] text-white">
                {PROFILE.displayName}
              </h1>
              <p className="mt-1.5 text-[13px] font-medium text-zinc-400">{PROFILE.location}</p>
              <p className="mt-1.5 text-[13.5px] font-medium text-zinc-200">
                {PROFILE.supportingPositioning}
              </p>
            </div>
          </div>

          <div className="mt-5 border-t border-white/[0.07] pt-4 text-center sm:text-left">
            <p className="text-[15.5px] font-semibold tracking-[-0.01em] text-white">
              {PROFILE.primaryStatement}
            </p>
            <p className="mt-1.5 text-[14px] leading-[1.6] text-zinc-300">{PROFILE.shortBio}</p>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <AnimatedButton to="/projects" variant="primary">
              Explore My Work
            </AnimatedButton>
            <AnimatedButton to="/about" variant="dark">
              About Me
            </AnimatedButton>
          </div>
        </GlassCardHero>
      </MotionReveal>

      {/* 2. Featured Portfolio Preview Card */}
      <MotionReveal>
        <GlassCard className="p-6 text-center sm:p-7">
          <p className="text-[12px] font-medium tracking-[0.04em] text-zinc-400">Portfolio</p>

          <Link
            to="/projects"
            aria-label="Browse selected projects"
            className="group relative mx-auto mt-5 flex h-52 max-w-[380px] items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fdfbd4] sm:h-56"
          >
            {/* Left fanned card */}
            <motion.div
              whileHover={{ rotate: -9, x: -12 }}
              transition={MOTION_TOKENS.springGentle}
              className="absolute left-3 h-40 w-36 -rotate-6 overflow-hidden rounded-2xl border border-white/[0.12] bg-zinc-900 shadow-2xl sm:left-5 sm:h-44 sm:w-40"
            >
              <img
                src={PREVIEW_PROJECTS[0].coverImage}
                alt={PREVIEW_PROJECTS[0].title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-2.5 left-3 text-[12px] font-semibold text-white">
                {PREVIEW_PROJECTS[0].title}
              </span>
            </motion.div>

            {/* Right fanned card */}
            <motion.div
              whileHover={{ rotate: 9, x: 12 }}
              transition={MOTION_TOKENS.springGentle}
              className="absolute right-3 h-40 w-36 rotate-6 overflow-hidden rounded-2xl border border-white/[0.12] bg-zinc-900 shadow-2xl sm:right-5 sm:h-44 sm:w-40"
            >
              <img
                src={PREVIEW_PROJECTS[2].coverImage}
                alt={PREVIEW_PROJECTS[2].title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-2.5 right-3 text-right text-[12px] font-semibold text-white">
                {PREVIEW_PROJECTS[2].title}
              </span>
            </motion.div>

            {/* Center focal card */}
            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              transition={MOTION_TOKENS.springTactile}
              className="relative z-10 h-44 w-40 overflow-hidden rounded-2xl border border-white/[0.18] bg-zinc-950 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.9)] sm:h-48 sm:w-44"
            >
              <img
                src={PREVIEW_PROJECTS[1].coverImage}
                alt={PREVIEW_PROJECTS[1].title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-x-3 bottom-3 text-left">
                <p className="text-[10px] font-medium text-zinc-300">Ecosystem</p>
                <p className="text-[14px] font-semibold text-white">
                  {PREVIEW_PROJECTS[1].title}
                </p>
              </div>
            </motion.div>
          </Link>

          <div className="mt-6 flex justify-center">
            <AnimatedButton to="/projects" variant="dark">
              View Projects
            </AnimatedButton>
          </div>
        </GlassCard>
      </MotionReveal>

      {/* 3. Subtle Positioning Marquee Strip */}
      <MotionReveal>
        <GlassCard variant="dense" className="overflow-hidden py-3.5 px-4">
          <div className="relative flex overflow-hidden">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                repeat: Infinity,
                duration: 24,
                ease: 'linear',
              }}
              className="flex shrink-0 items-center gap-6 whitespace-nowrap text-[13px]"
            >
              {[0, 1].map((idx) => (
                <div key={idx} className="flex items-center gap-6 pr-6">
                  <span className="font-medium text-zinc-400">
                    <strong className="font-semibold text-white">LadeStack</strong> browser-first utilities
                  </span>
                  <span aria-hidden="true" className="text-zinc-600">
                    ·
                  </span>
                  <span className="font-medium text-zinc-400">
                    <strong className="font-semibold text-white">UI/UX</strong> &amp; full-stack craft
                  </span>
                  <span aria-hidden="true" className="text-zinc-600">
                    ·
                  </span>
                  <span className="font-medium text-zinc-400">
                    <strong className="font-semibold text-white">Local-first</strong> software
                  </span>
                  <span aria-hidden="true" className="text-zinc-600">
                    ·
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </GlassCard>
      </MotionReveal>

      {/* 4. Capabilities Card */}
      <MotionReveal>
        <GlassCard className="p-6 sm:p-7">
          <p className="mb-4 text-[12px] font-medium tracking-[0.04em] text-zinc-400">
            Capabilities
          </p>
          <Accordion items={CAPABILITIES} variant="pill" />
        </GlassCard>
      </MotionReveal>

      {/* 5. Personal Philosophy Quote Card (no fabricated client testimonials) */}
      <MotionReveal>
        <GlassCard className="p-7 sm:p-8">
          <blockquote className="text-[clamp(1.25rem,2.8vw,1.5rem)] font-semibold leading-[1.3] tracking-[-0.02em] text-white">
            &ldquo;{PROFILE.philosophyQuote}&rdquo;
          </blockquote>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.06] font-mono text-[12px] font-semibold text-white">
                GL
              </div>
              <div>
                <p className="text-[13.5px] font-semibold text-white">{PROFILE.displayName}</p>
                <p className="text-[12px] text-zinc-400">Founder, {PROFILE.brandName}</p>
              </div>
            </div>

            {/* Subtle product/tech mark indicators instead of fake client avatars */}
            <div aria-hidden="true" className="flex items-center -space-x-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.12] bg-zinc-900 font-mono text-[10px] font-semibold text-zinc-300">
                LS
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.12] bg-zinc-800 font-mono text-[10px] font-semibold text-zinc-300">
                TS
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.12] bg-zinc-900 font-mono text-[10px] font-semibold text-[#fdfbd4]">
                UI
              </span>
            </div>
          </div>
        </GlassCard>
      </MotionReveal>

      {/* 6. Notes & Writing Preview Card */}
      <MotionReveal>
        <GlassCard className="p-6 sm:p-8">
          <h2 className="text-[clamp(1.6rem,3.4vw,2rem)] font-semibold tracking-[-0.025em] text-white">
            Notes &amp; Writing
          </h2>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-5 flex flex-col gap-3"
          >
            {BLOG_POSTS.slice(0, 4).map((post) => (
              <motion.div key={post.slug} variants={staggerItemVariants}>
                <BlogCard article={post} />
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-6 flex justify-center">
            <AnimatedButton to="/blog" variant="dark">
              View all
            </AnimatedButton>
          </div>
        </GlassCard>
      </MotionReveal>

      {/* 7. Signature Product Philosophy Highlight Card */}
      <MotionReveal>
        <PhilosophyCard />
      </MotionReveal>

      {/* 8. Newsletter Card */}
      <MotionReveal>
        <NewsletterCard />
      </MotionReveal>

      {/* 9. Connect Card */}
      <MotionReveal>
        <ConnectCard />
      </MotionReveal>

      {/* 10. Footer */}
      <SiteFooter />
    </PageShell>
  );
}
