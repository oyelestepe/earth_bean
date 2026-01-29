import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CoffeeScroll from './components/CoffeeScroll';
import TrustBar from './components/TrustBar';
import ProductShowcase from './components/ProductShowcase';
import WhyUs from './components/WhyUs';
import CoffeeJourney from './components/CoffeeJourney';
import BrewingGuide from './components/BrewingGuide';
import SocialProof from './components/SocialProof';
import BrandValues from './components/BrandValues';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

function Homepage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or wait for resources
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="font-body text-coffee-900 bg-cream-50 min-h-screen">
      <Navbar />
      <CoffeeScroll />
      <TrustBar />
      <ProductShowcase />
      <WhyUs />
      <CoffeeJourney />
      <BrewingGuide />
      <SocialProof />
      <BrandValues />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default Homepage;