import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiAward, FiCheck, FiHeart, FiShield, FiTarget, FiEye, FiActivity } from 'react-icons/fi';
import Button from '../components/Button';
import SEO from '../seo';

import spaTreatment from '../assets/spa_treatment.jpg';
import bridalMakeup from '../assets/bridal_makeup.jpg';
import hairSalon from '../assets/hair_salon.jpg';

const About = () => {
  const stats = [
    { value: "5.0", label: "Google Rating" },
    { value: "31+", label: "Five-Star Reviews" },
    { value: "10+", label: "Expert Stylists" },
    { value: "40+", label: "Luxury Treatments" }
  ];

  const pillars = [
    {
      title: "Our Mission",
      desc: "To deliver customized aesthetic experiences with uncompromising quality, safety, and comfort. We aim to amplify your natural features while ensuring you feel deeply relaxed and revitalized.",
      icon: <FiTarget className="text-3xl text-primary" />
    },
    {
      title: "Our Vision",
      desc: "To remain the standard-bearer for luxury salon and spa experiences in Ranchi, Jharkhand, continuously refining our skills with global beauty innovations and sustainable practices.",
      icon: <FiEye className="text-3xl text-primary" />
    },
    {
      title: "Our Philosophy",
      desc: "We believe styling should elevate, not mask, your natural outline. True wellness is a conversation between premium ingredients, certified expertise, and your unique personality.",
      icon: <FiActivity className="text-3xl text-primary" />
    }
  ];

  const advantages = [
    {
      title: "Globally Certified Artisans",
      desc: "Our stylists are trained at leading national academies, bringing high-fashion beauty directly to Jharkhand.",
      icon: <FiAward />
    },
    {
      title: "Luxury Premium Brands",
      desc: "We exclusively formulate and style using premium, dermatologically verified brands (L'Oréal Professional, MAC, Kryolan).",
      icon: <FiHeart />
    },
    {
      title: "Hospital-Grade Hygiene",
      desc: "Rigorous sanitization of workspace, autoclaving of tools, and single-use kits for skin and hair treatments. 100% hygiene priority.",
      icon: <FiShield />
    },
    {
      title: "Tailored Consultation",
      desc: "Every appointment begins with a bespoke texture, skin, and tone analysis to recommend the perfect therapy.",
      icon: <FiCheck />
    }
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Volume Salon - Best Hair & Beauty Salon in Ranchi",
    "description": "Learn about our founding history, mission, vision, and why we are Ranchi's preferred luxury hair and beauty salon.",
    "url": "https://volumesalonranchi.app/about"
  };

  return (
    <div className="pt-28 pb-20 bg-champagne dark:bg-luxury-black transition-colors duration-300 min-h-screen text-luxury-black dark:text-white">
      <SEO title="About Us" description="Discover Volume Salon's philosophy, story, and dedication to luxury beauty treatments in Ranchi." schema={aboutSchema} />

      {/* Mini Hero Banner */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-luxury-black text-white border-b border-primary/20">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-xs uppercase tracking-[0.4em] font-semibold mb-3"
          >
            A Legacy of Excellence
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl font-bold uppercase tracking-wider gold-text-gradient mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl text-white/70 text-xs md:text-base font-light leading-relaxed tracking-wide"
          >
            Volume Salon serves as Ranchi's premier aesthetic sanctuary, fusing signature salon artistry, nail couture, and organic spa wellness.
          </motion.p>
        </div>
      </section>

      {/* Our Story / Intro Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left column: Narrative */}
        <div className="flex flex-col gap-6">
          <span className="text-primary text-xs uppercase tracking-[0.3em] font-bold">Introduction</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight">
            Crafting Grace and Luxury
          </h2>
          <p className="text-luxury-gray dark:text-white/80 text-xs md:text-sm font-light leading-relaxed">
            Volume Salon was founded in Ranchi, Jharkhand with a singular ambition: to elevate salon services from routine grooming to a luxurious ritual of self-love. What started as a boutique styling station has grown into a highly trusted sanctuary for luxury skincare, bridal makeovers, and custom nail chemistry.
          </p>
          <p className="text-luxury-light-gray dark:text-white/60 text-xs md:text-sm font-light leading-relaxed">
            We reject the assembly-line approach. Every client who walks through our doors is treated to a personalized consult. We study your facial anatomy, hair texture, skin undertones, and lifestyle to create styles that reflect your identity. Our team regularly participates in national and international beauty masterclasses to bring the latest global trends directly to Ranchi. Experience pure style transformations custom-fitted to your identity.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6 border-t border-primary/10 pt-8">
            {stats.map((s, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-serif text-3xl md:text-4xl font-bold text-primary dark:text-primary-light">{s.value}</span>
                <span className="text-[9px] uppercase tracking-widest text-luxury-light-gray dark:text-white/40 mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: Gallery Montage */}
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-8 rounded-3xl overflow-hidden shadow-lg border border-primary/20 aspect-[4/5]">
            <img src={spaTreatment} alt="Premium Facial treatment" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-4 flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden shadow-md border border-primary/10 aspect-square">
              <img src={bridalMakeup} alt="Bridal makeup detail" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md border border-primary/10 aspect-square">
              <img src={hairSalon} alt="Hair coloring blowdry" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Philosophy */}
      <section className="py-24 bg-white dark:bg-luxury-dark transition-colors duration-300 border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-champagne dark:bg-luxury-black/50 border border-primary/10 dark:border-primary/20 rounded-3xl p-8 flex flex-col gap-4 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  {p.icon}
                </div>
                <h3 className="font-serif text-xl font-bold">{p.title}</h3>
                <p className="text-luxury-gray dark:text-white/70 text-xs md:text-sm font-light leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-primary text-xs uppercase tracking-[0.3em] font-bold">Our Distinctions</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">Why Clients Trust Barça 10</h2>
          <p className="text-luxury-light-gray dark:text-white/60 text-xs md:text-sm font-light mt-4 max-w-md mx-auto leading-relaxed">
            We understand you have choices. That's why we maintain the highest standards of safety, quality ingredients, and elite training.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((adv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-luxury-dark border border-primary/15 dark:border-primary/20 rounded-3xl p-8 text-center flex flex-col items-center gap-4 hover:border-primary transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-2xl group-hover:scale-110 transition-transform duration-300">
                {adv.icon}
              </div>
              <h4 className="font-serif text-base md:text-lg font-bold">{adv.title}</h4>
              <p className="text-luxury-light-gray dark:text-white/60 text-xs font-light leading-relaxed">{adv.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Booking Call to Action */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-luxury-black text-white rounded-3xl p-8 md:p-16 border border-primary/20 text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:24px_24px]"></div>
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
            <span className="text-primary text-xs uppercase tracking-[0.3em] font-semibold">Ready to feel pampered?</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold uppercase tracking-wide">Experience Pure Serenity</h2>
            <p className="text-white/70 text-xs md:text-sm font-light leading-relaxed">
              Step into Ranchi's finest beauty parlour today. Connect with us to reserve a premium bridal package, hair chemistry consultation, or custom skin analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <Link to="/booking" className="w-full sm:w-auto">
                <Button variant="primary" className="w-full sm:w-auto">Book An Appointment</Button>
              </Link>
              <a href="https://wa.me/918434300344" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full sm:w-auto">WhatsApp Consultation</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
