import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../seo';

const Privacy = () => {
  const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Barça 10 Salon",
    "description": "Privacy policy and client data protection guidelines at Barça 10 Salon.",
    "url": "https://barca10salon.com/privacy"
  };

  return (
    <div className="pt-28 pb-20 bg-champagne dark:bg-luxury-black transition-colors duration-300 min-h-screen text-luxury-black dark:text-white">
      <SEO title="Privacy Policy" description="Read our privacy policy regarding guest bookings and data security." schema={privacySchema} />
      
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-luxury-dark rounded-3xl p-8 md:p-12 shadow-xl border border-primary/10 dark:border-primary/20"
        >
          <span className="text-primary text-xs uppercase tracking-[0.3em] font-semibold block mb-2 text-center">Legal</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-center mb-8 gold-text-gradient">Privacy Policy</h1>
          
          <div className="space-y-6 text-xs md:text-sm font-light leading-relaxed text-luxury-gray dark:text-white/80">
            <p><strong>Effective Date: June 30, 2026</strong></p>
            
            <p>
              At Barça 10 Salon, we prioritize the privacy and security of our guests' personal data. This Privacy Policy details how we collect, use, and protect your information when you visit our salon or book appointments through our website.
            </p>

            <h2 className="font-serif text-lg font-bold text-luxury-black dark:text-white mt-8 border-b border-primary/10 pb-2">1. Information We Collect</h2>
            <p>
              When you request an appointment, use our contact form, or subscribe to our newsletter, we collect details including your name, telephone number, email address, preferred dates, times, and specific service preferences. We do not process sensitive billing credentials directly on our servers.
            </p>

            <h2 className="font-serif text-lg font-bold text-luxury-black dark:text-white mt-8 border-b border-primary/10 pb-2">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To register, confirm, and manage your beauty services and booking consults.</li>
              <li>To answer inquiry messages submitted via our contact forms.</li>
              <li>To send you transactional reminders, appointment confirmations, or promotional discount offers via SMS, Phone, or WhatsApp.</li>
              <li>To improve our digital web experiences, styling menus, and salon guest services.</li>
            </ul>

            <h2 className="font-serif text-lg font-bold text-luxury-black dark:text-white mt-8 border-b border-primary/10 pb-2">3. Data Security & Storage</h2>
            <p>
              We enforce strict industry-standard technical measures to safeguard your personal info from unauthorized access or alteration. All booking details are accessible only to certified salon administrators and guest relations personnel.
            </p>

            <h2 className="font-serif text-lg font-bold text-luxury-black dark:text-white mt-8 border-b border-primary/10 pb-2">4. Third-Party Sharing</h2>
            <p>
              We do not sell, trade, or distribute your private information to external third parties. We may leverage trusted software modules (e.g. Google Maps API, WhatsApp redirection links) to facilitate location navigation and instant messaging.
            </p>

            <h2 className="font-serif text-lg font-bold text-luxury-black dark:text-white mt-8 border-b border-primary/10 pb-2">5. Your Rights</h2>
            <p>
              You have the right to request a copy of the personal records we hold, request corrections to incorrect data, or request the deletion of your scheduling history. Contact us at <strong>info@barca10salon.com</strong> to submit your request.
            </p>

            <h2 className="font-serif text-lg font-bold text-luxury-black dark:text-white mt-8 border-b border-primary/10 pb-2">6. Contacting Us</h2>
            <p>
              For questions regarding this policy, please reach us at:
              <br />
              <strong>Barça 10 Salon</strong>
              <br />
              1st Floor, No. 205, Ghosh Ln, Gudari Bazar, Samastipur, Bihar - 848101
              <br />
              Phone: +91 96543 99680
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
