import React from 'react';
import infinityLogo from '../../assets/logo.png';

const Mission = () => {
  return (
    <section className="relative w-full min-h-screen bg-black flex items-center py-12 md:py-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-8 md:gap-0">
          <div className="relative w-full md:w-auto">
            <div className="border border-blue-500/30 rounded-lg p-6 md:p-10 bg-black">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                Imagine Task Management as{' '}
                <span className="text-blue-400">Effortless</span>{' '}
                as Thinking
              </h2>
              
              <p className="text-gray-400 mb-6 md:mb-8 text-base md:text-lg">
                What if you had an assistant who is intelligent, always ready, and never 
                forgetful—an aide built to understand your needs and evolve with you?
              </p>
              
              <p className="mb-4 md:mb-6 text-base md:text-lg">
                This is the future{' '}
                <span className="text-blue-400">Elite Aide promises.</span>
              </p>
              
              <p className="text-gray-400 mb-3 md:mb-4">
                We designed Elite Aide with one core belief:
              </p>
              
              <p className="text-lg md:text-xl">
                You are the <span className="font-bold">chief executive</span> of your life,{' '}
                and you deserve{' '}
                <span className="text-blue-400">an assistant.</span>
              </p>
            </div>

            <div className="hidden md:block absolute -right-8 top-1/2 w-8 h-px bg-blue-500/30"></div>
          </div>

          <div className="relative md:ml-8 mt-8 md:mt-0">
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>
            <img 
              src={infinityLogo} 
              alt="Elite Aide Infinity Logo" 
              className="relative z-10 w-20 h-20 md:w-24 md:h-24"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;