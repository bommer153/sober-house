# Sober House - Recovery Community Website

A modern, responsive website for a sober living community, built with React, Vite, and Tailwind CSS. This website provides a supportive online presence for individuals seeking recovery resources and community support.

## 🚀 Features

### Core Features
- **Mobile-First Responsive Design** - Optimized for all devices and screen sizes
- **Professional SEO Optimization** - Meta tags, structured data, and performance monitoring
- **Enhanced Contact Form** - Comprehensive form with validation and accessibility features
- **Google Maps Integration** - Interactive location mapping (requires API key)
- **Social Media Integration** - Connected social platforms with analytics tracking
- **Performance Monitoring** - Core Web Vitals tracking and optimization

### Technical Features
- **React 19** with modern hooks and functional components
- **Vite** for fast development and optimized builds
- **Tailwind CSS 4** for utility-first styling
- **React Router** for client-side navigation
- **Framer Motion** for smooth animations
- **Lucide React** for consistent iconography

### SEO & Performance
- **Structured Data** - Schema.org markup for better search visibility
- **Meta Tags** - Comprehensive Open Graph and Twitter Card support
- **Core Web Vitals** - LCP, FID, and CLS tracking
- **Lazy Loading** - Optimized image loading and component rendering
- **Accessibility** - WCAG compliant design and navigation

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/sober-house.git
   cd sober-house
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Configuration

### Google Maps API
To enable the interactive map functionality:

1. Get a Google Maps API key from the [Google Cloud Console](https://console.cloud.google.com/)
2. Update the API key in `src/components/GoogleMap.jsx`:
   ```javascript
   script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_ACTUAL_API_KEY&libraries=places`;
   ```

### Google Analytics (Optional)
To enable analytics tracking:

1. Add your Google Analytics tracking code to `index.html`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### Social Media Links
Update social media URLs in `src/components/SocialMedia.jsx`:
```javascript
const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://facebook.com/your-page',
    // ... other properties
  },
  // ... other social platforms
];
```

## 📱 Mobile Responsiveness

The website is built with a mobile-first approach and includes:

- **Responsive Navigation** - Collapsible mobile menu
- **Flexible Grid Layouts** - Adapts to different screen sizes
- **Touch-Friendly Interactions** - Optimized for mobile devices
- **Fast Loading** - Optimized images and lazy loading
- **Accessible Design** - Proper contrast ratios and touch targets

## 🎨 Customization

### Colors and Branding
Update the color scheme in `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
        // ... other custom colors
      }
    }
  }
}
```

### Content Updates
- **Hero Section**: Update in `src/components/home/Hero.jsx`
- **Contact Information**: Update in `src/components/ContactForm.jsx`
- **Footer**: Update in `src/components/Footer.jsx`
- **SEO Meta Tags**: Update in `index.html`

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with default settings

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### Other Platforms
The project builds to a standard `dist` folder that can be deployed to any static hosting service.

## 📊 Performance Optimization

### Built-in Optimizations
- **Code Splitting** - Automatic route-based code splitting
- **Tree Shaking** - Unused code elimination
- **Minification** - Compressed production builds
- **Image Optimization** - Lazy loading and responsive images
- **Font Loading** - Optimized web font loading

### Monitoring
The website includes performance monitoring that tracks:
- Core Web Vitals (LCP, FID, CLS)
- Page load times
- Resource loading performance
- User interaction delays

## 🔒 Security Features

- **Content Security Policy** - XSS protection
- **HTTPS Enforcement** - Secure connections
- **Form Validation** - Client and server-side validation
- **Input Sanitization** - Protection against malicious input

## 📈 SEO Features

### On-Page SEO
- **Meta Tags** - Title, description, keywords
- **Open Graph** - Social media sharing optimization
- **Twitter Cards** - Twitter-specific meta tags
- **Structured Data** - Schema.org markup
- **Canonical URLs** - Duplicate content prevention

### Technical SEO
- **Fast Loading** - Optimized for Core Web Vitals
- **Mobile-Friendly** - Responsive design
- **Accessible** - WCAG 2.1 compliance
- **Clean URLs** - SEO-friendly routing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Email: info@soberhouse.com
- Phone: (123) 456-7890
- Website: https://soberhouse.com

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide](https://lucide.dev/) - Icons
- [Framer Motion](https://www.framer.com/motion/) - Animations

---

**Made with ❤️ for the recovery community**
