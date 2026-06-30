import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services, categories } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import SEO from '../seo';
import Button from '../components/Button';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [compareList, setCompareList] = useState([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  const toggleCompare = (service) => {
    setCompareList((prev) => {
      const exists = prev.find((s) => s.id === service.id);
      if (exists) {
        return prev.filter((s) => s.id !== service.id);
      }
      if (prev.length >= 2) {
        return [prev[0], service];
      }
      return [...prev, service];
    });
  };

  const getServiceSpecs = (category) => {
    const specs = {
      difficulty: 'Standard Treatment',
      benefits: 'Enhances general aesthetic appeal and refreshes target areas.'
    };

    if (category === 'Makeup') {
      specs.difficulty = 'Advanced Artistry';
      specs.benefits = 'Camera-ready finish, lightweight skin breathability, and contour highlight.';
    } else if (category === 'Hair') {
      specs.difficulty = 'Technical Precision';
      specs.benefits = 'Structural protein renewal, frizz control, customized shape styling, and split-end sealing.';
    } else if (category === 'Skin') {
      specs.difficulty = 'Clinical Esthetician';
      specs.benefits = 'Deep sebum extraction, cell rejuvenation, hydration lock, and glowing tone revitalization.';
    } else if (category === 'Nails') {
      specs.difficulty = 'Detailed Craftsmanship';
      specs.benefits = 'Shatter-proof protective overlays, customized hand art patterns, and long-wear gloss protection.';
    } else if (category === 'Tattoos') {
      specs.difficulty = 'Master Sterile Ink';
      specs.benefits = 'Bespoke custom designs, clinical autoclaved equipment, and precision skin pigmentation.';
    }
    return specs;
  };

  const filteredServices = activeCategory === 'All'
    ? services
    : services.filter((s) => s.category === activeCategory);

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Beauty Parlor Services",
    "provider": {
      "@type": "BeautySalon",
      "name": "Barça 10 Salon",
      "image": "https://barca10salon.com/assets/hero_bg.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1st Floor, No. 205, Ghosh Ln, Gudari Bazar",
        "addressLocality": "Samastipur",
        "addressRegion": "Bihar",
        "postalCode": "848101",
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
                <ServiceCard 
                  {...service} 
                  onCompareToggle={() => toggleCompare(service)}
                  isStagedForCompare={!!compareList.find((s) => s.id === service.id)}
                />
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
              <a href="https://wa.me/919654399680?text=Hi!%20I'd%20like%20to%20inquire%20about%20a%20custom%20beauty%20package." target="_blank" rel="noopener noreferrer" className="cursor-pointer w-full sm:w-auto">
                <Button variant="primary" className="w-full sm:w-auto">Inquire via WhatsApp</Button>
              </a>
              <a href="tel:+919654399680" className="cursor-pointer w-full sm:w-auto">
                <Button variant="secondary" className="w-full sm:w-auto">Call Guest Relations</Button>
              </a>
            </div>
          </div>
        </div>

        {/* Floating Compare Bar */}
        {compareList.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-32px)] max-w-lg"
          >
            <div className="glassmorphism dark:glassmorphism-dark border border-primary/30 rounded-full px-6 py-4 flex items-center justify-between shadow-2xl">
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase font-bold text-primary tracking-wider">Compare Menu</span>
                <div className="flex gap-2">
                  {compareList.map((item) => (
                    <span 
                      key={item.id} 
                      className="bg-primary/20 border border-primary/40 text-luxury-black dark:text-white text-[9px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5"
                    >
                      {item.name.substring(0, 15)}...
                      <button 
                        onClick={() => toggleCompare(item)} 
                        className="text-red-500 hover:text-red-700 font-bold ml-1 cursor-pointer text-[12px]"
                      >
                        &times;
                      </button>
                    </span>
                  ))}
                </div>
              </div>
              
              <button
                onClick={() => setIsCompareOpen(true)}
                className={`text-[10px] uppercase font-bold tracking-widest px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${
                  compareList.length === 2
                    ? 'gold-gradient text-luxury-black font-extrabold hover:scale-105'
                    : 'bg-luxury-black/30 dark:bg-white/10 text-luxury-light-gray dark:text-white/40 cursor-not-allowed'
                }`}
                disabled={compareList.length !== 2}
              >
                {compareList.length === 2 ? 'Compare Now' : 'Select 2'}
              </button>
            </div>
          </motion.div>
        )}

        {/* Comparison Modal Overlay */}
        <AnimatePresence>
          {isCompareOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-luxury-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white dark:bg-luxury-dark border border-primary/25 rounded-3xl max-w-3xl w-full p-6 md:p-8 shadow-2xl overflow-y-auto max-h-[90vh] text-luxury-black dark:text-white flex flex-col gap-6"
              >
                <div className="flex justify-between items-center border-b border-primary/15 pb-4">
                  <h3 className="font-serif text-xl md:text-2xl font-bold uppercase tracking-wider text-primary">Treatment Comparison</h3>
                  <button 
                    onClick={() => setIsCompareOpen(false)}
                    className="text-luxury-light-gray hover:text-primary transition-colors text-2xl font-bold cursor-pointer"
                  >
                    &times;
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                      <tr className="border-b border-primary/10">
                        <th className="py-3 text-[10px] uppercase tracking-widest text-primary font-bold w-1/4">Criteria</th>
                        {compareList.map((item) => (
                          <th key={item.id} className="py-3 text-sm font-serif font-bold w-3/8 text-center">{item.name}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="text-xs font-light leading-relaxed">
                      {/* Image Row */}
                      <tr className="border-b border-primary/5">
                        <td className="py-4 text-[10px] uppercase font-bold tracking-wider text-luxury-light-gray">Visual Preview</td>
                        {compareList.map((item) => (
                          <td key={item.id} className="py-4 px-4 text-center">
                            <div className="aspect-[16/10] rounded-2xl overflow-hidden max-w-[200px] mx-auto border border-primary/20">
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                          </td>
                        ))}
                      </tr>
                      {/* Category Row */}
                      <tr className="border-b border-primary/5">
                        <td className="py-4 text-[10px] uppercase font-bold tracking-wider text-luxury-light-gray">Category</td>
                        {compareList.map((item) => (
                          <td key={item.id} className="py-4 px-4 text-center">
                            <span className="bg-primary/15 text-primary border border-primary/20 px-3 py-1 rounded-full text-[9px] uppercase tracking-wider font-bold">
                              {item.category}
                            </span>
                          </td>
                        ))}
                      </tr>
                      {/* Price Row */}
                      <tr className="border-b border-primary/5">
                        <td className="py-4 text-[10px] uppercase font-bold tracking-wider text-luxury-light-gray">Price</td>
                        {compareList.map((item) => (
                          <td key={item.id} className="py-4 px-4 text-center font-serif font-bold text-base text-primary">
                            ₹{item.price}
                          </td>
                        ))}
                      </tr>
                      {/* Duration Row */}
                      <tr className="border-b border-primary/5">
                        <td className="py-4 text-[10px] uppercase font-bold tracking-wider text-luxury-light-gray">Duration</td>
                        {compareList.map((item) => (
                          <td key={item.id} className="py-4 px-4 text-center text-luxury-gray dark:text-white/80">
                            {item.duration}
                          </td>
                        ))}
                      </tr>
                      {/* Difficulty/Method Row */}
                      <tr className="border-b border-primary/5">
                        <td className="py-4 text-[10px] uppercase font-bold tracking-wider text-luxury-light-gray">Craft Difficulty</td>
                        {compareList.map((item) => (
                          <td key={item.id} className="py-4 px-4 text-center text-luxury-gray dark:text-white/80 font-medium">
                            {getServiceSpecs(item.category).difficulty}
                          </td>
                        ))}
                      </tr>
                      {/* Benefits Row */}
                      <tr className="border-b border-primary/5">
                        <td className="py-4 text-[10px] uppercase font-bold tracking-wider text-luxury-light-gray">Key Benefits</td>
                        {compareList.map((item) => (
                          <td key={item.id} className="py-4 px-4 text-center text-luxury-light-gray dark:text-white/60 text-[11px] leading-relaxed">
                            {getServiceSpecs(item.category).benefits}
                          </td>
                        ))}
                      </tr>
                      {/* Description Row */}
                      <tr className="border-b border-primary/5">
                        <td className="py-4 text-[10px] uppercase font-bold tracking-wider text-luxury-light-gray">Summary</td>
                        {compareList.map((item) => (
                          <td key={item.id} className="py-4 px-4 text-center text-luxury-light-gray dark:text-white/50 text-[10px] leading-relaxed font-light">
                            {item.description}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-end gap-4 border-t border-primary/15 pt-6">
                  <button 
                    onClick={() => {
                      setCompareList([]);
                      setIsCompareOpen(false);
                    }}
                    className="text-xs uppercase tracking-widest text-luxury-light-gray hover:text-primary transition-colors cursor-pointer"
                  >
                    Clear Comparison
                  </button>
                  <Button variant="primary" onClick={() => setIsCompareOpen(false)}>
                    Close Panel
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Services;
