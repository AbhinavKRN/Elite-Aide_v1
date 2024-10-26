import React, { useState } from 'react';
import logo from '../../assets/Vector-32.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-r from-blue-600/20 via-blue-500/20 to-blue-400/30 blur-[100px]" />
      
      <nav className="relative z-10 w-full py-4 md:py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <img  
              src={logo} 
              alt="Elite Aide Logo" 
              className="w-20 md:w-25 h-8 md:h-12 text-blue-400"
            />
            
            <div className="hidden md:flex items-center space-x-10">
              <NavLink href="#">Home</NavLink>
              <NavLink href="#">About</NavLink>
              <NavLink href="#">Contact Us</NavLink>
              <button className="bg-blue-500 px-5 py-2 rounded-lg text-white font-medium hover:bg-blue-600 transition-colors duration-200">
                Download the App
              </button>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16m-7 6h7" 
                />
              </svg>
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden mt-4 bg-black/95">
              <div className="flex flex-col space-y-4 px-4 py-6">
                <NavLink href="#">Home</NavLink>
                <NavLink href="#">About</NavLink>
                <NavLink href="#">Contact Us</NavLink>
                <button className="bg-blue-500 px-5 py-2 rounded-lg text-white font-medium hover:bg-blue-600 transition-colors duration-200 w-full">
                  Download the App
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

const NavLink = ({ href, children }) => (
  <a 
    href={href} 
    className="text-white/90 hover:text-white text-sm font-medium transition-colors duration-200"
  >
    {children}
  </a>
);

export default Navbar;