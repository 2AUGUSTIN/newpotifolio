import  { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            
            <p className="text-gray-400">Full Stack Developer & UX Designer/ui Desgin</p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="bg-dark-800 hover:bg-dark-700 p-3 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <hr className="border-dark-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
           
          </p>
          
          <div className="flex space-x-6">
            
          </div>
        </div>
        
        
      </div>
    </footer>
  );
};

export default Footer;
 