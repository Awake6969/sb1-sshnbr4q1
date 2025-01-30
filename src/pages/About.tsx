import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-12">Über mich</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/Bilder/Tischler_Nick_ueber_mich.jpg"
                alt="Nick bei der Arbeit"
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Seit 2009 stehe ich, Nick Neumann, für erstklassige Handwerkskunst und 
                  individuelle Lösungen im Bereich Möbelbau und Innenausbau.
                </p>
                <p>
                  Mit meiner langjährigen Erfahrung als Tischlergeselle verbinde ich 
                  traditionelles Handwerk mit modernen Fertigungstechniken.
                </p>
                <p>
                  Ich lege besonderen Wert auf:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Möbelmontage</li>
                  <li>Präzise Arbeit</li>
                  <li>Reparaturen</li>
                  <li>Persönliche Beratung</li>
                  <li>Qualität der Materialien</li>
                  <li>Kundenzufriedenheit</li>
                  <li>Nachhaltigkeit</li>
                  <li>Fachliche Weiterbildung</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}