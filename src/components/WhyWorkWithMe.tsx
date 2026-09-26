import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  HeartHandshake, 
  ShieldCheck, 
  MessageSquareText, 
  FolderKanban, 
  Sparkles,
  Quote,
  Star
} from 'lucide-react';
import { BENEFITS, TESTIMONIALS } from '../data/portfolioData';

const BENEFIT_ICONS: Record<string, React.ReactNode> = {
  Zap: <Zap className="h-6 w-6" />,
  HeartHandshake: <HeartHandshake className="h-6 w-6" />,
  ShieldCheck: <ShieldCheck className="h-6 w-6" />,
  MessageSquareText: <MessageSquareText className="h-6 w-6" />,
  FolderKanban: <FolderKanban className="h-6 w-6" />,
  Sparkles: <Sparkles className="h-6 w-6" />,
};

export const WhyWorkWithMe: React.FC = () => {
  return (
    <section id="why-me" className="relative py-20 lg:py-28 border-t border-white/10 bg-[#121018]">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/3 right-10 h-80 w-80 rounded-full bg-[#f6c177]/5 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-80 w-80 rounded-full bg-[#ff8a7a]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ff8a7a]/30 bg-[#ff8a7a]/10 px-3.5 py-1 text-xs font-semibold text-[#ff8a7a]">
            <span>✦ Tailored for Independent Studios</span>
          </div>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#faf6f0] sm:text-4xl lg:text-5xl">
            Why Work With Me?
          </h2>
          <p className="mt-4 text-base text-white/70">
            Hiring a full-time in-house senior artist is expensive and slow. Freelance marketplaces are full of random quality and ghosting. Here is why indie game directors rely on DesiPatty:
          </p>
        </div>

        {/* 6 Requested Pillars Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-[#181524] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff8a7a]/40 hover:bg-[#1d192c] hover:shadow-xl hover:shadow-[#ff8a7a]/10"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-[#231e33] text-[#ff8a7a] transition-transform group-hover:scale-110">
                  {BENEFIT_ICONS[benefit.icon] || <Sparkles className="h-6 w-6" />}
                </div>
                <span className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium text-[#f6c177]">
                  {benefit.highlight}
                </span>
              </div>

              <h3 className="mt-5 font-heading text-lg font-bold text-[#faf6f0] group-hover:text-[#ff8a7a] transition-colors">
                {benefit.title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-white/70">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Real Indie Studio Testimonials */}
        <div className="mt-16 border-t border-white/10 pt-14">
          <div className="text-center mb-8">
            <span className="font-handwriting text-base text-[#f6c177]">
              Words from developers who shipped with me:
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#191526]/80 p-7 backdrop-blur-sm"
              >
                <Quote className="h-8 w-8 text-[#ff8a7a]/40 mb-3" />
                <p className="text-sm text-white/85 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.author}</h4>
                    <p className="text-xs text-white/50">{t.role} • {t.studio}</p>
                  </div>
                  <span className="rounded-md border border-[#ff8a7a]/30 bg-[#ff8a7a]/10 px-2.5 py-1 text-xs font-semibold text-[#ff8a7a]">
                    🎮 {t.game}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
