import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight
} from 'lucide-react';
import { PIPELINE_STEPS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

// -------------------------------------------------------------
// Petit-Planet inspired Illustrated Vignettes of Desi Game Artist
// -------------------------------------------------------------

// Station 01: Me cuentas (Briefing, listening, reviewing references)
const IllustrationBrief: React.FC = () => (
  <div className="relative w-full h-36 sm:h-40 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#1e152e] to-[#140f21] border border-[#ff7865]/20 p-2.5">
    {/* Ambient radial glow */}
    <div className="absolute inset-0 bg-radial from-[#ff7865]/15 via-transparent to-transparent pointer-events-none" />

    <svg viewBox="0 0 240 160" className="w-full h-full max-h-40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background workbench glow */}
      <ellipse cx="120" cy="142" rx="90" ry="14" fill="#ff7865" fillOpacity="0.12" />

      {/* Desk and laptop */}
      <rect x="55" y="112" width="130" height="7" rx="3.5" fill="#2d2244" stroke="#ff7865" strokeWidth="1.5" strokeOpacity="0.4" />
      <path d="M78 112L85 82H145L152 112H78Z" fill="#1b142c" stroke="#6366f1" strokeWidth="1.5" strokeOpacity="0.5" />
      <rect x="88" y="85" width="54" height="24" rx="2" fill="#241b3a" />
      {/* Screen moodboard lines */}
      <rect x="91" y="88" width="14" height="9" rx="1.5" fill="#ff7865" fillOpacity="0.7" />
      <rect x="108" y="88" width="14" height="9" rx="1.5" fill="#38bdf8" fillOpacity="0.7" />
      <rect x="125" y="88" width="14" height="9" rx="1.5" fill="#f6c177" fillOpacity="0.7" />
      <rect x="91" y="100" width="48" height="5" rx="1" fill="#ffffff" fillOpacity="0.25" />

      {/* Desi Character behind workstation */}
      {/* Body / Green Sweater */}
      <path d="M98 120C98 105 106 97 120 97C134 97 142 105 142 120H98Z" fill="#22c55e" />
      <path d="M112 97C114 102 126 102 128 97" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
      {/* Neck */}
      <rect x="115" y="88" width="10" height="10" rx="4" fill="#fbd5b5" />
      {/* Headphones around neck */}
      <path d="M107 90C107 96 133 96 133 90" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
      <rect x="104" y="86" width="6" height="8" rx="3" fill="#818cf8" />
      <rect x="130" y="86" width="6" height="8" rx="3" fill="#818cf8" />

      {/* Head & Face */}
      <ellipse cx="120" cy="74" rx="15" ry="16" fill="#fbd5b5" />
      
      {/* Voluminous Curly Dark Hair */}
      <circle cx="107" cy="62" r="10" fill="#1c1626" />
      <circle cx="120" cy="56" r="11" fill="#1c1626" />
      <circle cx="133" cy="62" r="10" fill="#1c1626" />
      <circle cx="102" cy="74" r="10" fill="#1c1626" />
      <circle cx="138" cy="74" r="10" fill="#1c1626" />
      <circle cx="104" cy="85" r="8" fill="#1c1626" />
      <circle cx="136" cy="85" r="8" fill="#1c1626" />
      {/* Hair curls highlights */}
      <path d="M109 59Q114 55 119 57" stroke="#4c3a63" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M125 56Q130 54 134 58" stroke="#4c3a63" strokeWidth="1.5" strokeLinecap="round" />

      {/* Round Glasses */}
      <circle cx="114" cy="75" r="5" stroke="#f6c177" strokeWidth="1.5" fill="#ffffff" fillOpacity="0.15" />
      <circle cx="126" cy="75" r="5" stroke="#f6c177" strokeWidth="1.5" fill="#ffffff" fillOpacity="0.15" />
      <path d="M119 75H121" stroke="#f6c177" strokeWidth="1.5" />
      {/* Friendly Eyes and Smile */}
      <circle cx="114" cy="75" r="1.5" fill="#1e1828" />
      <circle cx="126" cy="75" r="1.5" fill="#1e1828" />
      <path d="M118 82Q120 85 122 82" stroke="#e06c75" strokeWidth="1.5" strokeLinecap="round" />
      {/* Cute blush cheeks */}
      <circle cx="108" cy="78" r="2.5" fill="#ff7865" fillOpacity="0.4" />
      <circle cx="132" cy="78" r="2.5" fill="#ff7865" fillOpacity="0.4" />

      {/* Floating Chat / Briefing Bubble */}
      <g className="animate-bounce" style={{ animationDuration: '3s' }}>
        <rect x="22" y="32" width="68" height="30" rx="8" fill="#2d1738" stroke="#ff7865" strokeWidth="1.5" />
        <path d="M68 62L62 70L58 62H68Z" fill="#2d1738" stroke="#ff7865" strokeWidth="1.5" />
        <text x="30" y="46" fill="#ff8a7a" fontSize="8" fontWeight="bold" fontFamily="monospace">✦ BRIEF</text>
        <circle cx="34" cy="54" r="2" fill="#f6c177" />
        <circle cx="42" cy="54" r="2" fill="#f6c177" />
        <circle cx="50" cy="54" r="2" fill="#f6c177" />
        <text x="56" y="56" fill="#ffffff" fillOpacity="0.8" fontSize="7" fontFamily="sans-serif">Idea</text>
      </g>

      {/* Floating Reference Note right */}
      <g className="animate-pulse" style={{ animationDuration: '4s' }}>
        <rect x="160" y="38" width="55" height="34" rx="6" fill="#1b2438" stroke="#38bdf8" strokeWidth="1.5" />
        <path d="M165 46H205" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.7" />
        <path d="M165 53H195" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4" />
        <path d="M165 60H188" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4" />
        <circle cx="206" cy="41" r="2.5" fill="#ff7865" />
      </g>

      {/* Coffee Mug on desk */}
      <rect x="62" y="103" width="9" height="9" rx="2" fill="#f6c177" />
      <path d="M71 105Q74 107 71 109" stroke="#f6c177" strokeWidth="1.5" fill="none" />
      {/* Steam */}
      <path d="M65 99Q64 96 66 94" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1" strokeLinecap="round" />
      <path d="M68 100Q69 97 68 95" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1" strokeLinecap="round" />

      {/* Sparkles */}
      <path d="M152 28L153.5 32L157.5 33.5L153.5 35L152 39L150.5 35L146.5 33.5L150.5 32L152 28Z" fill="#f6c177" />
      <path d="M30 92L31 95L34 96L31 97L30 100L29 97L26 96L29 95L30 92Z" fill="#ff7865" />
    </svg>
  </div>
);

// Station 02: Definimos (Organizing references, scope, roadmap)
const IllustrationDefine: React.FC = () => (
  <div className="relative w-full h-36 sm:h-40 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#181a36] to-[#101326] border border-[#818cf8]/20 p-2.5">
    <div className="absolute inset-0 bg-radial from-[#818cf8]/15 via-transparent to-transparent pointer-events-none" />

    <svg viewBox="0 0 240 160" className="w-full h-full max-h-40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="120" cy="142" rx="90" ry="14" fill="#818cf8" fillOpacity="0.12" />

      {/* Production Planning Pinboard / Canvas */}
      <rect x="36" y="24" width="168" height="98" rx="14" fill="#1b1a38" stroke="#818cf8" strokeWidth="1.5" strokeOpacity="0.4" />
      
      {/* Connecting String / Journey Lines on Pinboard */}
      <path d="M68 56C85 45 110 52 120 70C130 88 152 75 168 62" stroke="#ff7865" strokeWidth="2" strokeDasharray="3 3" />

      {/* Card 1: Character Scope */}
      <rect x="48" y="40" width="38" height="32" rx="6" fill="#28224d" stroke="#ff7865" strokeWidth="1.5" />
      <circle cx="67" cy="52" r="5" fill="#f6c177" fillOpacity="0.8" />
      <path d="M61 63C61 59 73 59 73 63" fill="#ff7865" />
      <rect x="52" y="65" width="30" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.4" />

      {/* Card 2: Environment / Biome Scope */}
      <rect x="102" y="60" width="38" height="32" rx="6" fill="#1b2e38" stroke="#34d399" strokeWidth="1.5" />
      <path d="M106 82L113 71L121 82" fill="#34d399" fillOpacity="0.6" />
      <path d="M118 82L125 74L134 82" fill="#22c55e" fillOpacity="0.8" />
      <rect x="106" y="85" width="30" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.4" />

      {/* Card 3: UI & HUD Scope */}
      <rect x="150" y="44" width="38" height="32" rx="6" fill="#382136" stroke="#f472b6" strokeWidth="1.5" />
      <rect x="156" y="50" width="10" height="10" rx="2" fill="#f472b6" fillOpacity="0.7" />
      <rect x="169" y="50" width="13" height="4" rx="1" fill="#f6c177" />
      <rect x="169" y="56" width="13" height="4" rx="1" fill="#38bdf8" />
      <rect x="154" y="69" width="30" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.4" />

      {/* Pin tags */}
      <circle cx="67" cy="40" r="3" fill="#ff7865" />
      <circle cx="121" cy="60" r="3" fill="#34d399" />
      <circle cx="169" cy="44" r="3" fill="#f472b6" />

      {/* Desi reviewing roadmap below */}
      <g transform="translate(180, 75) scale(0.6)">
        <path d="M98 120C98 105 106 97 120 97C134 97 142 105 142 120H98Z" fill="#22c55e" />
        <rect x="115" y="88" width="10" height="10" rx="4" fill="#fbd5b5" />
        <ellipse cx="120" cy="74" rx="15" ry="16" fill="#fbd5b5" />
        <circle cx="107" cy="62" r="10" fill="#1c1626" />
        <circle cx="120" cy="56" r="11" fill="#1c1626" />
        <circle cx="133" cy="62" r="10" fill="#1c1626" />
        <circle cx="102" cy="74" r="10" fill="#1c1626" />
        <circle cx="138" cy="74" r="10" fill="#1c1626" />
        <circle cx="114" cy="75" r="5" stroke="#f6c177" strokeWidth="1.5" fill="#ffffff" fillOpacity="0.15" />
        <circle cx="126" cy="75" r="5" stroke="#f6c177" strokeWidth="1.5" fill="#ffffff" fillOpacity="0.15" />
        <circle cx="114" cy="75" r="1.5" fill="#1e1828" />
        <circle cx="126" cy="75" r="1.5" fill="#1e1828" />
      </g>

      {/* Color Palette Swatches floating at bottom */}
      <rect x="75" y="126" width="90" height="20" rx="10" fill="#161226" stroke="#ffffff" strokeOpacity="0.15" />
      <circle cx="88" cy="136" r="5" fill="#ff7865" />
      <circle cx="104" cy="136" r="5" fill="#f6c177" />
      <circle cx="120" cy="136" r="5" fill="#38bdf8" />
      <circle cx="136" cy="136" r="5" fill="#34d399" />
      <circle cx="152" cy="136" r="5" fill="#a855f7" />

      {/* Checkmark Tag */}
      <g className="animate-bounce" style={{ animationDuration: '3.5s' }}>
        <rect x="42" y="102" width="50" height="18" rx="6" fill="#064e3b" stroke="#34d399" strokeWidth="1" />
        <path d="M49 111L53 115L61 107" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="64" y="114" fill="#34d399" fontSize="7" fontWeight="bold" fontFamily="monospace">ALCANCE</text>
      </g>
    </svg>
  </div>
);

// Station 03: Creo (Drawing with stylus, art coming to life from sketch)
const IllustrationCreate: React.FC = () => (
  <div className="relative w-full h-36 sm:h-40 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#2b1828] to-[#190e1e] border border-[#f472b6]/20 p-2.5">
    <div className="absolute inset-0 bg-radial from-[#f472b6]/15 via-transparent to-transparent pointer-events-none" />

    <svg viewBox="0 0 240 160" className="w-full h-full max-h-40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="120" cy="142" rx="90" ry="14" fill="#f472b6" fillOpacity="0.12" />

      {/* Digital Drawing Tablet */}
      <rect x="52" y="45" width="136" height="88" rx="12" fill="#1b1226" stroke="#f472b6" strokeWidth="1.5" strokeOpacity="0.5" />
      <rect x="62" y="53" width="116" height="72" rx="6" fill="#231733" />

      {/* Sketch turning into full rendered character on canvas */}
      {/* Left side: rough sketch lines (pencil) */}
      <g stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2">
        <circle cx="95" cy="80" r="14" />
        <path d="M85 88L80 106L110 106L105 88" />
        <path d="M90 74Q95 72 100 74" />
      </g>
      <text x="70" y="66" fill="#ffffff" fillOpacity="0.3" fontSize="7" fontFamily="monospace">BOCETO ➔</text>

      {/* Magic Transformation Ray in center */}
      <path d="M116 55L116 122" stroke="#f6c177" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.8" />

      {/* Right side: fully colored vibrant cute game sprite! */}
      <g>
        {/* Glow */}
        <circle cx="140" cy="85" r="18" fill="#f472b6" fillOpacity="0.2" />
        {/* Cute Slime / Creature Sprite */}
        <path d="M128 92C128 78 133 72 142 72C151 72 156 78 156 92C156 99 150 103 142 103C134 103 128 99 128 92Z" fill="#ff7865" />
        {/* Cute eyes & shine */}
        <ellipse cx="137" cy="84" rx="2" ry="3" fill="#ffffff" />
        <ellipse cx="147" cy="84" rx="2" ry="3" fill="#ffffff" />
        <circle cx="137.5" cy="84" r="1.2" fill="#1e122b" />
        <circle cx="147.5" cy="84" r="1.2" fill="#1e122b" />
        <path d="M140 90Q142 93 144 90" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
        {/* Little sprout leaf atop head */}
        <path d="M142 72Q146 64 150 67Q146 72 142 72Z" fill="#34d399" />
      </g>
      <text x="130" y="66" fill="#34d399" fontSize="7" fontWeight="bold" fontFamily="monospace">ARTE FINAL</text>

      {/* Stylus in hand creating sparkles */}
      <g transform="translate(10, 0)">
        <path d="M152 118L132 94" stroke="#f6c177" strokeWidth="3" strokeLinecap="round" />
        <path d="M132 94L128 91L134 96Z" fill="#ffffff" />
        {/* Radiating sparkles from tip */}
        <path d="M127 88L128.5 83L130 88L135 89.5L130 91L128.5 96L127 91L122 89.5L127 88Z" fill="#f6c177" className="animate-spin" style={{ transformOrigin: '128.5px 89.5px', animationDuration: '6s' }} />
        <path d="M144 76L145 72L146 76L150 77L146 78L145 82L144 78L140 77L144 76Z" fill="#ff7865" />
      </g>

      {/* Desi watching happily on left edge */}
      <g transform="translate(18, 55) scale(0.65)">
        <path d="M98 120C98 105 106 97 120 97C134 97 142 105 142 120H98Z" fill="#22c55e" />
        <ellipse cx="120" cy="74" rx="15" ry="16" fill="#fbd5b5" />
        <circle cx="107" cy="62" r="10" fill="#1c1626" />
        <circle cx="120" cy="56" r="11" fill="#1c1626" />
        <circle cx="133" cy="62" r="10" fill="#1c1626" />
        <circle cx="102" cy="74" r="10" fill="#1c1626" />
        <circle cx="138" cy="74" r="10" fill="#1c1626" />
        <circle cx="114" cy="75" r="5" stroke="#f6c177" strokeWidth="1.5" fill="#ffffff" fillOpacity="0.15" />
        <circle cx="126" cy="75" r="5" stroke="#f6c177" strokeWidth="1.5" fill="#ffffff" fillOpacity="0.15" />
        <path d="M118 82Q120 86 122 82" stroke="#e06c75" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Layers UI Tag */}
      <g className="animate-pulse" style={{ animationDuration: '3s' }}>
        <rect x="180" y="88" width="46" height="24" rx="6" fill="#281734" stroke="#f6c177" strokeWidth="1" />
        <rect x="185" y="93" width="12" height="4" rx="1" fill="#f6c177" />
        <rect x="185" y="99" width="22" height="4" rx="1" fill="#ffffff" fillOpacity="0.4" />
        <rect x="185" y="105" width="16" height="3" rx="1" fill="#ffffff" fillOpacity="0.2" />
        <circle cx="218" cy="95" r="2.5" fill="#34d399" />
      </g>
    </svg>
  </div>
);

