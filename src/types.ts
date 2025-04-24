export  interface ProjectType {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

export interface SkillType {
  name: string;
  level: number;
}

export interface TestimonialType {
  id: number;
  content: string;
  author: string;
  role: string;
}
 