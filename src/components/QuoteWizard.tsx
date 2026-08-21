import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle2, Upload, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig } from '../data/siteContent';
import { translations } from '../data/translations';
import type { Language } from '../types';

const FURNITURE_OPTIONS = [
  { id: 'Bed', label: 'Bed', labelHi: 'बेड (Bed)' },
  { id: 'Sofa', label: 'Sofa', labelHi: 'सोफा (Sofa)' },
  { id: 'Wardrobe', label: 'Wardrobe', labelHi: 'अलमारी (Wardrobe)' },
  { id: 'Modular Kitchen', label: 'Modular Kitchen', labelHi: 'मॉड्यूलर किचन (Kitchen)' },
  { id: 'Dining Table', label: 'Dining Table', labelHi: 'डाइनिंग टेबल (Dining Table)' },
  { id: 'TV Unit', label: 'TV Unit', labelHi: 'टीवी यूनिट (TV Unit)' },
  { id: 'Office Furniture', label: 'Office Furniture', labelHi: 'ऑफिस फर्नीचर (Office)' },
  { id: 'Wooden Door', label: 'Wooden Door', labelHi: 'लकड़ी का दरवाजा (Door)' },
  { id: 'Interior Woodwork', label: 'Interior Woodwork', labelHi: 'इंटीरियर वुडवर्क (Interior)' },
  { id: 'Kids\' Play Room', label: 'Kids\' Play Room', labelHi: 'बच्चों का प्लेरूम (Kids Room)' },
  { id: 'Custom Furniture', label: 'Custom Furniture', labelHi: 'कस्टम फर्नीचर (Custom Piece)' },
  { id: 'Other', label: 'Other Custom Work', labelHi: 'अन्य कस्टम काम (Other)' },
];

interface QuoteWizardProps {
  language?: Language;
  initialProjectType?: string;
  onClose?: () => void;
}

