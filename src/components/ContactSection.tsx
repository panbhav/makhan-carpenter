import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Clock, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig } from '../data/siteContent';
import { translations } from '../data/translations';
import type { Language } from '../types';

interface ContactSectionProps {
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: 'Wardrobe',
    location: 'Rath Nagar, Alwar',
    message: '',
    preferredContact: 'WhatsApp'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // ignore
    }
  };

  const whatsappMessage = language === 'en'
    ? siteConfig.whatsappMessages.en
    : siteConfig.whatsappMessages.hi;

  return (
    <section id="contact" className="py-24 bg-[#0c0a09] relative border-t border-[#c5a059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#c5a059] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.contact.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FBF9F5] font-normal tracking-tight mb-4">
            {t.contact.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#d4cbbf] font-light leading-relaxed">
            {t.contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Call & WhatsApp Channels (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Clickable Phone Number 1 */}
            <a
              href={`tel:${siteConfig.contact.phonePrimaryRaw}`}
              className="bg-[#14100d] border border-[#c5a059]/30 hover:border-[#c5a059] rounded-sm p-5 flex items-center gap-4 transition-all duration-300 group shadow-lg hover:bg-[#1a1410] block"
            >
              <div className="w-12 h-12 rounded-sm bg-[#c5a059]/15 text-[#c5a059] flex items-center justify-center shrink-0 border border-[#c5a059]/30 group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#c5a059] font-bold block">
                  Primary Contact Line
                </span>
                <span className="font-serif text-lg text-[#FBF9F5] font-medium block">
                  {t.contact.callBtn1}
                </span>
                <span className="text-[11px] text-[#a99c8f]">
                  Direct call for consultations & site survey
                </span>
              </div>
            </a>

            {/* Clickable Phone Number 2 */}
            <a
              href={`tel:${siteConfig.contact.phoneSecondaryRaw}`}
              className="bg-[#14100d] border border-[#c5a059]/30 hover:border-[#c5a059] rounded-sm p-5 flex items-center gap-4 transition-all duration-300 group shadow-lg hover:bg-[#1a1410] block"
            >
              <div className="w-12 h-12 rounded-sm bg-[#c5a059]/15 text-[#c5a059] flex items-center justify-center shrink-0 border border-[#c5a059]/30 group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#c5a059] font-bold block">
                  Secondary Contact Line
                </span>
                <span className="font-serif text-lg text-[#FBF9F5] font-medium block">
                  {t.contact.callBtn2}
                </span>
                <span className="text-[11px] text-[#a99c8f]">
                  Additional phone support
                </span>
              </div>
            </a>

            {/* Direct WhatsApp Channel */}
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappPrimaryRaw}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#14100d] border border-[#25D366]/30 hover:border-[#25D366] rounded-sm p-5 flex items-center gap-4 transition-all duration-300 group shadow-lg hover:bg-[#1a1410] block"
            >
              <div className="w-12 h-12 rounded-sm bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0 border border-[#25D366]/30 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#25D366] font-bold block">
                  {t.contact.whatsappBtn}
                </span>
                <span className="font-serif text-lg text-[#FBF9F5] font-medium block font-mono">
                  {siteConfig.contact.whatsappPrimary}
                </span>
                <span className="text-[11px] text-[#a99c8f]">
                  Send drawings, photos & floor plans
                </span>
              </div>
            </a>

            {/* Location & Operating Hours */}
            <div className="bg-[#14100d] border border-[#c5a059]/20 rounded-sm p-6 space-y-3">
              <div className="flex items-start gap-2.5 text-xs text-[#d4cbbf]">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#ede5d8] block">Atelier & Workshop:</span>
                  <span>{siteConfig.location.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-[#d4cbbf]">
                <Clock className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#ede5d8] block">Hours:</span>
                  <span>{siteConfig.contact.hours}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Fast Contact Form (Col 7) */}
          <div className="lg:col-span-7 bg-[#14100d] border border-[#c5a059]/30 rounded-sm p-8 sm:p-10 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-[#c5a059]/20 text-[#c5a059] border border-[#c5a059] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-[#FBF9F5]">
                  {t.contact.successTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#a99c8f] max-w-md mx-auto">
                  {t.contact.successDesc}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif text-2xl text-[#FBF9F5] font-normal mb-1">
                  {t.contact.formTitle}
                </h3>
                <p className="text-xs text-[#a99c8f] mb-4">
                  Leave your details and Makhan Carpenter will get in touch with you.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a99c8f] mb-1 font-medium">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Full Name"
                      className="w-full bg-[#181410] border border-[#c5a059]/20 rounded-sm p-3 text-base sm:text-sm text-[#ede5d8] focus:border-[#c5a059] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a99c8f] mb-1 font-medium">
                      {t.contact.phoneLabel}
                    </label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 63779 35958"
                      className="w-full bg-[#181410] border border-[#c5a059]/20 rounded-sm p-3 text-base sm:text-sm text-[#ede5d8] focus:border-[#c5a059] outline-none font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a99c8f] mb-1 font-medium">
                      {t.contact.furnitureTypeLabel}
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#181410] border border-[#c5a059]/20 rounded-sm p-3 text-base sm:text-sm text-[#ede5d8] focus:border-[#c5a059] outline-none"
                    >
                      <option value="Wardrobe">Wardrobe / अलमारी</option>
                      <option value="Bed">Bed / बेड</option>
                      <option value="Sofa">Sofa / सोफा</option>
                      <option value="Modular Kitchen">Modular Kitchen / मॉड्यूलर किचन</option>
                      <option value="Dining Table">Dining Table / डाइनिंग टेबल</option>
                      <option value="TV Unit">TV Unit / टीवी यूनिट</option>
                      <option value="Office Furniture">Office Furniture / ऑफिस</option>
                      <option value="Wooden Door">Wooden Door / दरवाजा</option>
                      <option value="Interior Woodwork">Interior Woodwork / इंटीरियर</option>
                      <option value="Kids Play Room">Kids Play Room / बच्चों का कमरा</option>
                      <option value="Custom Furniture">Custom Furniture / अन्य कस्टम काम</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a99c8f] mb-1 font-medium">
                      City / Location
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Alwar, UP"
                      className="w-full bg-[#181410] border border-[#c5a059]/20 rounded-sm p-3 text-base sm:text-sm text-[#ede5d8] focus:border-[#c5a059] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a99c8f] mb-1 font-medium">
                    {t.contact.detailsLabel}
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you want to build, room dimensions or style preferences..."
                    className="w-full bg-[#181410] border border-[#c5a059]/20 rounded-sm p-3 text-base sm:text-sm text-[#ede5d8] focus:border-[#c5a059] outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-sm bg-[#c5a059] hover:bg-[#d6b26b] text-[#0e0c0a] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl transition-all active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.contact.submitBtn}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
