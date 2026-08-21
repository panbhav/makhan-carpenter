import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';
import { beforeAfterCases } from '../data/siteContent';
import { translations } from '../data/translations';
import type { Language } from '../types';

interface BeforeAfterSectionProps {
  language: Language;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ language }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const t = translations[language];
  const currentCase = beforeAfterCases[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(0, Math.min(rect.width, x));
    const percentage = (clamped / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section id="before-after" className="py-24 bg-[#0e0c0a] relative border-t border-[#c5a059]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[#c5a059] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.beforeAfter.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FBF9F5] font-normal tracking-tight mb-4">
            {t.beforeAfter.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#d4cbbf] font-light leading-relaxed">
            {t.beforeAfter.subheading}
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {beforeAfterCases.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeCaseIndex === idx
                  ? 'bg-[#c5a059] text-[#0e0c0a] shadow-md'
                  : 'bg-[#181410] text-[#a99c8f] hover:text-[#ede5d8] border border-[#c5a059]/15'
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Slider Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Slider Box (Col 8) */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative h-[340px] sm:h-[460px] md:h-[500px] rounded-sm overflow-hidden border border-[#c5a059]/30 shadow-2xl select-none cursor-ew-resize bg-black"
            >
              {/* After Image */}
              <img
                src={currentCase.afterImage}
                alt={currentCase.afterLabel || 'Finished result'}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              {/* Before Image (Clipped overlay) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={currentCase.beforeImage}
                  alt={currentCase.beforeLabel || 'Before state'}
                  className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    height: '100%',
                  }}
                />
              </div>

              {/* Slider Line & Drag Handle */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-[#c5a059] pointer-events-none shadow-[0_0_10px_#c5a059]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0c0a09] border-2 border-[#c5a059] text-[#c5a059] flex items-center justify-center shadow-2xl">
                  <MoveHorizontal className="w-4 h-4" />
                </div>
              </div>

              {/* Badges */}
              <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 rounded-sm border border-white/20 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#d4cbbf] pointer-events-none backdrop-blur-sm">
                Before: {currentCase.beforeLabel}
              </div>
              <div className="absolute top-4 right-4 bg-[#c5a059]/90 px-3 py-1 rounded-sm border border-black/30 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#0e0c0a] pointer-events-none shadow-md backdrop-blur-sm">
                After: {currentCase.afterLabel}
              </div>

              {/* Drag Hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/75 px-3 py-1 rounded-full text-[10px] text-[#dfc185] pointer-events-none border border-[#c5a059]/20 backdrop-blur-sm">
                {t.beforeAfter.dragHint}
              </div>
            </div>
          </div>

          {/* Case Narrative (Col 4) */}
          <div className="lg:col-span-4 bg-[#14100d] border border-[#c5a059]/25 rounded-sm p-6 sm:p-8 space-y-6 shadow-xl">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest bg-[#c5a059]/15 text-[#c5a059] px-2.5 py-1 rounded-sm border border-[#c5a059]/20 inline-block mb-3">
                {currentCase.category} Transformation
              </span>
              <h3 className="font-serif text-2xl text-[#FBF9F5] font-normal leading-snug">
                {language === 'en' ? currentCase.title : (currentCase.titleHi || currentCase.title)}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#d4cbbf] leading-relaxed">
              {language === 'en' ? currentCase.description : (currentCase.descriptionHi || currentCase.description)}
            </p>

            <div className="p-4 bg-[#1a1410] border-l-2 border-[#c5a059] rounded-r-sm space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-[#a99c8f] font-semibold block">
                Result Achieved
              </span>
              <span className="text-xs text-[#dfc185]">
                {currentCase.resultSummary}
              </span>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-[#a99c8f]">
              <span>Project Location:</span>
              <span className="text-[#ede5d8] font-medium">{currentCase.location}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
