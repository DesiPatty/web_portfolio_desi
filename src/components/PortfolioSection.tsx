import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ExternalLink, 
  X, 
  ArrowRight,
  Gamepad2,
  CheckCircle2
} from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { PortfolioItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface PortfolioSectionProps {
  selectedItem: PortfolioItem | null;
  setSelectedItem: (item: PortfolioItem | null) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  selectedItem,
  setSelectedItem,
}) => {
  const { language } = useLanguage();

  return (
    <section id="portfolio" className="relative py-10 lg:py-14 border-t border-white/5 bg-[#0e0c15] text-[#faf6f0]">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff7865]/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ff7865]/30 bg-[#ff7865]/10 px-3.5 py-0.5 text-xs font-semibold text-[#ff7865]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{language === 'en' ? 'Selected Projects' : 'Proyectos Reales'}</span>
          </div>

          <h2 className="mt-2.5 font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {language === 'en' ? (
              <>
                Real Projects &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7865] via-[#f472b6] to-[#f6c177]">
                  Collaborations
                </span>
              </>
            ) : (
              <>
                Proyectos y{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7865] via-[#f472b6] to-[#f6c177]">
                  Colaboraciones Reales
                </span>
              </>
            )}
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-white/70 max-w-2xl mx-auto leading-relaxed">
            {language === 'en'
              ? 'Real video games, studio collaborations, and production art delivered for indie studios and publishers.'
              : 'Casos de estudio de videojuegos y colaboraciones con estudios indie y publishers.'}
          </p>
        </div>

        {/* 4 Real Projects Grid: Half Height Compact Cards (2x2 on desktop) */}
        <div className="mt-8 sm:mt-10 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {PORTFOLIO_ITEMS.map((item) => {
            const myWorkList = language === 'en' ? (item.myWorkEn || item.myWork) : item.myWork;
            const categoryLabel = language === 'en' ? (item.categoryLabelEn || item.categoryLabel) : item.categoryLabel;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#161222] shadow-lg transition-all duration-300 hover:border-[#ff7865]/40 hover:shadow-xl hover:shadow-[#ff7865]/10"
              >
                {/* Compact Project Image Container (Reduced height) */}
                <div 
                  onClick={() => setSelectedItem(item)}
                  className="relative h-32 sm:h-36 w-full overflow-hidden bg-[#0e0a18] cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.imageAlt || item.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161222] via-transparent to-black/35 pointer-events-none" />

                  {/* Top Category Badge */}
                  <div className="absolute top-2.5 left-2.5 flex items-center">
                    <span className="rounded-full border border-white/20 bg-black/75 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-semibold text-white/90 backdrop-blur-md">
                      {categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Card Content: Streamlined Padding & Compact Spacing */}
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  
                  {/* Studio / Publisher Meta */}
                  <div className="mb-1 text-[11px] font-semibold text-[#f6c177] truncate">
                    {item.developer && item.publisher ? (
                      <span>{item.developer} · Publisher: {item.publisher}</span>
                    ) : item.collaborationType ? (
                      <span>{language === 'en' ? item.collaborationTypeEn || item.collaborationType : item.collaborationType}</span>
                    ) : (
                      <span>{language === 'en' ? 'Mobile Game' : 'Juego Mobile'}</span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 
                    onClick={() => setSelectedItem(item)}
                    className="font-heading text-lg sm:text-xl font-bold text-white transition-colors group-hover:text-[#ff7865] cursor-pointer truncate"
                  >
                    {item.title}
                  </h3>

                  {/* Mi Trabajo / Contribution List (Tighter list) */}
                  <div className="mt-2.5 flex-1">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-white/50 mb-1.5">
                      {language === 'en' ? 'My work includes:' : 'Mi trabajo:'}
                    </h4>
                    <ul className="space-y-1 text-xs text-white/80">
                      {myWorkList.map((task, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#ff7865] shrink-0" />
                          <span className="truncate">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button: "Ver proyecto →" (Opens Internal Case Study) */}
                  <div className="mt-3.5 pt-3 border-t border-white/10">
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#ff7865] via-[#f47c7c] to-[#f7a072] px-4 py-2 font-heading text-xs font-bold text-[#13111a] shadow-md shadow-[#ff7865]/15 transition-all hover:brightness-110 active:scale-98"
                    >
                      <span>{language === 'en' ? 'Ver proyecto →' : 'Ver proyecto →'}</span>
                    </button>
                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* VISTA INTERNA DEL CASO DE ESTUDIO (Modal / Detalle del Proyecto)         */}
      {/* El visitante permanece dentro del portafolio.                             */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-[#a855f7]/30 bg-[#161222] shadow-[0_25px_60px_rgba(0,0,0,0.85)] text-[#faf6f0]"
            >
              {/* Modal Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 bg-[#110e1c] px-6 py-4">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="shrink-0 rounded-full border border-[#ff7865]/30 bg-[#ff7865]/10 px-3 py-0.5 text-xs font-semibold text-[#ff7865]">
                    {language === 'en' ? (selectedItem.categoryLabelEn || selectedItem.categoryLabel) : selectedItem.categoryLabel}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white truncate">
                    {selectedItem.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedItem(null)}
                  className="rounded-xl border border-white/15 bg-white/5 p-2 text-white/70 transition-colors hover:bg-white/15 hover:text-white"
                  aria-label={language === 'en' ? 'Close project detail' : 'Cerrar detalle del proyecto'}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="overflow-y-auto p-6 sm:p-8">
                <div className="grid gap-8 lg:grid-cols-12 items-start">
                  
                  {/* Left Column: Artwork Preview */}
                  <div className="lg:col-span-7 flex flex-col space-y-4">
                    <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#0d0a16] shadow-xl">
                      <img
                        src={selectedItem.image}
                        alt={selectedItem.imageAlt || selectedItem.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-auto object-cover max-h-[460px]"
                      />
                    </div>
                  </div>

                  {/* Right Column: Project Details & My Contribution */}
                  <div className="lg:col-span-5 flex flex-col space-y-6">
                    
                    {/* Project Title & Context */}
                    <div>
                      <h4 className="font-heading text-2xl font-bold text-white">
                        {selectedItem.title}
                      </h4>
                      <p className="mt-1 text-xs font-semibold text-[#ff7865]">
                        {language === 'en' ? (selectedItem.categoryLabelEn || selectedItem.categoryLabel) : selectedItem.categoryLabel}
                      </p>

                      {/* Developer / Publisher / Studio Collaboration */}
                      <div className="mt-3 rounded-xl border border-white/10 bg-[#100d1a] p-3 text-xs space-y-1.5">
                        {selectedItem.developer && (
                          <div className="flex justify-between">
                            <span className="text-white/50">{language === 'en' ? 'Developer:' : 'Desarrollador:'}</span>
                            <span className="font-semibold text-white">{selectedItem.developer}</span>
                          </div>
                        )}
                        {selectedItem.publisher && (
                          <div className="flex justify-between">
                            <span className="text-white/50">Publisher:</span>
                            <span className="font-semibold text-white">{selectedItem.publisher}</span>
                          </div>
                        )}
                        {selectedItem.collaborationType && (
                          <div className="flex justify-between">
                            <span className="text-white/50">{language === 'en' ? 'Collaboration:' : 'Tipo de proyecto:'}</span>
                            <span className="font-semibold text-[#f6c177]">
                              {language === 'en' ? (selectedItem.collaborationTypeEn || selectedItem.collaborationType) : selectedItem.collaborationType}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Mi Trabajo / Contribución */}
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-3">
                        {language === 'en' ? 'My work / contribution:' : 'Mi trabajo / contribución:'}
                      </h5>
                      <ul className="space-y-2 text-xs sm:text-sm text-white/85">
                        {(language === 'en' ? (selectedItem.myWorkEn || selectedItem.myWork) : selectedItem.myWork).map((task, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="h-4 w-4 mt-0.5 text-[#ff7865] shrink-0" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* External Link (Optional visit, opens in new tab) */}
                    {selectedItem.externalLink && (
                      <div className="border-t border-white/10 pt-4">
                        <a
                          href={selectedItem.externalLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 py-2.5 px-4 font-heading text-xs font-bold text-white transition-all hover:bg-white/15 hover:border-white/40"
                        >
                          <ExternalLink className="h-3.5 w-3.5 text-[#ff7865]" />
                          <span>
                            {language === 'en' ? selectedItem.externalLink.labelEn : selectedItem.externalLink.label}
                          </span>
                        </a>
                      </div>
                    )}

                    {/* Close / Return to Portfolio Button */}
                    <div className="pt-2">
                      <button
                        onClick={() => setSelectedItem(null)}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-2.5 text-xs font-semibold text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                      >
                        <span>{language === 'en' ? 'Back to Portfolio' : 'Volver al portafolio'}</span>
                      </button>
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
