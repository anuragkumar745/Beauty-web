import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [count, setCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';

    // Simulate count loader
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoaded(true);
            document.body.style.overflow = '';
          }, 400); // Small pause at 100%
          return 100;
        }
        // Increment randomly for natural feel
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 80);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100vh',
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 bg-luxury-black z-50 flex flex-col justify-between p-10 select-none pointer-events-auto"
        >
          {/* Header */}
          <div className="flex justify-between items-center text-white/40 text-[9px] uppercase tracking-[0.4em] font-light">
            <span>Barça 10 Salon</span>
            <span>Est. 2004</span>
          </div>

          {/* Logo Brand Reveal */}
          <div className="text-center flex flex-col items-center">
            <motion.h1
              initial={{ letterSpacing: '0.1em', opacity: 0, scale: 0.95 }}
              animate={{ letterSpacing: '0.3em', opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-primary gold-text-gradient uppercase tracking-widest"
            >
              Barça 10
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-[10px] sm:text-xs text-white/50 tracking-[0.4em] uppercase font-light mt-3"
            >
              Luxury Spa, Nails & Makeup Studio
            </motion.p>
          </div>

          {/* Bottom Counter */}
          <div className="flex justify-between items-end">
            <div className="text-white/30 text-[9px] uppercase tracking-widest font-light">
              <span>Loading Experience</span>
            </div>
            
            <div className="flex items-baseline font-serif text-6xl md:text-8xl font-bold text-primary select-none">
              <motion.span>{count}</motion.span>
              <span className="text-2xl md:text-3xl ml-1 text-primary/70">%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
