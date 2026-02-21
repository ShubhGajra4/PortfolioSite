import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
    setActiveCaseStudy(null);
  };

  const goToCaseStudies = (section = null) => {
    navigate('/case-studies');
    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsMobileMenuOpen(false);
    setActiveCaseStudy(null);
  };

  const caseStudies = [
    { id: 'real-estate', label: 'Real Estate' },
    { id: 'social-media', label: 'Social Media' },
    { id: 'ecommerce', label: 'Ecommerce' },
    { id: 'seo', label: 'SEO' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-white font-bold text-xl tracking-tight cursor-pointer"
            onClick={() => navigate('/')}
          >
            SHUBH
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="nav-link text-white hover:text-white/80 transition-all duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('expertise')}
              className="nav-link text-white hover:text-white/80 transition-all duration-200"
            >
              Expertise
            </button>
            
            {/* Case Studies Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveCaseStudy(activeCaseStudy ? null : 'open')}
                className="nav-link text-white hover:text-white/80 transition-all duration-200 flex items-center gap-1"
              >
                Case Studies
                <span className="text-xs text-white/60">/4</span>
              </button>
              
              <AnimatePresence>
                {activeCaseStudy && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 right-0 bg-black border border-white/20 rounded-lg overflow-hidden min-w-[200px]"
                  >
                    {caseStudies.map((study) => (
                      <button
                        key={study.id}
                        onClick={() => goToCaseStudies(study.id)}
                        className="w-full text-left px-4 py-3 text-white hover:bg-white/10 transition-all duration-200"
                      >
                        {study.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="cta-button bg-white text-black hover:bg-white/90 px-6 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 border-t border-white/10 pt-4"
            >
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white text-left hover:text-white/80 transition-all duration-200"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('expertise')}
                  className="text-white text-left hover:text-white/80 transition-all duration-200"
                >
                  Expertise
                </button>
                
                <div>
                  <button
                    onClick={() => setActiveCaseStudy(activeCaseStudy ? null : 'open')}
                    className="text-white hover:text-white/80 transition-all duration-200 flex items-center gap-1"
                  >
                    Case Studies
                    <span className="text-xs text-white/60">/4</span>
                  </button>
                  <AnimatePresence>
                    {activeCaseStudy && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 mt-2 flex flex-col gap-2"
                      >
                        {caseStudies.map((study) => (
                          <button
                            key={study.id}
                            onClick={() => goToCaseStudies(study.id)}
                            className="text-white/80 text-left hover:text-white transition-all duration-200 text-sm"
                          >
                            {study.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="cta-button bg-white text-black hover:bg-white/90 px-6 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 text-center"
                >
                  Let's Talk
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
