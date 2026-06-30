import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome } from 'react-icons/fi';
import Button from '../components/Button';
import SEO from '../seo';

const NotFound = () => {
  return (
    <div className="pt-28 pb-20 bg-champagne dark:bg-luxury-black transition-colors duration-300 min-h-screen text-luxury-black dark:text-white flex items-center justify-center">
      <SEO title="404 - Page Not Found" description="The page you are looking for does not exist." />
      
      <div className="max-w-md mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-luxury-dark rounded-3xl p-8 md:p-12 shadow-xl border border-primary/10 dark:border-primary/20 flex flex-col items-center gap-6"
        >
          <motion.span 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-primary font-serif text-7xl md:text-8xl font-bold tracking-widest gold-text-gradient block"
          >
            404
          </motion.span>
          <h1 className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-wider">Page Not Found</h1>
          <p className="text-luxury-light-gray dark:text-white/60 text-xs md:text-sm font-light leading-relaxed mb-4">
            The page you are searching for might have been removed, had its name changed, or is temporarily unavailable. Let's redirect you back to luxury.
          </p>
          <Link to="/" className="w-full">
            <Button variant="primary" className="w-full" icon={<FiHome />}>
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
