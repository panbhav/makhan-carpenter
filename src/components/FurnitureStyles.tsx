import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { furnitureStyles } from '../data/siteContent';
import { translations } from '../data/translations';
import type { Language } from '../types';

interface FurnitureStylesProps {
  language: Language;
  onOpenQuoteModal: () => void;
}

export const FurnitureStyles: React.FC<FurnitureStylesProps> = ({ language, onOpenQuoteModal }) => {
  const t = translations[language];

  return (
    <section id="furniture-styles" className="py-24 bg-[#0c0a09] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#c5a059] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.styles.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FBF9F5] font-normal tracking-tight mb-4">
            {t.styles.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#d4cbbf] font-light leading-relaxed">
            {t.styles.subheading}
          </p>
        </div>

        {/* Styles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {furnitureStyles.map((style) => (
            <div
              key={style.id}
              onClick={onOpenQuoteModal}
              className="group bg-[#14100d] border border-[#c5a059]/20 hover:border-[#c5a059]/50 rounded-sm overflow-hidden shadow-lg transition-all duration-400 cursor-pointer flex flex-col justify-between"
            >
              {/* Style Image */}
              <div className="relative h-56 overflow-hidden bg-black">
                <img
                  src={style.image}
                  alt={style.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14100d] via-transparent to-transparent opacity-80" />
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#0e0c0a]/90 text-[#dfc185] text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-sm border border-[#c5a059]/30 backdrop-blur-sm">
                    {language === 'en' ? style.name : style.nameHi}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-xl text-[#FBF9F5] font-normal group-hover:text-[#c5a059] transition-colors mb-2">
                    {language === 'en' ? style.name : style.nameHi}
                  </h3>
                  <p className="text-xs text-[#a99c8f] leading-relaxed">
                    {language === 'en' ? style.description : style.descriptionHi}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#c5a059]/15 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {style.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] bg-[#1d1712] text-[#d4cbbf] px-2 py-0.5 rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs text-[#c5a059] font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
