import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTruck, FaPalette, FaStar } from 'react-icons/fa';
import Section from '../ui/Section';

const WhyTrenwear = () => {
  const features = [
    {
      icon: <FaStar />,
      title: 'Premium Fabric',
      description: 'High-quality materials for lasting comfort',
    },
    {
      icon: <FaCheckCircle />,
      title: 'Perfect Fit',
      description: 'Precise measurements for ideal sizing',
    },
    {
      icon: <FaPalette />,
      title: 'Custom Designs',
      description: 'Bring your vision to life',
    },
    {
      icon: <FaTruck />,
      title: 'On-Time Delivery',
      description: 'Fast turnaround guaranteed',
    },
  ];

  return (
    <Section background="bg-zinc-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Choose <span className="text-gradient-yellow">Trenwear?</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We combine quality, customization, and speed to deliver apparel that exceeds expectations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-gradient-yellow opacity-20 blur-xl rounded-full"></div>
              <div className="relative w-20 h-20 mx-auto bg-gradient-yellow rounded-full flex items-center justify-center text-black text-3xl">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default WhyTrenwear;
