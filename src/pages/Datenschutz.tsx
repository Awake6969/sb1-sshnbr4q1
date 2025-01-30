import React from 'react';

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>

        <div className="prose space-y-8">
          {/* Einleitung */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Allgemeine Hinweise</h2>
            <p className="text-gray-600">
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. 
              Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). 
              In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
            </p>
          </div>

          {/* Verantwortliche Stelle */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Verantwortliche Stelle</h2>
            <p className="text-gray-600 mb-4">
              Verantwortlich für die Verarbeitung Ihrer personenbezogenen Daten auf dieser Website ist:
            </p>
            <p className="text-gray-600">
              <strong>Tischler Nick</strong> <br />
              Nick Neumann <br />
              6020 Innsbruck, Österreich <br />
              E-Mail: <a href="mailto:info@tischlernick.com" className="text-[#92400e] hover:underline">info@tischlernick.com</a>
            </p>
          </div>

          {/* Datenerfassung */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Datenerfassung auf unserer Website</h2>
            <p className="text-gray-600 mb-4">
              Wir erheben und verarbeiten personenbezogene Daten nur, soweit dies für die Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist.  
            </p>
            <p className="text-gray-600 mb-4">
              <strong>3.1 Server-Log-Dateien</strong><br />
              Beim Besuch unserer Website speichert unser Hosting-Anbieter automatisch Informationen in sogenannten Server-Log-Dateien. Diese Daten umfassen:
            </p>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="text-gray-600">Diese Daten dienen ausschließlich der statistischen Analyse und zur Verbesserung der Website.</p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cookies</h2>
            <p className="text-gray-600 mb-4">
              Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät gespeichert werden. 
              Sie richten keinen Schaden an und helfen uns, unsere Website nutzerfreundlicher zu gestalten.
            </p>
            <p className="text-gray-600">
              Wenn Sie dies nicht wünschen, können Sie Ihren Browser so einrichten, dass er Sie über das Setzen von Cookies informiert und Sie dies nur im Einzelfall erlauben.
            </p>
          </div>

          {/* Rechte der Nutzer */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Ihre Rechte</h2>
            <p className="text-gray-600">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer gespeicherten Daten. 
              Ebenso können Sie der Verarbeitung Ihrer Daten widersprechen. Wenn Sie eines dieser Rechte ausüben möchten, kontaktieren Sie uns unter: 
              <a href="mailto:info@tischlernick.com" className="text-[#92400e] hover:underline"> info@tischlernick.com</a>.
            </p>
          </div>

          {/* Externe Links */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Externe Links</h2>
            <p className="text-gray-600">
              Unsere Website kann Links zu externen Webseiten enthalten, auf deren Inhalte wir keinen Einfluss haben. 
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Die jeweiligen Anbieter oder Betreiber der verlinkten Seiten sind stets selbst verantwortlich.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Kontaktaufnahme</h2>
            <p className="text-gray-600 mb-4">
              Wenn Sie Fragen zur Datenschutzerklärung haben, können Sie sich jederzeit unter der folgenden Adresse an uns wenden:
            </p>
            <p className="text-gray-600">
              <strong>Tischler Nick</strong> <br />
              Nick Neumann <br />
              6020 Innsbruck, Österreich <br />
              E-Mail: <a href="mailto:info@tischlernick.com" className="text-[#92400e] hover:underline">info@tischlernick.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;