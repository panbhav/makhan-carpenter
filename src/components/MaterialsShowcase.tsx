import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { materialsData } from '../data/siteContent';
import type { MaterialItem } from '../types';

export const MaterialsShowcase: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem>(materialsData[0]);

  return (
    <section id="materials" className="py-28 bg-[#0c0a09] relative border-t border-[#c5a059]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#c5a059] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honest Sourcing & Material Integrity</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FBF9F5] font-normal tracking-tight mb-4">
            Curated Timbers & Architectural Materials
          </h2>
          <p className="text-sm sm:text-base text-[#d4cbbf] font-light leading-relaxed">
            Great furniture starts with authentic wood. We never use cheap particle boards. Explore the premium hardwoods, calibrated marine grade plywoods, and architectural hardware we craft with.
          </p>
        </div>

        {/* Interactive Material Grid & Detailed Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Material Selector List (Col 5) */}
          <div className="lg:col-span-5 space-y-3">
            {materialsData.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedMaterial(item)}
                className={`p-4 rounded-sm border transition-all duration-300 cursor-pointer flex items-center gap-4 ${
                  selectedMaterial.id === item.id
                    ? 'bg-[#1e1712] border-[#c5a059] shadow-lg'
                    : 'bg-[#14100d] border-[#c5a059]/15 hover:border-[#c5a059]/40 opacity-75 hover:opacity-100'
                }`}
              >
                <div className="w-16 h-16 rounded-sm overflow-hidden bg-black shrink-0 border border-white/10">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#c5a059] block">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-base text-[#FBF9F5] font-medium truncate">
                    {item.name}
                  </h3>
                  <span className="text-[11px] text-[#a99c8f] truncate block">
                    Durability: {item.durability}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Detailed Active Material Card (Col 7) */}
          <div className="lg:col-span-7 bg-[#14100d] border border-[#c5a059]/30 rounded-sm overflow-hidden shadow-2xl">
            
            <div className="relative h-64 sm:h-72 overflow-hidden bg-black">
              <img
                src={selectedMaterial.image}
                alt={selectedMaterial.name}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14100d] via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-[#c5a059] text-[#0e0c0a] px-2.5 py-0.5 rounded-sm inline-block mb-1 shadow-sm">
                  {selectedMaterial.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#FBF9F5] font-normal">
                  {selectedMaterial.name}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm text-[#d4cbbf] leading-relaxed">
                {selectedMaterial.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#1a1410] p-4 rounded-sm border border-[#c5a059]/15">
                  <span className="text-[10px] uppercase tracking-wider text-[#c5a059] block font-semibold mb-1">
                    Grain & Visual Character
                  </span>
                  <span className="text-xs text-[#ede5d8]">
                    {selectedMaterial.grainCharacter}
                  </span>
                </div>

                <div className="bg-[#1a1410] p-4 rounded-sm border border-[#c5a059]/15">
                  <span className="text-[10px] uppercase tracking-wider text-[#c5a059] block font-semibold mb-1">
                    Lifespan & Durability
                  </span>
                  <span className="text-xs text-[#ede5d8]">
                    {selectedMaterial.durability}
                  </span>
                </div>

                <div className="bg-[#1a1410] p-4 rounded-sm border border-[#c5a059]/15">
                  <span className="text-[10px] uppercase tracking-wider text-[#c5a059] block font-semibold mb-1">
                    Best Suited Applications
                  </span>
                  <span className="text-xs text-[#ede5d8]">
                    {selectedMaterial.bestFor}
                  </span>
                </div>

                <div className="bg-[#1a1410] p-4 rounded-sm border border-[#c5a059]/15">
                  <span className="text-[10px] uppercase tracking-wider text-[#c5a059] block font-semibold mb-1">
                    Recommended Finish Types
                  </span>
                  <span className="text-xs text-[#ede5d8]">
                    {selectedMaterial.finishType}
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
