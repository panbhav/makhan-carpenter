import React from 'react';
import { Sparkles, Star, Quote, MapPin, ArrowRight } from 'lucide-react';
import { testimonialsData } from '../data/siteContent';
import { translations } from '../data/translations';
import type { Language } from '../types';

interface TestimonialsProps {
  language: Language;
  onOpenQuoteModal: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ language, onOpenQuoteModal }) => {
  const t = translations[language];

  return (
    <section className="py-24 bg-[#090706] relative overflow-hidden border-t border-[#c5a059]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#c5a059] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.reviews.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FBF9F5] font-normal tracking-tight mb-4">
            {t.reviews.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#d4cbbf] font-light leading-relaxed">
            {t.reviews.subheading}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-[#120f0d] border border-[#c5a059]/20 hover:border-[#c5a059]/50 rounded-sm p-8 shadow-xl transition-all duration-300 relative flex flex-col justify-between"
            >
              <div className="absolute top-6 right-6 text-[#c5a059]/15">
                <Quote className="w-12 h-12" />
              </div>

              <div className="relative z-10 space-y-4">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c5a059] text-[#c5a059]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-serif text-base sm:text-lg text-[#ede5d8] italic leading-relaxed">
                  "{language === 'en' ? item.quote : (item.quoteHi || item.quote)}"
                </p>
              </div>

              {/* Author & Project Metadata */}
              <div className="pt-6 mt-6 border-t border-[#c5a059]/15 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base text-[#FBF9F5] font-bold">
                    {item.name}
                  </h4>
                  <span className="text-xs text-[#c5a059] block">
                    {item.projectType}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-xs text-[#a99c8f]">
                  <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>{item.location}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA: See More Customer Experiences */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-3 rounded-sm bg-[#181410] border border-[#c5a059]/35 hover:border-[#c5a059] text-[#dfc185] hover:text-[#FBF9F5] text-xs uppercase tracking-widest font-semibold transition-all inline-flex items-center gap-2"
          >
            <span>{t.reviews.cta}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
