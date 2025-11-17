import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* Scroll to Top Button - Responsive */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 bg-gradient-to-r from-purple-600 to-blue-500 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 z-50 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-sm sm:text-lg" />
      </button>

      <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Motivational Quote */}
          <div className="text-center mb-8">
            <p className="text-gray-300 italic text-sm sm:text-base leading-relaxed">
              "The only way to do great work is to love what you do. 
              Every project is a new opportunity to learn, grow, and make an impact."
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 my-8"></div>

          {/* Bottom Section - Centered */}
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            {/* Copyright - Centered */}
            <p className="text-sm text-gray-400">
              © {currentYear} Saran. All rights reserved.
            </p>
            
            {/* Additional Info */}
            <p className="text-xs text-gray-500 max-w-md px-4">
              Built with React & Tailwind CSS • Crafted with passion and attention to detail
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;