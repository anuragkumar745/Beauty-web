import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMaximize2, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import SEO from '../seo';

import bridalMakeupImg from '../assets/bridal_makeup.jpg';
import hairSalonImg from '../assets/hair_salon.jpg';
import nailArtImg from '../assets/nail_art.jpg';
import spaTreatmentImg from '../assets/spa_treatment.jpg';
import beforeHairImg from '../assets/before_hair.jpg';
import afterHairImg from '../assets/after_hair.jpg';
import heroBgImg from '../assets/hero_bg.jpg';

const galleryItems = [
  { id: 1, title: "Royal Bridal Makeover", category: "Makeup", image: bridalMakeupImg },
  { id: 2, title: "Luxury Salon Styling Station", category: "Salon", image: heroBgImg },
  { id: 3, title: "Chic Chrome Gel Nails", category: "Nails", image: nailArtImg },
  { id: 4, title: "Rejuvenating Face Spa Therapy", category: "Salon", image: spaTreatmentImg },
  { id: 5, title: "Precision Balayage & Blowout", category: "Hair", image: hairSalonImg },
  { id: 6, title: "Damaged Hair (Before)", category: "Transformations", image: beforeHairImg },
  { id: 7, title: "Silk Keratin Smoothing (After)", category: "Transformations", image: afterHairImg },
  { id: 8, title: "Sunset Glow Party Look", category: "Makeup", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800" },
  { id: 9, title: "Bridal Henna Hand Art", category: "Nails", image: "https://images.unsplash.com/photo-1582233479366-6d38bc390a08?w=800" },
  { id: 10, title: "Classic Red French Tips", category: "Nails", image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800" },
  { id: 11, title: "Glossy Caramel Highlights", category: "Hair", image: "https://images.unsplash.com/photo-1605497746444-ac9dbd324ce8?w=800" },
  { id: 12, title: "Hydra Cleansing Facial", category: "Salon", image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800" }
];

const categories = ["All", "Salon", "Makeup", "Hair", "Nails", "Transformations"];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedIdx, setSelectedIdx] = useState(null);

  const filteredItems = activeFilter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Volume Salon Gallery",
    "description": "Browse luxury bridal makeup, modern hair transformations, custom nail art and premium salon interiors at Volume Salon in Ranchi.",
    "url": "https://volumesalonranchi.app/gallery"
  };

  return (
    <div className="pt-28 pb-20 bg-champagne dark:bg-luxury-black transition-colors duration-300 min-h-screen text-luxury-black dark:text-white">
      <SEO title="Luxury Gallery" description="Browse beauty portfolios including bridal makeups, premium hair styling, and gel nail designs." schema={gallerySchema} />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-xs uppercase tracking-[0.3em] font-semibold">Portfolio</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold mt-2">Visual Inspirations</h1>
          <p className="text-luxury-light-gray dark:text-white/60 text-xs md:text-sm font-light mt-4 max-w-lg mx-auto leading-relaxed">
            Take a visual tour through our premium transformations, salon interior, and luxury finishes.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 border-b border-primary/10 dark:border-primary/20 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-xs tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                activeFilter === cat 
                  ? 'gold-gradient text-luxury-black border-transparent font-semibold shadow-sm' 
                  : 'bg-white dark:bg-luxury-dark text-luxury-light-gray dark:text-white/70 border-primary/20 dark:border-primary/20 hover:border-primary hover:text-primary hover:dark:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedIdx(idx)}
                className="group relative aspect-square rounded-3xl overflow-hidden shadow-sm hover:shadow-lg border border-primary/10 dark:border-primary/20 cursor-pointer bg-white dark:bg-luxury-dark"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-luxury-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[10px] text-primary uppercase tracking-widest font-semibold block mb-1">{item.category}</span>
                    <h4 className="font-serif text-base font-bold mb-3">{item.title}</h4>
                    <span className="inline-flex items-center gap-1.5 text-xs text-primary-light font-medium">
                      <FiMaximize2 /> View Full Size
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIdx(null)}
              className="fixed inset-0 z-50 bg-luxury-black/95 flex flex-col items-center justify-center p-4 md:p-8 select-none"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedIdx(null)} 
                className="absolute top-6 right-6 text-white hover:text-primary transition-colors text-3xl z-50 cursor-pointer focus:outline-none"
                aria-label="Close Lightbox"
              >
                <FiX />
              </button>

              {/* Prev Button */}
              <button 
                onClick={handlePrev} 
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-all text-4xl z-50 cursor-pointer bg-luxury-black/50 p-2 rounded-full border border-white/10"
                aria-label="Previous Image"
              >
                <FiChevronLeft />
              </button>

              {/* Next Button */}
              <button 
                onClick={handleNext} 
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-all text-4xl z-50 cursor-pointer bg-luxury-black/50 p-2 rounded-full border border-white/10"
                aria-label="Next Image"
              >
                <FiChevronRight />
              </button>

              {/* Lightbox Content */}
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl max-h-[75vh] md:max-h-[80vh] flex flex-col items-center"
              >
                <img 
                  src={filteredItems[selectedIdx].image} 
                  alt={filteredItems[selectedIdx].title} 
                  className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl border border-white/10"
                />
                
                {/* Title & Info */}
                <div className="text-center mt-6 text-white max-w-lg">
                  <span className="text-[10px] text-primary uppercase tracking-widest font-semibold block mb-1">{filteredItems[selectedIdx].category}</span>
                  <h3 className="font-serif text-lg md:text-xl font-bold">{filteredItems[selectedIdx].title}</h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Gallery;
