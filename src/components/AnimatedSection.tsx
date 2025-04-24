import  { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

const AnimatedSection = ({ children, id, className = '' }: AnimatedSectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id={id} className={`section ${className}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="container"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default AnimatedSection;
 