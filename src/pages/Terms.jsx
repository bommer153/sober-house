import { Link } from 'react-router-dom';
import { FaLeaf, FaTree, FaSeedling, FaSun } from 'react-icons/fa';

function Terms() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat text-white h-screen flex items-center justify-center overflow-hidden" style={{
        backgroundImage: `url('/assets/bldgbeach.jpg')`
      }}>
        {/* Tropical overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/70 via-emerald-500/50 to-orange-400/60"></div>
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
                <span className="text-sm font-semibold text-cyan-800">Trusted by 500+ individuals in recovery</span>
              </div>
            </div>
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-white drop-shadow-2xl">
              Terms of Service
            </h1>
            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl text-cyan-50 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 drop-shadow-2xl font-medium">
              Please read these terms carefully before using our services or applying to our sober living program.
            </p>            
            
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 lg:py-32 relative bg-cover bg-center bg-no-repeat bg-fixed" style={{
        backgroundImage: `url('/assets/palm3.gif')`
      }}>
        {/* Tropical overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/40 via-cyan-500/35 to-orange-400/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
            <div className="relative z-10 prose prose-lg max-w-none">
              <div className="mb-8">
                <p className="text-cyan-700 mb-6 font-medium">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                </p>
              </div>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-600 mb-4">
                    By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                  <p className="text-gray-600 mb-4">
                    We provide sober living housing and recovery support services. Our services include:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Structured sober living housing</li>
                    <li>Peer support and community building</li>
                    <li>Recovery resources and referrals</li>
                    <li>24/7 support and accountability</li>
                    <li>Life skills development</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Eligibility Requirements</h2>
                  <p className="text-gray-600 mb-4">
                    To be eligible for our sober living program, you must:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Be at least 18 years of age</li>
                    <li>Have a commitment to sobriety and recovery</li>
                    <li>Be willing to follow house rules and guidelines</li>
                    <li>Complete our application process</li>
                    <li>Agree to random drug and alcohol testing</li>
                    <li>Participate in recovery activities and meetings</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. House Rules and Guidelines</h2>
                  <p className="text-gray-600 mb-4">
                    All residents must agree to and follow our house rules, which include:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Maintaining sobriety - no drugs or alcohol on premises</li>
                    <li>Attending required recovery meetings</li>
                    <li>Contributing to household responsibilities</li>
                    <li>Respecting curfew and quiet hours</li>
                    <li>No overnight guests without prior approval</li>
                    <li>Maintaining cleanliness and order</li>
                    <li>Participating in house meetings and activities</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment and Financial Terms</h2>
                  <p className="text-gray-600 mb-4">
                    Our services require payment of fees as follows:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Monthly rent and utilities must be paid on time</li>
                    <li>Security deposit is required upon move-in</li>
                    <li>Late payments may result in additional fees</li>
                    <li>Refunds are subject to our refund policy</li>
                    <li>We do not accept insurance directly but can provide documentation</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Termination and Discharge</h2>
                  <p className="text-gray-600 mb-4">
                    We reserve the right to terminate services for:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Violation of house rules or sobriety requirements</li>
                    <li>Non-payment of fees</li>
                    <li>Disruptive or dangerous behavior</li>
                    <li>Failure to participate in recovery activities</li>
                    <li>Any behavior that threatens the safety of other residents</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    Residents may also voluntarily terminate their stay with appropriate notice.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                  <p className="text-gray-600 mb-4">
                    We strive to provide a safe and supportive environment, but we cannot guarantee:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Successful recovery outcomes</li>
                    <li>Prevention of relapse</li>
                    <li>Protection from all risks or accidents</li>
                    <li>Availability of specific services or amenities</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    We are not liable for any damages, injuries, or losses that may occur during your stay.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Privacy and Confidentiality</h2>
                  <p className="text-gray-600 mb-4">
                    We are committed to protecting your privacy and maintaining confidentiality. However, we may disclose information when:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Required by law or court order</li>
                    <li>Necessary to protect the safety of others</li>
                    <li>You provide written consent</li>
                    <li>Sharing with other residents for community support purposes</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Intellectual Property</h2>
                  <p className="text-gray-600 mb-4">
                    All content on our website, including text, graphics, logos, and software, is our property and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without our permission.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Dispute Resolution</h2>
                  <p className="text-gray-600 mb-4">
                    Any disputes arising from these terms or our services will be resolved through:
                  </p>
                  <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                    <li>Direct communication and mediation</li>
                    <li>If unresolved, through appropriate legal channels</li>
                    <li>These terms are governed by the laws of our jurisdiction</li>
                  </ol>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
                  <p className="text-gray-600 mb-4">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of modified terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
                  <p className="text-gray-600 mb-4">
                    If you have questions about these terms, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-600 mb-2">
                      <strong>Email:</strong> legal@soberhouse.com
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
        {/* Tropical overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/40 via-cyan-500/35 to-orange-400/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/70 p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/15 rounded-2xl"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Questions About Our Terms of Service?
              </h2>
              <p className="text-cyan-700 mb-8 font-medium">
                We're here to help clarify any questions you may have about our terms and conditions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  onClick={scrollToTop}
                  className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/" 
                  onClick={scrollToTop}
                  className="border-2 border-cyan-600 text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 hover:text-white transition-colors duration-300"
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

export default Terms; 