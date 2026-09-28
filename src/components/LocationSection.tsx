import React from 'react';
import { MapPin, Phone, Compass, CheckCircle2, Navigation } from 'lucide-react';
import { siteConfig } from '../data/siteContent';
import { translations } from '../data/translations';
import type { Language } from '../types';

interface LocationSectionProps {
  language: Language;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section id="location" className="py-24 bg-[#0e0c0a] relative border-t border-[#c5a059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#c5a059] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>{t.location.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FBF9F5] font-normal tracking-tight mb-4">
            {t.location.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#d4cbbf] font-light leading-relaxed">
            {t.location.callPrompt}
          </p>
        </div>

        {/* Location & Service Area Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Atelier Workshop Location Card */}
          <div className="bg-[#14100d] border border-[#c5a059]/30 rounded-sm p-8 shadow-xl space-y-5">
            <div className="w-12 h-12 rounded-sm bg-[#1e1712] border border-[#c5a059]/40 text-[#c5a059] flex items-center justify-center shadow-md">
              <MapPin className="w-6 h-6" />
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#c5a059] font-bold block mb-1">
                {t.location.addressTitle}
              </span>
              <h3 className="font-serif text-2xl text-[#FBF9F5] font-normal">
                {siteConfig.location.address}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#a99c8f] leading-relaxed">
              Our central carpentry atelier and workshop is located at Raath Nagar, Alwar. We personally inspect materials and build custom furniture for local residences and villas.
            </p>

            <div className="pt-2 border-t border-[#c5a059]/15">
              <span className="text-xs text-[#dfc185] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                <span>On-site visits & laser surveys across Alwar</span>
              </span>
            </div>
          </div>

          {/* Regional Service Coverage Card */}
          <div className="bg-[#14100d] border border-[#c5a059]/30 rounded-sm p-8 shadow-xl space-y-5">
            <div className="w-12 h-12 rounded-sm bg-[#1e1712] border border-[#c5a059]/40 text-[#c5a059] flex items-center justify-center shadow-md">
              <Navigation className="w-6 h-6" />
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#c5a059] font-bold block mb-1">
                {t.location.areasTitle}
              </span>
              <h3 className="font-serif text-2xl text-[#FBF9F5] font-normal">
                {siteConfig.location.serviceAreas}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#a99c8f] leading-relaxed">
              Over the last 20+ years, Makhan Carpenter has completed 500+ projects across Raath Nagar and Alwar (Rajasthan).
            </p>

            {/* Direct Phone Call Buttons */}
            <div className="pt-2 border-t border-[#c5a059]/15 space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-[#a99c8f] block">
                Direct Contact Lines:
              </span>
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href={`tel:${siteConfig.contact.phonePrimaryRaw}`}
                  className="flex-1 py-2 px-3 bg-[#1e1712] hover:bg-[#281f17] border border-[#c5a059]/30 rounded-sm text-xs text-[#ede5d8] font-mono flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>{siteConfig.contact.phonePrimary}</span>
                </a>
                <a
                  href={`tel:${siteConfig.contact.phoneSecondaryRaw}`}
                  className="flex-1 py-2 px-3 bg-[#1e1712] hover:bg-[#281f17] border border-[#c5a059]/30 rounded-sm text-xs text-[#ede5d8] font-mono flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>{siteConfig.contact.phoneSecondary}</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
