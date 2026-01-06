import React from 'react';
import { motion } from 'framer-motion';
import { FaTshirt, FaSchool, FaBriefcase, FaFutbol } from 'react-icons/fa';
import Card from '../ui/Card';
import Section from '../ui/Section';

const Services = () => {
  const services = [
    {
      icon: <FaTshirt />,
      title: 'Custom T-Shirts',
      description: 'Personalized designs for any occasion',
    },
    {
      icon: <FaSchool />,
      title: 'School Uniforms',
      description: 'NSS, SPC, Little Kites & more',
    },
    {
      icon: <FaBriefcase />,
      title: 'Corporate Wear',
      description: 'Professional office apparel',
    },
    {
      icon: <FaFutbol />,
      title: 'Sports Jerseys',
      description: 'Sublimation printing for teams',
    },
  ];

  return (
    <Section id="services" background="bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="text-gradient-yellow">Services</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          From custom t-shirts to corporate uniforms, we handle all your apparel needs with premium quality and fast turnaround.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-yellow rounded-full flex items-center justify-center text-black text-3xl group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
