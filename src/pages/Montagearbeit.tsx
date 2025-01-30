import React from 'react';
import { Star, CheckCircle, Sofa, Building2, ArrowUpDown, PackageOpen, Ruler, Users, Clock, HeartHandshake, Timer, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MontagearbeitPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Montageservice in{' '}
                <span className="text-[#92400e]">
                  Innsbruck und Umgebung
                </span>
              </h1>
              <p className="text-gray-600 mb-8">
                Möbelmontageservice in Innsbruck! Ich bin Ihr zuverlässiger Partner wenn es um den professionellen, hochwertigen und vor allem preiswerten Möbelmontageservice in Innsbruck und Umgebung gehen soll. Ich sorge für den Auf- oder Abbau Ihrer Einrichtung.
              </p>
              
              {/* Rating and Contact Section */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                {/* Rating Card */}
                <a
                  href="https://www.google.com/search?sca_esv=c2673aa4538d0342&tbm=lcl&sxsrf=ADLYWIL4wMWsnm864p74p8B61aKPK86VYw:1737409274505&q=Tischler+Nick+Rezensionen&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2tLQ0MjG1tDA0MjIyNDQ1MzIz3cDI-IpRMiSzODkjJ7VIwS8zOVshKLUqNa84Mz8vNW8RK245AGDDMahSAAAA&rldimm=1992459812221156265&hl=de-AT&sa=X&ved=2ahUKEwi5r4v1oYWLAxW_JxAIHYW5JykQ9fQKegQITRAF&biw=1920&bih=919&dpr=1#lkt=LocalPoiReviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-[#92400e]">4.9</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <img 
                      src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                      alt="Google" 
                      className="h-4 ml-2"
                    />
                  </div>
                </a>

                {/* Contact Button */}
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-white text-[#92400e] px-6 py-2 rounded-lg border-2 border-[#92400e] hover:bg-[#92400e] hover:text-white transition-colors"
                >
                  Kontaktiere mich
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/Bilder/Nick_Homepage.jpg"
                alt="Professioneller Montageservice"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with centered grid background */}
      <section className="relative py-32 overflow-hidden">
        {/* Sophisticated grid background with centered mask */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent)]" style={{ maskPosition: 'center center' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meine Montageleistungen</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Entdecken Sie ein umfangreiches Angebot an professionellen Montagedienstleistungen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Möbelmontage",
                description: "Fachgerechte Montage von Möbeln aller Art, vom Einzelstück bis zur kompletten Wohnungseinrichtung.",
                icon: <Sofa className="w-12 h-12 text-[#92400e]" />
              },
              {
                title: "Büromöbelmontage",
                description: "Montage von Büromöbeln und Einrichtungen für Ihr Büro oder Home Office.",
                icon: <Building2 className="w-12 h-12 text-[#92400e]" />
              },
              {
                title: "Möbelaufbau und Möbelabbau",
                description: "Professioneller Auf- und Abbau Ihrer Möbel bei Umzug oder Renovierung.",
                icon: <ArrowUpDown className="w-12 h-12 text-[#92400e]" />
              },
              {
                title: "IKEA Montage",
                description: "Spezialisiert auf die fachgerechte Montage von IKEA-Möbeln aller Art.",
                icon: <PackageOpen className="w-12 h-12 text-[#92400e]" />
              },
              {
                title: "Möbel nach Maß",
                description: "Professionelle Planung, Montage und individuelle Anpassung Ihrer Möbel – exakt nach Ihren Wünschen und den Gegebenheiten vor Ort",
                icon: <Ruler className="w-12 h-12 text-[#92400e]" />
              }
            ].map((service, index) => (
              <div key={index} className="group relative h-full">
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#92400e]/35 to-[#92400e]/35 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
                
                <div className="relative bg-white p-8 rounded-xl border border-gray-200 flex flex-col items-center justify-between h-full">
                  <div className="flex flex-col items-center">
                    {service.icon}
                    <h3 className="text-xl font-semibold mt-4 mb-4 text-center">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 text-center">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/Bilder/Nick_Homepage.jpg"
                alt="Möbelmontage Service"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">
                 Hochwertige Möbelmontage & mehr
                </h3>
                <p className="text-gray-600 mb-8">
                  Professioneller Ab- und Aufbau mit höchster Sorgfalt. Enorme Zeitersparnis und eine kosteneffiziente Lösung für Ihre Einrichtung. Das Leistungsspektrum umfasst Montagearbeiten jeder Art – ob für private oder geschäftliche Räumlichkeiten, bei einem Umzug oder einer Neugestaltung. Ihr zuverlässiger Partner für erstklassige Möbelmontage in Innsbruck.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4">Die Vorteile unseres Möbelmontage Innsbruck:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Users className="w-6 h-6 text-[#92400e]" />
                    </div>
                    <span>Professionelles Team</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <HeartHandshake className="w-6 h-6 text-[#92400e]" />
                    </div>
                    <span>Hervorragender Kundenservice</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#92400e]" />
                    </div>
                    <span>Packservice</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Timer className="w-6 h-6 text-[#92400e]" />
                    </div>
                    <span>Enorme Zeitersparnis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ihre Vorteile Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Ihre Vorteile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#92400e]/35 to-[#92400e]/35 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
              <div className="relative bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#92400e] mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Erfahrung & Expertise</h3>
                    <p className="text-gray-600">
                      15 Jahre Erfahrung in der Möbelmontage garantieren höchste Qualität und Präzision.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#92400e]/35 to-[#92400e]/35 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
              <div className="relative bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#92400e] mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Faire Preise</h3>
                    <p className="text-gray-600">
                      Transparente Kostenaufstellung und faire Preise für alle Montagearbeiten.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#92400e]/35 to-[#92400e]/35 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
              <div className="relative bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#92400e] mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Schneller Service</h3>
                    <p className="text-gray-600">
                      Kurze Wartezeiten und schnelle Bearbeitung Ihrer Montageanfragen.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#92400e]/35 to-[#92400e]/35 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
              <div className="relative bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#92400e] mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Garantie</h3>
                    <p className="text-gray-600">
                      2 Jahre Garantie auf alle Montagearbeiten für Ihre Sicherheit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
             Ich bin Ihr verlässlicher Partner für Möbelmontage
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Kontaktieren Sie mich noch heute, um Ihre Möbelmontage in Innsbruck zu planen und von meinem erstklassigen Montageservice zu profitieren.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {[
                { text: "Sicher" },
                { text: "Transparente Preise" },
                { text: "Schnell" },
                { text: "Montage & demontage" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full border-2 border-[#92400e] flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-[#92400e]" />
                  </div>
                  <span className="text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => navigate('/contact')}
              className="bg-[#92400e] text-white px-8 py-3 rounded-md hover:bg-[#92400e]/90 transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Kontaktiere mich
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}