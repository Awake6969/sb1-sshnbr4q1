import React from 'react';
import { ChevronDown, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div id="home" className="relative h-screen overflow-hidden">
      {/* Hero image */}
      <div className="absolute inset-0">
        <img
          src="/Bilder/Nick_Homepage.jpg"
          alt="TischlerNick bei der Arbeit"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/50 z-10"></div>
      
      {/* Content container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center z-20">
        {/* Text content */}
        <div className="w-full lg:w-1/2 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Montageservice in Innsbruck und Umgebung
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Ich bin Nick Neumann – Ihr Tischler mit 15 Jahren Erfahrung für passgenaue Montagen & zuverlässige Reparaturen – ich arbeite professionell, sauber und mit Liebe zum Detail!
          </p>
          
          {/* Rating Card and Button Container */}
          <div className="flex flex-col-reverse sm:flex-row items-center justify-center space-y-6 space-y-reverse sm:space-y-0 sm:space-x-8">
            {/* Rating Card */}
            <a
              href="https://www.google.com/search?sca_esv=c2673aa4538d0342&tbm=lcl&sxsrf=ADLYWIL4wMWsnm864p74p8B61aKPK86VYw:1737409274505&q=Tischler+Nick+Rezensionen&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2tLQ0MjG1tDA0MjIyNDQ1MzIz3cDI-IpRMiSzODkjJ7VIwS8zOVshKLUqNa84Mz8vNW8RK245AGDDMahSAAAA&rldimm=1992459812221156265&hl=de-AT&sa=X&ved=2ahUKEwi5r4v1oYWLAxW_JxAIHYW5JykQ9fQKegQITRAF&biw=1920&bih=919&dpr=1#lkt=LocalPoiReviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-white/20 transition-colors cursor-pointer w-fit"
            >
              <div className="flex flex-col items-center space-y-1">
                <span className="text-sm text-[#92400e] text-center">Top-rated</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-white">4.9</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <img 
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                    alt="Google" 
                    className="h-4"
                  />
                </div>
              </div>
            </a>

            {/* Call to Action Button */}
            <a
              onClick={() => navigate('/contact')}
              className="bg-[#92400e] text-white px-8 py-4 text-lg font-semibold rounded-md hover:bg-[#92400e]/90 transition-colors inline-block animate-breathe w-fit text-center"
              style={{ cursor: 'pointer' }}
            >
              Jetzt anfragen
            </a>
          </div>
        </div>
      </div>
      
      {/* Static scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <ChevronDown className="h-8 w-8 text-white opacity-75" />
      </div>
    </div>
  );
}