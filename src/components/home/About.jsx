import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaUsers, FaHeart, FaShieldAlt, FaSun, FaHandshake, FaLeaf, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  const coreValues = [
    {
      letter: 'S',
      title: 'Stability',
      description: 'We provide a safe, dependable environment where structure supports progress. Stability is the foundation of lasting change.',
      icon: FaShieldAlt,
      color: 'blue'
    },
    {
      letter: 'U',
      title: 'Unity',
      description: 'We grow stronger together. Our community thrives on teamwork, shared goals, and mutual support—no one gets left behind.',
      icon: FaUsers,
      color: 'green'
    },
    {
      letter: 'N',
      title: 'Nurture',
      description: 'We create a home filled with compassion and encouragement. Healing happens in spaces where people feel valued, seen, and cared for.',
      icon: FaHeart,
      color: 'pink'
    },
    {
      letter: 'S',
      title: 'Self-Accountability',
      description: 'We own our actions and choices. Personal responsibility empowers us to grow with integrity and self-respect.',
      icon: FaHandshake,
      color: 'purple'
    },
    {
      letter: 'H',
      title: 'Hope',
      description: 'We believe that no past defines the future. Hope fuels our journey and reminds us that brighter days are always within reach.',
      icon: FaSun,
      color: 'yellow'
    },
    {
      letter: 'I',
      title: 'Integrity',
      description: 'We live with honesty and treat others with fairness and respect. Trust is earned and kept through consistent, truthful action.',
      icon: FaStar,
      color: 'indigo'
    },
    {
      letter: 'N',
      title: 'New Beginnings',
      description: 'Every day is a chance to start again. We embrace fresh starts with open hearts and a willingness to change.',
      icon: FaLeaf,
      color: 'emerald'
    },
    {
      letter: 'E',
      title: 'Empowerment',
      description: 'We equip every resident with the tools, confidence, and support to build a life they\'re proud of—one sober step at a time.',
      icon: FaGraduationCap,
      color: 'orange'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      pink: 'bg-pink-100 text-pink-600',
      purple: 'bg-purple-100 text-purple-600',
      yellow: 'bg-yellow-100 text-yellow-600',
      indigo: 'bg-indigo-100 text-indigo-600',
      emerald: 'bg-emerald-100 text-emerald-600',
      orange: 'bg-orange-100 text-orange-600'
    };
    return colors[color] || 'bg-gray-100 text-gray-600';
  };

  return (
    <section id="about" className="py-20 palm-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative text-white py-24 lg:py-32 rounded-3xl overflow-hidden mb-20" style={{
          backgroundImage: `url('/assets/beach.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-3xl"></div>
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0,0,0,0.8))'
          }}></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
            <div className="inline-flex items-center bg-white text-gray-900 rounded-full px-6 py-3 mb-8 shadow-lg" style={{
              animation: 'fadeInUp 0.8s ease-out'
            }}>
              <FaStar className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-semibold">About Sunshine Sober Living</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{
              animation: 'fadeInUp 1s ease-out 0.2s both'
            }}>
              We don't just recover—
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                we shine brighter every day
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 leading-relaxed" style={{
              animation: 'fadeInUp 1s ease-out 0.4s both'
            }}>
              Grounded in our S.U.N.S.H.I.N.E. values: Stability, Unity, Nurture, Self-Accountability, Hope, Integrity, New Beginnings, and Empowerment.
            </p>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8" style={{
            animation: 'fadeInUp 1s ease-out 0.6s both'
          }}>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <FaShieldAlt className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To create a bright, stable space where individuals healing from addiction can rediscover themselves, rebuild their future, and rise together—guided by structure, self-respect, and the shared belief that everyone deserves a fresh start in the sun.
              </p>
            </div>
          </div>
          
          <div className="space-y-8" style={{
            animation: 'fadeInUp 1s ease-out 0.8s both'
          }}>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <FaUsers className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We envision a thriving recovery community across Florida where sober living isn't just about staying clean, it's about living fully, freely, and with purpose. Sunshine Sober Living will be known as a safe haven of hope, heart, and healing where transformation happens through consistency, connection, and courage.
              </p>
            </div>
          </div>
        </div>

        {/* S.U.N.S.H.I.N.E. Values Section */}
        <div className="text-center mb-16" style={{
          animation: 'fadeInUp 1s ease-out 1s both'
        }}>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            S.U.N.S.H.I.N.E. Core Values
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            "We don't just recover—we shine brighter every day."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {coreValues.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div 
                key={value.letter} 
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{
                  animation: `fadeInUp 1s ease-out ${1.2 + index * 0.1}s both`
                }}
              >
                <div className={`w-16 h-16 ${getColorClasses(value.color)} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{value.letter}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white" style={{
          animation: 'fadeInUp 1s ease-out 2s both'
        }}>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Take the First Step
          </h3>
          <p className="text-xl mb-8 text-blue-100">
            Whether you're transitioning from treatment or starting over with a clear mind and a hopeful heart, Sunshine is here to walk with you…. one step, one choice, and one day at a time.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-blue-900 hover:bg-gray-100 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Apply Now
          </Link>
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
  );
};

export default About;
