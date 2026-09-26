import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Send, 
  MessageSquare, 
  Mail, 
  Sparkles, 
  Check, 
  Copy, 
  Calendar, 
  Clock, 
  Gamepad2, 
  FileText,
  AlertCircle
} from 'lucide-react';
import { IMAGES } from '../data/portfolioData';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [selectedScopes, setSelectedScopes] = useState<string[]>(
    initialService ? [initialService] : ['Interfaz de Juego & Iconos (UI)']
  );
  const [timeline, setTimeline] = useState<string>('Próximo Hito (2–4 sem)');
  const [engine, setEngine] = useState<string>('Unity / Godot');
  const [studioName, setStudioName] = useState<string>('');
  const [gameTitle, setGameTitle] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copiedDiscord, setCopiedDiscord] = useState<boolean>(false);

  const SCOPES = [
    'Interfaz de Juego & Iconos (UI)',
    'Personajes & Model Sheets',
    'Sprites de Objetos & Botín',
    'Escenarios & Paralaje',
    'Animación 2D & Spine',
    'Cápsula de Steam & Arte Promocional',
    'UI Completa para Vertical Slice'
  ];

  const toggleScope = (scope: string) => {
    if (selectedScopes.includes(scope)) {
      if (selectedScopes.length > 1) {
        setSelectedScopes(selectedScopes.filter((s) => s !== scope));
      }
    } else {
      setSelectedScopes([...selectedScopes, scope]);
    }
  };

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText('@desipatty_art');
    setCopiedDiscord(true);
    setTimeout(() => setCopiedDiscord(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 border-t border-white/5 bg-black">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#ff8a7a]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with exact requested phrase */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ff8a7a]/30 bg-[#ff8a7a]/10 px-3.5 py-1 text-xs font-semibold text-[#ff8a7a]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>08 • Disponible para Colaboraciones con Estudios Indie</span>
          </div>

          {/* Exact Requested Phrase in Spanish */}
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-[#faf6f0] sm:text-4xl lg:text-5xl">
            “Dime dónde necesitas un par extra de manos creativas.”
          </h2>

          <p className="mt-4 text-base text-white/70 leading-relaxed">
            Ya sea un sprint de interfaz de 1 semana o dirección de arte continua por hitos para tu juego indie, hablemos de entregables, biblia visual y calendarios de entrega.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12 items-start">
          
          {/* Left Column: Direct channels & Assistant Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Assistant Presence Card */}
            <div className="rounded-2xl border border-white/10 bg-[#1c1828] p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-[#ff8a7a] bg-[#231e33] flex-shrink-0">
                  <img
                    src={IMAGES.avatar}
                    alt="DesiPatty Avatar"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-white">DesiPatty</h3>
                  <p className="text-xs text-[#ff8a7a] font-medium">Tu Asistente de Arte 2D para Videojuegos</p>
                  <div className="mt-1.5 flex items-center gap-2 text-[11px] text-emerald-400 font-semibold">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Responde habitualmente en 4 a 8 horas</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 border-t border-white/10 pt-4 text-xs text-white/70 leading-relaxed space-y-2">
                <p>
                  “Comparte tu documento de diseño (GDD), wireframes preliminares o enlace de Steam. Reviso personalmente cada consulta indie y respondo con tiempos de entrega claros y presupuesto cerrado.”
                </p>
              </div>

              {/* Hand-drawn note */}
              <div className="mt-4 rounded-xl border border-dashed border-[#f6c177]/40 bg-[#f6c177]/5 p-3 text-xs text-[#f6c177] font-handwriting text-sm">
                ✦ ¿Acuerdo de Confidencialidad (NDA)? Sin ningún problema. Firmo gustosamente el NDA mutuo de tu equipo antes de que compartas material no anunciado.
              </div>
            </div>

            {/* Quick Contact Methods */}
            <div className="rounded-2xl border border-white/10 bg-[#1c1828] p-6 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/50">
                Canales Directos para Desarrolladores
              </h4>

              {/* Discord direct action */}
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-[#14111d] p-3.5 text-xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#5865F2]/20 text-[#5865F2]">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Usuario de Discord</p>
                    <p className="font-mono text-[11px] text-white/60">@desipatty_art</p>
                  </div>
                </div>
                <button
                  onClick={handleCopyDiscord}
                  className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] font-medium text-white/80 hover:bg-white/10 transition-colors"
                >
                  {copiedDiscord ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-400" />
                      <span className="text-emerald-400">¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct email */}
              <a
                href="mailto:soycreativadesi@gmail.com"
                className="flex items-center justify-between rounded-xl border border-white/10 bg-[#14111d] p-3.5 text-xs transition-colors hover:border-[#ff8a7a]/40"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ff8a7a]/20 text-[#ff8a7a]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Correo Directo</p>
                    <p className="font-mono text-[11px] text-white/60">soycreativadesi@gmail.com</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#ff8a7a]">Escribir Correo →</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Milestone Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/15 bg-[#1a1727] p-6 sm:p-8 shadow-2xl">
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 font-heading text-2xl font-bold text-white">
                    ¡Consulta de Hito Recibida!
                  </h3>
                  <p className="mt-2 text-sm text-white/70 max-w-md mx-auto">
                    ¡Gracias por escribirme! Revisaré los detalles de tu proyecto y te responderé con disponibilidad, desglose y propuesta de cotización en menos de 8 horas.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white hover:bg-white/10"
                  >
                    Enviar otra consulta
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Scope Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                      1. ¿En qué área necesitas apoyo de arte? (Selecciona todas las que apliquen)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {SCOPES.map((scope) => {
                        const isSelected = selectedScopes.includes(scope);
                        return (
                          <button
                            type="button"
                            key={scope}
                            onClick={() => toggleScope(scope)}
                            className={`rounded-xl px-3.5 py-2 text-xs font-medium transition-all ${
                              isSelected
                                ? 'border border-[#ff8a7a] bg-[#ff8a7a]/20 text-[#ff8a7a] shadow-sm'
                                : 'border border-white/10 bg-[#13111d] text-white/60 hover:text-white'
                            }`}
                          >
                            {isSelected ? '✓ ' : '+ '}
                            {scope}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Studio & Project Details */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-1.5">
                        Estudio o Nombre del Equipo
                      </label>
                      <input
                        type="text"
                        required
                        value={studioName}
                        onChange={(e) => setStudioName(e.target.value)}
                        placeholder="Ej: Moonlit Clockwork Games"
                        className="w-full rounded-xl border border-white/10 bg-[#13111d] px-4 py-2.5 text-xs text-white placeholder-white/30 focus:border-[#ff8a7a] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-1.5">
                        Título del Juego y Género
                      </label>
                      <input
                        type="text"
                        required
                        value={gameTitle}
                        onChange={(e) => setGameTitle(e.target.value)}
                        placeholder="Ej: Aetheria (RPG Roguelike 2D)"
                        className="w-full rounded-xl border border-white/10 bg-[#13111d] px-4 py-2.5 text-xs text-white placeholder-white/30 focus:border-[#ff8a7a] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Contact Email & Engine */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-1.5">
                        Tu Correo Electrónico o Discord
                      </label>
                      <input
                        type="text"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="productor@tuestudio.com o Usuario#1234"
                        className="w-full rounded-xl border border-white/10 bg-[#13111d] px-4 py-2.5 text-xs text-white placeholder-white/30 focus:border-[#ff8a7a] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-1.5">
                        Motor de Juego Objetivo
                      </label>
                      <select
                        value={engine}
                        onChange={(e) => setEngine(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-[#13111d] px-4 py-2.5 text-xs text-white focus:border-[#ff8a7a] focus:outline-none"
                      >
                        <option value="Unity">Unity (2D Sprite Atlas / UI Toolkit)</option>
                        <option value="Godot">Godot 4.x (TileMap / Spine)</option>
                        <option value="Unreal">Unreal Engine 5 (Paper2D / UI)</option>
                        <option value="Custom">Motor Propio / MonoGame / Love2D</option>
                      </select>
                    </div>
                  </div>

                  {/* Timeline Selection */}
                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-1.5">
                      Plazo Estimado del Hito
                    </label>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      {['Sprint Urgente (< 2 sem)', 'Próximo Hito (2–4 sem)', 'Hoja de Ruta Flexible'].map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setTimeline(t)}
                          className={`rounded-lg border p-2 text-center text-[11px] font-medium transition-all ${
                            timeline === t
                              ? 'border-[#f6c177] bg-[#f6c177]/20 text-[#f6c177]'
                              : 'border-white/10 bg-[#13111d] text-white/60 hover:text-white'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Brief / Notes */}
                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-1.5">
                      Notas del Proyecto, Enlaces o Cuello de Botella
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Cuéntame sobre tu necesidad artística (ej: 'Necesitamos 12 iconos de inventario y 3 retratos de busto para nuestra demo de Steam Next Fest en julio'). ¡Enlaces a Steam o pitch deck son bienvenidos!"
                      className="w-full rounded-xl border border-white/10 bg-[#13111d] p-3 text-xs text-white placeholder-white/30 focus:border-[#ff8a7a] focus:outline-none leading-relaxed"
                    />
                  </div>

                  {/* Prominent Requested "Start a project" Button */}
                  <button
                    type="submit"
                    className="relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff8a7a] via-[#f47c7c] to-[#f7a072] py-4 text-sm font-extrabold text-[#13111a] shadow-xl shadow-[#ff8a7a]/30 transition-all hover:brightness-110 active:scale-[0.99]"
                  >
                    <span>Iniciar un proyecto</span>
                    <Send className="h-4 w-4" />
                  </button>

                  <p className="text-center text-[11px] text-white/40">
                    Sin compromiso ni spam. Respuesta directa de DesiPatty en menos de 24 horas.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
