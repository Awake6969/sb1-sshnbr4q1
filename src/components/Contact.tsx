import React, { useState } from 'react';
import { Phone, Mail, Globe, MapPin, Clock, HelpCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Kontakt</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wir sind für Sie da! Kontaktieren Sie uns für Ihre Montage- und Reparaturanfragen in Innsbruck und Umgebung.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Jetzt anfragen!</h2>
            <div className="flex items-center space-x-2 text-gray-600 mb-6">
              <span className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-400">
                <HelpCircle className="w-4 h-4" />
              </span>
              <span>Sie haben Fragen?</span>
            </div>
            <p className="text-gray-600 mb-8">
              Hier können Sie mir eine Frage zusenden.<br />
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
                placeholder="Adresse:"
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

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Kontaktinformationen</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-[#92400e]" />
                  <div>
                    <p className="font-medium">Telefon</p>
                    <a href="tel:+436704076442" className="text-gray-600 hover:text-[#92400e]">
                      +43 670 407 6442
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-[#92400e]" />
                  <div>
                    <p className="font-medium">E-Mail</p>
                    <a href="mailto:info@tischlernick.com" className="text-gray-600 hover:text-[#92400e]">
                      info@tischlernick.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-[#92400e]" />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-gray-600">6020 Innsbruck, Austria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}