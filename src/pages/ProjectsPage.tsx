import { motion } from 'motion/react';
import { BackButton } from '../components/BackButton';
import { ConnectCard } from '../components/ConnectCard';
import { GlassCardHero } from '../components/GlassCard';
import { MotionReveal } from '../components/MotionReveal';
import { NewsletterCard } from '../components/NewsletterCard';
import { PageShell } from '../components/PageShell';
import { ProjectCard } from '../components/ProjectCard';
import { SiteFooter } from '../components/SiteFooter';
import { PROJECTS } from '../data/portfolio';
import { staggerContainerVariants, staggerItemVariants } from '../motion/variants';

export function ProjectsPage() {
  return (
    <PageShell>
      {/* Top Title Card matching Projects reference */}
      <MotionReveal>
        <GlassCardHero className="flex min-h-[196px] flex-col justify-between p-6 sm:p-7">
          <div>
            <BackButton to="/" label="Back to home" />
          </div>
          <div className="mt-8">
            <h1 className="text-[clamp(2rem,4.5vw,2.5rem)] font-bold tracking-[-0.03em] text-white">
              Projects
            </h1>
            <p className="mt-1.5 text-[14px] text-zinc-400">
              Selected LadeStack products, developer utilities, and web experiments.
            </p>
          </div>
        </GlassCardHero>
      </MotionReveal>

      {/* Stacked large project cards */}
      <motion.section
        aria-label="Project list"
        variants={staggerContainerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-4"
      >
        {PROJECTS.map((project) => (
          <motion.div key={project.slug} variants={staggerItemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.section>

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
