import React from 'react';
import imagineImage from '../../assets/imagine.png';
import enhancementImage from '../../assets/enhancement.png';

const Mission = () => {
  return (
    <section className="relative w-full min-h-screen bg-black flex items-center">
      <div className="mobile-container px-4 md:px-8 -mt-32 md:mt-0">
        <div className="flex flex-col gap-4 md:gap-32">
          <img
            src={imagineImage}
            alt="Elite Aide Mission Statement"
            className="w-full max-w-[85vw] md:max-w-5xl mx-auto object-contain"
          />
          <img
            src={enhancementImage}
            alt="Elite Aide Enhancements"
            className="w-full max-w-[85vw] md:max-w-5xl md:pt-28 mx-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;