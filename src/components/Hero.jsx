import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaLeaf, FaWater, FaSun } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative text-white py-24 lg:py-32 overflow-hidden" style={{
      backgroundImage: `url('/assets/beach.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      {/* Tropical overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 via-green-600/50 to-orange-600/60"></div>
      
      {/* Floating tropical elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-green-400/20 rounded-full animate-bounce"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-orange-400/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-400/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-green-400/15 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Tropical Badge */}
          <div className="inline-flex items-center bg-white/90 backdrop-blur-sm text-blue-700 rounded-full px-6 py-3 mb-8 shadow-lg">
            <FaLeaf className="w-5 h-5 mr-3 text-green-500 animate-pulse" />
            <span className="font-semibold">Sunshine Sober Living Florida</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight" style={{
            fontFamily: 'EB Garamond, serif',
            fontWeight: '600',
            lineHeight: '1.1',
            letterSpacing: '-0.02em'
          }}>
            A <span className="text-green-200 font-bold">Brighter</span> Path to
            <span className="block bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 bg-clip-text text-transparent">
              Recovery
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Find your path to recovery in a supportive, tropical environment where healing meets hope.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <FaHome className="w-5 h-5 mr-2" />
                Apply Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/contact"
              className="border-2 border-blue-500 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center">
                <FaWater className="w-5 h-5 mr-2" />
                Contact Us
              </span>
            </Link>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto px-4 mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                <FaWater className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-blue-700">24/7 Support</h3>
              <p className="text-blue-600 text-sm">Round-the-clock care and community support</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                <FaLeaf className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-green-700">Safe Environment</h3>
              <p className="text-green-600 text-sm">Structured, supportive living spaces</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                <FaSun className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-orange-700">Fresh Start</h3>
              <p className="text-orange-600 text-sm">Begin your journey to recovery today</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 