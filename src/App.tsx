import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ImpressumPage from './pages/Impressum';
import DatenschutzPage from './pages/Datenschutz';
import CookieRichtliniePage from './pages/CookieRichtlinie';
import MontagearbeitPage from './pages/Montagearbeit';
import ReparaturenPage from './pages/Reparaturen';
import BlogPage from './pages/Blog';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setShowScrollTop(scrollPercentage > 15);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
            <Route path="/datenschutz" element={<DatenschutzPage />} />
            <Route path="/cookie-richtlinie" element={<CookieRichtliniePage />} />
            <Route path="/montagearbeit" element={<MontagearbeitPage />} />
            <Route path="/reparaturen" element={<ReparaturenPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>
        <Footer />
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 bg-transparent border-2 border-[#000000] hover:bg-[#000000]/10 p-3 rounded-full shadow-lg transition-all duration-300 z-50"
            aria-label="Zurück nach oben"
          >
            <ChevronUp className="w-6 h-6 text-[#000000]" />
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;