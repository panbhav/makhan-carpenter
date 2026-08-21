import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStatement } from './components/BrandStatement';
import { FeaturedWork } from './components/FeaturedWork';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CraftsmanshipProcess } from './components/CraftsmanshipProcess';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { AboutSection } from './components/AboutSection';
import { MaterialsShowcase } from './components/MaterialsShowcase';
import { Testimonials } from './components/Testimonials';
import { StatsCounter } from './components/StatsCounter';
import { GallerySection } from './components/GallerySection';
import { QuoteWizard } from './components/QuoteWizard';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { QuoteModal } from './components/QuoteModal';
import type { Project } from './types';
import { Sparkles } from 'lucide-react';

export function App() {
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
      
      {/* 1. Global Navigation Bar */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* 2. Premium Hero Section */}
      <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* 3. Introduction / Brand Statement */}
      <BrandStatement />

      {/* 4. Featured Projects ("Our Craftsmanship") */}
      <FeaturedWork
        onSelectProject={(project) => setSelectedProject(project)}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* 5. Services Section */}
      <Services onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* 6. Why Choose Makhan Carpenter */}
      <WhyChooseUs />

      {/* 7. Craftsmanship Process ("From Raw Wood to Refined Furniture") */}
      <CraftsmanshipProcess />

      {/* 8. Before & After Interactive Slider */}
      <BeforeAfterSection />

      {/* 9. About Makhan Carpenter ("The Craft Behind the Furniture") */}
      <AboutSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* 10. Materials Guide */}
      <MaterialsShowcase />

      {/* 11. Testimonials */}
      <Testimonials />

      {/* 12. Statistics */}
      <StatsCounter />

      {/* 13. Visual Gallery Archive */}
      <GallerySection />

      {/* 14. Dedicated Quote Request Builder Section */}
      <section id="quote-builder" className="py-24 bg-[#090706] relative border-t border-[#c5a059]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#c5a059] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Step-by-Step Custom Estimate</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FBF9F5] font-normal tracking-tight mb-3">
              Configure Your Furniture Project
            </h2>
            <p className="text-xs sm:text-sm text-[#a99c8f]">
              Tell us your room measurements, timber choices, and schedule for a tailored consultation.
            </p>
          </div>

          <QuoteWizard />
        </div>
      </section>

      {/* 15. Contact Section */}
      <ContactSection />

      {/* 16. Luxury Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloat />

      {/* Project Detail Lightbox Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartCustomProject={(title) => handleOpenQuoteModal(title)}
      />

      {/* Quick Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialProjectType={initialQuoteProject}
      />

    </div>
  );
}

export default App;
