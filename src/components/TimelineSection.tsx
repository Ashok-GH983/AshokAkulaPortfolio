import { useState } from 'react';
import { PORTFOLIO_DATA, ExperienceItem } from '../data/portfolioData';
import { sound } from '../utils/audioHaptics';
import { Briefcase, GraduationCap, Award, MapPin, ExternalLink, Image as ImageIcon } from 'lucide-react';

interface TimelineSectionProps {
  onSelectCertificate: (cert: {
    title: string;
    organization: string;
    period: string;
    image: string;
    description: string;
  }) => void;
}

export function TimelineSection({ onSelectCertificate }: TimelineSectionProps) {
  const [filter, setFilter] = useState<'all' | 'experience' | 'education-honors'>('all');

  const filteredItems = PORTFOLIO_DATA.timeline.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'experience') return item.type === 'experience';
    if (filter === 'education-honors') return item.type === 'education' || item.type === 'honor';
    return true;
  });

  return (
    <section id="journey" className="py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 tracking-wider uppercase font-display mb-2">
              Career Trajectory & Verified Credentials
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 font-display">
              Experience, Milestones & Awards
            </h2>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl self-start sm:self-auto">
            <button
              onClick={() => {
                sound.playClick(500);
                setFilter('all');
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 shadow-xs font-semibold'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              All Milestones
            </button>
            <button
              onClick={() => {
                sound.playClick(580);
                setFilter('experience');
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                filter === 'experience'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 shadow-xs font-semibold'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => {
                sound.playClick(660);
                setFilter('education-honors');
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                filter === 'education-honors'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 shadow-xs font-semibold'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              Education & Honors
            </button>
          </div>
        </div>

        {/* Timeline list */}
        <div className="space-y-6">
          {filteredItems.map((item) => {
            const Icon = item.type === 'experience'
              ? Briefcase
              : item.type === 'education'
              ? GraduationCap
              : Award;

            return (
              <div
                key={item.id}
                className="p-6 sm:p-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
                  <div>
                    {/* Unboxed Metadata Header (Zero-Pill rule) */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-mono mb-2">
                      <span className="font-semibold text-amber-600 dark:text-amber-400">
                        {item.period}
                      </span>
                      <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">·</span>
                      <span className="capitalize">{item.type}</span>
                      <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-zinc-400" />
                        <span>{item.location}</span>
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 font-display flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>{item.role}</span>
                    </h3>

                    <div className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mt-1">
                      {item.organization}
                    </div>
                  </div>

                  {/* Certificate preview button if available */}
                  {item.certificateImage && (
                    <button
                      onClick={() => {
                        sound.playChime();
                        onSelectCertificate({
                          title: item.role,
                          organization: item.organization,
                          period: item.period,
                          image: item.certificateImage!,
                          description: item.description,
                        });
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-900 dark:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-lg transition-colors shrink-0 cursor-pointer"
                    >
                      <ImageIcon className="w-3.5 h-3.5 text-amber-500" />
                      <span>View Verified Document</span>
                    </button>
                  )}
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed max-w-3xl">
                  {item.description}
                </p>

                {item.highlights && item.highlights.length > 0 && (
                  <ul className="space-y-1.5 pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
                    {item.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-zinc-500 dark:text-zinc-400 flex items-start gap-2"
                      >
                        <span className="text-amber-500 font-bold select-none">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
