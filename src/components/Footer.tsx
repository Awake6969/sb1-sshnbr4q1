import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, BadgeCheck, MapPin } from 'lucide-react';

export default function Footer() {
  const location = useLocation();
  
  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Contact */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/Bilder/Tischler-Nick_Logo.png"
                alt="TischlerNick Logo" 
                className="h-12 w-12 object-contain"
              />
              <h3 className="text-lg font-semibold">TischlerNick</h3>
            </div>
            <div className="space-y-4">
              <a href="mailto:info@tischlernick.com" className="flex items-center space-x-2 hover:text-[#92400e] transition-colors">
                <Mail className="h-5 w-5 text-[#92400e]" />
                <span>info@tischlernick.com</span>
              </a>
              <a href="tel:+436704076442" className="flex items-center space-x-2 hover:text-[#92400e] transition-colors">
                <Phone className="h-5 w-5 text-[#92400e]" />
                <span>+43 670 407 6442</span>
              </a>
              <div className="flex items-center space-x-2">
                <BadgeCheck className="h-5 w-5 text-[#92400e]" />
                <span>MyHammer geprüfter Handwerker</span>
              </div>
            </div>
          </div>

          {/* Column 2 - Information */}
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-semibold mb-6">Information</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/contact"
                  className="hover:text-[#92400e] transition-colors"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#92400e] transition-colors">
                  Über mich
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-semibold mb-6">Leistungen</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/montagearbeit" className="hover:text-[#92400e] transition-colors">
                  Montagearbeit
                </Link>
              </li>
              <li>
                <Link to="/reparaturen" className="hover:text-[#92400e] transition-colors">
                  Reparatur
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Location */}
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-semibold mb-6">Einsatzgebiet</h3>
            <div className="flex flex-col items-center">
              <a
                href="https://www.google.com/search?sca_esv=c2673aa4538d0342&tbm=lcl&sxsrf=ADLYWIL4wMWsnm864p74p8B61aKPK86VYw:1737409274505&q=Tischler+Nick+Rezensionen&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2tLQ0MjG1tDA0MjIyNDQ1MzIz3cDI-IpRMiSzODkjJ7VIwS8zOVshKLUqNa84Mz8vNW8RK245AGDDMahSAAAA&rldimm=1992459812221156265&hl=de-AT&sa=X&ved=2ahUKEwi5r4v1oYWLAxW_JxAIHYW5JykQ9fQKegQITRAF&biw=1920&bih=919&dpr=1#lkt=LocalPoiReviews"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block cursor-pointer group"
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-lg" />
                <img
                  src="/Bilder/TischlerNick - Österreichkarte.png"
                  alt="Österreich Karte"
                  className="w-full h-48 object-contain rounded-lg"
                />
                <div className="mt-4 flex items-center justify-center space-x-2">
                  <MapPin className="h-5 w-5 text-[#92400e]" />
                  <span>6020 Innsbruck, Austria</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-sm text-gray-400 flex flex-wrap justify-center gap-4">
            <span>&copy; 2025 TischlerNick</span>
            <Link to="/impressum" className="hover:text-[#92400e] transition-colors">Impressum & AGB</Link>
            <Link to="/datenschutz" className="hover:text-[#92400e] transition-colors">Datenschutz</Link>
            <Link to="/cookie-richtlinie" className="hover:text-[#92400e] transition-colors">Cookie-Richtlinie (EU)</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}