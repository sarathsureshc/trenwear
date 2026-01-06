import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const Reviews = () => {
  const reviews = [
    {
      name: 'Rajesh Kumar',
      role: 'School Administrator, Calicut',
      rating: 5,
      text: 'Excellent quality uniforms for our school. The fitting is perfect and the fabric is premium. We have been ordering from Trenwear for 2 years now and they never disappoint. Highly recommended!',
      date: '2 weeks ago',
    },
    {
      name: 'Priya Menon',
      role: 'Event Organizer, Thamarassery',
      rating: 5,
      text: 'Trenwear delivered 200 custom t-shirts for our corporate event in just 3 days! The quality was outstanding and the printing was vibrant. Amazing service and the team was very responsive.',
      date: '1 month ago',
    },
    {
      name: 'Arun Thomas',
      role: 'Sports Team Captain, Mukkam',
      rating: 5,
      text: 'The sublimation jerseys look fantastic! Great colors, comfortable fabric, and the team loves them. The customization options were excellent and the pricing was very reasonable.',
      date: '3 weeks ago',
    },
    {
      name: 'Divya Nair',
      role: 'HR Manager, Kozhikode',
      rating: 5,
      text: 'Professional service from start to finish. Got our entire office team customized polo shirts. The quality is top-notch and everyone is very happy with the fit and comfort.',
      date: '1 week ago',
    },
    {
      name: 'Mohammed Rasheed',
      role: 'Parent, Calicut',
      rating: 5,
      text: 'Ordered birthday t-shirts for my son\'s party. The kids loved the design and the quality was much better than expected. Will definitely order again for future events!',
      date: '2 months ago',
    },
    {
      name: 'Lakshmi Menon',
      role: 'NGO Coordinator',
      rating: 5,
      text: 'Very satisfied with the NSS uniforms. Great fabric quality, proper stitching, and delivered on time. The team at Trenwear is very cooperative and understanding.',
      date: '1 month ago',
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
          <div className="inline-flex items-center gap-2 bg-gradient-yellow text-black px-6 py-3 rounded-full mb-6">
            <FaStar className="text-2xl" />
            <span className="text-2xl font-bold">5.0</span>
            <span className="text-sm">Google Rating</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Customer <span className="text-gradient-yellow">Reviews</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            See what our happy customers have to say about our products and services. 
            Real reviews from real people.
          </p>
        </motion.div>
      </Section>

      <Section background="bg-black">
        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl mb-12 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-gradient-yellow mb-2">5.0</div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>
              <p className="text-gray-400">Based on 9 reviews</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-gradient-yellow mb-2">500+</div>
              <p className="text-gray-400">Happy Customers</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-gradient-yellow mb-2">100%</div>
              <p className="text-gray-400">Satisfaction Rate</p>
            </div>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full flex flex-col bg-white/5">
                <FaQuoteLeft className="text-yellow-400 text-3xl mb-4 opacity-50" />
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 flex-grow italic">"{review.text}"</p>
                <div className="border-t border-white/10 pt-4">
                  <h4 className="font-semibold text-white">{review.name}</h4>
                  <p className="text-sm text-gray-400">{review.role}</p>
                  <p className="text-xs text-gray-500 mt-1">{review.date}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Reviews;
