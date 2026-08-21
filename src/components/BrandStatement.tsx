import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteContent';
import type { Language } from '../types';

interface BrandStatementProps {
  language: Language;
}

export const BrandStatement: React.FC<BrandStatementProps> = ({ language }) => {
  return (
    <section id="brand-statement" className="py-24 bg-[#0e0c0a] relative overflow-hidden">
      {/* Decorative subtle ambient glows */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-[#3b2819]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Accent */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-[#c5a059] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'The Atelier Philosophy' : 'कारीगरी की सोच'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FBF9F5] font-normal tracking-tight max-w-3xl leading-tight">
            “Crafting Furniture That Belongs to Your Space.”
          </h2>
          <div className="w-16 h-[1.5px] bg-[#c5a059]/60 mt-6" />
        </div>

        {/* Editorial Two-Column Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Handcraft Narrative */}
          <div className="lg:col-span-6 space-y-6 text-[#d4cbbf]">
            <p className="font-serif text-xl sm:text-2xl text-[#f3ece2] font-light leading-relaxed">
              {language === 'en' ? (
                <>
                  At <strong className="text-[#c5a059] font-normal">{siteConfig.brandName}</strong>, furniture is never treated as mere woodwork or factory output. It is an enduring piece of architecture sculpted by human hands to bring harmony, warmth, and dignity into your living environment.
                </>
              ) : (
                <>
                  <strong className="text-[#c5a059] font-normal">{siteConfig.brandName}</strong> में, हम फर्नीचर को केवल लकड़ी का ढांचा नहीं मानते, बल्कि यह आपके घर की सुंदरता और सुकून का एक अहम हिस्सा है जिसे हाथों के हुनर से संवारा जाता है।
                </>
              )}
            </p>
            
            <p className="text-sm sm:text-base leading-relaxed text-[#a99c8f]">
              {language === 'en' ? (
                <>
                  For over <strong>20 years</strong>, Makhan Carpenter has been the trusted craftsman for homeowners and architects across <strong>Uttar Pradesh</strong> and <strong>Rath Nagar, Alwar (Rajasthan)</strong>. Whether selecting seasoned CP Teak for an heirloom dining table or engineering a seamless floor-to-ceiling fluted wardrobe, every joint is calculated, hand-planed, and finished with meticulous devotion.
                </>
              ) : (
                <>
                  पिछले <strong>20+ वर्षों</strong> में <strong>500 से अधिक प्रोजेक्ट्स</strong> के साथ, Makhan Carpenter ने <strong>अलवर (राजस्थान)</strong> और <strong>उत्तर प्रदेश</strong> के कई घरों में मजबूती और विश्वास का रिश्ता कायम किया है।
                </>
              )}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#c5a059]/15">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold block">
                  {language === 'en' ? 'Craftsmanship' : 'मजबूत जोड़'}
                </span>
                <span className="text-xs text-[#a99c8f]">Traditional Joinery</span>
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold block">
                  {language === 'en' ? 'Precision' : 'सटीक नाप'}
                </span>
                <span className="text-xs text-[#a99c8f]">Laser Measurements</span>
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold block">
                  {language === 'en' ? 'Authentic Wood' : 'पक्की लकड़ी'}
                </span>
                <span className="text-xs text-[#a99c8f]">Seasoned Timber</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#dfc185]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                <span>Zero Particle Board / MDF Short-cuts</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                <span>IS:710 Marine Calibrated Plywood</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual Grid */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 relative">
            <div className="col-span-8 overflow-hidden rounded-sm border border-[#c5a059]/20 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=900&q=85"
                alt="Makhan Carpenter hand-planing authentic wood timber"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="col-span-4 flex flex-col gap-4">
              <div className="overflow-hidden rounded-sm border border-[#c5a059]/20 shadow-xl group flex-1">
                <img
                  src="https://images.unsplash.com/photo-1502005229762-ee1b2da9c5dd?auto=format&fit=crop&w=600&q=85"
                  alt="Fine joinery tools and wood shavings"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 min-h-[140px]"
                />
              </div>
              <div className="bg-[#1a1410] border border-[#c5a059]/30 rounded-sm p-4 text-center flex flex-col justify-center items-center shadow-lg">
                <span className="font-serif text-2xl sm:text-3xl text-[#c5a059] font-bold">500+</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#d4cbbf] mt-0.5">Projects Completed in UP & Alwar</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
