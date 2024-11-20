import React from 'react';
import imagineImage from '../../assets/imagine.png';
import enhancementImage from '../../assets/enhancement.png';

const Mission = () => {
  return (
    <section className="relative w-full min-h-screen bg-black flex items-center">
      <div className="mobile-container py-12 md:py-0"> 
        <div className="flex flex-col gap-16 md:gap-32"> 
          <img 
            src={imagineImage} 
            alt="Elite Aide Mission Statement"
            className="w-full max-w-[90vw] md:max-w-5xl mx-auto object-contain"
          />
          <img 
            src={enhancementImage} 
            alt="Elite Aide Enhancements"
            className="w-full max-w-[90vw] md:max-w-5xl pt-8 md:pt-28 mx-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};
export default Mission;