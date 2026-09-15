import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2, Copy, Check, Sparkles, Building, Briefcase, Clock, MessageSquare } from 'lucide-react';
import { RESUME_INFO } from '../data/resumeData';
import { RecruiterInquiry } from '../types';

export const RecruiterContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    roleTitle: 'Software Engineering Manager',
    workModel: 'Hybrid' as 'Hybrid' | 'Remote' | 'On-site',
    message: '',
  });

  const [submittedInquiry, setSubmittedInquiry] = useState<RecruiterInquiry | null>(null);
  const [copiedSuccess, setCopiedSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) return;

    const inquiry: RecruiterInquiry = {
      id: `REQ-${Math.floor(1000 + Math.random() * 9000)}`,
      name: formData.name,
      email: formData.email,
      company: formData.company,
      roleTitle: formData.roleTitle,
      workModel: formData.workModel,
      message: formData.message,
      submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setSubmittedInquiry(inquiry);
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`Executive Opportunity: ${formData.roleTitle || 'Engineering Leadership'} at ${formData.company || 'Our Company'}`);
    const body = encodeURIComponent(
      `Hi Sonia,\n\nI came across your portfolio and resume showcase. We have an exciting leadership opportunity for a ${formData.roleTitle} at ${formData.company} (${formData.workModel}).\n\nDetails:\n${formData.message || 'We would love to connect with you for an introductory conversation regarding this role.'}\n\nBest regards,\n${formData.name}\n${formData.email}\n${formData.company}`
    );
    return `mailto:${RESUME_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyDraft = () => {
    const draft = `To: ${RESUME_INFO.email}
Subject: Executive Opportunity: ${formData.roleTitle} at ${formData.company}

Hi Sonia,

I came across your portfolio and resume showcase. We are actively hiring for a ${formData.roleTitle} at ${formData.company} (${formData.workModel}).

Message:
${formData.message || 'We would love to connect with you for an introductory chat.'}

Best regards,
${formData.name} (${formData.email})
${formData.company}`;

    navigator.clipboard.writeText(draft);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 2500);
  };

  const handleCopyContact = (val: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(val);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase">
            Recruiter & Hiring Portal
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Let's Discuss Leadership Opportunities
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Open to Engineering Manager, Senior EM, or Director of Engineering roles. Reach out directly or submit opportunity details below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Contact Details & Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Cards */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs space-y-4">
              <h3 className="text-base font-bold text-slate-900">
                Direct Contact Channels
              </h3>

              {/* Email */}
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${RESUME_INFO.email}`}
                      className="text-xs sm:text-sm font-bold text-slate-800 hover:text-indigo-600 transition-colors"
                    >
                      {RESUME_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopyContact(RESUME_INFO.email, 'email')}
                  className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                      Direct Phone
                    </div>
                    <a
                      href={`tel:${RESUME_INFO.phone}`}
                      className="text-xs sm:text-sm font-bold text-slate-800 hover:text-indigo-600 transition-colors"
                    >
                      {RESUME_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopyContact(RESUME_INFO.phone, 'phone')}
                  className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                    Primary Location
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-800">
                    {RESUME_INFO.location}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Greater Seattle Area (Bellevue, Redmond, Seattle) & Remote/Hybrid
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                      Professional Network
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-800">
                      LinkedIn Profile
                    </div>
                  </div>
                </div>
                <a
                  href={RESUME_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-xs font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-lg border border-sky-200 transition-colors"
                >
                  View Profile
                </a>
              </div>
            </div>

            {/* Recruiter Quick Snapshot */}
            <div className="p-5 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-xs sm:text-sm text-indigo-950 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-indigo-900">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Hiring Manager Notes</span>
              </div>
              <p className="text-indigo-900/80 leading-relaxed text-xs">
                • <strong>Target Roles:</strong> Software Engineering Manager (SDM / EM), Senior Engineering Manager, Director of Engineering.<br />
                • <strong>Core Domains:</strong> High-volume data processing, distributed cloud architectures, adtech/SEM publishing, and customer-facing mobile/e-commerce.<br />
                • <strong>Notice / Availability:</strong> Standard 2-4 weeks or negotiable.
              </p>
            </div>

          </div>

          {/* Right Column: Recruiter Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              
              {!submittedInquiry ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-200/80 pb-3 mb-4">
                    <h3 className="text-lg font-bold text-slate-900">
                      Recruiter Outreach Form
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Provide role specifics to jumpstart our discussion.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-2xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Company / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Stripe, Apple, Snowflake"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Role Title
                      </label>
                      <select
                        value={formData.roleTitle}
                        onChange={(e) => setFormData({ ...formData, roleTitle: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-2xs"
                      >
                        <option value="Software Engineering Manager">Software Engineering Manager (EM / SDM)</option>
                        <option value="Senior Engineering Manager">Senior Engineering Manager (Sr. EM)</option>
                        <option value="Director of Engineering">Director of Engineering</option>
                        <option value="Principal Engineer / Architect">Principal Engineer / Architect</option>
                        <option value="Head of Engineering">Head of Engineering</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Work Model
                    </label>
                    <div className="flex gap-2">
                      {(['Hybrid', 'Remote', 'On-site'] as const).map((model) => (
                        <button
                          key={model}
                          type="button"
                          onClick={() => setFormData({ ...formData, workModel: model })}
                          className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                            formData.workModel === model
                              ? 'bg-indigo-600 text-white border-indigo-600'
                              : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                          }`}
                        >
                          {model}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Opportunity Details & Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share brief team context, technology scope, or scheduling preferences..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-2xs"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Prepare & Submit Outreach</span>
                    </button>
                  </div>
                </form>
              ) : (
                /* Post-Submission Success Panel */
                <div className="p-4 sm:p-6 bg-white rounded-xl border border-emerald-200 text-slate-800 space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center gap-3 text-emerald-700">
                    <CheckCircle2 className="w-7 h-7 shrink-0 text-emerald-600" />
                    <div>
                      <h4 className="font-bold text-base text-slate-900">
                        Inquiry Ready for Sonia Zhuang!
                      </h4>
                      <div className="text-xs text-slate-500">
                        Reference: #{submittedInquiry.id} • Prepared at {submittedInquiry.submittedAt}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1.5">
                    <div><strong>To:</strong> Sonia Zhuang ({RESUME_INFO.email})</div>
                    <div><strong>From:</strong> {submittedInquiry.name} ({submittedInquiry.company})</div>
                    <div><strong>Role:</strong> {submittedInquiry.roleTitle} ({submittedInquiry.workModel})</div>
                    {submittedInquiry.message && (
                      <div className="pt-2 border-t border-slate-200 text-slate-600 italic">
                        "{submittedInquiry.message}"
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <a
                      href={getMailtoLink()}
                      className="w-full sm:flex-1 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Launch Default Email Client</span>
                    </a>

                    <button
                      onClick={handleCopyDraft}
                      className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors border border-slate-200"
                    >
                      {copiedSuccess ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedSuccess ? 'Copied to Clipboard!' : 'Copy Draft Text'}</span>
                    </button>
                  </div>

                  <div className="pt-2 text-center">
                    <button
                      onClick={() => setSubmittedInquiry(null)}
                      className="text-xs text-slate-400 hover:text-slate-600 underline"
                    >
                      Edit details or send another inquiry
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
