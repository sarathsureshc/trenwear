import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Card from '../ui/Card';

const ProductShowcase = () => {
  const products = [
    {
      name: 'Premium Polos',
      category: 'Corporate',
      color: 'from-blue-600 to-blue-800',
    },
    {
      name: 'Sports Jerseys',
      category: 'Athletics',
      color: 'from-red-600 to-red-800',
    },
    {
      name: 'Custom Hoodies',
      category: 'Casual',
      color: 'from-purple-600 to-purple-800',
    },
    {
      name: 'Event T-Shirts',
      category: 'Special',
      color: 'from-green-600 to-green-800',
    },
    {
      name: 'School Uniforms',
      category: 'Education',
      color: 'from-yellow-600 to-yellow-800',
    },
    {
      name: 'Track Pants',
      category: 'Sports',
      color: 'from-orange-600 to-orange-800',
    },
  ];

  return (
    <Section id="products" background="bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Product <span className="text-gradient-yellow">Showcase</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore our range of customizable apparel for every need
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="group overflow-hidden">
              <div className={`h-48 bg-gradient-to-br ${product.color} rounded-lg mb-4 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="w-24 h-32 mx-auto bg-white/10 rounded-lg backdrop-blur-sm"></div>
                </div>
              </div>
              <div>
                <span className="text-xs text-yellow-400 uppercase tracking-wider">{product.category}</span>
                <h3 className="text-xl font-semibold mt-1">{product.name}</h3>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default ProductShowcase;
