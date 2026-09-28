import React from 'react';
import { Sparkles, MessageSquare, ArrowRight, Phone } from 'lucide-react';
import { siteConfig } from '../data/siteContent';
import { translations } from '../data/translations';
import type { Language } from '../types';

interface WeMakeItYourWayProps {
  language: Language;
  onOpenQuoteModal: () => void;
}

export const WeMakeItYourWay: React.FC<WeMakeItYourWayProps> = ({ language, onOpenQuoteModal }) => {
  const t = translations[language];

  const whatsappPromptUrl = `https://wa.me/${siteConfig.contact.whatsappPrimaryRaw}?text=${encodeURIComponent(
    language === 'en'
      ? 'Hello Makhan Carpenter, I have a furniture design / photo to share for discussion.'
      : 'नमस्ते Makhan Carpenter, मेरे पास एक फर्नीचर डिज़ाइन/फोटो है जिसपर मुझे चर्चा करनी है।'
  )}`;

  return (
    <section id="we-make-it-your-way" className="py-20 bg-[#120f0d] relative border-y border-[#c5a059]/20 overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3b2819]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-r from-[#18130f] via-[#1f1812] to-[#18130f] border border-[#c5a059]/35 rounded-sm p-8 sm:p-12 md:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Left Text Narrative */}
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-[#c5a059] text-xs font-semibold tracking-[0.25em] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.weMakeIt.tag}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FBF9F5] font-normal leading-tight">
              {t.weMakeIt.heading}
            </h2>

            <p className="text-sm sm:text-base text-[#d4cbbf] font-light leading-relaxed">
              {t.weMakeIt.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-[#dfc185]">
              <span className="flex items-center gap-1.5 bg-[#120f0d] px-3 py-1.5 rounded-sm border border-[#c5a059]/20">
                ✓ Send Pinterest / Instagram Photos
              </span>
              <span className="flex items-center gap-1.5 bg-[#120f0d] px-3 py-1.5 rounded-sm border border-[#c5a059]/20">
                ✓ Hand-Drawn Sketches & Layouts
              </span>
              <span className="flex items-center gap-1.5 bg-[#120f0d] px-3 py-1.5 rounded-sm border border-[#c5a059]/20">
                ✓ On-Site Laser Survey in Alwar
              </span>
            </div>
          </div>

          {/* Right Action Channels */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto shrink-0">
            
            {/* Primary Discuss on WhatsApp Button */}
            <a
              href={whatsappPromptUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-sm bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 shadow-[0_6px_25px_rgba(37,211,102,0.35)] transition-all hover:scale-102 active:scale-98"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.weMakeIt.whatsappPrompt}</span>
            </a>

            {/* Quote Request Modal Button */}
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-4 rounded-sm bg-[#c5a059] hover:bg-[#d6b26b] text-[#0e0c0a] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-all active:scale-98"
            >
              <span>{t.weMakeIt.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${siteConfig.contact.phonePrimaryRaw}`}
              className="text-center text-xs text-[#a99c8f] hover:text-[#ede5d8] transition-colors py-1 flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Or Call {siteConfig.contact.phonePrimary}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
