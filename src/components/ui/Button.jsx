import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  className = '',
  icon,
  ...props 
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 uppercase tracking-wide hover-scale';
  
  const variants = {
    primary: 'bg-gradient-yellow text-black hover:shadow-lg hover:shadow-yellow-500/50',
    secondary: 'border-2 border-white text-white hover:bg-white hover:text-black',
    whatsapp: 'bg-green-500 text-white hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/50',
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {icon && <span className="text-xl">{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;
