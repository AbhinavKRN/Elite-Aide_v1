import React from 'react';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import CurrentFeatures from '../components/sections/CurrentFeatures';
import Mission from '../components/sections/Mission';
import FinalCTA from '../components/sections/FinalCTA';
import Footer from '../components/sections/Footer';
import FooterIcon from '../components/sections/FooterIcon';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Features />
      <CurrentFeatures />
      <Mission />
      <FinalCTA />
      <Footer />
      <FooterIcon />
    </div>
  );
};

export default MainLayout;