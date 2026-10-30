import { useEffect } from 'react';
import { X, ExternalLink, Award, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/audioHaptics';

interface CertificateModalProps {
  certificate: {
    title: string;
    organization: string;
    period: string;
    image: string;
    description: string;
  } | null;
  onClose: () => void;
}

export function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          sound.playClick(400);
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-3xl max-h-[92vh] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 shrink-0">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-500" />
            <span id="cert-title" className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 font-display">
              {certificate.title}
            </span>
          </div>

          <button
            onClick={() => {
              sound.playClick(450);
              onClose();
            }}
            aria-label="Close certificate preview"
            className="p-1.5 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Image View */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-4">
          <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950 flex items-center justify-center shadow-inner">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="max-h-[60vh] w-auto object-contain mx-auto"
            />
          </div>

          <div className="p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-950/50">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
              <span className="text-sm font-bold font-display text-zinc-900 dark:text-zinc-100">
                {certificate.organization}
              </span>
              <span className="text-xs font-mono text-amber-600 dark:text-amber-400">
                {certificate.period}
              </span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {certificate.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
