import  { motion } from 'framer-motion';
import { skills } from '../data';
import AnimatedSection from './AnimatedSection';

const Skills = () => {
  return (
    <AnimatedSection id="skills">
      <div className="grid md:grid-cols-2 gap-12 items-center text-blue-600">
        <div>
          
          <h2 className="text-3xl md:text-4xl mb-6  text-black-700">My Skills</h2>
          
          <p className="mb-4 text-lg text-blue-600">
            I've developed expertise in various technologies throughout my career. Here's a snapshot of my technical skills and proficiency levels.
          </p>
          <p className="mb-8 text-lg text-green-600">
            My approach to learning is continuous and adaptive, allowing me to quickly master new tools and technologies as needed for specific projects.
          </p>
        </div>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-blue-600">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div 
                  className="bg-primary-600 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
 