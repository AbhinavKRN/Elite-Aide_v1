import React from 'react';
import imagineImage from '../../assets/imagine.png';
import enhancementImage from '../../assets/enhancement.png';

const Mission = () => {
  return (
    <section className="relative w-full min-h-screen bg-black flex items-center">
      <div className="container mx-auto px-4 md:px-6 pt-0 pb-23"> 
        <div className="flex flex-col gap-32"> 
          <img 
            src={imagineImage} 
            alt="Elite Aide Mission Statement"
            className="w-full max-w-5xl mx-auto object-contain"
          />
          <img 
            src={enhancementImage} 
            alt="Elite Aide Enhancements"
            className="w-full max-w-5xl pt-28 mx-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;