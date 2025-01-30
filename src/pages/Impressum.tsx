import React from 'react';

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Impressum & AGB</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Allgemeine Geschäftsbedingungen</h2>
          <div className="prose">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Allgemeine Geschäftsbedingungen (AGB)</h3>
                <p className="mb-2">
                  <strong>Tischler Nick – Montage- und Möbelreparaturservice</strong><br />
                  6020 Innsbruck, Österreich<br />
                  E-Mail: info@tischlernick.com<br />
                  Website: <a href="https://tischlernick.com" className="text-[#92400e] hover:underline">https://tischlernick.com</a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">1. Geltungsbereich</h3>
                <p>
                  Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, Lieferungen und sonstigen Leistungen zwischen Tischler Nick (nachfolgend „Auftragnehmer") und seinen Kunden (nachfolgend „Auftraggeber"). Abweichende oder ergänzende Bedingungen des Auftraggebers sind nur wirksam, wenn sie schriftlich bestätigt wurden.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">2. Leistungen</h3>
                <p>
                  Tischler Nick erbringt Montage-, Reparatur- und Tischlerarbeiten gemäß den individuellen Vereinbarungen mit dem Auftraggeber. Die Leistungen werden nach bestem Wissen und Gewissen sowie unter Beachtung der fachlichen Standards ausgeführt.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">3. Angebot und Vertragsabschluss</h3>
                <p>
                  3.1. Angebote von Tischler Nick sind freibleibend und unverbindlich.<br />
                  3.2. Ein Vertrag kommt erst durch schriftliche Bestätigung der Beauftragung oder durch tatsächliche Ausführung der Arbeiten durch Tischler Nick zustande.<br />
                  3.3. Der Auftraggeber ist verpflichtet, vollständige und richtige Informationen über die gewünschten Leistungen bereitzustellen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">4. Preise und Zahlungsbedingungen</h3>
                <p>
                  4.1. Alle angegebenen Preise verstehen sich in Euro (€) und enthalten die gesetzliche Mehrwertsteuer, sofern nicht anders ausgewiesen.<br />
                  4.2. Die Zahlung erfolgt per Überweisung oder in bar nach erbrachter Leistung.<br />
                  4.3. Rechnungen sind binnen 14 Tagen ab Rechnungsdatum ohne Abzug zu begleichen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">5. Stornierung und Rücktritt</h3>
                <p>
                  5.1. Der Auftraggeber kann bis 48 Stunden vor dem vereinbarten Termin kostenfrei stornieren.<br />
                  5.2. Bei Stornierungen innerhalb von 48 Stunden vor dem Termin kann eine Stornogebühr von bis zu 50 % des vereinbarten Preises anfallen.<br />
                  5.3. Der Auftragnehmer kann vom Vertrag zurücktreten, wenn unvorhersehbare Umstände die Durchführung der Arbeiten unmöglich machen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">6. Haftung und Gewährleistung</h3>
                <p>
                  6.1. Tischler Nick haftet für Schäden nur bei Vorsatz oder grober Fahrlässigkeit.<br />
                  6.2. Eine Haftung für Schäden, die durch unsachgemäße Nutzung oder Fremdeinwirkung entstehen, ist ausgeschlossen.<br />
                  6.3. Gewährleistungsansprüche sind innerhalb von sechs Monaten nach Leistungserbringung schriftlich geltend zu machen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">7. Datenschutz</h3>
                <p>
                  7.1. Tischler Nick verarbeitet personenbezogene Daten gemäß der Datenschutz-Grundverordnung (DSGVO).<br />
                  7.2. Kundendaten werden ausschließlich zur Abwicklung der beauftragten Leistungen verwendet und nicht an Dritte weitergegeben.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">8. Streitbeilegung und Gerichtsstand</h3>
                <p>
                  8.1. Für Streitigkeiten zwischen Auftragnehmer und Auftraggeber gilt österreichisches Recht.<br />
                  8.2. Gerichtsstand für alle Streitigkeiten ist das zuständige Gericht in Innsbruck.<br />
                  8.3. Die Plattform der EU-Kommission zur Online-Streitbeilegung (OS-Plattform) ist unter{' '}
                  <a href="https://ec.europa.eu/consumers/odr/" className="text-[#92400e] hover:underline">
                    https://ec.europa.eu/consumers/odr/
                  </a>{' '}
                  erreichbar.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">9. Schlussbestimmungen</h3>
                <p>
                  9.1. Änderungen oder Ergänzungen dieser AGB bedürfen der Schriftform.<br />
                  9.2. Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Impressum</h2>
          <div className="prose">
            <p className="mb-4">
              <strong>Firmenname:</strong><br />
              Tischler Nick<br />
              Nick Neumann<br />
              6020 Innsbruck<br />
              Österreich
            </p>
            
            <p className="mb-4">
              <strong>Kontakt:</strong><br />
              Telefon: +43 670 407 6442<br />
              E-Mail: info@tischlernick.com<br />
              Website: <a href="https://tischlernick.com" className="text-[#92400e] hover:underline">https://tischlernick.com</a>
            </p>
            
            <p className="mb-4">
              <strong>Unternehmensgegenstand:</strong><br />
              Tischlerarbeiten, insbesondere Montage- und Reparaturservices
            </p>
            
            <p className="mb-4">
              <strong>Mitgliedschaften:</strong><br />
              Mitglied der Wirtschaftskammer Tirol
            </p>
            
            <p className="mb-4">
              <strong>Berufsrechtliche Vorschriften:</strong><br />
              Gewerbeordnung: <a href="https://www.ris.bka.gv.at/" className="text-[#92400e] hover:underline">https://www.ris.bka.gv.at/</a>
            </p>
            
            <p className="mb-4">
              <strong>Aufsichtsbehörde/Gewerbebehörde:</strong><br />
              Bezirkshauptmannschaft Innsbruck
            </p>
            
            <p className="mb-4">
              <strong>Berufsbezeichnung:</strong><br />
              Tischler
            </p>
            
            <p className="mb-4">
              <strong>Verleihungsstaat:</strong><br />
              Österreich
            </p>
            
            <p className="mb-4">
              <strong>Online-Streitbeilegung:</strong><br />
              Plattform der EU-Kommission zur Online-Streitbeilegung (OS-Plattform):<br />
              <a href="https://ec.europa.eu/consumers/odr/" className="text-[#92400e] hover:underline">https://ec.europa.eu/consumers/odr/</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}