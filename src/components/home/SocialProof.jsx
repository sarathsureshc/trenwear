import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import Section from '../ui/Section';
import Card from '../ui/Card';

const SocialProof = () => {
  const reviews = [
    {
      name: 'Rajesh Kumar',
      role: 'School Administrator',
      rating: 5,
      text: 'Excellent quality uniforms for our school. The fitting is perfect and the fabric is premium. Highly recommended!',
    },
    {
      name: 'Priya Menon',
      role: 'Event Organizer',
      rating: 5,
      text: 'Trenwear delivered 200 custom t-shirts for our corporate event in just 3 days! Amazing service and quality.',
    },
    {
      name: 'Arun Thomas',
      role: 'Sports Team Captain',
      rating: 5,
      text: 'The sublimation jerseys look fantastic! Great colors, comfortable fabric, and the team loves them.',
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
        <div className="inline-flex items-center gap-2 bg-gradient-yellow text-black px-4 py-2 rounded-full mb-4">
          <FaStar className="text-xl" />
          <span className="font-bold">5.0 Google Rating</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our <span className="text-gradient-yellow">Clients Say</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Don't just take our word for it - hear from our happy customers
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="bg-white/5 h-full flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 flex-grow italic">"{review.text}"</p>
              <div>
                <h4 className="font-semibold text-white">{review.name}</h4>
                <p className="text-sm text-gray-400">{review.role}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default SocialProof;
