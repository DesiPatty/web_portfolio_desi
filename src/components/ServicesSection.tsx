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
import { useLanguage } from '../context/LanguageContext';

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
  'character-concept': 'chronicles-characters',
  'item-sprites': 'mystic-relics-assets',
  'environment-art': 'twilight-haven-environment',
  'animation-rigging': 'pixel-odyssey-animation',
  'marketing-art': 'skyship-voyager-promo',
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItem | null>(null);
  const { language, t } = useLanguage();

  const handleOpenArtSpec = (serviceId: string) => {
    const portfolioId = SERVICE_PORTFOLIO_MAP[serviceId] || 'arcana-forge-ui';
    const found = PORTFOLIO_ITEMS.find((item) => item.id === portfolioId) || PORTFOLIO_ITEMS[0];
    setSelectedPortfolioItem(found);
  };

  return (
    <section id="services" className="relative py-12 lg:py-16 border-t border-white/5 bg-black text-[#faf6f0]">
      {/* Dev grid and lighting */}
      <div className="pointer-events-none absolute inset-0 bg-dev-grid opacity-25" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-[#ff8a7a]/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading (Compact) */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f6c177]/30 bg-[#f6c177]/10 px-3.5 py-0.5 text-xs font-semibold text-[#f6c177]">
            <span>{t('services.badge')}</span>
          </div>
          <h2 className="mt-2.5 font-heading text-2xl sm:text-4xl font-extrabold tracking-tight text-[#faf6f0] leading-tight">
            {t('services.title')}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-white/70">
            {t('services.subtitle')}
          </p>
        </div>

        {/* 6 Services Cards (Compact Showcase Gallery, gap-5 sm:gap-6) */}
        <div className="mt-8 sm:mt-10 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#171322] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#ff8a7a]/40 hover:shadow-2xl hover:shadow-[#ff8a7a]/10"
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
                    <span className="inline-flex items-center gap-1.5 rounded-xl bg-[#ff8a7a] px-3 py-1.5 text-xs font-bold text-[#13111a] shadow-lg">
                      <Maximize2 className="h-3.5 w-3.5" />
                      <span>{t('services.viewSpec')}</span>
                    </span>
                  </button>
                </div>

                {/* Content Body (Compact padding: p-4 sm:p-5 pt-3.5) */}
                <div className="flex flex-1 flex-col p-4 sm:p-5 pt-3.5">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#faf6f0] transition-colors group-hover:text-[#ff8a7a]">
                    {service.title}
                  </h3>

                  <p className="mt-0.5 text-xs font-semibold text-[#f6c177]">
                    {service.tagline}
                  </p>

                  <p className="mt-2 text-xs leading-relaxed text-white/70 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist (Tighter items) */}
                  <div className="mt-3.5 border-t border-white/10 pt-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">
                      {t('services.deliverablesLabel')}
                    </span>
                    <ul className="mt-1.5 space-y-1 text-xs text-white/80">
                      {service.deliverables.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-[11px] sm:text-xs">
                          <CheckCircle className="mt-0.5 h-3 w-3 flex-shrink-0 text-[#ff8a7a]" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer info: Turnaround + Action */}
                  <div className="mt-auto border-t border-white/10 pt-3">
                    <div className="flex items-center text-xs text-white/60 mb-2.5">
                      <span className="flex items-center gap-1.5 text-[11px]">
                        <Clock className="h-3.5 w-3.5 text-[#f6c177]" />
                        <span>{service.turnaround}</span>
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => handleOpenArtSpec(service.id)}
                        className="flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 py-2 text-xs font-semibold text-white/80 transition-all hover:bg-white/10"
                      >
                        <Eye className="h-3 w-3 text-[#f6c177]" />
                        <span>{language === 'es' ? 'Muestra' : 'Sample'}</span>
                      </button>

                      <button
                        onClick={() => onSelectService(service)}
                        className="flex items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-[#ff8a7a] to-[#f47c7c] py-2 text-xs font-bold text-[#13111a] transition-all hover:brightness-110 active:scale-95"
                      >
                        <span>{language === 'es' ? 'Solicitar' : 'Request'}</span>
                        <ChevronRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Scope / Art Package Banner (Compact: p-4 sm:p-6 mt-8 sm:mt-10) */}
        <div className="mt-8 sm:mt-10 rounded-2xl border border-dashed border-[#ff8a7a]/30 bg-[#161222]/80 p-4 sm:p-6 backdrop-blur-sm sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center gap-3.5">
            <div className="hidden sm:flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#ff8a7a]/20 text-[#ff8a7a]">
              <Layers className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-heading text-base sm:text-lg font-bold text-[#faf6f0]">
                {language === 'es' 
                  ? '¿Tienes una tarea única o un hito híbrido de producción?' 
                  : 'Have a custom task or hybrid production milestone?'}
              </h4>
              <p className="text-xs text-white/70 mt-0.5 max-w-2xl">
                {language === 'es'
                  ? 'Diseño paquetes a medida combinando UI, personajes y arte para Steam Next Fest o lanzamientos en Early Access.'
                  : 'I tailor custom packages combining UI, character art, and Steam capsule assets for Next Fest or Early Access.'}
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="mt-3 sm:mt-0 flex-shrink-0 inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
          >
            <span>{language === 'es' ? 'Consultar paquete híbrido' : 'Inquire hybrid package'}</span>
            <ChevronRight className="h-3.5 w-3.5 text-[#ff8a7a]" />
          </a>
        </div>

      </div>

      {/* Fullscreen Art Spec Modal */}
      <AnimatePresence>
        {selectedPortfolioItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPortfolioItem(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/20 bg-[#161222] shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 bg-[#120f1c] px-5 py-3">
                <div>
                  <span className="font-mono text-[10px] text-[#ff8a7a] uppercase font-bold tracking-wider">
                    {selectedPortfolioItem.gameType}
                  </span>
                  <h3 className="font-heading text-base font-bold text-white">
                    {selectedPortfolioItem.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedPortfolioItem(null)}
                  className="rounded-lg p-1.5 text-white/50 hover:bg-white/10 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="overflow-y-auto p-5">
                <div className="overflow-hidden rounded-xl border border-white/15 bg-black">
                  <img
                    src={selectedPortfolioItem.image}
                    alt={selectedPortfolioItem.title}
                    className="h-auto w-full object-cover max-h-[50vh]"
                  />
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => setSelectedPortfolioItem(null)}
                    className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10"
                  >
                    {language === 'es' ? 'Cerrar' : 'Close'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
