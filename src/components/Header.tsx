import React, { useState } from 'react';
import { Mail, Phone, MapPin, Printer, Menu, X, ArrowUpRight, Linkedin, Briefcase } from 'lucide-react';
import { RESUME_INFO } from '../data/resumeData';

interface HeaderProps {
  onOpenPrintModal: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPrintModal, onScrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Overview', id: 'overview' },
    { label: 'Featured Work', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Core Strengths', id: 'strengths' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onScrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo & Identity */}
          <div 
            onClick={() => handleNavClick('overview')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white flex items-center justify-center font-bold text-lg tracking-tight shadow-xs group-hover:scale-105 transition-transform">
              SZ
            </div>
            <div>
              <div className="font-bold text-slate-900 text-base leading-tight group-hover:text-indigo-600 transition-colors">
                {RESUME_INFO.name}
              </div>
              <div className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                <span>{RESUME_INFO.title}</span>
                <span className="text-slate-300">•</span>
                <span className="inline-flex items-center text-emerald-600 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1 animate-pulse"></span>
                  Seattle, WA
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenPrintModal}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer border border-slate-200/80 shadow-xs"
              title="View & Print ATS Resume Format"
            >
              <Printer className="w-3.5 h-3.5 text-slate-600" />
              <span>Print / ATS View</span>
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-all cursor-pointer shadow-xs hover:shadow-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Recruiter Hub</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenPrintModal}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg border border-slate-200"
              aria-label="Print resume"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                handleNavClick('contact');
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xs"
            >
              <Mail className="w-4 h-4" />
              <span>Recruiter Inquiry Form</span>
            </button>
            <div className="flex items-center justify-between text-xs text-slate-500 px-2 pt-1">
              <a href={`tel:${RESUME_INFO.phone}`} className="flex items-center gap-1 hover:text-indigo-600">
                <Phone className="w-3.5 h-3.5" />
                {RESUME_INFO.phone}
              </a>
              <a href={`mailto:${RESUME_INFO.email}`} className="flex items-center gap-1 hover:text-indigo-600">
                <Mail className="w-3.5 h-3.5" />
                {RESUME_INFO.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
