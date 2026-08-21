import React, { useState } from 'react';
import { Check, ArrowRight, ArrowLeft, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig } from '../data/siteContent';

const FURNITURE_TYPES = [
  { id: 'wardrobe', label: 'Custom Wardrobe / Closet', icon: '🚪' },
  { id: 'bed', label: 'Wooden Bed & Headboard', icon: '🛏️' },
  { id: 'kitchen', label: 'Modular Kitchen', icon: '🍳' },
  { id: 'dining', label: 'Solid Wood Dining Table', icon: '🍽️' },
  { id: 'door', label: 'Main / Interior Pivot Door', icon: '🚪' },
  { id: 'office', label: 'Executive Desk & Library', icon: '💼' },
  { id: 'paneling', label: 'Fluted Wall Paneling / TV Unit', icon: '🪵' },
  { id: 'complete', label: 'Full Home Woodwork Suite', icon: '🏡' },
];

const WOOD_PREFERENCES = [
  'Seasoned CP Teak (Sagwan)',
  'American Black Walnut',
  'European White Oak',
  'IS:710 Marine Grade Plywood + Veneer',
  'Laminate Finish on Calibrated Plywood',
  'Craftsman Recommendation Needed'
];

const BUDGET_TIERS = [
  '₹50,000 – ₹1,50,000',
  '₹1,50,000 – ₹3,50,000',
  '₹3,50,000 – ₹7,00,000',
  '₹7,00,000+ (Full Luxury Villa Suite)',
  'Discuss on Consultation'
];

interface QuoteWizardProps {
  initialProjectType?: string;
  onClose?: () => void;
}

