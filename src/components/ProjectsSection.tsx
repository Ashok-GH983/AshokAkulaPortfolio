import { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Play, Square, Layers, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { sound } from '../utils/audioHaptics';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Workflow & Agentic AI' | 'AI & Cloud' | 'Full-Stack Web' | 'Enterprise Java'>('All');
  const [expandedDiagramId, setExpandedDiagramId] = useState<string | null>('pega-movie-booking');
  const [simulatedPegaStatus, setSimulatedPegaStatus] = useState<string | null>(null);

  const filterTabs: Array<'All' | 'Workflow & Agentic AI' | 'AI & Cloud' | 'Full-Stack Web' | 'Enterprise Java'> = [
    'All',
    'Workflow & Agentic AI',
    'AI & Cloud',
    'Full-Stack Web',
    'Enterprise Java',
  ];

  const filteredProjects = activeFilter === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter((p) => p.category === activeFilter);

  const handleSimulatePegaWorkflow = (e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playChime();
    setSimulatedPegaStatus('Routing via Pega AI Blueprint...');
    setTimeout(() => {
      setSimulatedPegaStatus('Tier: Premium VIP · SLA: Approved · Email Dispatched');
      setTimeout(() => setSimulatedPegaStatus(null), 3500);
    }, 850);
  };

  const toggleDiagram = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playClick(500);
    setExpandedDiagramId(expandedDiagramId === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header: Natural human editorial style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 tracking-wider uppercase font-display mb-2">
              Software Architecture, Enterprise Workflows & AI
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 font-display">
              Featured Engineering Projects & System Diagrams
            </h2>
          </div>

          {/* Interactive Filter Controls: Clean segmented buttons (Section 1.A) */}
          <div className="flex items-center gap-1 p-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => {
                    sound.playClick(600);
                    setActiveFilter(tab);
                  }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-zinc-50 shadow-xs font-semibold'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Presentation Grid */}
        <div className="space-y-12">
          {filteredProjects.map((project) => {
            const isFeatured = project.featured;
            const isDiagramOpen = expandedDiagramId === project.id;

            return (
              <div
                key={project.id}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 overflow-hidden shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Media Column */}
                  <div className="lg:col-span-5 relative bg-zinc-950 flex flex-col justify-between group overflow-hidden">
                    <div className="relative aspect-video lg:h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 pointer-events-none" />

                      {/* Tag badge on top left */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 backdrop-blur-md rounded-md text-[10px] font-mono text-amber-400 border border-amber-500/30">
                        {project.category}
                      </div>

                      {/* Interactive Widget Overlay */}
                      {project.id === 'pega-movie-booking' && (
                        <div className="absolute bottom-4 inset-x-4 p-3.5 bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-xl text-white">
                          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-1.5">
                            <span>Pega Blueprint & Case Lifecycle</span>
                            <span className="text-amber-400 font-semibold">Agentic AI SLA</span>
                          </div>
                          <div className="flex items-center justify-between gap-3">
                            <span className="text-xs text-zinc-300 font-mono truncate">
                              {simulatedPegaStatus ? simulatedPegaStatus : 'SLA Target: 2hr approval window'}
                            </span>
                            <button
                              onClick={handleSimulatePegaWorkflow}
                              className="px-2.5 py-1 text-[11px] font-semibold bg-amber-400 text-zinc-950 hover:bg-amber-300 rounded shrink-0 cursor-pointer"
                            >
                              Test Agentic Flow
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      {/* Clean unboxed metadata with separators */}
                      <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-400 mb-2">
                        <span>{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.role}</span>
                      </div>

                      <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-display mb-2">
                        {project.title}
                      </h3>

                      <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">
                        {project.tagline}
                      </p>

                      {/* Problem & Solution */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3 border-t border-zinc-200/80 dark:border-zinc-800/80 mb-4">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-display block mb-1">
                            Problem
                          </span>
                          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            {project.problem}
                          </p>
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 font-display block mb-1">
                            Solution
                          </span>
                          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            {project.solution}
                          </p>
                        </div>
                      </div>

                      {/* Quantified Impact Metric */}
                      <div className="p-3.5 rounded-xl bg-zinc-100/80 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/80 mb-4">
                        <div className="text-lg font-bold font-display text-zinc-900 dark:text-zinc-100 tabular-nums">
                          {project.metric}
                        </div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">
                          {project.metricLabel}
                        </div>
                      </div>

                      {/* Clean unboxed Tech Stack */}
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-4">
                        {project.tech.map((t, idx) => (
                          <span key={t} className="flex items-center">
                            <span>{t}</span>
                            {idx < project.tech.length - 1 && (
                              <span aria-hidden="true" className="mx-1.5 text-zinc-300 dark:text-zinc-700">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links & Architecture Diagram Trigger */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => {
                            sound.playClick(600);
                            onSelectProject(project);
                          }}
                          className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-lg flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                        >
                          <span>Deep Dive Case Study</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => sound.playClick(700)}
                          className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                          title="View GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>

                      {/* Toggle Architecture Diagram Button */}
                      <button
                        onClick={(e) => toggleDiagram(project.id, e)}
                        className="px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Layers className="w-3.5 h-3.5 text-amber-500" />
                        <span>{isDiagramOpen ? 'Hide System Diagram' : 'View System Diagram'}</span>
                        {isDiagramOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expandable Architecture Diagram Strip inside Project Card */}
                {isDiagramOpen && project.diagram && (
                  <div className="p-5 sm:p-6 bg-zinc-100/60 dark:bg-zinc-950/60 border-t border-zinc-200 dark:border-zinc-800 animate-in slide-in-from-top-2 duration-200">
                    <ArchitectureDiagram diagram={project.diagram} interactive={false} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
