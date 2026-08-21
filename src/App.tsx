import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { BrandStatement } from './components/BrandStatement';
import { FeaturedWork } from './components/FeaturedWork';
import { Services } from './components/Services';
import { WeMakeItYourWay } from './components/WeMakeItYourWay';
import { FurnitureStyles } from './components/FurnitureStyles';
import { DesignPossibilities } from './components/DesignPossibilities';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CraftsmanshipSection } from './components/CraftsmanshipSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { AboutSection } from './components/AboutSection';
import { MaterialsShowcase } from './components/MaterialsShowcase';
import { Testimonials } from './components/Testimonials';
import { LocationSection } from './components/LocationSection';
import { QuoteWizard } from './components/QuoteWizard';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { QuoteModal } from './components/QuoteModal';
import type { Project, Language } from './types';
import { Sparkles } from 'lucide-react';

export function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [initialQuoteProject, setInitialQuoteProject] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (projectName?: string) => {
    setInitialQuoteProject(projectName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setInitialQuoteProject(undefined);
  };

  return (
    <div className="min-h-screen bg-[#0c0a09] text-[#ede5d8] selection:bg-[#c5a059]/30 selection:text-[#FBF9F5]">
      
      {/* 1. Global Navigation Bar with Language Switcher */}
      <Navbar
        language={language}
        onToggleLanguage={(lang) => setLanguage(lang)}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* 2. Premium Hero Section */}
      <Hero
        language={language}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* 3. Horizontal Trust & Experience Statistics Bar */}
      <TrustBar language={language} />

      {/* 4. Brand Statement / Philosophy */}
      <BrandStatement language={language} />

      {/* 5. Featured Work Portfolio (12 Categories) */}
      <FeaturedWork
        language={language}
        onSelectProject={(project) => setSelectedProject(project)}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* 6. 12 Expanded Woodworking Services */}
      <Services
        language={language}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* 7. "We Make It Your Way" Custom Lead-Gen Section */}
      <WeMakeItYourWay
        language={language}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* 8. Types of Furniture We Create (Styles Showcase) */}
      <FurnitureStyles
        language={language}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* 9. Design Possibilities for Every Room Matrix */}
      <DesignPossibilities
        language={language}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* 10. Why Choose Makhan Carpenter (6 Pillars) */}
      <WhyChooseUs />

      {/* 11. 20+ Years. 500+ Projects. A Craft Built Over Time */}
      <CraftsmanshipSection
        language={language}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* 12. Interactive Before & After Transformation Slider */}
      <BeforeAfterSection language={language} />

      {/* 13. The Craft Behind Makhan Carpenter (About Section) */}
      <AboutSection
        language={language}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* 14. Curated Timbers & Architectural Materials Guide */}
      <MaterialsShowcase />

      {/* 15. Customer Reviews (Placeholder Structure with verified badges) */}
      <Testimonials
        language={language}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* 16. Serving Alwar & Uttar Pradesh Location Section */}
      <LocationSection language={language} />

      {/* 17. Dedicated Quote Request Builder Section */}
      <section id="quote-builder" className="py-24 bg-[#090706] relative border-t border-[#c5a059]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#c5a059] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Direct Custom Estimate' : 'सीधा कोटेशन अनुरोध'}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FBF9F5] font-normal tracking-tight mb-3">
              {language === 'en' ? 'Configure Your Furniture Requirement' : 'अपने फर्नीचर की आवश्यकता बताएं'}
            </h2>
            <p className="text-xs sm:text-sm text-[#a99c8f]">
              {language === 'en'
                ? 'Send your measurements, furniture choices, and contact preference for a prompt consultation.'
                : 'नाप, फर्नीचर का प्रकार और संपर्क का माध्यम बताएं ताकि हम आपसे संपर्क कर सकें।'}
            </p>
          </div>

          <QuoteWizard language={language} />
        </div>
      </section>

      {/* 18. Contact Section with Prominent Dual Phone & WhatsApp */}
      <ContactSection language={language} />

      {/* 19. Luxury Dark Footer */}
      <Footer
        language={language}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* 20. Floating 24/7 WhatsApp Action Button */}
      <WhatsAppFloat language={language} />

      {/* Project Detail Lightbox Modal */}
      <ProjectDetailModal
        project={selectedProject}
        language={language}
        onClose={() => setSelectedProject(null)}
        onStartCustomProject={(title) => handleOpenQuoteModal(title)}
      />

      {/* Universal Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        language={language}
        onClose={handleCloseQuoteModal}
        initialProjectType={initialQuoteProject}
      />

    </div>
  );
}

export default App;
