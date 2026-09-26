/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutAssistant } from './components/AboutAssistant';
import { ServicesSection } from './components/ServicesSection';
import { ProcessAndAdvantages } from './components/ProcessAndAdvantages';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GiftKitSection } from './components/GiftKitSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MockupViewportWrapper } from './components/MockupViewportWrapper';
import { ServiceItem } from './types';
import { LanguageProvider } from './context/LanguageContext';

function PortfolioApp() {
  const [viewMode, setViewMode] = useState<'interactive' | 'mockup169'>('interactive');
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('Interfaz de Juego & Iconos (UI)');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedServiceForContact(service.title);
    scrollToSection('contact');
  };

  return (
    <MockupViewportWrapper viewMode={viewMode} setViewMode={setViewMode}>
      <div className="relative flex min-h-screen flex-col bg-black text-[#faf6f0] selection:bg-[#ff8a7a]/30 selection:text-white">
        
        {/* Navigation Bar */}
        <Navbar
          viewMode={viewMode}
          setViewMode={setViewMode}
          onOpenContact={() => scrollToSection('contact')}
        />

        {/* 8 Main Portfolio Sections with Compact Vertical Spacing */}
        <main className="flex-1">
          {/* 1 - Home / Hero */}
          <HeroSection
            onWorkTogetherClick={() => scrollToSection('contact')}
            onSeeWorkClick={() => scrollToSection('services')}
            onExploreClick={() => scrollToSection('about')}
          />

          {/* 2 - Sobre Mí */}
          <AboutAssistant />

          {/* 3 - Servicios */}
          <ServicesSection onSelectService={handleSelectService} />

          {/* 4 - Procesos */}
          <ProcessAndAdvantages />

          {/* 5 - Testimonios */}
          <TestimonialsSection />

          {/* 6 - Kit Gratis */}
          <GiftKitSection />

          {/* 7 - Preguntas Frecuentes */}
          <FaqSection />

          {/* 8 - Contacto */}
          <ContactSection initialService={selectedServiceForContact} />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </MockupViewportWrapper>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioApp />
    </LanguageProvider>
  );
}
