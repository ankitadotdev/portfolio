import React from 'react';

// SimplePandaBadge – a minimal, cute panda rendered as an SVG.
// The panda gently floats up‑and‑down using CSS keyframes to add a lively feel.
// It is deliberately lightweight (no external assets) and matches the site's color palette.

export const SimplePandaBadge: React.FC = () => {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-panda-float"
    >
      {/* Background circle – soft pastel */}
      <circle cx="32" cy="32" r="30" fill="hsl(340, 30%, 92%)" />
      {/* Panda head */}
      <circle cx="32" cy="28" r="14" fill="#fff" stroke="#000" strokeWidth="1.5" />
      {/* Ears */}
      <circle cx="20" cy="16" r="6" fill="#000" />
      <circle cx="44" cy="16" r="6" fill="#000" />
      {/* Eyes */}
      <circle cx="26" cy="28" r="3" fill="#000" />
      <circle cx="38" cy="28" r="3" fill="#000" />
      {/* Nose */}
      <ellipse cx="32" cy="36" rx="2" ry="1.5" fill="#000" />
      {/* Mouth */}
      <path d="M30 38 Q32 40 34 38" stroke="#000" strokeWidth="1" fill="none" />
    </svg>
  );
};

/*
  Animation: a gentle vertical float that loops forever.
  The class name is added to the SVG above. Add this CSS to your global stylesheet
  (e.g., src/index.css) to activate the effect.
*/

/* Add the following CSS somewhere in your project, e.g., src/index.css */
/*
@keyframes panda-float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0); }
}
.animate-panda-float {
  animation: panda-float 3s ease-in-out infinite;
}
*/
