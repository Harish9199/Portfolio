export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  roles: string[];
  bio: string;
  shortBio: string;
  email: string;
  phone?: string;
  location: string;
  avatar?: string;
  resumeUrl: string;
  social: SocialLink[];
  stats: Stat[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
  color?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  description: string;
  highlights: string[];
  technologies: string[];
  color: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  problem?: string;
  solution?: string;
  impact?: string;
  image?: string;
  technologies: string[];
  metrics: ProjectMetric[];
  links: ProjectLink[];
  featured: boolean;
  category: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectLink {
  type: "github" | "live" | "demo" | "paper";
  url: string;
  label: string;
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  highlights: string[];
  logo?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  year?: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface ChatPattern {
  keywords: string[];
  response: string;
  category: string;
}

export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
}

export interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
  topLanguages: { name: string; percentage: number }[];
  totalStars: number;
}
