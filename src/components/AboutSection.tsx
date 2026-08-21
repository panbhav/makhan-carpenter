import React from 'react';
import { Sparkles, MapPin, Phone, Heart } from 'lucide-react';
import { siteConfig } from '../data/siteContent';
import { translations } from '../data/translations';
import type { Language } from '../types';

interface AboutSectionProps {
  language: Language;
  onOpenQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language, onOpenQuoteModal }) => {
  const t = translations[language];

  return (
    <section id="about" className="py-24 bg-[#090706] relative overflow-hidden border-t border-[#c5a059]/10">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#c5a059] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.about.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FBF9F5] font-normal tracking-tight mb-4">
            {t.about.heading}
          </h2>
          <div className="w-16 h-[1.5px] bg-[#c5a059]/60 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Workshop & Craftsmanship Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#c5a059]/30 shadow-2xl group bg-black">
              <img
                src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=900&q=85"
                alt="Makhan Carpenter at work in Rath Nagar, Alwar"
                className="w-full h-[440px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090706] via-transparent to-transparent opacity-80" />
            </div>

            {/* Floating Experience & Projects Badge */}
            <div className="absolute -bottom-6 -right-3 sm:right-6 bg-[#16120e] border border-[#c5a059]/40 p-4 sm:p-5 rounded-sm shadow-2xl backdrop-blur-md max-w-[260px]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-sm bg-[#c5a059] text-[#0e0c0a] flex items-center justify-center font-serif font-bold text-xl shrink-0 shadow-md">
                  20+
                </div>
                <div>
                  <span className="text-xs font-bold text-[#FBF9F5] block font-serif">Years • 500+ Projects</span>
                  <span className="text-[10px] text-[#c5a059] block">Rath Nagar, Alwar (Rajasthan)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-[#d4cbbf]">
            
            {/* Primary Paragraphs */}
            <p className="font-serif text-lg sm:text-xl text-[#f3ece2] font-light leading-relaxed">
              {t.about.story1}
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-[#d4cbbf]">
              {t.about.story2}
            </p>

            {/* Location & Coverage Card */}
            <div className="bg-[#14100d] border-l-2 border-[#c5a059] p-4 rounded-r-sm space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#c5a059]">
                <MapPin className="w-4 h-4" />
                <span>Rath Nagar, Alwar, Rajasthan</span>
              </div>
              <p className="text-xs text-[#a99c8f]">
                {t.about.locationNote}
              </p>
            </div>

            {/* Krishna-Inspired Brand Story Connection */}
            <div className="p-4 bg-[#18130f] border border-[#c5a059]/25 rounded-sm text-xs text-[#dfc185] leading-relaxed italic flex items-start gap-3">
              <Heart className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
              <span>{t.about.krishnaStory}</span>
            </div>

            {/* Direct Contact Action */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center">
              <a
                href={`tel:${siteConfig.contact.phonePrimaryRaw}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-sm bg-[#c5a059] hover:bg-[#d6b26b] text-[#0e0c0a] font-bold text-xs uppercase tracking-widest transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call {siteConfig.contact.phonePrimary}</span>
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-sm bg-[#181410] border border-[#c5a059]/35 hover:border-[#c5a059] text-[#FBF9F5] font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                {t.hero.getQuote}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
