import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { 
  ArrowRight, 
  Eye, 
  Sparkles,
  Pause,
  Play
} from 'lucide-react';
import { IMAGES } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { SocialSidebar } from './SocialSidebar';

interface HeroSectionProps {
  onWorkTogetherClick: () => void;
  onSeeWorkClick: () => void;
  onExploreClick?: () => void;
  onOpenProject?: (projectId: string) => void;
}

// 5 Slides: 00 (Personal Intro) + 4 Real Projects: BrawlMart, Nuclear Kitty Games, Unwanted Games, Theme Hotel Tycoon
const HERO_SLIDES = [
  {
    id: '00',
    indexStr: '00',
    titleEs: 'Doy vida a las ideas que tu juego necesita',
    titleEn: 'Bringing to life the ideas your game needs',
    subtitleEs: 'Arte 2D para videojuegos: personajes, mundos, UI, iconos, props y assets preparados para producción.',
    subtitleEn: '2D Game Art: characters, worlds, UI, icons, props, and production-ready assets.',
    bgImage: IMAGES.heroBackground,
    accentColor: '#ff7865',
    isPersonalWorld: true,
  },
  {
    id: '01',
    projectId: 'brawlmart',
    indexStr: '01',
    titleEs: 'BrawlMart',
    titleEn: 'BrawlMart',
    subtitleEs: 'Game Logo · Key Art · Steam Store Assets (Red Basket Games · PlayWay S.A.)',
    subtitleEn: 'Game Logo · Key Art · Steam Store Assets (Red Basket Games · PlayWay S.A.)',
    bgImage: IMAGES.heroBackground,
    featuredArt: IMAGES.promo,
    artAlt: 'BrawlMart — Game Logo y Key Art',
    accentColor: '#ff7865',
    isPersonalWorld: false,
  },
  {
    id: '02',
    projectId: 'nuclear-kitty-games',
    indexStr: '02',
    titleEs: 'Nuclear Kitty Games',
    titleEn: 'Nuclear Kitty Games',
    subtitleEs: 'Colaboración con el estudio · Game Logos · UI · Promotional Art',
    subtitleEn: 'Studio Collaboration · Game Logos · UI · Promotional Art',
    bgImage: IMAGES.heroBackground,
    featuredArt: IMAGES.gameUi,
    artAlt: 'Nuclear Kitty Games — Logos de videojuegos, UI y material promocional',
    accentColor: '#38bdf8',
    isPersonalWorld: false,
  },
  {
    id: '03',
    projectId: 'unwanted-games',
    indexStr: '03',
    titleEs: 'Unwanted Games',
    titleEn: 'Unwanted Games',
    subtitleEs: 'Colaboración profesional · iGaming · Slot Art · UI · Game Assets',
    subtitleEn: 'Professional Collaboration · iGaming · Slot Art · UI · Game Assets',
    bgImage: IMAGES.heroBackground,
    featuredArt: IMAGES.assets,
    artAlt: 'Unwanted Games — Slot Game Art, UI y Game Assets',
    accentColor: '#f6c177',
    isPersonalWorld: false,
  },
  {
    id: '04',
    projectId: 'theme-hotel-tycoon',
    indexStr: '04',
    titleEs: 'Theme Hotel Tycoon',
    titleEn: 'Theme Hotel Tycoon',
    subtitleEs: 'Mobile Game Art · Logo · Game Assets',
    subtitleEn: 'Mobile Game Art · Logo · Game Assets',
    bgImage: IMAGES.environment,
    featuredArt: IMAGES.environment,
    artAlt: 'Theme Hotel Tycoon — Mobile Game Art y Diseño de Logo',
    accentColor: '#34d399',
    isPersonalWorld: false,
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onWorkTogetherClick,
  onSeeWorkClick,
  onOpenProject,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { language, t } = useLanguage();

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  // Auto-rotate every 7 seconds, pausable via button
  useEffect(() => {
    if (shouldReduceMotion || isAutoPlayPaused) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [currentSlideIndex, shouldReduceMotion, isAutoPlayPaused]);

  const handleSelectSlide = (idx: number) => {
    setCurrentSlideIndex(idx);
  };

  const handleProjectClick = () => {
    if (currentSlide.projectId && onOpenProject) {
      onOpenProject(currentSlide.projectId);
    } else {
      onSeeWorkClick();
    }
  };

  return (
    <section 
      id="home" 
      className="relative flex min-h-[calc(100vh-4rem)] min-h-[calc(100dvh-4rem)] w-full items-center overflow-hidden bg-black text-[#faf6f0]"
    >
      {/* Background layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.35, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src={currentSlide.bgImage}
              alt={currentSlide.titleEs}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Ambient atmospheric vignettes & contrast shaders */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/20" />
        <div className="absolute -bottom-1 inset-x-0 h-24 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      {/* Ambient lighting spots */}
      <div 
        className="pointer-events-none absolute -top-32 left-1/4 h-[400px] w-[400px] rounded-full blur-[140px] opacity-20 transition-all duration-700 z-1"
        style={{ backgroundColor: currentSlide.accentColor }}
      />
      <div className="pointer-events-none absolute top-1/2 right-10 h-[400px] w-[400px] rounded-full bg-[#f6c177]/15 blur-[130px] z-1" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-4 sm:px-6 lg:px-8 lg:pl-16 py-6 sm:py-8 lg:py-10">
        <div className="grid w-full items-center gap-8 lg:grid-cols-12 lg:gap-10">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: Clean Hero Typography & Streamlined Controls               */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 text-left">
            <div className="max-w-2xl">

              {/* Title & Subtitle with Smooth Crossfade Transition */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
                  transition={{ duration: shouldReduceMotion ? 0.1 : 0.3 }}
                >
                  {/* Headline */}
                  {currentSlide.isPersonalWorld ? (
                    <h1 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-5xl xl:text-6xl leading-[1.12] drop-shadow-xl">
                      {t('hero.headlinePrefix')}
                      <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#ff7865] via-[#f7a072] to-[#f6c177]">
                        {t('hero.headlineHighlight')}
                      </span>
                    </h1>
                  ) : (
                    <h1 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-5xl xl:text-6xl leading-[1.12] drop-shadow-xl">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/80">
                        {language === 'en' ? currentSlide.titleEn : currentSlide.titleEs}
                      </span>
                    </h1>
                  )}

                  {/* Subtitle */}
                  <p className="mt-3.5 text-base sm:text-xl font-heading font-bold text-white/95 leading-snug drop-shadow-md">
                    {language === 'en' ? currentSlide.subtitleEn : currentSlide.subtitleEs}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Action Buttons Aligned to the Left */}
              <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-start gap-3">
                <button
                  onClick={onWorkTogetherClick}
                  className="group relative inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#ff7865] via-[#f47c7c] to-[#f7a072] px-6 py-3 font-heading text-sm font-bold text-[#13111a] shadow-xl shadow-[#ff7865]/25 transition-all hover:scale-105 hover:brightness-110 active:scale-95"
                >
                  <span>{t('hero.workTogether')}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={currentSlide.isPersonalWorld ? onSeeWorkClick : handleProjectClick}
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-5 py-3 font-heading text-sm font-semibold text-[#faf6f0] backdrop-blur-md transition-all hover:border-[#ff7865]/60 hover:bg-white/10 hover:scale-102"
                >
                  <Eye className="h-4 w-4 text-[#ff7865]" />
                  <span>
                    {currentSlide.isPersonalWorld 
                      ? (language === 'en' ? 'View Projects' : 'Ver Proyectos')
                      : (language === 'en' ? 'Ver proyecto →' : 'Ver proyecto →')}
                  </span>
                </button>
              </div>

              {/* Clean Minimal Project Navigation Dots + Stop / Play Button */}
              <div className="mt-7 flex items-center gap-3">
                <div className="flex items-center gap-2">
                  {HERO_SLIDES.map((slide, idx) => {
                    const isActive = idx === currentSlideIndex;
                    return (
                      <button
                        key={slide.id}
                        onClick={() => handleSelectSlide(idx)}
                        aria-label={`Proyecto ${slide.indexStr}`}
                        className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7865] ${
                          isActive 
                            ? 'w-8 bg-gradient-to-r from-[#ff7865] to-[#f6c177] shadow-sm' 
                            : 'w-2.5 bg-white/25 hover:bg-white/55'
                        }`}
                      />
                    );
                  })}
                </div>

                {/* Pause / Play icon-only button */}
                <button
                  onClick={() => setIsAutoPlayPaused((prev) => !prev)}
                  aria-label={isAutoPlayPaused ? (language === 'en' ? 'Play' : 'Reanudar') : (language === 'en' ? 'Stop' : 'Detener')}
                  title={isAutoPlayPaused ? (language === 'en' ? 'Play' : 'Reanudar') : (language === 'en' ? 'Stop' : 'Detener')}
                  className={`flex h-6 w-6 items-center justify-center rounded-full border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7865] ${
                    isAutoPlayPaused
                      ? 'border-[#ff7865]/60 bg-[#ff7865]/15 text-[#ff8a7a]'
                      : 'border-white/15 bg-white/5 text-white/70 hover:border-white/30 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {isAutoPlayPaused ? (
                    <Play className="h-2.5 w-2.5 fill-current ml-0.5" />
                  ) : (
                    <Pause className="h-2.5 w-2.5 fill-current" />
                  )}
                </button>
              </div>

              {/* Mobile horizontal social row */}
              <div className="mt-6 lg:hidden">
                <SocialSidebar layout="horizontal" />
              </div>

            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: Natural In-World Artwork Showcase (NO Card / NO Box)        */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <AnimatePresence mode="wait">
              {currentSlide.isPersonalWorld ? (
                /* SLIDE 00: Artist Character Floating Naturally in Scene */
                <motion.div
                  key="personal-world"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="relative cursor-pointer select-none"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {/* Backlight glow halo behind character */}
                  <div className="absolute inset-0 -m-6 rounded-full bg-gradient-to-tr from-[#ff7865]/20 via-[#f6c177]/15 to-transparent blur-3xl" />
                  
                  {/* Floating Sparkle Stars */}
                  <motion.div 
                    animate={{ 
                      scale: isHovered ? [1, 1.3, 1] : [1, 1.1, 1],
                      rotate: [0, 90, 180]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-3 -left-3 text-[#ff7865] pointer-events-none"
                  >
                    <Sparkles className="w-7 h-7" />
                  </motion.div>

                  <motion.div 
                    animate={{ 
                      scale: isHovered ? [1, 1.4, 1] : [1, 1.15, 1],
                      rotate: [180, 90, 0]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    className="absolute top-1/3 -right-4 text-[#f6c177] pointer-events-none"
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>

                  {/* Character Image with Floating Movement */}
                  <motion.div
                    animate={shouldReduceMotion ? {} : {
                      y: isHovered ? [-6, -18, -10, -16] : [0, -10, 0],
                      rotate: isHovered ? [-3, 4, -2, 3, 0] : [0, 1.5, 0, -1.5, 0],
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { type: 'spring', stiffness: 300, damping: 12 }
                    }}
                    whileTap={{ scale: 0.96 }}
                    transition={{
                      y: {
                        duration: isHovered ? 1.2 : 3.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                      rotate: {
                        duration: isHovered ? 0.8 : 4.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }}
                    className="relative z-10 max-h-[360px] sm:max-h-[420px] lg:max-h-[470px] xl:max-h-[500px] w-auto drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] filter"
                  >
                    <img
                      src={IMAGES.heroCharacter}
                      alt="DesiPatty — Asistente de Arte 2D para Videojuegos"
                      referrerPolicy="no-referrer"
                      className="h-full w-auto max-h-[360px] sm:max-h-[420px] lg:max-h-[470px] xl:max-h-[500px] object-contain"
                    />
                  </motion.div>
                </motion.div>
              ) : (
                /* SLIDES 01, 02, 03, 04: Real Projects Artwork Element */
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
                  transition={{ duration: shouldReduceMotion ? 0.2 : 0.45, ease: "easeOut" }}
                  className="relative flex items-center justify-center cursor-pointer select-none"
                  onClick={handleProjectClick}
                >
                  {/* Soft atmospheric ambient backlight glow */}
                  <div 
                    className="pointer-events-none absolute inset-0 -m-8 rounded-full opacity-35 blur-3xl transition-all duration-700"
                    style={{ backgroundColor: currentSlide.accentColor }}
                  />

                  {/* Artwork seamlessly blended into the living world with organic feathered radial mask */}
                  <motion.div
                    animate={shouldReduceMotion ? {} : {
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    whileHover={{ scale: 1.02 }}
                    className="relative z-10 max-w-[460px] lg:max-w-[530px] xl:max-w-[580px] w-full"
                  >
                    <img
                      src={currentSlide.featuredArt}
                      alt={currentSlide.artAlt}
                      className="w-full h-auto max-h-[320px] sm:max-h-[380px] lg:max-h-[430px] xl:max-h-[460px] object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.7)]"
                      style={{
                        maskImage: 'radial-gradient(ellipse 90% 82% at 50% 50%, black 55%, transparent 100%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 90% 82% at 50% 50%, black 55%, transparent 100%)',
                      }}
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