// Station 04: Entrego (Engine-ready assets, organized folder, checkmarks, export formats)
const IllustrationDeliver: React.FC = () => (
  <div className="relative w-full h-36 sm:h-40 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#132422] to-[#0c1817] border border-[#34d399]/20 p-2.5">
    <div className="absolute inset-0 bg-radial from-[#34d399]/15 via-transparent to-transparent pointer-events-none" />

    <svg viewBox="0 0 240 160" className="w-full h-full max-h-40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="120" cy="142" rx="90" ry="14" fill="#34d399" fillOpacity="0.12" />

      {/* Production Package / Treasure Box / Folder */}
      <g>
        {/* Back folder tab */}
        <path d="M78 52H110L118 60H166C171 60 175 64 175 69V118C175 123 171 127 166 127H78C73 127 69 123 69 118V61C69 56 73 52 78 52Z" fill="#0f3b33" stroke="#34d399" strokeWidth="1.5" />
        
        {/* Floating Asset Format Badges emerging from folder */}
        {/* Badge 1: PNG / Sprites */}
        <g className="animate-bounce" style={{ animationDuration: '4s' }}>
          <rect x="80" y="32" width="36" height="22" rx="5" fill="#1b2a3a" stroke="#38bdf8" strokeWidth="1.2" />
          <text x="86" y="44" fill="#38bdf8" fontSize="8" fontWeight="bold" fontFamily="monospace">.PNG</text>
          <text x="86" y="51" fill="#ffffff" fillOpacity="0.6" fontSize="6" fontFamily="sans-serif">Atlas</text>
        </g>

        {/* Badge 2: PSD Layers */}
        <g className="animate-bounce" style={{ animationDuration: '3.6s', animationDelay: '0.4s' }}>
          <rect x="122" y="26" width="36" height="22" rx="5" fill="#2d1c3a" stroke="#f6c177" strokeWidth="1.2" />
          <text x="128" y="38" fill="#f6c177" fontSize="8" fontWeight="bold" fontFamily="monospace">.PSD</text>
          <text x="128" y="45" fill="#ffffff" fillOpacity="0.6" fontSize="6" fontFamily="sans-serif">Capas</text>
        </g>

        {/* Badge 3: Spine / Rigs */}
        <g className="animate-bounce" style={{ animationDuration: '4.2s', animationDelay: '0.8s' }}>
          <rect x="164" y="36" width="38" height="22" rx="5" fill="#2d1526" stroke="#f472b6" strokeWidth="1.2" />
          <text x="170" y="48" fill="#f472b6" fontSize="8" fontWeight="bold" fontFamily="monospace">SPINE</text>
          <text x="170" y="55" fill="#ffffff" fillOpacity="0.6" fontSize="6" fontFamily="sans-serif">2D Rig</text>
        </g>

        {/* Front Folder flap */}
        <path d="M69 76H175V118C175 123 171 127 166 127H78C73 127 69 123 69 118V76Z" fill="#144d42" stroke="#34d399" strokeWidth="1.5" />
      </g>

      {/* Big Emerald Ready Seal */}
      <circle cx="122" cy="100" r="16" fill="#064e3b" stroke="#34d399" strokeWidth="2" />
      <path d="M114 100L120 106L131 94" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Engine compatibility badges */}
      <rect x="85" y="132" width="74" height="16" rx="8" fill="#132422" stroke="#34d399" strokeWidth="1" strokeOpacity="0.5" />
      <text x="94" y="143" fill="#34d399" fontSize="7" fontWeight="bold" fontFamily="monospace">UNITY · GODOT</text>

      {/* Desi with thumbs-up on left */}
      <g transform="translate(18, 56) scale(0.65)">
        <path d="M98 120C98 105 106 97 120 97C134 97 142 105 142 120H98Z" fill="#22c55e" />
        <ellipse cx="120" cy="74" rx="15" ry="16" fill="#fbd5b5" />
        <circle cx="107" cy="62" r="10" fill="#1c1626" />
        <circle cx="120" cy="56" r="11" fill="#1c1626" />
        <circle cx="133" cy="62" r="10" fill="#1c1626" />
        <circle cx="102" cy="74" r="10" fill="#1c1626" />
        <circle cx="138" cy="74" r="10" fill="#1c1626" />
        <circle cx="114" cy="75" r="5" stroke="#f6c177" strokeWidth="1.5" fill="#ffffff" fillOpacity="0.15" />
        <circle cx="126" cy="75" r="5" stroke="#f6c177" strokeWidth="1.5" fill="#ffffff" fillOpacity="0.15" />
        <path d="M117 83Q120 87 123 83" stroke="#e06c75" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Sparkles */}
      <path d="M60 40L61.5 44L65.5 45.5L61.5 47L60 51L58.5 47L54.5 45.5L58.5 44L60 40Z" fill="#34d399" />
      <path d="M190 75L191 78L194 79L191 80L190 83L189 80L186 79L189 78L190 75Z" fill="#f6c177" />
      <path d="M175 125L176.5 129L180.5 130.5L176.5 132L175 136L173.5 132L169.5 130.5L173.5 129L175 125Z" fill="#34d399" />
    </svg>
  </div>
);

