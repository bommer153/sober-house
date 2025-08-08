import Button from '../Button'

function Hero() {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat text-white py-24 lg:py-32 overflow-hidden" style={{
      backgroundImage: "url('/assets/Gallery_SSL_6.jpg')"
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
            Your Journey to
            <span className="block bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent" style={{
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 255, 255, 0.2)'
            }}>
              Recovery Starts Here
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 animate-fade-in-up" style={{
            animation: 'fadeInUp 1s ease-out 0.4s both',
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 255, 255, 0.2)'
          }}>
            A supportive, structured environment where recovery meets community. 
            Start your journey to lasting sobriety with professional guidance and peer support.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 sm:mb-20 px-4 animate-fade-in-up" style={{
            animation: 'fadeInUp 1s ease-out 0.6s both'
          }}>
            <Button 
              to="/contact"
              variant="white"
              size="xl"
              className="w-full sm:w-auto min-w-48 bg-white text-blue-900 hover:bg-gray-100 border-0 shadow-lg"
            >
              Apply Now
            </Button>
            <Button 
              to="/about"
              variant="secondary"
              size="xl"
              className="w-full sm:w-auto min-w-48 border-2 border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              Learn More
            </Button>
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
  )
}

export default Hero
