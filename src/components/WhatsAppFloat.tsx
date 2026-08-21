import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { siteConfig } from '../data/siteContent';
import type { Language } from '../types';

interface WhatsAppFloatProps {
  language?: Language;
}

export const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({ language = 'en' }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const message = language === 'en'
    ? siteConfig.whatsappMessages.en
    : siteConfig.whatsappMessages.hi;

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappPrimaryRaw}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-auto">
      
      {/* Friendly Popup Tooltip */}
      {showTooltip && (
        <div className="bg-[#14100d] border border-[#25D366]/40 p-3 rounded-sm shadow-2xl max-w-xs text-xs text-[#ede5d8] relative animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-[#a99c8f] hover:text-[#ede5d8] p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-start gap-2.5 pr-3">
            <span className="w-2 h-2 rounded-full bg-[#25D366] shrink-0 mt-1 animate-ping" />
            <div>
              <span className="font-serif font-bold text-[#25D366] block">
                {language === 'en' ? 'Chat with Makhan' : 'माखन कारपेंटर से चैट करें'}
              </span>
              <p className="text-[11px] text-[#a99c8f] mt-0.5">
                {language === 'en'
                  ? 'Send photo references or floor plans directly.'
                  : 'फोटो या डिज़ाइन WhatsApp पर भेजें।'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_10px_40px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 group"
        aria-label="Chat on WhatsApp with Makhan Carpenter"
      >
        <MessageSquare className="w-7 h-7 fill-white/10 group-hover:scale-110 transition-transform" />
      </a>

    </div>
  );
};
