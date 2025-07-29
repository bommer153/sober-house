import Icon from '../components/Icon'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat text-white py-24 lg:py-32 overflow-hidden" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')`
      }}>
        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0,0,0,0.8))'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center bg-white text-gray-900 rounded-full px-6 py-3 mb-8 shadow-lg" style={{
              animation: 'fadeInUp 0.8s ease-out'
            }}>
              <svg className="w-5 h-5 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold">Building Strong Recovery Communities</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight" style={{
              animation: 'fadeInUp 1s ease-out 0.2s both'
            }}>
              About Our
              <span className="block bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
                Recovery Community
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed" style={{
              animation: 'fadeInUp 1s ease-out 0.4s both'
            }}>
              We are dedicated to providing a supportive, structured environment where individuals in recovery 
              can rebuild their lives and build lasting sobriety.
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

      {/* Mission Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div style={{ animation: 'fadeInUp 1s ease-out 0.2s both' }}>
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
                <Icon name="target" size="sm" className="mr-2" />
                Our Mission
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-balance">
                Empowering Recovery
                <span className="block text-blue-600">Through Community</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our mission is to provide a structured, supportive environment where individuals in recovery can 
                rebuild their lives, develop healthy relationships, and establish the foundation for long-term sobriety. 
                We believe that recovery works best when people support each other in a safe, drug-free environment.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4" style={{ animation: 'fadeInUp 1s ease-out 0.4s both' }}>
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="users" size="lg" color="blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Peer Support Network</h3>
                    <p className="text-gray-600">
                      Residents support each other through shared experiences, creating a powerful community of mutual aid.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" style={{ animation: 'fadeInUp 1s ease-out 0.6s both' }}>
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="shield" size="lg" color="green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Safe Environment</h3>
                    <p className="text-gray-600">
                      Structured, drug-free living spaces with clear rules and guidelines to support recovery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" style={{ animation: 'fadeInUp 1s ease-out 0.8s both' }}>
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="heart" size="lg" color="purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Personal Growth</h3>
                    <p className="text-gray-600">
                      Opportunities to develop life skills, build healthy habits, and create lasting change.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="relative" style={{ animation: 'fadeInUp 1s ease-out 0.4s both' }}>
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 text-white text-center shadow-2xl">
                <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="target" size="2xl" color="white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-blue-100 mb-6">
                  To provide hope, healing, and a path to lasting recovery through community support and structured living.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-blue-100">Lives Changed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">10+</div>
                    <div className="text-sm text-blue-100">Years Service</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-green-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-200 rounded-full opacity-60"></div>
              <div className="absolute top-1/2 -left-8 w-16 h-16 bg-yellow-200 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16" style={{ animation: 'fadeInUp 1s ease-out 0.2s both' }}>
            <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-6">
              <Icon name="star" size="sm" className="mr-2" />
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              The Foundation of
              <span className="block text-green-600">Our Community</span>
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-600">
              These core values guide everything we do and shape the supportive environment we create for our residents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center" style={{ animation: 'fadeInUp 1s ease-out 0.4s both' }}>
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="heart" size="xl" color="blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compassion</h3>
              <p className="text-gray-600">
                We approach every individual with understanding, empathy, and unconditional support.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center" style={{ animation: 'fadeInUp 1s ease-out 0.5s both' }}>
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="shield" size="xl" color="green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Safety</h3>
              <p className="text-gray-600">
                Creating secure, drug-free environments where residents can focus on their recovery.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center" style={{ animation: 'fadeInUp 1s ease-out 0.6s both' }}>
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="users" size="xl" color="purple" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600">
                Building strong connections and mutual support among residents and staff.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center" style={{ animation: 'fadeInUp 1s ease-out 0.7s both' }}>
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="target" size="xl" color="red" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accountability</h3>
              <p className="text-gray-600">
                Encouraging personal responsibility and commitment to recovery goals.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center" style={{ animation: 'fadeInUp 1s ease-out 0.8s both' }}>
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="award" size="xl" color="yellow" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                Maintaining high standards in all aspects of our recovery support services.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center" style={{ animation: 'fadeInUp 1s ease-out 0.9s both' }}>
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="lightbulb" size="xl" color="indigo" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Growth</h3>
              <p className="text-gray-600">
                Supporting continuous personal development and life skill building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16" style={{ animation: 'fadeInUp 1s ease-out 0.2s both' }}>
            <div className="inline-flex items-center px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium mb-6">
              <Icon name="users" size="sm" className="mr-2" />
              Our Team
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Dedicated to Your
              <span className="block text-purple-600">Recovery Success</span>
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-600">
              Our experienced team of professionals and peer support specialists are committed to helping you achieve lasting recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center" style={{ animation: 'fadeInUp 1s ease-out 0.4s both' }}>
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                JD
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Jefferson Jalandoon</h3>
              <p className="text-blue-600 font-medium mb-4">Founder & Director</p>
              <p className="text-gray-600">
                Licensed counselor with over 10 years of experience in addiction recovery and community building.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center" style={{ animation: 'fadeInUp 1s ease-out 0.5s both' }}>
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                MS
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Maria Santos</h3>
              <p className="text-green-600 font-medium mb-4">Program Coordinator</p>
              <p className="text-gray-600">
                Certified peer support specialist dedicated to creating structured recovery programs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center" style={{ animation: 'fadeInUp 1s ease-out 0.6s both' }}>
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                RJ
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Robert Johnson</h3>
              <p className="text-purple-600 font-medium mb-4">House Manager</p>
              <p className="text-gray-600">
                Experienced in maintaining safe, supportive environments for recovery communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Recovery Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join our community and become part of a supportive network dedicated to lasting recovery and personal growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Apply Now
            </Link>
            <Link 
              to="/how-it-works" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About; 