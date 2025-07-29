import Icon from '../Icon'

function About() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Icon name="heart" size="sm" className="mr-2" />
              About Our Community
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-balance">
              Building a Strong
              <span className="block text-blue-600">Recovery Foundation</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our sober living community is built on the principle that recovery works best when individuals 
              support each other in a structured, drug-free environment. We provide the foundation for lasting 
              sobriety through peer support, accountability, and personal growth.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="users" size="lg" color="blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Peer-Led Recovery</h3>
                  <p className="text-gray-600">
                    Residents take responsibility for house management and support each other, creating a 
                    powerful community of mutual aid and accountability.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="shield" size="lg" color="green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Safe Environment</h3>
                  <p className="text-gray-600">
                    Our houses provide a structured, drug-free environment with clear rules and guidelines 
                    to support your recovery journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="target" size="lg" color="purple" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Personal Growth</h3>
                  <p className="text-gray-600">
                    Develop life skills, build healthy habits, and create a strong foundation for long-term 
                    success and independence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 text-white text-center shadow-2xl">
                <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="home" size="2xl" color="white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Recovery Community</h3>
                <p className="text-blue-100 mb-6">
                  Join a supportive network of individuals committed to lasting sobriety and personal growth.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-blue-100">Lives Changed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-sm text-blue-100">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm text-blue-100">Support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-green-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-200 rounded-full opacity-60"></div>
            <div className="absolute top-1/2 -left-8 w-16 h-16 bg-yellow-200 rounded-full opacity-60"></div>

            {/* Floating Icons */}
            <div className="absolute top-8 -right-8 bg-white rounded-2xl p-4 shadow-lg">
              <Icon name="heart" size="xl" color="red" />
            </div>
            <div className="absolute bottom-8 -left-8 bg-white rounded-2xl p-4 shadow-lg">
              <Icon name="star" size="xl" color="yellow" />
            </div>
            <div className="absolute top-1/2 -right-12 bg-white rounded-2xl p-4 shadow-lg">
              <Icon name="users" size="xl" color="blue" />
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="home" size="xl" color="blue" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
            <div className="text-gray-600">Houses</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="users" size="xl" color="green" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
            <div className="text-gray-600">Residents</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="map-pin" size="xl" color="purple" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">8</div>
            <div className="text-gray-600">Locations</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="award" size="xl" color="red" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
            <div className="text-gray-600">Years</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
