import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Download,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Info,
  Maximize2,
  Sparkles
} from 'lucide-react';
import { siteConfig } from '../data/siteContent';
import type { Language } from '../types';

export interface ViewerImageItem {
  url: string;
  title: string;
  titleHi?: string;
  category?: string;
  caption?: string;
  location?: string;
  materials?: string[];
  dimensions?: string;
}

interface ImageViewerModalProps {
  images: ViewerImageItem[];
  initialIndex?: number;
  isOpen: boolean;
  language?: Language;
  onClose: () => void;
  onRequestQuote?: (itemTitle: string) => void;
}

export const ImageViewerModal: React.FC<ImageViewerModalProps> = ({
  images,
  initialIndex = 0,
  isOpen,
  language = 'en',
  onClose,
  onRequestQuote,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [showInfo, setShowInfo] = useState(false);
  const [isSavedFeedback, setIsSavedFeedback] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setZoom(1);
      setPan({ x: 0, y: 0 });
      setShowInfo(false);
    }
  }, [isOpen, initialIndex]);

  // Reset zoom & pan when image index changes
  const resetZoom = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  const handleNext = useCallback(() => {
    if (images.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
    resetZoom();
  }, [images.length, resetZoom]);

  const handlePrev = useCallback(() => {
    if (images.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    resetZoom();
  }, [images.length, resetZoom]);

  // Keyboard navigation & zoom shortcuts
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === '+' || e.key === '=') setZoom((z) => Math.min(3.5, z + 0.3));
      if (e.key === '-' || e.key === '_') setZoom((z) => Math.max(1, z - 0.3));
      if (e.key === '0') resetZoom();
      if (e.key === 'i' || e.key === 'I') setShowInfo((s) => !s);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev, resetZoom]);

  if (!isOpen || images.length === 0) return null;

  const currentItem = images[currentIndex] || images[0];

  const handleZoomIn = () => setZoom((z) => Math.min(3.5, Number((z + 0.4).toFixed(1))));
  const handleZoomOut = () => {
    setZoom((z) => {
      const next = Math.max(1, Number((z - 0.4).toFixed(1)));
      if (next === 1) setPan({ x: 0, y: 0 });
      return next;
    });
  };

  const handleDoubleTap = () => {
    if (zoom > 1) {
      resetZoom();
    } else {
      setZoom(2.2);
    }
  };

  // Drag pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  // Touch pan handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (zoom > 1 && e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - pan.x,
        y: e.touches[0].clientY - pan.y,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && zoom > 1 && e.touches.length === 1) {
      setPan({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      });
    }
  };

  const handleTouchEnd = () => setIsDragging(false);

  // Save / Download Photo
  const handleSavePhoto = async () => {
    try {
      setIsSavedFeedback(true);
      setTimeout(() => setIsSavedFeedback(false), 2500);

      const filename = `Makhan-Carpenter-${(currentItem.title || 'furniture-design').replace(/\s+/g, '-').toLowerCase()}`;
      
      const response = await fetch(currentItem.url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `${filename}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch {
      // Fallback direct link download
      const link = document.createElement('a');
      link.href = currentItem.url;
      link.download = `Makhan-Carpenter-${(currentItem.title || 'furniture').replace(/\s+/g, '-')}.jpg`;
      link.target = '_blank';
      link.click();
    }
  };

  // WhatsApp discussion link for this specific design
  const whatsappDiscussUrl = `https://wa.me/${siteConfig.contact.whatsappPrimaryRaw}?text=${encodeURIComponent(
    language === 'en'
      ? `Hello Makhan Carpenter, I like this design: "${currentItem.title}". Could you share estimated cost & timeline? Reference: ${window.location.origin}${currentItem.url}`
      : `नमस्ते Makhan Carpenter, मुझे यह डिज़ाइन पसंद आया: "${currentItem.titleHi || currentItem.title}". कृपया इसका अनुमानित खर्च और समय बताएं।`
  )}`;

  return (
    <div className="fixed inset-0 z-50 bg-[#070504]/98 backdrop-blur-2xl flex flex-col justify-between select-none animate-in fade-in duration-200">
      
      {/* 1. Top Control Bar */}
      <div className="relative z-30 px-3 sm:px-6 py-3 bg-[#0e0c0a]/90 border-b border-[#c5a059]/20 flex items-center justify-between gap-2 shrink-0">
        
        {/* Title & Counter */}
        <div className="flex items-center gap-3 min-w-0 pr-2">
          <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-[#c5a059]/20 text-[#dfc185] border border-[#c5a059]/30 rounded-sm shrink-0">
            {currentIndex + 1} / {images.length}
          </span>
          <div className="truncate">
            <h4 className="font-serif text-sm sm:text-base text-[#FBF9F5] font-normal truncate">
              {language === 'en' ? currentItem.title : (currentItem.titleHi || currentItem.title)}
            </h4>
            {currentItem.category && (
              <span className="text-[10px] uppercase tracking-wider text-[#c5a059] block truncate">
                {currentItem.category} • Makhan Carpenter
              </span>
            )}
          </div>
        </div>

        {/* Action Controls: Zoom, Save, WhatsApp, Info, Close */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          
          {/* Zoom In */}
          <button
            onClick={handleZoomIn}
            className="p-2 rounded-sm bg-[#18130f] hover:bg-[#251e18] text-[#d4cbbf] hover:text-[#c5a059] border border-[#c5a059]/25 transition-colors hidden sm:flex items-center justify-center"
            title="Zoom In (+)"
            aria-label="Zoom in"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          {/* Zoom Out */}
          <button
            onClick={handleZoomOut}
            disabled={zoom <= 1}
            className={`p-2 rounded-sm bg-[#18130f] border border-[#c5a059]/25 transition-colors hidden sm:flex items-center justify-center ${
              zoom <= 1 ? 'opacity-40 cursor-not-allowed text-[#776c62]' : 'hover:bg-[#251e18] text-[#d4cbbf] hover:text-[#c5a059]'
            }`}
            title="Zoom Out (-)"
            aria-label="Zoom out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          {/* Reset Zoom */}
          {zoom > 1 && (
            <button
              onClick={resetZoom}
              className="p-2 rounded-sm bg-[#c5a059]/20 text-[#dfc185] border border-[#c5a059]/40 hover:bg-[#c5a059]/30 transition-colors flex items-center gap-1 text-xs font-mono"
              title="Reset Zoom (0)"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{Math.round(zoom * 100)}%</span>
            </button>
          )}

          {/* Save / Download Button */}
          <button
            onClick={handleSavePhoto}
            className={`px-3 py-1.5 rounded-sm font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md active:scale-95 ${
              isSavedFeedback
                ? 'bg-emerald-600 text-white'
                : 'bg-[#1e1712] hover:bg-[#2d221b] border border-[#c5a059]/40 text-[#dfc185] hover:text-white'
            }`}
            title="Save / Download high-resolution photo"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">
              {isSavedFeedback
                ? (language === 'en' ? 'Saved!' : 'सेव हो गया!')
                : (language === 'en' ? 'Save Photo' : 'फोटो सेव करें')}
            </span>
          </button>

          {/* WhatsApp Share / Discuss */}
          <a
            href={whatsappDiscussUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 sm:px-3 py-1.5 rounded-sm bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
            title="Discuss this photo on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white/10" />
            <span className="hidden md:inline">WhatsApp</span>
          </a>

          {/* Toggle Details / Info */}
          <button
            onClick={() => setShowInfo((s) => !s)}
            className={`p-2 rounded-sm border transition-colors flex items-center justify-center ${
              showInfo
                ? 'bg-[#c5a059] text-[#0e0c0a] border-[#c5a059]'
                : 'bg-[#18130f] hover:bg-[#251e18] text-[#d4cbbf] hover:text-[#c5a059] border-[#c5a059]/25'
            }`}
            title="Toggle Details (I)"
            aria-label="Toggle details"
          >
            <Info className="w-4 h-4" />
          </button>

          {/* Close Lightbox */}
          <button
            onClick={onClose}
            className="p-2 rounded-sm bg-[#1c1510] hover:bg-red-900/60 text-[#d4cbbf] hover:text-white border border-[#c5a059]/30 transition-colors ml-1"
            title="Close Viewer (Esc)"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

        </div>

      </div>

      {/* 2. Main Photo Stage */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onDoubleClick={handleDoubleTap}
        className={`relative flex-1 flex items-center justify-center overflow-hidden p-2 sm:p-6 select-none ${
          zoom > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'
        }`}
      >
        
        {/* Navigation Arrow Previous */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 sm:left-6 z-20 w-11 h-11 rounded-full bg-[#0c0a09]/80 hover:bg-[#c5a059] text-[#ede5d8] hover:text-[#0e0c0a] border border-[#c5a059]/30 flex items-center justify-center transition-all shadow-2xl backdrop-blur-md active:scale-95 group"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>
        )}

        {/* Navigation Arrow Next */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 sm:right-6 z-20 w-11 h-11 rounded-full bg-[#0c0a09]/80 hover:bg-[#c5a059] text-[#ede5d8] hover:text-[#0e0c0a] border border-[#c5a059]/30 flex items-center justify-center transition-all shadow-2xl backdrop-blur-md active:scale-95 group"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>
        )}

        {/* The Clean High-Definition Image */}
        <div
          className="relative max-w-full max-h-full transition-transform duration-150 ease-out will-change-transform flex items-center justify-center"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
          }}
        >
          <img
            src={currentItem.url}
            alt={currentItem.title}
            draggable={false}
            className="max-h-[75vh] sm:max-h-[82vh] w-auto max-w-full object-contain rounded-xs shadow-[0_20px_60px_rgba(0,0,0,0.9)] border border-white/5 pointer-events-none"
          />
        </div>

        {/* Zoom & Double Tap Hint on Mobile */}
        {zoom === 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 px-3 py-1 rounded-full text-[10px] text-[#a99c8f] border border-white/10 backdrop-blur-md pointer-events-none flex items-center gap-1.5 opacity-70 hover:opacity-100">
            <Maximize2 className="w-3 h-3 text-[#c5a059]" />
            <span>Double click or pinch to zoom • Tap Save to download</span>
          </div>
        )}

        {/* Floating Discreet Details Card (Appears when Info icon is toggled) */}
        {showInfo && (
          <div className="absolute top-4 right-4 z-20 bg-[#120f0d]/95 border border-[#c5a059]/40 p-5 rounded-sm shadow-2xl backdrop-blur-xl max-w-sm w-full text-xs space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between border-b border-[#c5a059]/20 pb-2">
              <span className="font-serif text-sm font-bold text-[#c5a059]">Design Details</span>
              <button
                onClick={() => setShowInfo(false)}
                className="text-[#a99c8f] hover:text-white p-0.5"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#a99c8f] block">Title</span>
              <span className="text-sm font-serif text-[#FBF9F5] block">
                {language === 'en' ? currentItem.title : (currentItem.titleHi || currentItem.title)}
              </span>
            </div>

            {currentItem.caption && (
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#a99c8f] block">Description</span>
                <p className="text-xs text-[#d4cbbf] leading-relaxed">
                  {currentItem.caption}
                </p>
              </div>
            )}

            {currentItem.materials && currentItem.materials.length > 0 && (
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#a99c8f] block mb-1">Materials</span>
                <div className="flex flex-wrap gap-1">
                  {currentItem.materials.map((m, i) => (
                    <span key={i} className="text-[10px] bg-[#1d1611] text-[#dfc185] px-2 py-0.5 rounded-sm border border-[#c5a059]/20">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {currentItem.dimensions && (
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#a99c8f] block">Dimensions</span>
                <span className="text-xs font-mono text-[#ede5d8]">{currentItem.dimensions}</span>
              </div>
            )}

            {currentItem.location && (
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#a99c8f] block">Location Crafted</span>
                <span className="text-xs text-[#ede5d8]">{currentItem.location}</span>
              </div>
            )}

            {onRequestQuote && (
              <div className="pt-2 border-t border-[#c5a059]/20">
                <button
                  onClick={() => {
                    onClose();
                    onRequestQuote(currentItem.title);
                  }}
                  className="w-full py-2.5 rounded-sm bg-[#c5a059] text-[#0e0c0a] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5 shadow-md active:scale-95"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Get Estimate For This</span>
                </button>
              </div>
            )}
          </div>
        )}

      </div>

      {/* 3. Bottom Interactive Thumbnail Strip */}
      {images.length > 1 && (
        <div className="relative z-30 px-4 py-2.5 bg-[#0a0807]/90 border-t border-[#c5a059]/15 flex items-center justify-center gap-2 overflow-x-auto scrollbar-none shrink-0">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                resetZoom();
              }}
              className={`relative shrink-0 w-14 sm:w-16 h-10 sm:h-12 rounded-sm overflow-hidden border-2 transition-all ${
                currentIndex === idx
                  ? 'border-[#c5a059] scale-105 shadow-[0_0_12px_rgba(197,160,89,0.5)]'
                  : 'border-white/10 opacity-50 hover:opacity-90'
              }`}
            >
              <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

    </div>
  );
};
