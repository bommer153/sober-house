import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaLeaf, FaWater } from 'react-icons/fa';
import NavLink from './NavLink';
import logo from '../assets/Logo 6-photoaidcom-cropped.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-tropical-lg border-b border-tropical-ocean-100' 
        : 'bg-gradient-to-r from-tropical-ocean-500/95 to-tropical-palm-500/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group" onClick={closeMenu}>
            <div className="relative">
              <img src={logo} alt="Sunshine Sober Living Florida" className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-tropical-sunset-400 rounded-full animate-pulse-slow"></div>
            </div>
            <div className="hidden sm:block">
              <div className={`text-xl font-bold transition-colors duration-300 ${
                scrolled ? 'text-tropical-ocean-700' : 'text-white'
              }`}>
                Sunshine Sober Living
              </div>
              <div className={`text-xs transition-colors duration-300 ${
                scrolled ? 'text-tropical-ocean-500' : 'text-tropical-ocean-100'
              }`}>
                Florida
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/" isActive={isActive('/')} onClick={closeMenu} scrolled={scrolled}>
              <FaWater className="w-4 h-4 mr-2" />
              Home
            </NavLink>
            <NavLink to="/about" isActive={isActive('/about')} onClick={closeMenu} scrolled={scrolled}>
              About
            </NavLink>
            <NavLink to="/how-it-works" isActive={isActive('/how-it-works')} onClick={closeMenu} scrolled={scrolled}>
              How It Works
            </NavLink>
            <NavLink to="/gallery" isActive={isActive('/gallery')} onClick={closeMenu} scrolled={scrolled}>
              Gallery
            </NavLink>
            <NavLink to="/contact" isActive={isActive('/contact')} onClick={closeMenu} scrolled={scrolled}>
              Contact
            </NavLink>
            <Link
              to="/contact"
              className="tropical-button group relative overflow-hidden"
              onClick={closeMenu}
            >
              <span className="relative z-10 flex items-center">
                <FaLeaf className="w-4 h-4 mr-2 animate-pulse" />
                Apply Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-tropical-sunset-500 to-tropical-coral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-full transition-all duration-300 ${
              scrolled 
                ? 'text-tropical-ocean-600 hover:bg-tropical-ocean-100' 
                : 'text-white hover:bg-white/20'
            } focus:outline-none focus:ring-2 focus:ring-tropical-ocean-300`}
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
          <div className="lg:hidden tropical-card mt-2 mb-4">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 flex items-center ${
                  isActive('/') 
                    ? 'bg-gradient-to-r from-tropical-ocean-500 to-tropical-palm-500 text-white shadow-tropical' 
                    : 'text-tropical-ocean-700 hover:bg-tropical-ocean-50'
                }`}
                onClick={closeMenu}
              >
                <FaWater className="w-4 h-4 mr-3" />
                Home
              </Link>
              <Link
                to="/about"
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  isActive('/about') 
                    ? 'bg-gradient-to-r from-tropical-ocean-500 to-tropical-palm-500 text-white shadow-tropical' 
                    : 'text-tropical-ocean-700 hover:bg-tropical-ocean-50'
                }`}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/how-it-works"
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  isActive('/how-it-works') 
                    ? 'bg-gradient-to-r from-tropical-ocean-500 to-tropical-palm-500 text-white shadow-tropical' 
                    : 'text-tropical-ocean-700 hover:bg-tropical-ocean-50'
                }`}
                onClick={closeMenu}
              >
                How It Works
              </Link>
              <Link
                to="/gallery"
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  isActive('/gallery') 
                    ? 'bg-gradient-to-r from-tropical-ocean-500 to-tropical-palm-500 text-white shadow-tropical' 
                    : 'text-tropical-ocean-700 hover:bg-tropical-ocean-50'
                }`}
                onClick={closeMenu}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  isActive('/contact') 
                    ? 'bg-gradient-to-r from-tropical-ocean-500 to-tropical-palm-500 text-white shadow-tropical' 
                    : 'text-tropical-ocean-700 hover:bg-tropical-ocean-50'
                }`}
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-3 rounded-xl text-base font-medium tropical-button-secondary mt-4 text-center"
                onClick={closeMenu}
              >
                <FaLeaf className="w-4 h-4 mr-2 inline animate-pulse" />
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