import React, { useState, useEffect } from 'react';
import { portfolioConfig } from '../config/portfolioConfig';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onSparkleClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSparkleClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'projects', 'experience'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 ${
          scrolled
            ? 'py-3 bg-white/70 backdrop-blur-xl border-b border-blush-100/50 shadow-subtle'
            : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={() => {
              if (onSparkleClick) {
                onSparkleClick();
              }
            }}
            className="group relative flex items-center gap-0.5 px-3 py-1.5 transition-all duration-300 hover:scale-[1.03] focus-visible:outline-none"
            aria-label="Back to top"
          >
            {/* Always-visible soft bloom glow */}
            <div className="absolute -inset-3 bg-gradient-to-r from-blush-300/30 via-lavender-200/25 to-blush-200/30 blur-2xl rounded-full -z-10" />
            <div className="absolute -inset-2 bg-blush-400/15 blur-xl rounded-full -z-10 animate-pulse" style={{ animationDuration: '4s' }} />

            {/* Left flower decoration */}
            <span className="text-blush-400/80 text-sm mr-1 select-none" aria-hidden="true">❀</span>

            {/* Name in Dancing Script calligraphy */}
            <span
              className="text-[26px] sm:text-[30px] text-plum-primary drop-shadow-sm leading-none"
              style={{ fontFamily: '"Dancing Script", cursive', fontWeight: 600 }}
            >
              {portfolioConfig.personal.name}
            </span>

            {/* Right flower decoration */}
            <span className="text-lavender-400/80 text-sm ml-1 select-none" aria-hidden="true">✿</span>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-0.5 px-5 py-2 rounded-full bg-white/70 border border-blush-100/80 shadow-subtle backdrop-blur-sm transition-all duration-300"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-[15px] font-serif italic transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-plum-primary bg-blush-100/80 shadow-sm font-semibold'
                      : 'text-plum-primary/70 hover:text-plum-primary hover:bg-cream-200/60 font-medium'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: CTA Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={portfolioConfig.socials.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide bg-white/80 text-plum-primary border border-blush-200/80 hover:border-blush-400 shadow-subtle backdrop-blur-sm transition-all duration-200 group hover:shadow-soft"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={portfolioConfig.socials.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide bg-plum-primary text-white hover:bg-plum-deep shadow-subtle hover:shadow-glow-pink transition-all duration-200 group"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl glass-panel text-plum-primary hover:bg-blush-100/60 transition-colors"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-plum-deep/20 backdrop-blur-sm transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-20 right-4 left-4 p-6 rounded-3xl glass-panel shadow-elevated border border-blush-200/80 bg-white/95 transition-all duration-300 transform ${
            mobileMenuOpen ? 'translate-y-0 scale-100 opacity-100' : '-translate-y-4 scale-95 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-base font-medium text-plum-primary hover:bg-blush-100/70 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-blush-100 flex flex-col gap-2">
              <a
                href={portfolioConfig.socials.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-white text-plum-primary border border-blush-200 shadow-subtle hover:border-blush-400 transition-all"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={portfolioConfig.socials.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-plum-primary text-white shadow-subtle hover:bg-plum-deep transition-all"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
