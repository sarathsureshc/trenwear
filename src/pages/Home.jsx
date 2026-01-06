import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import WhyTrenwear from '../components/home/WhyTrenwear';
import ProductShowcase from '../components/home/ProductShowcase';
import SocialProof from '../components/home/SocialProof';
import CTAStrip from '../components/home/CTAStrip';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <WhyTrenwear />
      <ProductShowcase />
      <SocialProof />
      <CTAStrip />
    </div>
  );
};

export default Home;
