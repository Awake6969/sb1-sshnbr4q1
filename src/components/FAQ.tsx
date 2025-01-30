import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Wie lange dauert eine Montage?",
    answer: "Die Dauer einer Montage wird individuell berechnet. Mithilfe eines speziellen Rechners können wir eine ungefähre Zeitangabe ermitteln, die als Richtwert dient. Die genaue Dauer kann jedoch je nach den spezifischen Gegebenheiten vor Ort variieren."
  },
  {
    question: "In welchem Umkreis von Innsbruck sind Sie tätig?",
    answer: "Ich bin hauptsächlich im Großraum Innsbruck tätig, aber auch Projekte im Umkreis von bis zu 80 km sind möglich. Bei größeren Projekten können wir auch weitere Entfernungen besprechen."
  },
  {
    question: "Bieten Sie auch Reparaturen von alten Möbeln an?",
    answer: "Ja, ich repariere Möbel mit großer Sorgfalt und handwerklichem Geschick. Um den Umfang der Arbeiten und die Machbarkeit bestmöglich einzuschätzen, ist es jedoch essenziell, das Möbelstück zuvor zu begutachten. Daher wäre es ideal, wenn Sie mir ein Foto des Objekts zusenden könnten."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      {/* Sophisticated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Häufig gestellte Fragen</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hier finden Sie Antworten auf die häufigsten Fragen zu meinen Dienstleistungen
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="group relative">
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#92400e]/35 to-[#92400e]/35 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
              
              {/* FAQ content */}
              <div className="relative bg-white border border-gray-200 rounded-xl">
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#92400e] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#92400e] flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}