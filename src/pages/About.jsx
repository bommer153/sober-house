import Icon from '../components/Icon'
import { Link } from 'react-router-dom'
import { FaLeaf, FaWater, FaSun, FaHome, FaHeart, FaClock, FaMapPin, FaUsers, FaShieldAlt, FaEye, FaStar, FaAward, FaTree, FaSeedling } from 'react-icons/fa';
import { useEffect, useState } from 'react';

function About() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat text-white h-screen flex items-center justify-center overflow-hidden" style={{
        backgroundImage: `url('/assets/resort.jpg')`
      }}>
        {/* Hope and Healing overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/40 via-blue-500/30 to-green-400/20"></div>
        
        {/* Floating tropical elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-400/30 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-orange-400/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-400/30 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-yellow-400/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-18 h-18 bg-pink-400/30 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className={`inline-flex items-center bg-white/40 backdrop-blur-lg text-cyan-800 rounded-full px-6 py-3 mb-8 shadow-2xl border border-white/60 relative overflow-hidden transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-white/10 rounded-full"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <div className="relative z-10 flex items-center">
                <FaLeaf className="w-5 h-5 mr-3 text-emerald-600 animate-pulse" />
                <FaTree className="w-4 h-4 mr-2 text-emerald-500" />
                <span className="text-sm font-black text-blue-800">About Sunshine Sober Living</span>
              </div>
            </div>
            
            {/* Main Heading */}
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight text-white transition-all duration-1000 delay-300 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`} style={{
              textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)',
              fontFamily: 'Playfair Display, serif',
              fontWeight: '900'
            }}>
              We don't just recover—
              <span className="block" style={{
                color: '#EAB308',
                textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)',
                fontWeight: '900'
              }}>
                we shine brighter every day
              </span>
            </h1>
            
            {/* Subheading */}
            <p className={`text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 font-bold transition-all duration-1000 delay-500 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`} style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.95)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '700',
              letterSpacing: '0.025em'
            }}>
              Grounded in our S.U.N.S.H.I.N.E. values: Stability, Unity, Nurture, Self-Accountability, Hope, Integrity, New Beginnings, and Empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 lg:py-32 relative bg-cover bg-center bg-no-repeat bg-fixed" style={{
        backgroundImage: `url('/assets/palm3.gif')`
      }}>
        {/* Hope and Healing overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/25 via-blue-500/20 to-green-400/15"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-8 relative overflow-hidden mb-8">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-balance text-gray-900">
                  Our Mission & Vision
                </h2>
                <p className="text-lg text-blue-800 max-w-3xl mx-auto font-semibold">
                  Creating a bright, stable space where individuals healing from addiction can rediscover themselves and rebuild their future.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-8 relative overflow-hidden">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-balance text-gray-900">
                  Our Mission
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-blue-800">
                  Creating a Bright,<br />
                  Stable Space
                </h3>
                
                <p className="text-lg text-black mb-8 leading-relaxed font-semibold">
                  To create a bright, stable space where individuals healing from addiction can rediscover themselves, rebuild their future, and rise together—guided by structure, self-respect, and the shared belief that everyone deserves a fresh start in the sun.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-100/90 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm shadow-lg">
                      <FaUsers className="w-6 h-6 text-cyan-700" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-blue-900 mb-2 flex items-center">
                        <FaTree className="w-4 h-4 mr-2 text-green-600" />
                        Community Support
                      </h4>
                      <p className="text-black font-semibold">
                        Building strong connections and mutual support among residents and staff.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100/90 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm shadow-lg">
                      <FaShieldAlt className="w-6 h-6 text-emerald-700" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-green-900 mb-2 flex items-center">
                        <FaLeaf className="w-4 h-4 mr-2 text-green-600" />
                        Structured Environment
                      </h4>
                      <p className="text-black font-semibold">
                        Safe, drug-free living spaces with clear rules and guidelines to support recovery.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100/90 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm shadow-lg">
                      <FaHeart className="w-6 h-6 text-orange-700" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-yellow-900 mb-2 flex items-center">
                        <FaSeedling className="w-4 h-4 mr-2 text-green-600" />
                        Personal Growth
                      </h4>
                      <p className="text-black font-semibold">
                        Opportunities to develop life skills, build healthy habits, and create lasting change.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-8 relative overflow-hidden">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-balance text-gray-900">
                  Our Vision
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-green-800">
                  A Thriving Recovery<br />
                  Community
                </h3>
                
                <p className="text-lg text-black mb-8 leading-relaxed font-semibold">
                  We envision a thriving recovery community across Florida where sober living isn't just about staying clean, it's about living fully, freely, and with purpose. Sunshine Sober Living will be known as a safe haven of hope, heart, and healing where transformation happens through consistency, connection, and courage.
                </p>

                <div className="bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-3xl p-8 text-white text-center shadow-2xl relative overflow-hidden">
                  {/* Glass window reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 rounded-3xl"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
                      <FaStar className="w-6 h-6 mr-2" />
                      Our Promise
                    </h3>
                    <p className="text-emerald-100 mb-6 font-medium">
                      A safe haven of hope, heart, and healing where transformation happens through consistency, connection, and courage.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold flex items-center justify-center">
                          <FaTree className="w-5 h-5 mr-2" />
                          Florida
                        </div>
                        <div className="text-sm text-emerald-100">Recovery Community</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold flex items-center justify-center">
                          <FaSun className="w-5 h-5 mr-2" />
                          Purpose
                        </div>
                        <div className="text-sm text-emerald-100">Living Fully</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S.U.N.S.H.I.N.E. Values Section */}
      <section className="py-24 lg:py-32 relative bg-cover bg-center bg-no-repeat bg-fixed" style={{
        backgroundImage: `url('/assets/palm3.gif')`
      }}>
        {/* Hope and Healing overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/25 via-blue-500/20 to-green-400/15"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-8 relative overflow-hidden mb-8">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-balance text-gray-900">
                  S.U.N.S.H.I.N.E. Core Values
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-blue-800">
                  "We don't just recover—<br />
                  we shine brighter every day."
                </h3>
                <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-black font-semibold">
                  These core values guide everything we do and shape the supportive environment we create for our residents.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* S - Stability */}
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/70 text-center relative overflow-hidden group hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-4xl font-black text-cyan-700 mb-4 flex items-center justify-center">
                  <FaTree className="w-8 h-8 mr-2" />
                  S
                </div>
                <h3 className="text-xl font-black text-cyan-800 mb-3">Stability</h3>
                <p className="text-black text-sm font-semibold">
                  We provide a safe, dependable environment where structure supports progress. Stability is the foundation of lasting change.
                </p>
              </div>
            </div>

            {/* U - Unity */}
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/70 text-center relative overflow-hidden group hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-4xl font-black text-emerald-700 mb-4 flex items-center justify-center">
                  <FaUsers className="w-8 h-8 mr-2" />
                  U
                </div>
                <h3 className="text-xl font-black text-emerald-800 mb-3">Unity</h3>
                <p className="text-black text-sm font-semibold">
                  We grow stronger together. Our community thrives on teamwork, shared goals, and mutual support—no one gets left behind.
                </p>
              </div>
            </div>

            {/* N - Nurture */}
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/70 text-center relative overflow-hidden group hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-4xl font-black text-rose-700 mb-4 flex items-center justify-center">
                  <FaHeart className="w-8 h-8 mr-2" />
                  N
                </div>
                <h3 className="text-xl font-black text-rose-800 mb-3">Nurture</h3>
                <p className="text-black text-sm font-semibold">
                  We create a home filled with compassion and encouragement. Healing happens in spaces where people feel valued, seen, and cared for.
                </p>
              </div>
            </div>

            {/* S - Self-Accountability */}
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/70 text-center relative overflow-hidden group hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-4xl font-black text-purple-700 mb-4 flex items-center justify-center">
                  <FaShieldAlt className="w-8 h-8 mr-2" />
                  S
                </div>
                <h3 className="text-xl font-black text-purple-800 mb-3">Self-Accountability</h3>
                <p className="text-black text-sm font-semibold">
                  We own our actions and choices. Personal responsibility empowers us to grow with integrity and self-respect.
                </p>
              </div>
            </div>

            {/* H - Hope */}
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/70 text-center relative overflow-hidden group hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-4xl font-black text-yellow-700 mb-4 flex items-center justify-center">
                  <FaSun className="w-8 h-8 mr-2" />
                  H
                </div>
                <h3 className="text-xl font-black text-yellow-800 mb-3">Hope</h3>
                <p className="text-black text-sm font-semibold">
                  We believe that no past defines the future. Hope fuels our journey and reminds us that brighter days are always within reach.
                </p>
              </div>
            </div>

            {/* I - Integrity */}
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/70 text-center relative overflow-hidden group hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-4xl font-black text-indigo-700 mb-4 flex items-center justify-center">
                  <FaAward className="w-8 h-8 mr-2" />
                  I
                </div>
                <h3 className="text-xl font-black text-indigo-800 mb-3">Integrity</h3>
                <p className="text-black text-sm font-semibold">
                  We live with honesty and treat others with fairness and respect. Trust is earned and kept through consistent, truthful action.
                </p>
              </div>
            </div>

            {/* N - New Beginnings */}
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/70 text-center relative overflow-hidden group hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-4xl font-black text-emerald-700 mb-4 flex items-center justify-center">
                  <FaSeedling className="w-8 h-8 mr-2" />
                  N
                </div>
                <h3 className="text-xl font-black text-emerald-800 mb-3">New Beginnings</h3>
                <p className="text-black text-sm font-semibold">
                  Every day is a chance to start again. We embrace fresh starts with open hearts and a willingness to change.
                </p>
              </div>
            </div>

            {/* E - Empowerment */}
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/70 text-center relative overflow-hidden group hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-4xl font-black text-orange-700 mb-4 flex items-center justify-center">
                  <FaStar className="w-8 h-8 mr-2" />
                  E
                </div>
                <h3 className="text-xl font-black text-orange-800 mb-3">Empowerment</h3>
                <p className="text-black text-sm font-semibold">
                  We equip every resident with the tools, confidence, and support to build a life they're proud of—one sober step at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-white relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #22c55e 0%, #3b82f6 50%, #16a34a 100%)'
      }}>
        {/* Floating elements */}
        <div className="absolute top-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Ready to Start Your Recovery Journey?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto font-semibold">
            Whether you're transitioning from treatment or starting over with a clear mind and a hopeful heart, Sunshine is here to walk with you…. one step, one choice, and one day at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="flex items-center justify-center">
                <FaHome className="w-5 h-5 mr-2" />
                <FaTree className="w-4 h-4 mr-1" />
                Apply Now
              </span>
            </Link>
            <Link 
              to="/how-it-works" 
              className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center">
                <FaLeaf className="w-5 h-5 mr-2" />
                <FaSeedling className="w-4 h-4 mr-1" />
                Learn More
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About; 