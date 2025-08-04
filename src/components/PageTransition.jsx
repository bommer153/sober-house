import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaLeaf, FaTree, FaSun } from 'react-icons/fa';

const PageTransition = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Start spinner transition
    setShowSpinner(true);
    setIsVisible(false);

    // Show spinner for a short time
    const spinnerTimer = setTimeout(() => {
      setShowSpinner(false);
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(spinnerTimer);
  }, [location.pathname]);

  useEffect(() => {
    // Initial page load
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Simple Loading Spinner */}
      {showSpinner && (
        <div className="fixed inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center">
          <div className="text-center">
            <div className="relative mb-4">
              {/* Spinning Circle */}
              <div className="w-16 h-16 border-4 border-cyan-200 border-t-cyan-500 rounded-full animate-spin mx-auto"></div>
              
              {/* Tropical Icons */}
              <div className="absolute inset-0 flex items-center justify-center">
                <FaSun className="w-6 h-6 text-orange-400 animate-pulse" />
              </div>
            </div>
            
            <div className="text-gray-600 font-medium">
              <div className="flex items-center justify-center">
                <FaLeaf className="w-4 h-4 mr-2 text-emerald-500" />
                <span>Loading Sunshine...</span>
                <FaTree className="w-4 h-4 ml-2 text-emerald-500" />
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Page Content */}
      <div
        className={`transition-all duration-300 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          minHeight: '100vh',
          width: '100%'
        }}
      >
        {children}
      </div>
    </>
  );
};

export default PageTransition; 