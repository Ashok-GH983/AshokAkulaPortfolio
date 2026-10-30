import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Quote, Code2, Layers, Cpu } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100/30 dark:bg-zinc-900/30">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Authentic Bio */}
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 tracking-wider uppercase font-display mb-2">
              Background & Engineering Discipline
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 font-display mb-6">
              Strong computer science fundamentals, backed by rigorous problem-solving.
            </h2>

            <div className="space-y-4 text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              <p>
                {PORTFOLIO_DATA.personal.bio}
              </p>
              <p>
                My technical journey is grounded in discipline. Solving over 700 problems on CodeChef and 200+ on LeetCode (earning the 100 Days Badge) trained me to analyze time and space complexity instinctively before writing a single line of production code.
              </p>
              <p>
                During my internship with APSCHE / CSC India, I bridged algorithmic thinking with practical web development—designing full-stack MERN workflows with robust database indexing and transactional validation. As an AWS Certified Cloud Practitioner and OCI GenAI Professional, I build applications ready for modern cloud environments.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="mt-8 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Code2 className="w-4 h-4 text-amber-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 font-display">
                    900+ DSA Solved
                  </span>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Proven algorithmic stamina under strict contest time constraints.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Layers className="w-4 h-4 text-amber-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 font-display">
                    Full-Stack MERN
                  </span>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  End-to-end web apps with React.js, Express.js, and MongoDB.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Cpu className="w-4 h-4 text-amber-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 font-display">
                    Cloud & Java
                  </span>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  AWS Cloud, Oracle GenAI, Spring Boot MVC, and MySQL JPA.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Concrete Peer Testimonials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 tracking-wider uppercase font-display mb-2">
              Evaluations & Mentorship Notes
            </div>

            {PORTFOLIO_DATA.testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs relative"
              >
                <Quote className="w-5 h-5 text-amber-500/40 mb-3" />
                <p className="text-sm text-zinc-700 dark:text-zinc-300 italic mb-4 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
                  <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100 font-display">
                    {t.author}
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    {t.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
