import React from 'react';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import SEO from '../seo';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: "Anjali Sharma",
    role: "Founder & Creative Director",
    specialization: "Bridal Makeup & Premium Styling",
    experience: "15+ Years",
    bio: "Certified from Paris Academy of Beauty, Anjali has worked with leading celebrities and holds a specialization in creating flawless, modern HD bridal looks.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500",
    awards: ["Vogue Bridal Artist of the Year", "Master Makeup Artist 2024"]
  },
  {
    name: "Michael D'Souza",
    role: "Senior Hair Artisan",
    specialization: "Keratin, Balayage & Hair Transformations",
    experience: "10+ Years",
    bio: "Trained at Vidal Sassoon London, Michael is a master of precision cuts and customized hair color chemistry, specializing in keratin therapies and balayage.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500",
    awards: ["L'Oréal Hair Colorist Gold Award"]
  },
  {
    name: "Pooja Patel",
    role: "Nail Art Stylist",
    specialization: "Gel/Acrylic Extensions & Custom Hand Artwork",
    experience: "8+ Years",
    bio: "Pooja brings creative design to life. From subtle chrome finishes to complex 3D nail embellishments, her craftsmanship is legendary.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500",
    awards: ["National Nail Art Champion 2023"]
  },
  {
    name: "Elena Rostova",
    role: "Skincare Specialist & Esthetician",
    specialization: "Luxury Facials, Hydra Care & Therapy",
    experience: "12+ Years",
    bio: "With a background in dermatology aesthetics, Elena customizes skin therapies to restore youthfulness, specializing in hydra facials and anti-aging treatments.",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fce6e?w=500",
    awards: ["Best Esthetician Award - Spa India"]
  }
];

const Team = () => {
  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Meet the Team - Volume Salon",
    "description": "Meet our certified stylists, makeup artists, and skincare experts at Volume Salon in Ranchi.",
    "url": "https://volumesalonranchi.app/team"
  };

  return (
    <div className="pt-28 pb-20 bg-champagne dark:bg-luxury-black transition-colors duration-300 min-h-screen text-luxury-black dark:text-white">
      <SEO title="Meet Our Team" description="Learn about the certified beauty professionals, stylists, and estheticians at Volume Salon." schema={teamSchema} />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-xs uppercase tracking-[0.3em] font-semibold">Artisans</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold mt-2">Meet Our Elite Experts</h1>
          <p className="text-luxury-light-gray dark:text-white/60 text-xs md:text-sm font-light mt-4 max-w-lg mx-auto leading-relaxed">
            Our team comprises international certified beauty specialists dedicated to providing a premium bespoke experience.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-luxury-dark rounded-3xl overflow-hidden shadow-sm border border-primary/10 dark:border-primary/20 hover:border-primary/30 transition-all duration-300 grid grid-cols-1 sm:grid-cols-12"
            >
              
              {/* Image Section */}
              <div className="sm:col-span-5 h-64 sm:h-full relative overflow-hidden group">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-luxury-black/80 px-3 py-1 rounded-full border border-primary/20 text-primary text-[10px] tracking-widest uppercase font-semibold">
                  {member.experience} EXP
                </div>
              </div>

              {/* Info Section */}
              <div className="sm:col-span-7 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-luxury-black dark:text-white mb-1">{member.name}</h3>
                  <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-4">{member.role}</p>
                  
                  <div className="bg-soft-pink/50 dark:bg-primary/5 rounded-xl p-3 border border-primary/10 dark:border-primary/20 mb-4">
                    <p className="text-luxury-black dark:text-white/90 text-[10px] font-medium uppercase tracking-wider mb-1">Specialization</p>
                    <p className="text-luxury-gray dark:text-white/70 text-xs font-light">{member.specialization}</p>
                  </div>

                  <p className="text-luxury-light-gray dark:text-white/60 text-xs md:text-sm font-light leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Awards */}
                  {member.awards && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {member.awards.map((award, aIdx) => (
                        <span key={aIdx} className="inline-flex items-center gap-1 bg-champagne dark:bg-luxury-black text-primary-dark dark:text-primary border border-primary/20 dark:border-primary/30 px-2.5 py-1 rounded text-[10px] uppercase font-semibold">
                          <FiAward /> {award}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <Link to="/booking">
                  <Button variant="secondary" className="w-full text-xs cursor-pointer">
                    Book Consultation
                  </Button>
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Team;
