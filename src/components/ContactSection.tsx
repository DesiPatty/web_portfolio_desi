import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  Mail, 
  Check, 
  X, 
  Sparkles,
  Instagram
} from 'lucide-react';
import { IMAGES } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

// Custom icons for Behance and X / Twitter
const BehanceIcon: React.FC<{ className?: string }> = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M7.7 10.3c.7-.4 1.2-1.1 1.2-2.1 0-1.9-1.4-2.7-3.6-2.7H0v13h5.7c2.4 0 3.9-1.1 3.9-3.2 0-1.4-.7-2.5-1.9-2.8zM2.8 7.3h2.3c1.2 0 1.9.4 1.9 1.4 0 .9-.7 1.4-1.9 1.4H2.8V7.3zm2.5 9.4H2.8v-3.2h2.5c1.4 0 2.2.5 2.2 1.6 0 1.1-.8 1.6-2.2 1.6zm13.3-8.2c-3.6 0-5.8 2.5-5.8 6.1 0 3.7 2.3 6.1 6 6.1 2.5 0 4.4-1.2 5.1-3.2h-2.5c-.4.8-1.3 1.3-2.6 1.3-1.9 0-3-1.1-3.2-2.9h8.4c.1-.4.1-.9.1-1.3 0-3.5-2-6.1-5.5-6.1zm-3.1 4.9c.2-1.5 1.3-2.6 3.1-2.6 1.7 0 2.8 1.1 3 2.6h-6.1zm-.2-6.1h6.6V5.9h-6.6v1.4z" />
  </svg>
);

