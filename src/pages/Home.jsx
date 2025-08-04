import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaWater, FaSun, FaHome, FaHeart, FaClock, FaMapPin, FaUsers, FaShieldAlt, FaStar, FaAward, FaTree, FaSeedling } from 'react-icons/fa';

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat text-white h-screen flex items-center justify-center overflow-hidden" style={{
        backgroundImage: `url('/assets/beach.jpg')`
      }}>
        {/* Tropical overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/70 via-emerald-500/50 to-orange-400/60"></div>
        
        {/* Enhanced floating tropical elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-400/30 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-orange-400/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-400/30 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-yellow-400/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-18 h-18 bg-pink-400/30 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Palm tree decorative elements */}
        <div className="absolute top-0 left-0 w-40 h-40 opacity-10">
          <div className="relative">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-24 bg-emerald-600 rounded-full"></div>
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-3 h-12 bg-emerald-500 rounded-full rotate-12"></div>
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-3 h-12 bg-emerald-500 rounded-full -rotate-12"></div>
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-3 h-10 bg-emerald-400 rounded-full rotate-24"></div>
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-3 h-10 bg-emerald-400 rounded-full -rotate-24"></div>
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-emerald-300 rounded-full rotate-36"></div>
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-emerald-300 rounded-full -rotate-36"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className={`inline-flex items-center bg-white/40 backdrop-blur-lg text-cyan-800 rounded-full px-6 py-3 mb-8 shadow-2xl border border-white/60 relative overflow-hidden transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-white/10 rounded-full"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <div className="relative z-10 flex items-center">
                <FaLeaf className="w-5 h-5 mr-3 text-emerald-600 animate-pulse" />
                <FaTree className="w-4 h-4 mr-2 text-emerald-500" />
                <span className="text-sm font-bold text-gray-900" style={{
                  textShadow: '0 1px 2px rgba(255, 255, 255, 0.9)',
                  fontFamily: 'Source Sans Pro, sans-serif',
                  fontWeight: '700',
                  letterSpacing: '0.05em'
                }}>Sunshine Sober Living Florida</span>
              </div>
            </div>
            
            {/* Main Heading */}
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-white transition-all duration-1000 delay-300 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`} style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
              fontFamily: 'Playfair Display, serif',
              fontWeight: '800'
            }}>
              A Brighter Path to
              <span className="block" style={{
                color: '#FFD700',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                fontWeight: '900'
              }}>
                Recovery
              </span>
            </h1>
            
            {/* Subheading */}
            <p className={`text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 font-semibold transition-all duration-1000 delay-500 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`} style={{
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.9)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '600',
              letterSpacing: '0.025em'
            }}>
              Having time to become comfortable in sobriety might be the single most important part of recovery success. Our cost-effective method improves the chances of recovery and shows that recovery works.
            </p>
            
            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 sm:mb-20 px-4 transition-all duration-1000 delay-700 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              <Link 
                to="/contact"
                className="bg-white/40 backdrop-blur-lg text-cyan-800 px-6 py-3 rounded-full font-semibold hover:bg-white/50 transition-all duration-300 transform hover:scale-105 shadow-2xl border border-white/60 relative overflow-hidden group"
              >
                {/* Glass window reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-white/10 rounded-full"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <span className="relative z-10 flex items-center text-cyan-800 font-semibold">
                  <FaHome className="w-5 h-5 mr-2" />
                  <FaTree className="w-4 h-4 mr-1" />
                  Apply Now
                </span>
              </Link>
              <Link 
                to="/contact"
                className="bg-white/30 backdrop-blur-lg text-white px-6 py-3 rounded-full font-semibold hover:bg-white/40 transition-all duration-300 transform hover:scale-105 border border-white/60 relative overflow-hidden group"
              >
                {/* Glass window reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/8 rounded-full"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
                <span className="relative z-10 flex items-center text-white font-semibold">
                  <FaWater className="w-5 h-5 mr-2" />
                  <FaLeaf className="w-4 h-4 mr-1" />
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Sober Living Section */}
      <section className="py-24 lg:py-32 relative bg-cover bg-center bg-no-repeat bg-fixed" style={{
        backgroundImage: `url('/assets/palm3.gif')`
      }}>
        {/* Tropical overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/40 via-cyan-500/35 to-orange-400/40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-8 relative overflow-hidden mb-8">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance text-gray-800">
                  Why Choose Sober Living?
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-700">
                  Living Bright at Sunshine: Self-Help Tools for a Relapse-Free Sober Journey
                </h3>
                <p className="text-lg text-cyan-700 max-w-3xl mx-auto font-medium">
                  Our sober living houses provide a safe, affordable environment that supports individuals in recovery from alcoholism and addiction. Join the largest network of recovery-focused housing in the community.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Community Support Network */}
            <div className={`bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-8 group hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-100/90 to-cyan-200/90 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-cyan-200/95 group-hover:to-cyan-300/95 transition-all duration-300 backdrop-blur-sm shadow-lg">
                  <FaUsers className="w-8 h-8 text-cyan-700" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-cyan-800 flex items-center justify-center">
                  <FaTree className="w-5 h-5 mr-2 text-emerald-600" />
                  Community Support Network
                </h3>
                <p className="text-cyan-700 leading-relaxed font-medium">Join a supportive community of individuals committed to recovery. Our residents form lasting friendships and provide mutual support through shared experiences.</p>
              </div>
            </div>

            {/* Safe & Structured Environment */}
            <div className={`bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-8 group hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100/90 to-emerald-200/90 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-emerald-200/95 group-hover:to-emerald-300/95 transition-all duration-300 backdrop-blur-sm shadow-lg">
                  <FaShieldAlt className="w-8 h-8 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-emerald-800 flex items-center justify-center">
                  <FaLeaf className="w-5 h-5 mr-2 text-emerald-600" />
                  Safe & Structured Environment
                </h3>
                <p className="text-emerald-700 leading-relaxed font-medium">A drug and alcohol-free environment with clear house rules and guidelines to support your recovery journey and prevent relapse.</p>
              </div>
            </div>

            {/* Affordable Housing */}
            <div className={`bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-8 group hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100/90 to-orange-200/90 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-orange-200/95 group-hover:to-orange-300/95 transition-all duration-300 backdrop-blur-sm shadow-lg">
                  <FaHome className="w-8 h-8 text-orange-700" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-orange-800 flex items-center justify-center">
                  <FaSeedling className="w-5 h-5 mr-2 text-emerald-600" />
                  Affordable Housing
                </h3>
                <p className="text-orange-700 leading-relaxed font-medium">Cost-effective sober living that provides quality housing without the high costs of treatment facilities. Shared expenses make recovery accessible.</p>
              </div>
            </div>

            {/* Peer-Led Recovery */}
            <div className={`bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-8 group hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-100/90 to-rose-200/90 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-rose-200/95 group-hover:to-rose-300/95 transition-all duration-300 backdrop-blur-sm shadow-lg">
                  <FaHeart className="w-8 h-8 text-rose-700" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-rose-800 flex items-center justify-center">
                  <FaTree className="w-5 h-5 mr-2 text-emerald-600" />
                  Peer-Led Recovery
                </h3>
                <p className="text-rose-700 leading-relaxed font-medium">Residents take responsibility for house management and support each other. This peer-led approach builds leadership skills and accountability.</p>
              </div>
            </div>

            {/* Flexible Stay Duration */}
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-8 group hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-100/90 to-yellow-200/90 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-yellow-200/95 group-hover:to-yellow-300/95 transition-all duration-300 backdrop-blur-sm shadow-lg">
                  <FaClock className="w-8 h-8 text-yellow-700" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-yellow-800 flex items-center justify-center">
                  <FaSun className="w-5 h-5 mr-2 text-orange-600" />
                  Flexible Stay Duration
                </h3>
                <p className="text-yellow-700 leading-relaxed font-medium">Stay as long as you need to build a solid foundation in recovery. Most residents stay 3-12 months, with no arbitrary time limits.</p>
              </div>
            </div>

            {/* Convenient Locations */}
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-8 group hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-100/90 to-cyan-200/90 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-cyan-200/95 group-hover:to-cyan-300/95 transition-all duration-300 backdrop-blur-sm shadow-lg">
                  <FaMapPin className="w-8 h-8 text-cyan-700" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-cyan-800 flex items-center justify-center">
                  <FaLeaf className="w-5 h-5 mr-2 text-emerald-600" />
                  Convenient Locations
                </h3>
                <p className="text-cyan-700 leading-relaxed font-medium">Located in quiet, residential neighborhoods with easy access to meetings, employment, and community resources.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 text-white relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #06b6d4 0%, #10b981 50%, #f59e0b 100%)'
      }}>
        {/* Enhanced floating elements */}
        <div className="absolute top-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-14 h-14 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Recovery Journey?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Having time to become comfortable in sobriety might be the single most important part of recovery success. Our cost-effective method improves the chances of recovery and shows that recovery works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-orange-500 to-rose-500 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="flex items-center justify-center">
                <FaHome className="w-5 h-5 mr-2" />
                <FaTree className="w-4 h-4 mr-1" />
                Apply Now
              </span>
            </Link>
            <Link 
              to="/how-it-works" 
              className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center">
                <FaLeaf className="w-5 h-5 mr-2" />
                <FaSeedling className="w-4 h-4 mr-1" />
                Learn More
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-24 lg:py-32 relative bg-cover bg-center bg-no-repeat bg-fixed" style={{
        backgroundImage: `url('/assets/palm3.gif')`
      }}>
        {/* Tropical overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/40 via-cyan-500/35 to-orange-400/40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-8 relative overflow-hidden mb-8">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance text-gray-800">
                  Our Impact
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-700">
                  Making a Real Difference
                </h3>
                <p className="text-lg text-cyan-700 max-w-3xl mx-auto font-medium">
                  Join hundreds of individuals who have successfully rebuilt their lives through our program
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-8 text-center relative overflow-hidden">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-4xl font-bold text-cyan-700 mb-2">95%</div>
                <div className="text-cyan-800 font-semibold flex items-center justify-center">
                  <FaTree className="w-4 h-4 mr-1 text-emerald-600" />
                  Success Rate
                </div>
              </div>
            </div>
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-8 text-center relative overflow-hidden">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-4xl font-bold text-emerald-700 mb-2">500+</div>
                <div className="text-emerald-800 font-semibold flex items-center justify-center">
                  <FaLeaf className="w-4 h-4 mr-1 text-emerald-600" />
                  Lives Changed
                </div>
              </div>
            </div>
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-8 text-center relative overflow-hidden">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-4xl font-bold text-orange-700 mb-2">24/7</div>
                <div className="text-orange-800 font-semibold flex items-center justify-center">
                  <FaSun className="w-4 h-4 mr-1 text-orange-600" />
                  Support Available
                </div>
              </div>
            </div>
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-8 text-center relative overflow-hidden">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-4xl font-bold text-rose-700 mb-2">5+</div>
                <div className="text-rose-800 font-semibold flex items-center justify-center">
                  <FaSeedling className="w-4 h-4 mr-1 text-emerald-600" />
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 lg:py-32 relative bg-cover bg-center bg-no-repeat bg-fixed" style={{
        backgroundImage: `url('/assets/palm3.gif')`
      }}>
        {/* Tropical overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/40 via-cyan-500/35 to-orange-400/40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-8 relative overflow-hidden mb-8">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance text-gray-800">
                  Success Stories
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-700">
                  Real Stories from<br />
                  Our Community
                </h3>
                <p className="text-lg text-cyan-700 max-w-3xl mx-auto font-medium">
                  Hear from residents and alumni about their recovery journey and how our community has supported their path to lasting sobriety.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Jefferson Jalandoon */}
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-8 relative overflow-hidden">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-cyan-700 mb-4 flex items-center">
                  <FaStar className="w-6 h-6" />
                  <FaTree className="w-4 h-4 ml-2 text-emerald-600" />
                </div>
                <p className="text-cyan-800 mb-6 italic font-medium">
                  "The community here saved my life. The support from other residents and the structured environment gave me the foundation I needed to rebuild my life."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-cyan-100/90 rounded-full flex items-center justify-center mr-4 backdrop-blur-sm shadow-lg">
                    <FaUsers className="w-6 h-6 text-cyan-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-cyan-800">Jefferson Jalandoon</div>
                    <div className="text-cyan-700 text-sm flex items-center">
                      <FaLeaf className="w-3 h-3 mr-1 text-emerald-600" />
                      Resident, 2 years sober
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sarah L. */}
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-8 relative overflow-hidden">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-emerald-700 mb-4 flex items-center">
                  <FaStar className="w-6 h-6" />
                  <FaSeedling className="w-4 h-4 ml-2 text-emerald-600" />
                </div>
                <p className="text-emerald-800 mb-6 italic font-medium">
                  "I came here after treatment and found a family. The peer support and accountability helped me stay on track during the most challenging times."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-100/90 rounded-full flex items-center justify-center mr-4 backdrop-blur-sm shadow-lg">
                    <FaHeart className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-emerald-800">Sarah L.</div>
                    <div className="text-emerald-700 text-sm flex items-center">
                      <FaTree className="w-3 h-3 mr-1 text-emerald-600" />
                      Alumni, 3 years sober
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ivan Franco */}
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-8 relative overflow-hidden">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-orange-700 mb-4 flex items-center">
                  <FaStar className="w-6 h-6" />
                  <FaSun className="w-4 h-4 ml-2 text-orange-600" />
                </div>
                <p className="text-orange-800 mb-6 italic font-medium">
                  "The house rules and structure were exactly what I needed. I've learned so much about responsibility and building healthy relationships."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100/90 rounded-full flex items-center justify-center mr-4 backdrop-blur-sm shadow-lg">
                    <FaShieldAlt className="w-6 h-6 text-orange-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-orange-800">Ivan Franco</div>
                    <div className="text-orange-700 text-sm flex items-center">
                      <FaLeaf className="w-3 h-3 mr-1 text-emerald-600" />
                      Resident, 1 year sober
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 