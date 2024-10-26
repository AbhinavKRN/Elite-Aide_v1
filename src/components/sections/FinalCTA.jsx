import React from 'react';
import phoneImage from '../../assets/play.png';

const FinalCTA = () => {
  return (
    <section className="relative w-full bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative w-full md:w-[900px] mx-auto">
          <div className="relative mt-12 md:mt-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="relative flex-shrink-0">
              <img 
                src={phoneImage} 
                alt="Elite Aide App Interface" 
                className="w-[300px] md:w-[500px] transform -rotate-12 hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="text-center md:text-left md:ml-8">
              <h3 className="text-xl md:text-3xl font-medium whitespace-nowrap">
                Ready to be your{' '}
                <span className="text-blue-400">own boss?</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;