export const QuoteWizard: React.FC<QuoteWizardProps> = ({ initialProjectType, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTypes, setSelectedTypes] = useState<string[]>(
    initialProjectType ? [initialProjectType] : ['wardrobe']
  );
  const [roomType, setRoomType] = useState('Master Bedroom');
  const [dimensions, setDimensions] = useState('');
  const [woodPreference, setWoodPreference] = useState(WOOD_PREFERENCES[0]);
  const [budgetTier, setBudgetTier] = useState(BUDGET_TIERS[1]);
  const [timeframe, setTimeframe] = useState('Within 2 to 4 weeks');
  const [projectDescription, setProjectDescription] = useState('');
  
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [cityLocation, setCityLocation] = useState('Alwar, Rajasthan');
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleType = (id: string) => {
    if (selectedTypes.includes(id)) {
      if (selectedTypes.length > 1) {
        setSelectedTypes(selectedTypes.filter(t => t !== id));
      }
    } else {
      setSelectedTypes([...selectedTypes, id]);
    }
  };

  const handleComplete = (e: React.FormEvent) => {
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
    const text = `*Custom Furniture Inquiry - Makhan Carpenter*\n\n` +
      `*Name:* ${fullName || 'Valued Client'}\n` +
      `*Phone:* ${phone || 'Not provided'}\n` +
      `*Location:* ${cityLocation}\n` +
      `*Furniture Needed:* ${selectedTypes.join(', ')}\n` +
      `*Wood Preference:* ${woodPreference}\n` +
      `*Estimated Dimensions:* ${dimensions || 'To be measured on-site'}\n` +
      `*Budget Bracket:* ${budgetTier}\n` +
      `*Timeline:* ${timeframe}\n` +
      `*Details:* ${projectDescription || 'Looking for custom quotation.'}`;
    return encodeURIComponent(text);
  };

  return (
    <div className="bg-[#120f0d] border border-[#c5a059]/30 rounded-sm p-6 sm:p-8 md:p-10 shadow-2xl text-[#ede5d8]">
      
      {/* Wizard Progress Bar */}
      {!isSubmitted && (
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs text-[#a99c8f] mb-2 font-medium">
            <span className="uppercase tracking-widest text-[#c5a059]">
              Step 0{currentStep} of 04
            </span>
            <span>
              {currentStep === 1 && 'Select Furniture Category'}
              {currentStep === 2 && 'Dimensions & Materials'}
              {currentStep === 3 && 'Budget & Timeline'}
              {currentStep === 4 && 'Contact Information'}
            </span>
          </div>
          
          <div className="w-full bg-[#1e1712] h-1.5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#c5a059] to-[#dfc185] transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Step 1: Furniture Category Selection */}
      {currentStep === 1 && !isSubmitted && (
        <div className="space-y-6 animate-in fade-in">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#FBF9F5] font-normal mb-2">
              What piece would you like us to craft?
            </h3>
            <p className="text-xs sm:text-sm text-[#a99c8f]">
              Select one or multiple items for your home, villa, or commercial space.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {FURNITURE_TYPES.map((type) => {
              const isSelected = selectedTypes.includes(type.id);
              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => toggleType(type.id)}
                  className={`p-4 rounded-sm border text-left flex items-center justify-between transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#1e1712] border-[#c5a059] shadow-md'
                      : 'bg-[#171310] border-[#c5a059]/15 hover:border-[#c5a059]/40 text-[#a99c8f]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{type.icon}</span>
                    <span className={`text-xs sm:text-sm font-medium ${isSelected ? 'text-[#FBF9F5]' : ''}`}>
                      {type.label}
                    </span>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    isSelected ? 'border-[#c5a059] bg-[#c5a059] text-[#0e0c0a]' : 'border-white/20'
                  }`}>
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={() => setCurrentStep(2)}
              className="px-7 py-3 rounded-sm bg-[#c5a059] hover:bg-[#d6b26b] text-[#0e0c0a] font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-md transition-all active:scale-95"
            >
              <span>Next: Specs & Timbers</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Dimensions & Wood Preference */}
      {currentStep === 2 && !isSubmitted && (
        <div className="space-y-6 animate-in fade-in">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#FBF9F5] font-normal mb-2">
              Dimensions & Wood Material
            </h3>
            <p className="text-xs sm:text-sm text-[#a99c8f]">
              Help us understand the space and your preferred timber character.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#a99c8f] mb-1.5 font-medium">
                Room / Area
              </label>
              <input
                type="text"
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                placeholder="e.g. Master Suite, Formal Living, Open Kitchen"
                className="w-full bg-[#171310] border border-[#c5a059]/25 rounded-sm p-3 text-sm text-[#ede5d8] focus:border-[#c5a059] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#a99c8f] mb-1.5 font-medium">
                Approximate Dimensions (or leave for on-site laser survey)
              </label>
              <input
                type="text"
                value={dimensions}
                onChange={(e) => setDimensions(e.target.value)}
                placeholder="e.g. 12 ft x 9 ft wall, or 8-seater dining table"
                className="w-full bg-[#171310] border border-[#c5a059]/25 rounded-sm p-3 text-sm text-[#ede5d8] focus:border-[#c5a059] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#a99c8f] mb-1.5 font-medium">
                Preferred Timber / Wood Material
              </label>
              <select
                value={woodPreference}
                onChange={(e) => setWoodPreference(e.target.value)}
                className="w-full bg-[#171310] border border-[#c5a059]/25 rounded-sm p-3 text-sm text-[#ede5d8] focus:border-[#c5a059] outline-none"
              >
                {WOOD_PREFERENCES.map((wood) => (
                  <option key={wood} value={wood} className="bg-[#14100d] text-[#ede5d8]">
                    {wood}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              onClick={() => setCurrentStep(1)}
              className="px-5 py-3 rounded-sm bg-[#1a1410] text-[#ede5d8] font-medium text-xs uppercase tracking-wider flex items-center gap-1.5 hover:bg-[#251d16] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#c5a059]" />
              <span>Back</span>
            </button>

            <button
              onClick={() => setCurrentStep(3)}
              className="px-7 py-3 rounded-sm bg-[#c5a059] hover:bg-[#d6b26b] text-[#0e0c0a] font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-md transition-all active:scale-95"
            >
              <span>Next: Budget & Timeframe</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Budget & Project Scope */}
      {currentStep === 3 && !isSubmitted && (
        <div className="space-y-6 animate-in fade-in">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#FBF9F5] font-normal mb-2">
              Budget & Schedule Preferences
            </h3>
            <p className="text-xs sm:text-sm text-[#a99c8f]">
              We work with honest, transparent craftsman estimates.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#a99c8f] mb-1.5 font-medium">
                Approximate Budget Bracket
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {BUDGET_TIERS.map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setBudgetTier(tier)}
                    className={`p-3 rounded-sm text-left text-xs font-medium border transition-all ${
                      budgetTier === tier
                        ? 'bg-[#1e1712] border-[#c5a059] text-[#c5a059]'
                        : 'bg-[#171310] border-[#c5a059]/15 text-[#a99c8f] hover:text-[#ede5d8]'
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#a99c8f] mb-1.5 font-medium">
                Required Handover Timeframe
              </label>
              <input
                type="text"
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                placeholder="e.g. Immediate / Next month / Flexible"
                className="w-full bg-[#171310] border border-[#c5a059]/25 rounded-sm p-3 text-sm text-[#ede5d8] focus:border-[#c5a059] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#a99c8f] mb-1.5 font-medium">
                Special Requests or Specific Requirements
              </label>
              <textarea
                rows={3}
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                placeholder="e.g. Integrated soft LED lighting, fluted battens, concealed lock compartments..."
                className="w-full bg-[#171310] border border-[#c5a059]/25 rounded-sm p-3 text-sm text-[#ede5d8] focus:border-[#c5a059] outline-none resize-none"
              />
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              onClick={() => setCurrentStep(2)}
              className="px-5 py-3 rounded-sm bg-[#1a1410] text-[#ede5d8] font-medium text-xs uppercase tracking-wider flex items-center gap-1.5 hover:bg-[#251d16] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#c5a059]" />
              <span>Back</span>
            </button>

            <button
              onClick={() => setCurrentStep(4)}
              className="px-7 py-3 rounded-sm bg-[#c5a059] hover:bg-[#d6b26b] text-[#0e0c0a] font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-md transition-all active:scale-95"
            >
              <span>Next: Contact Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Contact Information & Submission */}
      {currentStep === 4 && !isSubmitted && (
        <form onSubmit={handleComplete} className="space-y-6 animate-in fade-in">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#FBF9F5] font-normal mb-2">
              Where should we send your estimate?
            </h3>
            <p className="text-xs sm:text-sm text-[#a99c8f]">
              Makhan Carpenter will personally review your specifications and get in touch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#a99c8f] mb-1.5 font-medium">
                Your Full Name *
              </label>
              <input
                required
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Alok Sharma"
                className="w-full bg-[#171310] border border-[#c5a059]/25 rounded-sm p-3 text-sm text-[#ede5d8] focus:border-[#c5a059] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#a99c8f] mb-1.5 font-medium">
                Phone / WhatsApp Number *
              </label>
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. +91 98765 43210"
                className="w-full bg-[#171310] border border-[#c5a059]/25 rounded-sm p-3 text-sm text-[#ede5d8] focus:border-[#c5a059] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#a99c8f] mb-1.5 font-medium">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. alok@example.com"
                className="w-full bg-[#171310] border border-[#c5a059]/25 rounded-sm p-3 text-sm text-[#ede5d8] focus:border-[#c5a059] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#a99c8f] mb-1.5 font-medium">
                Project City / Location *
              </label>
              <input
                required
                type="text"
                value={cityLocation}
                onChange={(e) => setCityLocation(e.target.value)}
                placeholder="e.g. Alwar, Lucknow, Noida, Agra"
                className="w-full bg-[#171310] border border-[#c5a059]/25 rounded-sm p-3 text-sm text-[#ede5d8] focus:border-[#c5a059] outline-none"
              />
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setCurrentStep(3)}
              className="w-full sm:w-auto px-5 py-3 rounded-sm bg-[#1a1410] text-[#ede5d8] font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-[#251d16] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#c5a059]" />
              <span>Back</span>
            </button>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-[#c5a059] hover:bg-[#d6b26b] text-[#0e0c0a] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Request My Custom Quote</span>
            </button>
          </div>
        </form>
      )}

      {/* Completion & Instant WhatsApp Action */}
      {isSubmitted && (
        <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-[#c5a059]/20 border border-[#c5a059] text-[#c5a059] flex items-center justify-center mx-auto shadow-2xl">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <h3 className="font-serif text-3xl text-[#FBF9F5] font-normal mb-2">
              Inquiry Received With Thanks
            </h3>
            <p className="text-sm text-[#d4cbbf] max-w-md mx-auto leading-relaxed">
              Makhan Carpenter has received your project details for <strong className="text-[#c5a059]">{cityLocation}</strong>. We will review the timber requirements and contact you within 24 hours.
            </p>
          </div>

          {/* Instant WhatsApp Dispatch Button */}
          <div className="bg-[#171310] border border-[#c5a059]/30 rounded-sm p-6 max-w-lg mx-auto space-y-3">
            <span className="text-xs text-[#a99c8f] block">
              Want an instant response or have architectural drawings to share?
            </span>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${generateWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-sm bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Specifications on WhatsApp</span>
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
