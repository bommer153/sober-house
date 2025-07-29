import Icon from '../Icon'

function HouseListings() {
  const houses = [
    {
      name: 'Sober House Serenity',
      location: 'Downtown Area',
      capacity: '8 residents',
      type: 'Co-ed',
      amenities: ['Private rooms', 'Kitchen', 'Laundry', 'Meeting space'],
      image: 'serenity',
      status: 'Available'
    },
    {
      name: 'Sober House Harmony',
      location: 'Suburban Area',
      capacity: '6 residents',
      type: 'Men only',
      amenities: ['Shared rooms', 'Garden', 'Gym access', 'Study area'],
      image: 'harmony',
      status: 'Available'
    },
    {
      name: 'Sober House Tranquility',
      location: 'University District',
      capacity: '10 residents',
      type: 'Women only',
      amenities: ['Private rooms', 'Kitchen', 'Transportation', 'Job support'],
      image: 'tranquility',
      status: 'Available'
    }
  ];

  const getHouseImage = (type) => {
    const images = {
      serenity: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23e5f3ff"/><stop offset="100%" stop-color="%23b3d9ff"/></linearGradient></defs><rect width="100%" height="100%" fill="url(%23a)"/><rect x="150" y="150" width="100" height="120" fill="%23ffffff" stroke="%23cccccc" stroke-width="2"/><rect x="170" y="170" width="20" height="30" fill="%23a0c4ff"/><rect x="210" y="170" width="20" height="30" fill="%23a0c4ff"/><rect x="190" y="220" width="20" height="50" fill="%23a0c4ff"/><polygon points="150,150 200,100 250,150" fill="%23e6ccb2" stroke="%23cccccc" stroke-width="2"/><circle cx="200" cy="80" r="15" fill="%23ffd700"/><text x="200" y="280" text-anchor="middle" fill="%23666666" font-family="Arial" font-size="12">Serenity House</text></svg>`,
      harmony: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="b" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23f0fff4"/><stop offset="100%" stop-color="%23c6f6d5"/></linearGradient></defs><rect width="100%" height="100%" fill="url(%23b)"/><rect x="120" y="160" width="160" height="110" fill="%23ffffff" stroke="%23cccccc" stroke-width="2"/><rect x="140" y="180" width="25" height="35" fill="%2390cdf4"/><rect x="185" y="180" width="25" height="35" fill="%2390cdf4"/><rect x="230" y="180" width="25" height="35" fill="%2390cdf4"/><rect x="175" y="230" width="30" height="40" fill="%2390cdf4"/><polygon points="120,160 200,110 280,160" fill="%23e6ccb2" stroke="%23cccccc" stroke-width="2"/><circle cx="200" cy="90" r="12" fill="%23ffd700"/><rect x="50" y="200" width="30" height="20" fill="%23a0c4ff"/><rect x="320" y="200" width="30" height="20" fill="%23a0c4ff"/><text x="200" y="290" text-anchor="middle" fill="%23666666" font-family="Arial" font-size="12">Harmony House</text></svg>`,
      tranquility: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="c" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23fdf2f8"/><stop offset="100%" stop-color="%23fce7f3"/></linearGradient></defs><rect width="100%" height="100%" fill="url(%23c)"/><rect x="100" y="140" width="200" height="130" fill="%23ffffff" stroke="%23cccccc" stroke-width="2"/><rect x="120" y="160" width="30" height="40" fill="%23fbb6ce"/><rect x="170" y="160" width="30" height="40" fill="%23fbb6ce"/><rect x="220" y="160" width="30" height="40" fill="%23fbb6ce"/><rect x="270" y="160" width="30" height="40" fill="%23fbb6ce"/><rect x="150" y="220" width="40" height="50" fill="%23fbb6ce"/><rect x="210" y="220" width="40" height="50" fill="%23fbb6ce"/><polygon points="100,140 200,80 300,140" fill="%23e6ccb2" stroke="%23cccccc" stroke-width="2"/><circle cx="200" cy="60" r="18" fill="%23ffd700"/><text x="200" y="290" text-anchor="middle" fill="%23666666" font-family="Arial" font-size="12">Tranquility House</text></svg>`
    };
    return images[type] || images.serenity;
  };

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-6">
            <Icon name="home" size="sm" className="mr-2" />
            Our Houses
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Find Your Perfect
            <span className="block text-green-600">Recovery Home</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-600">
            We are always adding new houses and are dedicated members of recovery communities. 
            Each house provides a safe, supportive environment for individuals committed to sobriety.
          </p>
        </div>

        {/* Houses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {houses.map((house, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
            >
              {/* House Image */}
              <div className="h-48 bg-cover bg-center bg-no-repeat relative overflow-hidden">
                <img 
                  src={getHouseImage(house.image)}
                  alt={house.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-medium">
                    {house.status}
                  </span>
                </div>
              </div>

              {/* House Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{house.name}</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Icon name="map-pin" size="sm" className="mr-2" />
                    <span>{house.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Icon name="users" size="sm" className="mr-2" />
                    <span>{house.capacity} • {house.type}</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Amenities</h4>
                  <div className="flex flex-wrap gap-2">
                    {house.amenities.map((amenity, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <a 
                  href="/contact" 
                  className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
                >
                  Apply for This House
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Housing After Incarceration?
            </h3>
            <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
              We provide reentry support for individuals transitioning from incarceration. 
              Our houses offer a structured environment to help you rebuild your life and maintain sobriety.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Reentry Application
              </a>
              <a 
                href="/how-it-works" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-300"
              >
                Learn About Reentry
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HouseListings; 