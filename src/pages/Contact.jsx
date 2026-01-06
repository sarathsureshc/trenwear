import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Contact = () => {
  const whatsappUrl = 'https://wa.me/919876543210?text=Hi!%20I%20would%20like%20to%20get%20in%20touch.';

  const contactMethods = [
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      value: '+91 98765 43210',
      link: whatsappUrl,
      color: 'from-green-600 to-green-800',
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 98765 43210',
      link: 'tel:+919876543210',
      color: 'from-blue-600 to-blue-800',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'info@trenwear.in',
      link: 'mailto:info@trenwear.in',
      color: 'from-purple-600 to-purple-800',
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
            Get In <span className="text-gradient-yellow">Touch</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Have a question or ready to start your custom order? We're here to help!
          </p>
        </motion.div>
      </Section>

      <Section background="bg-black">
        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Quick Contact via WhatsApp</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            For the fastest response, message us on WhatsApp. We typically reply within minutes during business hours.
          </p>
          <Button
            variant="whatsapp"
            size="large"
            icon={<FaWhatsapp />}
            onClick={() => window.open(whatsappUrl, '_blank')}
            className="text-xl px-12 py-5"
          >
            Chat on WhatsApp Now
          </Button>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <a href={method.link} target={method.title === 'WhatsApp' ? '_blank' : '_self'} rel="noopener noreferrer">
                <Card className="text-center group">
                  <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center text-white text-3xl group-hover:scale-110 transition-transform`}>
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                  <p className="text-gray-400">{method.value}</p>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Location & Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-yellow rounded-full flex items-center justify-center text-black text-xl flex-shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Our Location</h3>
                  <p className="text-gray-400">Serving Calicut and surrounding areas</p>
                </div>
              </div>
              <div className="space-y-3 text-gray-300">
                <p className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>Thamarassery, Calicut, Kerala</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>Mukkam, Kozhikode District</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>We deliver across Kerala</span>
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-yellow rounded-full flex items-center justify-center text-black text-xl flex-shrink-0">
                  <FaClock />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Business Hours</h3>
                  <p className="text-gray-400">We're here to serve you</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-300">
                  <span>Monday - Saturday</span>
                  <span className="text-yellow-400 font-semibold">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Sunday</span>
                  <span className="text-yellow-400 font-semibold">10:00 AM - 5:00 PM</span>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-sm text-gray-400">
                    💬 WhatsApp support available 24/7 - we'll respond as soon as possible!
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="overflow-hidden">
            <h3 className="text-2xl font-bold mb-4">Find Us on Map</h3>
            <div className="w-full h-96 bg-zinc-800 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <FaMapMarkerAlt className="text-6xl text-yellow-400 mb-4 mx-auto" />
                <p className="text-gray-400">Thamarassery, Mukkam, Calicut</p>
                <p className="text-sm text-gray-500 mt-2">Kerala, India</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </Section>
    </div>
  );
};

export default Contact;
