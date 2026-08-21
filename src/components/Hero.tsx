import React from 'react';
import { ArrowRight, ChevronDown, Compass, Award, Shield } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* High-Resolution Background Photography with Cinematic Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=90"
          alt="Luxury handcrafted wooden interior and bespoke furniture by Makhan Carpenter"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]"
        />
        {/* Multilayer Dark Vignette & Texture Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0807]/95 via-[#0e0c0a]/80 to-[#0a0807]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-[#0a0807]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center my-auto">
        
        {/* Subtle Luxury Pre-Heading Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1e1712]/90 border border-[#c5a059]/30 text-[#dfc185] text-xs font-semibold tracking-[0.25em] uppercase mb-6 shadow-xl backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] animate-ping" />
          <span>20+ Years of Master Woodworking • UP & Alwar (Rajasthan)</span>
        </div>

        {/* Main Hero Serif Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#FBF9F5] leading-[1.08] mb-6 max-w-4xl">
          Crafted by Hand. <br />
          <span className="italic font-light text-[#c5a059] font-serif">Designed for Life.</span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-[#d4cbbf] max-w-2xl mx-auto font-light leading-relaxed mb-10 tracking-wide">
          {siteConfig.subheading}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md">
          <a
            href="#our-work"
            className="w-full sm:w-auto px-8 py-4 rounded-sm bg-[#c5a059] hover:bg-[#d6b26b] text-[#0e0c0a] font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_4px_30px_rgba(197,160,89,0.3)] hover:shadow-[0_6px_35px_rgba(197,160,89,0.45)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
          >
            <span>View Our Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto px-8 py-4 rounded-sm bg-[#1a1410]/80 hover:bg-[#261e18] border border-[#c5a059]/40 hover:border-[#c5a059] text-[#FBF9F5] font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5"
          >
            Get a Custom Quote
          </button>
        </div>

        {/* Highlight Trust Badges */}
        <div className="grid grid-cols-3 gap-4 sm:gap-10 mt-14 pt-8 border-t border-[#c5a059]/15 max-w-3xl w-full text-center">
          <div className="flex flex-col items-center">
            <Award className="w-5 h-5 text-[#c5a059] mb-1.5" />
            <span className="text-xs sm:text-sm font-serif font-bold text-[#FBF9F5] tracking-wider">20+ Years</span>
            <span className="text-[10px] sm:text-xs text-[#a39485]">Master Craftsmanship</span>
          </div>
          <div className="flex flex-col items-center border-x border-[#c5a059]/15 px-2">
            <Compass className="w-5 h-5 text-[#c5a059] mb-1.5" />
            <span className="text-xs sm:text-sm font-serif font-bold text-[#FBF9F5] tracking-wider">100% Bespoke</span>
            <span className="text-[10px] sm:text-xs text-[#a39485]">Made to Measure</span>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="w-5 h-5 text-[#c5a059] mb-1.5" />
            <span className="text-xs sm:text-sm font-serif font-bold text-[#FBF9F5] tracking-wider">UP & Alwar</span>
            <span className="text-[10px] sm:text-xs text-[#a39485]">Regional Excellence</span>
          </div>
        </div>

      </div>

      {/* Animated Bottom Scroll Indicator */}
      <a
        href="#brand-statement"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-[#c5a059]/70 hover:text-[#c5a059] transition-colors group cursor-pointer"
        aria-label="Scroll to introduction"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-medium mb-1 group-hover:tracking-[0.35em] transition-all">
          Explore Atelier
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
