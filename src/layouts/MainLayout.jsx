import React from 'react';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Mission from '../components/sections/Mission';
import CurrentFeatures from '../components/sections/CurrentFeatures';
import FinalCTA from '../components/sections/FinalCTA';
import Footer from '../components/sections/Footer';
import FooterIcon from '../components/sections/FooterIcon';

const MainLayout = () => {
  return (
    <main className="bg-black min-h-screen w-full overflow-hidden">
      <div id="hero">
        <Hero />
      </div>
      <div id="features">
        <Features />
      </div>
      <CurrentFeatures />
      <Mission />
      <FinalCTA />
      <Footer />
      <div id="footer">
        <FooterIcon />
      </div>
    </main>
  );
};

export default MainLayout;