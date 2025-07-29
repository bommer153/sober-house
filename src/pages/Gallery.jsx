import React, { useState } from 'react';
import { FaImages, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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

  const galleryImages = [
    { 
      src: gallery1, 
      alt: 'Sunshine Sober Living - House Exterior' 
    },
    { 
      src: gallery2, 
      alt: 'Sunshine Sober Living - Living Room' 
    },
    { 
      src: gallery3, 
      alt: 'Sunshine Sober Living - Kitchen Area' 
    },
    { 
      src: gallery4, 
      alt: 'Sunshine Sober Living - Bedroom' 
    },
    { 
      src: gallery5, 
      alt: 'Sunshine Sober Living - Common Area' 
    },
    { 
      src: gallery6, 
      alt: 'Sunshine Sober Living - Outdoor Space' 
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat text-white py-24 lg:py-32 overflow-hidden" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
      }}>
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0,0,0,0.8))'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <div className="inline-flex items-center bg-white text-gray-900 rounded-full px-6 py-3 mb-8 shadow-lg" style={{
              animation: 'fadeInUp 0.8s ease-out'
            }}>
              <FaImages className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-semibold">Our Homes</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight" style={{
              animation: 'fadeInUp 1s ease-out 0.2s both'
            }}>
              Take a Tour of
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Sunshine Sober Living
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4" style={{
              animation: 'fadeInUp 1s ease-out 0.4s both'
            }}>
              See our clean, comfortable, and supportive living spaces where recovery happens every day.
            </p>
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

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" style={{
            animation: 'fadeInUp 1s ease-out 0.6s both'
          }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Living Spaces
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Clean, comfortable, and supportive environments designed to help you focus on your recovery journey.
            </p>
          </div>

        

          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{
            animation: 'fadeInUp 1s ease-out 0.8s both'
          }}>
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
                onClick={() => openModal(index)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                  onLoad={() => console.log(`Image ${index + 1} loaded successfully:`, image.src)}
                  onError={(e) => {
                    console.error(`Failed to load image ${index + 1}:`, image.src);
                    console.error('Error details:', e);
                    e.target.style.border = '2px solid red';
                    e.target.style.backgroundColor = 'red';
                  }}
                  style={{ backgroundColor: 'transparent' }}
                />               
              </div>
            ))}
          </div>

          {/* Gallery Info */}
          <div className="mt-16 text-center" style={{
            animation: 'fadeInUp 1s ease-out 1s both'
          }}>
            <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What You'll Find at Sunshine Sober Living
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🏠 Fully Furnished</h4>
                  <p className="text-gray-600 text-sm">
                    Comfortable living spaces with all the essentials you need for daily life.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🧹 Clean & Organized</h4>
                  <p className="text-gray-600 text-sm">
                    Well-maintained homes that provide a peaceful environment for recovery.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🤝 Supportive Community</h4>
                  <p className="text-gray-600 text-sm">
                    Spaces designed to foster connection and mutual support among residents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300 z-10"
            >
              <FaTimes className="w-6 h-6" />
            </button>
            
            <div className="relative">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-300"
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-300"
              >
                <FaChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-white text-lg">
                {currentIndex + 1} of {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to See It in Person?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule a tour of our facilities and see for yourself how Sunshine Sober Living can support your recovery journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Schedule Tour
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery; 