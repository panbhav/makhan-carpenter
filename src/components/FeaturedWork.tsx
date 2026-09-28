import React, { useState } from 'react';
import { ArrowRight, MapPin, Eye, Sparkles, Download, Maximize2 } from 'lucide-react';
import { featuredProjects } from '../data/siteContent';
import { translations } from '../data/translations';
import type { Project, ProjectCategory, Language } from '../types';
import type { ViewerImageItem } from './ImageViewerModal';

interface FeaturedWorkProps {
  language: Language;
  onSelectProject: (project: Project) => void;
  onOpenQuoteModal: () => void;
  onOpenImageViewer: (images: ViewerImageItem[], index: number) => void;
}

const CATEGORIES: { label: ProjectCategory; labelHi: string }[] = [
  { label: 'All', labelHi: 'सभी (All)' },
  { label: 'Bedroom', labelHi: 'बेडरूम' },
  { label: 'Living Room', labelHi: 'लिविंग रूम' },
  { label: 'Wardrobes', labelHi: 'अलमारी' },
  { label: 'Kitchen', labelHi: 'किचन' },
  { label: 'Dining', labelHi: 'डाइनिंग' },
  { label: 'TV Units', labelHi: 'टीवी यूनिट्स' },
  { label: 'Office', labelHi: 'ऑफिस' },
  { label: 'Doors', labelHi: 'दरवाजे' },
  { label: 'Interior Woodwork', labelHi: 'इंटीरियर' },
  { label: 'Kids', labelHi: 'किड्स' },
  { label: 'Custom Furniture', labelHi: 'कस्टम फर्नीचर' },
];

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({
  language,
  onSelectProject,
  onOpenQuoteModal,
  onOpenImageViewer,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const t = translations[language];

  const filteredProjects = selectedCategory === 'All'
    ? featuredProjects
    : featuredProjects.filter(p => p.category === selectedCategory);

  // Convert filtered projects into ViewerImageItem format for the smart lightbox
  const viewerImagesList: ViewerImageItem[] = filteredProjects.map((p) => ({
    url: p.coverImage,
    title: p.title,
    titleHi: p.titleHi,
    category: p.category,
    caption: p.shortDescription,
    location: p.location,
    materials: p.materials,
    dimensions: p.dimensions,
  }));

  const handleOpenPhotoViewer = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    onOpenImageViewer(viewerImagesList, index);
  };

  return (
    <section id="our-work" className="py-24 bg-[#0c0a09] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[#c5a059] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.portfolio.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FBF9F5] font-normal tracking-tight mb-4">
            {t.portfolio.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#d4cbbf] font-light leading-relaxed">
            {language === 'en'
              ? 'Click any photo to zoom in HD, save to your device, or inspect craftsmanship details.'
              : 'किसी भी फोटो पर क्लिक करके उसे ज़ूम करें, अपने फोन में सेव करें या विवरण देखें।'}
          </p>
        </div>

        {/* 12-Category Filter Pills (Wrapped cleanly into centered rows - zero cutoff) */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-5xl mx-auto mb-12 px-2 sm:px-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setSelectedCategory(cat.label)}
              className={`px-3.5 py-1.5 rounded-sm text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat.label
                  ? 'bg-[#c5a059] text-[#0e0c0a] shadow-[0_2px_15px_rgba(197,160,89,0.3)] scale-105'
                  : 'bg-[#181410] text-[#a99c8f] hover:text-[#ede5d8] hover:bg-[#221c17] border border-[#c5a059]/15 hover:border-[#c5a059]/40'
              }`}
            >
              {language === 'en' ? cat.label : cat.labelHi}
            </button>
          ))}
        </div>

        {/* Projects Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group relative bg-[#14100d] border border-[#c5a059]/20 rounded-sm overflow-hidden shadow-xl hover:border-[#c5a059]/60 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Direct Click to Zoom & Save */}
                <div
                  onClick={(e) => handleOpenPhotoViewer(idx, e)}
                  className="relative h-72 sm:h-80 overflow-hidden bg-black cursor-pointer"
                  title="Click to view photo in HD (Zoom & Save)"
                >
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14100d] via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-300" />
                  
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

                  {/* Floating Action Badge: Zoom & Save Photo in HD */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="px-4 py-2.5 rounded-sm bg-[#0e0c0a]/95 text-[#dfc185] border border-[#c5a059] text-xs uppercase tracking-widest font-bold flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow-2xl backdrop-blur-md">
                      <Maximize2 className="w-4 h-4 text-[#c5a059]" />
                      <span>{language === 'en' ? 'View & Zoom Photo' : 'फोटो ज़ूम करें'}</span>
                    </div>
                  </div>

                  {/* Quick Save Photo Icon in Bottom-Right */}
                  <button
                    onClick={(e) => handleOpenPhotoViewer(idx, e)}
                    className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded-sm bg-[#0c0a09]/90 hover:bg-[#c5a059] text-[#dfc185] hover:text-[#0e0c0a] border border-[#c5a059]/40 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-lg backdrop-blur-md"
                  >
                    <Download className="w-3 h-3" />
                    <span>Save</span>
                  </button>
                </div>

                {/* Card Content Information */}
                <div
                  onClick={() => onSelectProject(project)}
                  className="p-6 cursor-pointer"
                >
                  <span className="text-[10px] uppercase tracking-wider text-[#c5a059] block font-semibold mb-1">
                    {project.designStyle}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#FBF9F5] font-normal group-hover:text-[#c5a059] transition-colors mb-2">
                    {language === 'en' ? project.title : (project.titleHi || project.title)}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a99c8f] line-clamp-2 leading-relaxed mb-4">
                    {language === 'en' ? project.shortDescription : (project.shortDescriptionHi || project.shortDescription)}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-[#c5a059]/15 flex items-center justify-between text-xs">
                  <button
                    onClick={(e) => handleOpenPhotoViewer(idx, e)}
                    className="text-[#dfc185] hover:text-white font-medium flex items-center gap-1.5 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>{language === 'en' ? 'Inspect Photo' : 'फोटो देखें'}</span>
                  </button>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-[#c5a059] font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>{t.portfolio.viewProject}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Custom Project Callout */}
        <div className="mt-16 bg-[#16120e] border border-[#c5a059]/30 rounded-sm p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-2xl text-[#FBF9F5] font-normal">
              Interested in a custom furniture piece for your space?
            </h3>
            <p className="text-xs sm:text-sm text-[#a99c8f]">
              We customize dimensions, timbers, and finishes across Raath Nagar and Alwar (Rajasthan).
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
