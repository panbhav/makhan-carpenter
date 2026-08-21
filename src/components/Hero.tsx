import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { translations } from '../data/translations';
import type { Language } from '../types';

interface HeroProps {
  language: Language;
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onOpenQuoteModal }) => {
  const t = translations[language];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-14">
      {/* High-Resolution Workshop & Bespoke Furniture Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=90"
          alt="Bespoke furniture crafted by Makhan Carpenter"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_12s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090807]/95 via-[#0e0c0a]/85 to-[#090807]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-[#0a0807]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center my-auto">
        
        {/* Brand Pre-Heading Trust Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-1.5 rounded-full bg-[#1e1712]/90 border border-[#c5a059]/35 text-[#dfc185] text-xs font-semibold tracking-[0.2em] uppercase mb-6 shadow-xl backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] animate-ping" />
          <span>{t.hero.badge}</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#FBF9F5] leading-[1.12] mb-6 max-w-4xl">
          {language === 'en' ? (
            <>
              Crafted with Experience. <br />
              <span className="italic font-light text-[#c5a059] font-serif">
                Designed for Your Space.
              </span>
            </>
          ) : (
            t.hero.headline
          )}
        </h1>

        {/* Supporting Text */}
        <p className="text-sm sm:text-base md:text-lg text-[#d4cbbf] max-w-2xl mx-auto font-light leading-relaxed mb-10 tracking-wide">
          {t.hero.subheading}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md">
          <a
            href="#our-work"
            className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-[#c5a059] hover:bg-[#d6b26b] text-[#0e0c0a] font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_4px_25px_rgba(197,160,89,0.35)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
          >
            <span>{t.hero.exploreWork}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-[#1a1410]/85 hover:bg-[#261e18] border border-[#c5a059]/40 hover:border-[#c5a059] text-[#FBF9F5] font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5"
          >
            {t.hero.getQuote}
          </button>
        </div>

        {/* Small Trust Line */}
        <div className="mt-8 text-xs text-[#a99c8f] tracking-widest uppercase flex items-center justify-center gap-2">
          <span>20+ Years Experience</span>
          <span className="text-[#c5a059]">•</span>
          <span>500+ Projects</span>
          <span className="text-[#c5a059]">•</span>
          <span>Custom Made</span>
        </div>

      </div>

      {/* Animated Bottom Scroll Indicator */}
      <a
        href="#experience-bar"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-[#c5a059]/70 hover:text-[#c5a059] transition-colors group cursor-pointer"
        aria-label="Scroll to experience"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-medium mb-1">
          Explore
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
