import React, { useEffect, useState, useRef } from 'react';
import { statisticsData } from '../data/siteContent';
import type { Language } from '../types';

interface TrustBarProps {
  language: Language;
}

export const TrustBar: React.FC<TrustBarProps> = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience-bar" ref={barRef} className="py-10 sm:py-12 bg-[#120f0d] border-y border-[#c5a059]/25 relative shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 text-center">
          {statisticsData.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center p-3 sm:p-5 rounded-sm bg-[#16120e]/70 border border-[#c5a059]/15 hover:border-[#c5a059]/40 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <div className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#c5a059] tracking-tight">
                {stat.value}
              </div>
              
              <div className="font-serif text-xs sm:text-base text-[#FBF9F5] font-semibold mt-1">
                {language === 'en' ? stat.label : stat.labelHi}
              </div>

              <div className="text-[10px] sm:text-xs text-[#a99c8f] mt-0.5 max-w-[200px] leading-relaxed">
                {language === 'en' ? stat.description : stat.descriptionHi}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
