import { useEffect, useState } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Sparkles } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { sound } from '../utils/audioHaptics';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [simulationState, setSimulationState] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleRunSimulation = () => {
    sound.playChime();
    setSimulationState('Simulating workflow...');
    setTimeout(() => {
      if (project.id === 'smart-fertilizer-ai') {
        setSimulationState('AI Result: Soil NPK ratio 14:14:14 calibrated via Hugging Face REST model.');
      } else if (project.id === 'land-rental-mern') {
        setSimulationState('Filter Result: 12 verified agricultural parcels matched in Andhra Pradesh.');
      } else if (project.id === 'student-mgmt-spring') {
        setSimulationState('JPA Transaction: Student record #2026-IT-042 validated and committed to MySQL.');
      } else {
        setSimulationState('JDBC Execution: Book ID #982 issue recorded with zero concurrency lockups.');
      }
    }, 800);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-zinc-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          sound.playClick(400);
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">
              {project.category}
            </span>
            <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">·</span>
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
              Role: {project.role}
            </span>
          </div>

          <button
            onClick={() => {
              sound.playClick(450);
              onClose();
            }}
            aria-label="Close case study details"
            className="p-1.5 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-6 py-6 sm:px-8 sm:py-8 space-y-8">
          {/* Title & Tagline */}
          <div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 font-display mb-2">
              {project.title}
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-300">
              {project.tagline}
            </p>
          </div>

          {/* Media Showcase */}
          <div className="relative rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950 aspect-video">
            <img
              src={project.image}
              alt={`${project.title} interface preview`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {/* Scrim and bottom badge */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 flex items-center justify-between text-white">
              <span className="text-xs font-medium font-mono">{project.title} Architecture</span>
              <span className="text-xs font-mono text-amber-400 font-semibold">{project.metric}</span>
            </div>
          </div>

          {/* Key Metrics Strip */}
          <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200/90 dark:border-zinc-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-semibold font-display">
                Quantified Outcome
              </span>
              <div className="text-xl font-extrabold font-display text-zinc-900 dark:text-zinc-100 tabular-nums">
                {project.metric}
              </div>
            </div>
            <div className="text-xs sm:text-right text-zinc-600 dark:text-zinc-300 max-w-sm">
              {project.metricLabel}
            </div>
          </div>

          {/* Problem & Solution Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60">
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 font-display mb-2">
                Problem Statement
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60">
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 font-display mb-2">
                Architectural Solution
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Project Architecture & Data Flow Diagram */}
          {project.diagram && (
            <ArchitectureDiagram diagram={project.diagram} interactive={true} />
          )}

          {/* Architectural Innovations */}
          <div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 font-display mb-3">
              Key Engineering Decisions & Implementation Details
            </h3>
            <ul className="space-y-2.5">
              {project.caseStudy.architecture.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Simulation Sandbox */}
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider font-display text-zinc-700 dark:text-zinc-300">
                Interactive Logic Sandbox
              </span>
              <button
                onClick={handleRunSimulation}
                className="px-3 py-1.5 text-xs font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Simulate Execution</span>
              </button>
            </div>
            {simulationState && (
              <div className="p-2.5 rounded bg-zinc-900 text-amber-400 font-mono text-xs border border-amber-500/30 animate-in fade-in">
                {simulationState}
              </div>
            )}
          </div>

          {/* Technical Stack Tags (Clean unboxed text metadata) */}
          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold block mb-2 font-display">
              Technology Stack
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-700 dark:text-zinc-300">
              {project.tech.map((techItem, idx) => (
                <span key={techItem} className="flex items-center">
                  <span>{techItem}</span>
                  {idx < project.tech.length - 1 && (
                    <span aria-hidden="true" className="mx-2 text-zinc-300 dark:text-zinc-700">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Live Action Bar */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playClick(600)}
              className="px-4 py-2 text-xs font-medium text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Inspect Ashok's GitHub Repository</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
