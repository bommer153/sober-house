import { Link } from 'react-router-dom';
import { FaLeaf, FaTree, FaSeedling, FaSun } from 'react-icons/fa';

function Privacy() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat text-white h-screen flex items-center justify-center overflow-hidden" style={{
        backgroundImage: `url('/assets/beach house.webp')`
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
            <div className="inline-flex items-center bg-white/40 backdrop-blur-lg text-cyan-800 rounded-full px-6 py-3 mb-8 shadow-2xl border border-white/60 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-white/10 rounded-full"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <div className="relative z-10 flex items-center">
                <FaLeaf className="w-5 h-5 mr-3 text-emerald-600 animate-pulse" />
                <FaTree className="w-4 h-4 mr-2 text-emerald-500" />
                <span className="text-sm font-black text-blue-800">Trusted by 500+ individuals in recovery</span>
              </div>
            </div>
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight text-white" style={{
              textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)',
              fontFamily: 'EB Garamond, serif',
              fontWeight: '600',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}>
              Privacy Policy
            </h1>
            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 font-bold" style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.95)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '700',
              letterSpacing: '0.025em'
            }}>
              We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
            
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 lg:py-32 relative bg-cover bg-center bg-no-repeat bg-fixed" style={{
        backgroundImage: `url('/assets/palm3.gif')`
      }}>
        {/* Hope and Healing overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/25 via-blue-500/20 to-green-400/15"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
            <div className="relative z-10 prose prose-lg max-w-none">
              <div className="mb-8">
                <p className="text-black mb-6 font-semibold">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                </p>
              </div>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-black text-gray-900 mb-4">1. Information We Collect</h2>
                  <p className="text-gray-600 mb-4">
                    We collect information you provide directly to us, such as when you:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Fill out our contact forms</li>
                    <li>Apply for our sober living program</li>
                    <li>Contact us via phone or email</li>
                    <li>Sign up for our newsletter</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    This information may include your name, email address, phone number, address, and other personal details relevant to your recovery journey.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-black text-gray-900 mb-4">2. How We Use Your Information</h2>
                  <p className="text-gray-600 mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Process your application for our sober living program</li>
                    <li>Communicate with you about our services</li>
                    <li>Provide support and assistance during your recovery journey</li>
                    <li>Send you important updates and information</li>
                    <li>Improve our services and website</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-black text-gray-900 mb-4">3. Information Sharing</h2>
                  <p className="text-gray-600 mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>When required by law or to protect our rights</li>
                    <li>With your explicit consent</li>
                    <li>To trusted service providers who assist us in operating our website and services</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-black text-gray-900 mb-4">4. Data Security</h2>
                  <p className="text-gray-600 mb-4">
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Secure data transmission using SSL encryption</li>
                    <li>Regular security assessments and updates</li>
                    <li>Limited access to personal information on a need-to-know basis</li>
                    <li>Secure storage of sensitive information</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-black text-gray-900 mb-4">5. Your Rights</h2>
                  <p className="text-gray-600 mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Access and review your personal information</li>
                    <li>Request corrections to inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt out of marketing communications</li>
                    <li>File a complaint if you believe your privacy rights have been violated</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-black text-gray-900 mb-4">6. Cookies and Tracking</h2>
                  <p className="text-gray-600 mb-4">
                    Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-black text-gray-900 mb-4">7. Third-Party Links</h2>
                  <p className="text-gray-600 mb-4">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-black text-gray-900 mb-4">8. Children's Privacy</h2>
                  <p className="text-gray-600 mb-4">
                    Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-black text-gray-900 mb-4">9. Changes to This Policy</h2>
                  <p className="text-gray-600 mb-4">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-black text-gray-900 mb-4">10. Contact Us</h2>
                  <p className="text-gray-600 mb-4">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-600 mb-2">
                      <strong>Email:</strong> privacy@soberhouse.com
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Phone:</strong> (123) 456-7890
                    </p>
                    <p className="text-gray-600">
                      <strong>Address:</strong> 123 Recovery Street, Sober City, SC 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative bg-cover bg-center bg-no-repeat bg-fixed" style={{
        backgroundImage: `url('/assets/palm3.gif')`
      }}>
        {/* Hope and Healing overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/25 via-blue-500/20 to-green-400/15"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-black text-gray-900 mb-4">
                Questions About Our Privacy Policy?
              </h2>
              <p className="text-black mb-8 font-semibold">
                We're here to help. Contact us if you have any questions about how we protect your privacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  onClick={scrollToTop}
                  className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/" 
                  onClick={scrollToTop}
                  className="border-2 border-green-500 text-green-500 px-8 py-3 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-colors duration-300"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Privacy; 