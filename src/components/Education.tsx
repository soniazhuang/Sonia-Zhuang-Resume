import React from 'react';
import { EDUCATION_HISTORY, TECHNICAL_SKILLS } from '../data/resumeData';
import { GraduationCap, Award, MapPin, Calendar, CheckCircle2, Code2 } from 'lucide-react';

export const EducationAndSkills: React.FC = () => {
  return (
    <section id="education" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Education Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase">
                Academic Background
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
                Education & Degrees
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
                Advanced theoretical foundation in distributed computer science and software engineering.
              </p>
            </div>

            <div className="space-y-4">
              {EDUCATION_HISTORY.map((edu, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900 leading-tight">
                        {edu.institution}
                      </h3>
                      <div className="text-sm font-semibold text-indigo-600">
                        {edu.degree}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-500 pt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-400" />
                          {edu.period}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {edu.location}
                        </span>
                      </div>
                      {edu.notes && (
                        <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                          {edu.notes}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills & Domains Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase">
                Technical Mastery
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
                Core Domains & Technologies
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
                Synthesizing architectural excellence, cloud systems, and engineering management.
              </p>
            </div>

            <div className="space-y-4">
              {TECHNICAL_SKILLS.map((skillGroup, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs"
                >
                  <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-indigo-600" />
                    <span>{skillGroup.category}</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item) => (
                      <span 
                        key={item}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200/80 hover:bg-indigo-50 hover:text-indigo-800 hover:border-indigo-200 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
