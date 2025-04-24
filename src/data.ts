import  { ProjectType, SkillType, TestimonialType } from './types';

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce platform with cart functionality and payment integration.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    id: 2,
    title: "Fitness Tracker App",
    description: "Mobile application for tracking workouts, nutrition, and personal fitness goals.",
    tags: ["React Native", "Firebase", "TypeScript"],
    image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    id: 3,
    title: "Finance Dashboard",
    description: "Interactive dashboard for visualizing financial data with real-time updates.",
    tags: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    id: 4,
    title: "Travel Blog Platform",
    description: "Content management system for travel bloggers with media optimization.",
    tags: ["Next.js", "GraphQL", "AWS S3", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#"
  }
];

export const skills: SkillType[] = [
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "React", level: 90 },
  { name: "Node.js", level: 80 },
  { name: "HTML/CSS", level: 95 },
  { name: "Vue.js", level: 75 },
  { name: "MongoDB", level: 70 },
  { name: "PostgreSQL", level: 65 },
  { name: "AWS", level: 60 },
  { name: "Docker", level: 75 }
];

export const testimonials: TestimonialType[] = [
  {
    id: 1,
    content: "Working with Jane was an absolute pleasure. She delivered our project ahead of schedule and exceeded all expectations. Her attention to detail is remarkable.",
    author: "Alex Thompson",
    role: "CTO, TechVenture"
  },
  {
    id: 2,
    content: "Jane's technical expertise and problem-solving abilities are outstanding. She tackled complex challenges with creative solutions that impressed our entire team.",
    author: "Sarah Johnson",
    role: "Product Manager, InnovateCorp"
  },
  {
    id: 3,
    content: "I've worked with many developers, but Jane stands out for her communication skills and ability to translate technical concepts for non-technical stakeholders.",
    author: "Michael Chen",
    role: "Founder, StartupLabs"
  }
];
 