import  { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data';
import AnimatedSection from './AnimatedSection';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredProjects = filter 
    ? projects.filter(project => project.tags.includes(filter))
    : projects;
  
  // Get unique tags
  const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));
  
  return (
    <AnimatedSection id="projects" className="bg-gray-50">
      <h2 className="text-3xl md:text-4xl text-center mb-4">My Projects</h2>
      <p className="text-lg text-dark-600 text-center max-w-3xl mx-auto mb-10">
        Here are some of my recent projects. Each one was carefully crafted to solve specific problems and exceptional user experiences.
      </p>
      

      
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        <button
          className={`px-4 py-2 rounded-full text-sm ${!filter ? 'bg-primary-600 text-white' : 'bg-white text-dark-700 border border-gray-200'}`}
          onClick={() => setFilter(null)}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`px-4 py-2 rounded-full text-sm ${filter === tag ? 'bg-primary-600 text-white' : 'bg-white text-dark-700 border border-gray-200'}`}
            onClick={() => setFilter(tag === filter ? null : tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative h-60 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-dark-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-primary-100 text-primary-800 text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-primary-600 hover:text-primary-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;
 