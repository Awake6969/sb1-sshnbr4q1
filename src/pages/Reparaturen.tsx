import React from 'react';
import { Star, CheckCircle, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ReparaturenPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Ihr Spezialist für{' '}
                <span className="text-[#92400e]">
                  Reparaturen
                </span>
              </h1>
              <div className="text-gray-600 mb-8">
                <p>Reparatur in Innsbruck gesucht?</p>
                <p className="mt-2">
                  Dann sind Sie bei mir genau richtig! Ich stehe für professionelle Reparaturen und fachgerechte Montagen in Innsbruck und Umgebung. Verlassen Sie sich auf erstklassigen Service und höchste Zuverlässigkeit.
                </p>
              </div>
              
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
                alt="Professionelle Reparaturen"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Repairs Section - Updated with reduced padding */}
      <section className="py-12 bg-[#92400e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Professionelle Reparaturen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-14 h-14 mx-auto mb-3 flex items-center justify-center">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Möbelreparaturen</h3>
              <p className="text-white/80 text-sm">
               Ich repariere Ihre Holzmöbel fachgerecht, sodass sie wieder wie neu aussehen.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-14 h-14 mx-auto mb-3 flex items-center justify-center">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Wände und Böden</h3>
              <p className="text-white/80 text-sm">
                Fachgerechte Reparatur von Wänden und Böden und schaffen für sie perfekte Oberfläche.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-14 h-14 mx-auto mb-3 flex items-center justify-center">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Elektroreparaturen</h3>
              <p className="text-white/80 text-sm">
                Kleine Elektroreparaturen wie Steckdosen oder Beleuchtungsreparaturen - schnell und sicher.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Repairs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80"
                alt="Reparaturwerkzeuge"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Was sind Reparaturen?</h2>
              <div className="space-y-4 text-gray-600">
                <p>Eine Reparatur, auch Instandsetzung genannt, ist der Vorgang, bei dem ein defektes oder nicht mehr funktionierendes Objekt wieder in einen voll funktionsfähigen Zustand versetzt wird.</p>
                
                <p>Dies kann durch den Austausch beschädigter Teile, deren fachgerechte Reparatur oder eine gezielte Neuzusammensetzung erfolgen. In vielen Fällen reicht es aus, einzelne Komponenten zu ersetzen, während in anderen Situationen eine umfassendere Instandsetzung notwendig ist.</p>
                
                <p>Reparaturen betreffen nicht nur technische Geräte, sondern auch Möbel, Türen, Fenster oder andere Elemente in Haus und Wohnung. Egal ob eine Schraube locker ist, ein Scharnier klemmt oder ein Bauteil ausgetauscht werden muss – eine fachgerechte Reparatur sorgt für Langlebigkeit und Funktionalität.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialist Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581683705068-ca8f49fc7f45?auto=format&fit=crop&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-lg font-medium mb-4">Reparaturen Spezialist</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tischler Nick - Spezialist<br />
            für Reparaturen
          </h2>
        </div>
      </section>

      {/* Let Us Handle Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Lassen Sie mich die Reparatur übernehmen
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600">
                Ich weiß, dass es schwerfallen kann, sich von einem geliebten Möbelstück zu trennen – selbst wenn es beschädigt ist. Deshalb biete ich eine fachgerechte Reparatur an, um Ihre Möbel und viele andere Elemente in Ihrer Wohnung wieder in einen funktionsfähigen Zustand zu versetzen. Dazu gehören unter anderem die Instandsetzung von Möbelstücken, Wänden, Böden und kleineren elektrischen Reparaturen.
              </p>
            </div>
            <div>
              <p className="text-gray-600">
                Mit jahrelanger Erfahrung im Bereich Reparaturen sind Sie bei mir in den besten Händen. Jede Arbeit wird mit höchster Sorgfalt und Präzision ausgeführt, sodass ein reibungsloser Ablauf von Beginn bis zur Fertigstellung gewährleistet ist. Kontaktieren Sie mich für Ihre Reparatur und profitieren Sie von meinem Fachwissen und handwerklichen Können.
              </p>
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
              Kontaktieren Sie mich noch heute, um Ihre Möbelmontage in Innsbruck zu planen und von dem erstklassigen Montageservice zu profitieren.
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