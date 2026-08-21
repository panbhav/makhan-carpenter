import React from 'react';
import { Sparkles, Star, Quote, MapPin } from 'lucide-react';
import { testimonialsData } from '../data/siteContent';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-28 bg-[#090706] relative overflow-hidden">
      {/* Decorative ambient glows */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#c5a059] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FBF9F5] font-normal tracking-tight mb-4">
            What Our Customers Say
          </h2>
          <p className="text-sm sm:text-base text-[#d4cbbf] font-light leading-relaxed">
            Real feedback from homeowners, architects, and estate owners across Uttar Pradesh and Alwar who trusted Makhan Carpenter with their living spaces.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="bg-[#120f0d] border border-[#c5a059]/20 hover:border-[#c5a059]/50 rounded-sm p-8 shadow-xl transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[#c5a059]/15">
                <Quote className="w-12 h-12" />
              </div>

              <div className="relative z-10 space-y-4">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c5a059] text-[#c5a059]" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="font-serif text-base sm:text-lg text-[#ede5d8] italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Project Metadata */}
              <div className="pt-6 mt-6 border-t border-[#c5a059]/15 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base text-[#FBF9F5] font-bold">
                    {t.name}
                  </h4>
                  <span className="text-xs text-[#c5a059] block">
                    {t.projectType}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-xs text-[#a99c8f]">
                  <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>{t.location}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
