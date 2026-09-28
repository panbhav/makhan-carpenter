import React from 'react';
import { Phone, MessageSquare, MapPin, ArrowUp, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteContent';
import { BrandLogo } from './BrandLogo';
import { translations } from '../data/translations';
import { scrollToSection } from '../utils/scroll';
import type { Language } from '../types';

interface FooterProps {
  language: Language;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onOpenQuoteModal }) => {
  const t = translations[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070504] text-[#d4cbbf] border-t border-[#c5a059]/25 pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#c5a059]/15">
          
          {/* Brand Column (Col 4) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo size="lg" />

            <p className="font-serif text-base text-[#ede5d8] italic">
              “{t.footer.tagline}”
            </p>

            <div className="bg-[#14100d] p-3 rounded-sm border border-[#c5a059]/20 text-xs text-[#dfc185] space-y-1">
              <span className="font-bold block font-serif">{t.footer.yearsBadge}</span>
              <span className="text-[11px] text-[#a99c8f] block">{t.footer.serving}</span>
            </div>

            <p className="text-xs text-[#a99c8f] leading-relaxed max-w-sm">
              Custom wardrobes, wooden beds, modular kitchens, dining tables, doors, and full interior woodwork tailored to your space.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm bg-[#15110e] border border-[#c5a059]/20 hover:border-[#c5a059] text-[#c5a059] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm bg-[#15110e] border border-[#c5a059]/20 hover:border-[#c5a059] text-[#c5a059] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm bg-[#15110e] border border-[#c5a059]/20 hover:border-[#c5a059] text-[#c5a059] flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links (Col 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm uppercase tracking-widest text-[#FBF9F5] font-semibold border-b border-[#c5a059]/20 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><button type="button" onClick={() => scrollToSection('home')} className="hover:text-[#c5a059] transition-colors cursor-pointer text-left bg-transparent border-none p-0 text-[#a99c8f]">{t.nav.home}</button></li>
              <li><button type="button" onClick={() => scrollToSection('our-work')} className="hover:text-[#c5a059] transition-colors cursor-pointer text-left bg-transparent border-none p-0 text-[#a99c8f]">{t.nav.ourWork}</button></li>
              <li><button type="button" onClick={() => scrollToSection('we-make-it-your-way')} className="hover:text-[#c5a059] transition-colors cursor-pointer text-left bg-transparent border-none p-0 text-[#a99c8f]">{t.nav.weMakeIt}</button></li>
              <li><button type="button" onClick={() => scrollToSection('design-possibilities')} className="hover:text-[#c5a059] transition-colors cursor-pointer text-left bg-transparent border-none p-0 text-[#a99c8f]">{t.nav.possibilities}</button></li>
              <li><button type="button" onClick={() => scrollToSection('about')} className="hover:text-[#c5a059] transition-colors cursor-pointer text-left bg-transparent border-none p-0 text-[#a99c8f]">{t.nav.about}</button></li>
              <li><button type="button" onClick={() => scrollToSection('experience')} className="hover:text-[#c5a059] transition-colors cursor-pointer text-left bg-transparent border-none p-0 text-[#a99c8f]">{t.nav.craftsmanship}</button></li>
              <li><button type="button" onClick={() => scrollToSection('gallery')} className="hover:text-[#c5a059] transition-colors cursor-pointer text-left bg-transparent border-none p-0 text-[#a99c8f]">Gallery</button></li>
              <li><button type="button" onClick={() => scrollToSection('contact')} className="hover:text-[#c5a059] transition-colors cursor-pointer text-left bg-transparent border-none p-0 text-[#a99c8f]">{t.nav.contact}</button></li>
            </ul>
          </div>

          {/* Services Index (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm uppercase tracking-widest text-[#FBF9F5] font-semibold border-b border-[#c5a059]/20 pb-2">
              Services
            </h4>
            <ul className="space-y-1.5 text-xs text-[#a99c8f]">
              <li>01 — Custom Furniture</li>
              <li>02 — Wooden Beds</li>
              <li>03 — Sofas & Seating</li>
              <li>04 — Custom Wardrobes</li>
              <li>05 — Modular Kitchens</li>
              <li>06 — Solid Dining Tables</li>
              <li>07 — TV Units & Media Walls</li>
              <li>08 — Office Workstations</li>
              <li>09 — Wooden Main Doors</li>
              <li>10 — Interior Woodwork</li>
              <li>11 — Kids' Play Rooms</li>
              <li>12 — Other Custom Work</li>
            </ul>
          </div>

          {/* Contact Information (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm uppercase tracking-widest text-[#FBF9F5] font-semibold border-b border-[#c5a059]/20 pb-2">
              Direct Contact
            </h4>
            
            <div className="space-y-3 text-xs">
              <a
                href={`tel:${siteConfig.contact.phonePrimaryRaw}`}
                className="flex items-center gap-2 text-[#ede5d8] hover:text-[#c5a059] transition-colors font-mono"
              >
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>{siteConfig.contact.phonePrimary}</span>
              </a>

              <a
                href={`tel:${siteConfig.contact.phoneSecondaryRaw}`}
                className="flex items-center gap-2 text-[#ede5d8] hover:text-[#c5a059] transition-colors font-mono"
              >
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>{siteConfig.contact.phoneSecondary}</span>
              </a>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsappPrimaryRaw}?text=${encodeURIComponent(siteConfig.whatsappMessages.en)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#ede5d8] hover:text-[#c5a059] transition-colors font-mono"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>{siteConfig.contact.whatsappPrimary} (WhatsApp)</span>
              </a>

              <div className="flex items-start gap-2 text-[#a99c8f] pt-1">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>{siteConfig.location.address}</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenQuoteModal}
                  className="w-full py-2.5 px-4 bg-[#c5a059] hover:bg-[#d6b26b] text-[#0e0c0a] font-bold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-1.5 shadow-md"
                >
                  <span>{t.footer.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8c8073]">
          <div>
            {t.footer.copyright}
          </div>

          <div className="flex items-center gap-6">
            <span>Raath Nagar, Alwar (Rajasthan)</span>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-sm bg-[#15110e] hover:bg-[#221b16] text-[#c5a059] transition-colors border border-[#c5a059]/20"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
