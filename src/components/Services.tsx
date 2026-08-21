import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check, X } from 'lucide-react';
import { servicesData } from '../data/siteContent';
import type { ServiceItem } from '../types';

interface ServicesProps {
  onOpenQuoteModal: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuoteModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-28 bg-[#090706] relative">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#c5a059] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Carpentry Offerings</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FBF9F5] font-normal tracking-tight mb-4">
            Bespoke Woodworking Services
          </h2>
          <p className="text-sm sm:text-base text-[#d4cbbf] font-light leading-relaxed">
            From precision architectural cabinetry to monolithic solid timber tables, Makhan Carpenter provides end-to-end bespoke carpentry tailored to your exact floor plan.
          </p>
        </div>

        {/* 8-Card Luxury Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group bg-[#120f0d] border border-[#c5a059]/20 rounded-sm overflow-hidden shadow-lg hover:border-[#c5a059]/60 hover:shadow-[0_15px_35px_rgba(0,0,0,0.8)] transition-all duration-400 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Visual Image Banner */}
                <div className="relative h-48 overflow-hidden bg-black">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120f0d] via-transparent to-transparent opacity-80" />
                </div>

                {/* Body Content */}
                <div className="p-5">
                  <h3 className="font-serif text-xl text-[#FBF9F5] font-normal group-hover:text-[#c5a059] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#a99c8f] leading-relaxed line-clamp-3 mb-4">
                    {service.shortDesc}
                  </p>

                  <ul className="space-y-1.5 border-t border-[#c5a059]/15 pt-3">
                    {service.features.slice(0, 2).map((feat, i) => (
                      <li key={i} className="text-[11px] text-[#d4cbbf] flex items-center gap-1.5 truncate">
                        <span className="w-1 h-1 rounded-full bg-[#c5a059]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action Trigger */}
              <div className="px-5 pb-5 pt-2">
                <button
                  type="button"
                  className="w-full py-2 px-3 rounded-sm bg-[#1a1410] border border-[#c5a059]/25 group-hover:border-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-[#0e0c0a] text-[#dfc185] text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-3xl bg-[#14100d] border border-[#c5a059]/30 rounded-sm shadow-2xl overflow-hidden my-auto">
            
            {/* Header */}
            <div className="relative h-64 sm:h-72 overflow-hidden">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14100d] via-[#14100d]/40 to-black/60" />
              
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-sm bg-black/60 text-[#ede5d8] hover:text-[#c5a059] transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#c5a059] block mb-1">
                  Bespoke Craftsmanship
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#FBF9F5] font-normal">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm text-[#d4cbbf] leading-relaxed">
                {selectedService.fullDesc}
              </p>

              <div>
                <h4 className="font-serif text-base text-[#c5a059] mb-3">Key Features & Engineering</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#ede5d8]">
                      <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#c5a059]/15">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#a99c8f] block mb-1">Recommended Timbers</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedService.popularWoods.map((wood, i) => (
                      <span key={i} className="text-[11px] bg-[#1d1712] text-[#dfc185] px-2 py-0.5 rounded-sm border border-[#c5a059]/20">
                        {wood}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#a99c8f] block mb-1">Suitable Spaces</span>
                  <span className="text-xs text-[#ede5d8]">{selectedService.suitableFor}</span>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3 items-center justify-end">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-sm bg-[#1f1914] text-[#ede5d8] text-xs uppercase tracking-wider hover:bg-[#2c231b] transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onOpenQuoteModal();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-sm bg-[#c5a059] hover:bg-[#d6b26b] text-[#0e0c0a] font-bold text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Request Quote for {selectedService.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
