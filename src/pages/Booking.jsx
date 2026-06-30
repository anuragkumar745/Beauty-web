import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiUser, FiPhone, FiMail, FiCalendar, FiClock, FiMessageSquare } from 'react-icons/fi';
import Button from '../components/Button';
import { services } from '../data/services';
import SEO from '../seo';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (serviceParam) {
      setFormData((prev) => ({ ...prev, service: serviceParam }));
    }
  }, [serviceParam]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-()]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.date) newErrors.date = 'Preferred date is required';
    if (!formData.time) newErrors.time = 'Preferred time is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const bookingSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Book an Appointment",
    "description": "Book a premium hair styling, bridal makeup, spa session or tattoo consultation at Barça 10 Salon.",
    "url": "https://barca10salon.com/booking"
  };

  return (
    <div className="pt-28 pb-20 bg-champagne dark:bg-luxury-black transition-colors duration-300 min-h-screen text-luxury-black dark:text-white">
      <SEO title="Book Appointment" description="Book your beauty treatment or body art consultation online at Barça 10 Salon." schema={bookingSchema} />
      
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-xs uppercase tracking-[0.3em] font-semibold">Reservations</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold mt-2">Book Your Appointment</h1>
          <p className="text-luxury-light-gray dark:text-white/60 text-xs md:text-sm font-light mt-4 max-w-lg mx-auto leading-relaxed">
            Reserve your session with our elite beauty artisans. We will confirm your appointment via phone/WhatsApp within 2 hours.
          </p>
        </div>

        {/* Success Screen */}
        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glassmorphism dark:glassmorphism-dark rounded-3xl p-10 text-center shadow-xl border border-primary/20 max-w-md mx-auto"
          >
            <div className="text-primary text-6xl flex justify-center mb-6">
              <FiCheckCircle />
            </div>
            <h2 className="font-serif text-2xl font-bold mb-3">Appointment Requested!</h2>
            <p className="text-luxury-gray dark:text-white/80 text-sm font-light leading-relaxed mb-8">
              Thank you, <strong className="font-semibold text-luxury-black dark:text-white">{formData.name}</strong>. Your request for <strong className="font-semibold text-luxury-black dark:text-white">{formData.service}</strong> on <strong className="font-semibold text-luxury-black dark:text-white">{formData.date}</strong> at <strong className="font-semibold text-luxury-black dark:text-white">{formData.time}</strong> has been received. We will contact you shortly.
            </p>
            <div className="flex flex-col gap-3">
              <a 
                href={`https://wa.me/919654399680?text=Hi%20Bar%C3%A7a%2010%20Salon!%20I%20just%20submitted%20a%20booking%20request%20for%20${encodeURIComponent(formData.service)}%20on%20${formData.date}%20at%20${formData.time}.`}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full block font-medium"
              >
                <Button variant="primary" className="w-full">
                  Confirm via WhatsApp
                </Button>
              </a>
              <Button variant="secondary" onClick={() => setIsSubmitted(false)}>
                Book Another Service
              </Button>
            </div>
          </motion.div>
        ) : (
          /* Form Screen */
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-luxury-dark rounded-3xl p-8 md:p-12 shadow-xl border border-primary/10 dark:border-primary/20 flex flex-col gap-6"
          >
            {/* Name Input */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs uppercase tracking-widest font-semibold text-luxury-black dark:text-white/90 flex items-center gap-1.5">
                <FiUser className="text-primary" /> Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-primary/20 dark:border-primary/30'} focus:outline-none focus:border-primary text-sm bg-white dark:bg-luxury-black text-luxury-black dark:text-white`}
              />
              {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name}</span>}
            </div>

            {/* Contact Group */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-xs uppercase tracking-widest font-semibold text-luxury-black dark:text-white/90 flex items-center gap-1.5">
                  <FiPhone className="text-primary" /> Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 9876543210"
                  className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-primary/20 dark:border-primary/30'} focus:outline-none focus:border-primary text-sm bg-white dark:bg-luxury-black text-luxury-black dark:text-white`}
                />
                {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone}</span>}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs uppercase tracking-widest font-semibold text-luxury-black dark:text-white/90 flex items-center gap-1.5">
                  <FiMail className="text-primary" /> Email Address (Optional)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. grace@example.com"
                  className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-primary/20 dark:border-primary/30'} focus:outline-none focus:border-primary text-sm bg-white dark:bg-luxury-black text-luxury-black dark:text-white`}
                />
                {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
              </div>
            </div>

            {/* Service Selection */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="service" className="text-xs uppercase tracking-widest font-semibold text-luxury-black dark:text-white/90">
                Select Service
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${errors.service ? 'border-red-500' : 'border-primary/20 dark:border-primary/30'} focus:outline-none focus:border-primary text-sm bg-white dark:bg-luxury-black text-luxury-black dark:text-white cursor-pointer`}
              >
                <option value="" className="dark:bg-luxury-dark text-luxury-light-gray">Choose a treatment...</option>
                {services.map((s) => (
                  <option key={s.id} value={s.name} className="dark:bg-luxury-dark text-luxury-black dark:text-white">{s.name} - (₹{s.price})</option>
                ))}
              </select>
              {errors.service && <span className="text-red-500 text-xs mt-1">{errors.service}</span>}
            </div>

            {/* Date and Time Group */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Date */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="date" className="text-xs uppercase tracking-widest font-semibold text-luxury-black dark:text-white/90 flex items-center gap-1.5">
                  <FiCalendar className="text-primary" /> Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.date ? 'border-red-500' : 'border-primary/20 dark:border-primary/30'} focus:outline-none focus:border-primary text-sm bg-white dark:bg-luxury-black text-luxury-black dark:text-white cursor-pointer`}
                />
                {errors.date && <span className="text-red-500 text-xs mt-1">{errors.date}</span>}
              </div>

              {/* Time */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="time" className="text-xs uppercase tracking-widest font-semibold text-luxury-black dark:text-white/90 flex items-center gap-1.5">
                  <FiClock className="text-primary" /> Preferred Time
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.time ? 'border-red-500' : 'border-primary/20 dark:border-primary/30'} focus:outline-none focus:border-primary text-sm bg-white dark:bg-luxury-black text-luxury-black dark:text-white cursor-pointer`}
                >
                  <option value="" className="dark:bg-luxury-dark text-luxury-light-gray">Choose a slot...</option>
                  <option value="10:00 AM" className="dark:bg-luxury-dark text-luxury-black dark:text-white">10:00 AM</option>
                  <option value="11:30 AM" className="dark:bg-luxury-dark text-luxury-black dark:text-white">11:30 AM</option>
                  <option value="01:00 PM" className="dark:bg-luxury-dark text-luxury-black dark:text-white">01:00 PM</option>
                  <option value="02:30 PM" className="dark:bg-luxury-dark text-luxury-black dark:text-white">02:30 PM</option>
                  <option value="04:00 PM" className="dark:bg-luxury-dark text-luxury-black dark:text-white">04:00 PM</option>
                  <option value="05:30 PM" className="dark:bg-luxury-dark text-luxury-black dark:text-white">05:30 PM</option>
                  <option value="07:00 PM" className="dark:bg-luxury-dark text-luxury-black dark:text-white">07:00 PM</option>
                </select>
                {errors.time && <span className="text-red-500 text-xs mt-1">{errors.time}</span>}
              </div>
            </div>

            {/* Special Instructions */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs uppercase tracking-widest font-semibold text-luxury-black dark:text-white/90 flex items-center gap-1.5">
                <FiMessageSquare className="text-primary" /> Special Instructions
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Any skin allergies, hair types, or specific stylists you prefer?"
                className="w-full px-4 py-3 rounded-xl border border-primary/20 dark:border-primary/30 focus:outline-none focus:border-primary text-sm bg-white dark:bg-luxury-black text-luxury-black dark:text-white resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button type="submit" variant="primary" className="w-full py-4 text-center">
                Submit Reservation
              </Button>
            </div>

          </motion.form>
        )}

      </div>
    </div>
  );
};

export default Booking;
