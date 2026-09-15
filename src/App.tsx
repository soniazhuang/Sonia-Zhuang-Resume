import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { CoreStrengths } from './components/CoreStrengths';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationAndSkills } from './components/Education';
import { RecruiterContact } from './components/RecruiterContact';
import { Footer } from './components/Footer';
import { AtsResumeModal } from './components/AtsResumeModal';

export default function App() {
  const [printModalOpen, setPrintModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Sticky Header with Navigation and Quick Actions */}
      <Header 
        onOpenPrintModal={() => setPrintModalOpen(true)}
        onScrollToSection={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenPrintModal={() => setPrintModalOpen(true)}
          onScrollToContact={() => scrollToSection('contact')}
          onScrollToProjects={() => scrollToSection('projects')}
        />

        {/* Career Scale & Impact Metrics Bar */}
        <MetricsBar />

        {/* Featured Projects with Real Screenshots & Deep-Dive Dialogs */}
        <ProjectsShowcase />

        {/* Professional Experience History (Amazon & Microsoft) */}
        <ExperienceTimeline />

        {/* Core Leadership & Engineering Strengths */}
        <CoreStrengths />

        {/* Education & Technical Domain Mastery */}
        <EducationAndSkills />

        {/* Dedicated Recruiter Contact Hub */}
        <RecruiterContact />
      </main>

      {/* Footer */}
      <Footer 
        onScrollToTop={scrollToTop}
        onOpenPrintModal={() => setPrintModalOpen(true)}
      />

      {/* ATS-Friendly Printable Resume Modal */}
      <AtsResumeModal
        isOpen={printModalOpen}
        onClose={() => setPrintModalOpen(false)}
      />
    </div>
  );
}
