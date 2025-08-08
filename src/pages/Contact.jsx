import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaExclamationTriangle, FaClipboardCheck, FaLeaf, FaHome, FaWater, FaTree, FaSeedling, FaSun } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import GoogleMap from '../components/GoogleMap';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat text-white h-screen flex items-center justify-center overflow-hidden" style={{
        backgroundImage: `url('/assets/Gallery_SSL_1.jpg')`
      }}>
        {/* Hope and Healing overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/40 via-blue-500/30 to-green-400/20"></div>
        
        {/* Floating tropical elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-400/30 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-orange-400/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-400/30 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-yellow-400/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-18 h-18 bg-pink-400/30 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        
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
                <span className="text-sm font-black text-blue-800">Get in Touch</span>
              </div>
            </div>
            
            {/* Main Heading */}
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight text-white transition-all duration-1000 delay-300 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`} style={{
              textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)',
              fontFamily: 'Playfair Display, serif',
              fontWeight: '900'
            }}>
              Get in Touch
              <span className="block" style={{
                color: '#EAB308',
                textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)',
                fontWeight: '900'
              }}>
                Start Your Journey
              </span>
            </h1>
            
            {/* Subheading */}
            <p className={`text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 font-bold transition-all duration-1000 delay-500 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`} style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.95)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '700',
              letterSpacing: '0.025em'
            }}>
              Ready to take the first step towards recovery? Contact us today to learn more about our supportive sober living environment and begin your journey to lasting sobriety.
            </p>
          
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-20 relative bg-cover bg-center bg-no-repeat bg-fixed" style={{
        backgroundImage: `url('/assets/palm3.gif')`
      }}>
        {/* Hope and Healing overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/25 via-blue-500/20 to-green-400/15"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-8 relative overflow-hidden mb-8">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                  Get in Touch
                </h2>
                <p className="text-lg text-black max-w-3xl mx-auto font-semibold">
                  We're here to help you start your recovery journey. Contact us today to learn more about our program.
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div id="contact-form" className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-8 relative overflow-hidden">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                  <FaTree className="w-6 h-6 mr-2 text-emerald-600" />
                  Send us a Message
                </h3>
                <ContactForm />
              </div>
            </div>
            
            {/* Contact Information */}
            <div id="contact-info" className="space-y-8">
              <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-8 relative overflow-hidden">
                {/* Glass window reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                    <FaLeaf className="w-6 h-6 mr-2 text-emerald-600" />
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-100/90 to-cyan-200/90 rounded-xl flex items-center justify-center mr-4 backdrop-blur-sm shadow-lg">
                        <FaPhone className="w-6 h-6 text-cyan-700" />
                      </div>
                      <div>
                        <h4 className="font-black text-cyan-900 flex items-center">
                          <FaTree className="w-4 h-4 mr-2 text-emerald-600" />
                          Phone
                        </h4>
                        <p className="text-black font-semibold">727-481-0705</p>
                        <p className="text-black text-sm font-semibold">Available 24/7</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-100/90 to-emerald-200/90 rounded-xl flex items-center justify-center mr-4 backdrop-blur-sm shadow-lg">
                        <FaEnvelope className="w-6 h-6 text-emerald-700" />
                      </div>
                      <div>
                        <h4 className="font-black text-emerald-900 flex items-center">
                          <FaSeedling className="w-4 h-4 mr-2 text-emerald-600" />
                          Email
                        </h4>
                        <p className="text-black font-semibold">kmonroe@irokgroup.com</p>
                        <p className="text-black text-sm font-semibold">Response within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-100/90 to-orange-200/90 rounded-xl flex items-center justify-center mr-4 backdrop-blur-sm shadow-lg">
                        <FaMapMarkerAlt className="w-6 h-6 text-orange-700" />
                      </div>
                      <div>
                        <h4 className="font-black text-orange-900 flex items-center">
                          <FaSun className="w-4 h-4 mr-2 text-orange-600" />
                          Location
                        </h4>
                        <p className="text-black font-semibold">3475 18th Ave South</p>
                        <p className="text-black font-semibold">St. Petersburg, FL</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-100/90 to-cyan-200/90 rounded-xl flex items-center justify-center mr-4 backdrop-blur-sm shadow-lg">
                        <FaClock className="w-6 h-6 text-cyan-700" />
                      </div>
                      <div>
                        <h4 className="font-black text-cyan-900 flex items-center">
                          <FaWater className="w-4 h-4 mr-2 text-cyan-600" />
                          Office Hours
                        </h4>
                        <p className="text-black font-semibold">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-black font-semibold">Weekends: 10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-8 relative overflow-hidden">
                {/* Glass window reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                    <FaExclamationTriangle className="w-6 h-6 mr-2 text-red-600" />
                    Emergency Contact
                  </h3>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-100/90 to-red-200/90 rounded-xl flex items-center justify-center mr-4 backdrop-blur-sm shadow-lg">
                      <FaExclamationTriangle className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-black text-red-700 flex items-center">
                        <FaTree className="w-4 h-4 mr-2 text-emerald-600" />
                        24/7 Crisis Line
                      </h4>
                      <p className="text-red-600 font-semibold">(555) 999-8888</p>
                      <p className="text-black text-sm font-semibold">For immediate assistance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 relative bg-cover bg-center bg-no-repeat bg-fixed" style={{
        backgroundImage: `url('/assets/palm3.gif')`
      }}>
        {/* Hope and Healing overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/25 via-blue-500/20 to-green-400/15"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-8 relative overflow-hidden mb-8">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                  Find Us
                </h2>
                <p className="text-lg text-black max-w-3xl mx-auto font-semibold">
                  Visit our location to see our facilities and meet our team in person.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 overflow-hidden relative">
            {/* Glass window reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            <div className="relative z-10">
              <GoogleMap />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-white relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #22c55e 0%, #3b82f6 50%, #16a34a 100%)'
      }}>
        {/* Floating elements */}
        <div className="absolute top-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto font-semibold">
            Don't wait to start your recovery journey. Contact us today and take the first step towards a brighter future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="#contact-form" 
              className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="flex items-center justify-center">
                <FaHome className="w-5 h-5 mr-2" />
                <FaTree className="w-4 h-4 mr-1" />
                Apply Now
              </span>
            </Link>
            <Link 
              to="#contact-info" 
              className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center">
                <FaLeaf className="w-5 h-5 mr-2" />
                <FaSeedling className="w-4 h-4 mr-1" />
                Contact Info
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 