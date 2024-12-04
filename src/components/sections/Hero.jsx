import React, { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import phoneImage from '../../assets/Hero/wasy.png';
import downloadButton from '../../assets/Hero/Button.png';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="mobile-container px-4 md:container">
        <nav className="pt-4 pb-4 md:pt-16 md:pb-28">
          <div className="flex justify-between items-center relative">
            <svg width="135" height="65" viewBox="0 0 135 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-8 md:w-28 md:h-14">
              <path d="M38.1547 34.7448L53.1558 17.3626C21.3573 -21.2134 -16.8324 36.9629 18.6129 54.4829C44.7132 67.3838 64.1326 38.9627 68.6073 31.9246C73.082 24.8866 87.134 -5.7506 117.078 9.43708C147.022 24.6248 123.502 86.6149 72.6498 48.3073" stroke="url(#paint0_radial_1427_1957)" strokeWidth="7.73589"/>
              <defs>
                <radialGradient id="paint0_radial_1427_1957" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(63.8268 37.2188) rotate(-12.5348) scale(93.7023 102.265)">
                  <stop stopColor="#88BAD6"/>
                  <stop offset="0.706535" stopColor="#3472BE"/>
                </radialGradient>
              </defs>
            </svg>

            <button 
              className="md:hidden text-white absolute right-0 top-1/2 -translate-y-1/2 z-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6H20M4 12H20H7M4 18H14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-blue-500 text-sm font-medium">Home</a>
              <a href="#" className="text-white hover:text-blue-500 text-sm font-medium">About</a>
              <a href="#" className="text-white hover:text-blue-500 text-sm font-medium">Contact Us</a>
              <button className="text-white text-sm font-semibold hover:text-blue-500 transition-colors">
                Download the App
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-95 md:hidden">
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                <a href="#" className="text-white hover:text-blue-500 text-xl font-medium">Home</a>
                <a href="#" className="text-white hover:text-blue-500 text-xl font-medium">About</a>
                <a href="#" className="text-white hover:text-blue-500 text-xl font-medium">Contact Us</a>
                <button className="text-white text-xl font-semibold hover:text-blue-500 transition-colors">
                  Download the App
                </button>
                <button 
                  className="absolute top-6 right-4 text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </nav>

        <div className="grid md:grid-cols-2 gap-4 md:gap-12 items-start md:items-center pb-8 md:pb-16">
          <div className="space-y-3 md:space-y-6 text-center md:text-left">
            <h1 className="font-raleway text-3xl md:text-[45px] leading-tight md:leading-[50px] font-black text-white md:max-w-[700px]">
              <span className="text-white">Introducing your</span>
              <br />
              <span className="text-white">virtual</span>
              <span className="text-primary-dark"> personal assistant</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-[300px] md:max-w-xl mx-auto md:mx-0">
              Elite Aide helps you take control, prioritize
              with precision, and stay ahead of your tasks —
              powered by cutting-edge AI.
            </p>
            
            <div 
              ref={buttonRef}
              className={`relative inline-block mx-auto md:mx-0 mt-4 ${
                isVisible ? 'animate-smooth-bounce' : ''
              }`}
            >
              <img 
                src={downloadButton} 
                alt="Download Now" 
                className="w-40 md:w-48 hover:opacity-90 transition-opacity cursor-pointer pt-10"
              />
            </div>
          </div>
          <div className="relative flex justify-center md:justify-end mt-12 md:mt-0">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary-dark/20 to-transparent rounded-full blur-3xl"></div>
            <img 
              src={phoneImage}
              alt="Elite Aide App Interface"
              className="relative z-10 w-[240px] md:w-[280px] lg:w-[300px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;