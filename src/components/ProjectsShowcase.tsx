import React, { useState } from 'react';
import { PROJECTS } from '../data/resumeData';
import { Project } from '../types';
import { ArrowUpRight, ZoomIn, Layers, ExternalLink, Sparkles, Terminal, Shield } from 'lucide-react';
import { ProjectModal } from './ProjectModal';
import { ImageViewerModal } from './ImageViewerModal';

export const ProjectsShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageViewerData, setImageViewerData] = useState<{ isOpen: boolean; url: string; title: string }>({
    isOpen: false,
    url: '',
    title: '',
  });

  const filterOptions = [
    { id: 'all', label: 'All Featured Work' },
    { id: 'distributed', label: 'Distributed Systems & Ads' },
    { id: 'grocery', label: 'Omnichannel & Grocery' },
    { id: 'ecommerce', label: 'Regulated E-Commerce' },
    { id: 'graphics', label: '3D Graphics & WebGL' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  const openImageViewer = (imageUrl: string, title: string) => {
    setImageViewerData({
      isOpen: true,
      url: imageUrl,
      title: title,
    });
  };

  return (
    <section id="projects" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase">
              Portfolio & Engineering Showcase
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Architectural Work & Technical Deliverables
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Visual walkthroughs, system screenshots, and technical summaries of high-impact platforms delivered at Amazon scale.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200 shadow-2xs">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveFilter(opt.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeFilter === opt.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Screenshot Header Container */}
                <div className="relative aspect-video bg-slate-900 overflow-hidden border-b border-slate-200/60">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-300"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-900/80 backdrop-blur-xs text-white border border-white/20">
                      {project.company}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/90 backdrop-blur-xs text-slate-800 shadow-2xs">
                      {project.period}
                    </span>
                  </div>

                  {/* Zoom Action Button */}
                  <button
                    onClick={() => openImageViewer(project.image, project.title)}
                    className="absolute top-3 right-3 p-2 rounded-lg bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-xs transition-colors cursor-pointer"
                    title="Zoom screenshot"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>

                  {/* Quick Metric Bar Overlay at Bottom of Screenshot */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent p-3 pt-6 flex items-center justify-between text-white text-xs">
                    <div className="flex items-center gap-4">
                      {project.keyMetrics.slice(0, 2).map((km) => (
                        <div key={km.label} className="leading-tight">
                          <span className="font-extrabold text-amber-300">{km.value}</span>
                          <span className="text-slate-300 text-[10px] ml-1">{km.label}</span>
                        </div>
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-300 font-medium">
                      {project.role}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {project.bulletPoints.slice(0, 2).map((bp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></span>
                        <span className="line-clamp-2">{bp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200/80"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 5 && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-50 text-slate-500">
                        +{project.tags.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
                >
                  <span>Read Architecture Deep-Dive & Impact</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
                <button
                  onClick={() => openImageViewer(project.image, project.title)}
                  className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Inspect UI</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Microsoft Systems Highlight Card */}
        <div className="mt-8 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 rounded-2xl p-6 sm:p-8 text-white border border-slate-800 shadow-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/10 text-sky-300 text-xs font-semibold">
                <Terminal className="w-3.5 h-3.5" />
                <span>Foundational Systems Engineering • Microsoft (2010 - 2016)</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">
                Microsoft Edge JavaScript Engine (Chakra) & Microsoft Store
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                4 years focused on core browser performance and compiler optimization within Microsoft's Developer Division, followed by building customer-facing software and services powering the global Microsoft Store consumer platform.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/10 text-slate-200 border border-white/10">
                  C++ & Systems Optimization
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/10 text-slate-200 border border-white/10">
                  JavaScript Runtime & JIT
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/10 text-slate-200 border border-white/10">
                  Global Consumer Platform
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/10 text-slate-200 border border-white/10">
                  High-Availability Services
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center w-full md:w-auto shrink-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">
                6 Years
              </div>
              <div className="text-xs text-slate-300 font-medium mt-0.5">
                Core Systems Craftsmanship
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                Redmond, WA
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenImageViewer={openImageViewer}
      />

      {/* Fullscreen Lightbox Image Viewer */}
      <ImageViewerModal
        isOpen={imageViewerData.isOpen}
        imageUrl={imageViewerData.url}
        title={imageViewerData.title}
        onClose={() => setImageViewerData({ isOpen: false, url: '', title: '' })}
      />
    </section>
  );
};
