import React, { useState } from 'react';
import logo22 from '../../assets/logo22.png';

const FooterIcon = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    setFeedback('');
  };
  return (
    <footer className="bg-black py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 mb-8 md:mb-16">
          <div className="flex items-center gap-4">
            <img 
              src={logo22}
              alt="Elite Aide Logo" 
              className="w-[140px] md:w-[220px] h-auto object-contain"
            />
          </div>
          
          <div className="flex gap-6 md:gap-8">
            <a href="#" className="text-[#3472BE] hover:text-blue-400">
              <svg className="w-8 h-8 md:w-[55px] md:h-[55px]" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.2164 72.1874V23.4827H1.25802V72.1874H16.2164ZM8.73913 16.8289C13.9554 16.8289 17.2022 13.0889 17.2022 8.41524C17.105 3.63615 13.9556 0 8.83811 0C3.72146 0 0.375488 3.63622 0.375488 8.41524C0.375488 13.0892 3.62154 16.8289 8.64147 16.8289H8.73866H8.73913ZM24.4958 72.1874H39.4541V44.9883C39.4541 43.5326 39.5513 42.0785 39.9463 41.0379C41.0277 38.1296 43.4889 35.1173 47.621 35.1173C53.0338 35.1173 55.1992 39.5837 55.1992 46.1311V72.187H70.1566V44.2602C70.1566 29.3 62.777 22.3392 52.9353 22.3392C44.8659 22.3392 41.3229 27.2207 39.3546 30.5454H39.4544V23.4817H24.4961C24.6924 28.0519 24.4961 72.1864 24.4961 72.1864L24.4958 72.1874Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" className="text-[#3472BE] hover:text-blue-400">
              <svg className="w-8 h-8 md:w-[54px] md:h-[54px]" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.4961 19.8779C29.2227 19.8779 19.9935 29.1071 19.9935 40.3805C19.9935 51.6539 29.2227 60.8831 40.4961 60.8831C51.7695 60.8831 60.9987 51.6539 60.9987 40.3805C60.9987 29.1071 51.7695 19.8779 40.4961 19.8779ZM40.4961 53.6572C33.2435 53.6572 27.2194 47.6331 27.2194 40.3805C27.2194 33.1279 33.2435 27.1038 40.4961 27.1038C47.7487 27.1038 53.7728 33.1279 53.7728 40.3805C53.7728 47.6331 47.7487 53.6572 40.4961 53.6572ZM66.9045 19.0246C66.9045 21.7481 64.7013 24.0513 61.9778 24.0513C59.2543 24.0513 56.9511 21.7481 56.9511 19.0246C56.9511 16.3011 59.2543 13.9979 61.9778 13.9979C64.7013 13.9979 66.9045 16.3011 66.9045 19.0246ZM80.6676 24.0513C80.2632 17.5323 78.7502 11.6947 73.9927 6.93725C69.2353 2.17978 63.3977 0.666753 56.8787 0.262373C50.1528 -0.142007 30.8394 -0.142007 24.1135 0.262373C17.5945 0.666753 11.7569 2.17978 6.99946 6.93725C2.24199 11.6947 0.728961 17.5323 0.324582 24.0513C-0.0797985 30.7772 -0.0797985 50.0906 0.324582 56.8165C0.728961 63.3355 2.24199 69.1731 6.99946 73.9306C11.7569 78.688 17.5945 80.2011 24.1135 80.6054C30.8394 81.0098 50.1528 81.0098 56.8787 80.6054C63.3977 80.2011 69.2353 78.688 73.9927 73.9306C78.7502 69.1731 80.2632 63.3355 80.6676 56.8165C81.0719 50.0906 81.0719 30.7772 80.6676 24.0513ZM72.0753 63.9464C70.6624 67.4771 67.8388 70.3007 64.3081 71.7136C58.9717 73.8167 46.3357 73.3123 40.4961 73.3123C34.6565 73.3123 22.0205 73.8167 16.6841 71.7136C13.1534 70.3007 10.3298 67.4771 8.91689 63.9464C6.81377 58.61 7.31815 45.974 7.31815 40.1344C7.31815 34.2948 6.81377 21.6588 8.91689 16.3224C10.3298 12.7917 13.1534 9.96809 16.6841 8.55522C22.0205 6.4521 34.6565 6.95648 40.4961 6.95648C46.3357 6.95648 58.9717 6.4521 64.3081 8.55522C67.8388 9.96809 70.6624 12.7917 72.0753 16.3224C74.1784 21.6588 73.674 34.2948 73.674 40.1344C73.674 45.974 74.1784 58.61 72.0753 63.9464Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" className="text-[#3472BE] hover:text-blue-400">
              <svg className="w-8 h-8 md:w-[55px] md:h-[55px]" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M67.6322 13.3677H14.1601C10.4839 13.3677 7.50949 16.3755 7.50949 20.0517L7.47607 60.1558C7.47607 63.832 10.4839 66.8398 14.1601 66.8398H67.6322C71.3085 66.8398 74.3163 63.832 74.3163 60.1558V20.0517C74.3163 16.3755 71.3085 13.3677 67.6322 13.3677ZM67.6322 26.7357L40.8962 43.4458L14.1601 26.7357V20.0517L40.8962 36.7617L67.6322 20.0517V26.7357Z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="mb-8 md:mb-12">
          <p className="text-gray-300 mb-4 text-base md:text-lg text-center md:text-left font-nunito font-medium leading-relaxed max-w-[570px]">
            Please provide your feedback. It helps us improve your experience and be better everyday.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input 
              type="text"
              placeholder="Write your feedback here"
              className="w-full max-w-full md:max-w-md bg-[#111111] rounded-md py-3 px-4 text-gray-300 placeholder-gray-600 focus:outline-none"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <button 
              type="submit"
              className="bg-[#3472BE] hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-colors duration-200 whitespace-nowrap"
            >
              Submit Feedback
            </button>
          </form>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="flex gap-4 md:gap-8 text-gray-500 text-sm md:text-base">
            <a href="#" className="hover:text-blue-400">Terms of Service</a>
            <a href="#" className="hover:text-blue-400">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400">About Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterIcon;