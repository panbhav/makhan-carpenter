import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Work', href: '#our-work' },
    { name: 'Services', href: '#services' },
    { name: 'Craftsmanship', href: '#craftsmanship' },
    { name: 'Before & After', href: '#before-after' },
    { name: 'About', href: '#about' },
    { name: 'Materials', href: '#materials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0f0d0b]/90 backdrop-blur-md border-b border-[#c5a059]/15 shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-[#0e0c0a]/80 via-[#0e0c0a]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#home" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-[#1a1410] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] group-hover:border-[#c5a059] group-hover:bg-[#251d16] transition-all duration-300 shadow-md">
              <span className="font-serif font-bold text-xl tracking-wider">M</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.2em] text-[#FBF9F5] uppercase group-hover:text-[#c5a059] transition-colors">
                MAKHAN
              </span>
              <span className="text-[10px] tracking-[0.3em] text-[#c5a059] uppercase font-medium">
                CARPENTER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs xl:text-sm uppercase tracking-wider text-[#d4cbbf] hover:text-[#c5a059] font-medium transition-all duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-[#c5a059] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </a>
            ))}
          </nav>

          {/* Action CTA & Quick Contact */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c5a059] hover:text-[#dfc185] transition-colors p-2 text-xs flex items-center gap-1.5 tracking-wide"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="hidden xl:inline text-xs font-semibold">{siteConfig.contact.whatsappDisplay}</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="relative group overflow-hidden px-5 py-2.5 rounded-sm bg-gradient-to-r from-[#c5a059] to-[#b3893e] text-[#0e0c0a] font-semibold text-xs tracking-widest uppercase hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_20px_rgba(197,160,89,0.25)] flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get a Quote</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="px-3 py-1.5 rounded-sm bg-[#c5a059] text-[#0e0c0a] font-bold text-[11px] uppercase tracking-wider"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#ede5d8] hover:text-[#c5a059] transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#120f0d]/98 backdrop-blur-xl border-b border-[#c5a059]/20 px-6 py-8 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif tracking-wider text-[#ede5d8] hover:text-[#c5a059] border-b border-white/5 pb-2 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#c5a059]">→</span>
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 text-center bg-[#c5a059] text-[#0e0c0a] font-bold text-xs uppercase tracking-widest rounded-sm shadow-md"
              >
                Request Custom Quote
              </button>

              <div className="flex items-center justify-between text-xs text-[#a99c8f] pt-2">
                <a href={`tel:${siteConfig.contact.phoneRaw}`} className="flex items-center gap-1 hover:text-[#c5a059]">
                  <Phone className="w-3.5 h-3.5 text-[#c5a059]" /> {siteConfig.contact.phoneDisplay}
                </a>
                <span className="text-[10px] text-[#c5a059]/80 uppercase">UP & Alwar, Raj.</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
