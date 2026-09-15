export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'distributed' | 'grocery' | 'ecommerce' | 'graphics';
  company: 'Amazon' | 'Microsoft';
  period: string;
  role: string;
  image: string;
  shortDescription: string;
  keyMetrics: { label: string; value: string }[];
  bulletPoints: string[];
  tags: string[];
  architectureOverview?: string;
  problemStatement?: string;
  solutionImpact?: string;
}

export interface ExperienceRole {
  title: string;
  group: string;
  period: string;
  highlights: string[];
}

export interface ExperienceCompany {
  company: string;
  location: string;
  totalPeriod: string;
  overallRole: string;
  summary: string;
  roles: ExperienceRole[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  notes?: string;
}

export interface RecruiterInquiry {
  id: string;
  name: string;
  email: string;
  company: string;
  roleTitle: string;
  workModel: 'Hybrid' | 'Remote' | 'On-site';
  message: string;
  submittedAt: string;
}
