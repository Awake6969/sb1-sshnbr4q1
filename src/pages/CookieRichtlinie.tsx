import React from 'react';

export default function CookieRichtliniePage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Cookie-Richtlinie</h1>

        <div className="prose space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Einführung
            </h2>
            <p className="text-gray-600">
              Diese Cookie-Richtlinie erklärt, wie wir Cookies und ähnliche Technologien auf unserer Website verwenden. Durch die Nutzung dieser Website stimmen Sie der Verwendung von Cookies gemäß dieser Richtlinie zu.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Was sind Cookies?
            </h2>
            <p className="text-gray-600">
              Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie Websites besuchen. Sie helfen uns, Ihre Benutzererfahrung zu verbessern, indem sie sich an Ihre Präferenzen erinnern und die Website effizienter gestalten.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Welche Arten von Cookies verwenden wir?
            </h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-3">
              <li>
                <strong>Unbedingt notwendige Cookies:</strong> Diese Cookies sind für den Betrieb unserer Website erforderlich und können in unseren Systemen nicht deaktiviert werden.
              </li>
              <li>
                <strong>Funktionale Cookies:</strong> Diese Cookies ermöglichen es uns, erweiterte Funktionen bereitzustellen, wie z. B. das Speichern von Spracheinstellungen.
              </li>
              <li>
                <strong>Analyse- und Performance-Cookies:</strong> Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, damit wir sie verbessern können.
              </li>
              <li>
                <strong>Marketing- und Tracking-Cookies:</strong> Diese Cookies werden verwendet, um personalisierte Werbung anzuzeigen und die Effektivität von Werbekampagnen zu messen.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Wie können Sie Cookies verwalten?
            </h2>
            <p className="text-gray-600">
              Sie können Cookies über die Einstellungen Ihres Browsers verwalten. Sie haben die Möglichkeit, alle Cookies zu akzeptieren, einige abzulehnen oder alle abzulehnen. Bitte beachten Sie, dass das Blockieren von Cookies einige Funktionen unserer Website beeinträchtigen kann.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Drittanbieter-Cookies
            </h2>
            <p className="text-gray-600 mb-4">
              Unsere Website kann Inhalte und Dienste von Drittanbietern einbinden, die ebenfalls Cookies setzen. Dazu gehören:
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-4">
              <li>Google Analytics (zur Website-Analyse)</li>
              <li>Facebook Pixel (für gezielte Werbung)</li>
              <li>YouTube/Vimeo (für eingebettete Videos)</li>
            </ul>
            <p className="text-gray-600">
              Diese Drittanbieter haben ihre eigenen Datenschutzrichtlinien, die Sie auf deren Websites einsehen können.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Änderungen an dieser Cookie-Richtlinie
            </h2>
            <p className="text-gray-600">
              Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren. Änderungen werden auf dieser Seite veröffentlicht. Wir empfehlen Ihnen, diese Seite regelmäßig zu überprüfen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Kontakt
            </h2>
            <p className="text-gray-600 mb-4">
              Wenn Sie Fragen zu dieser Cookie-Richtlinie haben, kontaktieren
              Sie uns bitte unter:
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
}