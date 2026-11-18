import { ExternalLink, FolderGit2 } from 'lucide-react';
import { AnimatedButton } from '../components/AnimatedButton';
import { BackButton } from '../components/BackButton';
import { ConnectCard } from '../components/ConnectCard';
import { GlassCard, GlassCardHero } from '../components/GlassCard';
import { MotionReveal } from '../components/MotionReveal';
import { NewsletterCard } from '../components/NewsletterCard';
import { PageShell } from '../components/PageShell';
import { ProjectDetailSection } from '../components/ProjectDetailSection';
import { SiteFooter } from '../components/SiteFooter';
import { getProjectBySlug } from '../utils/portfolioHelpers';
import { useParams } from 'react-router-dom';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <PageShell>
        <GlassCardHero className="p-7 text-center">
          <h1 className="text-[24px] font-semibold text-white">Project not found</h1>
          <p className="mt-2 text-[14px] text-zinc-400">
            The requested project could not be located in the portfolio catalog.
          </p>
          <div className="mt-6 flex justify-center">
            <AnimatedButton to="/projects" variant="primary">
              Back to Projects
            </AnimatedButton>
          </div>
        </GlassCardHero>
        <SiteFooter />
      </PageShell>
    );
  }

  return (
    <PageShell>
      {/* 1. Hero Image & Title Card */}
      <MotionReveal>
        <GlassCardHero className="overflow-hidden">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <img
              src={project.coverImage}
              alt={project.coverAlt}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/25"
            />
            <div className="absolute left-5 top-5">
              <BackButton to="/projects" label="Back to projects" />
            </div>
            <div className="absolute inset-x-6 bottom-6">
              <p className="text-[12px] font-medium tracking-[0.03em] text-zinc-300">
                {project.category}
                {project.statusNote ? ` · ${project.statusNote}` : ''}
              </p>
              <h1 className="mt-1.5 text-[clamp(1.85rem,4.5vw,2.45rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white">
                {project.title}
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] px-6 py-4">
            <span className="text-[13px] text-zinc-400">{project.role}</span>
            <div className="flex flex-wrap items-center gap-2.5">
              {project.repositoryUrl && (
                <AnimatedButton href={project.repositoryUrl} variant="dark">
                  <FolderGit2 className="h-4 w-4" aria-hidden="true" />
                  Source
                </AnimatedButton>
              )}
              <AnimatedButton href={project.url} variant="primary">
                Visit Project
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </AnimatedButton>
            </div>
          </div>
        </GlassCardHero>
      </MotionReveal>

      {/* 2. Overview Card */}
      <MotionReveal>
        <ProjectDetailSection title="Overview">
          <p className="text-[15px] leading-[1.68] text-zinc-200">{project.overview}</p>
          {project.disclaimer && (
            <p className="mt-4 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] px-4 py-3 text-[13px] leading-relaxed text-amber-100/90">
              {project.disclaimer}
            </p>
          )}
        </ProjectDetailSection>
      </MotionReveal>

      {/* 3. Primary Use Cases */}
      <MotionReveal>
        <ProjectDetailSection title="Primary Use Cases">
          <div className="flex flex-col gap-4">
            {project.useCases.map((useCase, index) => (
              <div
                key={useCase.title}
                className="border-t border-white/[0.07] pt-3.5 first:border-t-0 first:pt-0"
              >
                <h3 className="text-[15px] font-semibold text-white">
                  0{index + 1}. {useCase.title}
                </h3>
                <p className="mt-1 text-[14px] leading-relaxed text-zinc-300">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </ProjectDetailSection>
      </MotionReveal>

      {/* 4. Technologies & Focus */}
      <MotionReveal>
        <ProjectDetailSection title="Technologies & Focus">
          <p className="text-[14px] leading-relaxed text-zinc-300">
            {project.technologies.join('  ·  ')}
          </p>
        </ProjectDetailSection>
      </MotionReveal>

      {/* 5. External Links Summary */}
      <MotionReveal>
        <GlassCard className="flex flex-wrap items-center justify-between gap-4 p-6">
          <div>
            <p className="text-[12px] font-medium text-zinc-400">Official Project Link</p>
            <p className="mt-0.5 font-mono text-[13px] text-zinc-200">{project.url}</p>
          </div>
          <AnimatedButton href={project.url} variant="dark">
            Open Live URL
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </AnimatedButton>
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
