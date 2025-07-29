import { useState, useEffect } from 'react';

function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  placeholder = '/placeholder.jpg',
  sizes = '100vw',
  priority = false,
  ...props 
}) {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageStatus, setImageStatus] = useState('loading');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    
    img.onload = () => {
      setImageSrc(src);
      setImageStatus('loaded');
      setIsLoaded(true);
    };
    
    img.onerror = () => {
      setImageStatus('error');
      // Keep placeholder if image fails to load
    };
    
    img.src = src;
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setImageStatus('error');
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder/loading state */}
      {imageStatus === 'loading' && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Error state */}
      {imageStatus === 'error' && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm">Image unavailable</p>
          </div>
        </div>
      )}
      
      {/* Actual image */}
      <img
        src={imageSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={priority ? 'eager' : 'lazy'}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
}

export default OptimizedImage; 