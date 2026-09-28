import React from 'react';
import { Award, Hammer, Compass, Shield, ArrowRight } from 'lucide-react';
import { translations } from '../data/translations';
import type { Language } from '../types';

interface CraftsmanshipSectionProps {
  language: Language;
  onOpenQuoteModal: () => void;
}

export const CraftsmanshipSection: React.FC<CraftsmanshipSectionProps> = ({
  language,
  onOpenQuoteModal,
}) => {
  const t = translations[language];

  return (
    <section id="experience" className="py-28 bg-[#090706] relative overflow-hidden">
      {/* Background Photography with Deep Warm Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1800&q=85"
          alt="Hands of master carpenter Makhan shaping seasoned wood"
          className="w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090706] via-[#090706]/90 to-[#090706]" />
        <div className="absolute inset-0 bg-[radial-gradient(#c5a059_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-10" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e1712]/90 border border-[#c5a059]/30 text-[#dfc185] text-xs font-semibold tracking-[0.25em] uppercase mb-6 shadow-xl backdrop-blur-md">
          <Hammer className="w-3.5 h-3.5 text-[#c5a059]" />
          <span>{t.craftSection.tag}</span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#FBF9F5] font-normal tracking-tight max-w-3xl mx-auto leading-tight mb-6">
          {t.craftSection.heading}
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-[#d4cbbf] max-w-3xl mx-auto font-light leading-relaxed mb-10">
          {t.craftSection.description}
        </p>

        {/* 4 Experience Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-[#14100d]/90 border border-[#c5a059]/25 p-5 rounded-sm backdrop-blur-md">
            <Award className="w-6 h-6 text-[#c5a059] mx-auto mb-2" />
            <span className="font-serif text-base text-[#FBF9F5] font-bold block">20+ Years</span>
            <span className="text-[11px] text-[#a99c8f]">Practical Wood Mastery</span>
          </div>

          <div className="bg-[#14100d]/90 border border-[#c5a059]/25 p-5 rounded-sm backdrop-blur-md">
            <Hammer className="w-6 h-6 text-[#c5a059] mx-auto mb-2" />
            <span className="font-serif text-base text-[#FBF9F5] font-bold block">500+ Projects</span>
            <span className="text-[11px] text-[#a99c8f]">Delivered with Care</span>
          </div>

          <div className="bg-[#14100d]/90 border border-[#c5a059]/25 p-5 rounded-sm backdrop-blur-md">
            <Compass className="w-6 h-6 text-[#c5a059] mx-auto mb-2" />
            <span className="font-serif text-base text-[#FBF9F5] font-bold block">Precision Fit</span>
            <span className="text-[11px] text-[#a99c8f]">Laser Site Surveys</span>
          </div>

          <div className="bg-[#14100d]/90 border border-[#c5a059]/25 p-5 rounded-sm backdrop-blur-md">
            <Shield className="w-6 h-6 text-[#c5a059] mx-auto mb-2" />
            <span className="font-serif text-base text-[#FBF9F5] font-bold block">Raath Nagar, Alwar</span>
            <span className="text-[11px] text-[#a99c8f]">Local Craft Trust</span>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={onOpenQuoteModal}
          className="px-8 py-4 rounded-sm bg-[#c5a059] hover:bg-[#d6b26b] text-[#0e0c0a] font-bold text-xs uppercase tracking-widest transition-all shadow-[0_4px_25px_rgba(197,160,89,0.3)] active:scale-95 inline-flex items-center gap-2"
        >
          <span>{t.craftSection.cta}</span>
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>
    </section>
  );
};
