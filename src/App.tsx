import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certificates } from './components/Certificates';
import { GithubSection } from './components/GithubSection';

import { Footer } from './components/Footer';
import { SectionDivider } from './components/MagicComponents';

export const App: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const triggerPastelSparkle = () => {
    confetti({
      particleCount: 30,
      spread: 55,
      origin: { y: 0.1, x: 0.12 },
      colors: ['#FF8FAB', '#CDB4DB', '#FDEEF5', '#D1C2EE', '#DE7CA2'],
      disableForReducedMotion: true,
      scalar: 0.75,
    });
    showToast('✦ Sparkle!');
  };

  return (
    /* grain-overlay adds the ultra-subtle grain texture via ::before pseudo-element */
    <div className="grain-overlay min-h-screen bg-[#FFF9FC] text-[#2D2232] relative selection:bg-[#FFB3C6] selection:text-[#2D2232]">

      {/* Toast */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-[9999] px-4 py-2.5 rounded-2xl bg-white/95 border border-blush-200 shadow-elevated text-xs font-semibold text-plum-primary flex items-center gap-2 animate-fade-up"
        >
          <span className="w-2 h-2 rounded-full bg-blush-400 animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Floating Navbar */}
      <Navbar onSparkleClick={triggerPastelSparkle} />

      {/* Main Content */}
      <main id="main-content" className="relative">
        <Hero />
        <About />
        {/* Selective sparkle divider between About & Projects */}
        <SectionDivider variant="sparkle" />
        <Projects />
        <Experience />
        <Certificates />
        {/* Subtle dot divider before GitHub section */}
        <SectionDivider variant="dot" />
        <GithubSection />

      </main>

      <Footer />
    </div>
  );
};

export default App;
