import { useState, useRef, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, RotateCcw, Play, Check, Code2, Phone, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sound } from '../utils/audioHaptics';

interface HeroProps {
  onExploreClick: () => void;
  onOpenResume: () => void;
}

interface SpringNode {
  id: string;
  label: string;
  subtext: string;
  tag: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetX: number;
  targetY: number;
  color: string;
}

export function Hero({ onExploreClick, onOpenResume }: HeroProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [motionScale, setMotionScale] = useState<1 | 0.5 | 0>(1);
  const [activeTokenId, setActiveTokenId] = useState<string>('token-1');

  // Interactive Physics Stage State
  const containerRef = useRef<HTMLDivElement>(null);
  const [nodes, setNodes] = useState<SpringNode[]>([
    {
      id: 'token-1',
      label: 'DSA Problem Solver',
      subtext: '900+ Solved · CodeChef & LeetCode',
      tag: 'Rank 2nd SKELO',
      x: 30,
      y: 25,
      vx: 0,
      vy: 0,
      targetX: 30,
      targetY: 25,
      color: 'border-amber-500/80 bg-amber-500/10 text-amber-500',
    },
    {
      id: 'token-2',
      label: 'Full-Stack MERN & Java',
      subtext: 'React.js · Node · Spring Boot MVC',
      tag: 'APSCHE Intern',
      x: 180,
      y: 65,
      vx: 0,
      vy: 0,
      targetX: 180,
      targetY: 65,
      color: 'border-zinc-400 dark:border-zinc-600 bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200',
    },
    {
      id: 'token-3',
      label: 'AWS & Oracle GenAI',
      subtext: 'AWS Cloud · OCI 2025 GenAI Pro',
      tag: '2x Certified',
      x: 50,
      y: 165,
      vx: 0,
      vy: 0,
      targetX: 50,
      targetY: 165,
      color: 'border-zinc-400 dark:border-zinc-600 bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200',
    },
    {
      id: 'token-4',
      label: 'Database Systems',
      subtext: 'MySQL · MongoDB · Firebase Realtime',
      tag: 'ACID / JDBC',
      x: 200,
      y: 195,
      vx: 0,
      vy: 0,
      targetX: 200,
      targetY: 195,
      color: 'border-amber-500/80 bg-amber-500/10 text-amber-500',
    },
  ]);

  const draggingNodeId = useRef<string | null>(null);
  const dragOffset = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Spring physics simulation loop
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.05) * motionScale;
      lastTime = currentTime;

      if (dt > 0) {
        setNodes((prevNodes) =>
          prevNodes.map((node) => {
            if (node.id === draggingNodeId.current) {
              return node;
            }

            // Spring force towards target
            const k = 220; // stiffness
            const c = 22;  // damping
            const dx = node.targetX - node.x;
            const dy = node.targetY - node.y;

            const ax = k * dx - c * node.vx;
            const ay = k * dy - c * node.vy;

            const newVx = node.vx + ax * dt;
            const newVy = node.vy + ay * dt;

            return {
              ...node,
              x: node.x + newVx * dt,
              y: node.y + newVy * dt,
              vx: newVx,
              vy: newVy,
            };
          })
        );
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [motionScale]);

  const handlePointerDown = (id: string, e: React.PointerEvent) => {
    sound.playSpring(480);
    setActiveTokenId(id);
    draggingNodeId.current = id;
    const targetNode = nodes.find((n) => n.id === id);
    if (targetNode) {
      dragOffset.current = {
        x: e.clientX - targetNode.x,
        y: e.clientY - targetNode.y,
      };
    }
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!draggingNodeId.current) return;
    const currentId = draggingNodeId.current;
    const newX = Math.max(10, Math.min(320, e.clientX - dragOffset.current.x));
    const newY = Math.max(10, Math.min(270, e.clientY - dragOffset.current.y));

    setNodes((prev) =>
      prev.map((n) =>
        n.id === currentId ? { ...n, x: newX, y: newY, vx: 0, vy: 0 } : n
      )
    );
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (draggingNodeId.current) {
      sound.playClick(380);
      draggingNodeId.current = null;
    }
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignored
    }
  };

  const handleResetStage = () => {
    sound.playChime();
    setNodes([
      {
        id: 'token-1',
        label: 'DSA Problem Solver',
        subtext: '900+ Solved · CodeChef & LeetCode',
        tag: 'Rank 2nd SKELO',
        x: 30,
        y: 25,
        vx: 0,
        vy: 0,
        targetX: 30,
        targetY: 25,
        color: 'border-amber-500/80 bg-amber-500/10 text-amber-500',
      },
      {
        id: 'token-2',
        label: 'Full-Stack MERN & Java',
        subtext: 'React.js · Node · Spring Boot MVC',
        tag: 'APSCHE Intern',
        x: 180,
        y: 65,
        vx: 0,
        vy: 0,
        targetX: 180,
        targetY: 65,
        color: 'border-zinc-400 dark:border-zinc-600 bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200',
      },
      {
        id: 'token-3',
        label: 'AWS & Oracle GenAI',
        subtext: 'AWS Cloud · OCI 2025 GenAI Pro',
        tag: '2x Certified',
        x: 50,
        y: 165,
        vx: 0,
        vy: 0,
        targetX: 50,
        targetY: 165,
        color: 'border-zinc-400 dark:border-zinc-600 bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200',
      },
      {
        id: 'token-4',
        label: 'Database Systems',
        subtext: 'MySQL · MongoDB · Firebase Realtime',
        tag: 'ACID / JDBC',
        x: 200,
        y: 195,
        vx: 0,
        vy: 0,
        targetX: 200,
        targetY: 195,
        color: 'border-amber-500/80 bg-amber-500/10 text-amber-500',
      },
    ]);
  };

  const handleCopyEmail = () => {
    sound.playChime();
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Subtle Coordinate Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Split Hero: Left Column Typography, Right Column Kinetic Laboratory */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Architectural Typography & Intention */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Unboxed natural editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-400 tracking-wide mb-4">
              <span>B.Tech IT (8.90 CGPA)</span>
              <span aria-hidden="true">·</span>
              <span>Full-Stack & Cloud Certified</span>
              <span aria-hidden="true">·</span>
              <span>Available for SDE Roles</span>
            </div>

            {/* Display Headline with text-wrap: balance */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 font-display leading-[1.08] mb-6"
              style={{ textWrap: 'balance' }}
            >
              Building high-reliability web systems and intelligent tools.
            </h1>

            {/* Lead Prose */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl mb-8">
              Final-year IT student at Lakireddy Bali Reddy College of Engineering with 900+ DSA problems solved across CodeChef and LeetCode. Certified in AWS Cloud and Oracle GenAI, with practical experience delivering full-stack MERN platforms and Spring Boot enterprise applications.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-9">
              <button
                onClick={() => {
                  sound.playClick(650);
                  onExploreClick();
                }}
                className="px-6 py-3 text-sm font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg shadow-sm transition-all duration-150 flex items-center gap-2"
              >
                <span>View Projects & Systems</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  sound.playClick(500);
                  onOpenResume();
                }}
                className="px-5 py-3 text-sm font-medium text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-lg transition-colors flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-amber-500" />
                <span>Inspect Resume PDF</span>
              </button>
            </div>

            {/* Unboxed Metadata & Direct Channels */}
            <div className="pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 w-full flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-zinc-500 dark:text-zinc-400">
              <button
                onClick={handleCopyEmail}
                className="hover:text-zinc-900 dark:hover:text-zinc-100 flex items-center gap-1.5 transition-colors font-medium cursor-pointer"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-amber-500" />
                    <span className="text-amber-500 font-semibold">Copied to clipboard</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{PORTFOLIO_DATA.personal.email}</span>
                  </>
                )}
              </button>

              <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">·</span>

              <a
                href={PORTFOLIO_DATA.personal.socials.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick(720)}
                className="hover:text-zinc-900 dark:hover:text-zinc-100 flex items-center gap-1.5 transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-zinc-400" />
                <span>GitHub (Ashok-GH983)</span>
              </a>

              <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">·</span>

              <a
                href={PORTFOLIO_DATA.personal.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick(720)}
                className="hover:text-zinc-900 dark:hover:text-zinc-100 flex items-center gap-1.5 transition-colors"
              >
                <Code2 className="w-3.5 h-3.5 text-amber-500" />
                <span>LeetCode (ashok983)</span>
              </a>

              <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">·</span>

              <a
                href={PORTFOLIO_DATA.personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick(720)}
                className="hover:text-zinc-900 dark:hover:text-zinc-100 flex items-center gap-1.5 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-zinc-400" />
                <span>LinkedIn</span>
              </a>

              <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">·</span>

              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-zinc-400" />
                <span>+91 7416164984</span>
              </span>
            </div>
          </div>

          {/* Right Column: Signature Moment - Kinetic Design Laboratory */}
          <div className="lg:col-span-5 w-full">
            <div className="relative p-5 sm:p-6 rounded-2xl bg-zinc-100/70 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 shadow-sm backdrop-blur-xs">
              {/* Header Bar of Laboratory */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-zinc-200/80 dark:border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 font-display">
                    Interactive Engineering Matrix
                  </span>
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono">
                    (Live Physics)
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleResetStage}
                    title="Reset Spring Coordinates"
                    className="p-1.5 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded transition-colors text-xs flex items-center gap-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span className="text-[11px] hidden sm:inline">Reset</span>
                  </button>
                </div>
              </div>

              {/* Interactive Spring Canvas Field */}
              <div
                ref={containerRef}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                className="relative h-[310px] w-full rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200/90 dark:border-zinc-800/90 overflow-hidden cursor-crosshair select-none touch-none"
              >
                {/* Visual coordinate axes */}
                <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08] pointer-events-none"
                  style={{
                    backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />

                {/* SVG Spring Tension Lines connecting to target anchors */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
                  {nodes.map((n) => (
                    <line
                      key={`line-${n.id}`}
                      x1={n.targetX + 60}
                      y1={n.targetY + 20}
                      x2={n.x + 60}
                      y2={n.y + 20}
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                      className="text-amber-500/40 dark:text-amber-400/40"
                    />
                  ))}
                </svg>

                {/* Draggable Spring Nodes */}
                {nodes.map((node) => {
                  const isSelected = activeTokenId === node.id;
                  return (
                    <div
                      key={node.id}
                      onPointerDown={(e) => handlePointerDown(node.id, e)}
                      style={{
                        transform: `translate3d(${node.x}px, ${node.y}px, 0)`,
                        touchAction: 'none',
                      }}
                      className={`absolute cursor-grab active:cursor-grabbing p-3 rounded-xl border backdrop-blur-md transition-shadow shadow-xs active:shadow-md ${
                        isSelected
                          ? 'border-amber-500 ring-2 ring-amber-500/20 bg-zinc-50/95 dark:bg-zinc-900/95'
                          : 'border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3 mb-1">
                        <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 font-display whitespace-nowrap">
                          {node.label}
                        </span>
                        <span className="text-[10px] font-mono font-medium text-amber-600 dark:text-amber-400 whitespace-nowrap">
                          {node.tag}
                        </span>
                      </div>
                      <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
                        {node.subtext}
                      </div>
                    </div>
                  );
                })}

                {/* Bottom Canvas Overlay Tip */}
                <div className="absolute bottom-2.5 right-3 text-[10px] text-zinc-400 dark:text-zinc-500 font-mono pointer-events-none">
                  Drag & toss cards · RK4 Spring Physics
                </div>
              </div>

              {/* Stage Controls: Motion Speed Budget & Interactive Haptic Tester */}
              <div className="mt-4 pt-3.5 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                {/* Motion Scale segmented control */}
                <div className="flex items-center gap-1.5">
                  <span className="text-zinc-500 dark:text-zinc-400 font-medium">Motion Speed:</span>
                  <div className="flex items-center p-0.5 bg-zinc-200/70 dark:bg-zinc-800/70 rounded-md">
                    <button
                      onClick={() => {
                        sound.playClick(500);
                        setMotionScale(1);
                      }}
                      className={`px-2 py-1 text-[11px] font-medium rounded transition-colors ${
                        motionScale === 1
                          ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-xs'
                          : 'text-zinc-600 dark:text-zinc-400'
                      }`}
                    >
                      1.0x Real
                    </button>
                    <button
                      onClick={() => {
                        sound.playClick(440);
                        setMotionScale(0.5);
                      }}
                      className={`px-2 py-1 text-[11px] font-medium rounded transition-colors ${
                        motionScale === 0.5
                          ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-xs'
                          : 'text-zinc-600 dark:text-zinc-400'
                      }`}
                    >
                      0.5x Slow
                    </button>
                    <button
                      onClick={() => {
                        sound.playClick(320);
                        setMotionScale(0);
                      }}
                      className={`px-2 py-1 text-[11px] font-medium rounded transition-colors ${
                        motionScale === 0
                          ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-xs'
                          : 'text-zinc-600 dark:text-zinc-400'
                      }`}
                      title="Reduced motion mode"
                    >
                      0x Static
                    </button>
                  </div>
                </div>

                {/* Micro-Sound trigger */}
                <button
                  onClick={() => sound.playSpring(520)}
                  className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 font-medium cursor-pointer"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Test 440Hz Haptic</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
