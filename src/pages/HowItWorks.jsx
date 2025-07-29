import Icon from '../components/Icon'
import { Link } from 'react-router-dom'

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Initial Contact',
      description: 'Reach out to us through phone, email, or our contact form. We\'ll schedule an initial consultation to discuss your needs and our program.',
      icon: 'phone',
      color: 'blue'
    },
    {
      number: '02',
      title: 'Assessment & Interview',
      description: 'Complete a comprehensive assessment to determine if our program is the right fit for your recovery goals and current situation.',
      icon: 'clipboard',
      color: 'green'
    },
    {
      number: '03',
      title: 'House Assignment',
      description: 'Based on your needs and availability, we\'ll assign you to an appropriate house that matches your recovery stage and preferences.',
      icon: 'home',
      color: 'purple'
    },
    {
      number: '04',
      title: 'Move-In & Orientation',
      description: 'Complete the move-in process and participate in a comprehensive orientation to learn house rules, expectations, and community guidelines.',
      icon: 'users',
      color: 'orange'
    },
    {
      number: '05',
      title: 'Active Participation',
      description: 'Engage in daily routines, attend meetings, participate in peer support activities, and work on your recovery goals.',
      icon: 'target',
      color: 'red'
    },
    {
      number: '06',
      title: 'Ongoing Support',
      description: 'Receive continuous support from staff and peers, with regular check-ins and opportunities for personal growth and development.',
      icon: 'heart',
      color: 'pink'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat text-white py-24 lg:py-32 overflow-hidden" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
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
              <svg className="w-5 h-5 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold">How Our Program Works</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight" style={{
              animation: 'fadeInUp 1s ease-out 0.2s both'
            }}>
              How Our
              <span className="block bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                Program Works
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed" style={{
              animation: 'fadeInUp 1s ease-out 0.4s both'
            }}>
              Our structured approach combines peer support, accountability, and personal growth 
              to create a foundation for lasting recovery and independence.
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

      {/* Process Steps */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-6">
              <Icon name="list" size="sm" className="mr-2" />
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Six Steps to
              <span className="block text-green-600">Recovery Success</span>
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-600">
              Our proven process guides you through each stage of your recovery journey, 
              providing structure, support, and accountability every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-${step.color}-100 rounded-2xl flex items-center justify-center mr-4`}>
                    <Icon name={step.icon} size="xl" color={step.color} />
                  </div>
                  <div className="text-4xl font-bold text-gray-300">{step.number}</div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Life Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
                <Icon name="clock" size="sm" className="mr-2" />
                Daily Life
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-balance">
                A Day in the Life
                <span className="block text-blue-600">of Recovery</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our structured daily routine provides the stability and support you need to build healthy habits 
                and maintain your recovery. Each day is designed to promote personal growth and community connection.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="sun" size="lg" color="blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Morning Routine</h3>
                    <p className="text-gray-600">
                      Start your day with meditation, breakfast with housemates, and planning your daily goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="briefcase" size="lg" color="green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Work & Activities</h3>
                    <p className="text-gray-600">
                      Attend work, job training, or educational programs while maintaining sobriety.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="users" size="lg" color="purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Evening Support</h3>
                    <p className="text-gray-600">
                      Participate in group meetings, peer support sessions, and community activities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 text-white text-center shadow-2xl">
                <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="clock" size="2xl" color="white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Daily Schedule</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                    <span className="text-blue-100">7:00 AM - Morning meditation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                    <span className="text-blue-100">8:00 AM - Breakfast & planning</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                    <span className="text-blue-100">9:00 AM - Work/activities</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                    <span className="text-blue-100">6:00 PM - Group meetings</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                    <span className="text-blue-100">9:00 PM - Reflection & rest</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-green-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-200 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-medium mb-6">
              <Icon name="check-circle" size="sm" className="mr-2" />
              Requirements
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              What You Need to
              <span className="block text-red-600">Get Started</span>
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-600">
              To ensure the safety and success of our community, we have specific requirements for all residents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Sobriety Requirements</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Icon name="check" size="sm" color="green" className="mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Minimum 30 days of continuous sobriety</span>
                </li>
                <li className="flex items-start">
                  <Icon name="check" size="sm" color="green" className="mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Commitment to maintaining sobriety</span>
                </li>
                <li className="flex items-start">
                  <Icon name="check" size="sm" color="green" className="mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Willingness to participate in recovery activities</span>
                </li>
                <li className="flex items-start">
                  <Icon name="check" size="sm" color="green" className="mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">No active substance use or possession</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Financial Requirements</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Icon name="check" size="sm" color="green" className="mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Ability to pay monthly rent and utilities</span>
                </li>
                <li className="flex items-start">
                  <Icon name="check" size="sm" color="green" className="mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Security deposit (refundable)</span>
                </li>
                <li className="flex items-start">
                  <Icon name="check" size="sm" color="green" className="mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Proof of income or financial support</span>
                </li>
                <li className="flex items-start">
                  <Icon name="check" size="sm" color="green" className="mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Willingness to work or seek employment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 lg:py-32 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Take the first step towards lasting recovery. Contact us today to learn more about our program 
            and begin your application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Apply Now
            </Link>
            <Link 
              to="/how-to-apply" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowItWorks; 