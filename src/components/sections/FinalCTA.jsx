import React from 'react';
import circlePhone from '../../assets/circlePhone.png';
import ring from '../../assets/ring.png';

const FinalCTA = () => {
  return (
    <section className="relative w-full bg-black py-32 md:py-48"> 
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <img 
            src={circlePhone}
            alt="Phone interface in circle"
            className="w-[85%] sm:w-[90%] md:w-full max-w-2xl object-contain relative z-10 md:-mr-32" 
          />
          <img 
            src={ring}
            alt="Decorative ring"
            className="w-[85%] sm:w-[90%] md:w-full max-w-2xl object-contain -mt-[55%] sm:-mt-[45%] md:-mt-32 md:-ml-32"
          />
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;