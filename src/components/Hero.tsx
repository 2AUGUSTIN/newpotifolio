import  { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      className="relative min-h- flex items-center justify-center pt-16 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)), url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0Zm9saW8lMjBoZXJvJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3NDUwNTM2ODZ8MA&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h4 
            className="text-5xl md:text-6xl lg:text-7xl mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
           Singizimana Augustin!
  <p className="text-lg md:text-xl text-green-600 max-w-xl mx-auto">
 Hello, my name is Augustin and I am a Level Four Software Development student.
    
</p>


          </motion.h4>
           
          
          <motion.p 
            className="text-lg md:text-xl text-gray-200 mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
           
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="#projects" className="btn btn-primary text-base">View My Work</a>
            <a href="#contact" className="btn btn-secondary text-base">Get  account</a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
      >
        <a href="#about" className="flex flex-col items-center">
          <span className="mb-2 text-sm">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
 