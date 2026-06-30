import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiCalendar, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Shade Finder', path: '/shade-finder' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' }
  ];

  const isHomePage = location.pathname === '/';

  // Header Background Styling logic
  // On homepage (unscrolled): transparent background
  // On other pages or scrolled: glassmorphic light or dark background depending on theme
  const getHeaderBg = () => {
    if (isHomePage && !isScrolled) {
      return 'bg-transparent py-6';
    }
    
    if (theme === 'dark') {
      return 'bg-luxury-black/90 backdrop-blur-md border-b border-primary/20 py-4 shadow-lg';
    } else {
      return 'bg-white/90 backdrop-blur-md border-b border-primary/10 py-4 shadow-md';
    }
  };

  // Text Color Styling logic
  const getTextColor = () => {
    if (isHomePage && !isScrolled) {
      return {
        active: 'text-primary border-b border-primary font-semibold',
        inactive: 'text-white/90 hover:text-primary transition-colors duration-300 font-medium',
        logo: 'text-primary gold-text-gradient',
        logoSub: 'text-white/80',
        hamburger: 'text-white'
      };
    }

    if (theme === 'dark') {
      return {
        active: 'text-primary border-b border-primary font-semibold',
        inactive: 'text-white/80 hover:text-primary transition-colors duration-300 font-medium',
        logo: 'text-primary gold-text-gradient',
        logoSub: 'text-white/60',
        hamburger: 'text-white'
      };
    } else {
      return {
        active: 'text-primary-dark border-b border-primary-dark font-semibold',
        inactive: 'text-luxury-gray hover:text-primary-dark transition-colors duration-300 font-medium',
        logo: 'text-primary-dark gold-text-gradient',
        logoSub: 'text-luxury-light-gray',
        hamburger: 'text-luxury-black'
      };
    }
  };

  const colors = getTextColor();

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${getHeaderBg()}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex flex-col">
          <span className={`font-serif text-xl md:text-2xl font-bold tracking-widest uppercase transition-colors duration-300 ${colors.logo}`}>
            Barça 10 Salon
          </span>
          <span className={`text-[9px] tracking-[0.3em] uppercase mt-0.5 font-light transition-colors duration-300 ${colors.logoSub}`}>
            Spa, Nails & Makeup Studio
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-xs tracking-widest uppercase transition-all duration-300 pb-1 ${location.pathname === link.path ? colors.active : colors.inactive}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Controls (Theme + Booking Button) */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Light/Dark Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-full border transition-all duration-300 hover:scale-105 cursor-pointer ${
              theme === 'dark'
                ? 'border-primary/30 bg-luxury-dark text-primary hover:border-primary'
                : 'border-primary/20 bg-champagne text-primary-dark hover:border-primary-dark'
            }`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
          </button>
          
          <Link to="/booking">
            <Button variant={isHomePage && !isScrolled ? 'primary' : (theme === 'dark' ? 'primary' : 'secondary')} icon={<FiCalendar />}>
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle + Theme Toggle Group */}
        <div className="flex items-center gap-3 lg:hidden">
          {/* Theme Toggle Mobile */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full border transition-all duration-300 cursor-pointer ${
              theme === 'dark'
                ? 'border-primary/30 bg-luxury-dark text-primary'
                : 'border-primary/20 bg-champagne text-primary-dark'
            }`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun className="text-base" /> : <FiMoon className="text-base" />}
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`transition-colors duration-300 text-2xl focus:outline-none cursor-pointer ${colors.hamburger}`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`lg:hidden w-full absolute top-full left-0 overflow-hidden border-b transition-colors duration-300 ${
              theme === 'dark' 
                ? 'bg-luxury-black/95 backdrop-blur-lg border-primary/20' 
                : 'bg-white/95 backdrop-blur-lg border-primary/10 shadow-lg'
            }`}
          >
            <div className="flex flex-col gap-5 py-6 px-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`text-sm tracking-widest uppercase transition-all duration-300 py-1 ${
                    location.pathname === link.path 
                      ? 'text-primary font-semibold pl-4 border-l-2 border-primary' 
                      : (theme === 'dark' ? 'text-white hover:text-primary pl-4' : 'text-luxury-black hover:text-primary pl-4')
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className={`pt-4 border-t ${theme === 'dark' ? 'border-white/10' : 'border-luxury-black/10'}`}>
                <Link to="/booking" className="w-full block">
                  <Button variant="primary" className="w-full" icon={<FiCalendar />}>
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
