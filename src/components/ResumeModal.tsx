import { useEffect } from 'react';
import { X, Printer, Download, MapPin, Mail, Globe, ExternalLink, Phone, Award, CheckCircle2, BookOpen } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sound } from '../utils/audioHaptics';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
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

  const handlePrint = () => {
    sound.playChime();
    window.print();
  };

  const handleDownloadJSON = () => {
    sound.playChime();
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(PORTFOLIO_DATA, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'Ashok_Kumar_Akula_Resume_Data.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          sound.playClick(400);
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Modal Controls Bar */}
        <div className="flex flex-wrap items-center justify-between px-6 py-3.5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 shrink-0 gap-3 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 font-display">
              Curriculum Vitae
            </span>
            <span className="text-xs font-mono text-amber-600 dark:text-amber-400">· Official PDF Available</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Direct PDF Download Link */}
            <a
              href={PORTFOLIO_DATA.personal.resumePdfUrl}
              download="Ashok_Kumar_Akula_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playChime()}
              className="px-3 py-1.5 text-xs font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-lg flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Official PDF</span>
            </a>

            {/* Open Raw PDF in New Tab */}
            <a
              href={PORTFOLIO_DATA.personal.resumePdfUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playClick(600)}
              className="px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-200/80 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View Raw PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="hidden sm:flex px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-200/80 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-lg items-center gap-1.5 transition-colors cursor-pointer"
              title="Print formatted sheet"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={handleDownloadJSON}
              className="hidden md:flex px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-200/80 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-lg items-center gap-1.5 transition-colors cursor-pointer"
              title="Export structured JSON"
            >
              <Download className="w-3.5 h-3.5" />
              <span>JSON</span>
            </button>

            <button
              onClick={() => {
                sound.playClick(450);
                onClose();
              }}
              aria-label="Close resume viewer"
              className="p-1.5 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable & Readable Resume Sheet */}
        <div className="overflow-y-auto p-6 sm:p-10 font-sans text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-900 space-y-7 print:p-0 print:overflow-visible">
          {/* Header */}
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-5">
            <h1 id="resume-title" className="text-3xl font-extrabold tracking-tight font-display mb-1">
              {PORTFOLIO_DATA.personal.name}
            </h1>
            <div className="text-base font-semibold text-amber-600 dark:text-amber-400 mb-3 font-display">
              {PORTFOLIO_DATA.personal.role}
            </div>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-mono text-zinc-600 dark:text-zinc-400">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-zinc-400" />
                <span>{PORTFOLIO_DATA.personal.phone}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                <span>{PORTFOLIO_DATA.personal.email}</span>
              </span>
              <span aria-hidden="true">·</span>
              <a
                href={PORTFOLIO_DATA.personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:underline flex items-center gap-1"
              >
                <Globe className="w-3.5 h-3.5 text-zinc-400" />
                <span>linkedin.com/in/ashok-kumar-akula-8609962b5/</span>
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={PORTFOLIO_DATA.personal.socials.github}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                <span>github.com/Ashok-GH983</span>
              </a>
            </div>
          </div>

          {/* Objective */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1.5 font-display">
              Objective
            </h2>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Final-year IT undergraduate with a solid foundation in Java, OOP, Data Structures & Algorithms, SQL, and full-stack web development using React.js and Spring Boot. Familiar with JUnit and software development concepts, with proven problem-solving and coding skills. Seeking an opportunity to apply technical skills and continue developing as a software professional.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3 font-display">
              Education
            </h2>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                <div>
                  <div className="font-bold font-display text-sm">
                    Lakireddy Bali Reddy College of Engineering (Autonomous)
                  </div>
                  <div className="text-zinc-600 dark:text-zinc-400">
                    B.Tech in Information Technology · <span className="font-semibold text-amber-600 dark:text-amber-400">CGPA: 8.90</span>
                  </div>
                </div>
                <div className="font-mono text-zinc-400 text-[11px] sm:text-right mt-1 sm:mt-0">
                  Mylavaram, AP · Aug 2023 – Present
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                <div>
                  <div className="font-bold font-display">Bharat Junior College</div>
                  <div className="text-zinc-600 dark:text-zinc-400">
                    Intermediate – MPC · <span className="font-semibold text-amber-600 dark:text-amber-400">98%</span>
                  </div>
                </div>
                <div className="font-mono text-zinc-400 text-[11px] sm:text-right">
                  Vissannapeta · 2023
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                <div>
                  <div className="font-bold font-display">Little Star UP School</div>
                  <div className="text-zinc-600 dark:text-zinc-400">
                    SSC · <span className="font-semibold text-amber-600 dark:text-amber-400">10 GPA</span>
                  </div>
                </div>
                <div className="font-mono text-zinc-400 text-[11px] sm:text-right">
                  Vissannapeta · 2021
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2 font-display">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40">
                <span className="font-bold text-zinc-900 dark:text-zinc-100 block mb-0.5">Languages & Core:</span>
                <span className="text-zinc-600 dark:text-zinc-400">Java, SQL, Data Structures & Algorithms, OOP, DBMS, OS, Computer Networks</span>
              </div>
              <div className="p-2.5 rounded-lg border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40">
                <span className="font-bold text-zinc-900 dark:text-zinc-100 block mb-0.5">Web & Databases:</span>
                <span className="text-zinc-600 dark:text-zinc-400">React.js, Node.js, Spring Boot (basics), HTML, CSS, MySQL, Firebase, MongoDB</span>
              </div>
            </div>
          </div>

          {/* Internship */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3 font-display">
              Internship Experience
            </h2>
            <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-950/40">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                <div className="text-sm font-bold font-display">Full-Stack Development Intern</div>
                <div className="text-xs font-mono text-zinc-400">APSCHE / CSC India · 2025</div>
              </div>
              <div className="text-xs font-mono text-amber-600 dark:text-amber-400 mb-2">
                MERN Stack Internship | React.js, Node.js, Express.js, MongoDB
              </div>
              <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-300">
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-500">•</span>
                  <span>Completed a 2-month structured internship building web applications with the MERN stack, working on frontend components and backend APIs.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-500">•</span>
                  <span>Developed a Land Rental Web Application implementing property listing, search, and rental request features, including form validation and error handling.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-500">•</span>
                  <span>Debugged functional issues across frontend and backend layers and verified application behavior against expected outcomes before deployment.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3 font-display">
              Featured Projects
            </h2>
            <div className="space-y-3">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id} className="p-3 rounded-lg border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-xs font-bold font-display">{proj.title}</span>
                    <span className="text-[10px] font-mono text-zinc-400">{proj.tech.slice(0, 3).join(', ')}</span>
                  </div>
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-300 mb-1 leading-snug">
                    {proj.problem}
                  </p>
                  <p className="text-[11px] text-amber-600 dark:text-amber-400 font-medium leading-snug">
                    → {proj.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3 font-display">
              Certifications & Achievements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 space-y-1.5">
                <div className="font-bold text-zinc-900 dark:text-zinc-100">Certifications</div>
                <div className="text-zinc-600 dark:text-zinc-300 flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <span>AWS Certified Cloud Practitioner (2026)</span>
                </div>
                <div className="text-zinc-600 dark:text-zinc-300 flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <span>OCI 2025 Certified Generative AI Professional (2025)</span>
                </div>
                <div className="text-zinc-600 dark:text-zinc-300 flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <span>Cisco Networking Academy (Networking, OS)</span>
                </div>
              </div>

              <div className="p-3 rounded-lg border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 space-y-1.5">
                <div className="font-bold text-zinc-900 dark:text-zinc-100">Coding Honors</div>
                <div className="text-zinc-600 dark:text-zinc-300 flex items-start gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>900+ DSA Solved:</strong> 700+ CodeChef (Problem Solver) & 200+ LeetCode (100 Days Badge)</span>
                </div>
                <div className="text-zinc-600 dark:text-zinc-300 flex items-start gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>2nd Place:</strong> College DSA Coding Contest organized by SKELO with cash prize</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
