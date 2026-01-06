import React from 'react';
import { motion } from 'framer-motion';
import { FaTshirt, FaSchool, FaBriefcase, FaFutbol, FaBirthdayCake, FaRunning } from 'react-icons/fa';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const ServicesPage = () => {
  const services = [
    {
      icon: <FaTshirt />,
      title: 'Customized T-Shirts',
      description: 'Premium quality custom t-shirts with your designs, logos, or text. Perfect for personal use, gifts, or promotional purposes.',
      features: ['High-quality fabric', 'Vibrant printing', 'All sizes available', 'Fast delivery'],
      gradient: 'from-yellow-600 to-orange-600',
    },
    {
      icon: <FaSchool />,
      title: 'School Uniforms',
      description: 'Complete uniform solutions for schools including NSS, SPC, Little Kites programs. Durable fabrics with perfect fit.',
      features: ['Durable materials', 'Standard designs', 'Bulk orders', 'Custom embroidery'],
      gradient: 'from-blue-600 to-blue-800',
    },
    {
      icon: <FaBriefcase />,
      title: 'Corporate & Office Wear',
      description: 'Professional corporate apparel for offices, teams, and businesses. Enhance your brand identity with quality uniforms.',
      features: ['Professional look', 'Logo printing', 'Formal & casual options', 'Consistent quality'],
      gradient: 'from-purple-600 to-purple-800',
    },
    {
      icon: <FaFutbol />,
      title: 'Sports Jerseys',
      description: 'High-performance sublimation jerseys for sports teams. Breathable fabric with vibrant, long-lasting colors.',
      features: ['Sublimation printing', 'Moisture-wicking', 'Team numbers & names', 'Custom designs'],
      gradient: 'from-red-600 to-red-800',
    },
    {
      icon: <FaBirthdayCake />,
      title: 'Event & Party Wear',
      description: 'Custom apparel for birthdays, weddings, and special events. Make your celebrations memorable with personalized t-shirts.',
      features: ['Photo printing', 'Party themes', 'Group orders', 'Quick turnaround'],
      gradient: 'from-pink-600 to-pink-800',
    },
    {
      icon: <FaRunning />,
      title: 'Track Pants & Overcoats',
      description: 'Comfortable and stylish track pants and overcoats for schools, sports teams, and casual wear.',
      features: ['Comfortable fit', 'Quality zippers', 'All sizes', 'Customization available'],
      gradient: 'from-green-600 to-green-800',
    },
  ];

  const whatsappUrl = 'https://wa.me/919876543210?text=Hi!%20I%20would%20like%20to%20get%20a%20quote.';

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
            Our <span className="text-gradient-yellow">Services</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            From custom t-shirts to complete uniform solutions, we offer premium quality apparel 
            customization services for every need.
          </p>
        </motion.div>
      </Section>

      <Section background="bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full">
                <div className={`h-48 bg-gradient-to-br ${service.gradient} rounded-lg mb-6 flex items-center justify-center text-6xl text-white`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-300">
                      <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="primary"
                  size="medium"
                  onClick={() => window.open(whatsappUrl, '_blank')}
                  className="w-full"
                >
                  Get Quote
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default ServicesPage;
