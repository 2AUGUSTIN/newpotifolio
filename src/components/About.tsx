import  { Code, Layout, Database, Server } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const About = () => {
  const serviceItems = [
    {
      icon: <Layout className="w-10 h-10 text-primary-500" />,
      title: "UX/UI Design",
      description: "Creating intuitive and user-friendly interfaces that enhance user experience."
    },
    {
      icon: <Code className="w-10 h-10 text-primary-500" />,
      title: "Frontend Development",
      description: "Building responsive and interactive web applications using modern frameworks."
    },
    {
      icon: <Server className="w-10 h-10 text-primary-500" />,
      title: "Backend Development",
      description: "Developing secure, scalable server-side applications and APIs."
    },
    {
      icon: <Database className="w-10 h-10 text-primary-500" />,
      title: "Database ",
      description: "Designing efficient database structures for optimal data management."
    },
    {
      icon: <Database className="w-10 h-10 text-primary-500" />,
      title: "javascript ",
      description: "programming language used to make websites dynamic and interactive."
    },
    {
      icon: <Server className="w-10 h-10 text-primary-500" />,
      title: "React js ",
      description: "JavaScript library built by Facebook, for building user interfaces."
    },
  ];

  return (
    <AnimatedSection id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h5 className="text-blue-500 md:textmb-4 text-lg text-dark-600-4xl mb-6">About Me</h5>
          <p className="mb-8 text-lg text-blue-600">
            I'm a passionate Full Stack Developer and UX Designer with over 5 years of experience creating digital solutions that make a difference.
          </p>
          <p className="mb-8 text-lg text-blue-600">
            My journey in tech began with a degree in Computer Science, followed by roles at innovative startups and established tech companies. I specialize in building scalable web applications that are both functional and beautiful.
          </p>
          <p className="mb-8 text-lg text-blue-600">
  When I'm not coding, you can find me exploring new technologies,
  contributing to open source, or hiking in the great outdoors.
</p>

          <a href="#contact" className="btn btn-primary">Contact Me</a>
        </div>
        
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {serviceItems.map((item, index) => (
              <motion.div 
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-dark-500">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
 