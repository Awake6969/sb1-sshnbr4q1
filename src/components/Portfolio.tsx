import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'Heimfitnessgerät',
    description: 'Ein teilweise aufgebautes Heimfitnessgerät auf einer Holzterrasse mit Werkzeugen und Montagematerialien.',
    image: '/Bilder/Heimfitnessgeraet.jpg',
    alt: 'Heimfitnessgerät im Aufbau – stabiles Power Rack mit blauen und schwarzen Bauteilen auf einer Holzterrasse. Perfekt für Krafttraining zu Hause.'
  },
{
    title: 'Baumhaus',
    description: 'Ein teilweise aufgebautes Baumhaus aus Holz mit kleiner Veranda, Rutsche und Werkzeugen auf der Wiese.',
    image: '/Bilder/Baumhaus.jpg',
    alt: 'Baumhaus im Bau – stabiles Holzspielhaus mit Veranda und Rutsche im Garten, ideal für Kinder.'
  },
  {
    title: 'Lampenmontage',
    description: 'Professionelle Installation von Beleuchtungssystemen und Lampen an der Decke eines hellen Wohnzimmers mit Werkzeugkofern und Schutzmaske.',
    image: '/Bilder/Tischler_Nick_Lampenmontage.jpg',
    alt: 'Lampenmontage durch einen Handwerker – Installation einer Deckenlampe in einem Wohnzimmer mit Werkzeugkoffern.'
  },
  {
    title: 'Einbauschrank',
    description: 'Ein montierter Einbauschrank aus Holz Regalböden und Kleiderstange im Schlafzimmer.',
    image: '/Bilder/Einbauschrank.jpg',
    alt: 'Einbauschrank mit Schubladen und Kleiderstangen'
  },
  {
    title: 'Möbelmontage',
    description: 'Maßgeschneiderte Möbelmontage für perfekten Stauraum – professionell montierter Einbauschrank mit Kleiderstangen und Schubladen.',
    image: '/Bilder/moebelmontage.jpg',
    alt: 'Präzise und fachgerechte Montage eines weißen Einbauschranks mit Regalflächen und praktischen Schubladen für optimale Ordnung.'
  },
   {
    title: 'Bettgestell',
    description: 'Hochwertige Montage eines stabilen Massivholz-Bettgestells für maximalen Komfort und Langlebigkeit.',
    image: '/Bilder/Bettgestell.jpg',
    alt: 'Fachgerechter Aufbau eines stabilen Bettgestells aus Massivholz – präzise Verarbeitung für höchsten Schlafkomfort.'
  },
   {
    title: 'Einbaukasten',
    description: 'Professionelle Montage eines weißen Einbaukastens mit Kleiderstangen und Schubladen für optimalen Stauraum.',
    image: '/Bilder/Einbaukasten.jpg',
    alt: 'Maßgefertigter Einbaukasten mit Regalflächen und Schubladen – präzise montiert für maximale Ordnung und Funktionalität.'
  },
   {
    title: 'Zaunsystem',
    description: 'Hochwertiges Zaunsystem aus Holz in fachgerechter Montage – stabil, langlebig und optisch ansprechend.',
    image: '/Bilder/Zaunsystem.jpg',
    alt: 'Professionelle Montage eines robusten Holzzauns auf Betonfundament – ideale Lösung für Sichtschutz und Sicherheit.'
  },
   {
    title: 'Kleiderschrank',
    description: 'Maßgeschneiderter Kleiderschrank mit Holz- und Spiegelfront – professionell montiert für stilvolle und praktische Aufbewahrung.',
    image: '/Bilder/Kleiderschrank.jpg',
    alt: 'Hochwertiger Kleiderschrank mit Spiegel- und Holztüren – fachgerechte Montage für maximalen Stauraum und modernes Design.'
  },
    {
    title: 'Tischreparatur',
    description: 'Fachgerechte Tischreparatur – Restaurierung eines Holztisches mit Glasplatte für eine langlebige und stilvolle Nutzung.',
    image: '/Bilder/Tischreparatur.jpg',
    alt: 'Professionelle Reparatur eines Holztisches mit Glasflächen – präzise Restaurierung für mehr Stabilität und Ästhetik.'
  },
 {
    title: 'Kleiderschrank',
    description: 'Maßgefertigter Kleiderschrank mit schlichten, weißen Schiebetüren – professionell montiert für modernes Design und maximalen Stauraum.',
    image: '/Bilder/Kleiderschrank.jpg',
    alt: 'Hochwertiger weißer Kleiderschrank mit Schiebetüren – fachgerechte Montage für elegantes und funktionales Wohnen.'
  },
   {
    title: 'Desinfektionsanlage',
    description: 'Fachgerechte Montage einer Desinfektionsanlage – kontaktloser Spender für höchste Hygienestandards.',
    image: '/Bilder/Desinfektionsanlage.jpg',
    alt: 'Professionelle Installation eines berührungslosen Desinfektionsspenders an einer Wand für optimale Handhygiene.'
  },
   {
    title: 'Türgriff',
    description: 'Präzise Reparatur und Neujustierung eines Türgriffs für optimale Funktionalität und Sicherheit.',
    image: '/Bilder/Tuerschnalle.jpg',
    alt: 'Fachgerechte Installation eines Türgriffs an einer Holztür – präzise Justierung für langlebige Nutzung.'
  },
  {
    title: 'Höhenverstellbare Tische',
    description: 'Professionelle Montage von höhenverstellbaren Schreibtischen für ergonomisches und flexibles Arbeiten.',
    image: '/Bilder/Verstellbare_Tische.jpg',
    alt: 'Fachgerechte Installation von zwei höhenverstellbaren Tischen – ideal für eine gesunde und anpassbare Arbeitsumgebung.'
  }
];

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const maxIndex = projects.length - 1;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === maxIndex ? 0 : prevIndex + 1
        );
      }, 4000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [maxIndex, isPaused]);

  const nextProjects = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const prevProjects = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Referenzen</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Entdecken Sie eine Auswahl unserer realisierten Projekte
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex flex-nowrap transition-transform duration-500 ease-in-out w-full"
              style={{ transform: `translateX(-${currentIndex * (window.innerWidth < 768 ? 100 : 33.33)}%)` }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300 h-full flex flex-col border border-gray-200 mb-8"
                  >
                    <div className="h-[400px] md:h-[500px]">
                      <img
                        src={project.image}
                        alt={project.alt}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 bg-white">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 min-h-[80px]">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {window.innerWidth >= 768 ? (
            <>
              {currentIndex > 0 && (
                <button
                  className="absolute left-0 top-[40%] -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none z-10"
                  onClick={prevProjects}
                  aria-label="Vorherige Projekte"
                >
                  <ChevronLeft className="w-6 h-6 text-amber-800" />
                </button>
              )}
              {currentIndex < projects.length - 3 && (
                <button
                  className="absolute right-0 top-[40%] -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none z-10"
                  onClick={nextProjects}
                  aria-label="Nächste Projekte"
                >
                  <ChevronRight className="w-6 h-6 text-amber-800" />
                </button>
              )}
            </>
          ) : (
            <>
              {currentIndex > 0 && (
                <button
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none z-10"
                  onClick={prevProjects}
                  aria-label="Vorherige Projekte"
                >
                  <ChevronLeft className="w-6 h-6 text-amber-800" />
                </button>
              )}
              {currentIndex < projects.length - 1 && (
                <button
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none z-10"
                  onClick={nextProjects}
                  aria-label="Nächste Projekte"
                >
                  <ChevronRight className="w-6 h-6 text-amber-800" />
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}