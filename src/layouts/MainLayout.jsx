// src/layouts/MainLayout.jsx
import React from 'react';
import Navbar from '../components/sections/Navbar';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import CurrentFeatures from '../components/sections/CurrentFeatures';
import Mission from '../components/sections/Mission';
import FinalCTA from '../components/sections/FinalCTA';
import Footer from '../components/sections/Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Features />
      <CurrentFeatures />
      <Mission />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default MainLayout;