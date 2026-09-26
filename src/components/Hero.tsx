import React from 'react';
import { portfolioConfig } from '../config/portfolioConfig';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import {
  HeroAmbientParticles,
  ScrollIndicator,
  SparkleIcon,
  TinyHeart,
  DoodleCurve,
  DesignerDoodle,
  UIDoodle,
} from './MagicComponents';

export const Hero: React.FC = () => {
  const { personal, socials } = portfolioConfig;

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 sm:pt-28 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[480px] bg-gradient-to-tr from-blush-200/70 via-lavender-200/50 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-5 w-72 h-72 bg-blush-200/60 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-52 h-52 bg-lavender-200/50 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Magical ambient floating particles */}
      <HeroAmbientParticles />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

        {/* Editorial Headline & Narrative */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          {/* Eyebrow & Status */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/80 text-plum-secondary border border-blush-200/70 shadow-subtle">
              <SparkleIcon size={12} color="#FF8FAB" className="animate-twinkle-soft" />
              <span>HELLO, I'M ANKITA 🌷</span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-plum-primary leading-[1.15]">
            <span>{personal.headline.prefix} </span>
            <span className="font-serif italic font-normal text-blush-600 block sm:inline">
              {personal.headline.accent}
            </span>
          </h1>

          {/* Persona line */}
          <p className="text-sm sm:text-base font-semibold tracking-wide uppercase text-lavender-700/90">
            {personal.subRoles.join(' • ')}
          </p>

          {/* Bio */}
          <p className="text-base sm:text-lg text-plum-secondary max-w-xl leading-relaxed">
            {personal.briefBio}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide bg-plum-primary text-white shadow-soft hover:shadow-glow-pink hover:bg-plum-deep transition-all duration-300 group btn-magic"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href={socials.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide bg-white/80 text-plum-primary border border-blush-200/80 shadow-subtle hover:bg-white hover:border-blush-300 transition-all duration-300 group"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-plum-secondary group-hover:text-plum-primary" />
            </a>

            <a
              href={socials.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide bg-white/80 text-plum-primary border border-blush-200/80 shadow-subtle hover:bg-white hover:border-blush-300 transition-all duration-300 group"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-plum-secondary group-hover:text-plum-primary" />
            </a>
          </div>

          {/* Tech chips */}
          <div className="pt-4 flex flex-wrap items-center gap-2 text-xs text-plum-secondary">
            <span className="font-medium text-plum-muted mr-1">Core Tech:</span>
            {['TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind'].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-white/70 border border-blush-100 text-plum-secondary font-mono text-[11px] hover:border-blush-300 hover:bg-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>


        {/* Right Column: Profile Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full mt-12 lg:mt-0">
          <div className="relative w-full max-w-sm sm:max-w-md" aria-hidden="true">
            <SparkleIcon
              size={24}
              color="#FF8FAB"
              className="absolute -top-6 -left-4 animate-twinkle hidden sm:block pointer-events-none z-10"
              style={{ animationDelay: '0.3s', opacity: 0.8 }}
            />
            <SparkleIcon
              size={14}
              color="#CDB4DB"
              className="absolute top-1/4 -right-6 animate-twinkle-soft hidden sm:block pointer-events-none z-10"
              style={{ animationDelay: '1.1s', opacity: 0.7 }}
            />
            <TinyHeart
              size={12}
              color="#FFB3C6"
              className="absolute -bottom-5 left-10 animate-float-slow hidden sm:block pointer-events-none z-10"
              style={{ animationDelay: '0.7s', opacity: 0.6 }}
            />
            <DoodleCurve
              width={60}
              color="#FF8FAB"
              className="absolute -bottom-8 right-4 hidden sm:block pointer-events-none z-10"
              style={{ opacity: 0.4 }}
            />
            <DesignerDoodle
              size={50}
              color="#CDB4DB"
              className="absolute top-12 -right-10 animate-float-slow hidden lg:block pointer-events-none z-10"
              style={{ animationDelay: '1.5s', opacity: 0.8 }}
            />
            <UIDoodle
              size={44}
              color="#FF8FAB"
              className="absolute bottom-16 -left-10 animate-float-drift hidden lg:block pointer-events-none z-10"
              style={{ animationDelay: '0.8s', opacity: 0.85 }}
            />

            {/* Circular Image */}
            <div className="relative w-full aspect-square flex items-center justify-center">
              <div
                className="absolute inset-0 bg-gradient-to-bl from-blush-200/40 to-lavender-200/30 rounded-full blur-3xl pointer-events-none -z-10"
                aria-hidden="true"
              />
              <img
                src="/images/ankita.png"
                alt="Ankita Profile"
                className="w-full h-full object-contain drop-shadow-md rounded-full pointer-events-auto transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  );
};