const XIcon: React.FC<{ className?: string }> = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Exactly the 3 requested professional social networks
const SOCIAL_NETWORKS = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: '#',
  },
  {
    name: 'Behance',
    icon: BehanceIcon,
    url: '#',
  },
  {
    name: 'Twitter / X',
    icon: XIcon,
    url: '#',
  },
];

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
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
  const { language, t } = useLanguage();

  const SCOPES = [
    'Interfaz de Juego & Iconos (UI)',
    'Personajes & Model Sheets',
    'Sprites de Objetos & Botín',
    'Escenarios & Paralaje',
    'Animación 2D & Spine',
    'Cápsula de Steam & Arte Promocional',
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
    <section id="contact" className="relative py-12 lg:py-16 border-t border-white/5 bg-black text-[#faf6f0] overflow-hidden">
      {/* Soft background ambient light */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[450px] rounded-full bg-gradient-to-t from-[#ff7865]/10 via-[#f472b6]/5 to-transparent blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Simple 2-Column Contact Showcase (Compact: p-6 sm:p-8 lg:p-10) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2, once: false }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="rounded-3xl border border-white/12 bg-gradient-to-br from-[#181324] via-[#14101e] to-[#100d18] p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl"
        >
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
            
            {/* LEFT COLUMN: Clean Call to Action */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ff7865]/35 bg-[#ff7865]/10 px-3 py-0.5 text-xs font-semibold text-[#ff8a7a]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{t('contact.badge')}</span>
              </div>

              {/* Title: “¿Tienes un proyecto en mente?” */}
              <h2 className="mt-3 font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.14]">
                {t('contact.title')}
              </h2>

              {/* Text: “Cuéntame qué necesitas para tu juego y vemos cómo puedo ayudarte.” */}
              <p className="mt-3 text-sm sm:text-base text-white/75 leading-relaxed font-normal max-w-xl">
                {t('contact.text')}
              </p>

              {/* Main Button: “Trabajemos juntos →” */}
              <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff7865] via-[#f47c7c] to-[#f7a072] px-6 py-3 text-sm sm:text-base font-extrabold text-[#13111a] shadow-lg shadow-[#ff7865]/25 hover:brightness-110 active:scale-95 transition-all"
                >
                  <span>{t('contact.button')}</span>
                </button>

                <a
                  href="mailto:soycreativadesi@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-xs sm:text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white transition-all"
                >
                  <Mail className="h-3.5 w-3.5 text-[#ff7865]" />
                  <span>soycreativadesi@gmail.com</span>
                </a>
              </div>

              {/* Sub-phrase: “Disponible para proyectos, sprints y colaboraciones de arte 2D.” */}
              <div className="mt-4 flex items-center gap-2 text-xs sm:text-sm text-white/55">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{t('contact.subphrase')}</span>
              </div>

            </div>

            {/* RIGHT COLUMN: Small Graphic Asset of Desi Game Artist */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative flex items-center justify-center p-2">
                
                {/* Glow ring */}
                <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-[#ff7865]/20 via-[#f472b6]/15 to-transparent blur-2xl" />

                {/* Circular frame with artist character (Compact: h-48 w-48 sm:h-56 sm:w-56) */}
                <div className="relative h-44 w-44 sm:h-52 sm:w-52 overflow-hidden rounded-full border-2 border-white/15 bg-gradient-to-b from-[#241a38] to-[#140e21] shadow-2xl p-2 flex items-center justify-center">
                  <img
                    src={IMAGES.chibiCharacter}
                    alt="DesiPatty — 2D Game Artist"
                    className="h-full w-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Floating decor sparkle */}
                <div className="pointer-events-none absolute -top-1 right-2 text-[#f6c177] text-base animate-pulse">
                  ✦
                </div>
                <div className="pointer-events-none absolute bottom-2 left-2 text-[#ff7865] text-sm animate-pulse">
                  ✦
                </div>

              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* REDES SOCIALES: Franja sencilla con Instagram, Behance y Twitter / X      */}
          {/* ========================================================================= */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            
            <p className="text-xs font-semibold uppercase tracking-wider text-white/50 font-mono">
              {t('contact.socialsLabel')}
            </p>

            {/* 3 exact social links */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {SOCIAL_NETWORKS.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    aria-label={`Perfil de ${social.name} de DesiPatty`}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-[#161224] px-3.5 py-1.5 text-xs font-medium text-white/80 hover:border-[#ff7865]/40 hover:text-white hover:bg-[#1f1830] transition-all"
                  >
                    <IconComponent className="h-3.5 w-3.5 text-[#ff7865]" />
                    <span>{social.name}</span>
                  </a>
                );
              })}
            </div>

          </div>

        </motion.div>

      </div>

      {/* ========================================================================= */}
      {/* INTERACTIVE FORM MODAL (Accessible via "Trabajemos juntos →")             */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              className="relative my-8 w-full max-w-2xl overflow-hidden rounded-3xl border border-white/20 bg-[#161224] p-5 sm:p-7 shadow-2xl z-10"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                    {language === 'es' ? 'Iniciar un proyecto con DesiPatty' : 'Start a project with DesiPatty'}
                  </h3>
                  <p className="text-xs text-white/60 mt-0.5">
                    {language === 'es' ? 'Cuéntame sobre tu juego y responderé en menos de 24 horas.' : 'Tell me about your game and I will respond in under 24 hours.'}
                  </p>
                </div>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="rounded-xl border border-white/10 p-1.5 text-white/60 hover:bg-white/10 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                    <Check className="h-6 w-6" />
                  </div>
                  <h4 className="mt-3 font-heading text-lg font-bold text-white">
                    {language === 'es' ? '¡Mensaje recibido!' : 'Message received!'}
                  </h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-white/70 max-w-md mx-auto">
                    {language === 'es' 
                      ? 'Gracias por escribirme. Revisaré tu propuesta artística y te responderé con disponibilidad y cotización.'
                      : 'Thank you for writing. I will review your project and get back to you with timeline and quote.'}
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setIsFormOpen(false);
                    }}
                    className="mt-5 rounded-xl bg-gradient-to-r from-[#ff7865] to-[#f47c7c] px-5 py-2 text-xs font-bold text-[#13111a]"
                  >
                    {language === 'es' ? 'Entendido' : 'Close'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  {/* Scope Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-white/80 mb-1.5">
                      {language === 'es' ? '¿Qué área de arte necesitas?' : 'Which art area do you need?'}
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {SCOPES.map((scope) => {
                        const isSelected = selectedScopes.includes(scope);
                        return (
                          <button
                            type="button"
                            key={scope}
                            onClick={() => toggleScope(scope)}
                            className={`rounded-xl px-2.5 py-1 text-xs font-medium transition-all ${
                              isSelected
                                ? 'border border-[#ff7865] bg-[#ff7865]/20 text-[#ff7865]'
                                : 'border border-white/10 bg-[#120e1c] text-white/60 hover:text-white'
                            }`}
                          >
                            {isSelected ? '✓ ' : '+ '}
                            {scope}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Studio & Game */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs text-white/70 mb-1">
                        {language === 'es' ? 'Estudio o Equipo' : 'Studio / Team Name'}
                      </label>
                      <input
                        type="text"
                        required
                        value={studioName}
                        onChange={(e) => setStudioName(e.target.value)}
                        placeholder="Ej: PixelForge Studio"
                        className="w-full rounded-xl border border-white/10 bg-[#120e1c] px-3 py-2 text-xs text-white placeholder-white/30 focus:border-[#ff7865] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/70 mb-1">
                        {language === 'es' ? 'Título del Juego' : 'Game Title'}
                      </label>
                      <input
                        type="text"
                        required
                        value={gameTitle}
                        onChange={(e) => setGameTitle(e.target.value)}
                        placeholder="Ej: Chrono Knight"
                        className="w-full rounded-xl border border-white/10 bg-[#120e1c] px-3 py-2 text-xs text-white placeholder-white/30 focus:border-[#ff7865] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Email & Engine */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs text-white/70 mb-1">
                        {language === 'es' ? 'Tu Correo Electrónico' : 'Your Email'}
                      </label>
                      <input
                        type="email"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="tuemail@estudio.com"
                        className="w-full rounded-xl border border-white/10 bg-[#120e1c] px-3 py-2 text-xs text-white placeholder-white/30 focus:border-[#ff7865] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/70 mb-1">
                        {language === 'es' ? 'Motor de Juego' : 'Target Game Engine'}
                      </label>
                      <select
                        value={engine}
                        onChange={(e) => setEngine(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-[#120e1c] px-3 py-2 text-xs text-white focus:border-[#ff7865] focus:outline-none"
                      >
                        <option value="Unity">Unity (2D / UI Toolkit)</option>
                        <option value="Godot">Godot 4.x (Spine / 2D)</option>
                        <option value="Unreal">Unreal Engine 5</option>
                        <option value="Otro">Otro / Custom Engine</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs text-white/70 mb-1">
                      {language === 'es' ? 'Detalles del Proyecto o Dudas' : 'Project Details / Scope'}
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={language === 'es' ? 'Cuéntame sobre el estilo, cantidad de assets o fecha estimada...' : 'Tell me about the style, asset count or target deadline...'}
                      className="w-full rounded-xl border border-white/10 bg-[#120e1c] p-2.5 text-xs text-white placeholder-white/30 focus:border-[#ff7865] focus:outline-none leading-relaxed"
                    />
                  </div>

                  {/* Quick Channels & Submit */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-white/10">
                    <div className="flex items-center gap-2.5 text-xs text-white/60">
                      <span>Discord: <strong className="text-white">@desipatty_art</strong></span>
                      <button
                        type="button"
                        onClick={handleCopyDiscord}
                        className="text-[11px] text-[#ff8a7a] hover:underline"
                      >
                        {copiedDiscord ? '¡Copiado!' : (language === 'es' ? 'Copiar' : 'Copy')}
                      </button>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#ff7865] via-[#f47c7c] to-[#f7a072] px-5 py-2.5 text-xs sm:text-sm font-bold text-[#13111a] shadow-lg shadow-[#ff7865]/20 hover:brightness-110"
                    >
                      <span>{language === 'es' ? 'Enviar mensaje' : 'Send Message'}</span>
                      <Send className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
