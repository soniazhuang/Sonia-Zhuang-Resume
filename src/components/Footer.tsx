import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Heart } from 'lucide-react';
import { RESUME_INFO } from '../data/resumeData';

interface FooterProps {
  onScrollToTop: () => void;
  onOpenPrintModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop, onOpenPrintModal }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          <div className="text-center md:text-left">
            <div className="text-lg font-bold text-white tracking-tight">
              {RESUME_INFO.name}
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              {RESUME_INFO.title} • {RESUME_INFO.location}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium">
            <a href={`mailto:${RESUME_INFO.email}`} className="hover:text-white transition-colors">
              {RESUME_INFO.email}
            </a>
            <a href={`tel:${RESUME_INFO.phone}`} className="hover:text-white transition-colors">
              {RESUME_INFO.phone}
            </a>
            <a href={RESUME_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn Profile
            </a>
            <button
              onClick={onOpenPrintModal}
              className="hover:text-white transition-colors cursor-pointer"
            >
              ATS Print View
            </button>
          </div>

          {/* Back to top */}
          <button
            onClick={onScrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top</span>
          </button>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {RESUME_INFO.name}. All rights reserved.
          </div>
          <div className="text-[11px] text-slate-600">
            Portfolio & Resume Showcase • Built for Desktop & Mobile
          </div>
        </div>
      </div>
    </footer>
  );
};
