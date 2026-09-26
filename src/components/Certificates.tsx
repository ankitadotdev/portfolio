import React, { useRef, useState, useEffect } from 'react';
import { Award, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { portfolioConfig } from '../config/portfolioConfig';

export const Certificates: React.FC = () => {
  const { certificates } = portfolioConfig;
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    if (selectedCert) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  if (!certificates || certificates.length === 0) return null;

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.8;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="certificates" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <h3 className="text-lg font-bold text-plum-primary flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-blush-500" />
              <span>Certifications</span>
            </h3>
            <p className="text-plum-secondary text-sm md:text-base max-w-2xl">
              Professional credentials, workshop participations, and event highlights that showcase my continuous learning journey.
            </p>
          </div>

        </div>

        {/* Carousel Container with Absolute Arrows */}
        <div className="relative -mx-4 sm:mx-0 group/carousel">
          {/* Navigation Arrows (Visible only on hover or active on desktop) */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full border shadow-soft transition-all duration-300 ${
              canScrollLeft 
                ? 'bg-white/90 text-plum-primary border-blush-200 hover:bg-white hover:border-blush-400 hover:scale-110 opacity-0 group-hover/carousel:opacity-100' 
                : 'bg-white/50 text-plum-muted border-transparent opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full border shadow-soft transition-all duration-300 ${
              canScrollRight 
                ? 'bg-white/90 text-plum-primary border-blush-200 hover:bg-white hover:border-blush-400 hover:scale-110 opacity-0 group-hover/carousel:opacity-100' 
                : 'bg-white/50 text-plum-muted border-transparent opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div 
            ref={carouselRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 sm:gap-6 px-4 sm:px-0 pb-8 pt-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {certificates.map((cert) => (
              <div 
                key={cert.id}
                onClick={() => setSelectedCert(cert)} 
                className="snap-center sm:snap-start shrink-0 w-[85vw] sm:w-[400px] md:w-[450px] flex flex-col group bg-white/60 rounded-3xl p-3 border border-white shadow-sm hover:shadow-soft transition-all duration-300 cursor-zoom-in"
              >
                {/* Image Aspect Ratio Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-cream-300">
                  <img 
                    src={cert.imageUrl} 
                    alt={`${cert.title} Certificate`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Certificate Details */}
                <div className="pt-4 px-2 pb-2">
                  <div className="flex justify-between items-start gap-4 mb-1">
                    <h4 className="font-bold text-plum-primary text-lg leading-tight group-hover:text-blush-600 transition-colors">
                      {cert.title}
                    </h4>
                    <span className="shrink-0 text-xs font-mono font-medium text-lavender-700 bg-lavender-100 px-2.5 py-1 rounded-full">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-plum-secondary">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Swipe Hint */}
        <div className="flex sm:hidden justify-center items-center gap-1.5 text-xs font-medium text-plum-muted mt-2">
          <span>Swipe to explore</span>
          <ChevronRight className="w-3 h-3" />
        </div>

      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Fullscreen Certificate Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-plum-primary/80 backdrop-blur-sm" />
          
          {/* Modal Content */}
          <div 
            className="relative w-full max-w-5xl max-h-full flex flex-col items-center justify-center animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Controls */}
            <div className="w-full flex justify-between items-center mb-4">
              <div className="text-white">
                <h3 className="text-lg sm:text-xl font-bold">{selectedCert.title}</h3>
                <p className="text-sm text-blush-200">{selectedCert.issuer} • {selectedCert.date}</p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Image */}
            <div className="relative w-full rounded-xl overflow-hidden bg-plum-deep/50 shadow-2xl ring-1 ring-white/20">
              <img 
                src={selectedCert.imageUrl} 
                alt={`${selectedCert.title} Certificate Full`}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
