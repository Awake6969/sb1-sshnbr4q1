import React, { useState, useEffect } from 'react';
import { Star, StarHalf, BadgeCheck, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
  verified?: boolean;
}

const reviews: Review[] = [
  {
    author: "Harald K.",
    rating: 5,
    text: "Pünktlich... saubere Arbeit... Preis-Leistungsverhältnis sehr gut...",
    date: "vor einem Monat",
    verified: true
  },
  {
    author: "Martina Erlsbacher",
    rating: 5,
    text: "Sehr schnelle und vor allem zeitnahe Terminvereinbarung, perfekte Kosteneinschätzung und super saubere und genaue Auftragserledigigung. Zudem ist Nick sehr verlässlich und freundlich... jederzeit gerne wieder!",
    date: "vor einem Monat",
    verified: true
  },
  {
    author: "Vukašin Vukelić",
    rating: 5,
    text: "I can recommend Nick for his punctuality reliability and professionalism.",
    date: "vor einem Jahr",
    verified: true
  },
  {
    author: "Stefan",
    rating: 5,
    text: "Nick hat uns geholfen ein großes Stockbett im Kinderzimmer aufzubauen. Trotz komplizierter Konstruktion und beengten Platzverhältnissen hat Nick es sehr strukturiert und rasch aufgebaut. Kleine Probleme während des Aufbaus...",
    date: "vor einem Jahr",
    verified: true
  },
  {
    author: "Lucas Matturo",
    rating: 5,
    text: "Nick ist ein hervorragender Tischler. Sehr zuverlässig und professionell.",
    date: "vor einem Jahr",
    verified: true
  },
  {
    author: "Peter Schinagl",
    rating: 5,
    text: "Perfekte und Zuverlässige Arbeit, immer wieder gerne !!!",
    date: "vor einem Jahr",
    verified: true
  },
  {
    author: "Martina D.",
    rating: 5,
    text: "Sehr fleißig, freundlich, transparente Kosten.",
    date: "vor 9 Monaten",
    verified: true
  },
  {
    author: "jusmile ddx",
    rating: 5,
    text: "Tischler Nick ist sehr sympathisch und  fachlich komptent . Auch schwierige handwerkliche Tätigkeiten meistert er professionell. Eindeutige Empfehlung! Gerne wieder !",
    date: "vor einem Jahr",
    verified: true
  },
  {
    author: "Suzana77777 Rakic",
    rating: 5,
    text: "Von Anfang bis Ende hat alles perfekt gepasst. Sehr freundlich, pünktlich, kompetent, hilfsbereit und hat tolle Arbeit geleistet. Jederzeit wieder und auf jedenfall Empfehlenswert. Danke Nick.",
    date: "vor einem Jahr",
    verified: true
  },
  {
    author: "Anna Witting",
    rating: 5,
    text: "Nur zu empfehlen!",
    date: "vor 2 Jahren",
    verified: true
  },
  {
    author: "Gabriele Beutel",
    rating: 5,
    text: "Tolle flexible Termingestaltung mit kundenfreundlichem Support. Herzlichen Dank NICK",
    date: "vor 2 Jahren",
    verified: true
  },
  {
    author: "Josef Mayerhofer",
    rating: 5,
    text: "Nick ist schnell erreichbar, pünktlich und super vorbereitet. Er hat in unserem Badezimmer und der Toilette eine große Anzahl von Fugen erneuert und dabei sehr sauber gearbeitet. Den dafür benötigten Arbeitsaufwand hat er sehr realistisch …",
    date: "vor einem Jahr",
    verified: true
  },
  {
    author: "Hannes W.",
    rating: 5,
    text: "Hervorragende Arbeit von Nick. Antwort auf meine Anfrage in wenigen Minuten, sogar am Samstag und Sonntag erreichbar. Einfache und schnelle Terminvereinbarung, sehr flexibel. 1A Service, sehr genau und sehr verlässlich! Nick ist ein super ausgebildeter Tischler mit tollen handwerklichen Fähigkeiten. Danke!",
    date: "vor 2 Jahren",
    verified: true
  },
  {
    author: "Ulrike Winder",
    rating: 5,
    text: "Ich war rundherum restlos von Nick begeistert! Freundlich, pünktlich, sauber, rasch im Erkennen der unterschiedlichsten Probleme, welche er bestens äußerst professionell und mit!",
    date: "vor 3 Jahren",
    verified: true
  },
  {
    author: "Maria Patriki",
    rating: 5,
    text: "Der Nick ist wirklich top. Er arbeitet genau, und professionell. Ich bin sehr zufrieden! Immer wieder gerne👏🏼👏🏼!",
    date: "vor 2 Jahren",
    verified: true
  },
  {
    author: "Josef Huber",
    rating: 5,
    text: "Die Reparaturen wurden zuverlässig und perfekt durchgeführt. Tischler Nick ist sehr zuverlässig und professionell. Zusätzlich, was sehr wichtig war für uns, flexibel und jederzeit erreichbar, was die Koordination um einiges vereinfacht hat.!",
    date: "vor 2 Jahren",
    verified: true
  },
  {
    author: "G. B. Stanarevic",
    rating: 5,
    text: "Einen dringlichen und sich schwierig gestaltenden Schrankaufbau perfekt erledigt - können wir absolut weiterempfehlen!",
    date: "vor 2 Jahren",
    verified: true
  },
  {
    author: "Travel19d Travel19d",
    rating: 5,
    text: "Tischler Nick arbeitet sauber und professionell zu einem absolut fairen Preis. Er ist außerdem freundlich und pünktlich. Auch für kleinere handwerkliche Arbeiten, z.B Einbau Katzenklappe,  100%-ig zu empfehlen. Eins a.",
    date: "vor 2 Jahren",
    verified: true
  },
  {
    author: "Alexander Rus",
    rating: 5,
    text: "Verlässlich und professionell. Absolut zu empfehlen!",
    date: "vor 2 Jahren",
    verified: true
  }
];

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
};

