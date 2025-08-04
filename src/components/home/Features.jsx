import Icon from '../Icon';
import { FaLeaf, FaWater, FaSun, FaHome, FaHeart, FaClock, FaMapPin, FaUsers, FaShieldAlt } from 'react-icons/fa';

function Features() {
  const features = [
    {
      icon: FaUsers,
      title: 'Community Support Network',
      description: 'Join a supportive community of individuals committed to recovery. Our residents form lasting friendships and provide mutual support through shared experiences.',
      color: 'ocean'
    },
    {
      icon: FaShieldAlt,
      title: 'Safe & Structured Environment',
      description: 'A drug and alcohol-free environment with clear house rules and guidelines to support your recovery journey and prevent relapse.',
      color: 'palm'
    },
    {
      icon: FaHome,
      title: 'Affordable Housing',
      description: 'Cost-effective sober living that provides quality housing without the high costs of treatment facilities. Shared expenses make recovery accessible.',
      color: 'sunset'
    },
    {
      icon: FaHeart,
      title: 'Peer-Led Recovery',
      description: 'Residents take responsibility for house management and support each other. This peer-led approach builds leadership skills and accountability.',
      color: 'coral'
    },
    {
      icon: FaClock,
      title: 'Flexible Stay Duration',
      description: 'Stay as long as you need to build a solid foundation in recovery. Most residents stay 3-12 months, with no arbitrary time limits.',
      color: 'sand'
    },
    {
      icon: FaMapPin,
      title: 'Convenient Locations',
      description: 'Located in quiet, residential neighborhoods with easy access to meetings, employment, and community resources.',
      color: 'ocean'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      ocean: {
        bg: 'from-blue-100 to-blue-200',
        bgHover: 'from-blue-200 to-blue-300',
        text: 'text-blue-700',
        icon: 'text-blue-600'
      },
      palm: {
        bg: 'from-green-100 to-green-200',
        bgHover: 'from-green-200 to-green-300',
        text: 'text-green-700',
        icon: 'text-green-600'
      },
      sunset: {
        bg: 'from-orange-100 to-orange-200',
        bgHover: 'from-orange-200 to-orange-300',
        text: 'text-orange-700',
        icon: 'text-orange-600'
      },
      coral: {
        bg: 'from-red-100 to-red-200',
        bgHover: 'from-red-200 to-red-300',
        text: 'text-red-700',
        icon: 'text-red-600'
      },
      sand: {
        bg: 'from-yellow-100 to-yellow-200',
        bgHover: 'from-yellow-200 to-yellow-300',
        text: 'text-yellow-700',
        icon: 'text-yellow-600'
      }
    };
    return colorMap[color] || colorMap.ocean;
  };

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #dcfce7 100%)'
    }}>
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-blue-400/10 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 bg-green-400/10 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-orange-400/10 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/90 backdrop-blur-sm text-blue-700 rounded-full px-6 py-3 mb-6 shadow-lg">
            <FaLeaf className="w-5 h-5 mr-3 text-green-500 animate-pulse" />
            <span className="font-semibold">Why Choose Sober Living?</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Living Bright at Sunshine:
            <span className="block bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 bg-clip-text text-transparent">Self-Help Tools for a Relapse-Free Sober Journey</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-blue-600">
            Our sober living houses provide a safe, affordable environment that supports individuals in recovery from alcoholism and addiction. 
            Join the largest network of recovery-focused housing in the community.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            const IconComponent = feature.icon;
            
            return (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${colors.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:${colors.bgHover} transition-all duration-300`}>
                  <IconComponent className={`w-8 h-8 ${colors.icon}`} />
                </div>
                <h3 className={`text-xl font-bold mb-4 ${colors.text}`}>{feature.title}</h3>
                <p className="text-blue-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden" style={{
            background: 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 50%, #7dd3fc 100%)'
          }}>
            {/* Floating elements */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full animate-bounce"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Start Your Recovery Journey?
              </h3>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Having time to become comfortable in sobriety might be the single most important part of recovery success. 
                Our cost-effective method improves the chances of recovery and shows that recovery works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span className="flex items-center justify-center">
                    <FaHome className="w-5 h-5 mr-2" />
                    Apply Now
                  </span>
                </a>
                <a 
                  href="/how-it-works" 
                  className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    <FaLeaf className="w-5 h-5 mr-2" />
                    Learn More
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
