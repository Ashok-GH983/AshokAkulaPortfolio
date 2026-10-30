import { ProjectDiagram } from '../data/portfolioData';
import { Monitor, Shield, Server, Sparkles, Database, ArrowRight, Layers } from 'lucide-react';

interface ArchitectureDiagramProps {
  diagram: ProjectDiagram;
  interactive?: boolean;
}

export function ArchitectureDiagram({ diagram, interactive = false }: ArchitectureDiagramProps) {
  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'client':
        return Monitor;
      case 'gateway':
        return Shield;
      case 'ai':
        return Sparkles;
      case 'database':
        return Database;
      case 'service':
      default:
        return Server;
    }
  };

  const getNodeStyles = (type: string) => {
    switch (type) {
      case 'ai':
        return 'border-amber-500/80 bg-amber-500/10 text-amber-500 ring-1 ring-amber-500/30';
      case 'client':
        return 'border-sky-500/80 bg-sky-500/10 text-sky-500 ring-1 ring-sky-500/30';
      case 'gateway':
        return 'border-purple-500/80 bg-purple-500/10 text-purple-500 ring-1 ring-purple-500/30';
      case 'database':
        return 'border-emerald-500/80 bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/30';
      case 'service':
      default:
        return 'border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200';
    }
  };

  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-950/70 p-4 sm:p-5">
      {/* Diagram Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-amber-500" />
          <h4 className="text-xs font-bold font-display uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
            {diagram.flowTitle}
          </h4>
        </div>
        <span className="text-[10px] font-mono text-zinc-400">
          Architecture Flow Pipeline
        </span>
      </div>

      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-5 leading-relaxed">
        {diagram.description}
      </p>

      {/* Nodes Pipeline */}
      <div className="relative">
        {/* Desktop / Tablet Horizontal Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {diagram.nodes.map((node, idx) => {
            const Icon = getNodeIcon(node.type);
            const styleClasses = getNodeStyles(node.type);
            const isLast = idx === diagram.nodes.length - 1;

            return (
              <div key={node.step} className="relative flex flex-col justify-between">
                <div className={`p-3.5 rounded-xl border backdrop-blur-xs transition-all h-full flex flex-col justify-between shadow-xs ${styleClasses}`}>
                  <div>
                    {/* Top Step & Icon */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold opacity-80">
                        STAGE {node.step}
                      </span>
                      <Icon className="w-3.5 h-3.5" />
                    </div>

                    {/* Node Title */}
                    <div className="text-xs font-bold font-display leading-snug mb-1 text-zinc-900 dark:text-zinc-100">
                      {node.title}
                    </div>
                  </div>

                  {/* Node Subtitle */}
                  <div className="text-[11px] font-mono opacity-75 mt-2 leading-tight">
                    {node.subtitle}
                  </div>
                </div>

                {/* Arrow connector indicator */}
                {!isLast && (
                  <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-zinc-400 dark:text-zinc-600 bg-white dark:bg-zinc-900 rounded-full p-0.5 border border-zinc-200 dark:border-zinc-800 shadow-xs">
                    <ArrowRight className="w-3 h-3 text-amber-500" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
