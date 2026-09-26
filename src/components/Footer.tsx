import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/5 bg-black py-5 sm:py-6 text-xs text-white/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left">
        <p className="font-heading font-medium text-white/80 text-xs sm:text-sm">
          {t('footer.copyright')}
        </p>
        <p className="text-white/40 font-mono text-[11px] sm:text-xs">
          {t('footer.tagline')}
        </p>
      </div>
    </footer>
  );
};
