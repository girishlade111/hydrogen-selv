import { Check, Link2 } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useParams } from 'react-router-dom';
import { AnimatedButton } from '../components/AnimatedButton';
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
import { MOTION_TOKENS } from '../motion/variants';
import {
  estimateReadingTimeMinutes,
  formatReadingTime,
  getBlogPostBySlug,
  getBlogPostUrl,
  getRelatedBlogPosts,
  getSharedPostTags,
} from '../utils/portfolioHelpers';

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = getBlogPostBySlug(slug);
  const [toastState, setToastState] = useState<'idle' | 'copied' | 'error'>('idle');
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const showToast = (nextState: 'copied' | 'error') => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }
    setToastState(nextState);
    timerRef.current = window.setTimeout(() => {
      setToastState('idle');
    }, 3200);
  };

  const copyWithTextareaFallback = (text: string): boolean => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    let copied = false;
    try {
      copied = document.execCommand('copy');
    } finally {
      document.body.removeChild(textarea);
    }
    return copied;
  };

  const handleCopyLink = async () => {
    if (!article) return;
    const url = getBlogPostUrl(window.location.origin, article.slug);

    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(url);
        showToast('copied');
        return;
      } catch {
        // Fall through to textarea copy fallback when Clipboard API permission is restricted
      }
    }

    try {
      if (copyWithTextareaFallback(url)) {
        showToast('copied');
      } else {
        showToast('error');
      }
    } catch {
      showToast('error');
    }
  };

  if (!article) {
    return (
      <PageShell>
        <SeoHead
          title="Note Not Found — Girish Lade"
          description="The requested technical note could not be found."
          noindex
        />
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

  const relatedPosts = getRelatedBlogPosts(article, BLOG_POSTS, 2);

  return (
    <PageShell>
      <SeoHead
        title={`${article.title} — Girish Lade`}
        description={article.summary.slice(0, 160)}
        canonicalPath={`/blog/${article.slug}`}
        keywords={`${article.tags.join(', ')}, ${article.category}, Girish Lade, LadeStack, Engineering`}
        ogType="article"
        ogImage={article.coverImage.startsWith('http') ? article.coverImage : `https://ladestack.in${article.coverImage}`}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Blog', item: '/blog' },
          { name: article.title, item: `/blog/${article.slug}` },
        ]}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: article.title,
          description: article.summary,
          keywords: article.tags.join(', '),
          articleSection: article.category,
          author: {
            '@type': 'Person',
            name: 'Girish Balaso Lade',
            url: 'https://ladestack.in/',
          },
          publisher: {
            '@type': 'Organization',
            name: 'LadeStack',
            url: 'https://ladestack.in/',
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://ladestack.in/blog/${article.slug}`,
          },
        }}
      />
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

            <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-3">
              <BackButton to="/blog" label="Back to notes" />
              <motion.button
                type="button"
                onClick={handleCopyLink}
                aria-label={toastState === 'copied' ? 'Link copied' : 'Copy Link'}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                transition={MOTION_TOKENS.springTactile}
                className="inline-flex h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-xl border border-white/[0.12] bg-black/45 px-3.5 text-[13px] font-medium text-white/95 backdrop-blur-md transition-colors hover:border-white/[0.22] hover:bg-black/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {toastState === 'copied' ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-white" aria-hidden="true" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Link2 className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Copy Link</span>
                  </>
                )}
              </motion.button>
            </div>

            <div className="absolute inset-x-6 bottom-6">
              <div className="flex flex-wrap items-center gap-2 text-[12px] font-medium tracking-[0.04em] text-zinc-300">
                <span>{article.label}</span>
                <span aria-hidden="true">·</span>
                <span>{article.category}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">
                  {formatReadingTime(estimateReadingTimeMinutes(article))}
                </span>
              </div>
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

            {article.tags.length > 0 && (
              <>
                <div className="mt-1 h-px bg-white/[0.08]" />
                <p className="font-mono text-[12px] leading-relaxed text-zinc-400">
                  <span className="text-zinc-500">Topics: </span>
                  {article.tags.join(' · ')}
                </p>
              </>
            )}
          </article>
        </GlassCard>
      </MotionReveal>

      {/* 3. Related Posts */}
      {relatedPosts.length > 0 && (
        <MotionReveal>
          <GlassCard className="p-6 sm:p-7">
            <section aria-labelledby="related-posts-heading">
              <div className="flex flex-col gap-1">
                <h2
                  id="related-posts-heading"
                  className="text-[18px] font-semibold leading-[1.3] tracking-[-0.015em] text-white"
                >
                  Related Posts
                </h2>
                <p className="text-[13.5px] leading-relaxed text-zinc-400">
                  More technical notes connected by shared topics or category.
                </p>
              </div>

              <div className="mt-4 flex flex-col gap-3">
                {relatedPosts.map((related) => {
                  const sharedTags = getSharedPostTags(article, related);
                  const readLabel = formatReadingTime(estimateReadingTimeMinutes(related));
                  const metaParts = [related.category, readLabel];
                  if (sharedTags.length > 0) {
                    metaParts.push(`Shared: ${sharedTags.slice(0, 2).join(', ')}`);
                  }

                  return (
                    <BlogCard
                      key={related.slug}
                      article={related}
                      metaText={metaParts.join(' · ')}
                    />
                  );
                })}
              </div>
            </section>
          </GlassCard>
        </MotionReveal>
      )}

      <MotionReveal>
        <NewsletterCard />
      </MotionReveal>

      <MotionReveal>
        <ConnectCard />
      </MotionReveal>

      <SiteFooter />

      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {toastState !== 'idle' && (
              <motion.div
                key={toastState}
                role={toastState === 'error' ? 'alert' : 'status'}
                aria-live="polite"
                initial={{ opacity: 0, y: 14, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.96 }}
                transition={MOTION_TOKENS.springTactile}
                className="fixed bottom-20 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2.5 whitespace-nowrap rounded-2xl border border-white/20 bg-[#121216] px-4 py-2.5 text-[13px] font-medium text-white shadow-[0_20px_50px_rgba(0,0,0,0.95)] md:bottom-8"
              >
                {toastState === 'copied' ? (
                  <>
                    <Check className="h-4 w-4 shrink-0 text-white" aria-hidden="true" />
                    <span>Link copied to clipboard</span>
                  </>
                ) : (
                  <span>Unable to copy link automatically. Please copy from your address bar.</span>
                )}
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </PageShell>
  );
}
