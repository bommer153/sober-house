import { Link } from 'react-router-dom';
import SocialMedia from './SocialMedia';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-3 group mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold">Sober House</div>
                <div className="text-sm text-gray-400">Recovery Community</div>
              </div>
            </Link>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              A supportive, structured environment for those committed to
              recovery and building a brighter, healthier future together.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <SocialMedia variant="minimal" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: '/', name: 'Home' },
                { to: '/about', name: 'About Us' },
                { to: '/how-it-works', name: 'How It Works' },
                { to: '/how-to-apply', name: 'How to Apply' },
                { to: '/contact', name: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    onClick={scrollToTop}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <svg className="w-5 h-5 text-blue-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Address</div>
                  <div className="text-gray-400 text-sm leading-relaxed">
                    123 Recovery Street<br />
                    Sober City, SC 12345
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <svg className="w-5 h-5 text-blue-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Phone</div>
                  <a href="tel:123-456-7890" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">(123) 456-7890</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <svg className="w-5 h-5 text-blue-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Email</div>
                  <a href="mailto:info@soberhouse.com" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">info@soberhouse.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Jefferson Jalandoon
              {/* Sober House. All rights reserved. Made with care for recovery. */}
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" onClick={scrollToTop} className="text-gray-500 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" onClick={scrollToTop} className="text-gray-500 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 