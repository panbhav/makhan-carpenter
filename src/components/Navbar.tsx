import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteContent';
import { BrandLogo } from './BrandLogo';
import { translations } from '../data/translations';
import type { Language } from '../types';

interface NavbarProps {
  language: Language;
  onToggleLanguage: (lang: Language) => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ language, onToggleLanguage, onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Primary clean desktop navigation (6 key items to eliminate crowding)
  const desktopNavLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.ourWork, href: '#our-work' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.weMakeIt, href: '#we-make-it-your-way' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.contact, href: '#contact' },
  ];

  // Full comprehensive drawer links for mobile menu
  const allNavLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.ourWork, href: '#our-work' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.weMakeIt, href: '#we-make-it-your-way' },
    { name: t.nav.possibilities, href: '#design-possibilities' },
    { name: t.nav.craftsmanship, href: '#experience' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.location, href: '#location' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0e0c0a]/95 backdrop-blur-md border-b border-[#c5a059]/20 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#0e0c0a]/95 via-[#0e0c0a]/70 to-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 lg:gap-4">
          
          {/* Brand Logo with Krishna-inspired Monogram */}
          <a href="#home" className="flex items-center shrink-0">
            <BrandLogo size="md" />
          </a>

          {/* Desktop Navigation Links (Clean 6 items with generous spacing) */}
          <nav className="hidden xl:flex items-center space-x-1 2xl:space-x-2">
            {desktopNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs uppercase tracking-wider text-[#d4cbbf] hover:text-[#c5a059] font-medium transition-all duration-200 relative group whitespace-nowrap"
              >
                {link.name}
                <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-[#c5a059] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </a>
            ))}
          </nav>

          {/* Language Switcher, Quick Call & CTA */}
          <div className="hidden md:flex items-center gap-2 xl:gap-3 shrink-0">
            
            {/* Language Switcher (EN | हिंदी) */}
            <div className="flex items-center rounded-sm bg-[#181410] border border-[#c5a059]/30 p-0.5 text-xs font-semibold shrink-0">
              <button
                type="button"
                onClick={() => onToggleLanguage('en')}
                className={`px-2 py-1 rounded-xs transition-colors whitespace-nowrap ${
                  language === 'en'
                    ? 'bg-[#c5a059] text-[#0e0c0a] font-bold shadow-xs'
                    : 'text-[#a99c8f] hover:text-[#ede5d8]'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onToggleLanguage('hi')}
                className={`px-2 py-1 rounded-xs transition-colors whitespace-nowrap ${
                  language === 'hi'
                    ? 'bg-[#c5a059] text-[#0e0c0a] font-bold shadow-xs'
                    : 'text-[#a99c8f] hover:text-[#ede5d8]'
                }`}
              >
                हिंदी
              </button>
            </div>

            {/* Direct Clickable Phone */}
            <a
              href={`tel:${siteConfig.contact.phonePrimaryRaw}`}
              className="text-[#ede5d8] hover:text-[#c5a059] text-xs flex items-center gap-1.5 font-medium transition-colors border-l border-[#c5a059]/20 pl-2.5 whitespace-nowrap"
              title="Call Makhan Carpenter"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span className="hidden 2xl:inline font-mono">{siteConfig.contact.phonePrimary}</span>
            </a>

            {/* Get a Quote Button */}
            <button
              onClick={onOpenQuoteModal}
              className="relative group overflow-hidden px-3.5 xl:px-4 py-2 rounded-sm bg-[#c5a059] hover:bg-[#d6b26b] text-[#0e0c0a] font-bold text-xs tracking-widest uppercase transition-all shadow-[0_4px_15px_rgba(197,160,89,0.25)] active:scale-95 flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.nav.getQuote}</span>
            </button>

            {/* Hamburger for medium laptops (md to xl) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#ede5d8] hover:text-[#c5a059] hover:bg-[#1f1914] rounded-sm transition-colors border border-[#c5a059]/25"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Actions (Language Switcher + Quote + Menu) */}
          <div className="flex md:hidden items-center gap-1.5 shrink-0">
            <div className="flex items-center rounded-sm bg-[#181410] border border-[#c5a059]/30 p-0.5 text-[11px] font-semibold">
              <button
                onClick={() => onToggleLanguage('en')}
                className={`px-1.5 py-0.5 rounded-xs ${language === 'en' ? 'bg-[#c5a059] text-[#0e0c0a] font-bold' : 'text-[#a99c8f]'}`}
              >
                EN
              </button>
              <button
                onClick={() => onToggleLanguage('hi')}
                className={`px-1.5 py-0.5 rounded-xs ${language === 'hi' ? 'bg-[#c5a059] text-[#0e0c0a] font-bold' : 'text-[#a99c8f]'}`}
              >
                हिं
              </button>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="px-2.5 py-1.5 rounded-sm bg-[#c5a059] text-[#0e0c0a] font-bold text-[11px] uppercase tracking-wider whitespace-nowrap"
            >
              {language === 'en' ? 'Quote' : 'कोटेशन'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#ede5d8] hover:text-[#c5a059] transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu (Renders allNavLinks) */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[58px] bg-[#120f0d]/98 backdrop-blur-xl border-b border-[#c5a059]/20 px-6 py-6 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-4 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-3">
            {allNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-serif tracking-wider text-[#ede5d8] hover:text-[#c5a059] border-b border-white/5 pb-2 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#c5a059]">→</span>
              </a>
            ))}

            {/* Mobile Direct Phone Numbers (Both clickable) */}
            <div className="pt-3 border-t border-[#c5a059]/20 space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-[#c5a059] block font-semibold">
                Direct Contact:
              </span>
              <a
                href={`tel:${siteConfig.contact.phonePrimaryRaw}`}
                className="flex items-center gap-2 text-xs text-[#ede5d8] bg-[#1a1410] p-2.5 rounded-sm border border-[#c5a059]/25"
              >
                <Phone className="w-4 h-4 text-[#c5a059]" />
                <span>Call {siteConfig.contact.phonePrimary}</span>
              </a>
              <a
                href={`tel:${siteConfig.contact.phoneSecondaryRaw}`}
                className="flex items-center gap-2 text-xs text-[#ede5d8] bg-[#1a1410] p-2.5 rounded-sm border border-[#c5a059]/25"
              >
                <Phone className="w-4 h-4 text-[#c5a059]" />
                <span>Call {siteConfig.contact.phoneSecondary}</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 text-center bg-[#c5a059] text-[#0e0c0a] font-bold text-xs uppercase tracking-widest rounded-sm shadow-md"
              >
                {t.nav.getQuote}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
