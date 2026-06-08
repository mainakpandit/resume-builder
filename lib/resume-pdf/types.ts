export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  website: string;
}

export interface WorkExperience {
  company: string;
  location: string;
  title: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export interface ResumeData {
  name: string;
  contact: ContactInfo;
  summary: string;
  skills: Record<string, string>;
  experience: WorkExperience[];
  education: Education[];
}
