import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HelpCircle, 
  ChevronDown, 
  MessageSquare, 
  Sparkles, 
  FileCode2, 
  ArrowRight,
  Search
} from 'lucide-react';
import { FAQ_ITEMS } from '../data/portfolioData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.question.toLowerCase().includes(q) ||
      (item.questionEs && item.questionEs.toLowerCase().includes(q)) ||
      item.answer.toLowerCase().includes(q) ||
      (item.answerEs && item.answerEs.toLowerCase().includes(q)) ||
      item.tag.toLowerCase().includes(q)
    );
  });

  return (
    <section id="faq" className="relative py-20 lg:py-28 border-t border-white/5 bg-black text-[#faf6f0]">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-[#ff8a7a]/5 blur-[160px]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#9ccfd8]/30 bg-[#9ccfd8]/10 px-4 py-1 text-xs font-semibold text-[#9ccfd8]">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>07 • Preguntas Frecuentes</span>
          </div>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-[#faf6f0] sm:text-4xl lg:text-5xl">
            Preguntas y Respuestas Clave
          </h2>
          <p className="mt-4 text-base text-white/70 leading-relaxed">
            Todo lo que necesitas saber sobre flujos de trabajo, formatos para motor, revisiones y presupuestos.
          </p>
        </div>

        {/* Quick Search Filter */}
        <div className="mt-10 relative max-w-md mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
          <input
            type="text"
            placeholder="Buscar duda (ej: Unity, pagos, Discord, estilo)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-[#171322] py-3 pl-11 pr-4 text-xs sm:text-sm text-white placeholder-white/40 shadow-inner focus:border-[#ff8a7a] focus:outline-none focus:ring-1 focus:ring-[#ff8a7a]"
          />
        </div>

        {/* Accordion List */}
        <div className="mt-10 space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                layout
                className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-[#ff8a7a]/50 bg-[#181324] shadow-xl shadow-[#ff8a7a]/5'
                    : 'border-white/10 bg-[#14101e] hover:border-white/20 hover:bg-[#161222]'
                }`}
              >
                {/* Header Question */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-mono text-xs font-bold text-[#ff8a7a]">
                      ?
                    </span>
                    <div>
                      <span className="font-heading text-base sm:text-lg font-bold text-white leading-snug">
                        {faq.questionEs || faq.question}
                      </span>
                      <div className="mt-1">
                        <span className="rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-[#f6c177]">
                          {faq.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#ff8a7a] text-[#13111a]' : ''
                  }`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {/* Collapsible Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="border-t border-white/10 px-6 pb-6 pt-4 text-xs sm:text-sm text-white/80 leading-relaxed">
                        <p>{faq.answerEs || faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still have questions note */}
        <div className="mt-12 rounded-3xl border border-dashed border-white/15 bg-[#14101e]/80 p-6 text-center">
          <p className="text-sm font-medium text-white/80">
            ¿Tienes alguna pregunta específica sobre el motor o pipeline de tu proyecto?
          </p>
          <a
            href="#contact"
            className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-[#ff8a7a] hover:underline"
          >
            <span>Escríbeme directamente en la sección de contacto</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
