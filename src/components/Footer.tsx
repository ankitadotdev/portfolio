import React from 'react';
import { portfolioConfig } from '../config/portfolioConfig';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { personal, socials } = portfolioConfig;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-blush-200/50 bg-cream-100/40">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand signature */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-extrabold text-plum-primary text-base tracking-tight">
            {personal.name.split(' ')[0]}
            <span className="text-blush-500 font-serif italic ml-0.5">{personal.name.split(' ')[1]}</span>
          </span>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-5 text-xs font-semibold text-plum-secondary">
          <a href={socials.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-plum-primary transition-colors">
            GitHub
          </a>
          <a href={socials.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-plum-primary transition-colors">
            LinkedIn
          </a>


          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-full bg-white border border-blush-200/80 text-plum-secondary hover:text-plum-primary hover:border-blush-400 hover:shadow-subtle transition-all ml-2"
            aria-label="Back to Top"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
