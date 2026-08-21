import React from 'react';

interface BrandLogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const isLight = variant === 'light';

  // Sizing definitions
  const dimensions = {
    sm: { icon: 'w-8 h-8', mainText: 'text-base tracking-[0.18em]', subText: 'text-[9px] tracking-[0.25em]' },
    md: { icon: 'w-10 h-10', mainText: 'text-lg sm:text-xl tracking-[0.2em]', subText: 'text-[10px] tracking-[0.3em]' },
    lg: { icon: 'w-14 h-14', mainText: 'text-2xl sm:text-3xl tracking-[0.22em]', subText: 'text-xs tracking-[0.35em]' },
  }[size];

  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      
      {/* Minimal Krishna-Inspired Insignia: Geometric M Monogram + Bansuri (Flute) Motif + Wood Grain Curve */}
      <div
        className={`${dimensions.icon} rounded-sm flex items-center justify-center relative transition-all duration-300 ${
          isLight
            ? 'bg-[#ede5d8] border border-[#c5a059]/40 group-hover:border-[#c5a059] shadow-sm'
            : 'bg-[#181410] border border-[#c5a059]/40 group-hover:border-[#c5a059] group-hover:bg-[#241c15] shadow-md'
        }`}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4/5 h-4/5 text-[#c5a059] transition-transform duration-300 group-hover:scale-105"
        >
          {/* Subtle Outer Diamond / Wood Joint Frame */}
          <rect
            x="3"
            y="3"
            width="42"
            height="42"
            rx="4"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeOpacity="0.35"
          />

          {/* Architectural 'M' Monogram */}
          <path
            d="M12 36V16L24 28L36 16V36"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Minimalist Krishna Flute (Bansuri) Slanted Silhouette Across the M */}
          <path
            d="M9 13L39 13"
            stroke="#dfc185"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeOpacity="0.9"
          />
          {/* Subtle 3 Tone Holes on the Flute */}
          <circle cx="21" cy="13" r="1.1" fill="currentColor" />
          <circle cx="25" cy="13" r="1.1" fill="currentColor" />
          <circle cx="29" cy="13" r="1.1" fill="currentColor" />

          {/* Organic Feather/Wood Curvature Inset */}
          <path
            d="M24 28C24 33 28 35 32 35"
            stroke="#dfc185"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeDasharray="1.5 2"
            strokeOpacity="0.7"
          />
        </svg>
      </div>

      {/* Brand Name Typography Lockup */}
      <div className="flex flex-col">
        <span
          className={`font-serif font-bold uppercase transition-colors leading-none ${dimensions.mainText} ${
            isLight
              ? 'text-[#1c1611] group-hover:text-[#c5a059]'
              : 'text-[#FBF9F5] group-hover:text-[#c5a059]'
          }`}
        >
          MAKHAN
        </span>
        {showSubtitle && (
          <span
            className={`font-medium uppercase mt-1 leading-none ${dimensions.subText} text-[#c5a059]`}
          >
            CARPENTER
          </span>
        )}
      </div>

    </div>
  );
};
