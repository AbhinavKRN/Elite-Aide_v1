import React from 'react';
import { Play } from 'lucide-react';
import phoneImage from '../../assets/phone.png';

const Hero = () => {
  return (
    <section className="container mx-auto px-4 md:px-6 pt-8 md:pb-16">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Introducing your virtual{' '}
            <span className="text-blue-500">personal assistant</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto md:mx-0">
            Elite Aide helps you take control, prioritize with precision, and stay ahead of your tasks—powered by cutting-edge AI.
          </p>
          
          <button className="group flex items-center space-x-3 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 mx-auto md:mx-0">
            <Play 
              size={20} 
              className="text-white" 
            />
            <span>Download Now</span>
          </button>
        </div>

        <div className="relative flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-transparent rounded-full blur-3xl"></div>
          <img 
            src={phoneImage}
            alt="Elite Aide App Interface"
            className="relative z-10 w-[280px] md:w-auto md:h-[600px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;