import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGift, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const OfferToast = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show toast after 8 seconds
    const timer = setTimeout(() => setIsVisible(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-24 right-6 z-40 max-w-sm"
        >
          <div className="bg-luxury-black border border-primary/40 rounded-3xl p-5 md:p-6 shadow-2xl flex gap-4 text-white relative">
            {/* Close Button */}
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-3 right-3 text-white/50 hover:text-primary transition-colors cursor-pointer text-sm"
              aria-label="Close promotion notification"
            >
              <FiX />
            </button>

            {/* Icon */}
            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary text-lg shrink-0 mt-0.5 animate-pulse">
              <FiGift />
            </div>

            {/* Details */}
            <div className="flex flex-col gap-1.5 pr-4">
              <span className="text-[10px] text-primary uppercase tracking-widest font-bold">Limited Offer</span>
              <h5 className="font-serif font-bold text-xs md:text-sm text-white">First-Time Guest Discount</h5>
              <p className="text-white/60 text-[10px] md:text-xs font-light leading-relaxed">
                Get a complimentary blowdry or skin clean-up on your first booking above ₹3,000 using code <strong className="text-primary">VOLUME1ST</strong>.
              </p>
              <Link 
                to="/booking" 
                onClick={() => setIsVisible(false)}
                className="text-[10px] text-primary hover:text-primary-light transition-colors font-semibold uppercase tracking-wider flex items-center gap-1.5 mt-1 cursor-pointer"
              >
                Book with Offer <FiArrowRight />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OfferToast;
