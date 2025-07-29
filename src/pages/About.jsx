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
              <span className="text-sm font-semibold">About Sunshine Sober Living</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight" style={{
              animation: 'fadeInUp 1s ease-out 0.2s both'
            }}>
              We don't just recover—
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                we shine brighter every day
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed" style={{
              animation: 'fadeInUp 1s ease-out 0.4s both'
            }}>
              Grounded in our S.U.N.S.H.I.N.E. values: Stability, Unity, Nurture, Self-Accountability, Hope, Integrity, New Beginnings, and Empowerment.
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

      {/* Mission & Vision Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div style={{ animation: 'fadeInUp 1s ease-out 0.2s both' }}>
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
                <Icon name="target" size="sm" className="mr-2" />
                Our Mission
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-balance">
                Creating a Bright,
                <span className="block text-blue-600">Stable Space</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                To create a bright, stable space where individuals healing from addiction can rediscover themselves, rebuild their future, and rise together—guided by structure, self-respect, and the shared belief that everyone deserves a fresh start in the sun.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4" style={{ animation: 'fadeInUp 1s ease-out 0.4s both' }}>
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="users" size="lg" color="blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Community Support</h3>
                    <p className="text-gray-600">
                      Building strong connections and mutual support among residents and staff.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" style={{ animation: 'fadeInUp 1s ease-out 0.6s both' }}>
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="shield" size="lg" color="green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Structured Environment</h3>
                    <p className="text-gray-600">
                      Safe, drug-free living spaces with clear rules and guidelines to support recovery.
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

            {/* Vision */}
            <div style={{ animation: 'fadeInUp 1s ease-out 0.4s both' }}>
              <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-6">
                <Icon name="eye" size="sm" className="mr-2" />
                Our Vision
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-balance">
                A Thriving Recovery
                <span className="block text-green-600">Community</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We envision a thriving recovery community across Florida where sober living isn't just about staying clean, it's about living fully, freely, and with purpose. Sunshine Sober Living will be known as a safe haven of hope, heart, and healing where transformation happens through consistency, connection, and courage.
              </p>

              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 text-white text-center shadow-2xl">
                <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="target" size="2xl" color="white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
                <p className="text-green-100 mb-6">
                  A safe haven of hope, heart, and healing where transformation happens through consistency, connection, and courage.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">Florida</div>
                    <div className="text-sm text-green-100">Recovery Community</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Purpose</div>
                    <div className="text-sm text-green-100">Living Fully</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S.U.N.S.H.I.N.E. Values Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16" style={{ animation: 'fadeInUp 1s ease-out 0.2s both' }}>
            <div className="inline-flex items-center px-4 py-2 bg-yellow-50 text-yellow-700 rounded-full text-sm font-medium mb-6">
              <Icon name="star" size="sm" className="mr-2" />
              S.U.N.S.H.I.N.E. Core Values
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              "We don't just recover—
              <span className="block text-yellow-600">we shine brighter every day."</span>
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-600">
              These core values guide everything we do and shape the supportive environment we create for our residents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* S - Stability */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center" style={{ animation: 'fadeInUp 1s ease-out 0.4s both' }}>
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="shield" size="xl" color="blue" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">S</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Stability</h3>
              <p className="text-gray-600 text-sm">
                We provide a safe, dependable environment where structure supports progress. Stability is the foundation of lasting change.
              </p>
            </div>

            {/* U - Unity */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center" style={{ animation: 'fadeInUp 1s ease-out 0.5s both' }}>
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="users" size="xl" color="green" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">U</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Unity</h3>
              <p className="text-gray-600 text-sm">
                We grow stronger together. Our community thrives on teamwork, shared goals, and mutual support—no one gets left behind.
              </p>
            </div>

            {/* N - Nurture */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center" style={{ animation: 'fadeInUp 1s ease-out 0.6s both' }}>
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="heart" size="xl" color="pink" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">N</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Nurture</h3>
              <p className="text-gray-600 text-sm">
                We create a home filled with compassion and encouragement. Healing happens in spaces where people feel valued, seen, and cared for.
              </p>
            </div>

            {/* S - Self-Accountability */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center" style={{ animation: 'fadeInUp 1s ease-out 0.7s both' }}>
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="target" size="xl" color="purple" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">S</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Self-Accountability</h3>
              <p className="text-gray-600 text-sm">
                We own our actions and choices. Personal responsibility empowers us to grow with integrity and self-respect.
              </p>
            </div>

            {/* H - Hope */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center" style={{ animation: 'fadeInUp 1s ease-out 0.8s both' }}>
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="sun" size="xl" color="yellow" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">H</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Hope</h3>
              <p className="text-gray-600 text-sm">
                We believe that no past defines the future. Hope fuels our journey and reminds us that brighter days are always within reach.
              </p>
            </div>

            {/* I - Integrity */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center" style={{ animation: 'fadeInUp 1s ease-out 0.9s both' }}>
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="star" size="xl" color="indigo" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">I</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600 text-sm">
                We live with honesty and treat others with fairness and respect. Trust is earned and kept through consistent, truthful action.
              </p>
            </div>

            {/* N - New Beginnings */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center" style={{ animation: 'fadeInUp 1s ease-out 1s both' }}>
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="leaf" size="xl" color="emerald" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">N</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">New Beginnings</h3>
              <p className="text-gray-600 text-sm">
                Every day is a chance to start again. We embrace fresh starts with open hearts and a willingness to change.
              </p>
            </div>

            {/* E - Empowerment */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center" style={{ animation: 'fadeInUp 1s ease-out 1.1s both' }}>
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="award" size="xl" color="orange" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">E</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Empowerment</h3>
              <p className="text-gray-600 text-sm">
                We equip every resident with the tools, confidence, and support to build a life they're proud of—one sober step at a time.
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
            Whether you're transitioning from treatment or starting over with a clear mind and a hopeful heart, Sunshine is here to walk with you…. one step, one choice, and one day at a time.
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