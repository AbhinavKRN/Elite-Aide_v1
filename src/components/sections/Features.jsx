import React, { useEffect, useRef, useState } from 'react';
import { ClipboardList, Zap, Calendar } from 'lucide-react';
import phoneImage from '../../assets/phone2.png';
import calendarImage from '../../assets/calender.png';
import featuresContent from '../../assets/features/table.png';

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const circleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (circleRef.current) {
      observer.observe(circleRef.current);
    }
    return () => {
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
    };
  }, []);

  return (
    <section className="mobile-container mobile-section min-h-screen bg-black">
      <h2 className="font-raleway mobile-heading text-white mb-8 md:mb-20 text-center md:text-left">
        Why Choose Elite Aide?
      </h2>
      
      <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-32">
        <div className="relative flex-1 w-full lg:w-auto">
          <div className="relative transform -rotate-12">
            <img 
              src={phoneImage} 
              alt="Elite Aide Interface" 
              className="w-full max-w-[280px] md:max-w-[380px] lg:max-w-lg mx-auto"
            />
            
            <div 
              ref={circleRef}
              className={`absolute top-4 md:top-8 left-1/4 scale-50 sm:scale-75 md:scale-100 ${
                isVisible ? 'animate-circle-pop' : 'opacity-0'
              }`}
            >
              <div className={`absolute inset-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-blue-500/20 rounded-full blur-xl ${
                isVisible ? 'animate-circle-pulse' : ''
              }`} />
              
              <div className="relative w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 rounded-full border-2 border-blue-500 overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-sm" />
                <img 
                  src={calendarImage}
                  alt="Calendar View"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full lg:w-auto px-4 lg:px-0">
          <img 
            src={featuresContent} 
            alt="Elite Aide Features"
            className="w-full max-w-[280px] sm:max-w-[320px] mx-auto lg:mr-60 lg:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;