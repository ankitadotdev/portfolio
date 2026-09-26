export interface Project {
  id: string;
  title: string;
  category: string;
  featured: boolean;
  problem: string;
  solution: string;
  techStack: string[];
  keyContribution: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  badge?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location?: string;
  description: string;
  technologies: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  eventOrIssuer: string;
  year: string;
  highlight: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
}

export interface PersonalInterest {
  id: string;
  title: string;
  tag: string;
  note: string;
}

export interface PortfolioConfig {
  personal: {
    name: string;
    displayName: string;
    primaryRole: string;
    subRoles: string[];
    headline: {
      prefix: string;
      accent: string;
    };
    briefBio: string;
    fullBio: string[];
    availableForOpportunities: boolean;
    statusText: string;
    location: string;
  };
  socials: {
    githubUsername: string;
    githubUrl: string;
    linkedinUrl: string;
    email: string;
    twitterUrl?: string;
    githubContributions?: number | string;
  };
  exploring: string[];
  projects: Project[];
  experience: ExperienceItem[];
  achievements: AchievementItem[];
  certificates: CertificateItem[];
  interests: PersonalInterest[];
}
