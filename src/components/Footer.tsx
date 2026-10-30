import { ArrowUp, Sparkles, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sound } from '../utils/audioHaptics';

interface FooterProps {
  onOpenDeployGuide: () => void;
  onOpenResume: () => void;
}

export function Footer({ onOpenDeployGuide, onOpenResume }: FooterProps) {
  const scrollToTop = () => {
    sound.playClick(650);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100/50 dark:bg-zinc-950 py-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-center sm:text-left">
            <span className="text-sm font-bold font-display text-zinc-900 dark:text-zinc-100">
              {PORTFOLIO_DATA.personal.name}
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-zinc-300 dark:text-zinc-700">·</span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              B.Tech IT · Lakireddy Bali Reddy College of Engineering · 2026 Portfolio
            </span>
          </div>

          {/* Quiet actions & Back to top */}
          <div className="flex items-center gap-4 text-xs font-medium text-zinc-500 dark:text-zinc-400">
            <a
              href={PORTFOLIO_DATA.personal.resumePdfUrl}
              download="Ashok_Kumar_Akula_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playChime()}
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Resume PDF
            </a>

            <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">·</span>

            <button
              onClick={() => {
                sound.playClick(500);
                onOpenDeployGuide();
              }}
              className="hover:text-zinc-900 dark:hover:text-zinc-100 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Deployment Info</span>
            </button>

            <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">·</span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg hover:bg-zinc-200/60 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors cursor-pointer flex items-center gap-1"
              title="Return to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
