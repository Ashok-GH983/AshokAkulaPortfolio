import { useEffect, useState } from 'react';
import { X, Check, Copy, Terminal, ExternalLink, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sound } from '../utils/audioHaptics';

interface DeployGuideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DeployGuideDrawer({ isOpen, onClose }: DeployGuideDrawerProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyChecklist = () => {
    sound.playChime();
    const checklistText = PORTFOLIO_DATA.deploymentChecklist
      .map(
        (c, idx) =>
          `${idx + 1}. [ ] ${c.item}\n   File: ${c.location}\n   Current: ${c.current}\n   Instruction: ${c.instructions}\n`
      )
      .join('\n');

    navigator.clipboard.writeText(
      `--- PORTFOLIO DEPLOYMENT & PERSONALIZATION CHECKLIST ---\n\n${checklistText}\nDeploy Commands:\n1. npm run build\n2. Publish 'dist' folder to Netlify, Vercel, or GitHub Pages.`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="deploy-guide-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          sound.playClick(400);
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 shrink-0">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <h2 id="deploy-guide-title" className="text-sm font-bold font-display uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Personalization & Deployment Checklist
            </h2>
          </div>

          <button
            onClick={() => {
              sound.playClick(450);
              onClose();
            }}
            aria-label="Close deployment checklist"
            className="p-1.5 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Here is the exact list of variables and content to update in this codebase before publishing your portfolio live to <strong>Netlify</strong>, <strong>Vercel</strong>, or <strong>GitHub Pages</strong>.
          </p>

          {/* Checklist table */}
          <div className="space-y-3">
            {PORTFOLIO_DATA.deploymentChecklist.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-950/40"
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 font-display">
                    {idx + 1}. {item.item}
                  </span>
                  <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded">
                    {item.location}
                  </span>
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mb-1">
                  Current: <span className="text-zinc-700 dark:text-zinc-300">{item.current}</span>
                </div>
                <div className="text-xs text-zinc-600 dark:text-zinc-300">
                  {item.instructions}
                </div>
              </div>
            ))}
          </div>

          {/* Build & Deploy Commands */}
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-950 text-white">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
              <Terminal className="w-3.5 h-3.5 text-amber-400" />
              <span>Static Production Build Instructions</span>
            </div>
            <pre className="text-xs font-mono text-emerald-400 overflow-x-auto p-2 bg-black/60 rounded">
{`# 1. Compile the static web bundle
npm run build

# 2. Output is located in /dist
# Deploy the 'dist' directory to:
# - Vercel: vercel deploy --prebuilt
# - Netlify: netlify deploy --dir=dist --prod
# - GitHub Pages: upload /dist contents`}
            </pre>
          </div>

          {/* Actions */}
          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={handleCopyChecklist}
              className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Checklist Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Full Checklist</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                sound.playClick(400);
                onClose();
              }}
              className="px-3.5 py-2 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
