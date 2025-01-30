import React from 'react';
import { PenTool as Tool, Home, Settings, Hammer } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Tool className="h-12 w-12 text-[#92400e]" />,
      title: 'Montageservice',
      description: 'Fachgerechte Montage und Installation Ihrer Möbel und Einbauten.'
    },
    {
      icon: <Home className="h-12 w-12 text-[#92400e]" />,
      title: 'Reparaturen',
      description: 'Sachkundige Kleinreparatur von Möbeln aller Art.'
    },
    {
      icon: <Settings className="h-12 w-12 text-[#92400e]" />,
      title: 'Fachkundige Beratung',
      description: 'Fachkundige Beratung – Präzise Lösungen für Montagen & Reparaturen, individuell auf Ihre Bedürfnisse abgestimmt.'
    },
    {
      icon: <Hammer className="h-12 w-12 text-[#92400e]" />,
   title: 'Innendesign-Beratung',
      description: 'Innendesign-Beratung – Individuelle Gestaltungskonzepte für harmonische und funktionale Wohnräume.'
    }
  ];

  return (
    <section id="services" className="relative py-32 bg-gray-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Unsere Leistungen</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wir bieten Ihnen ein umfangreiches Portfolio an Tischlerarbeiten mit höchster Qualität und Präzision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#92400e]/35 to-[#92400e]/35 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
              
              {/* Card content with light gray border */}
              <div className="relative h-full bg-white p-8 rounded-xl border border-gray-200 flex flex-col items-center">
                <div className="flex justify-center transform group-hover:scale-110 transition-transform duration-300 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center flex-grow">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}