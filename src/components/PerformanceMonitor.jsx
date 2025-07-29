import { useEffect } from 'react';

function PerformanceMonitor() {
  useEffect(() => {
    let reportCLS = null; // Declare at component scope

    // Track Core Web Vitals
    const trackWebVitals = () => {
      if ('PerformanceObserver' in window) {
        // Track Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          
          if (lastEntry) {
            const lcp = lastEntry.startTime;
            console.log('LCP:', lcp);
            
            // Send to analytics
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'LCP',
                value: Math.round(lcp),
                non_interaction: true
              });
            }
          }
        });
        
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Track First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const fid = entry.processingStart - entry.startTime;
            console.log('FID:', fid);
            
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'FID',
                value: Math.round(fid),
                non_interaction: true
              });
            }
          });
        });
        
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Track Cumulative Layout Shift (CLS)
        let clsValue = 0;
        let clsEntries = [];
        
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              clsEntries.push(entry);
            }
          });
        });
        
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Report CLS when page is hidden
        reportCLS = () => {
          if (clsValue > 0) {
            console.log('CLS:', clsValue);
            
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'CLS',
                value: Math.round(clsValue * 1000) / 1000,
                non_interaction: true
              });
            }
          }
        };

        // Report CLS when page is hidden or unloaded
        document.addEventListener('visibilitychange', reportCLS);
        window.addEventListener('beforeunload', reportCLS);
      }
    };

    // Track page load performance
    const trackPageLoad = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0];
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
          
          console.log('Page Load Time:', loadTime);
          console.log('DOM Content Loaded:', domContentLoaded);
          
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'timing_complete', {
              name: 'load',
              value: Math.round(loadTime),
              event_category: 'Performance'
            });
          }
        }
      }
    };

    // Track resource loading
    const trackResources = () => {
      if ('performance' in window) {
        const resources = performance.getEntriesByType('resource');
        const slowResources = resources.filter(resource => resource.duration > 1000);
        
        if (slowResources.length > 0) {
          console.log('Slow resources detected:', slowResources);
          
          slowResources.forEach(resource => {
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'slow_resource', {
                event_category: 'Performance',
                event_label: resource.name,
                value: Math.round(resource.duration)
              });
            }
          });
        }
      }
    };

    // Initialize tracking
    trackWebVitals();
    
    // Track page load after a short delay to ensure everything is loaded
    setTimeout(() => {
      trackPageLoad();
      trackResources();
    }, 1000);

    // Track user interactions for performance insights
    const trackInteraction = (event) => {
      const startTime = performance.now();
      
      const handleInteractionEnd = () => {
        const duration = performance.now() - startTime;
        
        if (duration > 100) { // Track slow interactions
          console.log('Slow interaction detected:', duration);
          
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'slow_interaction', {
              event_category: 'Performance',
              event_label: event.type,
              value: Math.round(duration)
            });
          }
        }
        
        document.removeEventListener('click', handleInteractionEnd, { once: true });
        document.removeEventListener('keydown', handleInteractionEnd, { once: true });
      };
      
      document.addEventListener('click', handleInteractionEnd, { once: true });
      document.addEventListener('keydown', handleInteractionEnd, { once: true });
    };

    document.addEventListener('click', trackInteraction);
    document.addEventListener('keydown', trackInteraction);

    // Cleanup
    return () => {
      if (reportCLS) {
        document.removeEventListener('visibilitychange', reportCLS);
        window.removeEventListener('beforeunload', reportCLS);
      }
      document.removeEventListener('click', trackInteraction);
      document.removeEventListener('keydown', trackInteraction);
    };
  }, []);

  // This component doesn't render anything
  return null;
}

export default PerformanceMonitor; 