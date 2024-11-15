import React, { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import phoneImage from '../../assets/Hero/wasy.png';
import downloadButton from '../../assets/Hero/Button.png';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }
    return () => {
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="pt-16 pb-28 flex justify-between items-center"> {/* Increased bottom padding */}
          <svg width="135" height="65" viewBox="0 0 135 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-21 h-12">
            <path d="M38.1547 34.7448L53.1558 17.3626C21.3573 -21.2134 -16.8324 36.9629 18.6129 54.4829C44.7132 67.3838 64.1326 38.9627 68.6073 31.9246C73.082 24.8866 87.134 -5.7506 117.078 9.43708C147.022 24.6248 123.502 86.6149 72.6498 48.3073" stroke="url(#paint0_radial_1427_1957)" strokeWidth="7.73589"/>
            <defs>
              <radialGradient id="paint0_radial_1427_1957" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(63.8268 37.2188) rotate(-12.5348) scale(93.7023 102.265)">
                <stop stopColor="#88BAD6"/>
                <stop offset="0.706535" stopColor="#3472BE"/>
              </radialGradient>
            </defs>
          </svg>

          <div className="flex items-center space-x-8">
            <a href="#" className="text-white hover:text-blue-500 text-sm font-medium">Home</a>
            <a href="#" className="text-white hover:text-blue-500 text-sm font-medium">About</a>
            <a href="#" className="text-white hover:text-blue-500 text-sm font-medium">Contact Us</a>
            <button className="text-white text-sm font-semibold hover:text-blue-500 transition-colors">
              Download the App
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center md:pb-16">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="font-raleway text-[45px] leading-[50px] font-black text-white md:max-w-[700px]">
              Introducing your virtual
              <br />
              <span className="text-primary-dark">personal assistant</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto md:mx-0">
              Elite Aide helps you take control, prioritize
              <br /> 
              with precision, and stay ahead of your tasks —
              <br />
              powered by cutting-edge AI.
            </p>
            
            <div 
              ref={buttonRef}
              className={`relative inline-block mx-auto md:mx-0 ${
                isVisible ? 'animate-smooth-bounce' : ''
              }`}
            >
              <img 
                src={downloadButton} 
                alt="Download Now" 
                className="w-48 hover:opacity-90 transition-opacity cursor-pointer"
              />
            </div>
          </div>
          <div className="relative flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary-dark/20 to-transparent rounded-full blur-3xl"></div>
            <img 
              src={phoneImage}
              alt="Elite Aide App Interface"
              className="relative z-12 w-[280px] md:w-[300px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;