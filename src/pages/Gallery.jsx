import React, { useState, useEffect } from 'react';
import { FaImages, FaTimes, FaChevronLeft, FaChevronRight, FaLeaf, FaWater, FaSun, FaHome, FaTree, FaSeedling } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Import gallery images using Vite's import method
import gallery1 from '../assets/Gallery_SSL_1.jpg';
import gallery2 from '../assets/Gallery_SSL_2.jpg';
import gallery3 from '../assets/Gallery_SSL_3.jpg';
import gallery4 from '../assets/Gallery_SSL_4.jpg';
import gallery5 from '../assets/Gallery_SSL_5.jpg';
import gallery6 from '../assets/Gallery_SSL_6.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const galleryImages = [
    { 
      src: gallery1, 
      alt: 'Sunshine Sober Living - House Exterior',
      title: 'Peaceful Exterior',
      description: 'Our welcoming home surrounded by tropical landscaping'
    },
    { 
      src: gallery2, 
      alt: 'Sunshine Sober Living - Living Room',
      title: 'Comfortable Living Space',
      description: 'Cozy common areas for relaxation and community building'
    },
    { 
      src: gallery3, 
      alt: 'Sunshine Sober Living - Kitchen Area',
      title: 'Modern Kitchen',
      description: 'Fully equipped kitchen for healthy meal preparation'
    },
    { 
      src: gallery4, 
      alt: 'Sunshine Sober Living - Bedroom',
      title: 'Private Bedroom',
      description: 'Peaceful sleeping quarters for rest and recovery'
    },
    { 
      src: gallery5, 
      alt: 'Sunshine Sober Living - Common Area',
      title: 'Community Space',
      description: 'Areas designed for connection and mutual support'
    },
    { 
      src: gallery6, 
      alt: 'Sunshine Sober Living - Outdoor Space',
      title: 'Outdoor Sanctuary',
      description: 'Beautiful outdoor spaces for reflection and relaxation'
    }
  ];

  const openModal = (index) => {
    setSelectedImage(galleryImages[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat text-white h-screen flex items-center justify-center overflow-hidden" style={{
        backgroundImage: `url('/assets/Gallery SSL 2.jpg')`
      }}>
        {/* Tropical overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/70 via-emerald-500/50 to-orange-400/60"></div>
        
        {/* Floating tropical elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-400/30 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-orange-400/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-400/30 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-yellow-400/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-18 h-18 bg-pink-400/30 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Tropical Badge */}
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
                }}>Trusted by 500+ individuals in recovery</span>
              </div>
            </div>
            
            {/* Main Heading */}
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-white transition-all duration-1000 delay-300 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`} style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
              fontFamily: 'Playfair Display, serif',
              fontWeight: '800'
            }}>
              Take a Tour of
              <span className="block" style={{
                color: '#FFD700',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                fontWeight: '900'
              }}>
                Sunshine Sober Living
              </span>
            </h1>
           
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 relative bg-cover bg-center bg-no-repeat bg-fixed" style={{
        backgroundImage: `url('/assets/palm3.gif')`
      }}>
        {/* Tropical overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/40 via-cyan-500/35 to-orange-400/40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-8 relative overflow-hidden mb-8">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Our Living Spaces
                </h2>
                <p className="text-lg text-cyan-700 max-w-3xl mx-auto font-medium">
                  Clean, comfortable, and supportive environments designed to help you focus on your recovery journey.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 overflow-hidden cursor-pointer group transform hover:scale-105 transition-all duration-500 relative"
                onClick={() => openModal(index)}
              >
                {/* Glass window reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
                <div className="relative z-10">
                  <div className="relative overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      onLoad={() => console.log(`Image ${index + 1} loaded successfully:`, image.src)}
                      onError={(e) => {
                        console.error(`Failed to load image ${index + 1}:`, image.src);
                        console.error('Error details:', e);
                        e.target.style.border = '2px solid red';
                        e.target.style.backgroundColor = 'red';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                      <p className="text-white/90 text-sm">{image.description}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-cyan-800 mb-2">{image.title}</h3>
                    <p className="text-cyan-700 text-sm font-medium">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery Info */}
          <div className="mt-16 text-center">
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-8 max-w-4xl mx-auto relative overflow-hidden">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  What You'll Find at Sunshine Sober Living
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-100/90 to-emerald-100/90 rounded-xl flex items-center justify-center mx-auto mb-3 backdrop-blur-sm shadow-lg">
                      <FaHome className="w-6 h-6 text-cyan-700" />
                    </div>
                    <h4 className="font-semibold text-cyan-800 mb-2 flex items-center justify-center">
                      <FaTree className="w-4 h-4 mr-2 text-emerald-600" />
                      🏠 Fully Furnished
                    </h4>
                    <p className="text-cyan-700 text-sm font-medium">
                      Comfortable living spaces with all the essentials you need for daily life.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-100/90 to-cyan-100/90 rounded-xl flex items-center justify-center mx-auto mb-3 backdrop-blur-sm shadow-lg">
                      <FaLeaf className="w-6 h-6 text-emerald-700" />
                    </div>
                    <h4 className="font-semibold text-emerald-800 mb-2 flex items-center justify-center">
                      <FaSeedling className="w-4 h-4 mr-2 text-emerald-600" />
                      🧹 Clean & Organized
                    </h4>
                    <p className="text-emerald-700 text-sm font-medium">
                      Well-maintained homes that provide a peaceful environment for recovery.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-100/90 to-cyan-100/90 rounded-xl flex items-center justify-center mx-auto mb-3 backdrop-blur-sm shadow-lg">
                      <FaWater className="w-6 h-6 text-orange-700" />
                    </div>
                    <h4 className="font-semibold text-orange-800 mb-2 flex items-center justify-center">
                      <FaSun className="w-4 h-4 mr-2 text-orange-600" />
                      🤝 Supportive Community
                    </h4>
                    <p className="text-orange-700 text-sm font-medium">
                      Spaces designed to foster connection and mutual support among residents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-cyan-300 transition-colors duration-300 z-10"
            >
              <FaTimes className="w-6 h-6" />
            </button>
            
            <div className="relative">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-cyan-500/80 text-white p-3 rounded-full hover:bg-cyan-600/80 transition-all duration-300 backdrop-blur-sm"
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-cyan-500/80 text-white p-3 rounded-full hover:bg-cyan-600/80 transition-all duration-300 backdrop-blur-sm"
              >
                <FaChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-white/80 mb-2">{selectedImage.description}</p>
              <p className="text-cyan-300 text-sm">
                {currentIndex + 1} of {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 text-white relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #06b6d4 0%, #10b981 50%, #f59e0b 100%)'
      }}>
        {/* Floating elements */}
        <div className="absolute top-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to See It in Person?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Schedule a tour of our facilities and see for yourself how Sunshine Sober Living can support your recovery journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-orange-500 to-rose-500 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="flex items-center justify-center">
                <FaHome className="w-5 h-5 mr-2" />
                <FaTree className="w-4 h-4 mr-1" />
                Schedule Tour
              </span>
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center">
                <FaLeaf className="w-5 h-5 mr-2" />
                <FaSeedling className="w-4 h-4 mr-1" />
                Apply Now
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery; 