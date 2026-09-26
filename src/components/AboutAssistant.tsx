import React from 'react';
import { motion } from 'motion/react';
import { 
  Star, 
  Gamepad2, 
  Paintbrush, 
  Cog, 
  Sparkles 
} from 'lucide-react';
import { IMAGES } from '../data/portfolioData';

export const AboutAssistant: React.FC = () => {
  return (
    <section id="about" className="relative py-20 lg:py-28 bg-black text-[#faf6f0] overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-[#ff7865]/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-80 w-80 rounded-full bg-[#f472b6]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Tag / Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f43f5e]/30 bg-[#221020]/90 px-4 py-1 text-xs font-semibold text-[#ff8a7a] shadow-md backdrop-blur-md">
            <span className="text-xs">🧶</span>
            <span>02 · Sobre mí</span>
            <span className="text-xs">🪡</span>
            <span className="text-xs">✦</span>
          </div>
        </div>

        {/* Section Headline matching exact colors from reference */}
        <div className="mt-4 text-center max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.12]">
            Una Artista 2D <span className="text-[#ff7865]">Dedicada a los</span>
            <br />
            Sprints de <span className="text-[#f472b6]">tu Estudio</span>
          </h2>

          {/* Subtitle with highlighted yellow phrase */}
          <p className="mt-5 max-w-3xl mx-auto text-base sm:text-lg text-white/80 leading-relaxed">
            Me integro a equipos indie para crear arte visual de alta calidad, resolver necesidades específicas y entregar{' '}
            <span className="font-semibold text-[#f6c177]">assets listos para producción</span>.
          </p>
        </div>

        {/* Main Content Layout: Left Card + Right 2x2 Feature Grid */}
        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-12">
          
          {/* Left: Large Portrait Card with Floating Sparkles */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Floating Sparkle Stars around Card */}
            <div className="pointer-events-none absolute -top-3 left-4 text-[#ff8a7a] animate-pulse">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>
            <div className="pointer-events-none absolute top-10 -right-2 text-[#ff9e7d] animate-pulse">
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>
            <div className="pointer-events-none absolute top-1/2 -right-4 text-[#ff7865] animate-pulse">
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>
            <div className="pointer-events-none absolute -bottom-3 right-8 text-[#f6c177] animate-pulse">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>

            {/* Main Portrait Frame */}
            <div className="group relative w-full h-full min-h-[480px] sm:min-h-[540px] overflow-hidden rounded-[2rem] border-2 border-white/10 bg-[#161224] p-3 shadow-2xl transition-all duration-500 hover:border-[#ff8a7a]/40">
              <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-[#1a1426]">
                <img
                  src={IMAGES.aboutPortrait}
                  alt="DesiPatty en su taller de arte para videojuegos"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-103"
                />
                
                {/* Subtle vignette shadow at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#120e1d]/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Right: Feature / Experience Grid (2x2) */}
          <div className="lg:col-span-7 relative flex flex-col justify-center">
            
            {/* Cute Sketched Cat in top-right corner */}
            <div className="absolute -top-14 right-2 hidden sm:block pointer-events-none select-none">
              {/* Radiating playful lines */}
              <div className="flex justify-end pr-8 gap-1.5 text-purple-400 text-xs font-mono font-bold opacity-80">
                <span>\</span>
                <span>|</span>
                <span>/</span>
              </div>
              {/* Sketched sleeping/friendly cat */}
              <svg className="w-36 h-20 text-purple-400/80" viewBox="0 0 140 80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {/* Cat back and body */}
                <path d="M 40 60 C 35 40, 55 25, 80 25 C 105 25, 125 35, 130 55 C 132 68, 120 72, 95 72 C 65 72, 45 72, 40 60 Z" />
                {/* Ears */}
                <path d="M 60 27 L 55 10 L 72 22" />
                <path d="M 88 22 L 105 10 L 100 27" />
                {/* Happy curved eyes */}
                <path d="M 68 38 Q 75 32 82 38" />
                <path d="M 92 38 Q 99 32 106 38" />
                {/* Cute nose and mouth */}
                <path d="M 87 43 L 87 46 M 83 48 Q 87 51 91 48" />
                {/* Whiskers */}
                <path d="M 62 44 L 46 41 M 62 48 L 44 50 M 63 52 L 48 57" />
                <path d="M 108 44 L 124 41 M 108 48 L 126 50 M 107 52 L 122 57" />
                {/* Front paws tucked */}
                <path d="M 65 62 C 65 68, 76 68, 76 62" />
                <path d="M 90 62 C 90 68, 101 68, 101 62" />
                {/* Tail curled around */}
                <path d="M 130 58 C 138 58, 140 70, 128 74 C 118 76, 106 73, 100 72" />
              </svg>
            </div>

            {/* 2x2 Grid */}
            <div className="grid gap-5 sm:grid-cols-2">
              
              {/* Card 1: 10+ Años de experiencia */}
              <div className="group rounded-3xl border border-white/10 bg-[#191325]/90 p-6 sm:p-7 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-[#ff7865]/40 hover:-translate-y-1 hover:bg-[#1d162c]">
                {/* Icon box + hand-drawn accent lines */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#ef4444]/40 bg-gradient-to-br from-[#7f1d1d]/60 to-[#450a0a]/90 text-[#ff7865] shadow-lg shadow-[#ef4444]/15">
                      <Star className="h-7 w-7 fill-current text-[#ff7865]" />
                    </div>
                    {/* Hand-drawn radial rays */}
                    <div className="flex items-center gap-1.5 mt-2 pl-2 text-xs font-bold text-[#ff7865]">
                      <span>/</span>
                      <span>|</span>
                      <span>\</span>
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <span className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
                    10+
                  </span>
                  <h3 className="text-sm font-bold text-[#ff7865] mt-0.5">
                    Años de experiencia
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-[13px] text-white/70 leading-relaxed">
                    Más de una década trabajando en ilustración, diseño gráfico, 2D, 3D y producción de assets digitales.
                  </p>
                </div>
              </div>

              {/* Card 2: 2D + 3D Producción para videojuegos */}
              <div className="group rounded-3xl border border-white/10 bg-[#14152a]/90 p-6 sm:p-7 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-[#818cf8]/40 hover:-translate-y-1 hover:bg-[#181932]">
                {/* Icon box + hand-drawn accent lines */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#6366f1]/40 bg-gradient-to-br from-[#1e1b4b]/60 to-[#312e81]/90 text-[#818cf8] shadow-lg shadow-[#6366f1]/15">
                      <Gamepad2 className="h-7 w-7 text-[#818cf8]" />
                    </div>
                    {/* Hand-drawn radial rays */}
                    <div className="flex items-center gap-1.5 mt-2 pl-2 text-xs font-bold text-[#818cf8]">
                      <span>/</span>
                      <span>|</span>
                      <span>\</span>
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <span className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
                    2D + 3D
                  </span>
                  <h3 className="text-sm font-bold text-[#818cf8] mt-0.5">
                    Producción para videojuegos
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-[13px] text-white/70 leading-relaxed">
                    Personajes, escenarios, props, UI, iconos, símbolos y piezas promocionales para proyectos indie y estudios.
                  </p>
                </div>
              </div>

              {/* Card 3: 6+ Áreas de producción visual */}
              <div className="group rounded-3xl border border-white/10 bg-[#1b151f]/90 p-6 sm:p-7 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-[#f59e0b]/40 hover:-translate-y-1 hover:bg-[#201824]">
                {/* Icon box + hand-drawn accent lines */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#f59e0b]/40 bg-gradient-to-br from-[#78350f]/60 to-[#451a03]/90 text-[#fbbf24] shadow-lg shadow-[#f59e0b]/15">
                      <Paintbrush className="h-7 w-7 text-[#fbbf24]" />
                    </div>
                    {/* Hand-drawn radial rays */}
                    <div className="flex items-center gap-1.5 mt-2 pl-2 text-xs font-bold text-[#fbbf24]">
                      <span>/</span>
                      <span>|</span>
                      <span>\</span>
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <span className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
                    6+
                  </span>
                  <h3 className="text-sm font-bold text-[#f59e0b] mt-0.5">
                    Áreas de producción visual
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-[13px] text-white/70 leading-relaxed">
                    Concept art, personajes, entornos, props, UI, iconos, animación y materiales/texturas.
                  </p>
                </div>
              </div>

              {/* Card 4: 3 Game engines / Pipelines */}
              <div className="group rounded-3xl border border-white/10 bg-[#0e1c1f]/90 p-6 sm:p-7 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-[#10b981]/40 hover:-translate-y-1 hover:bg-[#122327]">
                {/* Icon box + hand-drawn accent lines */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#10b981]/40 bg-gradient-to-br from-[#064e3b]/60 to-[#022c22]/90 text-[#34d399] shadow-lg shadow-[#10b981]/15">
                      <Cog className="h-7 w-7 text-[#34d399]" />
                    </div>
                    {/* Hand-drawn radial rays */}
                    <div className="flex items-center gap-1.5 mt-2 pl-2 text-xs font-bold text-[#34d399]">
                      <span>/</span>
                      <span>|</span>
                      <span>\</span>
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <span className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
                    3
                  </span>
                  <h3 className="text-sm font-bold text-[#34d399] mt-0.5">
                    Game engines / Pipelines
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-[13px] text-white/70 leading-relaxed">
                    Assets listos para producción en Unity, Godot y Unreal. Preparación, cortes, exportaciones y organización de archivos.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
