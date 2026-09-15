import React from 'react';
import { Project } from '../types';
import { X, CheckCircle2, Layers, Cpu, TrendingUp, Calendar, Building, ExternalLink, ZoomIn } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenImageViewer: (imageUrl: string, title: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenImageViewer }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80 sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-indigo-100 text-indigo-800">
              {project.company}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {project.period}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs text-slate-600 font-semibold">
              {project.role}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Title and Subtitle */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 font-medium">
              {project.subtitle}
            </p>
          </div>

          {/* Screenshot Preview with Zoom Action */}
          <div className="relative group rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[420px] object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
            />
            <div 
              onClick={() => onOpenImageViewer(project.image, project.title)}
              className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/95 backdrop-blur-xs text-slate-900 text-xs font-semibold shadow-lg">
                <ZoomIn className="w-4 h-4 text-indigo-600" />
                Click to inspect full screenshot
              </span>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.keyMetrics.map((metric) => (
              <div key={metric.label} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                <div className="text-lg sm:text-xl font-bold text-indigo-600">
                  {metric.value}
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Architectural Breakdown & Challenges */}
          <div className="space-y-4">
            {project.problemStatement && (
              <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/70">
                <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wide flex items-center gap-1.5 mb-1">
                  <TrendingUp className="w-3.5 h-3.5 text-amber-700" />
                  Engineering Challenge & Background
                </h4>
                <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>
            )}

            {project.architectureOverview && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-1.5 mb-1">
                  <Layers className="w-3.5 h-3.5 text-indigo-600" />
                  Technical Architecture & Solution
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {project.architectureOverview}
                </p>
              </div>
            )}

            {project.solutionImpact && (
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80">
                <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wide flex items-center gap-1.5 mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  Business & Operational Impact
                </h4>
                <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                  {project.solutionImpact}
                </p>
              </div>
            )}
          </div>

          {/* Bullet Points from Resume */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span>Key Responsibilities & Deliverables</span>
            </h4>
            <ul className="space-y-2.5">
              {project.bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Badges */}
          <div className="pt-2 border-t border-slate-100">
            <span className="text-xs font-semibold text-slate-400 block mb-2">Technologies & Competencies:</span>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
