import ContactForm from '../components/ContactForm'
import GoogleMap from '../components/GoogleMap'
import SocialMedia from '../components/SocialMedia'
import Icon from '../components/Icon'
import { Link } from 'react-router-dom'

function Contact() {
  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-cover bg-center bg-no-repeat text-white py-24 lg:py-32 overflow-hidden" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`
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
              <svg className="w-5 h-5 mr-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold">Get In Touch</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight" style={{
              animation: 'fadeInUp 1s ease-out 0.2s both'
            }}>
              Ready to Start Your
              <span className="block bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Recovery Journey?
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-purple-100 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4" style={{
              animation: 'fadeInUp 1s ease-out 0.4s both'
            }}>
              Contact us today to learn more about our sober living program and take the first step 
              towards lasting recovery and personal growth.
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

      {/* Contact Form Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div style={{ animation: 'fadeInUp 1s ease-out 0.2s both' }}>
              <div className="inline-flex items-center px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium mb-6">
                <Icon name="mail" size="sm" className="mr-2" />
                Send Us a Message
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-balance">
                Get Started
                <span className="block text-purple-600">Today</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours. 
                Our team is here to answer your questions and help you begin your recovery journey.
              </p>

              <ContactForm onSubmit={handleFormSubmit} />
            </div>

            {/* Contact Information */}
            <div style={{ animation: 'fadeInUp 1s ease-out 0.4s both' }}>
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4" style={{ animation: 'fadeInUp 1s ease-out 0.6s both' }}>
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="phone" size="lg" color="white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Phone</h4>
                      <p className="text-purple-100">(555) 123-4567</p>
                      <p className="text-purple-100 text-sm">Available 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4" style={{ animation: 'fadeInUp 1s ease-out 0.7s both' }}>
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="mail" size="lg" color="white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Email</h4>
                      <p className="text-purple-100">info@soberhouse.com</p>
                      <p className="text-purple-100 text-sm">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4" style={{ animation: 'fadeInUp 1s ease-out 0.8s both' }}>
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="map-pin" size="lg" color="white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Address</h4>
                      <p className="text-purple-100">123 Recovery Street</p>
                      <p className="text-purple-100">City, State 12345</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4" style={{ animation: 'fadeInUp 1s ease-out 0.9s both' }}>
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="clock" size="lg" color="white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Office Hours</h4>
                      <p className="text-purple-100">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-purple-100">Saturday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="mt-8 p-6 bg-white text-gray-900 rounded-2xl shadow-lg" style={{ animation: 'fadeInUp 1s ease-out 1s both' }}>
                  <h4 className="font-semibold mb-3">Emergency Contact</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    If you're in crisis or need immediate assistance:
                  </p>
                  <p className="font-semibold text-gray-900">(555) 999-8888</p>
                  <p className="text-gray-600 text-sm">Available 24/7 for emergencies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Icon name="map-pin" size="sm" className="mr-2" />
              Our Location
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Find Us
              <span className="block text-blue-600">Here</span>
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-600">
              Visit our main office or any of our sober living houses. We're conveniently located 
              in quiet, residential neighborhoods with easy access to public transportation.
            </p>
          </div>

          <GoogleMap address="123 Recovery Street, City, State 12345" />
        </div>
      </section>

      {/* Social Media Section */}
      {/* <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-6">
              <Icon name="share-2" size="sm" className="mr-2" />
              Connect With Us
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Stay Connected
              <span className="block text-green-600">Online</span>
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-600">
              Follow us on social media for updates, recovery tips, community stories, and inspiration 
              on your journey to lasting sobriety.
            </p>
          </div>

          <SocialMedia variant="contact" />
        </div>
      </section> */}

      {/* FAQ Section */}
      {/* <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-sm font-medium mb-6">
              <Icon name="help-circle" size="sm" className="mr-2" />
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Common Questions
              <span className="block text-orange-600">Answered</span>
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-600">
              Find answers to the most frequently asked questions about our sober living program 
              and application process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How do I apply?</h3>
              <p className="text-gray-600 leading-relaxed">
                Contact us through phone, email, or the contact form above. We'll schedule an initial consultation 
                to discuss your needs and our program.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What are the costs?</h3>
              <p className="text-gray-600 leading-relaxed">
                Our rates vary based on room type and amenities. We offer flexible payment options and can work 
                with you to find a solution that fits your budget.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How long can I stay?</h3>
              <p className="text-gray-600 leading-relaxed">
                Most residents stay 3-12 months, depending on their recovery goals and progress. 
                We work with each individual to determine the optimal length of stay.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Do you accept insurance?</h3>
              <p className="text-gray-600 leading-relaxed">
                We don't directly accept insurance, but we can provide documentation for you to submit 
                to your insurance provider for potential reimbursement.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Don't wait to start your recovery journey. Contact us today and let us help you 
            build a foundation for lasting sobriety and personal growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+15551234567" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Call Now
            </a>
            <Link 
              to="/how-to-apply" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact; 