import React, { useState } from 'react';
import { ArrowRight, MapPin, Eye, Sparkles } from 'lucide-react';
import { featuredProjects } from '../data/siteContent';
import type { Project, ProjectCategory } from '../types';

interface FeaturedWorkProps {
  onSelectProject: (project: Project) => void;
  onOpenQuoteModal: () => void;
}

const CATEGORIES: ProjectCategory[] = [
  'All',
  'Living Room',
  'Bedroom',
  'Wardrobes',
  'Dining',
  'Kitchen',
  'Office Furniture',
  'Doors',
  'Custom Furniture',
  'Wooden Interiors'
];

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onSelectProject, onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');

  const filteredProjects = selectedCategory === 'All'
    ? featuredProjects
    : featuredProjects.filter(p => p.category === selectedCategory);

  return (
    <section id="our-work" className="py-28 bg-[#0c0a09] relative">
      {/* Decorative subtle ambient glows */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#2a1d13]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[#c5a059] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Portfolio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FBF9F5] font-normal tracking-tight mb-4">
            Our Craftsmanship
          </h2>
          <p className="text-sm sm:text-base text-[#d4cbbf] font-light leading-relaxed">
            Every piece is made with attention to detail, proportion, strength, and finish. Handcrafted custom furniture designed to elevate discerning homes across UP and Alwar.
          </p>
        </div>

        {/* Category Filter Pills (Horizontal scrollable on mobile) */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-sm text-xs uppercase tracking-widest font-medium whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#c5a059] text-[#0e0c0a] font-bold shadow-[0_2px_15px_rgba(197,160,89,0.3)]'
                  : 'bg-[#181410] text-[#a99c8f] hover:text-[#ede5d8] border border-[#c5a059]/15 hover:border-[#c5a059]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative bg-[#14100d] border border-[#c5a059]/20 rounded-sm overflow-hidden shadow-xl hover:border-[#c5a059]/60 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-all duration-500 cursor-pointer flex flex-col"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-black">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#14100d] via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                
                {/* Category Badge & Location */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-[#0e0c0a]/85 text-[#dfc185] border border-[#c5a059]/30 rounded-sm backdrop-blur-md">
                    {project.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-[#ede5d8] bg-[#0e0c0a]/80 px-2 py-0.5 rounded-sm backdrop-blur-sm">
                    <MapPin className="w-3 h-3 text-[#c5a059]" />
                    {project.location}
                  </span>
                </div>

                {/* Floating "View Project" Pill on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="px-4 py-2 rounded-sm bg-[#0e0c0a]/90 text-[#c5a059] border border-[#c5a059] text-xs uppercase tracking-widest font-semibold flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Project</span>
                  </div>
                </div>
              </div>

              {/* Card Content Information */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#FBF9F5] font-normal group-hover:text-[#c5a059] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a99c8f] line-clamp-2 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#c5a059]/15 flex items-center justify-between text-xs">
                  <span className="text-[#a99c8f] truncate max-w-[180px]">
                    {project.materials[0]}
                  </span>
                  <span className="text-[#c5a059] font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Custom Project Callout Banner */}
        <div className="mt-16 bg-[#16120e] border border-[#c5a059]/30 rounded-sm p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-2xl text-[#FBF9F5] font-normal">
              Have a unique architectural furniture idea?
            </h3>
            <p className="text-xs sm:text-sm text-[#a99c8f]">
              We customize dimensions, timbers, and finishes to harmonize with your interior space in UP and Alwar.
            </p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="shrink-0 px-7 py-3.5 rounded-sm bg-[#c5a059] hover:bg-[#d6b26b] text-[#0e0c0a] font-bold text-xs uppercase tracking-widest transition-all shadow-lg active:scale-95 flex items-center gap-2"
          >
            <span>Commission a Custom Piece</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
