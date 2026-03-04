export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  color: 'pink' | 'cyan' | 'yellow' | 'orange';
  year: string;
  link?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export type Theme = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';