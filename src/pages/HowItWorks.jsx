import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaWater, FaSun, FaHome, FaHeart, FaClock, FaMapPin, FaUsers, FaShieldAlt, FaStar, FaAward, FaClipboardCheck, FaArrowRight, FaWifi, FaCoffee, FaBroom, FaPhone, FaEnvelope, FaExclamationTriangle, FaSmokingBan, FaBed, FaUserShield, FaCog, FaTree, FaSeedling } from 'react-icons/fa';

const HowItWorks = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
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
      icon: FaBroom,
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
      blue: 'bg-cyan-100/90 text-cyan-700',
      green: 'bg-emerald-100/90 text-emerald-700',
      purple: 'bg-purple-100/90 text-purple-700',
      orange: 'bg-orange-100/90 text-orange-700',
      red: 'bg-red-100/90 text-red-700',
      teal: 'bg-teal-100/90 text-teal-700',
      indigo: 'bg-indigo-100/90 text-indigo-700'
    };
    return colors[color] || 'bg-gray-100/90 text-gray-700';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat text-white h-screen flex items-center justify-center overflow-hidden" style={{
        backgroundImage: `url('/assets/Gallery SSL 3.jpg')`
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
                <span className="text-sm font-black text-blue-800" style={{
                  textShadow: '0 1px 2px rgba(255, 255, 255, 0.9)',
                  fontFamily: 'Source Sans Pro, sans-serif',
                  fontWeight: '900',
                  letterSpacing: '0.05em'
                }}>Trusted by 500+ individuals in recovery</span>
              </div>
            </div>
            
            {/* Main Heading */}
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight text-white transition-all duration-1000 delay-300 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`} style={{
              textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)',
              fontFamily: 'Playfair Display, serif',
              fontWeight: '900'
            }}>
              Your Journey to
              <span className="block" style={{
                color: '#EAB308',
                textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)',
                fontWeight: '900'
              }}>
                Recovery Starts Here
              </span>
            </h1>
            
            {/* Subheading */}
            <p className={`text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 font-bold transition-all duration-1000 delay-500 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`} style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.95)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '700',
              letterSpacing: '0.025em'
            }}>
              A simple, supportive process designed to help you transition into a structured, 
              community-driven recovery environment where lasting change happens.
            </p>
          </div>
        </div>
      </section>

      {/* Application Process */}
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
                  How Sunshine Sober Living Works
                </h2>
                <p className="text-lg text-black max-w-3xl mx-auto font-semibold">
                  Four simple steps to begin your recovery journey in a supportive, structured environment.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div 
                  key={step.number}
                  className="text-center bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-6 relative overflow-hidden group hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Glass window reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-cyan-200/90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <IconComponent className="w-10 h-10 text-cyan-900" />
                    </div>
                    <div className="text-4xl font-black text-cyan-600 mb-4 flex items-center justify-center">
                      <FaTree className="w-6 h-6 mr-2 text-emerald-600" />
                      {step.number}
                    </div>
                    <h3 className="text-xl font-black text-cyan-900 mb-4">{step.title}</h3>
                    <p className="text-black leading-relaxed font-semibold">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included */}
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-balance text-gray-900" style={{
                  fontWeight: '900',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
                  fontFamily: 'Playfair Display, serif'
                }}>
                  What's Included
                </h2>
                <p className="text-lg text-black max-w-3xl mx-auto font-semibold">
                  Everything you need for comfortable, structured living is provided.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {includedItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={item.name}
                  className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/70 text-center group hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
                >
                  {/* Glass window reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-200/90 to-emerald-200/90 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-cyan-300/90 group-hover:to-emerald-300/90 transition-all duration-300 backdrop-blur-sm shadow-lg">
                      <IconComponent className="w-8 h-8 text-cyan-900" />
                    </div>
                    <h3 className="text-lg font-semibold text-black" style={{
                      fontFamily: 'Inter, sans-serif'
                    }}>{item.name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* House Rules Section */}
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
                <div className="inline-flex items-center bg-red-100/90 text-red-700 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
                  <FaExclamationTriangle className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Important</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-balance text-gray-900">
                  House Rules
                </h2>
                <p className="text-lg text-black max-w-3xl mx-auto font-semibold">
                  Break these rules and your stay will be terminated. You have 3 warnings ONLY.
                  <span className="block text-red-600 font-semibold mt-2">
                    (RED TYPE = IMMEDIATE REMOVAL FROM HOME)
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {houseRules.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={category.title}
                  className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/70 relative overflow-hidden group hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Glass window reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 ${getColorClasses(category.color)} rounded-full flex items-center justify-center mr-4 backdrop-blur-sm shadow-lg`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-black text-cyan-900">{category.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {category.rules.map((rule, ruleIndex) => (
                        <li key={ruleIndex} className="flex items-start">
                          <span className="text-red-500 font-bold mr-2 mt-1">•</span>
                          <span className="text-black text-sm leading-relaxed font-semibold">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-red-100/90 backdrop-blur-lg border border-red-300 rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-red-700 mb-4 flex items-center justify-center">
                  <FaExclamationTriangle className="w-6 h-6 mr-2" />
                  ⚠️ Zero Tolerance Policy
                </h3>
                <p className="text-red-600 mb-4 font-semibold">
                  These rules are designed to create a safe, supportive environment for all residents. 
                  Violations will result in immediate consequences as outlined above.
                </p>
                <p className="text-black font-semibold">
                  By applying to Sunshine Sober Living, you acknowledge that you have read, 
                  understood, and agree to follow all house rules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* House Structure & Expectations */}
      <section className="py-24 lg:py-32 relative bg-cover bg-center bg-no-repeat bg-fixed" style={{
        backgroundImage: `url('/assets/palm3.gif')`
      }}>
        {/* Hope and Healing overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/25 via-blue-500/20 to-green-400/15"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-8 relative overflow-hidden">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-balance text-gray-900">
                  House Structure & Expectations
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-cyan-100/90 rounded-full flex items-center justify-center flex-shrink-0 mt-1 backdrop-blur-sm shadow-lg">
                      <FaUsers className="w-4 h-4 text-cyan-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-cyan-900 mb-2 flex items-center">
                        <FaTree className="w-4 h-4 mr-2 text-emerald-600" />
                        Community Living
                      </h3>
                      <p className="text-black font-semibold">Shared responsibilities, mutual support, and respect for all residents and staff.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-emerald-100/90 rounded-full flex items-center justify-center flex-shrink-0 mt-1 backdrop-blur-sm shadow-lg">
                      <FaClock className="w-4 h-4 text-emerald-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-emerald-800 mb-2 flex items-center">
                        <FaLeaf className="w-4 h-4 mr-2 text-emerald-600" />
                        Structured Environment
                      </h3>
                      <p className="text-black font-semibold">Clear house rules, curfews, and guidelines designed to support your recovery and personal growth.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100/90 rounded-full flex items-center justify-center flex-shrink-0 mt-1 backdrop-blur-sm shadow-lg">
                      <FaArrowRight className="w-4 h-4 text-purple-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-purple-800 mb-2 flex items-center">
                        <FaSeedling className="w-4 h-4 mr-2 text-emerald-600" />
                        Personal Development
                      </h3>
                      <p className="text-black font-semibold">Encouraged to engage in work, recovery meetings, or educational pursuits while maintaining sobriety.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-500 to-emerald-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 rounded-3xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-6 flex items-center">
                  <FaStar className="w-6 h-6 mr-2" />
                  Ready to Get Started?
                </h3>
                <p className="text-white mb-6 font-semibold">
                  Join our supportive community and begin your journey to lasting recovery. 
                  No fixed timeline—stay as long as you need while actively participating and staying clean.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-cyan-900 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
                >
                  <FaHome className="w-5 h-5 mr-2" />
                  <FaTree className="w-4 h-4 mr-1" />
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Documents Section */}
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
                  Important Documents
                </h2>
                <p className="text-lg text-black max-w-3xl mx-auto font-semibold">
                  Download or view our house rules and intake form to better understand our program requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* House Rules PDF */}
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/70 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-red-100/90 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm shadow-lg">
                  <FaExclamationTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-black text-cyan-900 mb-4">House Rules</h3>
                <p className="text-black mb-6 font-semibold">
                  Complete detailed house rules and policies that all residents must follow.
                </p>
                <a 
                  href="/src/assets/HOH House Rules.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors duration-300"
                >
                  <FaExclamationTriangle className="w-4 h-4 mr-2" />
                  <FaTree className="w-4 h-4 mr-1" />
                  View House Rules
                </a>
              </div>
            </div>

            {/* Intake Form PDF */}
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/70 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-cyan-100/90 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm shadow-lg">
                  <FaClipboardCheck className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-black text-cyan-900 mb-4">Intake Form</h3>
                <p className="text-black mb-6 font-semibold">
                  Application form for new residents interested in joining our sober living program.
                </p>
                <a 
                  href="/src/assets/HOH Intake Form.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-cyan-600 text-white font-semibold rounded-full hover:bg-cyan-700 transition-colors duration-300"
                >
                  <FaClipboardCheck className="w-4 h-4 mr-2" />
                  <FaSeedling className="w-4 h-4 mr-1" />
                  View Intake Form
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-cyan-100/90 backdrop-blur-lg border border-cyan-300 rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
              {/* Glass window reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-cyan-900 mb-4 flex items-center justify-center">
                  <FaStar className="w-6 h-6 mr-2" />
                  📋 Document Information
                </h3>
                <p className="text-cyan-600 mb-4 font-semibold">
                  These documents will open in a new browser tab. You can view them online or download them for your records.
                </p>
                <p className="text-black font-semibold">
                  Please review the house rules carefully before applying, and ensure you can commit to following all guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks; 