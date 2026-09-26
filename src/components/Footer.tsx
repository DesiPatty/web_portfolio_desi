import React from 'react';
import { Heart, Sparkles, ArrowUp, MessageSquare, ExternalLink } from 'lucide-react';
import { IMAGES } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 bg-black py-12 text-xs text-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Brand & Positioning */}
          <div className="flex items-center gap-3.5">
            <div className="h-10 w-10 overflow-hidden rounded-full border border-[#ff8a7a]/40 bg-[#1e1b29]">
              <img
                src={IMAGES.avatar}
                alt="DesiPatty"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading text-lg font-bold text-white">DesiPatty</span>
                <span className="rounded bg-[#ff8a7a]/15 px-2 py-0.5 text-[10px] font-semibold text-[#ff8a7a]">
                  Asistente Visual Creativa
                </span>
              </div>
              <p className="text-[11px] text-white/50">
                Soporte de arte 2D listo para producción para estudios de videojuegos indie.
              </p>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-white/70">
            <a href="#home" className="hover:text-[#ff8a7a] transition-colors">Inicio</a>
            <a href="#about" className="hover:text-[#ff8a7a] transition-colors">Sobre Mí</a>
            <a href="#services" className="hover:text-[#ff8a7a] transition-colors">Servicios</a>
            <a href="#process-advantages" className="hover:text-[#ff8a7a] transition-colors">Procesos & Ventajas</a>
            <a href="#testimonials" className="hover:text-[#ff8a7a] transition-colors">Testimonios</a>
            <a href="#gift-kit" className="hover:text-[#ff8a7a] transition-colors">Kit Gratis</a>
            <a href="#faq" className="hover:text-[#ff8a7a] transition-colors">Preguntas</a>
            <a href="#contact" className="hover:text-[#ff8a7a] transition-colors">Contacto</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10 transition-colors"
          >
            <span>Volver arriba</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} DesiPatty. Todos los derechos reservados.</span>
            <span>•</span>
            <span>Diseñado con pasión para desarrolladores indie.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              <span>Disponible para nuevos sprints</span>
            </span>
            <span>•</span>
            <span className="font-mono">Figma • Spine 2D • Unity • Godot</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
