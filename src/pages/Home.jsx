import React from 'react';
import Hero from '../components/Hero';
import About from '../components/home/About';
import Features from '../components/home/Features';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';

function Home() {
  return (
    <div>
      <Hero />
      {/* <About /> */}
      <Features />
      <Stats />
      <Testimonials />
      {/* <CTA /> */}
    </div>
  );
}

export default Home; 