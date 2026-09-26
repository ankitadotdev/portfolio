import React, { useEffect, useRef, useState } from 'react';

// Tiny inline SVG doodles — all pointer-events-none, aria-hidden
export const SparkleIcon: React.FC<{
  className?: string;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}> = ({ className = '', size = 12, color = '#FF8FAB', style }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    className={className}
    style={style}
    aria-hidden="true"
    focusable="false"
  >
    <path d="M12 2 C12 2, 12.5 7, 12 12 C11.5 7, 12 2, 12 2Z M12 12 C12 12, 17 12.5, 22 12 C17 11.5, 12 12, 12 12Z M12 12 C12 12, 11.5 17, 12 22 C12.5 17, 12 12, 12 12Z M12 12 C12 12, 7 11.5, 2 12 C7 12.5, 12 12, 12 12Z" />
    <circle cx="3" cy="3" r="1.2" />
    <circle cx="21" cy="3" r="1.2" />
    <circle cx="21" cy="21" r="1.2" />
    <circle cx="3" cy="21" r="1.2" />
  </svg>
);

export const TinyHeart: React.FC<{
  className?: string;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}> = ({ className = '', size = 10, color = '#FFB3C6', style }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    className={className}
    style={style}
    aria-hidden="true"
    focusable="false"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export const TinyStar: React.FC<{
  className?: string;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}> = ({ className = '', size = 8, color = '#CDB4DB', style }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    className={className}
    style={style}
    aria-hidden="true"
    focusable="false"
  >
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
);

export const DoodleCurve: React.FC<{
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  width?: number;
}> = ({ className = '', style, color = '#FF8FAB', width = 60 }) => (
  <svg
    width={width}
    height={24}
    viewBox={`0 0 ${width} 24`}
    fill="none"
    className={className}
    style={style}
    aria-hidden="true"
    focusable="false"
  >
    <path
      d={`M4 18 Q${width / 4} 4 ${width / 2} 12 Q${(width * 3) / 4} 20 ${width - 4} 8`}
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
      opacity="0.6"
      strokeDasharray="3 3"
    />
  </svg>
);

export const TinyDot: React.FC<{
  className?: string;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}> = ({ className = '', size = 5, color = '#CDB4DB', style }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 10 10"
    className={className}
    style={style}
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="5" cy="5" r="5" fill={color} opacity="0.7" />
  </svg>
);

export const DesignerDoodle: React.FC<{
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  size?: number;
}> = ({ className = '', style, color = '#FF8FAB', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    style={style}
    aria-hidden="true"
    focusable="false"
  >
    <path d="M5 19 C 5 10, 19 14, 19 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
    <circle cx="5" cy="19" r="2" fill="none" stroke={color} strokeWidth="1.5" />
    <circle cx="19" cy="5" r="2" fill="none" stroke={color} strokeWidth="1.5" />
    <line x1="19" y1="5" x2="15" y2="9" stroke={color} strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
    <line x1="5" y1="19" x2="9" y2="15" stroke={color} strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
    <circle cx="15" cy="9" r="1" fill={color} opacity="0.6" />
    <circle cx="9" cy="15" r="1" fill={color} opacity="0.6" />
  </svg>
);

export const UIDoodle: React.FC<{
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  size?: number;
}> = ({ className = '', style, color = '#CDB4DB', size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    style={style}
    aria-hidden="true"
    focusable="false"
  >
    <rect x="3" y="4" width="18" height="16" rx="2" stroke={color} strokeWidth="1.5" opacity="0.8" />
    <line x1="3" y1="8" x2="21" y2="8" stroke={color} strokeWidth="1.5" opacity="0.8" />
    <circle cx="6" cy="6" r="1" fill={color} />
    <circle cx="9" cy="6" r="1" fill={color} />
    <rect x="6" y="11" width="12" height="6" rx="1" stroke={color} strokeWidth="1.5" strokeDasharray="2 2" opacity="0.6" />
  </svg>
);

// Ambient floating particle cluster for hero background
export const HeroAmbientParticles: React.FC = () => {
  const particles = [
    { top: '8%', left: '6%', size: 14, color: '#FF8FAB', anim: 'animate-twinkle', delay: '0s', type: 'sparkle' },
    { top: '15%', left: '88%', size: 9, color: '#CDB4DB', anim: 'animate-twinkle-soft', delay: '0.8s', type: 'sparkle' },
    { top: '72%', left: '5%', size: 10, color: '#CDB4DB', anim: 'animate-twinkle', delay: '1.5s', type: 'sparkle' },
    { top: '55%', left: '93%', size: 12, color: '#FF8FAB', anim: 'animate-twinkle-soft', delay: '0.4s', type: 'sparkle' },
    { top: '85%', left: '80%', size: 8, color: '#CDB4DB', anim: 'animate-twinkle', delay: '2s', type: 'sparkle' },
    { top: '30%', left: '2%', size: 5, color: '#FFB3C6', anim: 'animate-float-drift', delay: '0.6s', type: 'dot' },
    { top: '62%', left: '90%', size: 5, color: '#FF8FAB', anim: 'animate-float-drift', delay: '1.2s', type: 'dot' },
    { top: '20%', left: '75%', size: 5, color: '#D2C3EE', anim: 'animate-float-drift', delay: '1.8s', type: 'dot' },
    { top: '78%', left: '18%', size: 5, color: '#FFB3C6', anim: 'animate-float-drift', delay: '0.3s', type: 'dot' },
    { top: '45%', left: '96%', size: 7, color: '#FFB3C6', anim: 'animate-float-slow', delay: '1s', type: 'heart' },
    { top: '90%', left: '35%', size: 6, color: '#FF8FAB', anim: 'animate-orbit-float', delay: '2.5s', type: 'star' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 hidden sm:block" aria-hidden="true">
      {particles.map((p, i) => {
        const baseStyle: React.CSSProperties = {
          position: 'absolute',
          top: p.top,
          left: p.left,
          animationDelay: p.delay,
          opacity: 0.5,
        };
        if (p.type === 'sparkle') {
          return <SparkleIcon key={i} size={p.size} color={p.color} className={p.anim} style={baseStyle} />;
        }
        if (p.type === 'dot') {
          return <TinyDot key={i} size={p.size} color={p.color} className={p.anim} style={baseStyle} />;
        }
        if (p.type === 'heart') {
          return <TinyHeart key={i} size={p.size} color={p.color} className={p.anim} style={baseStyle} />;
        }
        if (p.type === 'star') {
          return <TinyStar key={i} size={p.size} color={p.color} className={p.anim} style={baseStyle} />;
        }
        return null;
      })}
    </div>
  );
};

// Scroll indicator that fades out after user scrolls
export const ScrollIndicator: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => { if (window.scrollY > 80) setVisible(false); };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none"
      aria-hidden="true"
      style={{ transition: 'opacity 0.5s ease', opacity: visible ? 1 : 0 }}
    >
      <span className="text-[11px] font-mono tracking-widest uppercase text-plum-muted/60">scroll</span>
      <svg
        className="animate-scroll-bounce"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FF8FAB"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  );
};

// Tiny section divider — used selectively
export const SectionDivider: React.FC<{ variant?: 'sparkle' | 'dot' }> = ({ variant = 'sparkle' }) => (
  <div className="flex items-center justify-center py-4" aria-hidden="true">
    {variant === 'sparkle' ? (
      <SparkleIcon size={12} color="#FF8FAB" className="opacity-50 animate-twinkle-soft" />
    ) : (
      <div className="flex gap-1.5">
        <TinyDot size={4} color="#FF8FAB" />
        <TinyDot size={4} color="#CDB4DB" style={{ animationDelay: '0.2s' }} />
        <TinyDot size={4} color="#FF8FAB" style={{ animationDelay: '0.4s' }} />
      </div>
    )}
  </div>
);

// Custom cursor component — desktop only, reduced-motion safe
export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Only activate on pointer:fine (desktop)
    if (!window.matchMedia('(pointer: fine)').matches) return;
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const onHoverStart = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest('a, button, [role="button"], input, textarea')) {
        setHovering(true);
      }
    };

    const onHoverEnd = () => setHovering(false);

    const animate = () => {
      const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
      ringPosRef.current = {
        x: lerp(ringPosRef.current.x, posRef.current.x, 0.12),
        y: lerp(ringPosRef.current.y, posRef.current.y, 0.12),
      };

      if (dotRef.current) {
        dotRef.current.style.left = `${posRef.current.x}px`;
        dotRef.current.style.top = `${posRef.current.y}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPosRef.current.x}px`;
        ringRef.current.style.top = `${ringPosRef.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onHoverStart);
    window.addEventListener('mouseout', onHoverEnd);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onHoverStart);
      window.removeEventListener('mouseout', onHoverEnd);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className={`cursor-dot ${hovering ? 'hovered' : ''}`} aria-hidden="true" />
      <div ref={ringRef} className={`cursor-ring ${hovering ? 'hovered' : ''}`} aria-hidden="true" />
    </>
  );
};

// useInView hook for scroll-triggered animations
export const useInView = (options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, { threshold: 0.3, ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, inView };
};
