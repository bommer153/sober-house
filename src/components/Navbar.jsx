import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavLink from './NavLink';
import logo from '../assets/Logo 6.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <img src={logo} alt="Sunshine Sober Living Florida" className="h-10 w-auto" />
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-gray-900">Sunshine Sober Living</div>
              <div className="text-xs text-gray-600">Florida</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/" isActive={isActive('/')} onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink to="/about" isActive={isActive('/about')} onClick={closeMenu}>
              About
            </NavLink>
            <NavLink to="/how-it-works" isActive={isActive('/how-it-works')} onClick={closeMenu}>
              How It Works
            </NavLink>
            <NavLink to="/gallery" isActive={isActive('/gallery')} onClick={closeMenu}>
              Gallery
            </NavLink>
            <NavLink to="/contact" isActive={isActive('/contact')} onClick={closeMenu}>
              Contact
            </NavLink>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-md"
              onClick={closeMenu}
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-900 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-lg rounded-b-2xl border border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive('/') 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' 
                    : 'text-gray-900 hover:bg-gray-100'
                }`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive('/about') 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' 
                    : 'text-gray-900 hover:bg-gray-100'
                }`}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/how-it-works"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive('/how-it-works') 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' 
                    : 'text-gray-900 hover:bg-gray-100'
                }`}
                onClick={closeMenu}
              >
                How It Works
              </Link>
              <Link
                to="/gallery"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive('/gallery') 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' 
                    : 'text-gray-900 hover:bg-gray-100'
                }`}
                onClick={closeMenu}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive('/contact') 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' 
                    : 'text-gray-900 hover:bg-gray-100'
                }`}
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-md"
                onClick={closeMenu}
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 