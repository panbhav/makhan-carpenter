import React from 'react';
import { Phone, MessageSquare, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteContent';
import type { Language } from '../types';

interface MobileQuickBarProps {
  language: Language;
  onOpenQuoteModal: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  language,
  onOpenQuoteModal,
}) => {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappPrimaryRaw}?text=${encodeURIComponent(
    language === 'en'
      ? siteConfig.whatsappMessages.en
      : siteConfig.whatsappMessages.hi
  )}`;

  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0e0c0a]/95 backdrop-blur-lg border-t border-[#c5a059]/30 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-8px_25px_rgba(0,0,0,0.8)]">
      <div className="grid grid-cols-3 gap-2 text-center">
        
        {/* 1. Quick Call */}
        <a
          href={`tel:${siteConfig.contact.phonePrimaryRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-sm bg-[#1a1410] border border-[#c5a059]/30 text-[#ede5d8] active:bg-[#251d16] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#c5a059] mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider">
            {language === 'en' ? 'Call Now' : 'कॉल करें'}
          </span>
        </a>

        {/* 2. Quick WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-sm bg-[#25D366] text-white shadow-md active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4 mb-1 fill-white/10" />
          <span className="text-[10px] font-bold uppercase tracking-wider">
            WhatsApp
          </span>
        </a>

        {/* 3. Quick Quote */}
        <button
          onClick={onOpenQuoteModal}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-sm bg-[#c5a059] text-[#0e0c0a] shadow-md active:scale-95 transition-transform font-bold"
        >
          <Sparkles className="w-4 h-4 mb-1" />
          <span className="text-[10px] uppercase tracking-wider">
            {language === 'en' ? 'Get Quote' : 'कोटेशन'}
          </span>
        </button>

      </div>
    </div>
  );
};
