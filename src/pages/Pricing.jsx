import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiPercent, FiCalendar, FiArrowRight, FiAward } from 'react-icons/fi';
import Button from '../components/Button';
import SEO from '../seo';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('packages');

  const combos = [
    {
      title: "Bridal Package",
      subtitle: "Bespoke styling registry for brides",
      price: "15,000",
      features: [
        "Flawless HD Bridal Makeup",
        "Designer Hair Styling & Accessory Placement",
        "Traditional Saree or Lehenga Draping",
        "Luxury Gel Extensions & Nail Art",
        "Complimentary trials & consult session"
      ],
      tag: "Traditional Elite",
      gradient: false
    },
    {
      title: "Luxury Package",
      subtitle: "The ultimate full-service pampering",
      price: "22,000",
      features: [
        "Premium HD Bridal Makeup (Trial Included)",
        "Bridal Hair Couture & Accessories",
        "Luxury Pre-Bridal Hydra Facial & Clean-up",
        "Royal Spa Pedicure & Manicure",
        "Deep Nourishing Hair Spa or Smoothing",
        "Lehenga Draping & Veil Placement"
      ],
      tag: "Most Popular",
      gradient: true
    },
    {
      title: "Premium Package",
      subtitle: "Full-body restoration & style",
      price: "6,500",
      features: [
        "Global Hair Color or Advanced Haircut",
        "Deep Nourishing Hair Spa & Steam",
        "Luxury Radiance Gold Facial",
        "Standard Gel Overlay Manicure"
      ],
      tag: "Wellness Combo",
      gradient: false
    },
    {
      title: "Basic Package",
      subtitle: "Essential salon styling & care",
      price: "2,500",
      features: [
        "Signature Haircut & Blowdry",
        "Deep Cleansing Facial Cleanup",
        "Eyebrow Threading & Upper Lip",
        "Nail shaping & classic polish paint"
      ],
      tag: "Daily Glam",
      gradient: false
    }
  ];

  const individualServices = [
    { category: "Makeup Artistry", items: [
      { name: "Bridal HD Makeup & Styling", price: "15,000", duration: "180 mins" },
      { name: "Airbrush Makeup", price: "8,500", duration: "120 mins" },
      { name: "HD Party Makeup", price: "5,000", duration: "90 mins" },
      { name: "Classic Party Makeup", price: "3,500", duration: "60 mins" },
      { name: "Saree & Lehenga Draping", price: "1,200", duration: "30 mins" }
    ]},
    { category: "Hair Chemistry", items: [
      { name: "Signature Haircut & Blowdry", price: "1,500", duration: "45 mins" },
      { name: "Premium Keratin Smoothing", price: "6,500", duration: "150 mins" },
      { name: "Balayage & Hair Coloring", price: "5,500", duration: "120 mins" },
      { name: "Deep Nourishing Hair Spa", price: "2,200", duration: "60 mins" }
    ]},
    { category: "Aesthetic Skin & Spa", items: [
      { name: "Luxury Radiance Gold Facial", price: "4,500", duration: "75 mins" },
      { name: "Deep Cleansing & Hydra Care", price: "2,500", duration: "50 mins" },
      { name: "Lash Extensions (Classic/Volume)", price: "3,500", duration: "90 mins" }
    ]},
    { category: "Nail Extensions & Art", items: [
      { name: "Luxury Gel Extensions & Nail Art", price: "2,800", duration: "90 mins" },
      { name: "Royal Pedicure & Manicure Spa", price: "3,000", duration: "80 mins" },
      { name: "Bridal & Designer Mehendi", price: "4,000", duration: "120 mins" }
    ]}
  ];

  const memberships = [
    {
      title: "Gold Volume Member",
      cost: "15,000",
      validity: "12 Months Validity",
      benefits: [
        "Flat 20% off on all individual services",
        "Complimentary Signature Blowdry on your birthday",
        "Priority online slot reservations",
        "Early access to festive and bridal bookings"
      ]
    },
    {
      title: "Platinum Volume Elite Club",
      cost: "30,000",
      validity: "12 Months Validity",
      benefits: [
        "Flat 30% off on all individual services",
        "Unlimited deep conditioning Hair Spas (max 1/month)",
        "2 complimentary guest wellness vouchers",
        "Free home consultations for bridal planning"
      ]
    }
  ];

  const discounts = [
    { title: "Festive Radiance Offer", desc: "Enjoy flat 15% off on all Combo Packages during the wedding season.", code: "FESTIVE15" },
    { title: "First-Time Guest Offer", desc: "Get a complimentary blowdry or skin clean-up on your first booking above ₹3,000.", code: "VOLUME1ST" }
  ];

  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    "name": "Volume Salon Service Rates & Packages",
    "description": "Premium service prices, combo beauty packages, and gold/platinum memberships at Ranchi's best salon.",
    "priceCurrency": "INR"
  };

  return (
    <div className="pt-28 pb-20 bg-champagne dark:bg-luxury-black transition-colors duration-300 min-h-screen text-luxury-black dark:text-white">
      <SEO title="Pricing Packages & Offers" description="View Volume Salon pricing list. Bridal packages, combo spa offers, hair treatments, and exclusive memberships." schema={pricingSchema} />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-xs uppercase tracking-[0.3em] font-bold">Bespoke Rates</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold mt-2">Menu & Packages</h1>
          <p className="text-luxury-light-gray dark:text-white/60 text-xs md:text-sm font-light mt-4 max-w-lg mx-auto leading-relaxed">
            Discover transparent rates for our elite treatments, packages, and membership clubs. Select a service to reserve your session.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex justify-center mb-16">
          <div className="bg-white dark:bg-luxury-dark rounded-full p-1.5 border border-primary/15 dark:border-primary/20 flex gap-2">
            <button
              onClick={() => setActiveTab('packages')}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300 font-semibold cursor-pointer ${
                activeTab === 'packages'
                  ? 'gold-gradient text-luxury-black shadow-md'
                  : 'text-luxury-light-gray dark:text-white/60 hover:text-primary'
              }`}
            >
              Combos & Bridal
            </button>
            <button
              onClick={() => setActiveTab('individual')}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300 font-semibold cursor-pointer ${
                activeTab === 'individual'
                  ? 'gold-gradient text-luxury-black shadow-md'
                  : 'text-luxury-light-gray dark:text-white/60 hover:text-primary'
              }`}
            >
              Individual Services
            </button>
            <button
              onClick={() => setActiveTab('membership')}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300 font-semibold cursor-pointer ${
                activeTab === 'membership'
                  ? 'gold-gradient text-luxury-black shadow-md'
                  : 'text-luxury-light-gray dark:text-white/60 hover:text-primary'
              }`}
            >
              Memberships & Offers
            </button>
          </div>
        </div>

        {/* TAB 1: COMBO & BRIDAL PACKAGES */}
        {activeTab === 'packages' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {combos.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-3xl p-8 border flex flex-col justify-between relative shadow-sm hover:shadow-lg transition-all duration-300 ${
                  pkg.gradient
                    ? 'bg-luxury-black text-white border-primary/30'
                    : 'bg-white dark:bg-luxury-dark border-primary/10 dark:border-primary/20'
                }`}
              >
                {pkg.tag && (
                  <span className={`absolute top-4 right-4 text-[9px] uppercase tracking-widest font-bold px-3 py-1 rounded-full ${
                    pkg.gradient ? 'bg-primary text-luxury-black' : 'bg-primary/10 text-primary-dark dark:text-primary'
                  }`}>
                    {pkg.tag}
                  </span>
                )}

                <div>
                  <h3 className={`font-serif text-xl md:text-2xl font-bold mb-1 ${pkg.gradient ? 'text-primary' : ''}`}>{pkg.title}</h3>
                  <p className={`text-xs font-light mb-6 ${pkg.gradient ? 'text-white/60' : 'text-luxury-light-gray dark:text-white/50'}`}>{pkg.subtitle}</p>
                  
                  <div className="flex items-baseline gap-1 mb-8 border-b border-primary/15 pb-6">
                    <span className={`text-xs uppercase font-semibold ${pkg.gradient ? 'text-primary/70' : 'text-primary-dark dark:text-primary'}`}>₹</span>
                    <span className="text-4xl font-serif font-bold">{pkg.price}</span>
                    <span className={`text-[10px] uppercase font-light ml-2 ${pkg.gradient ? 'text-white/40' : 'text-luxury-light-gray dark:text-white/40'}`}>All-inclusive rate</span>
                  </div>

                  <ul className="flex flex-col gap-4 mb-8">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex gap-3 items-start text-xs md:text-sm font-light">
                        <FiCheckCircle className="text-primary shrink-0 mt-0.5" />
                        <span className={pkg.gradient ? 'text-white/80' : 'text-luxury-gray dark:text-white/80'}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to={`/booking?service=${encodeURIComponent(pkg.title)}`}>
                  <Button variant={pkg.gradient ? 'primary' : 'secondary'} className="w-full">
                    Book Package Now
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* TAB 2: INDIVIDUAL SERVICES MENU */}
        {activeTab === 'individual' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {individualServices.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white dark:bg-luxury-dark rounded-3xl p-8 border border-primary/10 dark:border-primary/20 shadow-sm"
              >
                <h3 className="font-serif text-xl font-bold border-b border-primary/15 pb-4 mb-6 text-primary dark:text-primary-light">
                  {cat.category}
                </h3>
                
                <div className="flex flex-col gap-6">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex flex-col gap-1 group">
                      <div className="flex justify-between items-baseline gap-4">
                        <Link 
                          to={`/booking?service=${encodeURIComponent(item.name)}`}
                          className="font-serif text-sm md:text-base font-bold hover:text-primary transition-colors flex items-center gap-1.5"
                        >
                          {item.name} <FiArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        <div className="flex-grow border-b border-dotted border-primary/25 mx-2"></div>
                        <span className="font-serif font-bold text-primary-dark dark:text-primary">₹{item.price}</span>
                      </div>
                      <span className="text-[10px] text-luxury-light-gray dark:text-white/40 tracking-wider">Duration: {item.duration}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* TAB 3: MEMBERSHIPS & OFFERS */}
        {activeTab === 'membership' && (
          <div className="flex flex-col gap-16">
            
            {/* Membership plans */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {memberships.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-luxury-dark border border-primary/15 dark:border-primary/20 rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <FiAward className="text-primary text-2xl" />
                      <h3 className="font-serif text-xl font-bold uppercase tracking-wider">{member.title}</h3>
                    </div>
                    <p className="text-xs text-primary-dark dark:text-primary-light font-semibold mb-6">{member.validity}</p>
                    
                    <div className="flex items-baseline gap-1 mb-8 border-b border-primary/10 pb-6">
                      <span className="text-xs uppercase font-semibold text-primary">₹</span>
                      <span className="text-4xl font-serif font-bold">{member.cost}</span>
                      <span className="text-[10px] text-luxury-light-gray dark:text-white/40 uppercase ml-2">annual subscription fee</span>
                    </div>

                    <ul className="flex flex-col gap-4 mb-8">
                      {member.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex gap-3 items-start text-xs md:text-sm font-light">
                          <FiCheckCircle className="text-primary shrink-0 mt-0.5" />
                          <span className="text-luxury-gray dark:text-white/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href={`https://wa.me/919876543210?text=Hi!%20I'd%20like%20to%20inquire%20about%20the%20${encodeURIComponent(member.title)}%20membership.`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full block"
                  >
                    <Button variant="secondary" className="w-full">
                      Inquire via WhatsApp
                    </Button>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Special Discounts */}
            <div className="bg-luxury-black text-white rounded-3xl p-8 md:p-12 border border-primary/20 shadow-lg">
              <h3 className="font-serif text-2xl font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-2">
                <FiPercent /> Seasonal Campaigns & Offers
              </h3>
              <p className="text-white/70 text-xs md:text-sm font-light mb-8 max-w-lg">
                Enter these codes in the special instructions field during appointment booking or mention them to our reception desk to apply.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {discounts.map((disc, idx) => (
                  <div key={idx} className="bg-luxury-gray/50 border border-primary/10 rounded-2xl p-6 flex flex-col justify-between gap-4">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-white mb-2">{disc.title}</h4>
                      <p className="text-white/60 text-xs font-light leading-relaxed">{disc.desc}</p>
                    </div>
                    <div className="flex items-center justify-between mt-2 pt-4 border-t border-white/5">
                      <span className="text-[10px] text-primary uppercase font-bold tracking-widest">Promo Code</span>
                      <span className="font-mono text-xs font-bold bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded">
                        {disc.code}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default Pricing;