const ILLUSTRATIONS = [
  <IllustrationBrief key="step1" />,
  <IllustrationDefine key="step2" />,
  <IllustrationCreate key="step3" />,
  <IllustrationDeliver key="step4" />,
];

export const ProcessAndAdvantages: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();

  // Scroll viewport trigger: animates on entering, resets on leaving, replays on re-entering
  const isInView = useInView(sectionRef, {
    amount: 0.15,
    once: false
  });

  return (
    <section 
      id="process-advantages" 
      ref={sectionRef}
      className="relative py-12 lg:py-16 border-t border-white/5 bg-black text-[#faf6f0] overflow-hidden"
    >
      {/* Cinematic ambient galaxy/world glows */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: shouldReduceMotion ? 0.2 : 0.8, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute top-10 left-1/4 h-[450px] w-[450px] rounded-full bg-gradient-to-br from-[#ff7865]/10 via-[#f472b6]/8 to-transparent blur-[150px]" />
        <div className="absolute top-1/2 right-10 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-[#3b82f6]/8 via-[#818cf8]/8 to-transparent blur-[150px]" />
        <div className="absolute bottom-10 left-10 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-[#34d399]/8 via-[#f6c177]/8 to-transparent blur-[150px]" />
        
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
        
        {/* Section Header: Badge + Title + Subtitle */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.45, delay: shouldReduceMotion ? 0 : 0.05 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ff7865]/35 bg-[#ff7865]/10 px-3.5 py-0.5 text-xs font-semibold tracking-wide text-[#ff8a7a] shadow-md backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-[#ff8a7a]" />
              <span>{t('process.badge')}</span>
              <span className="text-xs">✦</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h2 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.55, delay: shouldReduceMotion ? 0 : 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3.5 font-heading text-2xl font-extrabold tracking-tight text-[#faf6f0] sm:text-4xl lg:text-5xl leading-[1.12]"
          >
            {t('process.titlePrefix')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7865] via-[#f472b6] to-[#f6c177]">
              {t('process.titleHighlight')}
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.5, delay: shouldReduceMotion ? 0 : 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed font-normal"
          >
            {t('process.subtitle')}
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* PETIT PLANET INSPIRED EXPLORATION WORLD: 4 Production Journey Stations   */}
        {/* ========================================================================= */}
        <div className="relative mt-10 lg:mt-14">
          
          {/* Connecting SVG Road/Path on Desktop (01 -> 02 -> 03 -> 04) */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block overflow-visible z-0">
            <svg className="w-full h-full" viewBox="0 0 1100 950" fill="none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="journeyPathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff7865" stopOpacity="0.8" />
                  <stop offset="35%" stopColor="#818cf8" stopOpacity="0.8" />
                  <stop offset="70%" stopColor="#f472b6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#34d399" stopOpacity="0.8" />
                </linearGradient>

                <filter id="pathGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Petit Planet style winding orbit path with dashed trail */}
              <motion.path
                d="M 300 180 C 580 180, 520 280, 800 280 C 1000 280, 950 560, 550 560 C 250 560, 200 780, 800 780"
                stroke="url(#journeyPathGradient)"
                strokeWidth="3.5"
                strokeDasharray="8 8"
                filter="url(#pathGlow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.75 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 1.8, delay: shouldReduceMotion ? 0 : 0.25, ease: "easeInOut" }}
              />

              {/* Orbiting milestone nodes along the trail */}
              <circle cx="550" cy="230" r="4" fill="#f6c177" className="animate-ping" />
              <circle cx="850" cy="420" r="3.5" fill="#f472b6" />
              <circle cx="360" cy="670" r="4" fill="#38bdf8" />
            </svg>
          </div>

          {/* Central Atmospheric Floating Production World Accents */}
          <div className="pointer-events-none absolute inset-0 z-0 hidden lg:flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 0.4, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="relative flex items-center justify-center"
            >
              {/* Planetary rings aura */}
              <div className="h-96 w-96 rounded-full border border-white/10 [transform:rotateX(68deg)]" />
              <div className="absolute h-80 w-80 rounded-full border border-dashed border-[#ff7865]/20 [transform:rotateX(68deg)]" />
              {/* Core studio star */}
              <div className="absolute flex flex-col items-center justify-center text-center">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#1d162c] to-[#120d1e] border border-white/15 p-2 shadow-2xl flex items-center justify-center text-[#f6c177]">
                  <Sparkles className="h-6 w-6 fill-current animate-pulse" />
                </div>
                <span className="mt-2 font-mono text-[10px] font-bold text-white/40 tracking-widest uppercase">
                  GAME ART PIPELINE
                </span>
              </div>
            </motion.div>
          </div>

          {/* 4 STATIONS GRID / JOURNEY */}
          <div className="relative z-10 grid gap-8 md:gap-10 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-16">
            
            {PIPELINE_STEPS.map((step, idx) => {
              // Accent colors and tags for each station
              const ACCENT_STYLES = [
                {
                  badgeBorder: 'border-[#ff7865]/40 bg-[#7f1d1d]/30 text-[#ff7865]',
                  stationColor: '#ff7865',
                  cardBorder: 'hover:border-[#ff7865]/50',
                  glowShadow: 'hover:shadow-[#ff7865]/10',
                  direction: 'x: -30',
                },
                {
                  badgeBorder: 'border-[#818cf8]/40 bg-[#1e1b4b]/40 text-[#818cf8]',
                  stationColor: '#818cf8',
                  cardBorder: 'hover:border-[#818cf8]/50',
                  glowShadow: 'hover:shadow-[#818cf8]/10',
                  direction: 'x: 30',
                },
                {
                  badgeBorder: 'border-[#f472b6]/40 bg-[#701a75]/30 text-[#f472b6]',
                  stationColor: '#f472b6',
                  cardBorder: 'hover:border-[#f472b6]/50',
                  glowShadow: 'hover:shadow-[#f472b6]/10',
                  direction: 'x: -30',
                },
                {
                  badgeBorder: 'border-[#34d399]/40 bg-[#064e3b]/30 text-[#34d399]',
                  stationColor: '#34d399',
                  cardBorder: 'hover:border-[#34d399]/50',
                  glowShadow: 'hover:shadow-[#34d399]/10',
                  direction: 'x: 30',
                },
              ];

              const currentAccent = ACCENT_STYLES[idx];
              const isEven = idx % 2 === 1;

              return (
                <motion.div
                  key={step.step}
                  initial={{ 
                    opacity: 0, 
                    y: shouldReduceMotion ? 0 : 35,
                    x: shouldReduceMotion ? 0 : (isEven ? 25 : -25)
                  }}
                  animate={isInView 
                    ? { opacity: 1, y: 0, x: 0 } 
                    : { 
                        opacity: 0, 
                        y: shouldReduceMotion ? 0 : 35,
                        x: shouldReduceMotion ? 0 : (isEven ? 25 : -25)
                      }
                  }
                  transition={{ 
                    duration: shouldReduceMotion ? 0.1 : 0.75, 
                    delay: shouldReduceMotion ? 0 : (0.28 + idx * 0.2), 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className={`group relative flex flex-col rounded-3xl border border-white/12 bg-gradient-to-b from-[#181326]/95 to-[#110e1c]/95 p-5 sm:p-6 shadow-2xl backdrop-blur-xl transition-all duration-400 hover:-translate-y-1 ${currentAccent.cardBorder} ${currentAccent.glowShadow}`}
                >
                  {/* Petit-Planet Milestone Star Station Pin (Top left of card) */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                      {/* Milestone badge number */}
                      <div className={`flex h-8 w-8 items-center justify-center rounded-xl border ${currentAccent.badgeBorder} font-heading font-extrabold text-xs shadow-md`}>
                        0{step.step}
                      </div>
                      <div>
                        <span className="font-heading font-bold text-xs sm:text-sm tracking-wide text-white">
                          {step.tag.toUpperCase()}
                        </span>
                        <p className="text-[10px] font-mono text-white/50 -mt-0.5">
                          {t('about.cameraArtist')}
                        </p>
                      </div>
                    </div>

                    {/* Step Title pill */}
                    <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-semibold text-white/80">
                      <span style={{ color: currentAccent.stationColor }}>✦</span>
                      <span>{step.title}</span>
                    </div>
                  </div>

                  {/* CUSTOM ILLUSTRATED VIGNETTE */}
                  <div className="mt-4">
                    {ILLUSTRATIONS[idx]}
                  </div>

                  {/* Description */}
                  <div className="mt-4">
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-white leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-white/75 font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Specific Deliverables / Notes from PIPELINE_STEPS (100% preserved) */}
                  <div className="mt-4 pt-3 border-t border-white/10 text-xs">
                    {step.step === 1 && (
                      <div className="space-y-2">
                        <div>
                          <span className="text-[11px] font-bold text-[#ff7865]">{t('process.s1YouGive').split(':')[0]}:</span>
                          <p className="mt-1 text-[11px] leading-relaxed text-white/85 bg-white/5 p-2 rounded-xl border border-white/5 font-mono">
                            {step.youGive}
                          </p>
                        </div>
                        <div>
                          <span className="text-[11px] font-bold text-[#f6c177]">{t('process.s1IDo').split(':')[0]}:</span>
                          <p className="mt-1 text-[11px] leading-relaxed text-white/85 bg-white/5 p-2 rounded-xl border border-white/5 font-mono">
                            {step.iDo}
                          </p>
                        </div>
                      </div>
                    )}

                    {step.step === 2 && (
                      <div>
                        <span className="text-[11px] font-bold text-[#818cf8]">{t('process.s2Defined').split(':')[0]}:</span>
                        <p className="mt-1 text-[11px] leading-relaxed text-white/85 bg-white/5 p-2 rounded-xl border border-white/5 font-mono">
                          {step.definedItems}
                        </p>
                      </div>
                    )}

                    {step.step === 3 && (
                      <div>
                        <span className="text-[11px] font-bold text-[#f472b6]">{t('process.s3Title')}:</span>
                        <div className="mt-1 flex flex-wrap items-center gap-1.5 text-[11px] bg-white/5 p-2 rounded-xl border border-white/5 font-mono text-white/85">
                          {step.processFlow?.map((item, pIdx, arr) => (
                            <React.Fragment key={pIdx}>
                              <span className={pIdx === arr.length - 1 ? 'text-emerald-400 font-bold' : ''}>
                                {item}
                              </span>
                              {pIdx < arr.length - 1 && (
                                <span className="text-[#f472b6]">→</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    )}

                    {step.step === 4 && (
                      <div>
                        <span className="text-[11px] font-bold text-[#34d399]">{t('process.s4Title')}:</span>
                        <p className="mt-1 text-[11px] leading-relaxed text-white/85 bg-white/5 p-2 rounded-xl border border-white/5 font-mono">
                          {step.deliverablesList}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Corner star accent */}
                  <div className="absolute top-4 right-4 pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-xs" style={{ color: currentAccent.stationColor }}>
                    ✦
                  </div>
                </motion.div>
              );
            })}

          </div>

        </div>

        {/* Consultation Callout Banner at bottom (Compact: mt-10 lg:mt-12, p-5 sm:p-6) */}
        <motion.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          transition={{ duration: shouldReduceMotion ? 0.1 : 0.6, delay: shouldReduceMotion ? 0 : 0.8 }}
          className="mt-10 lg:mt-12 rounded-2xl border border-white/12 bg-gradient-to-r from-[#171324] via-[#1f1930] to-[#171324] p-5 sm:p-6 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-5 shadow-2xl"
        >
          <div className="max-w-2xl text-center sm:text-left">
            <h4 className="font-heading text-base sm:text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <span className="text-[#ff7865]">✦</span>
              <span>{t('process.consultationTitle')}</span>
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-white/75 leading-relaxed">
              {t('process.consultationText')}
            </p>
          </div>

          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff7865] to-[#f47c7c] px-5 py-2.5 text-xs sm:text-sm font-bold text-[#13111a] shadow-lg shadow-[#ff7865]/25 hover:brightness-110 active:scale-95 transition-all"
          >
            <span>{t('process.consultationBtn')}</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
