import { Facebook, Instagram, Twitter, Youtube, Linkedin, Mail, Phone } from 'lucide-react';

function SocialMedia({ variant = 'default', showLabels = false }) {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/soberhouse',
      icon: Facebook,
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-50'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/soberhouse',
      icon: Instagram,
      color: 'hover:text-pink-600',
      bgColor: 'hover:bg-pink-50'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/soberhouse',
      icon: Twitter,
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-50'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/soberhouse',
      icon: Youtube,
      color: 'hover:text-red-600',
      bgColor: 'hover:bg-red-50'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/soberhouse',
      icon: Linkedin,
      color: 'hover:text-blue-700',
      bgColor: 'hover:bg-blue-50'
    }
  ];

  const contactLinks = [
    {
      name: 'Email',
      url: 'mailto:info@soberhouse.com',
      icon: Mail,
      color: 'hover:text-green-600',
      bgColor: 'hover:bg-green-50'
    },
    {
      name: 'Phone',
      url: 'tel:+1-123-456-7890',
      icon: Phone,
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-50'
    }
  ];

  const handleClick = (url, name) => {
    // Track social media clicks for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'social_media',
        event_label: name,
        value: 1
      });
    }
    
    // Open in new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (variant === 'minimal') {
    return (
      <div className="flex items-center space-x-4">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            onClick={(e) => {
              e.preventDefault();
              handleClick(social.url, social.name);
            }}
            className={`p-2 rounded-lg transition-all duration-300 ${social.bgColor} ${social.color} group`}
            aria-label={`Follow us on ${social.name}`}
          >
            <social.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    );
  }

  if (variant === 'contact') {
    return (
      <div className="flex items-center space-x-4">
        {contactLinks.map((contact) => (
          <a
            key={contact.name}
            href={contact.url}
            onClick={(e) => {
              e.preventDefault();
              handleClick(contact.url, contact.name);
            }}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${contact.bgColor} ${contact.color} group`}
            aria-label={`Contact us via ${contact.name}`}
          >
            <contact.icon className="w-4 h-4" />
            {showLabels && <span className="text-sm font-medium">{contact.name}</span>}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Social Media Links */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Our Journey</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              onClick={(e) => {
                e.preventDefault();
                handleClick(social.url, social.name);
              }}
              className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 ${social.bgColor} ${social.color} group hover:shadow-lg hover:-translate-y-1`}
              aria-label={`Follow us on ${social.name}`}
            >
              <social.icon className="w-6 h-6 mb-2" />
              <span className="text-xs font-medium text-gray-600 group-hover:text-gray-900">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Contact Links */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Get in Touch</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactLinks.map((contact) => (
            <a
              key={contact.name}
              href={contact.url}
              onClick={(e) => {
                e.preventDefault();
                handleClick(contact.url, contact.name);
              }}
              className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 ${contact.bgColor} ${contact.color} group hover:shadow-lg hover:-translate-y-1`}
              aria-label={`Contact us via ${contact.name}`}
            >
              <contact.icon className="w-5 h-5" />
              <div>
                <span className="font-medium text-gray-900">{contact.name}</span>
                <p className="text-sm text-gray-600">
                  {contact.name === 'Email' ? 'info@soberhouse.com' : '(123) 456-7890'}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Stay Updated</h3>
        <p className="text-sm text-gray-600 mb-4">
          Get recovery tips, success stories, and community updates delivered to your inbox.
        </p>
        <div className="flex space-x-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia; 