export const QuoteWizard: React.FC<QuoteWizardProps> = ({
  language = 'en',
  initialProjectType,
  onClose,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedFurniture, setSelectedFurniture] = useState(
    initialProjectType || 'Wardrobe'
  );
  const [requirementDetails, setRequirementDetails] = useState('');
  const [preferredContact, setPreferredContact] = useState<'WhatsApp' | 'Call'>('WhatsApp');
  const [location, setLocation] = useState('Alwar / UP');
  const [hasRefImage, setHasRefImage] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  const generateWhatsAppMessage = () => {
    const text = `*Custom Furniture Enquiry - Makhan Carpenter*\n\n` +
      `*Name:* ${fullName || 'Valued Client'}\n` +
      `*Phone:* ${phone || 'Not provided'}\n` +
      `*Item Needed:* ${selectedFurniture}\n` +
      `*Location:* ${location}\n` +
      `*Preferred Contact:* ${preferredContact}\n` +
      `*Has Photo/Drawing to Share:* ${hasRefImage ? 'Yes' : 'No'}\n` +
      `*Details:* ${requirementDetails || 'Looking for quotation and site measurement.'}`;
    return encodeURIComponent(text);
  };

  return (
    <div className="bg-[#120f0d] border border-[#c5a059]/30 rounded-sm p-6 sm:p-8 md:p-10 shadow-2xl text-[#ede5d8]">
      
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="border-b border-[#c5a059]/20 pb-4">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#FBF9F5] font-normal mb-1">
              {t.contact.formTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#a99c8f]">
              Tell us what you would like to make for your space in Alwar or Uttar Pradesh.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#a99c8f] mb-1.5 font-medium">
                {t.contact.nameLabel}
              </label>
              <input
                required
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Ramesh Kumar"
                className="w-full bg-[#181410] border border-[#c5a059]/25 rounded-sm p-3 text-base sm:text-sm text-[#ede5d8] focus:border-[#c5a059] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#a99c8f] mb-1.5 font-medium">
                {t.contact.phoneLabel}
              </label>
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. +91 63779 35958"
                className="w-full bg-[#181410] border border-[#c5a059]/25 rounded-sm p-3 text-base sm:text-sm text-[#ede5d8] focus:border-[#c5a059] outline-none font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#a99c8f] mb-1.5 font-medium">
                {t.contact.furnitureTypeLabel}
              </label>
              <select
                value={selectedFurniture}
                onChange={(e) => setSelectedFurniture(e.target.value)}
                className="w-full bg-[#181410] border border-[#c5a059]/25 rounded-sm p-3 text-base sm:text-sm text-[#ede5d8] focus:border-[#c5a059] outline-none"
              >
                {FURNITURE_OPTIONS.map((opt) => (
                  <option key={opt.id} value={opt.id} className="bg-[#14100d] text-[#ede5d8]">
                    {language === 'en' ? opt.label : opt.labelHi}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#a99c8f] mb-1.5 font-medium">
                City / Area
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Raath Nagar Alwar, Lucknow, Noida"
                className="w-full bg-[#181410] border border-[#c5a059]/25 rounded-sm p-3 text-base sm:text-sm text-[#ede5d8] focus:border-[#c5a059] outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#a99c8f] mb-1.5 font-medium">
              {t.contact.detailsLabel}
            </label>
            <textarea
              required
              rows={3}
              value={requirementDetails}
              onChange={(e) => setRequirementDetails(e.target.value)}
              placeholder="e.g. Need a 4-door wardrobe with fluted finish and soft lighting, or 8-seater dining table..."
              className="w-full bg-[#181410] border border-[#c5a059]/25 rounded-sm p-3 text-base sm:text-sm text-[#ede5d8] focus:border-[#c5a059] outline-none resize-none"
            />
          </div>

          {/* Reference Image Option & Preferred Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="flex items-center gap-2 bg-[#181410] p-3 rounded-sm border border-[#c5a059]/20">
              <input
                type="checkbox"
                id="ref-img"
                checked={hasRefImage}
                onChange={(e) => setHasRefImage(e.target.checked)}
                className="w-4 h-4 accent-[#c5a059]"
              />
              <label htmlFor="ref-img" className="text-xs text-[#d4cbbf] cursor-pointer flex items-center gap-1.5">
                <Upload className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>I have a design photo/sketch to share</span>
              </label>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#a99c8f] mb-1.5 font-medium">
                {t.contact.preferredContact}
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setPreferredContact('WhatsApp')}
                  className={`flex-1 py-2 rounded-sm text-xs font-semibold uppercase flex items-center justify-center gap-1.5 border transition-all ${
                    preferredContact === 'WhatsApp'
                      ? 'bg-[#25D366]/20 border-[#25D366] text-[#25D366]'
                      : 'bg-[#181410] border-[#c5a059]/20 text-[#a99c8f]'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPreferredContact('Call')}
                  className={`flex-1 py-2 rounded-sm text-xs font-semibold uppercase flex items-center justify-center gap-1.5 border transition-all ${
                    preferredContact === 'Call'
                      ? 'bg-[#c5a059]/20 border-[#c5a059] text-[#c5a059]'
                      : 'bg-[#181410] border-[#c5a059]/20 text-[#a99c8f]'
                  }`}
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Phone Call</span>
                </button>
              </div>
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-3">
            <button
              type="submit"
              className="w-full py-4 rounded-sm bg-[#c5a059] hover:bg-[#d6b26b] text-[#0e0c0a] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl active:scale-98 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>{t.contact.submitBtn}</span>
            </button>
          </div>

        </form>
      ) : (
        <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-[#c5a059]/20 border border-[#c5a059] text-[#c5a059] flex items-center justify-center mx-auto shadow-2xl">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <h3 className="font-serif text-3xl text-[#FBF9F5] font-normal mb-2">
              {t.contact.successTitle}
            </h3>
            <p className="text-sm text-[#d4cbbf] max-w-md mx-auto leading-relaxed">
              Makhan Carpenter has received your enquiry for <strong>{selectedFurniture}</strong>. We will review the specifications and contact you via <strong>{preferredContact}</strong> shortly.
            </p>
          </div>

          {/* Instant WhatsApp Option */}
          <div className="bg-[#181410] border border-[#c5a059]/30 rounded-sm p-6 max-w-lg mx-auto space-y-3">
            <span className="text-xs text-[#a99c8f] block">
              Want to send your reference photo right now on WhatsApp?
            </span>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappPrimaryRaw}?text=${generateWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-sm bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Open WhatsApp with Details</span>
            </a>
          </div>

          {onClose && (
            <button
              onClick={onClose}
              className="text-xs uppercase tracking-wider text-[#a99c8f] hover:text-[#ede5d8] transition-colors underline pt-2 block mx-auto"
            >
              Close Window
            </button>
          )}
        </div>
      )}

    </div>
  );
};
