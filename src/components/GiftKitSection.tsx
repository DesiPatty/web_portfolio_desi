import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Gift, 
  Download, 
  CheckCircle2, 
  FolderDown, 
  Eye, 
  X,
  Check
} from 'lucide-react';
import { IMAGES } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const GiftKitSection: React.FC = () => {
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const { language, t } = useLanguage();

  const kitItems = [
    {
      number: '01',
      title: t('gift.item1Title'),
      description: t('gift.item1Desc'),
      checkColor: 'text-[#ff7865]',
    },
    {
      number: '02',
      title: t('gift.item2Title'),
      description: t('gift.item2Desc'),
      checkColor: 'text-[#f6c177]',
    },
    {
      number: '03',
      title: t('gift.item3Title'),
      description: t('gift.item3Desc'),
      checkColor: 'text-[#38bdf8]',
    },
    {
      number: '04',
      title: t('gift.item4Title'),
      description: t('gift.item4Desc'),
      checkColor: 'text-[#34d399]',
    },
  ];

  const handleDownload = () => {
    setIsDownloaded(true);
    const readmeContent = `=====================================================
DESIPATTY - 2D GAME UI STARTER KIT
=====================================================
Thank you for downloading the DesiPatty Game UI Kit!

INCLUDED ASSETS:
1. /buttons/ - 12 UI Buttons (Normal, Hover & Pressed states)
2. /icons/ - 8 Core inventory and gameplay icons (256x256 px)
3. /frames/ - 3 Responsive UI Frames
4. /bars/ - 2 Resource Bars (Health, Energy / Progress)

FORMATS:
- Optimized transparent PNG files ready for Unity and Godot
- Multi-layered PSD source files

LICENSE:
CC0 / 100% Free for personal, prototype, game jam, and commercial game use.
No royalties or fees required.

Contact: soycreativadesi@gmail.com
Portfolio: DesiPatty - 2D Game Artist
=====================================================`;

    const blob = new Blob([readmeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'DesiPatty_Kit_UI_Videojuegos.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="gift-kit" className="relative py-10 lg:py-14 border-t border-white/5 bg-black text-[#faf6f0] overflow-hidden">
      {/* Soft background ambient lighting */}
      <div className="pointer-events-none absolute -top-16 right-1/4 h-64 w-64 rounded-full bg-[#f6c177]/8 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-[#ff7865]/8 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Compact Single Showcase Card (p-5 sm:p-7) */}
        <div className="overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-br from-[#191426] via-[#141020] to-[#100d1a] p-5 sm:p-7 shadow-2xl">
          <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-8">
            
            {/* Left: Compact Image Preview */}
            <div className="lg:col-span-5 relative flex flex-col items-center">
              <div className="group relative w-full overflow-hidden rounded-2xl border border-white/15 bg-[#0f0c18] shadow-xl">
                <img
                  src={IMAGES.uiGiftKit}
                  alt="Kit UI básico para videojuegos por DesiPatty"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[260px] sm:max-h-[280px] object-cover transition-transform duration-500 group-hover:scale-102"
                />

                {/* Inspect Action */}
                <button
                  onClick={() => setShowPreviewModal(true)}
                  aria-label="Ver vista previa en alta resolución"
                  className="absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100"
                >
                  <span className="inline-flex items-center gap-1.5 rounded-xl bg-[#ff7865] px-3.5 py-1.5 text-xs font-bold text-[#13111a] shadow-lg">
                    <Eye className="h-3.5 w-3.5" />
                    <span>{t('gift.previewBtn')}</span>
                  </span>
                </button>
              </div>
            </div>

            {/* Right: Clean Header + 4 Kit Items + Download CTA */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
              
              {/* Top Badge, Title & Description */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#f6c177]/35 bg-[#f6c177]/10 px-3 py-0.5 text-xs font-semibold text-[#f6c177]">
                  <Gift className="h-3.5 w-3.5 text-[#ff7865]" />
                  <span>{t('gift.badge')}</span>
                </div>

                <h2 className="mt-2 font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  {t('gift.title')}
                </h2>

                <p className="mt-1.5 text-xs sm:text-sm text-white/75 leading-relaxed font-normal">
                  {t('gift.description')}
                </p>
              </div>

              {/* 4 Kit Items Grid (2x2) */}
              <div className="grid gap-2.5 sm:grid-cols-2">
                {kitItems.map((item) => (
                  <div 
                    key={item.number}
                    className="rounded-xl border border-white/8 bg-[#1d172c]/60 p-3 transition-colors hover:border-white/20 hover:bg-[#211a33]/70"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className={`h-3.5 w-3.5 shrink-0 ${item.checkColor}`} />
                      <h3 className="font-heading text-xs sm:text-sm font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-0.5 text-[11px] text-white/65 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Download CTA Block (Compact: p-3.5 sm:p-4) */}
              <div className="rounded-2xl border border-white/10 bg-[#120e1c] p-3.5 sm:p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                      <FolderDown className="h-4 w-4 text-[#ff7865]" />
                      <span>{t('gift.downloadTitle')}</span>
                    </h3>
                    <p className="text-[11px] text-white/60 mt-0.5 leading-snug">
                      {t('gift.downloadSubtitle')}
                    </p>
                  </div>

                  <button
                    onClick={handleDownload}
                    className="shrink-0 inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#ff7865] via-[#f47c7c] to-[#f7a072] px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-[#13111a] shadow-lg shadow-[#ff7865]/20 hover:brightness-110 active:scale-95 transition-all"
                  >
                    <Download className="h-4 w-4" />
                    <span>{isDownloaded ? t('gift.downloadedBtn') : t('gift.downloadBtn')}</span>
                  </button>
                </div>

                {isDownloaded && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-2 text-xs text-emerald-300 flex items-center gap-2"
                  >
                    <Check className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                    <span>{language === 'es' ? '¡Listo! Tu paquete incluye el archivo con especificaciones y presets.' : 'Ready! Your kit includes full specs and presets.'}</span>
                  </motion.div>
                )}
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {showPreviewModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPreviewModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/20 bg-[#161222] shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 bg-[#110e1a] px-4 py-3">
                <div className="flex items-center gap-2">
                  <Gift className="h-4 w-4 text-[#ff7865]" />
                  <h3 className="font-heading text-xs sm:text-sm font-bold text-white">
                    {t('gift.title')}
                  </h3>
                </div>
                <button
                  onClick={() => setShowPreviewModal(false)}
                  className="rounded-lg p-1 text-white/50 hover:bg-white/10 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="overflow-y-auto p-4 text-center">
                <img
                  src={IMAGES.uiGiftKit}
                  alt="Kit UI Completo"
                  className="mx-auto rounded-xl border border-white/10 max-h-[50vh] object-contain shadow-inner"
                />

                <div className="mt-4 flex items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      handleDownload();
                      setShowPreviewModal(false);
                    }}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#ff7865] to-[#f47c7c] px-4 py-2 text-xs font-bold text-[#13111a] shadow-lg"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>{t('gift.downloadBtn')}</span>
                  </button>
                  <button
                    onClick={() => setShowPreviewModal(false)}
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
