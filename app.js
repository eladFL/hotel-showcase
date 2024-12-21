import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const HotelShowcase = () => {
  const hotels = [
    {
      name: "Gordonia Hotel Ma'ale",
      description: "מלון יוקרה המציע מפלט שקט בהרים",
      url: "https://gordoniahotels.com/maale",
      imageUrl: "https://res.cloudinary.com/dig84dw28/image/upload/v1734816250/hotels/qekzokatryl7mykvslbb.jpg"
    },
    {
      name: "Pereh Hotel",
      description: "מלון בוטיק עם נוף מרהיב",
      url: "https://pereh.co.il/suites",
      imageUrl: "https://res.cloudinary.com/dig84dw28/image/upload/v1734816249/hotels/wxvqmmxyikwpsxef5pwd.jpg"
    },
    {
      name: "Halomot Naftali",
      description: "אירוח קסום בלב הטבע",
      url: "https://www.halomotnaftali.co.il",
      imageUrl: "https://res.cloudinary.com/dig84dw28/image/upload/v1734816249/hotels/evtsgq0uuuspgcdgssyu.jpg"
    },
    {
      name: "Yamim Suite",
      description: "סוויטות אלגנטיות לחופשה רומנטית",
      url: "https://www.yamimsuite.co.il",
      imageUrl: "https://res.cloudinary.com/dig84dw28/image/upload/v1734816249/hotels/i3gchw7gn8itfvrbzndp.webp"
    },
    {
      name: "Havat Rom Glamping",
      description: "חוויית גלמפינג ייחודית בטבע",
      url: "https://havatrom.co.il/glamping",
      imageUrl: "" // Add your next Cloudinary URL
    },
    {
      name: "Alonella",
      description: "סוויטות אינטימיות מוקפות יופי טבעי",
      url: "https://alonella.co.il",
      imageUrl: "" // Add your next Cloudinary URL
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6" dir="rtl">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4"> דנה אהובתי אלו המלונות הכי מוצלחים שמצאתי לנו בביימי</h1>
        <p className="text-gray-600">לחצי על המלון כדי לראות את האתר שלו</p>
      </header>

      <div className="grid gap-6">
        {hotels.map((hotel, index) => (
          <a 
            key={index} 
            href={hotel.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block transition-transform hover:scale-[1.01]"
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <ExternalLink className="w-5 h-5 text-blue-600" />
                  <span>{hotel.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="md:col-span-1">
                    {hotel.imageUrl ? (
                      <img
                        src={hotel.imageUrl}
                        alt={hotel.name}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    ) : (
                      <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                        {hotel.name}
                      </div>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-600">{hotel.description}</p>
                    <div className="mt-4 text-blue-600 font-medium">
                      ←  לחצי כאן לאתר המלון
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HotelShowcase;
