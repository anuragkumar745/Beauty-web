import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPhone, FiCalendar, FiClock, FiPlus, FiMinus, FiAward, FiCheck, FiHeart } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Button from '../components/Button';
import BeforeAfter from '../components/BeforeAfter';
import TestimonialSlider from '../components/TestimonialSlider';
import { useTheme } from '../context/ThemeContext';
import SEO from '../seo';

import heroBg from '../assets/hero_bg.jpg';
import spaTreatment from '../assets/spa_treatment.jpg';
import bridalMakeup from '../assets/bridal_makeup.jpg';
import hairSalon from '../assets/hair_salon.jpg';
import nailArt from '../assets/nail_art.jpg';
import beforeHair from '../assets/before_hair.jpg';
import afterHair from '../assets/after_hair.jpg';

const faqs = [
  {
    q: "How far in advance should I book my bridal makeup?",
    a: "We highly recommend booking bridal consultations and reserving dates 3 to 6 months in advance, especially during the wedding season, to ensure your preferred artist is available."
  },
  {
    q: "What brands of makeup and skincare products do you use?",
    a: "We exclusively use world-renowned premium luxury brands including MAC, Bobbi Brown, Estée Lauder, Anastasia Beverly Hills for makeup, and Dermalogica and Forest Essentials for skin treatments."
  },
  {
    q: "Do you offer home services for bridal makeup?",
    a: "Yes, we offer on-site bridal services. Our premium bridal team can travel to your venue or residence. Travel charges vary depending on the location."
  },
  {
    q: "What is your cancellation and rescheduling policy?",
    a: "Appointments can be rescheduled or cancelled free of charge up to 24 hours in advance. Cancellations within 24 hours of the appointment time may attract a 50% retention charge."
  },
  {
    q: "Is a hair spa recommended before chemical treatments?",
    a: "Yes! A nourishing hair spa treatment helps fortify the hair shafts with essential proteins and hydration, preparing your hair to absorb coloring or smoothing agents with minimal stress."
  }
];

const benefits = [
  { title: "Certified Experts", desc: "Stylists and artists trained at elite global academies.", icon: <FiAward /> },
  { title: "Premium Products", desc: "Only dermatologically tested, high-end luxury brands.", icon: <FiHeart /> },
  { title: "Hygiene First", desc: "Rigorous sanitization of tools and workspace after every client.", icon: <FiCheck /> },
  { title: "Personal Consultation", desc: "Bespoke beauty regimens designed to suit your unique features.", icon: <FiClock /> }
];

