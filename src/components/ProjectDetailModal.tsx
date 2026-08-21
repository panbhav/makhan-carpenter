import React, { useState } from 'react';
import { X, MapPin, Sparkles, ArrowRight, Hammer, Shield } from 'lucide-react';
import type { Project, Language } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  language?: Language;
  onClose: () => void;
  onStartCustomProject: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  language = 'en',
  onClose,
  onStartCustomProject,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  const currentGalleryImage = project.galleryImages[activeImageIndex] || {
    url: project.coverImage,
    caption: project.title,
    tag: 'Cover',
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-300">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-6xl bg-[#120f0d] border border-[#c5a059]/30 rounded-sm shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-[#c5a059]/20 flex items-center justify-between bg-[#171310] shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-[#c5a059]/20 text-[#dfc185] border border-[#c5a059]/30 rounded-sm">
              {project.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[#a99c8f]">
              <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{project.location}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-sm text-[#a99c8f] hover:text-[#FBF9F5] hover:bg-[#251e18] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8">
          
          {/* Main Title & Subtitle */}
          <div>
            <span className="text-[11px] uppercase tracking-wider text-[#c5a059] block font-semibold mb-1">
              {project.designStyle}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#FBF9F5] font-normal mb-2">
              {language === 'en' ? project.title : (project.titleHi || project.title)}
            </h3>
            <p className="text-sm sm:text-base text-[#d4cbbf] font-light">
              {project.subtitle}
            </p>
          </div>

          {/* Interactive Multi-Image Gallery Showcase */}
          <div className="space-y-4">
            <div className="relative rounded-sm overflow-hidden border border-[#c5a059]/25 bg-black h-[320px] sm:h-[440px] md:h-[500px] group">
              <img
                src={currentGalleryImage.url}
                alt={currentGalleryImage.caption}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Image Tag & Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#ede5d8]">
                <div className="bg-[#120f0d]/90 px-3 py-1.5 rounded-sm border border-[#c5a059]/30 backdrop-blur-md max-w-lg">
                  <span className="text-[#c5a059] font-bold mr-2 uppercase text-[10px]">
                    {currentGalleryImage.tag || 'View'}:
                  </span>
                  <span>{currentGalleryImage.caption}</span>
                </div>
              </div>
            </div>

            {/* Thumbnail Selectors */}
            {project.galleryImages.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
                {project.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative shrink-0 w-24 sm:w-28 h-16 sm:h-20 rounded-sm overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#c5a059] ring-2 ring-[#c5a059]/30'
                        : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
                    <span className="absolute bottom-0 inset-x-0 bg-black/70 text-[9px] text-center text-[#dfc185] py-0.5 truncate px-1">
                      {img.tag}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#c5a059]/20">
            
            {/* Story & Requirement (Col 1 & 2) */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h4 className="font-serif text-lg text-[#c5a059] mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  The Project Story
                </h4>
                <p className="text-sm text-[#d4cbbf] leading-relaxed">
                  {language === 'en' ? project.projectStory : (project.projectStoryHi || project.projectStory)}
                </p>
              </div>

              <div>
                <h4 className="font-serif text-lg text-[#c5a059] mb-2 flex items-center gap-2">
                  <Hammer className="w-4 h-4" />
                  Craftsmanship Highlights
                </h4>
                <p className="text-sm text-[#d4cbbf] leading-relaxed">
                  {project.craftsmanshipHighlight}
                </p>
              </div>

              {project.customRequirements && (
                <div>
                  <h4 className="font-serif text-lg text-[#c5a059] mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Custom Requirements Executed
                  </h4>
                  <p className="text-sm text-[#a99c8f] bg-[#1a1410] p-3.5 rounded-sm border border-[#c5a059]/15">
                    {project.customRequirements}
                  </p>
                </div>
              )}
            </div>

            {/* Specifications Card (Col 3) */}
            <div className="bg-[#171310] border border-[#c5a059]/30 rounded-sm p-5 space-y-4">
              <h4 className="font-serif text-base text-[#FBF9F5] border-b border-[#c5a059]/20 pb-2">
                Project Specifications
              </h4>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#a99c8f] block">Category</span>
                <span className="text-xs text-[#dfc185] font-medium">{project.category}</span>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#a99c8f] block">Design Style</span>
                <span className="text-xs text-[#ede5d8]">{project.designStyle}</span>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#a99c8f] block">Materials Used</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.materials.map((mat, i) => (
                    <span key={i} className="text-[11px] bg-[#221b15] text-[#ede5d8] px-2 py-0.5 rounded-sm border border-[#c5a059]/20">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#a99c8f] block">Finish</span>
                <span className="text-xs text-[#ede5d8]">{project.finish}</span>
              </div>

              {project.dimensions && (
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#a99c8f] block">Dimensions</span>
                  <span className="text-xs text-[#ede5d8] font-mono">{project.dimensions}</span>
                </div>
              )}

              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#a99c8f] block">Location</span>
                <span className="text-xs text-[#ede5d8]">{project.location}</span>
              </div>

              {/* Inquiry Call to Action */}
              <div className="pt-4 border-t border-[#c5a059]/20">
                <p className="text-xs text-[#a99c8f] mb-3">
                  Interested in a similar custom design?
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onStartCustomProject(project.title);
                  }}
                  className="w-full py-3 px-4 rounded-sm bg-[#c5a059] hover:bg-[#d6b26b] text-[#0e0c0a] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
                >
                  <span>Get a Custom Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
