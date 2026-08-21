import React from 'react';
import { statisticsData } from '../data/siteContent';

export const StatsCounter: React.FC = () => {
  return (
    <section className="py-20 bg-[#0e0c0a] relative border-y border-[#c5a059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
          {statisticsData.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-6 bg-[#14100d] border border-[#c5a059]/15 rounded-sm shadow-md hover:border-[#c5a059]/40 transition-all duration-300 group"
            >
              <div className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#c5a059] group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              
              <div className="font-serif text-base sm:text-lg text-[#FBF9F5] font-medium mt-2">
                {stat.label}
              </div>

              <div className="text-xs text-[#a99c8f] mt-1 line-clamp-2 max-w-[200px]">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
