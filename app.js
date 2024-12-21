const HotelShowcase = () => {
  const hotels = [
    {
      name: "Gordonia Hotel Ma'ale",
      description: "מלון יוקרה המציע מפלט שקט בהרים",
      url: "https://gordoniahotels.com/maale",
      backgroundColor: "#4A90E2"
    },
    {
      name: "Pereh Hotel",
      description: "מלון בוטיק עם נוף מרהיב",
      url: "https://pereh.co.il/suites",
      backgroundColor: "#50C878"
    },
    {
      name: "Halomot Naftali",
      description: "אירוח קסום בלב הטבע",
      url: "https://www.halomotnaftali.co.il",
      backgroundColor: "#9370DB"
    },
    {
      name: "Yamim Suite",
      description: "סוויטות אלגנטיות לחופשה רומנטית",
      url: "https://www.yamimsuite.co.il",
      backgroundColor: "#40B5AD"
    },
    {
      name: "Havat Rom Glamping",
      description: "חוויית גלמפינג ייחודית בטבע",
      url: "https://havatrom.co.il/glamping",
      backgroundColor: "#FF7F50"
    },
    {
      name: "Alonella",
      description: "סוויטות אינטימיות מוקפות יופי טבעי",
      url: "https://alonella.co.il",
      backgroundColor: "#8B4513"
    }
  ];

  const Card = ({ children }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      {children}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">דנה אהובתי אלו המלונות הכי מוצלחים שמצאתי לנו</h1>
        <p className="text-gray-600">לחצי על המלון כדי לראות את האתר שלו</p>
      </header>

      <div className="grid gap-6">
        {hotels.map((hotel, index) => (
          <a 
            key={index}
            href={hotel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/3">
                  <svg viewBox="0 0 400 300" className="w-full h-48 rounded-lg">
                    <rect width="100%" height="100%" fill={hotel.backgroundColor} />
                    <text
                      x="50%"
                      y="50%"
                      dominantBaseline="middle"
                      textAnchor="middle"
                      fill="white"
                      fontSize="24"
                    >
                      {hotel.name}
                    </text>
                  </svg>
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-xl font-bold mb-2">{hotel.name}</h2>
                  <p className="text-gray-600 mb-4">{hotel.description}</p>
                  <div className="text-blue-600 font-medium">
                    ←  לחצי כאן לאתר המלון
                  </div>
                </div>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

ReactDOM.render(<HotelShowcase />, document.getElementById('root'));