const Home = () => {
  const [openFaqIdx, setOpenFaqIdx] = useState(null);
  const { theme } = useTheme();

  const toggleFaq = (idx) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Barça 10 Salon - Luxury Salon, Spa & Makeup Studio",
    "image": "https://barca10salon.com/assets/hero_bg.jpg",
    "priceRange": "₹₹",
    "telephone": "+919654399680",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1st Floor, No. 205, Ghosh Ln, Gudari Bazar, Ward No - 17",
      "addressLocality": "Samastipur",
      "addressRegion": "Bihar",
      "postalCode": "848101",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "10:00",
        "closes": "21:00"
      }
    ]
  };

  return (
    <div className="bg-champagne dark:bg-luxury-black transition-colors duration-300 min-h-screen text-luxury-black dark:text-white">
      <SEO title="Best Beauty Parlor & Salon in Samastipur, Bihar" description="Barça 10 Salon & Spa is Samastipur's premium beauty destination for bridal makeup, hair styling, skin care, gel nails, and custom tattoos by Viking Tattoos. 4.8★ rated with 2,185+ reviews." schema={homeSchema} />

      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with elegant dark parallax overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center text-white flex flex-col items-center gap-6 md:gap-8 mt-12">
          
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary text-xs md:text-sm uppercase tracking-[0.4em] font-semibold"
          >
            Welcome to Barça 10 Salon
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-wide leading-tight uppercase"
          >
            Where Beauty Meets <br />
            <span className="gold-text-gradient italic">Pure Luxury</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-2xl text-white/80 text-sm md:text-lg font-light leading-relaxed tracking-wide"
          >
            Experience premium salon care customized to highlight your unique grace. Serving Samastipur since 2004 with certified hair chemistry, luxury bridal makeovers, and professional body art by Viking Tattoos.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link to="/booking" className="w-full sm:w-auto cursor-pointer">
              <Button variant="primary" className="w-full sm:w-auto" icon={<FiCalendar />}>
                Book Appointment
              </Button>
            </Link>
            <a href="https://wa.me/919654399680" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto cursor-pointer">
              <Button variant="secondary" className="w-full sm:w-auto" icon={<FaWhatsapp className="text-lg" />}>
                WhatsApp Us
              </Button>
            </a>
            <a href="tel:+919654399680" className="w-full sm:w-auto cursor-pointer">
              <Button variant="dark" className="w-full sm:w-auto" icon={<FiPhone />}>
                Call Now
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-[10px] uppercase tracking-widest pointer-events-none">
          <span>Scroll Down</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Images */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-primary/20">
            <img src={spaTreatment} alt="Luxury spa treatment" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-4 w-1/2 aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-champagne dark:border-luxury-black transition-colors duration-300 hidden md:block">
            <img src={bridalMakeup} alt="Bridal styling close-up" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Right Side: Philosophy */}
        <div className="flex flex-col gap-6">
          <span className="text-primary text-xs uppercase tracking-[0.3em] font-semibold">About Barça 10 Salon</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold">Accentuate Your Natural Elegance</h2>
          <p className="text-luxury-gray dark:text-white/80 text-xs md:text-sm font-light leading-relaxed">
            Established in 2004, Barça 10 Salon represents the zenith of premium aesthetic wellness in Samastipur, Bihar. Our mission is to deliver customized beauty experiences with uncompromising quality, impeccable hygiene, and luxurious comfort.
          </p>
          <p className="text-luxury-light-gray dark:text-white/60 text-xs md:text-sm font-light leading-relaxed">
            Our beauty philosophy is simple: we believe styling should elevate, not mask, your natural contours. By combining state-of-the-art styling technologies with world-renowned organic products, our specialists craft radiant, long-lasting looks that build lifelong trust. We are proudly a women-owned business.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div className="flex flex-col border-l-2 border-primary pl-4">
              <span className="font-serif text-3xl font-bold text-primary-dark dark:text-primary-light">20+</span>
              <span className="text-[10px] text-luxury-light-gray dark:text-white/40 uppercase tracking-widest mt-1">Years of Experience</span>
            </div>
            <div className="flex flex-col border-l-2 border-primary pl-4">
              <span className="font-serif text-3xl font-bold text-primary-dark dark:text-primary-light">25k+</span>
              <span className="text-[10px] text-luxury-light-gray dark:text-white/40 uppercase tracking-widest mt-1">Happy Clients</span>
            </div>
          </div>

          <div className="mt-4">
            <Link to="/about" className="cursor-pointer">
              <Button variant="secondary">Our Philosophy</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES */}
      <section className="py-24 bg-white dark:bg-luxury-dark transition-colors duration-300 border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
          <div className="text-center mb-16">
            <span className="text-primary text-xs uppercase tracking-[0.3em] font-semibold">Our Signatures</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">Award-Winning Treatments</h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {/* Service 1 */}
            <div className="bg-champagne dark:bg-luxury-black/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-primary/10 dark:border-primary/20 flex flex-col justify-between">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={bridalMakeup} alt="Bridal makeup" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-primary text-[10px] uppercase font-bold tracking-widest">Makeup</span>
                  <h3 className="font-serif text-lg font-bold mt-1 mb-2">Bridal Makeup & Draping</h3>
                  <p className="text-luxury-light-gray dark:text-white/50 text-xs font-light leading-relaxed mb-6">Complete luxury bridal makeover including saree/lehenga draping, hair design, and lash extensions.</p>
                </div>
                <div className="flex items-center justify-between border-t border-primary/10 dark:border-primary/20 pt-4">
                  <span className="font-serif font-bold text-primary-dark dark:text-primary">₹15,000</span>
                  <Link to="/booking?service=Bridal%20Makeup%20%26%20Styling" className="cursor-pointer">
                    <Button variant="secondary" className="text-[10px] px-4 py-2">Book Now</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-champagne dark:bg-luxury-black/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-primary/10 dark:border-primary/20 flex flex-col justify-between">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={hairSalon} alt="Hair cut styling" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-primary text-[10px] uppercase font-bold tracking-widest">Hair</span>
                  <h3 className="font-serif text-lg font-bold mt-1 mb-2">Signature Haircut & Blowdry</h3>
                  <p className="text-luxury-light-gray dark:text-white/50 text-xs font-light leading-relaxed mb-6">Personalized wash, style analysis, signature cut, and standard luxury blowout styling.</p>
                </div>
                <div className="flex items-center justify-between border-t border-primary/10 dark:border-primary/20 pt-4">
                  <span className="font-serif font-bold text-primary-dark dark:text-primary">₹1,500</span>
                  <Link to="/booking?service=Signature%20Haircut%20%26%20Blowdry" className="cursor-pointer">
                    <Button variant="secondary" className="text-[10px] px-4 py-2">Book Now</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-champagne dark:bg-luxury-black/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-primary/10 dark:border-primary/20 flex flex-col justify-between">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={nailArt} alt="Nail extensions art" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-primary text-[10px] uppercase font-bold tracking-widest">Nails</span>
                  <h3 className="font-serif text-lg font-bold mt-1 mb-2">Gel Extensions & Nail Art</h3>
                  <p className="text-luxury-light-gray dark:text-white/50 text-xs font-light leading-relaxed mb-6">Premium acrylic or gel extensions customized with elegant custom hand-painted layouts.</p>
                </div>
                <div className="flex items-center justify-between border-t border-primary/10 dark:border-primary/20 pt-4">
                  <span className="font-serif font-bold text-primary-dark dark:text-primary">₹2,800</span>
                  <Link to="/booking?service=Luxury%20Gel%20Extensions%20%26%20Nail%20Art" className="cursor-pointer">
                    <Button variant="secondary" className="text-[10px] px-4 py-2">Book Now</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 4: Viking Tattoos */}
            <div className="bg-champagne dark:bg-luxury-black/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-primary/10 dark:border-primary/20 flex flex-col justify-between">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1590246814883-57f511e76523?w=600" alt="Viking Custom Tattoo" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-primary text-[10px] uppercase font-bold tracking-widest">Body Art</span>
                  <h3 className="font-serif text-lg font-bold mt-1 mb-2">Viking Tattoos</h3>
                  <p className="text-luxury-light-gray dark:text-white/50 text-xs font-light leading-relaxed mb-6">Premium custom tattoos and sterile body piercings by Viking Tattoos inside our salon premises.</p>
                </div>
                <div className="flex items-center justify-between border-t border-primary/10 dark:border-primary/20 pt-4">
                  <span className="font-serif font-bold text-primary-dark dark:text-primary">₹3,000+</span>
                  <Link to="/booking?service=Custom%20Body%20Tattoo" className="cursor-pointer">
                    <Button variant="secondary" className="text-[10px] px-4 py-2">Book Now</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link to="/services" className="cursor-pointer">
              <Button variant="primary">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. BRIDAL MAKEUP SHOWCASE SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 border-b border-primary/10">
        <div className="text-center mb-16">
          <span className="text-primary text-xs uppercase tracking-[0.3em] font-semibold">Bridal Services</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">The Bridal Showcase</h2>
          <p className="text-luxury-light-gray dark:text-white/60 text-xs md:text-sm font-light mt-4 max-w-lg mx-auto leading-relaxed">
            Exquisite camera-ready bridal makeups customized for your special day. Look stunning under wedding flashes and direct venue lighting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Bridal Portfolio Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-md border border-primary/20">
              <img src={bridalMakeup} alt="Bridal makeup portrait" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden aspect-square shadow-sm border border-primary/10">
                <img src="https://images.unsplash.com/photo-1594744803329-e58b31de215f?w=600" alt="Intricate hair styling detail" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square shadow-sm border border-primary/10">
                <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600" alt="Traditional jewelry setup" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Bridal Packages details */}
          <div className="flex flex-col gap-6">
            <span className="text-primary text-xs uppercase tracking-[0.3em] font-bold">Premium Packages</span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold">Bespoke Bridal Packages</h3>
            <p className="text-luxury-gray dark:text-white/80 text-xs md:text-sm font-light leading-relaxed">
              We design individual, high-definition cosmetic styles that coordinate perfectly with your wedding wardrobe. From trials and skincare preparation to lehenga draping, we support you through your celebration.
            </p>

            <div className="flex flex-col gap-4 mt-2">
              <div className="bg-white dark:bg-luxury-dark border border-primary/15 dark:border-primary/20 rounded-2xl p-5 flex items-center justify-between shadow-sm">
                <div>
                  <h4 className="font-serif font-bold text-sm md:text-base">Royal Bridal HD Package</h4>
                  <p className="text-[10px] text-luxury-light-gray dark:text-white/40 mt-1">Full makeup, trials, advanced hairstyle, draping, gel nails</p>
                </div>
                <span className="font-serif font-bold text-primary-dark dark:text-primary pl-4 whitespace-nowrap">₹18,000</span>
              </div>
              <div className="bg-white dark:bg-luxury-dark border border-primary/15 dark:border-primary/20 rounded-2xl p-5 flex items-center justify-between shadow-sm">
                <div>
                  <h4 className="font-serif font-bold text-sm md:text-base">Airbrush Bridal Glow</h4>
                  <p className="text-[10px] text-luxury-light-gray dark:text-white/40 mt-1">Camera-ready uniform airbrush application, draping, hairstyle</p>
                </div>
                <span className="font-serif font-bold text-primary-dark dark:text-primary pl-4 whitespace-nowrap">₹15,000</span>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <Link to="/pricing">
                <Button variant="secondary">Pricing Menu</Button>
              </Link>
              <Link to="/booking?service=Bridal%20Makeup%20%26%20Styling">
                <Button variant="primary">Book consultation</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BEFORE & AFTER TRANSFORMATION */}
      <section className="py-24 bg-champagne dark:bg-luxury-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
          <div className="text-center mb-16">
            <span className="text-primary text-xs uppercase tracking-[0.3em] font-semibold">Transformations</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">Keratin Treatment Result</h2>
            <p className="text-luxury-light-gray dark:text-white/60 text-xs md:text-sm font-light mt-4 max-w-md mx-auto leading-relaxed">
              Drag the center slider horizontally to see the immediate frizz-elimination and gloss finish of our Premium Keratin Smoothing.
            </p>
          </div>

          <BeforeAfter beforeImage={beforeHair} afterImage={afterHair} beforeLabel="Frizzy & Damaged" afterLabel="Silky Keratin Finish" />
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="py-24 bg-luxury-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center mb-16">
            <span className="text-primary text-xs uppercase tracking-[0.3em] font-semibold">Salon Philosophy</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">Why Choose Barça 10 Salon?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, idx) => (
              <div key={idx} className="bg-luxury-gray/30 border border-primary/20 rounded-3xl p-8 flex flex-col gap-4 items-center text-center hover:border-primary transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary text-2xl">
                  {b.icon}
                </div>
                <h3 className="font-serif text-lg font-semibold text-white">{b.title}</h3>
                <p className="text-white/60 text-xs font-light leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-24 bg-white dark:bg-luxury-dark transition-colors duration-300 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
          <div className="text-center mb-8">
            <span className="text-primary text-xs uppercase tracking-[0.3em] font-semibold">Testimonials</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">Client Reviews</h2>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <section className="py-24 bg-champagne dark:bg-luxury-black transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary text-xs uppercase tracking-[0.3em] font-semibold">Faq</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">Frequently Asked Questions</h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white dark:bg-luxury-dark border border-primary/10 dark:border-primary/20 rounded-2xl shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  >
                    <span className="font-serif text-sm md:text-base font-bold pr-4">{faq.q}</span>
                    <span className="text-primary text-lg">
                      {isOpen ? <FiMinus /> : <FiPlus />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-1 text-luxury-gray dark:text-white/70 text-xs md:text-sm font-light leading-relaxed border-t border-primary/5">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
