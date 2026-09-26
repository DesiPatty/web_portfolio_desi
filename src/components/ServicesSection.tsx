import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Clock,
  CheckCircle,
  ChevronRight,
  Layers,
  Eye,
  Maximize2,
  X,
  Check
} from 'lucide-react';
import { SERVICES, PORTFOLIO_ITEMS } from '../data/portfolioData';
import { ServiceItem, PortfolioItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

// Map service id to relevant portfolio sample
const SERVICE_PORTFOLIO_MAP: Record<string, string> = {
  'game-ui': 'arcana-forge-ui',
  'characters': 'chronicles-characters',
  'game-assets': 'mystic-relics-assets',
  'environments': 'twilight-haven-environment',
  '2d-animation': 'pixel-odyssey-animation',
  'promo-art': 'skyship-voyager-promo',
  // aliases
  'character-concept': 'chronicles-characters',
  'item-sprites': 'mystic-relics-assets',
  'environment-art': 'twilight-haven-environment',
  'animation-rigging': 'pixel-odyssey-animation',
  'marketing-art': 'skyship-voyager-promo',
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItem | null>(null);

  const handleOpenArtSpec = (serviceId: string) => {
    const portfolioId = SERVICE_PORTFOLIO_MAP[serviceId] || 'arcana-forge-ui';
    const found = PORTFOLIO_ITEMS.find((item) => item.id === portfolioId) || PORTFOLIO_ITEMS[0];
    setSelectedPortfolioItem(found);
  };

  return (
    <section id="services" className="relative py-20 lg:py-28 border-t border-white/5 bg-black text-[#faf6f0]">
      {/* Dev grid and lighting */}
      <div className="pointer-events-none absolute inset-0 bg-dev-grid opacity-30" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#ff8a7a]/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f6c177]/30 bg-[#f6c177]/10 px-4 py-1 text-xs font-semibold text-[#f6c177]">
            <span>✦ 03 • Servicios Especializados de Arte</span>
          </div>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#faf6f0] sm:text-4xl lg:text-5xl">
            Servicios de Arte 2D para tu Juego
          </h2>
          <p className="mt-3 text-base text-white/70">
            ¿Necesitas una remodelación de interfaz antes del Next Fest? ¿30 iconos de objetos para una actualización de alquimia? ¿O un rig de Spine para tu jefe final? Elige el bloque exacto de arte que tu estudio necesita.
          </p>
        </div>

        {/* 6 Services Cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#171322] shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ff8a7a]/40 hover:shadow-2xl hover:shadow-[#ff8a7a]/10"
              >
                {/* Visual Art Preview Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#120f1b]">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171322] via-[#171322]/40 to-transparent" />

                  {/* Inspect Art Spec Quick Button on Hover */}
                  <button
                    onClick={() => handleOpenArtSpec(service.id)}
                    className="absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <span className="inline-flex items-center gap-1.5 rounded-xl bg-[#ff8a7a] px-3.5 py-1.5 text-xs font-bold text-[#13111a] shadow-lg">
                      <Maximize2 className="h-3.5 w-3.5" />
                      <span>Ver Ficha Técnica</span>
                    </span>
                  </button>
                </div>

                {/* Content Body */}
                <div className="flex flex-1 flex-col p-6 pt-5">
                  <h3 className="font-heading text-xl font-bold text-[#faf6f0] transition-colors group-hover:text-[#ff8a7a]">
                    {service.title}
                  </h3>

                  <p className="mt-1 text-xs font-semibold text-[#f6c177]">
                    {service.tagline}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-white/70">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="mt-5 border-t border-white/10 pt-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/50">
                      Entregables Típicos:
                    </span>
                    <ul className="mt-2.5 space-y-1.5 text-xs text-white/80">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#ff8a7a]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer info: Turnaround */}
                  <div className="mt-auto border-t border-white/10 pt-4">
                    <div className="flex items-center text-xs text-white/60 mb-3">
                      <span className="flex items-center gap-1.5 text-[11px]">
                        <Clock className="h-3.5 w-3.5 text-[#f6c177]" />
                        <span>{service.turnaround}</span>
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => handleOpenArtSpec(service.id)}
                        className="flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 py-2.5 text-xs font-semibold text-white/80 transition-all hover:bg-white/10"
                      >
                        <Eye className="h-3.5 w-3.5 text-[#f6c177]" />
                        <span>Ver Muestra</span>
                      </button>

                      <button
                        onClick={() => onSelectService(service)}
                        className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#ff8a7a] to-[#f47c7c] py-2.5 text-xs font-bold text-[#13111a] transition-all hover:brightness-110"
                      >
                        <span>Solicitar</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Scope / Art Package Banner */}
        <div className="mt-14 rounded-3xl border border-dashed border-[#ff8a7a]/30 bg-[#161222]/80 p-6 sm:p-8 backdrop-blur-sm sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[#ff8a7a]/20 text-[#ff8a7a]">
              <Layers className="h-7 w-7" />
            </div>
            <div>
              <h4 className="font-heading text-lg sm:text-xl font-bold text-[#faf6f0]">
                ¿Tienes una tarea única o un hito híbrido de producción?
              </h4>
              <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-2xl">
                Puedo diseñar paquetes a medida combinando UI, diseño de personajes y cápsula de Steam para Next Fest o lanzamientos en Early Access.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="mt-4 sm:mt-0 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#ff8a7a] to-[#f47c7c] px-6 py-3 text-xs sm:text-sm font-bold text-[#13111a] shadow-lg shadow-[#ff8a7a]/20 transition-transform hover:scale-102"
          >
            <span>Cotizar Paquete a Medida</span>
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>

      </div>

      {/* Lightbox / Asset Production Specs Modal */}
      <AnimatePresence>
        {selectedPortfolioItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPortfolioItem(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/20 bg-[#161222] shadow-2xl"
            >
              {/* Modal Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 bg-[#110e1a] px-6 py-4">
                <div className="flex items-center gap-3">
                  <h3 className="font-heading text-lg font-bold text-[#faf6f0]">
                    {selectedPortfolioItem.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedPortfolioItem(null)}
                  className="rounded-lg p-1.5 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="overflow-y-auto p-6 sm:p-8">
                <div className="grid gap-8 lg:grid-cols-12 items-start">
                  
                  {/* Left: Full Artwork Preview */}
                  <div className="lg:col-span-7">
                    <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0f0c18] shadow-inner">
                      <img
                        src={selectedPortfolioItem.image}
                        alt={selectedPortfolioItem.title}
                        referrerPolicy="no-referrer"
                        className="w-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Right: Technical Specs & Breakdown */}
                  <div className="lg:col-span-5 flex flex-col space-y-5">
                    <div>
                      <span className="text-xs font-semibold text-[#ff8a7a]">
                        {selectedPortfolioItem.gameGenre}
                      </span>
                      <p className="mt-2 text-xs leading-relaxed text-white/80">
                        {selectedPortfolioItem.description}
                      </p>
                    </div>

                    {/* Qué desarrollé */}
                    {selectedPortfolioItem.whatIDeveloped && selectedPortfolioItem.whatIDeveloped.length > 0 && (
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#ff8a7a] mb-2">
                          Qué desarrollé
                        </h4>
                        <ul className="space-y-1 text-xs text-white/80">
                          {selectedPortfolioItem.whatIDeveloped.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-[#ff8a7a] mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Detalles del proyecto */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">
                        Detalles del proyecto
                      </h4>
                      <div className="rounded-2xl border border-white/10 bg-[#110e1a] p-4 text-xs space-y-2.5">
                        <div className="border-b border-white/10 pb-2">
                          <span className="block text-[11px] text-white/50 mb-0.5">Resolución</span>
                          <span className="font-mono font-medium text-white">{selectedPortfolioItem.specs.resolution}</span>
                        </div>
                        <div className="border-b border-white/10 pb-2">
                          <span className="block text-[11px] text-white/50 mb-0.5">Entregables</span>
                          <span className="font-mono font-medium text-[#f6c177]">{selectedPortfolioItem.specs.formats.join(' · ')}</span>
                        </div>
                        <div>
                          <span className="block text-[11px] text-white/50 mb-0.5">Herramientas</span>
                          <span className="font-medium text-white">{selectedPortfolioItem.specs.tools.join(' · ')}</span>
                        </div>
                      </div>
                    </div>

                    {/* Pensado para producción */}
                    {selectedPortfolioItem.productionReady && selectedPortfolioItem.productionReady.length > 0 && (
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">
                          Pensado para producción
                        </h4>
                        <ul className="space-y-1.5 text-xs text-white/80">
                          {selectedPortfolioItem.productionReady.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Archivos incluidos */}
                    <div className="border-t border-white/10 pt-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">
                        Archivos incluidos
                      </h4>
                      <p className="rounded-xl border border-white/10 bg-white/5 p-3 font-mono text-xs leading-relaxed text-white/80">
                        {selectedPortfolioItem.deliverables.join(' · ')}
                      </p>
                    </div>

                    {/* Action CTA */}
                    <div className="pt-2">
                      <a
                        href="#contact"
                        onClick={() => setSelectedPortfolioItem(null)}
                        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#ff8a7a] to-[#f47c7c] py-3.5 text-xs font-bold text-[#13111a] shadow-lg transition-all hover:brightness-110"
                      >
                        <span>Solicitar Arte Similar para Mi Juego</span>
                      </a>
                    </div>

                  </div>

                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
