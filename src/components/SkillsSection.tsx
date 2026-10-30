import { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sound } from '../utils/audioHaptics';
import { Cpu, Palette, Zap, Wrench, ShieldCheck, Activity } from 'lucide-react';

export function SkillsSection() {
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState(0);

  const icons = [Cpu, Palette, Zap, Wrench];

  return (
    <section id="skills" className="py-20 lg:py-28 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100/40 dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-12">
          <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 tracking-wider uppercase font-display mb-2">
            Technical Architecture & Design Discipline
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 font-display">
            Systems, Tools & Engineering Craft
          </h2>
          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            A battle-tested stack honed across high-traffic production applications, enterprise token systems, and award-winning creative computing.
          </p>
        </div>

        {/* Category Navigation Bar (Buttons, not pills) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {PORTFOLIO_DATA.skills.map((category, idx) => {
            const Icon = icons[idx] || Cpu;
            const isSelected = selectedCategoryIdx === idx;
            return (
              <button
                key={category.title}
                onClick={() => {
                  sound.playClick(500 + idx * 80);
                  setSelectedCategoryIdx(idx);
                }}
                className={`p-4 rounded-xl border text-left transition-all duration-150 cursor-pointer flex flex-col justify-between min-h-[96px] ${
                  isSelected
                    ? 'border-amber-500 bg-white dark:bg-zinc-900 shadow-xs'
                    : 'border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-500' : 'text-zinc-400'}`} />
                  <span className="text-[10px] font-mono text-zinc-400">
                    0{idx + 1}
                  </span>
                </div>
                <div className={`text-sm font-bold font-display ${isSelected ? 'text-zinc-900 dark:text-zinc-100' : 'text-zinc-600 dark:text-zinc-400'}`}>
                  {category.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Breakdown */}
        <div className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs">
          <div className="mb-6 pb-6 border-b border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 font-display">
                {PORTFOLIO_DATA.skills[selectedCategoryIdx].title}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 max-w-2xl">
                {PORTFOLIO_DATA.skills[selectedCategoryIdx].description}
              </p>
            </div>
            <div className="text-xs font-mono text-amber-600 dark:text-amber-400 shrink-0">
              {PORTFOLIO_DATA.skills[selectedCategoryIdx].skills.length} Core Competencies
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PORTFOLIO_DATA.skills[selectedCategoryIdx].skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-xl border border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 font-display">
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono font-medium text-amber-600 dark:text-amber-400">
                    {skill.proficiency}
                  </span>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {skill.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Craftsmanship Principles Row */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <div className="flex items-center gap-2 mb-1.5">
              <Activity className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-bold font-display uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
                60fps Frame Budget
              </span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Never animate layout properties (`width`, `height`, `margin`). Transform and opacity only, measured under Chrome DevTools flame charts.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <div className="flex items-center gap-2 mb-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-bold font-display uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
                WCAG AA Rigor
              </span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              4.5:1 text contrast minimum, visible keyboard focus rings (`focus-visible`), and seamless screen-reader navigation trees.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <div className="flex items-center gap-2 mb-1.5">
              <Zap className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-bold font-display uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
                Spatial Math
              </span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Strict 60-30-10 color allocation, nested radius subtraction ($r_i = r_o - p$), and zero two-line wrapping on controls.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
