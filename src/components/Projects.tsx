import React from 'react';
import { portfolioConfig } from '../config/portfolioConfig';
import type { Project } from '../types/portfolio';
import { ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon } from './Icons';
import { SparkleIcon } from './MagicComponents';

export const Projects: React.FC = () => {
  const { projects } = portfolioConfig;

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16 relative z-10">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-gradient-to-r from-transparent via-blush-400 to-transparent" />
            <span className="text-xs font-bold uppercase tracking-widest text-blush-700">
              Featured Portfolio
            </span>
            <span className="w-8 h-px bg-gradient-to-r from-blush-400 via-blush-400 to-transparent" />
          </div>

          {/* Section Header */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-plum-primary tracking-tight">
            Things I've <span className="font-serif italic font-normal text-blush-500">built</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-plum-secondary max-w-2xl px-4">
            Software projects engineered with architectural discipline, accessible interfaces, and
            deliberate aesthetic refinement.
          </p>
        </div>

        {/* Empty State Graceful Handling */}
        {projects.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-white/60 border border-blush-200/50">
            <p className="text-sm text-plum-secondary">
              No projects found at this moment.
            </p>
          </div>
        ) : (
          /* Featured Project Layouts (Varied editorial compositions, not repetitive cards) */
          <div className="space-y-16 lg:space-y-24">
            {projects.map((project: Project) => {
              return (
                <article
                  key={project.id}
                  className="project-card p-6 sm:p-8 lg:p-10 rounded-4xl bg-white/80 border border-blush-200/60 shadow-soft"
                >
                    {/* Project Narrative */}
                    <div className="lg:col-span-12 lg:max-w-4xl space-y-6">
                      {/* Category & Badge */}
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="text-xs font-bold uppercase tracking-wider text-lavender-700 bg-lavender-100/60 px-3 py-1 rounded-full border border-lavender-200/60">
                          {project.category}
                        </span>
                        {project.badge && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blush-700 bg-blush-100/70 px-2.5 py-0.5 rounded-full border border-blush-200/50">
                            <SparkleIcon size={9} color="#FF8FAB" className="animate-twinkle-soft" />
                            <span>{project.badge}</span>
                          </span>
                        )}
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-plum-primary tracking-tight">
                        {project.title}
                      </h3>

                      {/* Structured Breakdown: Problem -> Solution -> Key Contribution */}
                      <div className="space-y-4 text-xs sm:text-sm text-plum-secondary">
                        <div className="space-y-1">
                          <span className="font-semibold text-plum-primary flex items-center gap-1.5 text-xs uppercase tracking-wide">
                            <AlertCircle className="w-3.5 h-3.5 text-blush-500" />
                            Problem
                          </span>
                          <p className="leading-relaxed pl-5 text-plum-secondary/90">
                            {project.problem}
                          </p>
                        </div>

                        <div className="space-y-1">
                          <span className="font-semibold text-plum-primary flex items-center gap-1.5 text-xs uppercase tracking-wide">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            Solution
                          </span>
                          <p className="leading-relaxed pl-5 text-plum-secondary/90">
                            {project.solution}
                          </p>
                        </div>

                        <div className="space-y-1">
                          <span className="font-semibold text-plum-primary flex items-center gap-1.5 text-xs uppercase tracking-wide">
                            <SparkleIcon size={13} color="#8363C2" />
                            Key Contribution
                          </span>
                          <p className="leading-relaxed pl-5 text-plum-secondary/90">
                            {project.keyContribution}
                          </p>
                        </div>
                      </div>

                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-cream-100 text-plum-secondary text-xs font-mono border border-blush-100"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Links (GitHub & Live Demo) */}
                      <div className="flex items-center gap-4 pt-3">
                        {project.liveDemoUrl && (
                          <a
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold bg-plum-primary text-white hover:bg-plum-deep shadow-subtle hover:shadow-glow-pink transition-all group"
                          >
                            <span>Live Demo</span>
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold bg-white text-plum-primary border border-blush-200 hover:border-blush-400 hover:bg-cream-50 transition-all"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>View Code</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
