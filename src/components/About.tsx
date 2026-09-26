import React from 'react';
import { portfolioConfig } from '../config/portfolioConfig';
import { SparkleIcon } from './MagicComponents';

export const About: React.FC = () => {
  const { personal } = portfolioConfig;

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto mb-10 sm:mb-16 border-t border-blush-200/50" />

      <div className="max-w-4xl mx-auto relative flex flex-col items-center text-center">
        
        {/* Background Floral/Branch Decorations */}
        <div className="hidden sm:block absolute -left-12 sm:-left-24 top-10 opacity-60 animate-pulse" style={{ animationDuration: '6s' }}>
          <svg width="120" height="200" viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blush-400 transform -rotate-12 scale-110">
            <path d="M60 200C50 150 70 100 40 50C25 25 10 10 10 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M57 160C45 155 35 165 35 165C35 165 45 175 57 160Z" fill="currentColor" fillOpacity="0.4" />
            <path d="M62 130C75 125 85 135 85 135C85 135 75 145 62 130Z" fill="currentColor" fillOpacity="0.4" />
            <path d="M50 100C35 95 25 105 25 105C25 105 35 115 50 100Z" fill="currentColor" fillOpacity="0.4" />
            <path d="M55 70C68 65 78 75 78 75C78 75 68 85 55 70Z" fill="currentColor" fillOpacity="0.4" />
            {/* Flowers */}
            <circle cx="85" cy="135" r="5" fill="currentColor" /><circle cx="80" cy="130" r="4" fill="currentColor" fillOpacity="0.6" /><circle cx="90" cy="130" r="4" fill="currentColor" fillOpacity="0.6" /><circle cx="80" cy="140" r="4" fill="currentColor" fillOpacity="0.6" /><circle cx="90" cy="140" r="4" fill="currentColor" fillOpacity="0.6" />
            <circle cx="10" cy="10" r="6" fill="currentColor" /><circle cx="3" cy="5" r="5" fill="currentColor" fillOpacity="0.6" /><circle cx="17" cy="5" r="5" fill="currentColor" fillOpacity="0.6" /><circle cx="3" cy="15" r="5" fill="currentColor" fillOpacity="0.6" /><circle cx="17" cy="15" r="5" fill="currentColor" fillOpacity="0.6" />
          </svg>
        </div>

        <div className="hidden sm:block absolute -right-12 sm:-right-24 bottom-10 opacity-60 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}>
          <svg width="120" height="200" viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-lavender-400 transform rotate-180 scale-110">
            <path d="M60 200C50 150 70 100 40 50C25 25 10 10 10 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M57 160C45 155 35 165 35 165C35 165 45 175 57 160Z" fill="currentColor" fillOpacity="0.4" />
            <path d="M62 130C75 125 85 135 85 135C85 135 75 145 62 130Z" fill="currentColor" fillOpacity="0.4" />
            <path d="M50 100C35 95 25 105 25 105C25 105 35 115 50 100Z" fill="currentColor" fillOpacity="0.4" />
            <path d="M55 70C68 65 78 75 78 75C78 75 68 85 55 70Z" fill="currentColor" fillOpacity="0.4" />
            <circle cx="85" cy="135" r="5" fill="currentColor" /><circle cx="80" cy="130" r="4" fill="currentColor" fillOpacity="0.6" /><circle cx="90" cy="130" r="4" fill="currentColor" fillOpacity="0.6" /><circle cx="80" cy="140" r="4" fill="currentColor" fillOpacity="0.6" /><circle cx="90" cy="140" r="4" fill="currentColor" fillOpacity="0.6" />
            <circle cx="10" cy="10" r="6" fill="currentColor" /><circle cx="3" cy="5" r="5" fill="currentColor" fillOpacity="0.6" /><circle cx="17" cy="5" r="5" fill="currentColor" fillOpacity="0.6" /><circle cx="3" cy="15" r="5" fill="currentColor" fillOpacity="0.6" /><circle cx="17" cy="15" r="5" fill="currentColor" fillOpacity="0.6" />
          </svg>
        </div>

        {/* Soft Background Blooms */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-blush-200/30 rounded-full blur-[80px] -z-10" />

        {/* Top Decorative Sparkles */}
        <div className="flex items-center justify-center gap-3 mb-6 text-blush-400">
          <span className="text-sm">❀</span>
          <span className="w-12 h-px bg-gradient-to-r from-transparent via-blush-300 to-transparent"></span>
          <span className="text-sm">✿</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-plum-primary tracking-tight mb-10">
          A little{' '}
          <span className="font-serif italic font-normal text-blush-500">about me</span>.
        </h2>

        {/* Narrative */}
        <div className="max-w-3xl mx-auto space-y-7 text-base sm:text-lg lg:text-xl text-plum-secondary leading-relaxed px-4">
          {personal.fullBio.map((paragraph, idx) => (
            <p key={idx} className="first:text-plum-primary first:font-medium first:text-xl sm:first:text-2xl">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Bottom Sparkle */}
        <div className="mt-12 text-lavender-500 opacity-80 animate-twinkle-soft">
          <SparkleIcon size={24} color="currentColor" />
        </div>
      </div>
    </section>
  );
};
