// src/components/sections/CurrentFeatures.jsx
import React from 'react';
import featuresImage from '../../assets/features-section.png';

const CurrentFeatures = () => {
  return (
    <section className="container mx-auto px-4 md:px-6 py-12 md:py-20">      
      <div className="relative">
        <img 
          src={featuresImage} 
          alt="Elite Aide Features Overview"
          className="w-full max-w-[350px] md:max-w-6xl mx-auto"
        />
      </div>
    </section>
  );
};

export default CurrentFeatures;