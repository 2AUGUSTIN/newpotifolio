import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data';
import AnimatedSection from './AnimatedSection';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <AnimatedSection id="testimonials" className="bg-primary-50">
      <h2 className="text-3xl md:text-4xl text-center mb-4 text-blue-300">OTHER  MEMBER!</h2>
      <p className="text-lg text-blue-800 text-center max-w-3xl mx-auto mb-12">
        Here's what clients and colleagues have to say about working with me  and   oher  client  member togather!.  
      </p>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute top-8 left-8 text-primary-300 opacity-40">
          <Quote size={60} />
        </div>
        
        <div className="px-4 py-8 md:px-12 md:py-16 bg-white rounded-lg shadow-md relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center text-center"
            >
              <p className="text-lg md:text-xl mb-8 text-dark-700 relative z-10">
                {testimonials[currentIndex].content}
              </p>
              <div>
                <p className="font-semibold text-lg">{testimonials[currentIndex].author}</p>
                <p className="text-dark-500">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="flex justify-center mt-8 space-x-4">
          <button 
            onClick={handlePrev}
            className="p-2 rounded-full bg-white shadow hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex space-x-2 items-center">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <button 
            onClick={handleNext}
            className="p-2 rounded-full bg-white shadow hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Testimonials;
 