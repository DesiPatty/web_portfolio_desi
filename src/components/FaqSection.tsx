import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HelpCircle, 
  ChevronDown, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { FAQ_ITEMS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const FaqSection: React.FC = () => {
  // First item open by default
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const { language, t } = useLanguage();

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="relative py-12 lg:py-16 border-t border-white/5 bg-black text-[#faf6f0]">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-[#ff8a7a]/5 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-1/4 h-80 w-80 rounded-full bg-[#a855f7]/5 blur-[150px]" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with tailored subtitle */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#9ccfd8]/30 bg-[#9ccfd8]/10 px-3.5 py-0.5 text-xs font-semibold text-[#9ccfd8]">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>{t('faq.badge')}</span>
          </div>
          <h2 className="mt-2.5 font-heading text-2xl sm:text-4xl font-extrabold tracking-tight text-[#faf6f0] leading-tight">
            {t('faq.title')}
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-white/75 leading-relaxed font-normal max-w-xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* Accordion List (Without Search Filter) */}
        <div className="mt-8 space-y-3">
          {FAQ_ITEMS.map((faq) => {
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
                {/* Header Question */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between py-4 px-4 sm:px-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8a7a]"
                >
                  <span className="font-heading text-sm sm:text-base font-bold text-white leading-snug pr-3">
                    {questionText}
                  </span>

                  <div className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#ff8a7a] text-[#13111a]' : ''
                  }`}>
                    <ChevronDown className="h-3.5 w-3.5" />
                  </div>
                </button>

                {/* Collapsible Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="border-t border-white/10 px-4 sm:px-5 pb-4 pt-3 text-xs sm:text-sm text-white/85 leading-relaxed">
                        {/* Process Flow highlighted for question 2 */}
                        {faq.id === 'working-process' ? (
                          <div className="rounded-xl border border-white/10 bg-black/40 p-3 text-xs sm:text-sm font-medium text-white/90">
                            <div className="flex flex-wrap items-center gap-2 text-[#ff8a7a] font-semibold">
                              <span>{language === 'en' ? 'Talk' : 'Hablamos'}</span>
                              <span className="text-white/40">→</span>
                              <span>{language === 'en' ? 'Scope & Budget' : 'Alcance & Presupuesto'}</span>
                              <span className="text-white/40">→</span>
                              <span>{language === 'en' ? 'WIP & Reviews' : 'Avances & Revisiones'}</span>
                              <span className="text-white/40">→</span>
                              <span className="text-[#34d399]">{language === 'en' ? 'Final Delivery' : 'Entrega Final'}</span>
                            </div>
                            <p className="mt-2 text-white/70 text-xs font-normal">
                              {answerText}
                            </p>
                          </div>
                        ) : (
                          <div className="space-y-2.5 whitespace-pre-line">
                            {answerText.split('\n\n').map((paragraph, pIdx) => (
                              <p key={pIdx}>{paragraph}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Card: "¿Tienes un proyecto en mente?" */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 overflow-hidden rounded-2xl border border-[#ff8a7a]/30 bg-gradient-to-r from-[#1b1424] via-[#161220] to-[#14101d] p-5 sm:p-6 text-center sm:text-left shadow-xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 font-heading text-xs font-bold text-[#ff8a7a]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{language === 'en' ? 'Ready to collaborate?' : '¿Listos para colaborar?'}</span>
              </div>
              <h3 className="font-heading text-base sm:text-lg font-extrabold text-white">
                {t('faq.ctaTitle')}
              </h3>
              <p className="text-xs sm:text-sm text-white/75 max-w-xl">
                {t('faq.ctaText')}
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={handleContactClick}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff7865] via-[#f47c7c] to-[#f7a072] px-5 py-2.5 font-heading text-xs sm:text-sm font-extrabold text-[#13111a] shadow-lg shadow-[#ff7865]/20 hover:brightness-110 active:scale-95 transition-all"
              >
                <span>{t('faq.ctaBtn')}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
