import { useEffect, useRef } from 'react';

function GoogleMap({ address = "123 Recovery Street, City, State 12345" }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Load Google Maps API
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapRef.current || !window.google) return;

      // Geocoder to convert address to coordinates
      const geocoder = new window.google.maps.Geocoder();
      
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK' && results[0]) {
          const location = results[0].geometry.location;
          
          const mapOptions = {
            center: location,
            zoom: 15,
            styles: [
              {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
              },
              {
                featureType: 'transit',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
              }
            ],
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false
          };

          const map = new window.google.maps.Map(mapRef.current, mapOptions);

          // Add marker
          new window.google.maps.Marker({
            position: location,
            map: map,
            title: 'Sober House Recovery Community',
            icon: {
              url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="20" fill="#1e40af"/>
                  <path d="M20 8L28 16V28H12V16L20 8Z" fill="white"/>
                  <circle cx="20" cy="22" r="3" fill="#1e40af"/>
                </svg>
              `),
              scaledSize: new window.google.maps.Size(40, 40),
              anchor: new window.google.maps.Point(20, 40)
            }
          });

          // Add info window
          const infoWindow = new window.google.maps.InfoWindow({
            content: `
              <div style="padding: 10px; max-width: 200px;">
                <h3 style="margin: 0 0 5px 0; color: #1e40af; font-weight: bold;">Sober House</h3>
                <p style="margin: 0; color: #374151;">Recovery Community</p>
                <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 12px;">${address}</p>
              </div>
            `
          });

          // Show info window on marker click
          map.addListener('click', () => {
            infoWindow.open(map, null);
          });

          mapInstanceRef.current = map;
        }
      });
    };

    loadGoogleMaps();

    return () => {
      // Cleanup
      if (mapInstanceRef.current) {
        // Google Maps doesn't need explicit cleanup
        mapInstanceRef.current = null;
      }
    };
  }, [address]);

  return (
    <div className="relative">
      <div 
        ref={mapRef} 
        className="w-full h-80 rounded-xl shadow-lg border border-gray-200"
        style={{ minHeight: '320px' }}
      >
        {/* Loading state */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading map...</p>
          </div>
        </div>
      </div>
      
      {/* Fallback if Google Maps fails to load */}
      <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> To enable the interactive map, please add your Google Maps API key to the GoogleMap component.
        </p>
      </div>
    </div>
  );
}

export default GoogleMap; 