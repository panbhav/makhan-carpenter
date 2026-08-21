import React from 'react';
import { Hammer, Ruler, ShieldCheck, Compass, Sparkles, HeartHandshake } from 'lucide-react';
import { whyChoosePillars } from '../data/siteContent';

const ICONS_MAP: Record<string, React.ReactNode> = {
  Hammer: <Hammer className="w-6 h-6 text-[#c5a059]" />,
  Ruler: <Ruler className="w-6 h-6 text-[#c5a059]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#c5a059]" />,
  Compass: <Compass className="w-6 h-6 text-[#c5a059]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#c5a059]" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#c5a059]" />
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-[#0e0c0a] relative border-y border-[#c5a059]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#c5a059] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Makhan Standard</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FBF9F5] font-normal tracking-tight mb-4">
            Craftsmanship You Can Trust
          </h2>
          <p className="text-sm sm:text-base text-[#d4cbbf] font-light leading-relaxed">
            We reject the disposable culture of mass-manufactured flat-pack boards. Every piece built in our workshop is engineered with generational strength, authentic timber, and honest craftsman pricing.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChoosePillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-[#14100d] border border-[#c5a059]/15 hover:border-[#c5a059]/45 rounded-sm p-8 shadow-xl transition-all duration-300 group hover:-translate-y-1 relative flex flex-col justify-between"
            >
              {/* Subtle accent corner line */}
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden pointer-events-none">
                <div className="w-12 h-[1px] bg-[#c5a059]/40 transform rotate-45 translate-x-3 translate-y-3" />
              </div>

              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-sm bg-[#1e1712] border border-[#c5a059]/30 flex items-center justify-center mb-6 group-hover:border-[#c5a059] group-hover:bg-[#281f18] transition-colors shadow-md">
                  {ICONS_MAP[pillar.icon] || <Sparkles className="w-6 h-6 text-[#c5a059]" />}
                </div>

                <h3 className="font-serif text-xl text-[#FBF9F5] font-normal mb-3 group-hover:text-[#c5a059] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#a99c8f] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#c5a059]/10 flex items-center justify-between text-[10px] text-[#c5a059]/70 uppercase tracking-widest font-semibold">
                <span>Pillar 0{index + 1}</span>
                <span className="w-6 h-[1px] bg-[#c5a059]/30" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
