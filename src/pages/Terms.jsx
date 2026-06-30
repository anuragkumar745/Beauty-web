import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../seo';

const Terms = () => {
  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service - Barça 10 Salon",
    "description": "Terms and conditions of service at Barça 10 Salon.",
    "url": "https://barca10salon.com/terms"
  };

  return (
    <div className="pt-28 pb-20 bg-champagne dark:bg-luxury-black transition-colors duration-300 min-h-screen text-luxury-black dark:text-white">
      <SEO title="Terms of Service" description="Read our terms of service and salon booking guidelines." schema={termsSchema} />
      
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-luxury-dark rounded-3xl p-8 md:p-12 shadow-xl border border-primary/10 dark:border-primary/20"
        >
          <span className="text-primary text-xs uppercase tracking-[0.3em] font-semibold block mb-2 text-center">Legal</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-center mb-8 gold-text-gradient">Terms of Service</h1>
          
          <div className="space-y-6 text-xs md:text-sm font-light leading-relaxed text-luxury-gray dark:text-white/80">
            <p><strong>Effective Date: June 30, 2026</strong></p>
            
            <p>
              Welcome to Barça 10 Salon. By accessing our website or utilizing our booking portals and salon services, you agree to comply with and be bound by the following Terms of Service.
            </p>

            <h2 className="font-serif text-lg font-bold text-luxury-black dark:text-white mt-8 border-b border-primary/10 pb-2">1. Appointment Booking & Cancellations</h2>
            <p>
              Reservations are subject to availability. To guarantee smooth scheduling, we request that cancellations or rescheduling requests be completed at least 24 hours prior to your scheduled slot. Cancellations within 24 hours may be subject to a retention fee at the salon's discretion.
            </p>

            <h2 className="font-serif text-lg font-bold text-luxury-black dark:text-white mt-8 border-b border-primary/10 pb-2">2. Punctuality & Late Arrivals</h2>
            <p>
              We recommend arriving 10 minutes prior to your scheduled treatment to complete consultations. In the event of a late arrival, we will make every effort to accommodate you, but service times may be shortened or rescheduled to respect subsequent guest reservations.
            </p>

            <h2 className="font-serif text-lg font-bold text-luxury-black dark:text-white mt-8 border-b border-primary/10 pb-2">3. Pricing & Modifications</h2>
            <p>
              All prices listed on our website, service menus, or package brochures are subject to change. Rates are customized based on hair length, specific skin product formulations, or complexity of custom body art requested from Viking Tattoos. Estimates will always be aligned during your initial personal consultation.
            </p>

            <h2 className="font-serif text-lg font-bold text-luxury-black dark:text-white mt-8 border-b border-primary/10 pb-2">4. Client Health & Safety Protocols</h2>
            <p>
              Please inform your beauty artist or esthetician of any allergies, skin sensitivities, or medical conditions prior to treatment. Barça 10 Salon and Viking Tattoos enforce medical-grade tool sterilization, autoclaving, and single-use hygienic tools. However, individual product reactions are subject to your personal physiology.
            </p>

            <h2 className="font-serif text-lg font-bold text-luxury-black dark:text-white mt-8 border-b border-primary/10 pb-2">5. Body Art & Piercings (Viking Tattoos)</h2>
            <p>
              Body tattooing and piercing services are governed by strict age regulations. Clients must be 18 years or older (or accompanied by a legal guardian with written consent) and sign our sterile procedure waivers before body art operations commence.
            </p>

            <h2 className="font-serif text-lg font-bold text-luxury-black dark:text-white mt-8 border-b border-primary/10 pb-2">6. Limitation of Liability</h2>
            <p>
              Barça 10 Salon is not liable for any personal belongings misplaced within our salon facility. We strive to deliver the highest quality aesthetic service, but we are not responsible for skin sensitivity or chemical reactions arising from undisclosed allergies.
            </p>

            <h2 className="font-serif text-lg font-bold text-luxury-black dark:text-white mt-8 border-b border-primary/10 pb-2">7. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please reach us at:
              <br />
              <strong>Barça 10 Salon</strong>
              <br />
              1st Floor, No. 205, Ghosh Ln, Gudari Bazar, Samastipur, Bihar - 848101
              <br />
              Email: info@barca10salon.com
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
