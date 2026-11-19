import { motion } from 'motion/react';
import { BackButton } from '../components/BackButton';
import { BlogCard } from '../components/BlogCard';
import { ConnectCard } from '../components/ConnectCard';
import { GlassCard, GlassCardHero } from '../components/GlassCard';
import { MotionReveal } from '../components/MotionReveal';
import { NewsletterCard } from '../components/NewsletterCard';
import { PageShell } from '../components/PageShell';
import { SeoHead } from '../components/SeoHead';
import { SiteFooter } from '../components/SiteFooter';
import { BLOG_POSTS } from '../data/portfolio';
import { staggerContainerVariants, staggerItemVariants } from '../motion/variants';

export function BlogPage() {
  return (
    <PageShell>
      <SeoHead
        title="Notes & Writing — Girish Lade"
        description="Technical notes and articles by Girish Lade on local-first web architecture, in-browser developer runtimes, documentation systems, and practical UI craft."
        canonicalPath="/blog"
        keywords="Girish Lade Blog, Web Development, Local-First, Browser Tools, Software Architecture, UI Engineering"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Blog', item: '/blog' },
        ]}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Notes & Writing — Girish Lade',
          description: 'Technical notes on local-first apps, browser runtimes, documentation, and UI craft.',
          url: 'https://ladestack.in/blog',
          author: {
            '@type': 'Person',
            name: 'Girish Balaso Lade',
            url: 'https://ladestack.in/',
          },
          blogPost: BLOG_POSTS.map((post) => ({
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.summary,
            url: `https://ladestack.in/blog/${post.slug}`,
            keywords: post.tags.join(', '),
          })),
        }}
      />
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
