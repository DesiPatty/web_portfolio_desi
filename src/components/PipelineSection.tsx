import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  GitPullRequest, 
  FileQuestion, 
  Palette, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Layers,
  FolderGit2,
  MessageSquare,
  Check
} from 'lucide-react';
import { PIPELINE_STEPS } from '../data/portfolioData';

export const PipelineSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileQuestion':
        return <FileQuestion className="h-6 w-6" />;
      case 'GitPullRequest':
        return <GitPullRequest className="h-6 w-6" />;
      case 'Palette':
        return <Palette className="h-6 w-6" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="h-6 w-6" />;
      default:
        return <Sparkles className="h-6 w-6" />;
    }
  };

  return (
    <section id="pipeline" className="relative py-20 lg:py-28 border-t border-white/10 bg-[#14111d]">
      {/* Dev grid */}
      <div className="pointer-events-none absolute inset-0 bg-dev-grid opacity-35" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f6c177]/30 bg-[#f6c177]/10 px-3.5 py-1 text-xs font-semibold text-[#f6c177]">
            <span>✦ Smooth Production Workflow</span>
          </div>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#faf6f0] sm:text-4xl lg:text-5xl">
            How I Fit Into Your Pipeline
          </h2>
          <p className="mt-4 text-base text-white/70">
            No endless meetings or corporate friction. Here is the exact 4-step workflow that lets me slide into your production pipeline and deliver high-impact assets immediately.
          </p>
        </div>

        {/* Visual Pipeline Interactive Tracker */}
        <div className="mt-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PIPELINE_STEPS.map((step) => {
              const isSelected = activeStep === step.step;

              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(step.step)}
                  className={`group relative flex flex-col rounded-2xl border p-6 cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'border-[#ff8a7a] bg-[#1f1a2e] shadow-xl shadow-[#ff8a7a]/15 -translate-y-1'
                      : 'border-white/10 bg-[#181424]/80 hover:border-white/20 hover:bg-[#1c172a]'
                  }`}
                >
                  {/* Step tag & number */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#ff8a7a]">
                      {step.tag}
                    </span>
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors ${
                      isSelected
                        ? 'border-[#ff8a7a]/50 bg-[#ff8a7a]/20 text-[#ff8a7a]'
                        : 'border-white/10 bg-white/5 text-white/60 group-hover:text-white'
                    }`}>
                      {getStepIcon(step.icon)}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="mt-5 font-heading text-lg font-bold text-[#faf6f0] leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-[#f6c177]">
                    {step.subtitle}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-white/70">
                    {step.description}
                  </p>

                  {/* Key points */}
                  <div className="mt-4 border-t border-white/10 pt-4 space-y-1.5">
                    {step.keyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] text-white/75">
                        <Check className="mt-0.5 h-3 w-3 flex-shrink-0 text-emerald-400" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pipeline arrow connector indicator */}
                  <div className="mt-auto pt-4 flex items-center justify-between text-[11px]">
                    <span className={`font-semibold ${isSelected ? 'text-[#ff8a7a]' : 'text-white/40'}`}>
                      {isSelected ? '✦ Active Focus' : 'Click to inspect'}
                    </span>
                    <ArrowRight className={`h-3.5 w-3.5 transition-transform ${isSelected ? 'translate-x-1 text-[#ff8a7a]' : 'text-white/30'}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pipeline Stage Deep Dive Callout */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-r from-[#1b172a] via-[#221c35] to-[#1b172a] p-6 lg:p-8 backdrop-blur-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#ff8a7a]/20 text-[#ff8a7a]">
                <FolderGit2 className="h-6 w-6" />
              </div>
              <div>
                <span className="font-handwriting text-base text-[#f6c177]">
                  Desi’s Pipeline Guarantee:
                </span>
                <h4 className="font-heading text-xl font-bold text-[#faf6f0]">
                  “Ready-to-Commit” Repository Files
                </h4>
                <p className="mt-1 text-xs text-white/70 max-w-xl">
                  You never get unsorted `.psd` files with layers named &ldquo;Layer 43 copy 2&rdquo;. Assets are exported with strict naming conventions, 2D engine pivots centered, sprite atlases packed, and ready to drop directly into your <code className="font-mono text-[#ff8a7a] bg-black/40 px-1.5 py-0.5 rounded">/Assets/Art/</code> folder.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-lg border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-xs text-white/80">
                📁 /Art/UI/Inventory_Atlas.png
              </span>
              <span className="rounded-lg border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-xs text-white/80">
                📁 /Art/Spine/Boss_Rig.json
              </span>
              <span className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 font-mono text-xs text-emerald-300 font-semibold">
                ✓ 0 Compile Warnings
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
