import React from 'react';
import circlePhone from '../../assets/circlePhone.png';
import ring from '../../assets/ring.png';

const FinalCTA = () => {
  return (
    <section className="relative w-full  bg-black -mt-20 md:mt-0"> {/* Added negative margin top */}
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <img 
            src={circlePhone}
            alt="Phone interface in circle"
            className="w-[85%] sm:w-[90%] md:w-full max-w-2xl object-contain relative z-10 ml-20 sm:ml-12 md:ml-0 mb-[-5%] sm:mb-[-15%] md:mb-0 md:-mr-32" 
          />
          <img 
            src={ring}
            alt="Decorative ring"
            className="w-[85%] sm:w-[90%] md:w-full max-w-2xl object-contain mt-[-10%] sm:mt-[-20%] md:-mt-32 md:-ml-32"
          />
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;