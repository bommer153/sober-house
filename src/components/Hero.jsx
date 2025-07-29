import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat text-white py-24 lg:py-32 overflow-hidden bg-blue-900" style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop')`
    }}>
      {/* Adding overlay back as separate div for testing */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0,0,0,0.8))'
      }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white text-gray-900 rounded-full px-6 py-3 mb-8 shadow-lg animate-fade-in-up" style={{
            animation: 'fadeInUp 0.8s ease-out'
          }}>
            <FaHome className="w-5 h-5 text-green-600 mr-2" />
            <span className="font-semibold">Sunshine Sober Living Florida</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight drop-shadow-lg animate-fade-in-up" style={{
            animation: 'fadeInUp 1s ease-out 0.2s both'
          }}>
            A Brighter Path to
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent drop-shadow-lg">
              Recovery
            </span>
          </h1>
          
         
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 animate-fade-in-up" style={{
            animation: 'fadeInUp 1s ease-out 0.8s both'
          }}>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-blue-900 hover:bg-gray-100 border-0 shadow-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Apply Now
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-blue-900 bg-transparent rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero; 