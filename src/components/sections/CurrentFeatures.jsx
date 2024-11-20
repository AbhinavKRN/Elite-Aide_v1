import React from 'react';
import features1 from '../../assets/features1.png';

const CurrentFeatures = () => {
  return (
    <section className="bg-black w-full overflow-hidden"> 
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="relative w-full">
          <img 
            src={features1} 
            alt="Features overview showing task management, organization, and tracking capabilities"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CurrentFeatures;