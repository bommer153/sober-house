import { useState } from 'react';
import { Mail, Phone, User, MessageSquare, Shield } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { FORMSPREE_CONFIG } from '../config/formspree';
import Button from './Button';

function ContactForm({ onSubmit, className = '' }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredContact: 'email',
    urgency: 'standard',
    message: '',
    agreeToTerms: false,
    newsletter: false
  });

  const [errors, setErrors] = useState({});
  const [state, handleFormspreeSubmit] = useForm(FORMSPREE_CONFIG.FORM_ID);

  const validateForm = () => {
    const newErrors = {};

    // Required fields
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';

    // Phone validation (optional but if provided, must be valid)
    if (formData.phone.trim() && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Track form submission
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        event_category: 'contact',
        event_label: 'contact_form',
        value: 1
      });
    }

    // Call parent onSubmit if provided
    if (onSubmit) {
      onSubmit(formData);
    }

    // Use Formspree's handleSubmit
    return handleFormspreeSubmit(e);
  };

  const urgencyOptions = [
    { value: 'immediate', label: 'Immediate - Need help today', color: 'text-red-600' },
    { value: 'urgent', label: 'Urgent - Within this week', color: 'text-orange-600' },
    { value: 'standard', label: 'Standard - Planning ahead', color: 'text-blue-600' },
    { value: 'information', label: 'Information only', color: 'text-gray-600' }
  ];

  return (
    <div className={`bg-white rounded-2xl shadow-xl p-8 ${className}`}>
             {/* Success Message */}
       {state.succeeded && (
         <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center">
           <Shield className="w-5 h-5 text-green-600 mr-3" />
           <div>
             <h3 className="font-semibold text-green-800">Thank you for your message!</h3>
             <p className="text-sm text-green-700">We'll get back to you within 24 hours.</p>
           </div>
         </div>
       )}

       {/* Error Message */}
       {state.errors && state.errors.length > 0 && (
         <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center">
           <Shield className="w-5 h-5 text-red-600 mr-3" />
           <div>
             <h3 className="font-semibold text-red-800">Something went wrong</h3>
             <p className="text-sm text-red-700">Please try again or contact us directly.</p>
           </div>
         </div>
       )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
              First Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                  errors.firstName ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Your first name"
              />
            </div>
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
              Last Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                  errors.lastName ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Your last name"
              />
            </div>
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                  errors.email ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="your.email@example.com"
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                  errors.phone ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="(123) 456-7890"
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Contact Preferences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="preferredContact" className="block text-sm font-semibold text-gray-700 mb-2">
              Preferred Contact Method
            </label>
            <select
              id="preferredContact"
              name="preferredContact"
              value={formData.preferredContact}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="text">Text Message</option>
            </select>
          </div>

          <div>
            <label htmlFor="urgency" className="block text-sm font-semibold text-gray-700 mb-2">
              Urgency Level
            </label>
            <select
              id="urgency"
              name="urgency"
              value={formData.urgency}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              {urgencyOptions.map(option => (
                <option key={option.value} value={option.value} className={option.color}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Message *
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${
                errors.message ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="Tell us about your situation and how we can help..."
            />
          </div>
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        {/* Checkboxes */}
        <div className="space-y-4">
          <div className="flex items-start">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="agreeToTerms" className="ml-3 text-sm text-gray-700">
              I agree to the{' '}
              <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="/terms" className="text-blue-600 hover:text-blue-800 underline">
                Terms of Service
              </a>
              *
            </label>
          </div>
          {errors.agreeToTerms && (
            <p className="text-sm text-red-600">{errors.agreeToTerms}</p>
          )}

          <div className="flex items-start">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
              className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="newsletter" className="ml-3 text-sm text-gray-700">
              Subscribe to our newsletter for recovery tips and community updates
            </label>
          </div>
        </div>

                 {/* Submit Button */}
         <Button
           type="submit"
           variant="primary"
           size="lg"
           loading={state.submitting}
           className="w-full"
           disabled={state.submitting}
         >
           {state.submitting ? 'Sending Message...' : 'Send Message'}
         </Button>

                 {/* Hidden fields for Formspree */}
         <input type="hidden" name="name" value={`${formData.firstName} ${formData.lastName}`} />
         <input type="hidden" name="phone" value={formData.phone || 'Not provided'} />
         <input type="hidden" name="preferredContact" value={formData.preferredContact} />
         <input type="hidden" name="urgencyLevel" value={formData.urgency} />
         <input type="hidden" name="newsletterSubscription" value={formData.newsletter ? 'Yes' : 'No'} />
         <input type="hidden" name="_subject" value={`${FORMSPREE_CONFIG.SUBJECT_PREFIX} - ${formData.firstName} ${formData.lastName}`} />
         <input type="hidden" name="_replyto" value={formData.email} />
         <input type="hidden" name="_to" value={FORMSPREE_CONFIG.TO_EMAIL} />

         {/* Privacy Notice */}
         <p className="text-xs text-gray-500 text-center">
           Your information is secure and will only be used to contact you about our services.
           We never share your personal information with third parties.
         </p>
      </form>
    </div>
  );
}

export default ContactForm; 