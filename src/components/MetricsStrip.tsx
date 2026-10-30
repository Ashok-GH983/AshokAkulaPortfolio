import { PORTFOLIO_DATA } from '../data/portfolioData';

export function MetricsStrip() {
  return (
    <section className="border-y border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100/50 dark:bg-zinc-900/50 py-8">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {PORTFOLIO_DATA.metrics.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-display text-zinc-900 dark:text-zinc-100 tabular-nums mb-1">
                {item.value}
              </span>
              <span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-snug">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
