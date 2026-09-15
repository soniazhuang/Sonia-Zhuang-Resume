import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Copy, Check, FileDown, ExternalLink, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import { RESUME_INFO } from '../data/resumeData';

interface HeroProps {
  onOpenPrintModal: () => void;
  onScrollToContact: () => void;
  onScrollToProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPrintModal, onScrollToContact, onScrollToProjects }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="overview" className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 bg-gradient-to-b from-white via-slate-50/70 to-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
          
          {/* Main Info & Elevator Pitch */}
          <div className="flex-1 space-y-5 max-w-3xl">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Actively Exploring Engineering Leadership Opportunities (Seattle / Hybrid / Remote)</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {RESUME_INFO.name}
              </h1>
              <div className="text-lg sm:text-xl font-bold text-indigo-600 flex flex-wrap items-center gap-2">
                <span>{RESUME_INFO.title}</span>
                <span className="text-slate-300 font-normal">|</span>
                <span className="text-slate-700 font-medium text-base">Distributed Systems & High-Scale Cloud</span>
              </div>
            </div>

            {/* Executive Bio */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {RESUME_INFO.summary}
            </p>

            {/* Company Credentials Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-medium shadow-2xs">
                <Building2 className="w-3.5 h-3.5 text-amber-600" />
                <span><strong>Amazon</strong> (10 yrs) — SDM & Sr. SDE</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-medium shadow-2xs">
                <Building2 className="w-3.5 h-3.5 text-sky-600" />
                <span><strong>Microsoft</strong> (6 yrs) — Edge JS Engine & Store</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-medium shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                <span>M.S. Computer Science (Uppsala University)</span>
              </div>
            </div>

            {/* Quick Contact & Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onScrollToContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all shadow-xs hover:shadow-md cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Sonia</span>
              </button>

              <button
                onClick={onScrollToProjects}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold text-sm transition-all shadow-xs hover:border-slate-400 cursor-pointer"
              >
                <span>View Architecture & Work</span>
                <Sparkles className="w-4 h-4 text-indigo-500" />
              </button>

              <button
                onClick={onOpenPrintModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-all cursor-pointer"
                title="Print or view text resume"
              >
                <FileDown className="w-4 h-4 text-slate-600" />
                <span>Resume View</span>
              </button>
            </div>
          </div>

          {/* Profile & Executive Quick Connect Card (No photo) */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm relative overflow-hidden space-y-5">
              
              {/* Executive Header Identity Badge */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 text-white flex items-center justify-center font-extrabold text-xl tracking-tight shadow-inner">
                    SZ
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white leading-tight">
                      {RESUME_INFO.name}
                    </h2>
                    <p className="text-xs text-indigo-200 font-medium mt-0.5">
                      {RESUME_INFO.title}
                    </p>
                  </div>
                </div>

                <div className="mt-3.5 pt-3 border-t border-white/15 flex items-center justify-between text-[11px]">
                  <span className="text-slate-300 font-medium">Amazon & Microsoft</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-semibold">
                    15+ Yrs Leadership
                  </span>
                </div>
              </div>

              {/* Quick Contact Details List */}
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="flex items-center gap-2 text-slate-700 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    {RESUME_INFO.location}
                  </span>
                  <span className="text-slate-400 text-[11px]">Relocation Open</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <a
                    href={`mailto:${RESUME_INFO.email}`}
                    className="flex items-center gap-2 text-slate-700 hover:text-indigo-600 font-medium truncate max-w-[170px]"
                    title={RESUME_INFO.email}
                  >
                    <Mail className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                    <span className="truncate">{RESUME_INFO.email}</span>
                  </a>
                  <button
                    onClick={() => handleCopy(RESUME_INFO.email, 'email')}
                    className="p-1 text-slate-500 hover:text-slate-800 hover:bg-white rounded transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <a
                    href={`tel:${RESUME_INFO.phone}`}
                    className="flex items-center gap-2 text-slate-700 hover:text-indigo-600 font-medium"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{RESUME_INFO.phone}</span>
                  </a>
                  <button
                    onClick={() => handleCopy(RESUME_INFO.phone, 'phone')}
                    className="p-1 text-slate-500 hover:text-slate-800 hover:bg-white rounded transition-colors cursor-pointer"
                    title="Copy phone to clipboard"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="flex items-center gap-2 text-slate-700 font-medium">
                    <Linkedin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <a
                    href={RESUME_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 text-[11px] font-semibold"
                  >
                    <span>Connect</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Quick direct action */}
              <button
                onClick={onScrollToContact}
                className="w-full py-2 px-3 text-xs font-semibold text-slate-700 hover:text-indigo-600 bg-slate-100 hover:bg-indigo-50 border border-slate-200/80 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Recruiter Message</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
