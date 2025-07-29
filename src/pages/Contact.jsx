import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaExclamationTriangle, FaClipboardCheck } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import GoogleMap from '../components/GoogleMap';
import { Link } from 'react-router';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('contact');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat text-white py-24 lg:py-32 overflow-hidden" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`
      }}>
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0,0,0,0.8))'
        }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <div className="inline-flex items-center bg-white text-gray-900 rounded-full px-6 py-3 mb-8 shadow-lg" style={{
              animation: 'fadeInUp 0.8s ease-out'
            }}>
              <FaEnvelope className="w-5 h-5 text-purple-600 mr-2" />
              <span className="font-semibold">Contact Sunshine Sober Living</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight" style={{
              animation: 'fadeInUp 1s ease-out 0.2s both'
            }}>
              Ready to Start Your
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
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
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div style={{
              animation: 'fadeInUp 1s ease-out 0.6s both'
            }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
                We're here to answer your questions and help you begin your recovery journey.
              </p>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8" style={{
              animation: 'fadeInUp 1s ease-out 0.8s both'
            }}>
              <div className="bg-white text-gray-900 rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">
                        3475 18th Ave South<br />
                        St. Petersburg, FL
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaPhone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">Call us for immediate assistance</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">Send us a message anytime</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaClock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Response Time</h4>
                      <p className="text-gray-600">We typically respond within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl shadow-lg p-8" style={{
                animation: 'fadeInUp 1s ease-out 1s both'
              }}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaExclamationTriangle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Emergency Support</h3>
                    <p className="text-red-100 mb-4">
                      If you're in crisis or need immediate assistance, please contact emergency services or call the National Suicide Prevention Lifeline.
                    </p>
                    <div className="space-y-2 text-sm">
                      <p><strong>National Suicide Prevention Lifeline:</strong> 988</p>
                      <p><strong>Emergency Services:</strong> 911</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Located in beautiful St. Petersburg, Florida, our sober living homes provide a safe,
              supportive environment for your recovery journey.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <GoogleMap
              address="3475 18th Ave South, St. Petersburg, FL"
              title="Sunshine Sober Living Florida"
            />
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
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common questions about our sober living program and application process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I apply?</h3>
                <p className="text-gray-600">
                  Submit a short application and complete a quick interview. We welcome individuals who are committed to sober living and ready to grow in a supportive environment.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What's included in the program?</h3>
                <p className="text-gray-600">
                  Rent in a fully-furnished home, all utilities including cable, phone, internet services, house supplies, and basic necessities like coffee, cleaning supplies, and laundry soap.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How long can I stay?</h3>
                <p className="text-gray-600">
                  There's no fixed timeline—stay as long as you need while actively participating and staying clean. When you're ready, we'll support your transition to independent living.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What are the house rules?</h3>
                <p className="text-gray-600">
                  Clear house rules, curfews, and guidelines designed to support your recovery and personal growth. Residents participate in daily chores, house meetings, and maintain sobriety.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there support available?</h3>
                <p className="text-gray-600">
                  Yes! Residents support one another, attend house meetings, and you're encouraged to engage in work, recovery meetings, or personal development activities.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Where are you located?</h3>
                <p className="text-gray-600">
                  We're located at 3475 18th Ave South, St. Petersburg, FL. Our homes provide a clean, safe, and stable environment in a supportive community setting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions About Our Process?
            </h2>
            <p className="text-xl text-gray-600">
              We're here to help you understand how our program works and answer any questions you may have.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">Speak directly with our team</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">Send us your questions</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">3475 18th Ave South, St. Petersburg, FL</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              Contact Us Today
            </Link>
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

export default Contact; 