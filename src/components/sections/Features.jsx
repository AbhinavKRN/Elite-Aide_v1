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
    <section className="container mx-auto px-4 md:px-6 py-8 md:py-16 min-h-screen bg-black">
      <h2 className=" font-raleway text-3xl md:text-4xl font-bold text-white mb-12 md:mb-20 text-center md:text-left">
        Why Choose Elite Aide?
      </h2>
      
      <div className="relative flex flex-col lg:flex-row items-start gap-12 lg:gap-32"> 
        <div className="relative flex-1 w-full lg:w-auto lg:pl-12"> 
          <div className="relative transform -rotate-12">
            <img 
              src={phoneImage} 
              alt="Elite Aide Interface" 
              className="w-full max-w-[380px] md:max-w-lg mx-auto"
            />
            
            <div 
              ref={circleRef}
              className={`absolute top-8 left-1/4 scale-75 md:scale-100 ${
                isVisible ? 'animate-circle-pop' : 'opacity-0'
              }`}
            >
              <div className={`absolute inset-0 w-24 md:w-32 h-24 md:h-32 bg-blue-500/20 rounded-full blur-xl ${
                isVisible ? 'animate-circle-pulse' : ''
              }`} />
              
              <div className="relative w-24 md:w-32 h-24 md:h-32 rounded-full border-2 border-blue-500 overflow-hidden">
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

        <div className="flex-1 w-full lg:w-auto lg:pl-20">
          <img 
            src={featuresContent} 
            alt="Elite Aide Features"
            className="w-full max-w-[320px] mx-auto lg:mr-60 lg:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-6">
      <div className="relative">
        <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full" />
        
        <div className="relative z-10 p-3 text-blue-400">
          <Icon size={24} className="relative z-10" />
          
          <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-sm rounded-lg" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <p className="text-gray-400 text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

export default Features;