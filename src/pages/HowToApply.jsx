import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import ContactForm from '../components/ContactForm';

function HowToApply() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: 1,
      title: 'Initial Contact',
      description: 'Reach out to us through phone, email, or our contact form. We\'ll discuss your situation and answer any questions.',
      icon: 'phone',
      details: [
        'Call our 24/7 hotline: (123) 456-7890',
        'Email us at: info@soberhouse.com',
        'Fill out our online contact form',
        'Schedule an initial consultation'
      ]
    },
    {
      number: 2,
      title: 'Application Process',
      description: 'Complete our application form and provide necessary documentation to begin the approval process.',
      icon: 'file-text',
      details: [
        'Complete application form',
        'Provide proof of sobriety',
        'Submit personal references',
        'Background check authorization',
        'Medical information (if applicable)'
      ]
    },
    {
      number: 3,
      title: 'House Interview',
      description: 'Meet with current residents and house manager to discuss house rules, expectations, and compatibility.',
      icon: 'users',
      details: [
        'Tour the house facilities',
        'Meet current residents',
        'Review house rules and guidelines',
        'Discuss financial arrangements',
        'Address any concerns or questions'
      ]
    },
    {
      number: 4,
      title: 'Approval & Move-in',
      description: 'Upon approval, coordinate move-in date and begin your recovery journey in our supportive community.',
      icon: 'check-circle',
      details: [
        'Receive approval notification',
        'Sign house agreement',
        'Pay security deposit and first month\'s rent',
        'Schedule move-in date',
        'Begin orientation process'
      ]
    }
  ];

  const requirements = [
    {
      title: 'Sobriety Requirements',
      items: [
        'Minimum 30 days of continuous sobriety',
        'Commitment to maintaining sobriety',
        'Willingness to participate in recovery activities',
        'No drug or alcohol use on premises'
      ]
    },
    {
      title: 'Financial Requirements',
      items: [
        'Monthly rent payment (varies by house)',
        'Security deposit (one month\'s rent)',
        'Shared utility and household expenses',
        'Personal expenses (food, transportation, etc.)'
      ]
    },
    {
      title: 'House Rules',
      items: [
        'Attend house meetings regularly',
        'Participate in household chores',
        'Respect quiet hours (10 PM - 6 AM)',
        'No overnight guests without approval',
        'Maintain clean and organized living space'
      ]
    }
  ];

  return (
          <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-cover bg-center bg-no-repeat text-white py-24 lg:py-32 overflow-hidden" style={{
          backgroundImage: `url('/assets/Gallery_SSL_4.jpg')`
        }}>
          {/* Adding overlay back as separate div for testing */}
          <div className="absolute inset-0" style={{
            background: 'rgba(0,0,0,0.5)'
          }}></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center bg-white text-gray-900 rounded-full px-6 py-3 mb-8 shadow-lg animate-fade-in-up" style={{
                animation: 'fadeInUp 0.8s ease-out'
              }}>
                <svg className="w-5 h-5 mr-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold">Trusted by 500+ individuals in recovery</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight animate-fade-in-up" style={{
                animation: 'fadeInUp 1s ease-out 0.2s both',
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 255, 255, 0.2)',
                fontFamily: 'EB Garamond, serif',
                fontWeight: '600',
                lineHeight: '1.1',
                letterSpacing: '-0.02em'
              }}>
                How to Apply for
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent" style={{
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 255, 255, 0.2)'
                }}>
                  Sober Living
                </span>
              </h1>
              
              {/* Subheading */}
              <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 animate-fade-in-up" style={{
                animation: 'fadeInUp 1s ease-out 0.4s both',
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 255, 255, 0.2)'
              }}>
                Our application process is designed to be straightforward and supportive. 
                We're here to help you take the next step in your recovery journey.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 sm:mb-20 px-4 animate-fade-in-up" style={{
                animation: 'fadeInUp 1s ease-out 0.6s both'
              }}>
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 w-full sm:w-auto min-w-48 bg-white text-blue-900 hover:bg-gray-100 border-0 shadow-lg"
                >
                  Apply Now
                </Link>
                <Link 
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 w-full sm:w-auto min-w-48 border-2 border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
                >
                  Learn More
                </Link>
              </div>
              
              {/* Key Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto px-4 animate-fade-in-up" style={{
                animation: 'fadeInUp 1s ease-out 0.8s both'
              }}>
                <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-lg group hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Community Support</h3>
                  <p className="text-gray-600">24/7 peer support network with shared experiences</p>
                </div>
                
                <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-lg group hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-200 transition-colors duration-300">
                    <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Professional Care</h3>
                  <p className="text-gray-600">Licensed counselors and trained staff available</p>
                </div>
                
                <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-lg group hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Safe Environment</h3>
                  <p className="text-gray-600">Structured and supportive living space</p>
                </div>
              </div>
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

      {/* Application Steps */}
      <section className="py-24 lg:py-32 palm-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Application Process
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-600">
              Follow these simple steps to join our recovery community and begin your journey to lasting sobriety.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step) => (
                <div 
                  key={step.number}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                    activeStep === step.number 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                  onClick={() => setActiveStep(step.number)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                      activeStep === step.number 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      <Icon name={step.icon} size="lg" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-sm font-medium text-blue-600 mr-2">Step {step.number}</span>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      
                      {activeStep === step.number && (
                        <ul className="space-y-2">
                          {step.details.map((detail, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-700">
                              <Icon name="check" size="sm" className="text-green-500 mr-2" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Requirements */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Requirements & Guidelines</h3>
              
              {requirements.map((requirement, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">{requirement.title}</h4>
                  <ul className="space-y-2">
                    {requirement.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <Icon name="check" size="sm" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Important Note */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <div className="flex items-start">
                  <Icon name="info" size="lg" color="blue" className="mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">Important Information</h4>
                    <p className="text-sm text-blue-800">
                      We require a minimum of 30 days of sobriety before moving into our sober living residences.
                      This ensures that all residents are committed to their recovery journey and ready to
                      participate in our supportive community environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 lg:py-32 palm-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Ready to Apply?
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-600">
              Start your application today. Our team will guide you through the process and answer any questions you may have.
            </p>
          </div>

          <ContactForm onSubmit={(data) => console.log('Application submitted:', data)} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 palm-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How long does the application process take?</h3>
              <p className="text-gray-600">
                The application process typically takes 1-2 weeks from initial contact to move-in. 
                We work quickly to get you into a supportive environment as soon as possible.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What if I don't have 30 days of sobriety?</h3>
              <p className="text-gray-600">
                We can help connect you with detox and treatment programs to help you achieve the required 
                30 days of sobriety before moving into our sober living residences.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I bring my own furniture?</h3>
              <p className="text-gray-600">
                Our sober living residences come fully furnished, but you're welcome to bring personal items and small furniture
                to make your space feel more like home. We provide all the essentials you need for comfortable living.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What happens if I relapse?</h3>
              <p className="text-gray-600">
                We have a zero-tolerance policy for drug and alcohol use. If relapse occurs, we'll work with 
                you to find appropriate treatment and support services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowToApply; 