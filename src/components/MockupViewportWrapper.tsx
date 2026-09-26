import React, { useState } from 'react';
import { 
  Monitor, 
  Maximize2, 
  RotateCcw, 
  ZoomIn, 
  ZoomOut, 
  Share2, 
  Lock, 
  Layers, 
  Sparkles,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

interface MockupViewportWrapperProps {
  children: React.ReactNode;
  viewMode: 'interactive' | 'mockup169';
  setViewMode: (mode: 'interactive' | 'mockup169') => void;
}

export const MockupViewportWrapper: React.FC<MockupViewportWrapperProps> = ({
  children,
  viewMode,
  setViewMode,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  if (viewMode === 'interactive') {
    return <div className="min-h-screen bg-black">{children}</div>;
  }

  // 16:9 Desktop Screenshot / Presentation Frame Mode
  return (
    <div className="min-h-screen bg-black p-2 sm:p-4 lg:p-8 flex flex-col items-center justify-start">
      
      {/* Presentation Top Control Bar */}
      <div className="mb-4 flex w-full max-w-[1720px] flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#161320] px-4 py-2.5 text-xs text-white/70 shadow-lg">
        
        <div className="flex items-center gap-3">
          <span className="flex h-2.5 w-2.5 rounded-full bg-[#ff8a7a]"></span>
          <span className="font-heading font-bold text-white">
            DesiPatty — Presentación de Web en Escritorio 16:9
          </span>
          <span className="rounded bg-[#ff8a7a]/20 px-2 py-0.5 text-[10px] font-semibold text-[#ff8a7a]">
            Proporción 16:9
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Zoom controls */}
          <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-[#1e1b2b] px-2 py-1">
            <button
              onClick={() => setZoomLevel((prev) => Math.max(70, prev - 10))}
              className="p-0.5 text-white/60 hover:text-white"
              title="Alejar zoom"
            >
              <ZoomOut className="h-3.5 w-3.5" />
            </button>
            <span className="font-mono text-[11px] px-1.5 text-white/90">{zoomLevel}%</span>
            <button
              onClick={() => setZoomLevel((prev) => Math.min(130, prev + 10))}
              className="p-0.5 text-white/60 hover:text-white"
              title="Acercar zoom"
            >
              <ZoomIn className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setZoomLevel(100)}
              className="ml-1 text-[10px] text-white/40 hover:text-white"
              title="Restablecer zoom"
            >
              Reiniciar
            </button>
          </div>

          {/* Switch to full page mode */}
          <button
            onClick={() => setViewMode('interactive')}
            className="flex items-center gap-1.5 rounded-lg border border-[#ff8a7a]/40 bg-[#ff8a7a]/15 px-3 py-1 text-xs font-semibold text-[#ff8a7a] hover:bg-[#ff8a7a]/25 transition-colors"
          >
            <Layers className="h-3.5 w-3.5" />
            <span>Cambiar a Página Completa</span>
          </button>
        </div>

      </div>

      {/* 16:9 Browser Window Container */}
      <div 
        className="w-full max-w-[1720px] transition-all duration-300"
        style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
      >
        <div className="overflow-hidden rounded-2xl border-2 border-white/15 bg-[#13111a] shadow-[0_25px_80px_rgba(0,0,0,0.8)]">
          
          {/* macOS / Web Browser Chrome Frame */}
          <div className="flex items-center justify-between border-b border-white/10 bg-[#191624] px-4 py-3">
            
            {/* Window control dots */}
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
            </div>

            {/* URL bar */}
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#121019] px-4 py-1.5 text-xs text-white/60 w-full max-w-md mx-4">
              <Lock className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
              <span className="font-mono text-[11px] truncate text-white/80">
                https://desipatty.art/asistente-creativa
              </span>
              <span className="ml-auto text-[10px] rounded bg-white/5 px-1.5 py-0.5 text-[#ff8a7a]">
                Portafolio
              </span>
            </div>

            {/* Right side resolution badge */}
            <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-white/40">
              <span>2560 × 1440 (16:9)</span>
            </div>

          </div>

          {/* Website content viewport */}
          <div className="relative aspect-[16/9] w-full overflow-y-auto bg-[#13111a] scroll-smooth">
            {children}
          </div>

        </div>

        {/* Mockup Presentation Footnote */}
        <div className="mt-4 flex items-center justify-between text-xs text-white/40 px-2">
          <span>Vista de Presentación en Escritorio 16:9 • Puedes hacer scroll fluido dentro del lienzo</span>
          <span>DesiPatty — Arte de Videojuegos 2D & Asistente Visual Creativa</span>
        </div>

      </div>

    </div>
  );
};
