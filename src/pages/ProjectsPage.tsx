import { motion } from 'motion/react';
import { BackButton } from '../components/BackButton';
import { ConnectCard } from '../components/ConnectCard';
import { GlassCardHero } from '../components/GlassCard';
import { MotionReveal } from '../components/MotionReveal';
import { NewsletterCard } from '../components/NewsletterCard';
import { PageShell } from '../components/PageShell';
import { ProjectCard } from '../components/ProjectCard';
import { SeoHead } from '../components/SeoHead';
import { SiteFooter } from '../components/SiteFooter';
import { PROJECTS } from '../data/portfolio';
import { staggerContainerVariants, staggerItemVariants } from '../motion/variants';

export function ProjectsPage() {
  return (
    <PageShell>
      <SeoHead
        title="Projects by Girish Lade — Browser IDEs, PDF Tools & Web Apps"
        description="Full catalog of projects built by Girish Lade: LadeStack ecosystem, GB Coder online IDE, LS PDF toolkit, MD2PDF, Bharat Land Converter, and developer tools."
        canonicalPath="/projects"
        keywords="Girish Lade Projects, GB Coder, LS PDF, Bharat Land Converter, MD2PDF, Swift Resume, LadeStack, Developer Tools"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Projects', item: '/projects' },
        ]}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Projects by Girish Lade',
          description: 'Selected LadeStack products, developer utilities, and web experiments.',
          url: 'https://ladestack.in/projects',
          hasPart: PROJECTS.map((p) => ({
            '@type': 'SoftwareApplication',
            name: p.title,
            description: p.shortDescription,
            url: p.url,
            applicationCategory: p.category,
          })),
        }}
      />
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
