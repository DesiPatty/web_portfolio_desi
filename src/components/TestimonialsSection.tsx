import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'motion/react';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Gamepad2,
  ExternalLink
} from 'lucide-react';
import { IMAGES } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

// Official Steam vector icon
const SteamIcon: React.FC<{ className?: string }> = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.029 4.524 4.524s-2.03 4.524-4.524 4.524h-.105l-4.076 2.911c0 .052.005.105.005.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.155-3.331-2.693L.438 15.07C1.968 20.252 6.577 24 12.021 24c6.627 0 12-5.373 12-12s-5.373-12-12-12zM7.55 17.514c-.381.157-.8.244-1.239.244-1.229 0-2.264-.702-2.732-1.716l2.138.884c.489.202 1.05.034 1.348-.415.3-.448.243-1.042-.132-1.428l-2.18-.899c.355-.66.985-1.15 1.745-1.272l2.308 3.344c-.287.41-.716.79-1.256 1.258zm8.39-6.326c-1.253 0-2.269-1.016-2.269-2.269 0-1.252 1.016-2.268 2.269-2.268 1.252 0 2.268 1.016 2.268 2.268 0 1.253-1.016 2.269-2.268 2.269zm-1.89-2.269c0 1.044.846 1.89 1.89 1.89 1.043 0 1.89-.846 1.89-1.89 0-1.043-.847-1.89-1.89-1.89-1.044 0-1.89.847-1.89 1.89z" />
  </svg>
);

