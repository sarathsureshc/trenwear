import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';

const Gallery = () => {
  const galleryItems = [
    { category: 'Custom T-Shirts', color: 'from-yellow-600 to-orange-600' },
    { category: 'School Uniforms', color: 'from-blue-600 to-blue-800' },
    { category: 'Sports Jerseys', color: 'from-red-600 to-red-800' },
    { category: 'Corporate Wear', color: 'from-purple-600 to-purple-800' },
    { category: 'Event Apparel', color: 'from-pink-600 to-pink-800' },
    { category: 'Track Pants', color: 'from-green-600 to-green-800' },
    { category: 'Custom Polos', color: 'from-indigo-600 to-indigo-800' },
    { category: 'Hoodies', color: 'from-gray-600 to-gray-800' },
    { category: 'Party Wear', color: 'from-rose-600 to-rose-800' },
  ];

  return (
    <div className="pt-20">
      <Section background="bg-gradient-hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient-yellow">Gallery</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Explore our portfolio of custom apparel creations
          </p>
        </motion.div>
      </Section>

      <Section background="bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`}></div>
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-32 h-40 mx-auto bg-white/10 rounded-lg backdrop-blur-sm mb-4"></div>
                  <h3 className="text-xl font-bold text-white">{item.category}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 glass p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-3">Want to See More?</h3>
          <p className="text-gray-400 mb-6">
            Follow us on Instagram for daily updates and customer showcases
          </p>
          <a
            href="#"
            className="inline-block bg-gradient-yellow text-black font-semibold px-8 py-3 rounded-lg hover:scale-105 transition-transform"
          >
            Follow on Instagram
          </a>
        </motion.div>
      </Section>
    </div>
  );
};

export default Gallery;
