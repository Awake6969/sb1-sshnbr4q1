import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Reviews from '../components/Reviews';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Reviews />
      <Contact />
      <Portfolio />
      <FAQ />
    </div>
  );
}