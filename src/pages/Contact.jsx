import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import Button from '../components/Button';
import SEO from '../seo';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact L'Élite Aura",
    "description": "Get in touch with L'Élite Aura - Luxury Salon & Spa. Phone, Email, Address, Map and business hours.",
    "url": "https://eliteaura.com/contact"
  };

  return (
    <div className="pt-28 pb-20 bg-champagne dark:bg-luxury-black transition-colors duration-300 min-h-screen text-luxury-black dark:text-white">
      <SEO title="Contact Us" description="Reach out to L'Élite Aura for bookings, collaborations or inquiries." schema={contactSchema} />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-xs uppercase tracking-[0.3em] font-semibold">Get In Touch</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold mt-2">Contact L'Élite Aura</h1>
          <p className="text-luxury-light-gray dark:text-white/60 text-xs md:text-sm font-light mt-4 max-w-lg mx-auto leading-relaxed">
            Have questions about our services or need help planning a bridal styling? Contact us or drop a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Contact Information & Map */}
          <div className="flex flex-col gap-8 justify-between">
            <div className="bg-white dark:bg-luxury-dark rounded-3xl p-8 md:p-10 shadow-sm border border-primary/15 dark:border-primary/20 grid grid-cols-1 md:grid-cols-2 gap-8 transition-colors duration-300">
              
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-soft-pink dark:bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/20 dark:border-primary/30">
                  <FiMapPin className="text-lg" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-luxury-black dark:text-white text-sm uppercase tracking-wider mb-2">Location</h4>
                  <p className="text-luxury-light-gray dark:text-white/60 text-xs font-light leading-relaxed">
                    102, Luxury Arcade, Opp. Carter Road,<br />Bandra West, Mumbai - 400050
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-soft-pink dark:bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/20 dark:border-primary/30">
                  <FiClock className="text-lg" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-luxury-black dark:text-white text-sm uppercase tracking-wider mb-2">Salon Hours</h4>
                  <p className="text-luxury-light-gray dark:text-white/60 text-xs font-light leading-relaxed">
                    Mon - Sat: 10 AM - 8 PM<br />Sun: 10 AM - 5 PM
                  </p>
                </div>
              </div>

              {/* Call */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-soft-pink dark:bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/20 dark:border-primary/30">
                  <FiPhone className="text-lg" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-luxury-black dark:text-white text-sm uppercase tracking-wider mb-2">Phone</h4>
                  <a href="tel:+919876543210" className="text-luxury-light-gray dark:text-white/60 hover:text-primary dark:hover:text-primary text-xs font-light leading-relaxed block transition-colors duration-300">
                    +91 98765 43210
                  </a>
                  <a href="tel:+912226543210" className="text-luxury-light-gray dark:text-white/60 hover:text-primary dark:hover:text-primary text-xs font-light leading-relaxed block transition-colors duration-300">
                    +91 22 2654 3210
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-soft-pink dark:bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/20 dark:border-primary/30">
                  <FiMail className="text-lg" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-luxury-black dark:text-white text-sm uppercase tracking-wider mb-2">Email</h4>
                  <a href="mailto:info@eliteaura.com" className="text-luxury-light-gray dark:text-white/60 hover:text-primary dark:hover:text-primary text-xs font-light leading-relaxed block transition-colors duration-300">
                    info@eliteaura.com
                  </a>
                  <a href="mailto:booking@eliteaura.com" className="text-luxury-light-gray dark:text-white/60 hover:text-primary dark:hover:text-primary text-xs font-light leading-relaxed block transition-colors duration-300">
                    booking@eliteaura.com
                  </a>
                </div>
              </div>

            </div>

            {/* Embedded Google Map */}
            <div className="w-full h-80 md:h-[350px] rounded-3xl overflow-hidden shadow-md border border-primary/15 dark:border-primary/20 relative">
              <iframe
                title="L'Élite Aura Salon Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1892543956976!2d72.82229567582531!3d19.0554526526117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c95e1e479ab7%3A0xe6bf4dc12574e4c2!2sCarter%20Rd%2C%20Bandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

          {/* Quick Inquiry Form */}
          <div className="bg-white dark:bg-luxury-dark rounded-3xl p-8 md:p-12 shadow-sm border border-primary/10 dark:border-primary/20 flex flex-col justify-center transition-colors duration-300">
            <h3 className="font-serif text-2xl font-bold mb-2">Send Us A Message</h3>
            <p className="text-luxury-light-gray dark:text-white/60 text-xs font-light leading-relaxed mb-8">
              Fill out the form and our guest relations team will respond to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs uppercase tracking-widest font-semibold">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={form.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  placeholder="Enter your name"
                  className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-primary/20 dark:border-primary/30'} focus:outline-none focus:border-primary text-sm bg-white dark:bg-luxury-black text-luxury-black dark:text-white`}
                />
                {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs uppercase tracking-widest font-semibold">Your Email</label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-primary/20 dark:border-primary/30'} focus:outline-none focus:border-primary text-sm bg-white dark:bg-luxury-black text-luxury-black dark:text-white`}
                />
                {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs uppercase tracking-widest font-semibold">Message</label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => {
                    setForm({ ...form, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  rows="5"
                  placeholder="Write your message here..."
                  className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500' : 'border-primary/20 dark:border-primary/30'} focus:outline-none focus:border-primary text-sm resize-none bg-white dark:bg-luxury-black text-luxury-black dark:text-white`}
                ></textarea>
                {errors.message && <span className="text-red-500 text-xs">{errors.message}</span>}
              </div>

              {success && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 text-green-700 text-xs p-4 rounded-xl"
                >
                  Your message has been sent successfully! We'll reply shortly.
                </motion.div>
              )}

              <Button type="submit" variant="primary" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
