import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { 
  Sparkles, 
  Gamepad2, 
  Layers, 
  CheckCircle2 
} from 'lucide-react';
import { IMAGES } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const AboutAssistant: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();
  
  // Triggers animation when section enters viewport, resets when completely leaving
  // and replays cleanly when re-entering without resetting on minor scrolls within.
  const isInView = useInView(sectionRef, { 
    amount: 0.15, 
    once: false 
  });

  const profilePillars = [
    {
      number: '01',
      title: t('about.p1Title'),
      description: t('about.p1Desc'),
      borderColor: 'border-[#ff7865]/30 hover:border-[#ff7865]/60',
      glowColor: 'group-hover:shadow-[#ff7865]/15',
      bgBadge: 'border-[#ff7865]/40 bg-[#7f1d1d]/40 text-[#ff7865]',
      icon: Sparkles,
    },
    {
      number: '02',
      title: t('about.p2Title'),
      description: t('about.p2Desc'),
      borderColor: 'border-[#818cf8]/30 hover:border-[#818cf8]/60',
      glowColor: 'group-hover:shadow-[#818cf8]/15',
      bgBadge: 'border-[#6366f1]/40 bg-[#1e1b4b]/50 text-[#818cf8]',
      icon: Gamepad2,
    },
    {
      number: '03',
      title: t('about.p3Title'),
      description: t('about.p3Desc'),
      borderColor: 'border-[#f6c177]/30 hover:border-[#f6c177]/60',
      glowColor: 'group-hover:shadow-[#f6c177]/15',
      bgBadge: 'border-[#f59e0b]/40 bg-[#78350f]/40 text-[#f6c177]',
      icon: Layers,
      isPipeline: true,
      subText: t('about.p3Sub'),
    },
    {
      number: '04',
      title: t('about.p4Title'),
      description: t('about.p4Desc'),
      borderColor: 'border-[#10b981]/30 hover:border-[#10b981]/60',
      glowColor: 'group-hover:shadow-[#10b981]/15',
      bgBadge: 'border-[#10b981]/40 bg-[#064e3b]/50 text-[#34d399]',
      icon: CheckCircle2,
    },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-10 lg:py-14 bg-black text-[#faf6f0] overflow-hidden border-t border-white/5"
    >
      {/* 1. Cinematic Background glow ambiance */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: shouldReduceMotion ? 0.2 : 0.8, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -top-32 right-1/4 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#ff7865]/12 to-[#f472b6]/8 blur-[150px]" />
        <div className="absolute top-1/2 left-0 h-[380px] w-[380px] rounded-full bg-gradient-to-tr from-[#3b82f6]/8 via-[#8b5cf6]/8 to-transparent blur-[150px]" />
        
        {/* Subtle game grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header: Badge + Main Title + Intro Paragraph + Highlighted Statement */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Top Pill / Badge */}
          <motion.div 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.45, delay: shouldReduceMotion ? 0 : 0.05 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f43f5e]/30 bg-[#221020]/90 px-3.5 py-0.5 text-xs font-semibold text-[#ff8a7a] shadow-md backdrop-blur-md">
              <span className="text-xs">🧶</span>
              <span>{t('about.badge')}</span>
              <span className="text-xs">✦</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.55, delay: shouldReduceMotion ? 0 : 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.14]"
          >
            {t('about.titlePrefix')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7865] via-[#f472b6] to-[#f6c177]">
              {t('about.titleHighlight')}
            </span>
          </motion.h2>

          {/* Subtitle text */}
          <motion.p 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.5, delay: shouldReduceMotion ? 0 : 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-white/80 leading-relaxed font-normal"
          >
            {t('about.bio')}
          </motion.p>

          {/* Highlighted Statement */}
          <motion.div 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10, scale: shouldReduceMotion ? 1 : 0.98 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: shouldReduceMotion ? 0 : 10, scale: shouldReduceMotion ? 1 : 0.98 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.5, delay: shouldReduceMotion ? 0 : 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 inline-flex items-center gap-2.5 rounded-2xl border border-[#f6c177]/35 bg-gradient-to-r from-[#211628]/95 via-[#291724]/90 to-[#1d1424]/95 px-4 py-2 sm:px-5 sm:py-2.5 text-[#f6c177] shadow-xl backdrop-blur-md"
          >
            <span className="text-xs text-[#ff8a7a] select-none">✦</span>
            <p className="font-heading text-xs sm:text-sm font-medium italic tracking-wide text-[#fdf4dc]">
              {t('about.quote')}
            </p>
            <span className="text-xs text-[#f6c177] select-none">✦</span>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* COMPACT STAGE: FOTO (42–45%) + INFORMACIÓN (50–53%) WITH TIGHT GAP       */}
        {/* ========================================================================= */}
        <div className="mt-8 sm:mt-10 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 xl:gap-9">
          
          {/* LEFT: Portrait Photograph (Cleaned: no floating mini-cards around it) */}
          <div className="w-full lg:w-[44%] xl:w-[43%] flex items-center justify-center lg:justify-end">
            
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px]">
              
              {/* Backglow behind portrait */}
              <div className="pointer-events-none absolute inset-0 -m-4 rounded-full bg-gradient-to-r from-[#ff7865]/15 via-[#f472b6]/10 to-[#f6c177]/10 blur-3xl opacity-70" />

              {/* MAIN PORTRAIT CARD */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25, scale: shouldReduceMotion ? 1 : 0.97 }}
                animate={isInView 
                  ? { opacity: 1, y: 0, scale: 1 } 
                  : { opacity: 0, y: shouldReduceMotion ? 0 : 25, scale: shouldReduceMotion ? 1 : 0.97 }
                }
                transition={{ duration: shouldReduceMotion ? 0.1 : 0.65, delay: shouldReduceMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="group relative z-10 w-full overflow-hidden rounded-[2rem] border-2 border-white/15 bg-gradient-to-b from-[#1c162b] to-[#120d1e] p-2.5 sm:p-3 shadow-2xl shadow-black/80 transition-all duration-500 hover:border-[#ff7865]/50"
              >
                {/* Top Camera & Project Badge */}
                <div className="mb-1.5 flex items-center justify-between px-2.5 text-[10px] sm:text-[11px] font-mono text-white/50">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ff7865] animate-ping" />
                    <span className="font-semibold text-white/70">{t('about.cameraTag')}</span>
                  </div>
                  <span className="text-[#f6c177]">{t('about.cameraArtist')}</span>
                </div>

                {/* Inner Image Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-[#1a1426] shadow-inner">
                  <img
                    src={IMAGES.aboutPortrait}
                    alt="DesiPatty en su taller de arte para videojuegos"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-102"
                  />
                  
                  {/* Cinematic corner frame marks */}
                  <div className="pointer-events-none absolute inset-2.5 border border-white/15 rounded-xl">
                    <div className="absolute top-0 left-0 h-2.5 w-2.5 border-t-2 border-l-2 border-[#ff7865]" />
                    <div className="absolute top-0 right-0 h-2.5 w-2.5 border-t-2 border-r-2 border-[#f6c177]" />
                    <div className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b-2 border-l-2 border-[#34d399]" />
                    <div className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b-2 border-r-2 border-[#818cf8]" />
                  </div>

                  {/* Soft bottom vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#100c19]/90 via-transparent to-transparent pointer-events-none" />

                  {/* Live status badge inside photo bottom */}
                  <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between rounded-xl border border-white/10 bg-black/75 px-3 py-1.5 text-xs backdrop-blur-md">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span className="font-medium text-white/90 text-[10px] sm:text-xs">{t('about.productionReady')}</span>
                    </div>
                    <span className="font-mono text-[9px] sm:text-[10px] text-white/60">Unity · Godot · Unreal</span>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>

          {/* RIGHT: Profile Pillars (2x2 Grid + Bottom Indie Commitment) */}
          <div className="w-full lg:w-[56%] xl:w-[57%] relative flex flex-col justify-center max-w-xl lg:max-w-none">
            
            {/* Cute Sketched Cat above cards */}
            <div className="hidden sm:block absolute -top-10 right-2 pointer-events-none select-none z-10">
              <div className="flex justify-end pr-5 gap-1 text-purple-400/80 text-[10px] font-mono font-bold">
                <span>\</span>
                <span>|</span>
                <span>/</span>
              </div>
              <svg className="w-24 h-14 text-purple-400/70" viewBox="0 0 140 80" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 40 60 C 35 40, 55 25, 80 25 C 105 25, 125 35, 130 55 C 132 68, 120 72, 95 72 C 65 72, 45 72, 40 60 Z" />
                <path d="M 60 27 L 55 10 L 72 22" />
                <path d="M 88 22 L 105 10 L 100 27" />
                <path d="M 68 38 Q 75 32 82 38" />
                <path d="M 92 38 Q 99 32 106 38" />
                <path d="M 87 43 L 87 46 M 83 48 Q 87 51 91 48" />
                <path d="M 62 44 L 46 41 M 62 48 L 44 50 M 63 52 L 48 57" />
                <path d="M 108 44 L 124 41 M 108 48 L 126 50 M 107 52 L 122 57" />
                <path d="M 65 62 C 65 68, 76 68, 76 62" />
                <path d="M 90 62 C 90 68, 101 68, 101 62" />
                <path d="M 130 58 C 138 58, 140 70, 128 74 C 118 76, 106 73, 100 72" />
              </svg>
            </div>

            {/* 2x2 Grid of Profile Pillars */}
            <div className="grid gap-3 sm:gap-3.5 sm:grid-cols-2">
              {profilePillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <motion.div
                    key={pillar.number}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
                    animate={isInView 
                      ? { opacity: 1, y: 0 } 
                      : { opacity: 0, y: shouldReduceMotion ? 0 : 18 }
                    }
                    transition={{ 
                      duration: shouldReduceMotion ? 0.1 : 0.45, 
                      delay: shouldReduceMotion ? 0 : (0.2 + idx * 0.07), 
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    className={`group relative rounded-2xl border ${pillar.borderColor} bg-[#141022]/90 p-4 sm:p-4.5 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19142a] ${pillar.glowColor}`}
                  >
                    {/* Top Row: Number + Icon */}
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-xs font-bold text-white/40 tracking-wider">
                        {pillar.number}
                      </span>
                      <div className={`flex h-8 w-8 items-center justify-center rounded-xl border ${pillar.bgBadge} shadow-md transition-transform duration-300 group-hover:scale-105`}>
                        <IconComponent className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-2">
                      <h3 className="font-heading text-lg sm:text-xl font-extrabold text-white tracking-tight">
                        {pillar.title}
                      </h3>
                      
                      {pillar.isPipeline ? (
                        <div className="mt-1">
                          <p className="text-xs text-[#f6c177] font-semibold leading-relaxed">
                            {pillar.description}
                          </p>
                          <p className="mt-1 text-[11px] text-white/60 leading-normal">
                            {pillar.subText}
                          </p>
                        </div>
                      ) : (
                        <p className="mt-1 text-xs text-white/75 leading-relaxed font-normal">
                          {pillar.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Note: Focus on Indie Teams */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={isInView 
                ? { opacity: 1, y: 0 } 
                : { opacity: 0, y: shouldReduceMotion ? 0 : 10 }
              }
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.45, delay: shouldReduceMotion ? 0 : 0.5 }}
              className="mt-3.5 rounded-2xl border border-white/10 bg-[#161224]/70 p-3 sm:p-3.5 backdrop-blur-sm"
            >
              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-lg bg-[#ff7865]/15 text-[#ff7865]">
                  <Gamepad2 className="h-3 w-3" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    {t('about.indieCommitmentTitle')}
                  </h4>
                  <p className="mt-0.5 text-[11px] sm:text-xs text-white/70 leading-relaxed">
                    {t('about.indieCommitmentText')}
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
