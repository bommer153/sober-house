import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import HouseListings from '../components/home/HouseListings'
import About from '../components/home/About'
import Stats from '../components/home/Stats'
import Testimonials from '../components/home/Testimonials'
import CTA from '../components/home/CTA'

function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <HouseListings />
      <About />
      <Stats />
      <Testimonials />
      <CTA />
    </div>
  );
}

export default Home; 