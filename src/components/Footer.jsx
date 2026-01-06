import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Custom T-Shirts',
    'School Uniforms',
    'Corporate Wear',
    'Sports Jerseys',
    'Event Apparel',
  ];

  const phoneNumber = '919876543210';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo-transparent.png" 
                alt="Trenwear Logo" 
                className="h-12 w-auto"
              />
              <div>
                <p className="text-xs text-gray-400">Customize Your Style</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Premium custom apparel for schools, offices, events, and sports. Quality fabrics, perfect fit, on-time delivery.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <FaFacebook className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-yellow-400 mt-1 flex-shrink-0" />
                <span>Thamarassery, Mukkam, Calicut, Kerala</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-yellow-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-yellow-400 flex-shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-400 flex-shrink-0" />
                <a href="mailto:info@trenwear.in" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  info@trenwear.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Trenwear Apparel. All rights reserved. | Made with ❤️ in Kerala
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
