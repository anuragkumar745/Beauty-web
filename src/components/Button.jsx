import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', // primary (gold), secondary (outline), dark (black), text
  className = '', 
  icon
}) => {
  const baseStyle = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 text-xs md:text-sm tracking-widest uppercase shadow-md hover:shadow-lg focus:outline-none cursor-pointer";
  
  const variants = {
    primary: "gold-gradient text-luxury-black font-semibold border border-transparent hover:brightness-110 active:scale-95",
    secondary: "border border-primary text-primary hover:bg-primary hover:text-luxury-black active:scale-95 bg-transparent",
    dark: "bg-luxury-black hover:bg-luxury-gray text-primary border border-primary/30 active:scale-95",
    text: "text-primary hover:text-primary-light hover:underline shadow-none hover:shadow-none p-0 bg-transparent"
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
      {icon && <span className="text-base">{icon}</span>}
    </motion.button>
  );
};

export default Button;
