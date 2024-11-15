import React from 'react';
import projectDark from '../../assets/project_dark.png';

const Footer = () => {
  return (
    <footer className="w-full bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-0 md:py-28">
        <div className="grid grid-cols-6 md:grid-cols-12 items-center gap-4 md:gap-8">
          <div className="col-span-1 md:col-span-3">
            <div className="h-px bg-gray-800"></div>
          </div>
          
          <div className="col-span-4 md:col-span-6 text-center">
            <img 
              src={projectDark} 
              alt="Project Dark Horse" 
              className="w-full max-w-[280px] md:max-w-2xl mx-auto hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="col-span-1 md:col-span-3">
            <div className="h-px bg-gray-800"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;