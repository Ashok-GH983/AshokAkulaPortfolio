/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsStrip } from './components/MetricsStrip';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { SkillsSection } from './components/SkillsSection';
import { TimelineSection } from './components/TimelineSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { DeployGuideDrawer } from './components/DeployGuideDrawer';
import { CertificateModal } from './components/CertificateModal';
import { Footer } from './components/Footer';
import { Project } from './data/portfolioData';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('portfolio_theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<{
    title: string;
    organization: string;
    period: string;
    image: string;
    description: string;
  } | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDeployGuideOpen, setIsDeployGuideOpen] = useState(false);

  // Sync theme with document element
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleExploreClick = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-200">
      {/* Fixed Sticky Header */}
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
      />

      {/* Main Content Area */}
      <main id="main-content" className="relative">
        {/* Hero Section with Kinetic Physics Stage */}
        <Hero
          onExploreClick={handleExploreClick}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Quantified Proof Metrics Row */}
        <MetricsStrip />

        {/* Selected Projects Showcase with System Diagrams */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* Skills & Enterprise Workflow Systems */}
        <SkillsSection />

        {/* Experience, Education & Milestones */}
        <TimelineSection onSelectCertificate={(cert) => setSelectedCertificate(cert)} />

        {/* Background Narrative & Testimonials */}
        <AboutSection />

        {/* Contact & Mailto Inbound */}
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Quiet Footer */}
      <Footer
        onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Interactive Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* High-Resolution Certificate & Credential Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

      {/* Printable / Downloadable Resume Sheet */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Deployment & Personalization Checklist Drawer */}
      <DeployGuideDrawer
        isOpen={isDeployGuideOpen}
        onClose={() => setIsDeployGuideOpen(false)}
      />
    </div>
  );
}
