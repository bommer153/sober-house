import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLeaf, FaWater, FaSun, FaTree, FaSeedling } from 'react-icons/fa';
import logo from '../assets/Logo 6.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-blue-800 via-blue-900 to-green-900 text-white relative overflow-hidden">
      {/* Enhanced floating tropical elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-green-400/10 rounded-full animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-orange-400/10 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-blue-400/10 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-14 h-14 bg-yellow-400/10 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Palm tree decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
        <div className="relative">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-20 bg-green-600 rounded-full"></div>
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-green-500 rounded-full rotate-12"></div>
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-green-500 rounded-full -rotate-12"></div>
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-2 h-6 bg-green-400 rounded-full rotate-24"></div>
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-2 h-6 bg-green-400 rounded-full -rotate-24"></div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
        <div className="relative">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-20 bg-green-600 rounded-full"></div>
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-green-500 rounded-full rotate-12"></div>
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-green-500 rounded-full -rotate-12"></div>
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-2 h-6 bg-green-400 rounded-full rotate-24"></div>
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-2 h-6 bg-green-400 rounded-full -rotate-24"></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" onClick={scrollToTop} className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <img src={logo} alt="Sunshine Sober Living Florida" className="h-12 w-auto transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
              <div>
                <div className="text-xl font-bold text-white flex items-center">
                  Sunshine Sober Living
                  <FaTree className="w-4 h-4 ml-2 text-green-400 animate-pulse" />
                </div>
                <div className="text-sm text-blue-200">Florida</div>
              </div>
            </Link>
            <p className="text-blue-200 mb-6 leading-relaxed">
              A bright, stable space where individuals healing from addiction can rediscover themselves, 
              rebuild their future, and rise together—guided by structure, self-respect, and the shared 
              belief that everyone deserves a fresh start in the sun.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-300 hover:text-orange-400 transition-all duration-300 transform hover:scale-110">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-orange-400 transition-all duration-300 transform hover:scale-110">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-orange-400 transition-all duration-300 transform hover:scale-110">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <FaWater className="w-5 h-5 mr-2 text-blue-300" />
              <FaTree className="w-4 h-4 ml-1 text-green-400" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" onClick={scrollToTop} className="text-blue-200 hover:text-orange-400 transition-all duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-orange-400 transition-colors duration-300"></span>
                  <FaSeedling className="w-3 h-3 mr-2 text-green-400" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="text-blue-200 hover:text-orange-400 transition-all duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-orange-400 transition-colors duration-300"></span>
                  <FaLeaf className="w-3 h-3 mr-2 text-green-400" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" onClick={scrollToTop} className="text-blue-200 hover:text-orange-400 transition-all duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-orange-400 transition-colors duration-300"></span>
                  <FaTree className="w-3 h-3 mr-2 text-green-400" />
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="text-blue-200 hover:text-orange-400 transition-all duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-orange-400 transition-colors duration-300"></span>
                  <FaWater className="w-3 h-3 mr-2 text-blue-400" />
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="text-blue-200 hover:text-orange-400 transition-all duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-orange-400 transition-colors duration-300"></span>
                  <FaSun className="w-3 h-3 mr-2 text-orange-400" />
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <FaLeaf className="w-5 h-5 mr-2 text-green-400" />
              <FaTree className="w-4 h-4 ml-1 text-green-300" />
              Contact Information
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                  <FaMapMarkerAlt className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-blue-200">3475 18th Ave South</p>
                  <p className="text-blue-200">St. Petersburg, FL</p>
                  <div className="flex items-center mt-1">
                    <FaTree className="w-3 h-3 text-green-400 mr-1" />
                    <span className="text-xs text-green-300">Tropical Paradise</span>
                  </div>
                </div>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                  <FaPhone className="w-4 h-4 text-white" />
                </div>
                <span className="text-blue-200">Call us for assistance</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300">
                  <FaEnvelope className="w-4 h-4 text-white" />
                </div>
                <span className="text-blue-200">Send us a message</span>
              </li>
            </ul>
          </div>

          {/* S.U.N.S.H.I.N.E. Values */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <FaSun className="w-5 h-5 mr-2 text-orange-400" />
              <FaTree className="w-4 h-4 ml-1 text-green-400" />
              Our Values
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <FaSeedling className="w-3 h-3 text-green-400" />
                <span className="text-blue-200">S - Stability</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <FaTree className="w-3 h-3 text-green-400" />
                <span className="text-blue-200">U - Unity</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <FaLeaf className="w-3 h-3 text-green-400" />
                <span className="text-blue-200">N - Nurture</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <FaSun className="w-3 h-3 text-orange-400" />
                <span className="text-blue-200">S - Self-Accountability</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <FaTree className="w-3 h-3 text-green-400" />
                <span className="text-blue-200">H - Hope</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <FaLeaf className="w-3 h-3 text-green-400" />
                <span className="text-blue-200">I - Integrity</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <FaSeedling className="w-3 h-3 text-green-400" />
                <span className="text-blue-200">N - New Beginnings</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <FaTree className="w-3 h-3 text-green-400" />
                <span className="text-blue-200">E - Empowerment</span>
              </div>
            </div>
            <p className="text-xs text-blue-300 mt-4 italic flex items-center">
              <FaSun className="w-3 h-3 mr-1 text-orange-400" />
              "We don't just recover—we shine brighter every day."
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-300 text-sm mb-4 md:mb-0 flex items-center">
              <FaTree className="w-4 h-4 mr-2 text-green-400" />
              © 2024 Sunshine Sober Living Florida. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" onClick={scrollToTop} className="text-blue-300 hover:text-orange-400 transition-all duration-300 flex items-center">
                <FaLeaf className="w-3 h-3 mr-1" />
                Privacy Policy
              </Link>
              <Link to="/terms" onClick={scrollToTop} className="text-blue-300 hover:text-orange-400 transition-all duration-300 flex items-center">
                <FaTree className="w-3 h-3 mr-1" />
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 