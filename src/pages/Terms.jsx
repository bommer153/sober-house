import { Link } from 'react-router-dom';

function Terms() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat text-white py-24 lg:py-32 overflow-hidden" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
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
              <span className="text-sm font-semibold">Terms & Conditions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight" style={{
              animation: 'fadeInUp 1s ease-out 0.2s both'
            }}>
              Terms of Service
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed" style={{
              animation: 'fadeInUp 1s ease-out 0.4s both'
            }}>
              Please read these terms carefully before using our services or applying to our sober living program.
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

      {/* Content Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-gray-600 mb-6">
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
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Questions About Our Terms of Service?
          </h2>
          <p className="text-gray-600 mb-8">
            We're here to help clarify any questions you may have about our terms and conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              onClick={scrollToTop}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Contact Us
            </Link>
            <Link 
              to="/" 
              onClick={scrollToTop}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Terms; 