import React from 'react';
import { motion } from 'framer-motion';
import { FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Button from './Button';

const ServiceCard = ({ name, price, duration, description, image, category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="bg-white dark:bg-luxury-dark rounded-3xl overflow-hidden shadow-sm hover:shadow-lg border border-primary/15 dark:border-primary/20 transition-all duration-300 flex flex-col justify-between"
    >
      <div className="relative aspect-[4/3] overflow-hidden group">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
          loading="lazy"
        />
        {category && (
          <span className="absolute top-4 left-4 bg-luxury-black/80 backdrop-blur-sm text-primary border border-primary/20 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold">
            {category}
          </span>
        )}
      </div>

      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h4 className="font-serif text-lg font-bold text-luxury-black dark:text-white mb-2">{name}</h4>
          <p className="text-luxury-light-gray dark:text-white/60 text-xs font-light leading-relaxed mb-6">
            {description}
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between border-t border-primary/10 dark:border-primary/20 pt-4 mb-6">
            <div className="flex items-center gap-1">
              <span className="text-primary text-[10px] uppercase tracking-wider font-semibold">Price</span>
              <span className="font-serif font-bold text-base text-primary-dark dark:text-primary">₹{price}</span>
            </div>
            <div className="flex items-center gap-1 text-luxury-light-gray dark:text-white/40 text-xs font-light">
              <FiClock />
              <span>{duration}</span>
            </div>
          </div>

          <Link to={`/booking?service=${encodeURIComponent(name)}`} className="w-full block">
            <Button variant="secondary" className="w-full text-[10px] py-2.5">
              Book Treatment
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
