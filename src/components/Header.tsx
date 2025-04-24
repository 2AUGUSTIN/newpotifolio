import  { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex items-center justify-between  text-blue-600 ">
      <a href="#" className="text-xl font-display font-bold text-black ">Augusti!</a>

        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
          <li>
  <a href="#about" className="hover:text-green-600 transition-colors">
    About
  </a>
</li>

            <li><a href="#projects" className="hover:text-primary-600 transition-colors">Projects</a></li>
            <li><a href="#skills" className="hover:text-primary-600 transition-colors">Skills</a></li>
            <li><a href="#testimonials" className="hover:text-primary-600 transition-colors">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-primary-600 transition-colors">Contact</a></li>
          </ul>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-dark-500 hover:text-primary-600 transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="text-dark-500 hover:text-primary-600 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-dark-500 hover:text-primary-600 transition-colors">
            <Mail size={20} />
          </a>
        </div>
        
        <button 
          className="md:hidden text-dark-800" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
    
    </header>
  );
};

export default Header;
 