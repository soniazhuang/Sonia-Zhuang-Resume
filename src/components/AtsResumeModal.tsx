import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download } from 'lucide-react';
import { RESUME_INFO, EXPERIENCE_HISTORY, EDUCATION_HISTORY } from '../data/resumeData';

interface AtsResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AtsResumeModal: React.FC<AtsResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const getFullResumeText = () => {
    return `SONIA ZHUANG
Seattle, WA · 425-246-4051 · soniazhuang@hotmail.com · linkedin.com/in/soniazhuang

SOFTWARE ENGINEERING MANAGER
Engineering leader with 15+ years of experience building and operating large-scale customer-facing software at Amazon and Microsoft. Experienced in leading engineering teams, driving architecture and execution, and delivering highly scalable cloud systems, data pipelines, and integrations. Strong hands-on technical background across Java, JavaScript, AWS and high-volume data processing.

CORE STRENGTHS
Engineering Leadership · Software Architecture · Distributed Systems · Cloud Services · Data Pipelines · API & Third-Party Integrations · Scalability & Availability · Operational Excellence · Technical Strategy · Agile Execution · Hiring & Mentoring · Performance Management

EXPERIENCE

AMAZON — Software Development Manager
Lead software engineers team building customer-facing software and services at Amazon scale. Drive technical strategy, architecture, execution, operational excellence, and engineer development across multiple concurrent projects.

Catalog Publishing — Search Engine Marketing | 2025 - 2026
• Led the migration of Amazon's 8-year-old catalog publishing platform to a modern publishing architecture supporting 3 billion product catalog data across 23 marketplaces and processing 400M+ catalog updates daily.
• Designed and drove the migration of publishing workflows supporting Shopping Ads integrations with Google, Bing, Pinterest, Tiktok and other external clients, coordinating requirements and technical dependencies across multiple teams.
• Delivered the entire catalog publishing system migration, followed by complete deprecation of the legacy platform.
• Drove architecture and operational decisions around data transformation, publishing workflows, failure handling, monitoring, scalability, and migration safety.
• Partnered with product managers, senior engineers, and partner teams to identify integration requirements and deliver reliable publishing capabilities at very high data volumes.

Grocery Ads — Engineering Manager | 2024 - 2025
• Managed tech team building grocery advertising experiences in partnership with Amazon Ads.
• Set technical direction, managed execution across multiple projects, and partnered with product and Ads engineering teams to deliver customer-facing advertising capabilities.
• Promoted 3 engineers within one year through structured mentorship, technical growth, and career development.

AMAZON — Senior Software Development Engineer
In-Store Mode / Grocery Promotions — Grocery | 2021– 2024
• Led development of a greenfield grocery In-Store Mode experience enabling customers to discover promotions across approximately 40K products for 800+ Grocery stores.
• Designed promotion retrieval and presentation workflows supporting multiple promotion types.
• Used caching and efficient data retrieval strategies to maintain responsive experiences at large product scale.
• Partnered with product, UX designer and engineering teams to define architecture, prioritize features, and deliver the new customer experience from the ground up.

Prescription Pet Food — Home Improvement | 2016 - 2020
• Designed and delivered a prescription-verification workflow enabling customers to purchase prescription pet food on Amazon.
• Built customer and service workflows spanning veterinarian search, prescription verification, order holds, checkout integration, and Subscribe & Save.
• Worked across frontend and backend components to coordinate asynchronous verification and order-processing flows.

Virtual Furniture Showroom — Home Improvement | 2017 - 2018
• Built a virtual showroom experience for furniture using photorealistic 3D technology.
• Led frontend architecture and implementation while mentoring engineers and coordinating technical execution across the project.

MICROSOFT — Software Engineer II
Developer Division, Microsoft Stores | 2010–2016
• Spent 4 years working on the JavaScript engine for Microsoft Edge, contributing to performance-critical browser technology.
• Subsequently worked on the Microsoft Store, building customer-facing software and services for a large-scale consumer platform.

EDUCATION
• Uppsala University, Sweden [2008 - 2010] - Master, Computer Science
• Beijing University of Chemical Technology, China [2002 - 2006] – Bachelor, Information Technology`;
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(getFullResumeText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-200 bg-slate-50 sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800 text-sm">
              ATS Standard Resume Format
            </span>
            <span className="text-xs px-2 py-0.5 rounded-md bg-slate-200 text-slate-700 font-medium">
              Print / Copy Friendly
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-600" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print to PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ATS Resume View Body */}
        <div className="overflow-y-auto p-8 sm:p-12 text-slate-900 bg-white selection:bg-slate-200 font-serif leading-relaxed text-sm">
          
          {/* Header */}
          <div className="text-center pb-6 border-b border-slate-300">
            <h1 className="text-2xl font-bold tracking-wide uppercase font-sans text-slate-950">
              Sonia Zhuang
            </h1>
            <div className="text-xs font-sans text-slate-600 mt-1.5 space-x-2">
              <span>Seattle, WA</span>
              <span>•</span>
              <span>425-246-4051</span>
              <span>•</span>
              <a href={`mailto:${RESUME_INFO.email}`} className="text-indigo-700 hover:underline">{RESUME_INFO.email}</a>
              <span>•</span>
              <a href={RESUME_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover:underline">LinkedIn</a>
            </div>
          </div>

          {/* Title & Summary */}
          <div className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 font-sans border-b border-slate-300 pb-1 mb-2">
              Software Engineering Manager
            </h2>
            <p className="text-xs text-slate-700 font-sans leading-normal">
              {RESUME_INFO.summary}
            </p>
          </div>

          {/* Core Strengths */}
          <div className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 font-sans border-b border-slate-300 pb-1 mb-2">
              Core Strengths
            </h2>
            <p className="text-xs text-slate-700 font-sans leading-relaxed">
              Engineering Leadership • Software Architecture • Distributed Systems • Cloud Services • Data Pipelines • API & Third-Party Integrations • Scalability & Availability • Operational Excellence • Technical Strategy • Agile Execution • Hiring & Mentoring • Performance Management
            </p>
          </div>

          {/* Experience */}
          <div className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 font-sans border-b border-slate-300 pb-1 mb-3">
              Experience
            </h2>

            {/* Amazon SDM */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline font-sans">
                  <h3 className="text-sm font-bold text-slate-900">AMAZON</h3>
                  <span className="text-xs font-medium text-slate-600">Seattle, WA</span>
                </div>
                <div className="text-xs font-bold text-slate-800 font-sans italic">
                  Software Development Manager
                </div>
                <p className="text-xs text-slate-600 font-sans mt-0.5">
                  Lead software engineers team building customer-facing software and services at Amazon scale. Drive technical strategy, architecture, execution, operational excellence, and engineer development across multiple concurrent projects.
                </p>

                {/* Role 1 */}
                <div className="mt-3">
                  <div className="flex justify-between items-baseline font-sans">
                    <span className="text-xs font-bold text-slate-900">Catalog Publishing — Search Engine Marketing</span>
                    <span className="text-xs text-slate-600 font-medium">2025 – 2026</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-xs text-slate-700 font-sans">
                    <li>Led the migration of Amazon's 8-year-old catalog publishing platform to a modern publishing architecture supporting 3 billion product catalog data across 23 marketplaces and processing 400M+ catalog updates daily.</li>
                    <li>Designed and drove the migration of publishing workflows supporting Shopping Ads integrations with Google, Bing, Pinterest, Tiktok and other external clients, coordinating requirements and technical dependencies across multiple teams.</li>
                    <li>Delivered the entire catalog publishing system migration, followed by complete deprecation of the legacy platform.</li>
                    <li>Drove architecture and operational decisions around data transformation, publishing workflows, failure handling, monitoring, scalability, and migration safety.</li>
                    <li>Partnered with product managers, senior engineers, and partner teams to identify integration requirements and deliver reliable publishing capabilities at very high data volumes.</li>
                  </ul>
                </div>

                {/* Role 2 */}
                <div className="mt-3">
                  <div className="flex justify-between items-baseline font-sans">
                    <span className="text-xs font-bold text-slate-900">Grocery Ads — Engineering Manager</span>
                    <span className="text-xs text-slate-600 font-medium">2024 – 2025</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-xs text-slate-700 font-sans">
                    <li>Managed tech team building grocery advertising experiences in partnership with Amazon Ads.</li>
                    <li>Set technical direction, managed execution across multiple projects, and partnered with product and Ads engineering teams to deliver customer-facing advertising capabilities.</li>
                    <li>Promoted 3 engineers within one year through structured mentorship, technical growth, and career development.</li>
                  </ul>
                </div>
              </div>

              {/* Amazon Sr SDE */}
              <div className="pt-2">
                <div className="text-xs font-bold text-slate-800 font-sans italic">
                  Senior Software Development Engineer
                </div>

                <div className="mt-2">
                  <div className="flex justify-between items-baseline font-sans">
                    <span className="text-xs font-bold text-slate-900">In-Store Mode / Grocery Promotions — Grocery</span>
                    <span className="text-xs text-slate-600 font-medium">2021 – 2024</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-xs text-slate-700 font-sans">
                    <li>Led development of a greenfield grocery In-Store Mode experience enabling customers to discover promotions across approximately 40K products for 800+ Grocery stores.</li>
                    <li>Designed promotion retrieval and presentation workflows supporting multiple promotion types.</li>
                    <li>Used caching and efficient data retrieval strategies to maintain responsive experiences at large product scale.</li>
                    <li>Partnered with product, UX designer and engineering teams to define architecture, prioritize features, and deliver the new customer experience from the ground up.</li>
                  </ul>
                </div>

                <div className="mt-3">
                  <div className="flex justify-between items-baseline font-sans">
                    <span className="text-xs font-bold text-slate-900">Prescription Pet Food — Home Improvement</span>
                    <span className="text-xs text-slate-600 font-medium">2016 – 2020</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-xs text-slate-700 font-sans">
                    <li>Designed and delivered a prescription-verification workflow enabling customers to purchase prescription pet food on Amazon.</li>
                    <li>Built customer and service workflows spanning veterinarian search, prescription verification, order holds, checkout integration, and Subscribe & Save.</li>
                    <li>Worked across frontend and backend components to coordinate asynchronous verification and order-processing flows.</li>
                  </ul>
                </div>

                <div className="mt-3">
                  <div className="flex justify-between items-baseline font-sans">
                    <span className="text-xs font-bold text-slate-900">Virtual Furniture Showroom — Home Improvement</span>
                    <span className="text-xs text-slate-600 font-medium">2017 – 2018</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-xs text-slate-700 font-sans">
                    <li>Built a virtual showroom experience for furniture using photorealistic 3D technology.</li>
                    <li>Led frontend architecture and implementation while mentoring engineers and coordinating technical execution across the project.</li>
                  </ul>
                </div>
              </div>

              {/* Microsoft */}
              <div className="pt-3">
                <div className="flex justify-between items-baseline font-sans">
                  <h3 className="text-sm font-bold text-slate-900">MICROSOFT</h3>
                  <span className="text-xs font-medium text-slate-600">Redmond, WA</span>
                </div>
                <div className="flex justify-between items-baseline font-sans">
                  <span className="text-xs font-bold text-slate-800 italic">Software Engineer II — Developer Division, Microsoft Stores</span>
                  <span className="text-xs text-slate-600 font-medium">2010 – 2016</span>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-xs text-slate-700 font-sans">
                  <li>Spent 4 years working on the JavaScript engine for Microsoft Edge, contributing to performance-critical browser technology.</li>
                  <li>Subsequently worked on the Microsoft Store, building customer-facing software and services for a large-scale consumer platform.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mt-6 pt-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 font-sans border-b border-slate-300 pb-1 mb-2">
              Education
            </h2>
            <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-800 font-sans">
              <li><strong>Uppsala University, Sweden</strong> [2008 – 2010] – Master, Computer Science</li>
              <li><strong>Beijing University of Chemical Technology, China</strong> [2002 – 2006] – Bachelor, Information Technology</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};
