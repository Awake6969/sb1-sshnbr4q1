import React from 'react';
import { Phone, Mail, Globe, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Jetzt anfragen!</h2>
            <div className="flex items-center space-x-2 text-gray-600 mb-6">
              <span className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-400">?</span>
              <span>Sie haben Fragen?</span>
            </div>
            <p className="text-gray-600 mb-8">
              Hier haben Sie die Möglichkeit mir eine Nachricht zukommen zu lassen.<br />
              Ihr Anliegen ist wichtig! Zögern Sie nicht, mich zu kontaktieren - ich freue mich auf Ihre Nachricht!
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Vorname: *"
                  className="w-full px-4 py-2 border border-gray-400 rounded-md focus:ring-1 focus:ring-[#92400e] focus:border-[#92400e]"
                  required
                />
                <input
                  type="text"
                  placeholder="Nachname: *"
                  className="w-full px-4 py-2 border border-gray-400 rounded-md focus:ring-1 focus:ring-[#92400e] focus:border-[#92400e]"
                  required
                />
              </div>
              
              <input
                type="text"
                placeholder="Firma (falls vorhanden)"
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:ring-1 focus:ring-[#92400e] focus:border-[#92400e]"
              />
              
              <input
                type="email"
                placeholder="E-Mail: *"
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:ring-1 focus:ring-[#92400e] focus:border-[#92400e]"
                required
              />
              
              <input
                type="tel"
                placeholder="Telefon: *"
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:ring-1 focus:ring-[#92400e] focus:border-[#92400e]"
                required
              />
              
              <input
                type="text"
                placeholder="Adresse"
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:ring-1 focus:ring-[#92400e] focus:border-[#92400e]"
              />
              
              <textarea
                placeholder="Kommentar oder Nachricht"
                rows={4}
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:ring-1 focus:ring-[#92400e] focus:border-[#92400e]"
              ></textarea>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 focus:ring-[#92400e] text-[#92400e] border-gray-300 rounded"
                  required
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  Ich bestätige hiermit die{' '}
                  <a href="/datenschutz" className="text-[#92400e] hover:underline">
                    Datenschutzerklärung
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-[#92400e] text-white rounded-md hover:bg-[#92400e]/90 transition-colors"
              >
                Absenden
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Kontakt</h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-[#92400e]" />
                <a href="tel:+436704076442" className="text-gray-600 hover:text-[#92400e]">
                  +43 670 407 6442
                </a>
              </div>
              
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-[#92400e]" />
                <a href="mailto:info@tischlernick.com" className="text-gray-600 hover:text-[#92400e]">
                  info@tischlernick.com
                </a>
              </div>
              
              <div className="flex items-center space-x-4">
                <Globe className="w-6 h-6 text-[#92400e]" />
                <a href="https://tischlernick.com" className="text-gray-600 hover:text-[#92400e]">
                  www.tischlernick.com
                </a>
              </div>

              <div className="space-y-2">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-[#92400e] flex-shrink-0" />
                  <span className="text-gray-600">
                    6020 Innsbruck, Austria
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}