const ReviewCard = ({ review }: { review: Review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldShowButton, setShouldShowButton] = useState(false);
  const textRef = React.useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const isOverflowing = textRef.current.scrollHeight > 150;
      setShouldShowButton(isOverflowing);
    }
  }, [review.text]);

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col mb-8 md:h-full">
      <div className="flex items-start mb-4">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#92400e]/10 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-[#92400e] font-semibold">
            {review.author.charAt(0)}
          </span>
        </div>
        <div className="ml-4">
          <div className="flex items-center space-x-1 mb-1">
            <h4 className="font-semibold text-gray-900">{review.author}</h4>
            {review.verified && (
              <BadgeCheck className="w-4 h-4 text-blue-500" title="Verifizierter Benutzer" />
            )}
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="hidden md:inline text-sm text-gray-500">{review.date}</span>
          </div>
        </div>
      </div>
      <div 
        ref={textRef}
        className={`text-gray-600 ${isExpanded ? '' : 'md:h-auto h-[150px] overflow-hidden'}`}
      >
        <p>{review.text}</p>
      </div>
      {shouldShowButton && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="md:hidden mt-4 text-[#92400e] flex items-center justify-center w-full"
        >
          {isExpanded ? (
            <>
              Weniger anzeigen
              <ChevronUp className="ml-2 w-4 h-4" />
            </>
          ) : (
            <>
              Erfahre mehr
              <ChevronDown className="ml-2 w-4 h-4" />
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const maxIndex = reviews.length - 1;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          window.innerWidth >= 768
            ? (prevIndex + 1) % reviews.length // Desktop: Increment by 1 and loop
            : Math.min(prevIndex + 1, maxIndex) // Mobile: Original behavior
        );
      }, 4000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [maxIndex, isPaused]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900">Google Bewertungen</h3>
          <a 
            href="https://www.google.at/maps/place/Tischler+Nick/@47.2057915,11.0178004,10z/data=!3m1!4b1!4m6!3m5!1s0x2c1a6c8a63d512c9:0x1ba6a3a488aefba9!8m2!3d47.2062642!4d11.3474288!16s%2Fg%2F11rskpbb13?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex justify-center items-center space-x-2 hover:text-[#92400e] transition-colors"
          >
            <div className="flex items-center">
              <RatingStars rating={4.9} />
              <span className="text-lg font-semibold text-gray-900 ml-2">4.9</span>
            </div>
            <span className="text-gray-600">(31 Bewertungen)</span>
          </a>
        </div>

        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          {currentIndex > 0 && (
            <button
              onClick={() => setCurrentIndex((prev) => prev - 1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none z-10"
              aria-label="Vorherige Bewertungen"
            >
              <ChevronLeft className="w-6 h-6 text-[#92400e]" />
            </button>
          )}
          
          {currentIndex < (window.innerWidth >= 768 ? reviews.length - 1 : maxIndex) && (
            <button
              onClick={() => setCurrentIndex((prev) => prev + 1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none z-10"
              aria-label="Nächste Bewertungen"
            >
              <ChevronRight className="w-6 h-6 text-[#92400e]" />
            </button>
          )}

          <div 
            className="flex transition-transform duration-500 ease-in-out w-full"
            style={{ transform: `translateX(-${currentIndex * (window.innerWidth >= 768 ? 33.33 : 100)}%)` }}
          >
            <div className="flex w-full">
              {reviews.map((review, index) => (
                <div 
                  key={index} 
                  className="w-full px-4 flex-shrink-0 md:w-1/3"
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}