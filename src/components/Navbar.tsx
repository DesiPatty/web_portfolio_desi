import React, { useState } from 'react';
import { Sparkles, Palette, ArrowRight, Monitor, Layers, Menu, X, Gift } from 'lucide-react';
import { IMAGES } from '../data/portfolioData';

interface NavbarProps {
  viewMode: 'interactive' | 'mockup169';
  setViewMode: (mode: 'interactive' | 'mockup169') => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ viewMode, setViewMode, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Inicio' },
    { href: '#about', label: 'Sobre Mí' },
    { href: '#services', label: 'Servicios' },
    { href: '#process-advantages', label: 'Procesos' },
    { href: '#testimonials', label: 'Testimonios' },
    { href: '#gift-kit', label: 'Kit Gratis', badge: 'Gratis' },
    { href: '#faq', label: 'Preguntas' },
    { href: '#contact', label: 'Contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand identity with artist avatar */}
        <a href="#home" className="group flex items-center gap-3">
          <div className="relative">
            <div className="h-11 w-11 overflow-hidden rounded-full border-2 border-[#ff8a7a]/70 bg-[#1e1b29] shadow-md shadow-[#ff8a7a]/20 transition-transform group-hover:scale-105">
              <img
                src={IMAGES.avatar}
                alt="DesiPatty Avatar"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Live studio status beacon */}
            <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-[#0e0c15] bg-emerald-500"></span>
            </span>
          </div>

          <span className="font-heading text-xl font-bold tracking-tight text-[#faf6f0] transition-colors group-hover:text-[#ff8a7a]">
            DesiPatty
          </span>
        </a>

        {/* Desktop Navigation links */}
        <nav className="hidden items-center gap-1 xl:gap-1.5 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative rounded-lg px-2.5 xl:px-3 py-1.5 text-xs font-semibold text-white/75 transition-colors hover:bg-white/5 hover:text-white"
            >
              <span>{link.label}</span>
              {link.badge && (
                <span className="ml-1.5 rounded-full bg-[#f6c177] px-1.5 py-0.2 text-[9px] font-extrabold text-[#13111a]">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Right side actions: Mockup switcher & CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* 16:9 Mockup vs Full Scroll toggle */}
          <div className="hidden sm:flex items-center rounded-xl border border-white/10 bg-[#161222] p-1 text-xs">
            <button
              onClick={() => setViewMode('interactive')}
              className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-medium transition-all ${
                viewMode === 'interactive'
                  ? 'bg-[#ff8a7a] text-[#13111a] font-bold shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
              title="Web completa interactiva con scroll"
            >
              <Layers className="h-3.5 w-3.5" />
              <span>Página Completa</span>
            </button>
            <button
              onClick={() => setViewMode('mockup169')}
              className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-medium transition-all ${
                viewMode === 'mockup169'
                  ? 'bg-[#ff8a7a] text-[#13111a] font-bold shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
              title="Vista enmarcada como mockup de escritorio 16:9"
            >
              <Monitor className="h-3.5 w-3.5" />
              <span>Mockup 16:9</span>
            </button>
          </div>

          {/* Quick Contact CTA */}
          <button
            onClick={onOpenContact}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff8a7a] to-[#f47c7c] px-3.5 sm:px-4 py-2 text-xs sm:text-xs font-bold text-[#13111a] shadow-lg shadow-[#ff8a7a]/25 transition-all hover:brightness-110 active:scale-95"
          >
            <span>Iniciar Proyecto</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex lg:hidden rounded-lg border border-white/10 bg-white/5 p-2 text-white/70 hover:text-white"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-[#120f1b] px-4 py-4 lg:hidden">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-2.5 text-xs font-medium text-white/80 hover:bg-white/10"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="rounded bg-[#f6c177] px-1.5 py-0.5 text-[9px] font-bold text-[#13111a]">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
            <span className="text-xs text-white/60">Modo de Vista:</span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  setViewMode('interactive');
                  setMobileMenuOpen(false);
                }}
                className={`rounded px-2.5 py-1 text-xs font-medium ${
                  viewMode === 'interactive' ? 'bg-[#ff8a7a] text-[#13111a]' : 'text-white/60'
                }`}
              >
                Normal
              </button>
              <button
                onClick={() => {
                  setViewMode('mockup169');
                  setMobileMenuOpen(false);
                }}
                className={`rounded px-2.5 py-1 text-xs font-medium ${
                  viewMode === 'mockup169' ? 'bg-[#ff8a7a] text-[#13111a]' : 'text-white/60'
                }`}
              >
                Mockup 16:9
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
