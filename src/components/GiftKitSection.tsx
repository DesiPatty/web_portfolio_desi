import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Gift, 
  Download, 
  CheckCircle2, 
  Eye, 
  Sparkles, 
  Layers, 
  PackageCheck, 
  FolderDown, 
  Check, 
  X,
  FileCheck2,
  Heart
} from 'lucide-react';
import { IMAGES } from '../data/portfolioData';

export const GiftKitSection: React.FC = () => {
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'interactive'>('overview');
  const [buttonClickState, setButtonClickState] = useState<'idle' | 'pressed'>('idle');

  const handleDownload = () => {
    setIsDownloaded(true);
    // Create a mock downloadable blob with informative readme
    const readmeContent = `
=====================================================
DESIPATTY - KIT GRATUITO DE INTERFAZ PARA JUEGOS INDIE (v1.0)
=====================================================
¡Gracias por descargar el Starter Kit de UI para Juegos Indie de DesiPatty!

RECURSOS INCLUIDOS:
1. /botones/ - 24 botones táctiles con estados normal, hover y presionado
2. /marcos/ - 4 marcos modulares 9-slice para inventarios y diálogos
3. /iconos/ - 16 iconos de objetos (256x256 PNG + PSD por capas)
4. /barras_recursos/ - Medidores de Vida, Maná y Resistencia con máscaras de relleno
5. /metadatos_motor/ - Ajustes 9-slice para Unity y mapa de atlas para Godot

LICENCIA:
CC0 / 100% Gratuito para uso personal, educativo, prototipos y videojuegos comerciales.
Sin regalías ni pagos obligatorios. ¡Mencionar a DesiPatty en créditos es apreciado!

¿Necesitas arte o interfaz personalizada para tu estudio?
Contacto: soycreativadesi@gmail.com
Discord: @desipatty_art
Portafolio: DesiPatty - Asistente Visual Creativa
=====================================================
    `;
    const blob = new Blob([readmeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'DesiPatty_Kit_Gratuito_UI_Indie_LEEME.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="gift-kit" className="relative py-20 lg:py-28 border-t border-white/5 bg-black text-[#faf6f0]">
      {/* Glow backgrounds */}
      <div className="pointer-events-none absolute -top-20 right-10 h-96 w-96 rounded-full bg-[#f6c177]/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-96 w-96 rounded-full bg-[#ff8a7a]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f6c177]/40 bg-[#f6c177]/10 px-4 py-1.5 text-xs font-bold text-[#f6c177]">
            <Gift className="h-4 w-4 animate-bounce" />
            <span>06 • Regalo Exclusivo para Desarrolladores</span>
          </div>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-[#faf6f0] sm:text-4xl lg:text-5xl">
            Kit de Regalo de Interfaz (UI Starter Pack)
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/75 leading-relaxed">
            Un paquete completo de interfaz 2D listo para usar en tu juego o prototipo. <span className="text-[#ff8a7a] font-semibold">100% gratis</span>, optimizado para Unity y Godot, y con licencia comercial sin regalías.
          </p>
        </div>

        {/* Main Showcase Card */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[#1d172b] via-[#181324] to-[#120e1c] p-6 lg:p-10 shadow-2xl">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            
            {/* Left: Graphic Showcase of the Kit */}
            <div className="lg:col-span-6 relative">
              <div className="group relative overflow-hidden rounded-2xl border-2 border-white/15 bg-[#0f0c18] shadow-2xl">
                <img
                  src={IMAGES.uiGiftKit}
                  alt="Pack de Regalo de Interfaz para Juegos Indie por DesiPatty"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
                
                {/* Ribbon Tag */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/70 px-3.5 py-1 text-xs font-bold text-[#ff8a7a] backdrop-blur-md">
                  <Gift className="h-3.5 w-3.5" />
                  <span>Pack Gratuito • Descarga Directa</span>
                </div>

                {/* Inspect Action */}
                <button
                  onClick={() => setShowPreviewModal(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100"
                >
                  <span className="inline-flex items-center gap-2 rounded-2xl bg-[#ff8a7a] px-5 py-2.5 text-xs font-bold text-[#13111a] shadow-xl">
                    <Eye className="h-4 w-4" />
                    <span>Ver Detalles del Kit en Alta Resolución</span>
                  </span>
                </button>

                {/* Bottom Spec Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl border border-white/10 bg-black/60 px-3.5 py-2 text-xs backdrop-blur-md">
                  <span className="font-mono text-[#f6c177]">Formato: PSD + PNG + SVG</span>
                  <span className="text-white/60">42 MB • Licencia Comercial</span>
                </div>
              </div>

              {/* Hand-drawn note */}
              <div className="mt-4 flex items-center gap-2 text-xs font-handwriting text-[#f6c177]">
                <span>✦ “Úsalo en tu demo, game jam o juego de Steam sin pagar un solo centavo.”</span>
              </div>
            </div>

            {/* Right: Kit Details & Download Action */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-300">
                  Licencia CC0 / Libre de Regalías
                </span>
                <h3 className="mt-3 font-heading text-2xl sm:text-3xl font-bold text-white">
                  ¿Qué incluye este kit de regalo?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-white/70 leading-relaxed">
                  Diseñado para ahorrarte horas de trabajo en tu prototipo o vertical slice. Todos los elementos vienen cortados, con márgenes 9-slice y organizados en carpetas nombradas.
                </p>
              </div>

              {/* Included Components Grid */}
              <div className="grid gap-3 sm:grid-cols-2 text-xs">
                <div className="rounded-xl border border-white/10 bg-[#221c32]/60 p-3.5">
                  <div className="flex items-center gap-2 font-bold text-[#faf6f0]">
                    <CheckCircle2 className="h-4 w-4 text-[#ff8a7a]" />
                    <span>24 Botones Táctiles</span>
                  </div>
                  <p className="mt-1 text-[11px] text-white/60">
                    Estados Normal, Hover, Pressed y Disabled en varios colores.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#221c32]/60 p-3.5">
                  <div className="flex items-center gap-2 font-bold text-[#faf6f0]">
                    <CheckCircle2 className="h-4 w-4 text-[#f6c177]" />
                    <span>4 Marcos 9-Slice</span>
                  </div>
                  <p className="mt-1 text-[11px] text-white/60">
                    Adaptables a cualquier proporción sin deformar esquinas.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#221c32]/60 p-3.5">
                  <div className="flex items-center gap-2 font-bold text-[#faf6f0]">
                    <CheckCircle2 className="h-4 w-4 text-[#9ccfd8]" />
                    <span>16 Iconos de Inventario</span>
                  </div>
                  <p className="mt-1 text-[11px] text-white/60">
                    Pociones, gemas, llaves y pergaminos en 256x256 px.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#221c32]/60 p-3.5">
                  <div className="flex items-center gap-2 font-bold text-[#faf6f0]">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span>3 Barras de Recursos</span>
                  </div>
                  <p className="mt-1 text-[11px] text-white/60">
                    Salud, Maná y Resistencia con máscaras de llenado.
                  </p>
                </div>
              </div>

              {/* Download CTA Area */}
              <div className="rounded-2xl border border-white/10 bg-[#130f1e] p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-heading text-base font-bold text-white flex items-center gap-2">
                      <FolderDown className="h-5 w-5 text-[#ff8a7a]" />
                      <span>Descarga Directa e Inmediata</span>
                    </h4>
                    <p className="text-xs text-white/60 mt-0.5">
                      Sin registros engorrosos ni formularios infinitos.
                    </p>
                  </div>

                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#ff8a7a] via-[#f47c7c] to-[#f7a072] px-6 py-3.5 text-xs sm:text-sm font-bold text-[#13111a] shadow-xl shadow-[#ff8a7a]/25 transition-transform hover:scale-103 active:scale-95"
                  >
                    <Download className="h-4 w-4" />
                    <span>{isDownloaded ? '¡Descargado! Descargar de Nuevo' : 'Descargar Kit Gratis (ZIP)'}</span>
                  </button>
                </div>

                {isDownloaded && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-3 text-xs text-emerald-300 flex items-center gap-2"
                  >
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                    <span>¡Listo! Tu paquete incluye el archivo README con detalles de licencia y presets para Unity/Godot. ¡Mucho éxito con tu juego!</span>
                  </motion.div>
                )}
              </div>

              {/* Teaser to work together */}
              <div className="flex items-center justify-between text-xs text-white/50 pt-1">
                <span>¿Te gustaría una interfaz exclusiva con el estilo de tu juego?</span>
                <a href="#contact" className="text-[#ff8a7a] font-bold hover:underline">
                  Pedir interfaz a medida →
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Fullscreen Preview Modal */}
      <AnimatePresence>
        {showPreviewModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPreviewModal(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-white/20 bg-[#161222] shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 bg-[#110e1a] px-6 py-4">
                <div className="flex items-center gap-2.5">
                  <Gift className="h-5 w-5 text-[#ff8a7a]" />
                  <h3 className="font-heading text-lg font-bold text-white">
                    DesiPatty - Kit Gratuito de Interfaz para Videojuegos Indie
                  </h3>
                </div>
                <button
                  onClick={() => setShowPreviewModal(false)}
                  className="rounded-lg p-1.5 text-white/50 hover:bg-white/10 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="overflow-y-auto p-6 text-center">
                <img
                  src={IMAGES.uiGiftKit}
                  alt="Kit Completo"
                  className="mx-auto rounded-2xl border border-white/15 max-h-[60vh] object-contain shadow-inner"
                />

                <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={() => {
                      handleDownload();
                      setShowPreviewModal(false);
                    }}
                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#ff8a7a] to-[#f47c7c] px-6 py-3 text-sm font-bold text-[#13111a] shadow-lg"
                  >
                    <Download className="h-4 w-4" />
                    <span>Descargar Ahora (Gratis)</span>
                  </button>
                  <button
                    onClick={() => setShowPreviewModal(false)}
                    className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    Cerrar Vista Previa
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
