import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import CookieBanner from './components/CookieBanner';
import OfferToast from './components/OfferToast';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Pricing from './pages/Pricing';
import Team from './pages/Team';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import ShadeFinder from './pages/ShadeFinder';

// Scroll to top on route change helper
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ThemeProvider>
      <Preloader />
      <CustomCursor />
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-champagne dark:bg-luxury-black text-luxury-black dark:text-white antialiased selection:bg-primary selection:text-luxury-black transition-colors duration-300">
          {/* Top Scroll Progress Indicator */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]"
            style={{ scaleX }}
          />

          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/team" element={<Team />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/shade-finder" element={<ShadeFinder />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          
          <Footer />
          <FloatingActions />
          <CookieBanner />
          <OfferToast />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
