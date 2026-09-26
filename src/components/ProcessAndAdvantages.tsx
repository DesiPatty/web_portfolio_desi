import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MessageSquareText, 
  FolderKanban, 
  Palette, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { PIPELINE_STEPS } from '../data/portfolioData';

const ICON_MAP: Record<string, React.ReactNode> = {
  MessageSquareText: <MessageSquareText className="h-5 w-5" />,
  FolderKanban: <FolderKanban className="h-5 w-5" />,
  Palette: <Palette className="h-5 w-5" />,
  CheckCircle2: <CheckCircle2 className="h-5 w-5" />,
};

export const ProcessAndAdvantages: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section id="process-advantages" className="relative py-20 lg:py-28 border-t border-white/5 bg-black text-[#faf6f0]">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-1/3 left-10 h-96 w-96 rounded-full bg-[#f6c177]/5 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-10 h-96 w-96 rounded-full bg-[#ff8a7a]/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ff8a7a]/30 bg-[#ff8a7a]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#ff8a7a]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>ASÍ TRABAJAMOS JUNTOS</span>
          </div>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-[#faf6f0] sm:text-4xl lg:text-5xl">
            De tu idea al asset listo para tu juego
          </h2>
          <p className="mt-4 text-base text-white/70 leading-relaxed">
            Trabajo contigo desde la primera idea hasta la entrega final, adaptándome al estilo y las necesidades de tu proyecto.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PIPELINE_STEPS.map((step) => {
            const isActive = activeStep === step.step;

            return (
              <motion.div
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                className={`group relative flex flex-col justify-between rounded-3xl border p-6 cursor-pointer transition-all duration-300 ${
                  isActive
                    ? 'border-[#ff8a7a] bg-[#1d172b] shadow-xl shadow-[#ff8a7a]/15 scale-[1.02]'
                    : 'border-white/10 bg-[#161222] hover:border-white/25 hover:bg-[#1a1527]'
                }`}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#ff8a7a]">
                      {step.tag}
                    </span>
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors ${
                      isActive 
                        ? 'border-[#ff8a7a]/50 bg-[#ff8a7a]/20 text-[#ff8a7a]'
                        : 'border-white/10 bg-white/5 text-white/60 group-hover:text-white'
                    }`}>
                      {ICON_MAP[step.icon]}
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white mt-4 leading-snug">
                    {step.title}
                  </h3>

                  <p className="mt-2.5 text-xs leading-relaxed text-white/70">
                    {step.description}
                  </p>
                </div>

                {/* Step specific deliverables / notes */}
                <div className="mt-6 border-t border-white/10 pt-4 text-xs">
                  {step.step === 1 && (
                    <div className="space-y-3">
                      <div>
                        <span className="text-[11px] font-bold text-[#ff8a7a]">Tú me das:</span>
                        <p className="mt-1 text-[11px] leading-relaxed text-white/80 bg-white/5 p-2 rounded-lg border border-white/5 font-mono">
                          {step.youGive}
                        </p>
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-[#f6c177]">Yo hago:</span>
                        <p className="mt-1 text-[11px] leading-relaxed text-white/80 bg-white/5 p-2 rounded-lg border border-white/5 font-mono">
                          {step.iDo}
                        </p>
                      </div>
                    </div>
                  )}

                  {step.step === 2 && (
                    <div>
                      <span className="text-[11px] font-bold text-[#ff8a7a]">Definimos:</span>
                      <p className="mt-1.5 text-[11px] leading-relaxed text-white/80 bg-white/5 p-2.5 rounded-lg border border-white/5 font-mono">
                        {step.definedItems}
                      </p>
                    </div>
                  )}

                  {step.step === 3 && (
                    <div>
                      <span className="text-[11px] font-bold text-[#ff8a7a]">Proceso:</span>
                      <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-[11px] bg-white/5 p-2.5 rounded-lg border border-white/5 font-mono text-white/80">
                        {step.processFlow?.map((item, idx, arr) => (
                          <React.Fragment key={idx}>
                            <span className={idx === arr.length - 1 ? 'text-emerald-400 font-bold' : ''}>
                              {item}
                            </span>
                            {idx < arr.length - 1 && (
                              <span className="text-[#ff8a7a]">→</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}

                  {step.step === 4 && (
                    <div>
                      <span className="text-[11px] font-bold text-[#ff8a7a]">Entregables:</span>
                      <p className="mt-1.5 text-[11px] leading-relaxed text-white/80 bg-white/5 p-2.5 rounded-lg border border-white/5 font-mono">
                        {step.deliverablesList}
                      </p>
                    </div>
                  )}
                </div>

                {/* Active highlight indicator */}
                {isActive && (
                  <div className="absolute -top-1 left-8 right-8 h-1 rounded-full bg-gradient-to-r from-[#ff8a7a] to-[#f6c177]" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Línea final debajo de las tarjetas */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-r from-[#171324] via-[#1f1930] to-[#171324] p-6 sm:p-8 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl text-center sm:text-left">
            <h4 className="font-heading text-lg sm:text-xl font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <span className="text-[#ff8a7a]">✦</span>
              <span>¿Necesitas algo específico?</span>
            </h4>
            <p className="mt-1.5 text-xs sm:text-sm text-white/75 leading-relaxed">
              También podemos trabajar por tareas puntuales o sprints, según lo que tu equipo necesite.
            </p>
          </div>

          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#ff8a7a] to-[#f47c7c] px-6 py-3.5 text-xs sm:text-sm font-bold text-[#13111a] shadow-lg shadow-[#ff8a7a]/25 hover:brightness-110 transition-all"
          >
            <span>Hablemos de tu proyecto</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
