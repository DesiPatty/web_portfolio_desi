import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Eye, 
  Sparkles, 
  Layers, 
  Palette, 
  Check, 
  ExternalLink, 
  X, 
  Maximize2, 
  Gamepad2, 
  FileCode2, 
  Download,
  Info
} from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { PortfolioItem, Category } from '../types';

interface PortfolioSectionProps {
  selectedItem: PortfolioItem | null;
  setSelectedItem: (item: PortfolioItem | null) => void;
}

const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'ui', label: 'Game UI & HUD' },
  { id: 'characters', label: 'Characters' },
  { id: 'environments', label: 'Environments' },
  { id: 'assets', label: 'Item Sprites & Icons' },
  { id: 'promo', label: 'Steam & Promo Art' },
];

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  selectedItem,
  setSelectedItem,
}) => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="portfolio" className="relative py-20 lg:py-28 border-t border-white/10 bg-[#161320]">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff8a7a]/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ff8a7a]/30 bg-[#ff8a7a]/10 px-3.5 py-1 text-xs font-semibold text-[#ff8a7a]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Editorial Gallery</span>
            </div>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#faf6f0] sm:text-4xl lg:text-5xl">
              Selected 2D Game Artworks
            </h2>
            <p className="mt-3 text-base text-white/70 max-w-2xl">
              A curated collection of UI systems, character turnarounds, atmospheric environments, and marketing capsules built for indie games. Click any piece for full production specs.
            </p>
          </div>

          {/* Quick Stat Pill */}
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#1e1a2c] p-3 text-xs text-white/70">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
            <div>
              <p className="font-semibold text-white">Full Production-Ready Assets</p>
              <p className="text-[11px] text-white/50">Clean PSD layers • Spine JSON • 9-slice PNG</p>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-[#ff8a7a] text-[#13111a] shadow-lg shadow-[#ff8a7a]/25'
                    : 'bg-[#1e1a2c]/80 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Editorial Gallery Grid */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                onClick={() => setSelectedItem(item)}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#1c1828] cursor-pointer shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ff8a7a]/50 hover:shadow-2xl hover:shadow-[#ff8a7a]/15"
              >
                {/* Artwork Canvas Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#121018]">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Subtle vignette on card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1828] via-transparent to-black/20 opacity-80" />

                  {/* Top Tags */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="rounded-md border border-white/20 bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white/90 backdrop-blur-md">
                      {item.categoryLabel}
                    </span>
                    <span className="rounded-md border border-white/10 bg-[#1c1828]/80 px-2 py-0.5 font-mono text-[10px] text-[#f6c177] backdrop-blur-md">
                      {item.year}
                    </span>
                  </div>

                  {/* Hover Inspect Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-xl bg-[#ff8a7a] px-4 py-2 text-xs font-bold text-[#13111a] shadow-xl">
                      <Maximize2 className="h-4 w-4" />
                      <span>Inspect Production Specs</span>
                    </span>
                  </div>

                  {/* Bottom Palette Swatches Ribbon */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full border border-white/20 bg-black/60 px-2 py-1 backdrop-blur-md">
                    {item.colorPalette.slice(0, 4).map((color, idx) => (
                      <span
                        key={idx}
                        className="h-2.5 w-2.5 rounded-full border border-white/20"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                {/* Card Editorial Info */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between text-xs text-white/50 mb-1">
                    <span>{item.gameGenre}</span>
                    {item.client && <span className="font-medium text-[#f6c177]">for {item.client}</span>}
                  </div>

                  <h3 className="font-heading text-lg font-bold text-[#faf6f0] transition-colors group-hover:text-[#ff8a7a]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs text-white/70 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-white/5 px-2 py-0.5 text-[10px] font-medium text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer specs */}
                  <div className="mt-4 border-t border-white/10 pt-3 flex items-center justify-between text-[11px] text-white/50">
                    <span className="font-mono">{item.specs.pipelineStage}</span>
                    <span className="flex items-center gap-1 text-[#ff8a7a] font-semibold">
                      <span>View Breakdown</span>
                      <span>→</span>
                    </span>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox / Asset Production Specs Modal */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedItem(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/20 bg-[#181424] shadow-2xl"
              >
                {/* Modal Header Bar */}
                <div className="flex items-center justify-between border-b border-white/10 bg-[#13111a] px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="rounded-md border border-[#ff8a7a]/30 bg-[#ff8a7a]/10 px-2.5 py-0.5 text-xs font-semibold text-[#ff8a7a]">
                      {selectedItem.categoryLabel}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-[#faf6f0]">
                      {selectedItem.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => setSelectedItem(null)}
                    className="rounded-lg p-1.5 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="overflow-y-auto p-6 sm:p-8">
                  <div className="grid gap-8 lg:grid-cols-12">
                    
                    {/* Left: Full Artwork Preview */}
                    <div className="lg:col-span-7">
                      <div className="relative overflow-hidden rounded-xl border border-white/15 bg-[#121018] shadow-inner">
                        <img
                          src={selectedItem.image}
                          alt={selectedItem.title}
                          referrerPolicy="no-referrer"
                          className="w-full object-contain"
                        />

                        {/* Hand-drawn inspection note */}
                        <div className="absolute bottom-3 left-3 rounded-lg border border-[#f6c177]/40 bg-[#1a1724]/90 px-3 py-1.5 text-xs font-handwriting text-[#f6c177] shadow-md backdrop-blur-sm">
                          ✦ Production files include full layers & zero flattening
                        </div>
                      </div>

                      {/* Color Palette Swatches */}
                      <div className="mt-4 rounded-xl border border-white/10 bg-[#13111a] p-3.5">
                        <div className="flex items-center justify-between text-xs text-white/60 mb-2">
                          <span className="font-bold text-white/80">Harmonized Palette:</span>
                          <span className="font-mono text-[10px]">sRGB Master Swatches</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          {selectedItem.colorPalette.map((color, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs"
                            >
                              <span
                                className="h-3.5 w-3.5 rounded-full border border-white/20"
                                style={{ backgroundColor: color }}
                              />
                              <span className="font-mono text-[11px] text-white/80">{color}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Technical Specs & Breakdown */}
                    <div className="lg:col-span-5 flex flex-col space-y-6">
                      
                      <div>
                        <span className="text-xs font-semibold text-[#ff8a7a]">
                          {selectedItem.gameGenre} • {selectedItem.client}
                        </span>
                        <p className="mt-2 text-xs leading-relaxed text-white/80">
                          {selectedItem.description}
                        </p>
                      </div>

                      {/* Technical Specs Table */}
                      <div className="rounded-xl border border-white/10 bg-[#13111a] p-4 text-xs space-y-2.5">
                        <div className="flex justify-between border-b border-white/10 pb-2">
                          <span className="text-white/50">Resolution</span>
                          <span className="font-mono font-medium text-white">{selectedItem.specs.resolution}</span>
                        </div>
                        <div className="flex justify-between border-b border-white/10 pb-2">
                          <span className="text-white/50">Engine Pipeline Stage</span>
                          <span className="font-medium text-[#f6c177]">{selectedItem.specs.pipelineStage}</span>
                        </div>
                        <div className="flex justify-between border-b border-white/10 pb-2">
                          <span className="text-white/50">Delivered Formats</span>
                          <span className="font-mono font-medium text-white">{selectedItem.specs.formats.join(', ')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/50">Primary Software</span>
                          <span className="font-medium text-white">{selectedItem.specs.tools.join(', ')}</span>
                        </div>
                      </div>

                      {/* Key Engineering Features */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">
                          Pipeline Advantages:
                        </h4>
                        <ul className="space-y-1.5 text-xs text-white/80">
                          {selectedItem.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Deliverables Package */}
                      <div className="border-t border-white/10 pt-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">
                          Files Included in Package:
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedItem.deliverables.map((deliv, idx) => (
                            <span
                              key={idx}
                              className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/70"
                            >
                              {deliv}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Modal Action CTA */}
                      <div className="pt-2">
                        <a
                          href="#contact"
                          onClick={() => setSelectedItem(null)}
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff8a7a] to-[#f47c7c] py-3 text-xs font-bold text-[#13111a] shadow-lg transition-all hover:brightness-110"
                        >
                          <span>Request Similar Assets for Your Game</span>
                        </a>
                      </div>

                    </div>

                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
