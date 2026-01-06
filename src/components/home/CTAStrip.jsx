import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Button from '../ui/Button';

const CTAStrip = () => {
  const whatsappUrl = 'https://wa.me/919876543210?text=Hi!%20I%20have%20a%20design%20in%20mind%20for%20custom%20apparel.';

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600"></div>
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Have a design in mind?
            <br />
            Let's make it wearable.
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Share your ideas with us and we'll bring them to life with premium quality apparel
          </p>
          <Button
            variant="secondary"
            size="large"
            icon={<FaWhatsapp />}
            onClick={() => window.open(whatsappUrl, '_blank')}
            className="border-white text-white hover:bg-white hover:text-black text-base md:text-xl px-6 py-3 md:px-10 md:py-5"
          >
            Start Your Order Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAStrip;
