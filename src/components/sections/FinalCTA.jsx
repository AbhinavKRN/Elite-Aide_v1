import React from 'react';
import circlePhoneImage from '../../assets/circlePhone.png';
import ringImage from '../../assets/ring.png';

const FinalCTA = () => {
  return (
    <section className="relative w-full bg-black py-32 md:py-48"> 
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <img 
            src={circlePhoneImage} 
            alt="Phone interface in circle"
            className="w-full max-w-2xl object-contain -mr-32" 
          />
          <img 
            src={ringImage} 
            alt="Decorative ring"
            className="w-full max-w-2xl object-contain -mt-32 -ml-32"
          />
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;