import React from 'react';
import { X } from 'lucide-react';
import { QuoteWizard } from './QuoteWizard';
import type { Language } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  language?: Language;
  onClose: () => void;
  initialProjectType?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  language = 'en',
  onClose,
  initialProjectType,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl my-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 p-2 rounded-sm bg-[#171310] text-[#a99c8f] hover:text-[#ede5d8] hover:bg-[#251d16] border border-[#c5a059]/30 transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        <QuoteWizard
          language={language}
          initialProjectType={initialProjectType}
          onClose={onClose}
        />
      </div>
    </div>
  );
};
