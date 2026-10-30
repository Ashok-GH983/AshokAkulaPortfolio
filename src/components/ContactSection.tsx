import { useState } from 'react';
import { Mail, Copy, Check, Github, Linkedin, ArrowUpRight, FileText, Send, Phone, Code2, Download } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sound } from '../utils/audioHaptics';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export function ContactSection({ onOpenResume }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('Software Engineering Opportunity');
  const [customNote, setCustomNote] = useState('');

  const subjectPresets = [
    'Software Engineering Opportunity',
    'Full-Stack Developer Role',
    'Design Hackathon Collab',
    'Technical Discussion & Networking',
  ];

  const handleCopyEmail = () => {
    sound.playChime();
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick(650);
    const body = encodeURIComponent(
      `Hi Ashok,\n\n${customNote ? customNote : 'I reviewed your portfolio and would love to connect regarding an engineering role or technical collaboration.'}\n\nBest regards,`
    );
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(selectedSubject)}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Inbound Channels */}
          <div className="lg:col-span-6">
            <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 tracking-wider uppercase font-display mb-2">
              Get in Touch
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 font-display mb-4">
              Let's connect and build impactful software.
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed">
              Seeking software development engineer (SDE) and full-stack roles. Whether you have an open opportunity, want to discuss competitive programming, or explore my projects, I'd love to hear from you.
            </p>

            {/* Email & Phone Direct Action Card */}
            <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 shadow-xs mb-8 space-y-4">
              <div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold block mb-1 font-display">
                  Direct Email Inbound
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    onClick={() => sound.playClick(600)}
                    className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-mono truncate"
                  >
                    {PORTFOLIO_DATA.personal.email}
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="px-3.5 py-1.5 text-xs font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg flex items-center gap-1.5 self-start sm:self-auto transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-amber-500" />
                        <span className="text-amber-500">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-600 dark:text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-500" />
                  <span>Phone: {PORTFOLIO_DATA.personal.phone}</span>
                </span>
                <span className="text-zinc-400">Andhra Pradesh, India</span>
              </div>
            </div>

            {/* Resume & Verified Coding Profiles */}
            <div className="space-y-4">
              <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold block font-display">
                Official Profiles & Documents
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {/* Download PDF button */}
                <a
                  href={PORTFOLIO_DATA.personal.resumePdfUrl}
                  download="Ashok_Kumar_Akula_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playChime()}
                  className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resume PDF</span>
                </a>

                <button
                  onClick={() => {
                    sound.playClick(600);
                    onOpenResume();
                  }}
                  className="px-3.5 py-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-500" />
                  <span>Inspect CV Sheet</span>
                </button>

                <a
                  href={PORTFOLIO_DATA.personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playClick(680)}
                  className="px-3.5 py-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-lg flex items-center gap-1.5 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.socials.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playClick(680)}
                  className="px-3.5 py-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-lg flex items-center gap-1.5 transition-colors"
                >
                  <Code2 className="w-3.5 h-3.5 text-amber-500" />
                  <span>LeetCode (ashok983)</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playClick(680)}
                  className="px-3.5 py-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-lg flex items-center gap-1.5 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick-Draft Message Box */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 font-display mb-2">
              Dispatch a Message
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-5">
              Select a subject preset or customize your message to trigger a pre-filled email client link.
            </p>

            <form onSubmit={handleSendMail} className="space-y-4">
              <div>
                <label className="text-xs font-medium text-zinc-700 dark:text-zinc-300 block mb-2">
                  Topic / Purpose
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {subjectPresets.map((subj) => {
                    const isSelected = selectedSubject === subj;
                    return (
                      <button
                        key={subj}
                        type="button"
                        onClick={() => {
                          sound.playClick(500);
                          setSelectedSubject(subj);
                        }}
                        className={`p-2.5 text-xs text-left rounded-lg border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-amber-500 bg-amber-500/10 text-amber-900 dark:text-amber-300 font-semibold'
                            : 'border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700'
                        }`}
                      >
                        {subj}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label htmlFor="custom-message" className="text-xs font-medium text-zinc-700 dark:text-zinc-300 block mb-2">
                  Optional Message Note
                </label>
                <textarea
                  id="custom-message"
                  rows={4}
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="Hello Ashok, I came across your portfolio and would like to talk about..."
                  className="w-full p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 text-xs font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg shadow-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Open Mail Client with Draft</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
