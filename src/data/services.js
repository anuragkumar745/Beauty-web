import bridalMakeupImg from '../assets/bridal_makeup.jpg';
import hairSalonImg from '../assets/hair_salon.jpg';
import nailArtImg from '../assets/nail_art.jpg';
import spaTreatmentImg from '../assets/spa_treatment.jpg';

export const services = [
  // Makeup Category
  {
    id: 'bridal-makeup',
    name: 'Bridal Makeup & Styling',
    category: 'Makeup',
    price: '15,000',
    duration: '180 mins',
    description: 'Exquisite, long-lasting premium bridal makeup tailored for your special day. Includes high-definition makeup, eyelash extensions, and luxury saree draping.',
    image: bridalMakeupImg
  },
  {
    id: 'airbrush-makeup',
    name: 'Airbrush Makeup',
    category: 'Makeup',
    price: '8,500',
    duration: '120 mins',
    description: 'Flawless, camera-ready airbrush finish offering uniform coverage, outstanding durability, and a lightweight feel. Ideal for photoshoots and grand occasions.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600'
  },
  {
    id: 'hd-makeup',
    name: 'HD Party Makeup',
    category: 'Makeup',
    price: '5,000',
    duration: '90 mins',
    description: 'High-definition makeup designed to diffuse light, hide imperfections, and look completely natural on and off camera.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600'
  },
  {
    id: 'party-makeup',
    name: 'Classic Party Makeup',
    category: 'Makeup',
    price: '3,500',
    duration: '60 mins',
    description: 'Sleek, elegant makeup for cocktails, receptions, or social events, matched beautifully with your attire.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600'
  },
  {
    id: 'saree-draping',
    name: 'Saree & Lehenga Draping',
    category: 'Makeup',
    price: '1,200',
    duration: '30 mins',
    description: 'Traditional and modern style draping services done with precision to ensure you feel secure and comfortable all night.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600'
  },
  
  // Hair Category
  {
    id: 'hair-styling',
    name: 'Signature Haircut & Blowdry',
    category: 'Hair',
    price: '1,500',
    duration: '45 mins',
    description: 'Personalized consultation followed by a premium wash, signature cut, and a professional blowout styling.',
    image: hairSalonImg
  },
  {
    id: 'keratin-treatment',
    name: 'Premium Keratin Smoothing',
    category: 'Hair',
    price: '6,500',
    duration: '150 mins',
    description: 'Advanced hair smoothing treatment that restores protein, eliminates frizz, and gives you shiny, manageable hair for months.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600'
  },
  {
    id: 'hair-coloring',
    name: 'Balayage & Hair Coloring',
    category: 'Hair',
    price: '5,500',
    duration: '120 mins',
    description: 'Custom global color or hand-painted balayage accents by our senior hair artisans using premium ammonia-free colors.',
    image: 'https://images.unsplash.com/photo-1605497746444-ac9dbd324ce8?w=600'
  },
  {
    id: 'hair-spa',
    name: 'Deep Nourishing Hair Spa',
    category: 'Hair',
    price: '2,200',
    duration: '60 mins',
    description: 'Steam therapy, nourishing mask, and intensive head massage to stimulate growth, treat dry scalp, and restore natural shine.',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600'
  },
  
  // Skin Care & Facials
  {
    id: 'gold-facial',
    name: 'Luxury Radiance Gold Facial',
    category: 'Skin',
    price: '4,500',
    duration: '75 mins',
    description: 'Ultimate skin brightening facial incorporating 24K gold dust and natural serums to revitalize skin elasticity and glow.',
    image: spaTreatmentImg
  },
  {
    id: 'skin-cleanup',
    name: 'Deep Cleansing & Hydra Care',
    category: 'Skin',
    price: '2,500',
    duration: '50 mins',
    description: 'Intense extraction, gentle exfoliation, and hydration mask to clean pores, remove tan, and freshen the skin texture.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600'
  },
  {
    id: 'eyelash-extensions',
    name: 'Lash Extensions (Classic/Volume)',
    category: 'Skin',
    price: '3,500',
    duration: '90 mins',
    description: 'Individually applied semi-permanent premium lash extensions to create stunning, natural-looking length and fullness.',
    image: 'https://images.unsplash.com/photo-1583001809224-119390ae70c9?w=600'
  },
  
  // Nails & Grooming
  {
    id: 'nail-art',
    name: 'Luxury Gel Extensions & Nail Art',
    category: 'Nails',
    price: '2,800',
    duration: '90 mins',
    description: 'Premium acrylic or gel extensions customized with custom, hand-painted artwork, chrome finishes, or elegant gems.',
    image: nailArtImg
  },
  {
    id: 'pedicure',
    name: 'Royal Pedicure & Manicure Spa',
    category: 'Nails',
    price: '3,000',
    duration: '80 mins',
    description: 'Relaxing hot stone bath, organic scrub, massage, and nail grooming to treat cuticles and leave hands and feet silky soft.',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600'
  },
  {
    id: 'mehendi',
    name: 'Bridal & Designer Mehendi',
    category: 'Grooming',
    price: '4,000',
    duration: '120 mins',
    description: 'Intricate, custom bridal henna artwork applied on hands and feet. Also available in Arabic and contemporary designs.',
    image: 'https://images.unsplash.com/photo-1582233479366-6d38bc390a08?w=600'
  },
  {
    id: 'viking-custom-tattoo',
    name: 'Custom Body Tattoo',
    category: 'Tattoos',
    price: '3,000 onwards',
    duration: 'Varies',
    description: 'Bespoke custom tattooing by our in-house body art partners at Viking Tattoos. Sterile, single-use needle sets and medical-grade hypoallergenic pigments.',
    image: 'https://images.unsplash.com/photo-1590246814883-57f511e76523?w=600'
  },
  {
    id: 'viking-body-piercing',
    name: 'Safe Piercing Session',
    category: 'Tattoos',
    price: '1,500',
    duration: '30 mins',
    description: 'Sterile ear, nose, or navel piercing performed with aseptic techniques and premium titanium/hypoallergenic starter studs.',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600'
  }
];

export const categories = ['All', 'Makeup', 'Hair', 'Skin', 'Nails', 'Grooming', 'Tattoos'];
