import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import Button from '../ui/Button';

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = 'https://wa.me/919876543210?text=Hi!%20I%20would%20like%20to%20know%20more%20about%20your%20custom%20apparel%20services.';

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl top-20 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-red-500/10 rounded-full blur-3xl bottom-20 -right-48 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Customize Your Style.
              <br />
              <span className="text-gradient-yellow">Wear Your Identity.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl"
            >
              Premium custom apparel for schools, offices, events & sports. 
              Quality fabrics, perfect fit, and designs that make you stand out.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="primary"
                size="large"
                icon={<FaWhatsapp />}
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                WhatsApp Now
              </Button>
              <Button
                variant="secondary"
                size="large"
                icon={<FaArrowRight />}
                onClick={scrollToServices}
              >
                View Services
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-gradient-yellow">5.0</h3>
                <p className="text-gray-400 text-sm">Google Rating</p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-gradient-yellow">500+</h3>
                <p className="text-gray-400 text-sm">Happy Clients</p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-gradient-yellow">24hr</h3>
                <p className="text-gray-400 text-sm">Fast Turnaround</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Placeholder for hero image - will be replaced with generated image */}
              <div className="relative h-[500px] flex items-center justify-center">
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute w-full h-full flex items-center justify-center"
                >
                  <div className="grid grid-cols-3 gap-4">
                    {/* T-Shirt */}
                    <div className="glass p-6 rounded-2xl hover-scale">
                      <div className="w-24 h-32 bg-gradient-yellow rounded-lg"></div>
                      <p className="text-center text-xs mt-2">T-Shirts</p>
                    </div>
                    {/* Polo */}
                    <div className="glass p-6 rounded-2xl hover-scale">
                      <div className="w-24 h-32 bg-gradient-burgundy rounded-lg"></div>
                      <p className="text-center text-xs mt-2">Polos</p>
                    </div>
                    {/* Jersey */}
                    <div className="glass p-6 rounded-2xl hover-scale">
                      <div className="w-24 h-32 bg-red-500 rounded-lg"></div>
                      <p className="text-center text-xs mt-2">Jerseys</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
