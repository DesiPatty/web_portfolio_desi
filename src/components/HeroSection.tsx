import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Eye, Sparkles } from 'lucide-react';
import { IMAGES } from '../data/portfolioData';

interface HeroSectionProps {
  onWorkTogetherClick: () => void;
  onSeeWorkClick: () => void;
  onExploreClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onWorkTogetherClick,
  onSeeWorkClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section 
      id="home" 
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-black text-[#faf6f0]"
    >
      {/* Anime Landscape Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroBackground}
          alt="Paisaje de anime de colinas verdes y cielo azul"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center"
        />
        {/* Soft atmospheric and contrast gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20" />
        <div className="absolute -bottom-1 inset-x-0 h-36 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      {/* Ambient glow effects */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-[#ff8a7a]/15 blur-[160px] z-1" />
      <div className="pointer-events-none absolute top-1/2 right-10 h-[500px] w-[500px] rounded-full bg-[#f6c177]/15 blur-[150px] z-1" />

      {/* Main Grid Container: Left-aligned Text on Left, Interactive Character on Right */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-12">
          
          {/* Left Column: Left-aligned exact requested texts */}
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              {/* Exact Requested Headline */}
              <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-6xl xl:text-7xl leading-[1.08] drop-shadow-xl">
                Doy vida a las ideas que{' '}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#ff8a7a] via-[#f7a072] to-[#f6c177]">
                  tu juego necesita
                </span>
              </h1>

              {/* Exact Requested Description Headline */}
              <p className="mt-6 text-xl sm:text-2xl font-bold text-white/95 leading-snug drop-shadow-md">
                Arte 2D para videojuegos: personajes, mundos, UI, iconos, props y assets preparados para producción.
              </p>

              {/* Exact Requested Subtitle */}
              <p className="mt-4 text-base sm:text-lg text-white/75 leading-relaxed font-normal">
                - Te ayudo a desarrollar el arte de tu juego, desde personajes y escenarios hasta UI y assets.
              </p>

              {/* Action Buttons Aligned to the Left */}
              <div className="mt-10 flex flex-wrap items-center justify-start gap-4">
                <button
                  onClick={onWorkTogetherClick}
                  className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#ff8a7a] via-[#f47c7c] to-[#f7a072] px-8 py-4 text-base font-bold text-[#13111a] shadow-xl shadow-[#ff8a7a]/25 transition-all hover:scale-105 hover:brightness-110 active:scale-95"
                >
                  <span>Trabajemos juntos</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={onSeeWorkClick}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-[#faf6f0] backdrop-blur-md transition-all hover:border-[#ff8a7a]/60 hover:bg-white/10 hover:scale-102"
                >
                  <Eye className="h-5 w-5 text-[#ff8a7a]" />
                  <span>Ver mi trabajo</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Character that moves on mouse hover */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative cursor-pointer select-none"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Backlight glow halo behind character */}
              <div className="absolute inset-0 -m-6 rounded-full bg-gradient-to-tr from-[#ff8a7a]/25 via-[#f6c177]/20 to-transparent blur-3xl" />
              
              {/* Floating Sparkle Stars */}
              <motion.div 
                animate={{ 
                  scale: isHovered ? [1, 1.4, 1] : [1, 1.15, 1],
                  rotate: [0, 90, 180]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -left-4 text-[#ff8a7a] pointer-events-none"
              >
                <Sparkles className="w-8 h-8" />
              </motion.div>

              <motion.div 
                animate={{ 
                  scale: isHovered ? [1, 1.5, 1] : [1, 1.2, 1],
                  rotate: [180, 90, 0]
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/3 -right-6 text-[#f6c177] pointer-events-none"
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>

              {/* The Character Image with Hover Movement */}
              <motion.div
                animate={{
                  y: isHovered ? [-8, -22, -12, -20] : [0, -14, 0],
                  rotate: isHovered ? [-4, 5, -3, 4, 0] : [0, 2, 0, -2, 0],
                }}
                whileHover={{
                  scale: 1.08,
                  transition: { type: 'spring', stiffness: 300, damping: 12 }
                }}
                whileTap={{ scale: 0.96 }}
                transition={{
                  y: {
                    duration: isHovered ? 1.2 : 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                  rotate: {
                    duration: isHovered ? 0.8 : 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
                className="relative z-10 flex items-center justify-center max-w-[340px] sm:max-w-[420px] lg:max-w-[460px]"
              >
                <img
                  src={IMAGES.heroCharacter}
                  alt="DesiPatty — Personaje Creativo"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(255,138,122,0.35)] transition-all duration-300 filter select-none"
                  draggable={false}
                />
              </motion.div>

              {/* Interactive tooltip pill below character */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/80 px-3.5 py-1 text-[11px] font-medium text-white/60 backdrop-blur-md whitespace-nowrap shadow-lg"
              >
                <span className="text-[#ff8a7a]">✦</span> {isHovered ? '¡Lista para crear!' : '¡Pasa el mouse sobre mí!'}
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
