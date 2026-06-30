import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaInstagram, FaFacebookF, FaPinterestP, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const servicesLinks = [
    { name: 'Bridal Makeup & Styling', path: '/services' },
    { name: 'Hair Cut & Styling', path: '/services' },
    { name: 'Luxury Facials & Cleanups', path: '/services' },
    { name: 'Nail Art & Manicure', path: '/services' },
    { name: 'Body Spa & Massages', path: '/services' }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Pricing Plans', path: '/pricing' },
    { name: 'Meet the Team', path: '/team' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <footer className="bg-luxury-black text-white pt-20 pb-10 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* About & Newsletter Column */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-widest text-primary gold-text-gradient uppercase">
              Barça 10 Salon
            </span>
            <span className="text-[9px] tracking-[0.3em] text-white uppercase mt-0.5 font-light">
              Spa, Nails & Makeup Studio
            </span>
          </Link>
          <p className="text-white/60 text-xs md:text-sm leading-relaxed font-light">
            Indulge in a premium beauty experience where style meets luxury. Our certified beauty artisans are dedicated to accentuating your natural elegance.
          </p>
          
          {/* Newsletter Subscription */}
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 mt-2">
            <label className="text-[10px] uppercase tracking-widest text-primary font-semibold">Subscribe to Offers</label>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-luxury-gray text-white text-xs px-3 py-2.5 rounded-xl border border-primary/20 focus:outline-none focus:border-primary w-full"
                required
              />
              <button 
                type="submit" 
                className="gold-gradient text-luxury-black font-semibold text-xs px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap"
              >
                Join
              </button>
            </div>
            {subscribed && <span className="text-green-400 text-[10px] mt-1">Successfully subscribed!</span>}
          </form>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-white/80 hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110 cursor-pointer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-white/80 hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110 cursor-pointer">
              <FaFacebookF />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-white/80 hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110 cursor-pointer">
              <FaPinterestP />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-white/80 hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110 cursor-pointer">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-6">
          <h4 className="font-serif text-lg text-primary uppercase tracking-widest font-semibold">Quick Links</h4>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="text-white/60 hover:text-primary text-sm transition-colors duration-300 font-light flex items-center gap-2">
                  <span className="text-primary text-[8px]">&#9670;</span> {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div className="flex flex-col gap-6">
          <h4 className="font-serif text-lg text-primary uppercase tracking-widest font-semibold">Our Services</h4>
          <ul className="flex flex-col gap-3">
            {servicesLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="text-white/60 hover:text-primary text-sm transition-colors duration-300 font-light flex items-center gap-2">
                  <span className="text-primary text-[8px]">&#9670;</span> {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col gap-6 col-span-1">
          <h4 className="font-serif text-lg text-primary uppercase tracking-widest font-semibold">Contact Info</h4>
          <ul className="flex flex-col gap-4 text-sm font-light text-white/60">
            <li className="flex gap-3 items-start">
              <FiMapPin className="text-primary text-lg shrink-0 mt-0.5" />
              <div>
                <p>1st Floor, No. 205, Ghosh Ln, Gudari Bazar,</p>
                <p>Ward No - 17, Samastipur, Bihar - 848101</p>
                <a 
                  href="https://maps.google.com/?q=Barca10+Salon+Gudari+Bazar+Samastipur+Bihar+848101" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:text-primary-light transition-colors duration-300 text-xs mt-1 block uppercase tracking-wider font-semibold cursor-pointer"
                >
                  View on Google Maps
                </a>
              </div>
            </li>
            <li className="flex gap-3 items-center">
              <FiPhone className="text-primary text-lg" />
              <a href="tel:+919654399680" className="hover:text-primary transition-colors duration-300 cursor-pointer">+91 96543 99680</a>
            </li>
            <li className="flex gap-3 items-center">
              <FiMail className="text-primary text-lg" />
              <a href="mailto:info@barca10salon.com" className="hover:text-primary transition-colors duration-300 cursor-pointer">info@barca10salon.com</a>
            </li>
            <li className="flex gap-3 items-start">
              <FiClock className="text-primary text-lg shrink-0 mt-0.5" />
              <div>
                <p>Mon - Sun: 10:00 AM - 9:00 PM</p>
                <p>(Open Seven Days A Week)</p>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-white/40">
        <p>&copy; {currentYear} Barça 10 Salon. All Rights Reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-primary transition-colors duration-300">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary transition-colors duration-300">Terms of Service</Link>
          <Link to="/contact" className="hover:text-primary transition-colors duration-300">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
