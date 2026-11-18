import { motion } from 'motion/react';
import { BackButton } from '../components/BackButton';
import { BlogCard } from '../components/BlogCard';
import { ConnectCard } from '../components/ConnectCard';
import { GlassCard, GlassCardHero } from '../components/GlassCard';
import { MotionReveal } from '../components/MotionReveal';
import { NewsletterCard } from '../components/NewsletterCard';
import { PageShell } from '../components/PageShell';
import { SiteFooter } from '../components/SiteFooter';
import { BLOG_POSTS } from '../data/portfolio';
import { staggerContainerVariants, staggerItemVariants } from '../motion/variants';

export function BlogPage() {
  return (
    <PageShell>
      {/* Top Title Card matching Blog screenshot */}
      <MotionReveal>
        <GlassCardHero className="flex min-h-[196px] flex-col justify-between p-6 sm:p-7">
          <div>
            <BackButton to="/" label="Back to home" />
          </div>
          <div className="mt-8">
            <h1 className="text-[clamp(2rem,4.5vw,2.5rem)] font-bold tracking-[-0.03em] text-white">
              Notes &amp; Writing
            </h1>
            <p className="mt-1.5 text-[14px] text-zinc-400">
              Technical notes on local-first apps, browser runtimes, documentation, and UI craft.
            </p>
          </div>
        </GlassCardHero>
      </MotionReveal>

      {/* Large dark card containing vertical article list */}
      <MotionReveal>
        <GlassCard className="p-6 sm:p-7">
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-3.5"
          >
            {BLOG_POSTS.map((post) => (
              <motion.div key={post.slug} variants={staggerItemVariants}>
                <BlogCard article={post} />
              </motion.div>
            ))}
          </motion.div>
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
