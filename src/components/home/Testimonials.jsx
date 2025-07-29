import Icon from '../Icon'

function Testimonials() {
  const testimonials = [
    {
      name: 'Michael R.',
      role: 'Resident, 2 years sober',
      content: 'The community here saved my life. The support from other residents and the structured environment gave me the foundation I needed to rebuild my life.',
      avatar: 'michael',
      rating: 5
    },
    {
      name: 'Sarah L.',
      role: 'Alumni, 3 years sober',
      content: 'I came here after treatment and found a family. The peer support and accountability helped me stay on track during the most challenging times.',
      avatar: 'sarah',
      rating: 5
    },
    {
      name: 'David M.',
      role: 'Resident, 1 year sober',
      content: 'The house rules and structure were exactly what I needed. I\'ve learned so much about responsibility and building healthy relationships.',
      avatar: 'david',
      rating: 5
    }
  ];

  const getAvatarImage = (name) => {
    const avatars = {
      michael: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%234f46e5"/><circle cx="50" cy="35" r="15" fill="%23fbbf24"/><path d="M20 85 Q50 65 80 85" fill="%23fbbf24"/></svg>`,
      sarah: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%23ec4899"/><circle cx="50" cy="35" r="15" fill="%23fbbf24"/><path d="M20 85 Q50 65 80 85" fill="%23fbbf24"/></svg>`,
      david: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%2306b6d4"/><circle cx="50" cy="35" r="15" fill="%23fbbf24"/><path d="M20 85 Q50 65 80 85" fill="%23fbbf24"/></svg>`
    };
    return avatars[name] || avatars.michael;
  };

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-6">
            <Icon name="star" size="sm" className="mr-2" />
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Real Stories from
            <span className="block text-green-600">Our Community</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-600">
            Hear from residents and alumni about their recovery journey and how our community 
            has supported their path to lasting sobriety.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon key={i} name="star" size="sm" color="yellow" className="mr-1" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <img 
                  src={getAvatarImage(testimonial.avatar)}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Our Impact in Numbers
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-green-100 font-medium">Lives Changed</div>
            </div>
            
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                95%
              </div>
              <div className="text-green-100 font-medium">Success Rate</div>
            </div>
            
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-green-100 font-medium">Support Available</div>
            </div>
            
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                10+
              </div>
              <div className="text-green-100 font-medium">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Recovery Journey?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community and become part of a supportive network dedicated to lasting recovery and personal growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
            >
              Apply Now
            </a>
            <a 
              href="/about" 
              className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
