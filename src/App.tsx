/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutAssistant } from './components/AboutAssistant';
import { PortfolioSection } from './components/PortfolioSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessAndAdvantages } from './components/ProcessAndAdvantages';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GiftKitSection } from './components/GiftKitSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MockupViewportWrapper } from './components/MockupViewportWrapper';
import { ServiceItem, PortfolioItem } from './types';
import { PORTFOLIO_ITEMS } from './data/portfolioData';
import { LanguageProvider } from './context/LanguageContext';

function PortfolioApp() {
  const [viewMode, setViewMode] = useState<'interactive' | 'mockup169'>('interactive');
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('Interfaz de Juego & Iconos (UI)');
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItem | null>(null);

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

  const handleOpenProject = (projectId: string) => {
    const item = PORTFOLIO_ITEMS.find((p) => p.id === projectId);
    if (item) {
      setSelectedPortfolioItem(item);
    }
    scrollToSection('portfolio');
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

        {/* Main Portfolio Sections */}
        <main className="flex-1">
          {/* 1 - Home / Hero */}
          <HeroSection
            onWorkTogetherClick={() => scrollToSection('contact')}
            onSeeWorkClick={() => scrollToSection('portfolio')}
            onExploreClick={() => scrollToSection('about')}
            onOpenProject={handleOpenProject}
          />

          {/* 2 - Sobre Mí */}
          <AboutAssistant />

          {/* 3 - Proyectos Reales & Casos de Estudio (4 Proyectos Reales con "Ver proyecto →") */}
          <PortfolioSection 
            selectedItem={selectedPortfolioItem}
            setSelectedItem={setSelectedPortfolioItem}
          />

          {/* 4 - Servicios */}
          <ServicesSection onSelectService={handleSelectService} />

          {/* 5 - Procesos */}
          <ProcessAndAdvantages />

          {/* 6 - Testimonios */}
          <TestimonialsSection />

          {/* 7 - Kit Gratis */}
          <GiftKitSection />

          {/* 8 - Preguntas Frecuentes */}
          <FaqSection />

          {/* 9 - Contacto */}
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
