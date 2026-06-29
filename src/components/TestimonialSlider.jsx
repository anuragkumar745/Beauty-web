import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { FiStar } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: "Ananya Panday",
    role: "Regular Guest",
    service: "Bridal Makeup",
    rating: 5,
    text: "L'Élite Aura made my wedding day magical! The makeup was flawless, felt lightweight, and lasted through the entire night. Highly recommend their bridal packages!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150"
  },
  {
    name: "Ranveer Singh",
    role: "VIP Member",
    service: "Men's Styling & Hair Spa",
    rating: 5,
    text: "The ambiance is exceptionally luxurious and the staff is highly professional. The hair spa was rejuvenating. Truly a premium experience in the heart of Mumbai.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
  },
  {
    name: "Kiara Advani",
    role: "Celebrity Client",
    service: "Nail Art & Facial",
    rating: 5,
    text: "Their Gold Glow facial and luxury nail art are out of this world. Outstanding hygiene, comfortable environment, and meticulous attention to detail.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
  },
  {
    name: "Deepika Padukone",
    role: "VIP Guest",
    service: "Hair Coloring & Styling",
    rating: 5,
    text: "Found my go-to hair salon. The stylists are certified experts who customized my hair coloring process perfectly. My hair looks radiant and feels incredibly healthy.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
  }
];

const TestimonialSlider = () => {
  return (
    <div className="w-full py-6">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={true}
        className="pb-16 px-4"
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx} className="h-full">
            <div className="h-full bg-white rounded-3xl p-8 shadow-sm border border-primary/10 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-primary/30 relative mt-4">
              
              {/* Quote Icon overlay */}
              <div className="absolute top-6 right-8 text-primary/15 text-4xl pointer-events-none">
                <FaQuoteLeft />
              </div>

              <div>
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6 text-gold">
                  {[...Array(t.rating)].map((_, i) => (
                    <FiStar key={i} className="fill-current text-gold" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-luxury-gray text-sm md:text-base leading-relaxed italic mb-8 font-light">
                  "{t.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 border-t border-primary/10 pt-6">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border border-primary/30 shadow-sm"
                  loading="lazy"
                />
                <div>
                  <h5 className="font-serif text-luxury-black font-semibold text-sm md:text-base">{t.name}</h5>
                  <p className="text-primary text-[10px] uppercase tracking-widest mt-0.5 font-medium">{t.service} &bull; {t.role}</p>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
