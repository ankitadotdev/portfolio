import React from 'react';
import { portfolioConfig } from '../config/portfolioConfig';
import { Briefcase, Award, Sparkles } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience, achievements } = portfolioConfig;

  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16 relative z-10">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-gradient-to-r from-transparent via-lavender-400 to-transparent" />
            <span className="text-xs font-bold uppercase tracking-widest text-lavender-700">
              Trajectory &amp; Milestones
            </span>
            <span className="w-8 h-px bg-gradient-to-r from-lavender-400 via-lavender-400 to-transparent" />
          </div>

          {/* Section Header */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-plum-primary tracking-tight">
            Experience &amp; <span className="font-serif italic font-normal text-lavender-600">milestones</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-plum-secondary max-w-2xl px-4">
            A chronological timeline of engineering roles, academic foundation, and technical milestones.
          </p>
        </div>

        {/* Timeline & Achievements Asymmetrical 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Vertical Timeline */}
          <div className="lg:col-span-7">
            <h3 className="text-lg font-bold text-plum-primary mb-8 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blush-500" />
              <span>Career &amp; Education</span>
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-blush-200/60 space-y-12">
              {experience.map((item) => (
                <div key={item.id} className="relative group">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-blush-400 group-hover:border-lavender-500 group-hover:scale-125 transition-all shadow-sm" />

                  {/* Period Tag */}
                  <span className="inline-block px-2.5 py-1 rounded-full text-xs font-mono font-medium text-plum-secondary bg-cream-200/80 border border-blush-100 mb-2">
                    {item.period}
                  </span>

                  {/* Role & Org */}
                  <h4 className="text-xl font-bold text-plum-primary tracking-tight">
                    {item.role}
                  </h4>
                  <p className="text-sm font-medium text-lavender-700 mt-0.5 mb-3">
                    {item.organization}
                    {item.location && <span className="text-plum-muted"> • {item.location}</span>}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-plum-secondary leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-white border border-blush-100 text-plum-secondary text-[11px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Key Accolades / Milestones */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-bold text-plum-primary mb-8 flex items-center gap-2">
              <Award className="w-4 h-4 text-lavender-600" />
              <span>Accolades &amp; Highlights</span>
            </h3>

            <div className="space-y-4">
              {achievements.map((item) => (
                <div
                  key={item.id}
                  className="p-6 rounded-3xl bg-white/70 border border-blush-200/60 shadow-subtle hover:shadow-soft transition-all duration-200"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-blush-600 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      {item.year}
                    </span>
                    <span className="text-[11px] font-mono text-plum-muted">
                      {item.eventOrIssuer}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-plum-primary mb-2">
                    {item.title}
                  </h4>

                  <p className="text-xs text-plum-secondary leading-relaxed">
                    {item.highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
