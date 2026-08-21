import React, { useState } from 'react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { galleryImages } from '../data/siteContent';

const GALLERY_CATEGORIES = [
  'All',
  'Wardrobes',
  'Dining',
  'Bedroom',
  'Kitchens',
  'Offices',
  'Doors',
  'Woodwork',
  'Furniture',
  'Details'
];

export const GallerySection: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filtered = selectedCat === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCat);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const prevImage = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filtered.length - 1));
  };

  const nextImage = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev! < filtered.length - 1 ? prev! + 1 : 0));
  };

  return (
    <section id="gallery" className="py-28 bg-[#090706] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[#c5a059] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Archive</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FBF9F5] font-normal tracking-tight mb-4">
            The Atelier Gallery
          </h2>
          <p className="text-sm sm:text-base text-[#d4cbbf] font-light leading-relaxed">
            High-resolution visual studies of finished custom furniture, architectural installations, and workshop timber grains.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-3.5 py-1.5 rounded-sm text-xs uppercase tracking-wider font-medium transition-all whitespace-nowrap ${
                selectedCat === cat
                  ? 'bg-[#c5a059] text-[#0e0c0a] font-bold shadow-md'
                  : 'bg-[#15110e] text-[#a99c8f] hover:text-[#ede5d8] border border-[#c5a059]/15'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-Style Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="group relative h-80 rounded-sm overflow-hidden bg-black border border-[#c5a059]/20 shadow-lg cursor-pointer hover:border-[#c5a059]/60 transition-all duration-400"
            >
              <img
                src={item.url}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                
                <div className="flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-black/60 text-[#c5a059] flex items-center justify-center border border-[#c5a059]/40 backdrop-blur-sm">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#c5a059] font-bold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg text-[#FBF9F5] font-normal">
                    {item.title}
                  </h3>
                  <span className="flex items-center gap-1 text-[11px] text-[#a99c8f] mt-1">
                    <MapPin className="w-3 h-3 text-[#c5a059]" />
                    {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full-Screen Lightbox Viewer */}
      {activeLightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 animate-in fade-in duration-200">
          
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-[#ede5d8] transition-colors z-50"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-[#c5a059] transition-colors z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-[#c5a059] transition-colors z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filtered[activeLightboxIndex].url}
              alt={filtered[activeLightboxIndex].title}
              className="max-w-full max-h-[75vh] object-contain rounded-sm shadow-2xl border border-[#c5a059]/30"
            />
            <div className="text-center mt-4">
              <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold block">
                {filtered[activeLightboxIndex].category}
              </span>
              <h3 className="font-serif text-xl text-[#FBF9F5] font-normal">
                {filtered[activeLightboxIndex].title}
              </h3>
              <span className="text-xs text-[#a99c8f]">
                {filtered[activeLightboxIndex].location}
              </span>
            </div>
          </div>

        </div>
      )}

    </section>
  );
};
