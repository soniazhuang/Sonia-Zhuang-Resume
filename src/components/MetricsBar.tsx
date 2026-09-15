import React from 'react';
import { IMPACT_METRICS } from '../data/resumeData';
import { Database, Zap, Store, Users, Award } from 'lucide-react';

const icons = [Award, Database, Zap, Store, Users];

export const MetricsBar: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white py-8 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {IMPACT_METRICS.map((metric, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div 
                key={metric.label}
                className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-indigo-500/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-900/50 text-indigo-400 flex items-center justify-center mb-2">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-slate-300 mt-1">
                  {metric.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {metric.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
