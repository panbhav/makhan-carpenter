import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, Clock, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig } from '../data/siteContent';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Wardrobe & Storage',
    budget: '₹1.5L - ₹3.5L',
    location: 'Alwar / UP',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  return (
    <section id="contact" className="py-28 bg-[#0c0a09] relative border-t border-[#c5a059]/15">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2a1e14]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#c5a059] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consultation & Inquiries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FBF9F5] font-normal tracking-tight mb-4">
            Let's Build Something Beautiful
          </h2>
          <p className="text-sm sm:text-base text-[#d4cbbf] font-light leading-relaxed">
            Have an idea for your home, office, or architectural space? Tell us what you need and let's create custom woodwork made specifically for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Channels (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              
              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#14100d] border border-[#25D366]/30 hover:border-[#25D366] rounded-sm p-5 flex items-center gap-4 transition-all duration-300 group shadow-lg hover:bg-[#1a1410]"
              >
                <div className="w-12 h-12 rounded-sm bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0 border border-[#25D366]/30 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#25D366] font-bold block">
                    Direct WhatsApp
                  </span>
                  <span className="font-serif text-base text-[#FBF9F5] font-medium">
                    {siteConfig.contact.whatsappDisplay}
                  </span>
                  <span className="text-[11px] text-[#a99c8f] block">
                    Fastest response for designs & drawings
                  </span>
                </div>
              </a>

              {/* Call Card */}
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="bg-[#14100d] border border-[#c5a059]/30 hover:border-[#c5a059] rounded-sm p-5 flex items-center gap-4 transition-all duration-300 group shadow-lg hover:bg-[#1a1410]"
              >
                <div className="w-12 h-12 rounded-sm bg-[#c5a059]/15 text-[#c5a059] flex items-center justify-center shrink-0 border border-[#c5a059]/30 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#c5a059] font-bold block">
                    Call Makhan Carpenter
                  </span>
                  <span className="font-serif text-base text-[#FBF9F5] font-medium">
                    {siteConfig.contact.phoneDisplay}
                  </span>
                  <span className="text-[11px] text-[#a99c8f] block">
                    Direct craftsman consultation
                  </span>
                </div>
              </a>

            </div>

            {/* Atelier Details Card */}
            <div className="bg-[#14100d] border border-[#c5a059]/20 rounded-sm p-6 space-y-4">
              <h3 className="font-serif text-lg text-[#FBF9F5] border-b border-[#c5a059]/15 pb-2">
                Workshop & Coverage
              </h3>

              <div className="flex items-start gap-3 text-xs text-[#d4cbbf]">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#ede5d8] block">Atelier Location:</span>
                  <span>{siteConfig.contact.workshopAddress}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-[#d4cbbf]">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#ede5d8] block">Service Coverage:</span>
                  <span>{siteConfig.locationsServed}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-[#d4cbbf]">
                <Mail className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#ede5d8] block">Email:</span>
                  <span>{siteConfig.contact.email}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-[#d4cbbf]">
                <Clock className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#ede5d8] block">Working Hours:</span>
                  <span>{siteConfig.contact.hours}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Project Request Form (Col 7) */}
          <div className="lg:col-span-7 bg-[#14100d] border border-[#c5a059]/30 rounded-sm p-8 sm:p-10 shadow-2xl">
            
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-[#c5a059]/20 text-[#c5a059] border border-[#c5a059] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-[#FBF9F5]">Message Sent Successfully</h3>
                <p className="text-xs sm:text-sm text-[#a99c8f] max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Makhan Carpenter will review your request for <strong>{formData.location}</strong> and reach out shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif text-2xl text-[#FBF9F5] font-normal mb-1">
                  Send a Direct Project Message
                </h3>
                <p className="text-xs text-[#a99c8f] mb-4">
                  Fill in your details below for an estimated quotation and site visit discussion.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a99c8f] mb-1.5 font-medium">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikramaditya"
                      className="w-full bg-[#1a1410] border border-[#c5a059]/20 rounded-sm p-3 text-sm text-[#ede5d8] focus:border-[#c5a059] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a99c8f] mb-1.5 font-medium">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#1a1410] border border-[#c5a059]/20 rounded-sm p-3 text-sm text-[#ede5d8] focus:border-[#c5a059] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a99c8f] mb-1.5 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@domain.com"
                      className="w-full bg-[#1a1410] border border-[#c5a059]/20 rounded-sm p-3 text-sm text-[#ede5d8] focus:border-[#c5a059] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a99c8f] mb-1.5 font-medium">
                      Location / City *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Alwar, Lucknow, Noida"
                      className="w-full bg-[#1a1410] border border-[#c5a059]/20 rounded-sm p-3 text-sm text-[#ede5d8] focus:border-[#c5a059] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a99c8f] mb-1.5 font-medium">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#1a1410] border border-[#c5a059]/20 rounded-sm p-3 text-sm text-[#ede5d8] focus:border-[#c5a059] outline-none"
                    >
                      <option value="Wardrobes & Closets">Wardrobes & Closets</option>
                      <option value="Modular Kitchen">Modular Kitchen</option>
                      <option value="Wooden Bed & Headboard">Wooden Bed & Headboard</option>
                      <option value="Solid Teak Dining Table">Solid Teak Dining Table</option>
                      <option value="Main / Interior Door">Main / Interior Door</option>
                      <option value="Executive Office Desk">Executive Office Desk</option>
                      <option value="Complete Home Woodwork">Complete Home Woodwork</option>
                      <option value="Custom Furniture Piece">Custom Furniture Piece</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a99c8f] mb-1.5 font-medium">
                      Approximate Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#1a1410] border border-[#c5a059]/20 rounded-sm p-3 text-sm text-[#ede5d8] focus:border-[#c5a059] outline-none"
                    >
                      <option value="₹50,000 – ₹1.5 Lakh">₹50,000 – ₹1.5 Lakh</option>
                      <option value="₹1.5 Lakh – ₹3.5 Lakh">₹1.5 Lakh – ₹3.5 Lakh</option>
                      <option value="₹3.5 Lakh – ₹7 Lakh">₹3.5 Lakh – ₹7 Lakh</option>
                      <option value="₹7 Lakh+ (Complete Villa)">₹7 Lakh+ (Complete Villa)</option>
                      <option value="To be discussed">To be discussed</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a99c8f] mb-1.5 font-medium">
                    Project Message / Specific Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the room, preferred timber style, design ideas, or specific dimensions..."
                    className="w-full bg-[#1a1410] border border-[#c5a059]/20 rounded-sm p-3 text-sm text-[#ede5d8] focus:border-[#c5a059] outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-sm bg-[#c5a059] hover:bg-[#d6b26b] text-[#0e0c0a] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl transition-all active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Request a Quote</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
