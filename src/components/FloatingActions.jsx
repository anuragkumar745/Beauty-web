import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPhone, FiCalendar, FiArrowUp } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const actionButtons = [
    {
      id: 'whatsapp',
      icon: <FaWhatsapp className="text-2xl" />,
      href: "https://wa.me/919654399680?text=Hello%20Bar%C3%A7a%2010%20Salon,%20I%20would%20like%20to%20book%20an%20appointment.",
      bgColor: 'bg-[#25D366]',
      hoverColor: 'hover:bg-[#20ba5a]',
      textColor: 'text-white',
      tooltip: 'Chat on WhatsApp',
      type: 'external'
    },
    {
      id: 'call',
      icon: <FiPhone className="text-xl" />,
      href: 'tel:+919654399680',
      bgColor: 'bg-primary',
      hoverColor: 'hover:bg-primary-dark',
      textColor: 'text-luxury-black',
      tooltip: 'Call Us Now',
      type: 'external'
    },
    {
      id: 'book',
      icon: <FiCalendar className="text-xl" />,
      href: '/booking',
      bgColor: 'bg-luxury-black border border-primary/40',
      hoverColor: 'hover:bg-luxury-gray',
      textColor: 'text-primary',
      tooltip: 'Book Appointment',
      type: 'internal'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
      {/* Action Buttons */}
      {actionButtons.map((btn) => (
        <motion.div
          key={btn.id}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative group"
        >
          {/* Tooltip */}
          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-luxury-black/90 text-white text-xs px-3 py-1.5 rounded-lg border border-primary/20 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-md">
            {btn.tooltip}
          </span>
          
          {btn.type === 'external' ? (
            <a
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer ${btn.bgColor} ${btn.hoverColor} ${btn.textColor}`}
              aria-label={btn.tooltip}
            >
              {btn.icon}
            </a>
          ) : (
            <Link
              to={btn.href}
              className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer ${btn.bgColor} ${btn.hoverColor} ${btn.textColor}`}
              aria-label={btn.tooltip}
            >
              {btn.icon}
            </Link>
          )}
        </motion.div>
      ))}

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-luxury-black border border-primary/40 text-primary flex items-center justify-center shadow-lg hover:bg-luxury-gray hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            aria-label="Back to Top"
          >
            <FiArrowUp className="text-xl" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingActions;
