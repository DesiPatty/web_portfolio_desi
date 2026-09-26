import React, { useState } from 'react';
import { ArrowRight, Menu, X, Globe } from 'lucide-react';
import { IMAGES } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  viewMode: 'interactive' | 'mockup169';
  setViewMode: (mode: 'interactive' | 'mockup169') => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  // Exactly 4 primary navigation items as requested
  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#services', label: t('nav.work') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0e0c15]/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand identity with artist avatar */}
        <a href="#home" className="group flex items-center gap-3">
          <div className="relative">
            <div className="h-9 w-9 overflow-hidden rounded-full border-2 border-[#ff8a7a]/70 bg-[#1e1b29] shadow-md shadow-[#ff8a7a]/20 transition-transform group-hover:scale-105">
              <img
                src={IMAGES.avatar}
                alt="DesiPatty Avatar"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Live studio status beacon */}
            <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-[#0e0c15] bg-emerald-500"></span>
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-heading text-xl font-bold tracking-tight text-[#faf6f0] transition-colors group-hover:text-[#ff8a7a]">
              DesiPatty
            </span>
          </div>
        </a>

        {/* Desktop Navigation links: EXACTLY 4 sections */}
        <nav className="hidden items-center gap-1.5 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative rounded-xl px-3.5 py-1.5 font-heading text-sm font-semibold text-white/80 transition-all hover:bg-white/10 hover:text-white"
            >
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Right side actions: Language Switcher + CTA */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          
          {/* Language Switcher Button (ES / EN) */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 rounded-xl border border-white/15 bg-[#171322] px-2.5 py-1.5 font-heading text-xs font-bold text-white/80 hover:border-[#ff8a7a]/50 hover:text-white transition-all shadow-sm"
            title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            aria-label={language === 'es' ? 'Switch language to English' : 'Cambiar idioma a Español'}
          >
            <Globe className="h-3.5 w-3.5 text-[#ff8a7a]" />
            <span className={language === 'es' ? 'text-[#ff8a7a] font-bold' : 'text-white/40'}>ES</span>
            <span className="text-white/20">/</span>
            <span className={language === 'en' ? 'text-[#ff8a7a] font-bold' : 'text-white/40'}>EN</span>
          </button>

          {/* Main CTA: Iniciar Proyecto / Start a Project */}
          <button
            onClick={onOpenContact}
            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#ff8a7a] via-[#f47c7c] to-[#f7a072] px-4 py-2 font-heading text-xs sm:text-sm font-bold text-[#13111a] shadow-lg shadow-[#ff8a7a]/25 transition-all hover:brightness-110 active:scale-95"
          >
            <span>{t('nav.cta')}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden rounded-lg border border-white/10 bg-white/5 p-2 text-white/70 hover:text-white"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-[#120f1b] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-2.5 font-heading text-sm font-semibold text-white/90 hover:bg-white/10"
              >
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
            <span className="font-heading text-xs text-white/60">Idioma / Language:</span>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 py-1 font-heading text-xs font-bold text-white"
            >
              <Globe className="h-3.5 w-3.5 text-[#ff8a7a]" />
              <span className={language === 'es' ? 'text-[#ff8a7a]' : 'text-white/50'}>ES</span>
              <span className="text-white/20">/</span>
              <span className={language === 'en' ? 'text-[#ff8a7a]' : 'text-white/50'}>EN</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
