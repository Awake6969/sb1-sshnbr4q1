import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChevronUp } from "lucide-react";
import { PlasmicRootProvider, PlasmicComponent } from "@plasmicapp/react-web";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      setShowScrollTop(scrollPercentage > 15);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <PlasmicRootProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              {/* ALLE SEITEN WERDEN DIREKT AUS PLASMIC GELADEN */}
              <Route path="/" element={<PlasmicComponent component="Homepage" />} />
              <Route path="/about" element={<PlasmicComponent component="AboutPage" />} />
              <Route path="/contact" element={<PlasmicComponent component="ContactPage" />} />
              <Route path="/impressum" element={<PlasmicComponent component="ImpressumPage" />} />
              <Route path="/datenschutz" element={<PlasmicComponent component="DatenschutzPage" />} />
              <Route path="/cookie-richtlinie" element={<PlasmicComponent component="CookieRichtliniePage" />} />
              <Route path="/montagearbeit" element={<PlasmicComponent component="MontagearbeitPage" />} />
              <Route path="/reparaturen" element={<PlasmicComponent component="ReparaturenPage" />} />
              <Route path="/blog" element={<PlasmicComponent component="BlogPage" />} />
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
    </PlasmicRootProvider>
  );
}

export default App;
