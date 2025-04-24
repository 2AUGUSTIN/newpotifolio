import  { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const headerHeight = 80; // Approximate header height
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - headerHeight,
            behavior: 'smooth'
          });
        }
      }
    };

    // Handle hash on initial load
    if (window.location.hash) {
      setTimeout(handleHashChange, 0);
    }

    // Handle hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
 