// -------------------------------------------------------------
// Real Client Testimonials (ONLY REAL PROJECTS & ACCURATE DATA)
// -------------------------------------------------------------
const CASE_STUDIES = [
  {
    id: 'aasalongino',
    indexStr: '01',
    author: 'Aasalongino',
    country: 'Estados Unidos 🇺🇸',
    countryEn: 'United States 🇺🇸',
    project: 'Brawl Mart',
    projectTitle: 'BrawlMart',
    projectSubtitle: 'Game Logo · Key Art · Steam Store Assets',
    projectSubtitleEn: 'Game Logo · Key Art · Steam Store Assets',
    actionUrl: 'https://store.steampowered.com/app/2816980/BrawlMart/',
    actionType: 'steam',
    actionLabel: 'Ver en Steam',
    actionLabelEn: 'View on Steam',
    image: IMAGES.promo,
    imageAlt: 'BrawlMart — Game Logo y Key Art en Steam',
    quote: '¡Una de las mejores experiencias como comprador que he tenido hasta la fecha!',
    quoteEn: "One of the best buyer experiences I've had to date!",
    rating: 5,
    accentColor: '#38bdf8',
    avatarBg: 'border-[#38bdf8]/50 shadow-[0_0_15px_rgba(56,189,248,0.25)]',
    avatarContent: (
      <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] font-heading text-base font-extrabold text-white">
        A
      </div>
    ),
  },
  {
    id: 'pedrogonzalezbl',
    indexStr: '02',
    author: 'pedrogonzalezbl',
    country: 'España 🇪🇸',
    countryEn: 'Spain 🇪🇸',
    project: 'Theme Hotel',
    projectTitle: 'Theme Hotel Tycoon',
    projectSubtitle: 'Mobile Game Art · Logo · Game Assets',
    projectSubtitleEn: 'Mobile Game Art · Logo · Game Assets',
    actionUrl: 'https://play.google.com/store/apps',
    actionType: 'google-play',
    actionLabel: 'Google Play',
    actionLabelEn: 'Google Play',
    image: IMAGES.environment,
    imageAlt: 'Arte y logotipo para Theme Hotel Tycoon',
    quote: 'Tercera vez que trabajo con Desiree. ¡Todo impecable!',
    quoteEn: 'Third time working with Desiree. Everything flawless!',
    rating: 5,
    accentColor: '#f6c177',
    avatarBg: 'border-[#f6c177]/50 shadow-[0_0_15px_rgba(246,193,119,0.25)]',
    avatarContent: (
      <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#78350f] to-[#d97706] font-heading text-base font-extrabold text-white">
        P
      </div>
    ),
  },
  {
    id: 'norsefxltd',
    indexStr: '03',
    author: 'norsefxltd',
    country: 'Reino Unido 🇬🇧',
    countryEn: 'United Kingdom 🇬🇧',
    project: 'Nuclear Kitty Games',
    projectTitle: 'Nuclear Kitty Games',
    projectSubtitle: 'Game Logos · UI · Promotional Art',
    projectSubtitleEn: 'Game Logos · UI · Promotional Art',
    actionUrl: 'https://nuclearkittygames.com/',
    actionType: 'website',
    actionLabel: 'Sitio oficial',
    actionLabelEn: 'Official Site',
    image: IMAGES.gameUi,
    imageAlt: 'Logos y assets de UI para Nuclear Kitty Games',
    quote: 'Genial volver a trabajar con ella otra vez.',
    quoteEn: 'Great to Work With her again',
    rating: 5,
    accentColor: '#34d399',
    avatarBg: 'border-[#34d399]/50 shadow-[0_0_15px_rgba(52,211,153,0.25)]',
    avatarContent: (
      <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#064e3b] to-[#059669] font-heading text-base font-extrabold text-white">
        N
      </div>
    ),
  },
  {
    id: 'tonynewsom76',
    indexStr: '04',
    author: 'tonynewsom76',
    country: 'Estados Unidos 🇺🇸',
    countryEn: 'United States 🇺🇸',
    project: 'Logo Design',
    projectTitle: 'BrawlMart',
    projectSubtitle: 'Diseño de Logo para Videojuegos',
    projectSubtitleEn: 'Video Game Logo Design',
    actionUrl: 'https://store.steampowered.com/app/2816980/BrawlMart/',
    actionType: 'steam',
    actionLabel: 'Ver en Steam',
    actionLabelEn: 'View on Steam',
    image: IMAGES.promo,
    imageAlt: 'Diseño de logo para BrawlMart',
    quote: '¡Experiencia fantástica! Entregó un logotipo limpio y creativo que superó mis expectativas. Este es mi segundo proyecto con ella, y una vez más fue profesional, receptiva y muy fácil de trabajar. ¡Muy recomendada!',
    quoteEn: 'Fantastic experience! She delivered a clean, creative logo that exceeded my expectations. This is my second project with her, and she was once again professional, responsive, and easy to work with. Highly recommend!',
    rating: 5,
    accentColor: '#ff7865',
    avatarBg: 'border-[#ec4899]/50 shadow-[0_0_15px_rgba(236,72,153,0.25)]',
    avatarContent: (
      <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#831843] to-[#be185d] font-heading text-base font-extrabold text-white">
        T
      </div>
    ),
  },
  {
    id: 'removloet',
    indexStr: '05',
    author: 'removloet',
    country: 'Países Bajos 🇳🇱',
    countryEn: 'Netherlands 🇳🇱',
    project: 'Unwanted Games',
    projectTitle: 'Unwanted Games',
    projectSubtitle: 'iGaming · Slot Art · UI · Game Assets',
    projectSubtitleEn: 'iGaming · Slot Art · UI · Game Assets',
    actionUrl: 'https://unwantedgames.com/',
    actionType: 'website',
    actionLabel: 'Sitio oficial',
    actionLabelEn: 'Official Site',
    image: IMAGES.assets,
    imageAlt: 'Arte y assets para Unwanted Games',
    quote: 'Me encantó trabajar con ella, la recomiendo totalmente :D',
    quoteEn: 'Loved working with her, can recommend her :D',
    rating: 5,
    accentColor: '#c084fc',
    avatarBg: 'border-[#c084fc]/50 shadow-[0_0_15px_rgba(192,132,252,0.25)]',
    avatarContent: (
      <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#581c87] to-[#9333ea] font-heading text-base font-extrabold text-white">
        R
      </div>
    ),
  },
  {
    id: 'richard',
    indexStr: '06',
    author: 'Richard',
    country: 'Estados Unidos 🇺🇸',
    countryEn: 'United States 🇺🇸',
    project: 'Game Art',
    projectTitle: 'Theme Hotel Tycoon',
    projectSubtitle: 'Mobile Game Art · Logo · Game Assets',
    projectSubtitleEn: 'Mobile Game Art · Logo · Game Assets',
    actionUrl: 'https://play.google.com/store/apps',
    actionType: 'google-play',
    actionLabel: 'Google Play',
    actionLabelEn: 'Google Play',
    image: IMAGES.environment,
    imageAlt: 'Ilustración y diseño visual para videojuegos',
    quote: 'Desi did a great job of taking my vague description and turning it into something really professional. I highly recommend.',
    quoteEn: 'Desi did a great job of taking my vague description and turning it into something really professional. I highly recommend.',
    rating: 5,
    accentColor: '#38bdf8',
    avatarBg: 'border-[#38bdf8]/50 shadow-[0_0_15px_rgba(56,189,248,0.25)]',
    avatarContent: (
      <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#0284c7] to-[#0ea5e9] font-heading text-base font-extrabold text-white">
        R
      </div>
    ),
  },
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();

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
    setCurrentIndex((prev) => (prev + 1) % CASE_STUDIES.length);
  };

  const handleSelect = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="relative py-10 lg:py-14 border-t border-white/5 bg-[#0a0711] text-[#faf6f0] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <motion.div 
        animate={isInView ? { opacity: 1 } : { opacity: 0.2 }}
        transition={{ duration: shouldReduceMotion ? 0.2 : 0.8, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute top-1/4 left-1/3 h-[450px] w-[450px] rounded-full bg-gradient-to-br from-[#ec4899]/10 via-[#a855f7]/8 to-transparent blur-[150px]" />
        <div className="absolute bottom-10 right-10 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-[#38bdf8]/10 via-[#6366f1]/8 to-transparent blur-[150px]" />
        
        {/* Subtle coordinate dot grid */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight"
          >
            {language === 'en' ? (
              <>
                What developers say who have{' '}
                <span className="text-[#ff5c8a]">worked</span>
                <br className="hidden sm:inline" />{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7865] via-[#f472b6] to-[#f6c177]">
                  with me
                </span>
              </>
            ) : (
              <>
                Lo que dicen quienes han{' '}
                <span className="text-[#ff5c8a]">trabajado</span>
                <br className="hidden sm:inline" />{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7865] via-[#f472b6] to-[#f6c177]">
                  conmigo
                </span>
              </>
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.45, delay: shouldReduceMotion ? 0 : 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 text-xs sm:text-sm text-white/75 font-normal max-w-xl mx-auto leading-relaxed"
          >
            {language === 'en' 
              ? 'An inside look from the teams and creators I have collaborated with.'
              : 'Una mirada desde dentro de los equipos con los que he colaborado.'}
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* MAIN CASE STUDY CARD: Compact Height & Sleek Streamlined Layout           */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20, scale: shouldReduceMotion ? 1 : 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: shouldReduceMotion ? 0 : 20, scale: shouldReduceMotion ? 1 : 0.98 }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.55, delay: shouldReduceMotion ? 0 : 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 overflow-hidden rounded-2xl sm:rounded-3xl border border-[#a855f7]/25 bg-gradient-to-br from-[#151122]/95 via-[#110e1c]/95 to-[#0b0814]/95 p-4 sm:p-5 lg:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_35px_rgba(168,85,247,0.1)] backdrop-blur-2xl"
        >
          {/* Animated Slider Content with AnimatePresence */}
          <div className="relative min-h-[290px] sm:min-h-[310px] lg:min-h-[320px] flex items-center">
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
                  duration: shouldReduceMotion ? 0.15 : 0.35, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="w-full grid items-center gap-5 lg:grid-cols-12 lg:gap-8"
              >
                
                {/* ================================================================= */}
                {/* LADO IZQUIERDO — PROYECTO (Imagen + Barra de Información limpia)  */}
                {/* ================================================================= */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-[#a855f7]/30 bg-[#0d0a16] shadow-xl transition-all duration-300">
                    
                    {/* Glowing backlight */}
                    <div 
                      className="pointer-events-none absolute -inset-1 opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-40"
                      style={{ background: currentCase.accentColor }}
                    />

                    {/* 1. Imagen Grande del Proyecto */}
                    <div className="relative aspect-[16/10] sm:aspect-[16/9.5] max-h-[220px] sm:max-h-[260px] w-full overflow-hidden bg-[#0c0914]">
                      <img
                        src={currentCase.image}
                        alt={currentCase.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                      />
                      
                      {/* Vignette gradients */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent pointer-events-none" />

                      {/* Floating Badge in Top-Left */}
                      <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/75 px-2.5 py-0.5 text-xs font-heading font-bold text-white shadow-md backdrop-blur-md">
                        <Gamepad2 className="h-3 w-3 text-[#ff7865]" />
                        <span className="tracking-wide text-[11px] sm:text-xs">{currentCase.projectTitle}</span>
                      </div>
                    </div>

                    {/* 2. Barra de Información del Proyecto + Botón de Acción */}
                    <div className="relative z-10 border-t border-white/10 bg-[#0c0816]/95 px-3.5 sm:px-4 py-2.5 sm:py-3 backdrop-blur-md">
                      <div className="flex items-center justify-between gap-3">
                        
                        {/* Izquierda: Nombre del proyecto + Categoría */}
                        <div className="flex items-center gap-2 font-heading text-xs sm:text-sm font-bold text-white min-w-0">
                          <Gamepad2 className="h-4 w-4 text-[#ff7865] shrink-0" />
                          <span className="truncate">
                            {currentCase.projectTitle}
                            <span className="mx-1.5 text-white/40 font-normal">•</span>
                            <span className="font-semibold text-white/90">
                              {language === 'en' ? currentCase.projectSubtitleEn : currentCase.projectSubtitle}
                            </span>
                          </span>
                        </div>

                        {/* Derecha: Botón oficial de Steam o enlace externo */}
                        <div className="shrink-0">
                          <a
                            href={currentCase.actionUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/steam inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#ffe8e0] via-[#ffdcd2] to-[#ffd0c2] px-3 sm:px-4 py-1.5 font-heading text-xs font-extrabold text-[#151122] shadow-sm transition-all duration-200 hover:scale-102 hover:brightness-105 active:scale-97 whitespace-nowrap"
                            title={language === 'en' ? currentCase.actionLabelEn : currentCase.actionLabel}
                          >
                            {currentCase.actionType === 'steam' ? (
                              <SteamIcon className="h-3.5 w-3.5 text-[#151122] transition-transform group-hover/steam:rotate-6" />
                            ) : (
                              <ExternalLink className="h-3.5 w-3.5 text-[#151122]" />
                            )}
                            <span>{language === 'en' ? currentCase.actionLabelEn : currentCase.actionLabel}</span>
                            <span className="text-[11px] transition-transform group-hover/steam:translate-x-0.5">↗</span>
                          </a>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>

                {/* ================================================================= */}
                {/* LADO DERECHO — TESTIMONIO DE LA PERSONA EN EL ORDEN EXACTO        */}
                {/* 1. Nombre                                                         */}
                {/* 2. País                                                           */}
                {/* 3. Proyecto (ej. Brawl Mart)                                      */}
                {/* 4. Número de estrellas                                            */}
                {/* 5. Testimonio                                                     */}
                {/* ================================================================= */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-3 sm:space-y-4 lg:pl-1">
                  
                  {/* Top: Avatar + 1. Nombre + 2. País + 3. Proyecto */}
                  <div className="flex items-center gap-3">
                    {/* Avatar or Initial Badge with Glow Ring */}
                    <div className={`relative h-11 w-11 sm:h-12 sm:w-12 shrink-0 overflow-hidden rounded-full border-2 ${currentCase.avatarBg} bg-[#231535] p-0.5 shadow-md`}>
                      {currentCase.avatarContent}
                    </div>

                    <div className="min-w-0 flex-1">
                      {/* 1. Nombre */}
                      <h3 className="font-heading text-base sm:text-lg font-extrabold text-white leading-tight truncate">
                        {currentCase.author}
                      </h3>
                      {/* 2. País */}
                      {currentCase.country && (
                        <p className="text-xs font-semibold text-[#f47c7c] truncate mt-0.5">
                          {language === 'en' ? currentCase.countryEn : currentCase.country}
                        </p>
                      )}
                      {/* 3. Proyecto */}
                      {currentCase.project && (
                        <p className="text-xs font-heading font-semibold text-white/80 truncate mt-0.5">
                          {currentCase.project}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 4. Número de estrellas */}
                  <div className="flex items-center gap-1 text-[#f6c177] pt-0.5">
                    {[...Array(currentCase.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-[#f6c177]" />
                    ))}
                  </div>

                  {/* 5. Testimonio */}
                  <blockquote className="relative my-0.5">
                    <p className="font-heading text-xs sm:text-sm lg:text-[15px] font-normal leading-relaxed text-[#faf6f0]/95 italic">
                      “{language === 'en' ? currentCase.quoteEn : currentCase.quote}”
                    </p>
                  </blockquote>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* ========================================================================= */}
          {/* SLIDER NAVIGATION: Paginator Dots (Left) + Arrow Buttons (Right)          */}
          {/* ========================================================================= */}
          <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between">
            
            {/* Quick Case Study Dots */}
            <div className="flex items-center gap-2">
              {CASE_STUDIES.map((c, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={c.id}
                    onClick={() => handleSelect(idx)}
                    aria-label={`Ver testimonio de ${c.author}`}
                    className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7865] ${
                      isActive 
                        ? 'w-7 bg-gradient-to-r from-[#ff7865] to-[#f472b6] shadow-sm' 
                        : 'w-2 bg-white/20 hover:bg-white/45'
                    }`}
                  />
                );
              })}
            </div>

            {/* Stepper Navigation: Circular Arrows [ < ] and [ > ] */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Testimonio anterior"
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:border-white/30 hover:bg-white/15 hover:text-white active:scale-92 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7865]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Siguiente testimonio"
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:border-white/30 hover:bg-white/15 hover:text-white active:scale-92 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7865]"
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
