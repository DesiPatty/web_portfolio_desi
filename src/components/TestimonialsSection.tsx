import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Star, 
  Quote, 
  Sparkles, 
  CheckCircle2, 
  Gamepad2, 
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section id="testimonials" className="relative py-20 lg:py-28 border-t border-white/5 bg-black text-[#faf6f0]">
      {/* Ambient background blur */}
      <div className="pointer-events-none absolute top-1/2 left-1/3 h-96 w-96 rounded-full bg-[#ff8a7a]/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f6c177]/30 bg-[#f6c177]/10 px-4 py-1 text-xs font-semibold text-[#f6c177]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>05 • Testimonios & Casos de Estudio</span>
          </div>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-[#faf6f0] sm:text-4xl lg:text-5xl">
            Lo Que Dicen los Desarrolladores Indie
          </h2>
          <p className="mt-4 text-base text-white/70 leading-relaxed">
            Fundadores, programadores principales y directores creativos que han sumado a DesiPatty a sus sprints de arte.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#161222] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ff8a7a]/40 hover:bg-[#1a1527]"
            >
              <div>
                {/* Top Quote Icon & Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex text-[#f6c177]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-[#9ccfd8]">
                    {item.gameBadge}
                  </span>
                </div>

                {/* Quote Body */}
                <p className="mt-5 text-xs sm:text-sm text-white/80 leading-relaxed italic">
                  “{item.quoteEs || item.quote}”
                </p>
              </div>

              {/* Author & Game Details */}
              <div className="mt-6 border-t border-white/10 pt-4 flex items-center gap-3">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-gradient-to-tr from-[#ff8a7a] to-[#f6c177] font-heading font-bold text-xs text-[#13111a]">
                  {item.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="overflow-hidden">
                  <h4 className="font-heading text-sm font-bold text-white truncate">
                    {item.author}
                  </h4>
                  <p className="text-[11px] text-[#ff8a7a] font-medium truncate">
                    {item.role}
                  </p>
                  <p className="text-[10px] text-white/50 truncate">
                    {item.studio} • <span className="text-white/70">{item.game}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Testimonial Deep-Dive Banner */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[#1d172c] via-[#171324] to-[#14101e] p-6 sm:p-10 shadow-2xl">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <Quote className="h-8 w-8 text-[#ff8a7a]/60" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#f6c177]">
                  Caso Destacado: Arcana Forge (Steam 2025)
                </span>
              </div>
              <p className="text-base sm:text-xl font-medium text-white/90 leading-relaxed">
                “Lo más valioso de trabajar con Desi no fue solo la calidad de las ilustraciones o los 9-slices para Unity, sino la tranquilidad. Nunca tuvimos que perseguirla para saber cómo iba el avance; cada mañana había capturas en nuestro canal de Discord.”
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="text-xs text-white/60">
                  <span className="font-bold text-white">Elena Rostova</span> — Studio Founder, Gilded Spire Studios
                </div>
                <span className="text-xs text-white/30">•</span>
                <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300">
                  Sprint Entregado en 4 días
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="rounded-2xl border border-white/10 bg-[#120f1b] p-4 text-center w-full max-w-xs">
                <div className="flex items-center justify-center gap-1.5 text-emerald-400 text-xs font-bold mb-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>100% Satisfacción Verificada</span>
                </div>
                <p className="text-[11px] text-white/60">
                  Todos los proyectos cuentan con 2 rondas de ajustes incluidas y revisión en el motor de juego.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
