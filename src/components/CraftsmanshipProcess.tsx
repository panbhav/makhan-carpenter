import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Hammer } from 'lucide-react';
import { processSteps } from '../data/siteContent';

export const CraftsmanshipProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const current = processSteps[activeStep];

  return (
    <section id="craftsmanship" className="py-28 bg-[#090706] relative overflow-hidden">
      {/* Decorative background radial pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#c5a059_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#c5a059] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            <Hammer className="w-3.5 h-3.5" />
            <span>The Workshop Journey</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FBF9F5] font-normal tracking-tight mb-4">
            From Raw Wood to Refined Furniture
          </h2>
          <p className="text-sm sm:text-base text-[#d4cbbf] font-light leading-relaxed">
            Witness the disciplined 8-stage woodcraft ritual that transforms untreated seasoned lumber into timeless heirloom furniture.
          </p>
        </div>

        {/* Step Progress Navigation Bar */}
        <div className="flex items-center justify-between gap-1 overflow-x-auto pb-4 mb-10 border-b border-[#c5a059]/20 scrollbar-none">
          {processSteps.map((step, idx) => (
            <button
              key={step.stepNumber}
              onClick={() => setActiveStep(idx)}
              className={`flex-1 min-w-[130px] sm:min-w-[150px] p-3 text-left transition-all duration-300 relative rounded-sm ${
                activeStep === idx
                  ? 'bg-[#1e1712] border-b-2 border-[#c5a059]'
                  : 'hover:bg-[#15110e] opacity-60 hover:opacity-100'
              }`}
            >
              <span className={`font-serif text-lg font-bold block ${
                activeStep === idx ? 'text-[#c5a059]' : 'text-[#a99c8f]'
              }`}>
                {step.stepNumber}
              </span>
              <span className="text-xs text-[#ede5d8] font-medium truncate block mt-0.5">
                {step.title}
              </span>
            </button>
          ))}
        </div>

        {/* Featured Step Visual Card */}
        <div className="bg-[#120f0d] border border-[#c5a059]/30 rounded-sm overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left Column: Workshop Stage Image */}
          <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[460px] bg-black overflow-hidden group">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#120f0d]/90 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120f0d] via-transparent to-transparent lg:hidden" />
            
            {/* Step Badge */}
            <div className="absolute top-6 left-6 bg-[#0c0a09]/90 border border-[#c5a059]/40 px-3.5 py-1.5 rounded-sm backdrop-blur-md">
              <span className="text-xs font-serif font-bold text-[#c5a059] tracking-wider">
                STAGE {current.stepNumber} OF 08
              </span>
            </div>
          </div>

          {/* Right Column: Step Narrative & Details */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold block mb-1">
                {current.subtitle}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FBF9F5] font-normal mb-4">
                {current.title}
              </h3>
              <p className="text-sm text-[#d4cbbf] leading-relaxed mb-6">
                {current.description}
              </p>

              <div className="bg-[#1a1410] border-l-2 border-[#c5a059] p-4 rounded-r-sm">
                <span className="text-[11px] uppercase tracking-wider text-[#a99c8f] block mb-1 font-semibold">
                  Workshop Milestone
                </span>
                <span className="text-xs text-[#dfc185]">
                  {current.keyAction}
                </span>
              </div>
            </div>

            {/* Stepper Navigation Buttons */}
            <div className="pt-6 border-t border-[#c5a059]/15 flex items-center justify-between">
              <button
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : processSteps.length - 1))}
                className="px-4 py-2 rounded-sm bg-[#1a1410] hover:bg-[#251d16] text-[#ede5d8] text-xs font-medium uppercase tracking-wider flex items-center gap-1.5 transition-colors border border-[#c5a059]/20"
              >
                <ChevronLeft className="w-4 h-4 text-[#c5a059]" />
                <span>Previous</span>
              </button>

              <span className="text-xs text-[#a99c8f] font-mono">
                {activeStep + 1} / {processSteps.length}
              </span>

              <button
                onClick={() => setActiveStep((prev) => (prev < processSteps.length - 1 ? prev + 1 : 0))}
                className="px-4 py-2 rounded-sm bg-[#c5a059] hover:bg-[#d6b26b] text-[#0e0c0a] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-md"
              >
                <span>Next Stage</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
