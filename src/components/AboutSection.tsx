import React from 'react';
import { Sparkles, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

interface AboutSectionProps {
  onOpenQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="about" className="py-28 bg-[#090706] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pre-heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#c5a059] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Artisan Heritage</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FBF9F5] font-normal tracking-tight mb-4">
            The Craft Behind the Furniture
          </h2>
          <div className="w-16 h-[1.5px] bg-[#c5a059]/60 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait & Workshop Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#c5a059]/30 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=900&q=85"
                alt="Makhan Carpenter crafting bespoke wooden furniture in his atelier"
                className="w-full h-[450px] sm:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090706] via-transparent to-transparent opacity-80" />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#16120e] border border-[#c5a059]/40 p-5 rounded-sm shadow-2xl backdrop-blur-md max-w-[240px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-[#c5a059] text-[#0e0c0a] flex items-center justify-center font-serif font-bold text-xl shrink-0 shadow-md">
                  20+
                </div>
                <div>
                  <span className="text-xs font-bold text-[#FBF9F5] block font-serif">Years of Mastery</span>
                  <span className="text-[10px] text-[#c5a059] block">UP & Alwar (Rajasthan)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Artisan Narrative */}
          <div className="lg:col-span-7 space-y-6 text-[#d4cbbf]">
            <blockquote className="font-serif text-xl sm:text-2xl text-[#f3ece2] font-light leading-relaxed border-l-2 border-[#c5a059] pl-6 italic">
              “Furniture is not simply something we build. It is something we create to become part of your home, witnessing your family's memories for generations.”
            </blockquote>

            <p className="text-sm sm:text-base leading-relaxed text-[#d4cbbf]">
              Founded on the timeless virtues of precision joinery, authentic material selection, and heartfelt dedication, <strong className="text-[#c5a059] font-normal">{siteConfig.brandName}</strong> represents over two decades of fine woodcraft. 
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-[#a99c8f]">
              Operating across <strong>Uttar Pradesh</strong> and <strong>Alwar (Rajasthan)</strong>, Makhan has spent twenty years perfecting the delicate art of working with natural timbers — from seasoned CP Teak (Sagwan) and rich American Walnut to European Oak and calibrated marine grade plywood.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#c5a059]/15">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-[#ede5d8] block">Personal Craftsman Supervision</span>
                  <span className="text-[11px] text-[#a99c8f]">Makhan personally oversees each cut and joint.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-[#ede5d8] block">Enduring Generational Quality</span>
                  <span className="text-[11px] text-[#a99c8f]">Built to withstand climate shifts without loosening.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center">
              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-7 py-3.5 rounded-sm bg-[#c5a059] hover:bg-[#d6b26b] text-[#0e0c0a] font-bold text-xs uppercase tracking-widest transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Consult with Makhan Carpenter</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs text-[#a99c8f]">
                <MapPin className="w-4 h-4 text-[#c5a059]" />
                <span>On-site visits in UP, Alwar & NCR</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
