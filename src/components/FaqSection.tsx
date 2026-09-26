import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HelpCircle, 
  ChevronDown, 
  Search
} from 'lucide-react';
import { FAQ_ITEMS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const { language, t } = useLanguage();

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const qText = language === 'en' ? item.question : (item.questionEs || item.question);
    const aText = language === 'en' ? item.answer : (item.answerEs || item.answer);
    return (
      qText.toLowerCase().includes(q) ||
      aText.toLowerCase().includes(q) ||
      item.tag.toLowerCase().includes(q)
    );
  });

  return (
    <section id="faq" className="relative py-12 lg:py-16 border-t border-white/5 bg-black text-[#faf6f0]">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-[#ff8a7a]/5 blur-[150px]" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Compact) */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#9ccfd8]/30 bg-[#9ccfd8]/10 px-3.5 py-0.5 text-xs font-semibold text-[#9ccfd8]">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>{t('faq.badge')}</span>
          </div>
          <h2 className="mt-2.5 font-heading text-2xl sm:text-4xl font-extrabold tracking-tight text-[#faf6f0] leading-tight">
            {t('faq.title')}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-white/70 leading-relaxed">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* Quick Search Filter (Compact: mt-6) */}
        <div className="mt-6 relative max-w-md mx-auto">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
          <input
            type="text"
            placeholder={t('faq.searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-[#171322] py-2.5 pl-10 pr-3.5 text-xs sm:text-sm text-white placeholder-white/40 shadow-inner focus:border-[#ff8a7a] focus:outline-none focus:ring-1 focus:ring-[#ff8a7a]"
          />
        </div>

        {/* Accordion List (Compact padding: py-3 px-4.5) */}
        <div className="mt-6 space-y-2.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            const questionText = language === 'en' ? faq.question : (faq.questionEs || faq.question);
            const answerText = language === 'en' ? faq.answer : (faq.answerEs || faq.answer);

            return (
              <motion.div
                key={faq.id}
                layout
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-[#ff8a7a]/50 bg-[#181324] shadow-lg shadow-[#ff8a7a]/5'
                    : 'border-white/10 bg-[#14101e] hover:border-white/20 hover:bg-[#161222]'
                }`}
              >
                {/* Header Question (Tighter vertical space) */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="flex w-full items-center justify-between py-3.5 px-4 sm:px-5 text-left"
                >
                  <div className="flex items-center gap-3 pr-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 font-mono text-[11px] font-bold text-[#ff8a7a]">
                      ?
                    </span>
                    <div>
                      <span className="font-heading text-sm sm:text-base font-bold text-white leading-snug">
                        {questionText}
                      </span>
                      <span className="ml-2 inline-block rounded bg-white/5 px-1.5 py-0.2 font-mono text-[9px] text-[#f6c177]">
                        {faq.tag}
                      </span>
                    </div>
                  </div>

                  <div className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#ff8a7a] text-[#13111a]' : ''
                  }`}>
                    <ChevronDown className="h-3.5 w-3.5" />
                  </div>
                </button>

                {/* Collapsible Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="border-t border-white/10 px-4 sm:px-5 pb-4 pt-3 text-xs sm:text-sm text-white/80 leading-relaxed">
                        <p>{answerText}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
