import React, { useState } from 'react';
import { EXPERIENCE_HISTORY } from '../data/resumeData';
import { Briefcase, Building, ChevronDown, ChevronUp, CheckCircle, Calendar, MapPin } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [expandedCompanies, setExpandedCompanies] = useState<Record<string, boolean>>({
    'Amazon': true,
    'Microsoft': true,
  });

  const toggleCompany = (company: string) => {
    setExpandedCompanies(prev => ({
      ...prev,
      [company]: !prev[company]
    }));
  };

  return (
    <section id="experience" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase">
            Career History
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Professional Experience & Leadership
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            15+ years delivering mission-critical customer-facing software, scaling high-throughput pipelines, and developing top-tier engineering talent.
          </p>
        </div>

        {/* Company Containers */}
        <div className="space-y-10">
          {EXPERIENCE_HISTORY.map((comp) => {
            const isExpanded = expandedCompanies[comp.company] ?? true;

            return (
              <div 
                key={comp.company}
                className="bg-slate-50/60 rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
              >
                {/* Company Header */}
                <div 
                  onClick={() => toggleCompany(comp.company)}
                  className="p-6 bg-white border-b border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/80 transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg shadow-xs shrink-0">
                      {comp.company === 'Amazon' ? 'a' : 'ms'}
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl font-extrabold text-slate-900">
                          {comp.company}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                          {comp.totalPeriod}
                        </span>
                      </div>
                      <div className="text-sm font-semibold text-slate-700 mt-0.5">
                        {comp.overallRole}
                      </div>
                      <div className="text-xs text-slate-500 flex items-center gap-1.5 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{comp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                      {isExpanded ? 'Collapse' : 'Expand roles'}
                    </span>
                    <div className="p-1 rounded-lg text-slate-400 hover:text-slate-700">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {/* Company Summary */}
                <div className="px-6 py-3.5 bg-slate-100/60 text-xs sm:text-sm text-slate-600 border-b border-slate-200/60 font-medium">
                  {comp.summary}
                </div>

                {/* Roles List */}
                {isExpanded && (
                  <div className="p-6 space-y-8">
                    {comp.roles.map((role, idx) => (
                      <div key={idx} className="relative pl-6 sm:pl-8 border-l-2 border-indigo-200/80 last:border-transparent pb-2">
                        {/* Node circle */}
                        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-indigo-600"></div>

                        <div className="space-y-3">
                          {/* Role Header */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                              {role.title}
                            </h4>
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md shrink-0 w-fit">
                              <Calendar className="w-3 h-3" />
                              {role.period}
                            </span>
                          </div>

                          {/* Highlights */}
                          <ul className="space-y-2.5">
                            {role.highlights.map((h, hIdx) => (
                              <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
