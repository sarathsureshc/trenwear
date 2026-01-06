import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  glass = true,
  hover = true,
  ...props 
}) => {
  const baseStyles = 'rounded-xl p-6 transition-all duration-300';
  const glassStyles = glass ? 'glass' : 'bg-zinc-900';
  const hoverStyles = hover ? 'hover-scale cursor-pointer' : '';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${baseStyles} ${glassStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
