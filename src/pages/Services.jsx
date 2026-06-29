import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services, categories } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import SEO from '../seo';
import Button from '../components/Button';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices = activeCategory === 'All'
    ? services
    : services.filter((s) => s.category === activeCategory);

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Beauty Parlor Services",
    "provider": {
      "@type": "BeautySalon",
      "name": "L'Élite Aura",
      "image": "https://eliteaura.com/assets/hero_bg.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "102, Luxury Arcade, Opp. Carter Road, Bandra West",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400050",
        "addressCountry": "IN"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Beauty & Salon Services",
      "itemListElement": services.map((s) => ({
        "@type": "OfferCatalog",
        "name": s.category,
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": s.name,
              "description": s.description
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": s.price.replace(',', ''),
              "priceCurrency": "INR"
            }
          }
        ]
      }))
    }
  };

  return (
    <div className="pt-28 pb-20 bg-champagne dark:bg-luxury-black transition-colors duration-300 min-h-screen text-luxury-black dark:text-white">
      <SEO title="Our Premium Services" description="Explore our luxury beauty salon services, including HD bridal makeup, keratin treatment, nail extensions, and luxury facials." schema={servicesSchema} />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-xs uppercase tracking-[0.3em] font-semibold">Our Menu</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold mt-2">Bespoke Treatments</h1>
          <p className="text-luxury-light-gray dark:text-white/60 text-xs md:text-sm font-light mt-4 max-w-lg mx-auto leading-relaxed">
            From award-winning bridal makeup to hair alchemy, explore our fully custom menu of premium aesthetic services.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16 border-b border-primary/10 dark:border-primary/20 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full text-xs tracking-widest uppercase transition-all duration-300 border cursor-pointer ${
                activeCategory === cat
                  ? 'gold-gradient text-luxury-black border-transparent font-semibold shadow-md'
                  : 'bg-white dark:bg-luxury-dark text-luxury-light-gray dark:text-white/70 border-primary/15 dark:border-primary/20 hover:border-primary hover:text-primary hover:dark:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Packages CTA */}
        <div className="mt-20 bg-luxury-black rounded-3xl p-8 md:p-12 text-center border border-primary/20 relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-6 text-white">
            <h3 className="font-serif text-2xl md:text-3xl text-primary font-bold uppercase tracking-wide">Custom Packages Available</h3>
            <p className="text-white/70 text-xs md:text-sm font-light leading-relaxed">
              Planning a wedding, corporate group styling, or want to customize a full day of wellness treatments? Contact our guest relations specialists to design your bespoke package.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
              <a href="https://wa.me/919876543210?text=Hi!%20I'd%20like%20to%20inquire%20about%20a%20custom%20beauty%20package." target="_blank" rel="noopener noreferrer" className="cursor-pointer w-full sm:w-auto">
                <Button variant="primary" className="w-full sm:w-auto">Inquire via WhatsApp</Button>
              </a>
              <a href="tel:+919876543210" className="cursor-pointer w-full sm:w-auto">
                <Button variant="secondary" className="w-full sm:w-auto">Call Guest Relations</Button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
