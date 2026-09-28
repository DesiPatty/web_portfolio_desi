import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'motion/react';
import { 
  Star, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Gamepad2,
  Layers
} from 'lucide-react';
import { IMAGES } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

// -------------------------------------------------------------
// Testimonial Cases Data (4 cases matching portfolio assets)
// -------------------------------------------------------------
const CASE_STUDIES = [
  {
    id: 'elena-rostova',
    indexStr: '01',
    author: 'Elena Rostova',
    role: 'Studio Founder & Producer',
    studio: 'Gilded Spire Studios',
    game: 'Arcana Forge RPG',
    projectTag: 'Arcana Forge RPG · Interfaz & Spine',
    badge: 'Steam Demo 2025',
    image: IMAGES.gameUi,
    imageAlt: 'Arte e interfaz de usuario para Arcana Forge RPG',
    quote: 'Tener a Desi como asistente visual fue como tener una directora de arte senior directamente en nuestro Discord. Archivos impecables, cero drama y sus entregas para animaciones en Spine fueron perfectas.',
    quoteEn: 'Having Desi as our visual assistant felt like having a senior art director right in our Discord. Organized files, zero drama, and her turnarounds for our Spine animations were completely flawless.',
    rating: 5,
    accentColor: '#ff7865',
    avatarBg: 'from-[#ff7865]/20 to-[#f472b6]/20 border-[#ff7865]/40',
    avatarSvg: (
      <svg viewBox="0 0 48 48" className="h-full w-full" fill="none">
        <circle cx="24" cy="24" r="23" fill="#231730" />
        <circle cx="24" cy="18" r="13" fill="#382142" />
        <circle cx="24" cy="9" r="6" fill="#382142" />
        <circle cx="24" cy="21" r="10" fill="#fed7aa" />
        <circle cx="20" cy="21" r="3.5" stroke="#f6c177" strokeWidth="1.2" fill="#ffffff" fillOpacity="0.2" />
        <circle cx="28" cy="21" r="3.5" stroke="#f6c177" strokeWidth="1.2" fill="#ffffff" fillOpacity="0.2" />
        <path d="M23.5 21H24.5" stroke="#f6c177" strokeWidth="1.2" />
        <circle cx="20" cy="21" r="1" fill="#1f162b" />
        <circle cx="28" cy="21" r="1" fill="#1f162b" />
        <path d="M22 26Q24 28 26 26" stroke="#e11d48" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M12 44C12 34 18 31 24 31C30 31 36 34 36 44H12Z" fill="#ff7865" fillOpacity="0.85" />
      </svg>
    ),
  },
  {
    id: 'kaelen-vance',
    indexStr: '02',
    author: 'Kaelen Vance',
    role: 'Lead Developer',
    studio: 'Moonlit Clockwork Games',
    game: 'Aetheria: Chrono Quest',
    projectTag: 'Aetheria: Chrono Quest · Personajes & Retratos',
    badge: 'Kickstarter Funded 180%',
    image: IMAGES.characters,
    imageAlt: 'Diseño de personajes y retratos para Aetheria',
    quote: 'DesiPatty se sumó a nuestro proyecto en Godot 3 semanas antes del deadline. Su kit de UI y retratos elevaron el juego de un prototipo básico a un showcase digno de Steam.',
    quoteEn: 'DesiPatty jumped into our Godot project 3 weeks before our demo deadline. Her UI kit and character portraits completely elevated our game from looking like a prototype to a polished Steam showcase.',
    rating: 5,
    accentColor: '#38bdf8',
    avatarBg: 'from-[#38bdf8]/20 to-[#818cf8]/20 border-[#38bdf8]/40',
    avatarSvg: (
      <svg viewBox="0 0 48 48" className="h-full w-full" fill="none">
        <circle cx="24" cy="24" r="23" fill="#141d33" />
        <path d="M15 19C15 13 18 10 24 10C30 10 33 13 33 19V22H15V19Z" fill="#293b5e" />
        <circle cx="24" cy="22" r="9.5" fill="#fed7aa" />
        <path d="M13 22C13 15 35 15 35 22" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="12" y="20" width="4" height="7" rx="2" fill="#818cf8" />
        <rect x="32" y="20" width="4" height="7" rx="2" fill="#818cf8" />
        <circle cx="20.5" cy="22" r="1.2" fill="#1e293b" />
        <circle cx="27.5" cy="22" r="1.2" fill="#1e293b" />
        <path d="M22 27Q24 29 26 27" stroke="#b45309" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M13 44C13 35 17 32 24 32C31 32 35 35 35 44H13Z" fill="#38bdf8" fillOpacity="0.8" />
      </svg>
    ),
  },
  {
    id: 'marcus-thorne',
    indexStr: '03',
    author: 'Marcus Thorne',
    role: 'Solo Indie Creator',
    studio: 'Dicebox Realm',
    game: 'Mystic Relics Deckbuilder',
    projectTag: 'Mystic Relics Deckbuilder · Iconos & Props',
    badge: 'Steam Early Access',
    image: IMAGES.assets,
    imageAlt: 'Set de iconos de inventario y objetos para Mystic Relics',
    quote: 'Como desarrollador en solitario, el arte era mi gran cuello de botella. Desi entregó 32 iconos de objetos con mapas de normales y una iluminación coherente. Me ahorró dos meses de trabajo.',
    quoteEn: 'As a solo dev, art was my ultimate bottleneck. Desi delivered 32 item icons with pixel-perfect normal maps and consistent lighting. Saved me at least two months of painful trial-and-error.',
    rating: 5,
    accentColor: '#f6c177',
    avatarBg: 'from-[#f6c177]/20 to-[#ff7865]/20 border-[#f6c177]/40',
    avatarSvg: (
      <svg viewBox="0 0 48 48" className="h-full w-full" fill="none">
        <circle cx="24" cy="24" r="23" fill="#261b17" />
        <path d="M15 19C15 12 18 10 24 10C30 10 33 12 33 19H15Z" fill="#f6c177" />
        <rect x="14" y="17" width="20" height="4" rx="2" fill="#d97706" />
        <circle cx="24" cy="23" r="9.5" fill="#fcd34d" fillOpacity="0.9" />
        <path d="M16 25C16 32 32 32 32 25C32 28 30 33 24 33C18 33 16 28 16 25Z" fill="#78350f" />
        <circle cx="20.5" cy="22" r="1.2" fill="#1c1917" />
        <circle cx="27.5" cy="22" r="1.2" fill="#1c1917" />
        <path d="M22 28Q24 30 26 28" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />
        <path d="M13 44C13 35 18 33 24 33C30 33 35 35 35 44H13Z" fill="#991b1b" />
      </svg>
    ),
  },
  {
    id: 'saffron-lin',
    indexStr: '04',
    author: 'Saffron Lin',
    role: 'Creative Director',
    studio: 'Neon Moth Interactive',
    game: 'Twilight Haven',
    projectTag: 'Twilight Haven · Fondos & Paralaje',
    badge: 'Indie Megabooth Selection',
    image: IMAGES.environment,
    imageAlt: 'Escenario y fondos en paralaje para Twilight Haven',
    quote: 'Se adaptó a nuestra guía de arte estilo acuarela desde el primer día. Los jugadores elogian constantemente los fondos con paralaje bioluminiscente que diseñó.',
    quoteEn: 'She adapted to our watercolor art bible on day one. Our players constantly praise the bioluminescent parallax backgrounds she crafted. Highly recommended for any serious indie studio.',
    rating: 5,
    accentColor: '#34d399',
    avatarBg: 'from-[#34d399]/20 to-[#06b6d4]/20 border-[#34d399]/40',
    avatarSvg: (
      <svg viewBox="0 0 48 48" className="h-full w-full" fill="none">
        <circle cx="24" cy="24" r="23" fill="#122421" />
        <path d="M14 20C14 12 18 9 24 9C30 9 34 12 34 20V27C34 27 31 29 29 26C29 26 27 28 24 28C21 28 19 26 19 26C17 29 14 27 14 27V20Z" fill="#1e3a34" />
        <circle cx="24" cy="21" r="9.5" fill="#fde68a" fillOpacity="0.9" />
        <circle cx="14.5" cy="25" r="2" fill="#34d399" />
        <circle cx="20.5" cy="21" r="1.2" fill="#064e3b" />
        <circle cx="27.5" cy="21" r="1.2" fill="#064e3b" />
        <path d="M22 26Q24 28 26 26" stroke="#059669" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M13 44C13 34 18 32 24 32C30 32 35 34 35 44H13Z" fill="#047857" />
      </svg>
    ),
  },
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { language, t } = useLanguage();

  // Scroll in-view trigger with replayability when leaving and returning
  const isInView = useInView(sectionRef, {
    amount: 0.15,
    once: false,
  });

  const currentCase = CASE_STUDIES[currentIndex];

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? CASE_STUDIES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === CASE_STUDIES.length - 1 ? 0 : prev + 1));
  };

  const handleSelect = (idx: number) => {
    if (idx === currentIndex) return;
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="relative py-12 lg:py-16 border-t border-white/5 bg-black text-[#faf6f0] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: shouldReduceMotion ? 0.2 : 0.8, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute top-1/4 left-1/3 h-[450px] w-[450px] rounded-full bg-gradient-to-br from-[#ff7865]/10 via-[#f472b6]/8 to-transparent blur-[150px]" />
        <div className="absolute bottom-10 right-10 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-[#38bdf8]/10 via-[#818cf8]/8 to-transparent blur-[150px]" />
        
        {/* Subtle coordinate dot grid */}
        <div 
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.45, delay: shouldReduceMotion ? 0 : 0.05 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f6c177]/35 bg-[#f6c177]/10 px-3.5 py-0.5 text-xs font-semibold text-[#f6c177] shadow-md backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-[#ff8a7a]" />
              <span>{t('testimonials.badge')}</span>
              <span className="text-xs">✦</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.55, delay: shouldReduceMotion ? 0 : 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3.5 font-heading text-2xl font-extrabold tracking-tight text-[#faf6f0] sm:text-4xl lg:text-5xl leading-[1.12]"
          >
            {t('testimonials.titlePrefix')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7865] via-[#f472b6] to-[#f6c177]">
              {t('testimonials.titleHighlight')}
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.5, delay: shouldReduceMotion ? 0 : 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 text-sm sm:text-base text-white/75 leading-relaxed font-normal"
          >
            {t('testimonials.subtitle')}
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* MAIN SHOWCASE / SLIDER CARD: Compact layout & heights                    */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25, scale: shouldReduceMotion ? 1 : 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: shouldReduceMotion ? 0 : 25, scale: shouldReduceMotion ? 1 : 0.98 }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.65, delay: shouldReduceMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 overflow-hidden rounded-[2rem] border border-white/12 bg-gradient-to-br from-[#181324] via-[#14101e] to-[#100d18] p-5 sm:p-7 shadow-2xl backdrop-blur-xl"
        >
          {/* Animated Slider Content with AnimatePresence (Compact min-height: 340-380px) */}
          <div className="relative min-h-[340px] sm:min-h-[360px] lg:min-h-[350px] flex items-center">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentCase.id}
                initial={{ 
                  opacity: 0, 
                  x: shouldReduceMotion ? 0 : (direction > 0 ? 16 : -16) 
                }}
                animate={{ 
                  opacity: 1, 
                  x: 0 
                }}
                exit={{ 
                  opacity: 0, 
                  x: shouldReduceMotion ? 0 : (direction > 0 ? -16 : 16) 
                }}
                transition={{ 
                  duration: shouldReduceMotion ? 0.15 : 0.4, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="w-full grid items-center gap-6 lg:grid-cols-12 lg:gap-8"
              >
                
                {/* LADO IZQUIERDO — ARTE (50–55% del showcase) */}
                <div className="lg:col-span-6 xl:col-span-7 relative flex flex-col justify-center">
                  <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-[#0e0b16] shadow-2xl">
                    
                    {/* Glowing back-accent */}
                    <div 
                      className="pointer-events-none absolute -inset-1 opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-40"
                      style={{ background: currentCase.accentColor }}
                    />

                    {/* Main Project Art Image */}
                    <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#161222]">
                      <img
                        src={currentCase.image}
                        alt={currentCase.imageAlt}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                      />
                      
                      {/* Vignette gradients */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
                    </div>

                    {/* Top Project Label Pill */}
                    <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 flex items-center gap-2 rounded-full border border-white/20 bg-black/75 px-3 py-1 text-xs font-bold text-white backdrop-blur-md shadow-md">
                      <Gamepad2 className="h-3 w-3" style={{ color: currentCase.accentColor }} />
                      <span className="font-heading tracking-wide text-[10px] sm:text-xs">
                        {currentCase.game}
                      </span>
                    </div>

                    {/* Top Right Milestone Badge */}
                    <div className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 hidden sm:flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-2.5 py-0.5 text-[10px] font-mono text-white/80 backdrop-blur-md">
                      <span>{currentCase.badge}</span>
                    </div>

                    {/* Bottom Project Asset Tag */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 flex items-center justify-between rounded-xl border border-white/12 bg-black/70 px-3 py-1.5 text-xs backdrop-blur-md">
                      <div className="flex items-center gap-2 truncate">
                        <Layers className="h-3 w-3 shrink-0" style={{ color: currentCase.accentColor }} />
                        <span className="font-mono text-[10px] sm:text-xs text-white/90 truncate">
                          {currentCase.projectTag}
                        </span>
                      </div>
                      <span className="shrink-0 font-mono text-[9px] font-bold uppercase tracking-wider text-white/50 pl-2">
                        {t('testimonials.assetShowcase')}
                      </span>
                    </div>

                  </div>
                </div>

                {/* LADO DERECHO — TESTIMONIO Y CLIENTE (45–50%) */}
                <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-between space-y-4 lg:pl-1">
                  
                  {/* Top Row: Small Client Avatar + Name + Role */}
                  <div className="flex items-center gap-3">
                    <div className={`relative h-11 w-11 sm:h-12 sm:w-12 shrink-0 overflow-hidden rounded-full border-2 ${currentCase.avatarBg} shadow-lg p-0.5`}>
                      {currentCase.avatarSvg}
                    </div>

                    <div className="overflow-hidden">
                      <h4 className="font-heading text-base font-bold text-white leading-tight truncate">
                        {currentCase.author}
                      </h4>
                      <p className="text-xs font-medium text-white/75 truncate" style={{ color: currentCase.accentColor }}>
                        {currentCase.role}
                      </p>
                      <p className="text-[10px] font-mono text-white/50 truncate">
                        {currentCase.studio}
                      </p>
                    </div>
                  </div>

                  {/* 5 Golden Stars */}
                  <div className="flex items-center gap-1 text-[#f6c177]">
                    {[...Array(currentCase.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote className="relative">
                    <p className="font-heading text-sm sm:text-base lg:text-lg font-normal leading-relaxed text-[#faf6f0]/95 italic">
                      “{language === 'en' ? currentCase.quoteEn : currentCase.quote}”
                    </p>
                  </blockquote>

                  {/* Footer Client Reference */}
                  <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div>
                      <span className="font-bold text-white text-[11px] sm:text-xs">{currentCase.author}</span>
                      <span className="text-white/40 mx-1.5">•</span>
                      <span className="text-white/65 text-[11px] sm:text-xs">{currentCase.role}</span>
                    </div>
                    <span className="font-mono text-[10px] text-white/50">
                      {currentCase.studio}
                    </span>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* ========================================================================= */}
          {/* SLIDER NAVIGATION: ← 01 / 04 → + Indicator Dots                          */}
          {/* ========================================================================= */}
          <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            
            {/* Quick Case Study Dots (● ○ ○ ○) */}
            <div className="flex items-center gap-1.5">
              {CASE_STUDIES.map((c, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={c.id}
                    onClick={() => handleSelect(idx)}
                    aria-label={`Ver testimonio de ${c.author}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'w-7 bg-gradient-to-r from-[#ff7865] to-[#f6c177]' 
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                );
              })}
            </div>

            {/* Stepper Navigation: ← → (Only arrows, no numbers) */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Testimonio anterior"
                className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white active:scale-95"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Siguiente testimonio"
                className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white active:scale-95"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
