import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaHeart, FaAward } from 'react-icons/fa';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const About = () => {
  const values = [
    {
      icon: <FaCheckCircle />,
      title: 'Quality First',
      description: 'We never compromise on fabric quality or craftsmanship',
    },
    {
      icon: <FaHeart />,
      title: 'Customer Focus',
      description: 'Your satisfaction is our top priority',
    },
    {
      icon: <FaAward />,
      title: 'Local Excellence',
      description: 'Proud Kerala brand serving the community',
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
            About <span className="text-gradient-yellow">Trenwear</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Your trusted partner for premium custom apparel in Kerala
          </p>
        </motion.div>
      </Section>

      <Section background="bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-gradient-yellow">Story</span>
            </h2>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                Trenwear Apparel was founded with a simple mission: to provide premium quality 
                custom apparel that helps individuals and organizations express their unique identity.
              </p>
              <p>
                Based in the heart of Kerala, serving Thamarassery, Mukkam, and Calicut regions, 
                we've grown from a small local manufacturer to a trusted name in custom apparel.
              </p>
              <p>
                What sets us apart is our commitment to quality, attention to detail, and 
                understanding of local needs. Whether it's school uniforms, corporate wear, 
                or custom event apparel, we treat every order with the same dedication.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-2xl"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gradient-yellow mb-2">Our Mission</h3>
                <p className="text-gray-300">
                  To deliver premium custom apparel that combines quality, style, and affordability, 
                  helping our customers wear their identity with pride.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gradient-yellow mb-2">Our Vision</h3>
                <p className="text-gray-300">
                  To become Kerala's most trusted custom apparel brand, known for exceptional 
                  quality, innovative designs, and customer satisfaction.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-gradient-yellow">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-yellow rounded-full flex items-center justify-center text-black text-4xl">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-2xl text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-gradient-yellow">Local?</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-6">
            As a local Kerala manufacturer, we understand the needs of our community. 
            We offer personalized service, quick turnaround times, and the convenience 
            of local support. When you choose Trenwear, you're supporting local business 
            and getting premium quality at competitive prices.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-gradient-yellow">Fast</div>
              <p className="text-gray-400">Local Delivery</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient-yellow">Personal</div>
              <p className="text-gray-400">Customer Service</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient-yellow">Competitive</div>
              <p className="text-gray-400">Pricing</p>
            </div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default About;
