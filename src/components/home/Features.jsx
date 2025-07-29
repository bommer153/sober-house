import Icon from '../Icon';

function Features() {
  const features = [
    {
      icon: 'users',
      title: 'Community Support Network',
      description: 'Join a supportive community of individuals committed to recovery. Our residents form lasting friendships and provide mutual support through shared experiences.',
      color: 'blue'
    },
    {
      icon: 'shield',
      title: 'Safe & Structured Environment',
      description: 'A drug and alcohol-free environment with clear house rules and guidelines to support your recovery journey and prevent relapse.',
      color: 'green'
    },
    {
      icon: 'home',
      title: 'Affordable Housing',
      description: 'Cost-effective sober living that provides quality housing without the high costs of treatment facilities. Shared expenses make recovery accessible.',
      color: 'purple'
    },
    {
      icon: 'heart',
      title: 'Peer-Led Recovery',
      description: 'Residents take responsibility for house management and support each other. This peer-led approach builds leadership skills and accountability.',
      color: 'red'
    },
    {
      icon: 'clock',
      title: 'Flexible Stay Duration',
      description: 'Stay as long as you need to build a solid foundation in recovery. Most residents stay 3-12 months, with no arbitrary time limits.',
      color: 'orange'
    },
    {
      icon: 'map-pin',
      title: 'Convenient Locations',
      description: 'Located in quiet, residential neighborhoods with easy access to meetings, employment, and community resources.',
      color: 'indigo'
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Icon name="star" size="sm" className="mr-2" />
            Why Choose Sober Living?
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Self-Help for Sober Living
            <span className="block text-blue-600">Without Relapse</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-600">
            Our sober living houses provide a safe, affordable environment that supports individuals in recovery from alcoholism and addiction. 
            Join the largest network of recovery-focused housing in the community.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 bg-${feature.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-${feature.color}-200 transition-colors duration-300`}>
                <Icon name={feature.icon} size="xl" color={feature.color} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-white">
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
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Apply Now
              </a>
              <a 
                href="/how-it-works" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
