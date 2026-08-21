import React, { useState } from 'react';
import { Check, ArrowRight, Home, Maximize2, Download } from 'lucide-react';
import { roomPossibilities } from '../data/siteContent';
import { translations } from '../data/translations';
import type { Language, RoomPossibility } from '../types';
import type { ViewerImageItem } from './ImageViewerModal';

interface DesignPossibilitiesProps {
  language: Language;
  onOpenQuoteModal: () => void;
  onOpenImageViewer?: (images: ViewerImageItem[], index: number) => void;
}

export const DesignPossibilities: React.FC<DesignPossibilitiesProps> = ({
  language,
  onOpenQuoteModal,
  onOpenImageViewer,
}) => {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const t = translations[language];

  const current: RoomPossibility = roomPossibilities[activeRoomIndex];

  const roomViewerImages: ViewerImageItem[] = roomPossibilities.map((r) => ({
    url: r.image,
    title: `${r.roomName} Custom Woodwork`,
    titleHi: `${r.roomNameHi} कस्टम फर्नीचर`,
    category: r.roomName,
    caption: r.description,
    location: 'Raath Nagar, Alwar & UP',
  }));

  const handleOpenRoomPhoto = () => {
    if (onOpenImageViewer) {
      onOpenImageViewer(roomViewerImages, activeRoomIndex);
    }
  };

  return (
    <section id="design-possibilities" className="py-24 bg-[#090706] relative border-t border-[#c5a059]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[#c5a059] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            <Home className="w-3.5 h-3.5" />
            <span>{t.possibilities.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FBF9F5] font-normal tracking-tight mb-4">
            {t.possibilities.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#d4cbbf] font-light leading-relaxed">
            {t.possibilities.subheading}
          </p>
        </div>

        {/* Room Tab Selectors */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {roomPossibilities.map((room, idx) => (
            <button
              key={room.id}
              onClick={() => setActiveRoomIndex(idx)}
              className={`px-5 py-2.5 rounded-sm text-xs uppercase tracking-wider font-semibold transition-all whitespace-nowrap ${
                activeRoomIndex === idx
                  ? 'bg-[#c5a059] text-[#0e0c0a] shadow-lg'
                  : 'bg-[#15110e] text-[#a99c8f] hover:text-[#ede5d8] border border-[#c5a059]/15'
              }`}
            >
              {language === 'en' ? room.roomName : room.roomNameHi}
            </button>
          ))}
        </div>

        {/* Active Room Showcase Card */}
        <div className="bg-[#120f0d] border border-[#c5a059]/30 rounded-sm overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left Room Visual (Col 7) */}
          <div
            onClick={handleOpenRoomPhoto}
            className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[440px] bg-black overflow-hidden group cursor-pointer"
            title="Click to view photo in HD (Zoom & Save)"
          >
            <img
              src={current.image}
              alt={current.roomName}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#120f0d]/90 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120f0d] via-transparent to-transparent lg:hidden" />
            
            {/* Click to Zoom Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="px-4 py-2 rounded-sm bg-black/90 text-[#dfc185] border border-[#c5a059] text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-2xl backdrop-blur-md">
                <Maximize2 className="w-4 h-4 text-[#c5a059]" />
                <span>Click to Zoom & Save HD</span>
              </div>
            </div>

            <div className="absolute top-6 left-6 bg-[#0c0a09]/90 border border-[#c5a059]/40 px-3.5 py-1 rounded-sm backdrop-blur-md">
              <span className="text-xs font-serif font-bold text-[#c5a059] tracking-wider uppercase">
                {language === 'en' ? current.roomName : current.roomNameHi} Solutions
              </span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleOpenRoomPhoto();
              }}
              className="absolute bottom-4 right-4 z-10 px-2.5 py-1 rounded-sm bg-[#0c0a09]/90 hover:bg-[#c5a059] text-[#dfc185] hover:text-[#0e0c0a] border border-[#c5a059]/40 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-lg backdrop-blur-md"
            >
              <Download className="w-3 h-3" />
              <span>Save Photo</span>
            </button>
          </div>

          {/* Right Room Checklist & Action (Col 5) */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold block mb-1">
                Custom Woodwork Scope
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FBF9F5] font-normal mb-3">
                {language === 'en' ? current.roomName : current.roomNameHi}
              </h3>
              <p className="text-xs sm:text-sm text-[#d4cbbf] leading-relaxed mb-6">
                {language === 'en' ? current.description : current.descriptionHi}
              </p>

              {/* Items List */}
              <div className="space-y-2.5">
                {(language === 'en' ? current.items : current.itemsHi).map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-[#ede5d8]">
                    <div className="w-4 h-4 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#c5a059]/15 flex items-center justify-between">
              <span className="text-xs text-[#a99c8f]">
                Tailored for Alwar & UP homes
              </span>
              <button
                onClick={onOpenQuoteModal}
                className="px-5 py-2.5 rounded-sm bg-[#c5a059] hover:bg-[#d6b26b] text-[#0e0c0a] font-bold text-xs uppercase tracking-widest flex items-center gap-1.5 transition-all shadow-md active:scale-95"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
