import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../assets/Logo 6.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" onClick={scrollToTop} className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="Sunshine Sober Living Florida" className="h-12 w-auto" />
              <div>
                <div className="text-xl font-bold">Sunshine Sober Living</div>
                <div className="text-sm text-gray-400">Florida</div>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A bright, stable space where individuals healing from addiction can rediscover themselves, 
              rebuild their future, and rise together—guided by structure, self-respect, and the shared 
              belief that everyone deserves a fresh start in the sun.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" onClick={scrollToTop} className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" onClick={scrollToTop} className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">3475 18th Ave South</p>
                  <p className="text-gray-400">St. Petersburg, FL</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-400">Call us for assistance</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-400">Send us a message</span>
              </li>
            </ul>
          </div>

          {/* S.U.N.S.H.I.N.E. Values */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Values</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-gray-400">S - Stability</div>
              <div className="text-gray-400">U - Unity</div>
              <div className="text-gray-400">N - Nurture</div>
              <div className="text-gray-400">S - Self-Accountability</div>
              <div className="text-gray-400">H - Hope</div>
              <div className="text-gray-400">I - Integrity</div>
              <div className="text-gray-400">N - New Beginnings</div>
              <div className="text-gray-400">E - Empowerment</div>
            </div>
            <p className="text-xs text-gray-500 mt-4 italic">
              "We don't just recover—we shine brighter every day."
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Sunshine Sober Living Florida. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" onClick={scrollToTop} className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" onClick={scrollToTop} className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
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