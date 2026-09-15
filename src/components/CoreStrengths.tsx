import React from 'react';
import { CORE_STRENGTHS } from '../data/resumeData';
import { Users, Cloud, Database, Network, Smartphone, Award } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Users,
  Cloud,
  Database,
  Network,
  Smartphone,
  Award,
};

export const CoreStrengths: React.FC = () => {
  return (
    <section id="strengths" className="py-14 sm:py-18 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase">Executive Competencies</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
            Core Leadership & Technical Strengths
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Proven track record bridging deep hands-on software engineering with organizational leadership across Amazon and Microsoft at planetary scale.
          </p>
        </div>

        {/* 6-Grid Core Strengths */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_STRENGTHS.map((strength) => {
            const Icon = iconMap[strength.iconName] || Users;
            return (
              <div 
                key={strength.title}
                className="group p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-indigo-50 border border-slate-200/80 group-hover:border-indigo-200 text-indigo-600 flex items-center justify-center mb-4 transition-colors shadow-2xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {strength.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {strength.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400 group-hover:text-indigo-600 font-medium">
                  <span>Leadership Pillar</span>
                  <span className="text-slate-300 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
