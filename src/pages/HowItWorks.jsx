import React from 'react';
import { Link } from 'react-router-dom';
import { FaClipboardCheck, FaHome, FaUsers, FaArrowRight, FaWifi, FaCoffee, FaBroom, FaPhone, FaEnvelope, FaMapMarkerAlt, FaExclamationTriangle, FaShieldAlt, FaClock, FaSmokingBan, FaBroom as FaClean, FaBed, FaUserShield, FaCog } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Apply & Get Accepted',
      description: 'Submit a short application and complete a quick interview. We welcome individuals who are committed to sober living and ready to grow in a supportive environment.',
      icon: FaClipboardCheck,
      color: 'blue'
    },
    {
      number: '2',
      title: 'Move In to a Structured Home',
      description: 'Once approved, you\'ll move into one of our fully furnished sober living homes in St. Petersburg, Florida. Each home provides a clean, safe, and stable environment with shared responsibilities and clearly outlined house rules.',
      icon: FaHome,
      color: 'green'
    },
    {
      number: '3',
      title: 'Live with Support & Purpose',
      description: 'Residents support one another, attend house meetings, maintain sobriety, and participate in daily responsibilities. You\'re encouraged to engage in work, recovery meetings, or personal development.',
      icon: FaUsers,
      color: 'purple'
    },
    {
      number: '4',
      title: 'Stay, Grow, Transition',
      description: 'There\'s no fixed timeline—stay as long as you need while actively participating and staying clean. When you\'re ready, we\'ll support your transition to independent living.',
      icon: FaArrowRight,
      color: 'orange'
    }
  ];

  const includedItems = [
    { name: 'Rent in a fully-furnished home', icon: FaHome },
    { name: 'All utilities including cable, phone, internet services', icon: FaWifi },
    { name: 'House supplies', icon: FaBroom },
    { name: 'Coffee, cleaning supplies, laundry soap, etc.', icon: FaCoffee }
  ];

  const houseRules = [
    {
      title: 'SAFETY',
      icon: FaShieldAlt,
      color: 'red',
      rules: [
        'No loitering or hanging out in the front yard for any reason. The back patio is used for this.',
        'Keep entry and exit doors closed and locked at all times',
        'No weapons, drugs, or paraphernalia of any kind',
        'Do not leave items on the floor that may cause a slipping or trip hazard',
        'If you spill anything on the floor immediately wipe it up and place a wet floor sign',
        'In case of an emergency, we need all residents to sign in and out of the home when leaving the property.'
      ]
    },
    {
      title: 'GENERAL',
      icon: FaHome,
      color: 'blue',
      rules: [
        'Do not steal or use another person\'s items without permission.',
        'Do not open or enter any cabinets or closets with locks',
        'Turn lights off when not in use',
        'You may NOT enter another resident\'s room at any time',
        'Keep room door closed at all times',
        'Clothes must be worn outside of your room.',
        'Never leave personal items unattended in common areas of the home',
        'Kitchen closes at 8pm',
        'Residents can enter the home during these hours ONLY: 6AM-11PM Sunday - Thursday, 12am TV off; 6AM - 12AM Friday and Saturday, 12am TV off; 24 hour prior written notice must be given for any & all exception',
        'If you are diabetic or need to give yourself shots using a syringe, you will need to have a medical grade bin to dispose of used needles properly.'
      ]
    },
    {
      title: 'SMOKING, ALCOHOL, AND DRUGS',
      icon: FaSmokingBan,
      color: 'orange',
      rules: [
        'Smoking on backyard patio ONLY',
        'No Alcohol consumption or storage of alcohol in or around premises',
        'Do not share medication',
        'No storage or use of illegal drugs or unprescribed medication allowed',
        'Everyone is subject to random UA'
      ]
    },
    {
      title: 'CLEANLINESS',
      icon: FaClean,
      color: 'green',
      rules: [
        'Put trash in the trash can, put dirty dishes in the sink, clean up after you use the bathroom',
        'Your room shall be kept in an orderly and sanitary condition at ALL times',
        'Food is only to be consumed in the kitchen.',
        'Food is NOT ALLOWED in bedrooms at any time.',
        'If you spill anything or make a mess anywhere in the house including your room you will be responsible for cleaning it up.'
      ]
    },
    {
      title: 'YOUR ROOM',
      icon: FaBed,
      color: 'purple',
      rules: [
        'You may NOT enter another resident\'s room at any time',
        'Mattress covers must NEVER be removed',
        'Keep room door closed at all times',
        'Keep personal items inside of your room (Valuable Items should be secured)',
        'All rooms are subject to search by Anchor House staff'
      ]
    },
    {
      title: 'PERSONAL HYGIENE',
      icon: FaUserShield,
      color: 'teal',
      rules: [
        'Diapers, bed pads, or any personal hygiene items must be disposed of properly.',
        'You shall keep up with your personal hygiene by bathing and brushing your teeth frequently.',
        'You shall have no complaints that you or your personal space has offensive odors.'
      ]
    },
    {
      title: 'BEHAVIOR',
      icon: FaExclamationTriangle,
      color: 'red',
      rules: [
        'No aggressive or violent behavior EVER!',
        'No profanity or offensive language directed at any residents, neighbors, or Anchor staff or helpers',
        'No lending or borrowing money, cars or other property from other residents or neighbor',
        'All residents must attend outpatient treatment',
        'No romantic advances on Anchor House staff'
      ]
    },
    {
      title: 'LAUNDRY',
      icon: FaCog,
      color: 'indigo',
      rules: [
        'Use of Laundry on scheduled day and time ONLY',
        'Laundry area must be clean',
        'You may not wash another person\'s clothes',
        'You may not put feces soiled items into any washer or dryer in the home'
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      red: 'bg-red-100 text-red-600',
      teal: 'bg-teal-100 text-teal-600',
      indigo: 'bg-indigo-100 text-indigo-600'
    };
    return colors[color] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat text-white py-24 lg:py-32 overflow-hidden" style={{
        backgroundImage: `url('https://www.verywellmind.com/thmb/WNq51DfMe3JcNcMHI8cDJmXcxKM=/2116x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1363234587-7ea62be7ed994c868757366bae9201f9.jpg')`
      }}>
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0,0,0,0.8))'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <div className="inline-flex items-center bg-white text-gray-900 rounded-full px-6 py-3 mb-8 shadow-lg" style={{
              animation: 'fadeInUp 0.8s ease-out'
            }}>
              <FaClipboardCheck className="w-5 h-5 text-green-600 mr-2" />
              <span className="font-semibold">How Sunshine Sober Living Works</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight" style={{
              animation: 'fadeInUp 1s ease-out 0.2s both'
            }}>
              Your Journey to
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Recovery Starts Here
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-green-100 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4" style={{
              animation: 'fadeInUp 1s ease-out 0.4s both'
            }}>
              A simple, supportive process designed to help you transition into a structured, 
              community-driven recovery environment where lasting change happens.
            </p>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Sunshine Sober Living Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four simple steps to begin your recovery journey in a supportive, structured environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div 
                  key={step.number}
                  className="text-center"
                  style={{
                    animation: `fadeInUp 1s ease-out ${0.6 + index * 0.1}s both`
                  }}
                >
                  <div className={`w-20 h-20 ${getColorClasses(step.color)} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className="w-10 h-10" />
                  </div>
                  <div className="text-4xl font-bold text-gray-300 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Included
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for comfortable, structured living is provided.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {includedItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={item.name}
                  className="bg-white rounded-2xl p-6 shadow-lg text-center"
                  style={{
                    animation: `fadeInUp 1s ease-out ${0.8 + index * 0.1}s both`
                  }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* House Rules Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-red-50 text-red-700 rounded-full px-6 py-3 mb-6">
              <FaExclamationTriangle className="w-5 h-5 mr-2" />
              <span className="font-semibold">Important</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              House Rules
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Break these rules and your stay will be terminated. You have 3 warnings ONLY.
              <span className="block text-red-600 font-semibold mt-2">
                (RED TYPE = IMMEDIATE REMOVAL FROM HOME)
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {houseRules.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={category.title}
                  className="bg-gray-50 rounded-2xl p-6 shadow-lg"
                  style={{
                    animation: `fadeInUp 1s ease-out ${1.2 + index * 0.1}s both`
                  }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 ${getColorClasses(category.color)} rounded-full flex items-center justify-center mr-4`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.rules.map((rule, ruleIndex) => (
                      <li key={ruleIndex} className="flex items-start">
                        <span className="text-red-500 font-bold mr-2 mt-1">•</span>
                        <span className="text-gray-700 text-sm leading-relaxed">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-red-700 mb-4">
                ⚠️ Zero Tolerance Policy
              </h3>
              <p className="text-red-600 mb-4">
                These rules are designed to create a safe, supportive environment for all residents. 
                Violations will result in immediate consequences as outlined above.
              </p>
              <p className="text-gray-700">
                By applying to Sunshine Sober Living, you acknowledge that you have read, 
                understood, and agree to follow all house rules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* House Structure & Expectations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                House Structure & Expectations
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaUsers className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Living</h3>
                    <p className="text-gray-600">Shared responsibilities, mutual support, and respect for all residents and staff.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaClock className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Structured Environment</h3>
                    <p className="text-gray-600">Clear house rules, curfews, and guidelines designed to support your recovery and personal growth.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaArrowRight className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Development</h3>
                    <p className="text-gray-600">Encouraged to engage in work, recovery meetings, or educational pursuits while maintaining sobriety.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-6">
                Join our supportive community and begin your journey to lasting recovery. 
                No fixed timeline—stay as long as you need while actively participating and staying clean.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-900 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Documents Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Important Documents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download or view our house rules and intake form to better understand our program requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* House Rules PDF */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaExclamationTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">House Rules</h3>
                <p className="text-gray-600 mb-6">
                  Complete detailed house rules and policies that all residents must follow.
                </p>
                <a 
                  href="/src/assets/HOH House Rules.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors duration-300"
                >
                  <FaExclamationTriangle className="w-4 h-4 mr-2" />
                  View House Rules
                </a>
              </div>
            </div>

            {/* Intake Form PDF */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaClipboardCheck className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Intake Form</h3>
                <p className="text-gray-600 mb-6">
                  Application form for new residents interested in joining our sober living program.
                </p>
                <a 
                  href="/src/assets/HOH Intake Form.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  <FaClipboardCheck className="w-4 h-4 mr-2" />
                  View Intake Form
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                📋 Document Information
              </h3>
              <p className="text-blue-600 mb-4">
                These documents will open in a new browser tab. You can view them online or download them for your records.
              </p>
              <p className="text-gray-700">
                Please review the house rules carefully before applying, and ensure you can commit to following all guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

     

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
    </div>
  );
};

export default HowItWorks; 