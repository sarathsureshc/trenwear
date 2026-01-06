import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaTshirt, FaCheckCircle, FaCog, FaTruck } from 'react-icons/fa';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const Process = () => {
  const steps = [
    {
      number: 1,
      icon: <FaLightbulb />,
      title: 'Share Your Idea',
      description: 'Contact us with your design concept, logo, or customization requirements. We\'re here to help bring your vision to life.',
    },
    {
      number: 2,
      icon: <FaTshirt />,
      title: 'Choose Fabric & Color',
      description: 'Select from our range of premium fabrics and colors. We\'ll guide you to the best options for your needs.',
    },
    {
      number: 3,
      icon: <FaCheckCircle />,
      title: 'Design Approval',
      description: 'Review and approve the final design mockup. We refine until you\'re 100% satisfied with the result.',
    },
    {
      number: 4,
      icon: <FaCog />,
      title: 'Production',
      description: 'Our skilled team manufactures your custom apparel with precision and quality control at every step.',
    },
    {
      number: 5,
      icon: <FaTruck />,
      title: 'Delivery',
      description: 'Receive your premium custom apparel on time. We ensure fast delivery without compromising quality.',
    },
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
            Our <span className="text-gradient-yellow">Process</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            From concept to delivery, we make custom apparel creation simple and transparent
          </p>
        </motion.div>
      </Section>

      <Section background="bg-black">
        <div className="relative">
          {/* Timeline Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <Card className={`${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-yellow rounded-full flex items-center justify-center text-black text-2xl flex-shrink-0">
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-400">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Step Number (visible on desktop) */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-yellow rounded-full flex items-center justify-center text-black text-xl font-bold border-4 border-black">
                  {step.number}
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-gray-400 mb-6">Contact us today and let's create something amazing together</p>
          <a
            href="https://wa.me/919876543210?text=Hi!%20I%20would%20like%20to%20start%20a%20custom%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-yellow text-black font-semibold px-8 py-4 rounded-lg hover:scale-105 transition-transform"
          >
            Start Your Order
          </a>
        </motion.div>
      </Section>
    </div>
  );
};

export default Process;
