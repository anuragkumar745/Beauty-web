import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after 3 seconds for smooth load
      const timer = setTimeout(() => setIsVisible(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 left-6 right-6 md:left-12 md:right-auto md:max-w-md z-40"
        >
          <div className="glassmorphism dark:glassmorphism-dark rounded-3xl p-6 md:p-8 shadow-2xl border border-primary/20 flex flex-col gap-4">
            <h4 className="font-serif font-bold text-sm md:text-base text-luxury-black dark:text-white uppercase tracking-wider">
              Cookie Consent
            </h4>
            <p className="text-luxury-gray dark:text-white/70 text-xs font-light leading-relaxed">
              We use cookies to personalize your booking experience, analyze web traffic, and optimize services. By clicking "Accept", you agree to our privacy policy guidelines.
            </p>
            <div className="flex gap-3 justify-end mt-2">
              <button 
                onClick={() => setIsVisible(false)}
                className="text-[10px] uppercase tracking-widest text-luxury-light-gray hover:text-primary transition-colors cursor-pointer"
              >
                Decline
              </button>
              <Button 
                variant="primary" 
                onClick={handleAccept}
                className="py-2.5 px-5 text-[10px]"
              >
                Accept All
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
