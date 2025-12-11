// export interface Education {
//   institution: string;
//   degree: string;
//   date: string;
//   details: string[];
// }

// export interface Experience {
//   role: string;
//   company: string;
//   location?: string;
//   date: string;
//   summary: string;
//   points?: string[];
//   type: 'research' | 'internship' | 'project'| 'other';
//   tags: string[];
//   imageUrl?: string; // Path to the image
//   githubUrl?: string; // Link to the repository
// }

// export interface SkillCategory {
//   category: string;
//   items: string[];
// }

// export interface SocialLink {
//   platform: string;
//   url: string;
//   icon: string;
// }

// src/types.ts

// types.ts

export interface Education {
  institution: string;
  degree: string;
  date: string;
  details: string[];
}

export interface Experience {
  id: string;                 // ✅ 新增：唯一 ID
  title: string;              // ✅ 显式标题
  role: string;               // MSc Dissertation / BSc Project / Research Intern 等
  company: string;
  location?: string;
  date: string;
  summary?: string;
  points?: string[];
  type: 'research' | 'internship' | 'project' | 'other';
  tags: string[];
  imageUrl?: string;
  githubUrl?: string;
  paperUrl?: string;
  paperVenue?: string;
}


export interface SkillCategory {
  category: string;
  items: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}



