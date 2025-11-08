import { useState, useEffect } from "react";
import Img1 from "../../assets/Com 14/IMG-20251016-WA0052.jpg";
import Img2 from "../../assets/Com 14/IMG-20251016-WA0053.jpg";
import Img3 from "../../assets/Com 14/IMG-20251016-WA0054.jpg";
import Img4 from "../../assets/Com 14/IMG-20251016-WA0055.jpg";
import Img5 from "../../assets/Com 14/IMG-20251016-WA0056.jpg";
import Img6 from "../../assets/Com 14/IMG-20251016-WA0057.jpg";
import Img7 from "../../assets/Com 14/IMG-20251016-WA0058.jpg";
import Img8 from "../../assets/Com 14/IMG-20251016-WA0059.jpg";
import Img9 from "../../assets/Com 14/IMG-20251016-WA0060.jpg";

const Community14 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const property = {
    title: "Community 14 - 3 Bedroom (Fully Furnished)",
    booked: false,
    description:
      "Beautiful 3-bedroom fully furnished apartment in Community 14 with modern finishes and secure estate.",
    address: "Community 14, Accra",
    specifications: ["3 Bedrooms", "2 Bathrooms", "Modern Kitchen", "Parking"],
    neighborhood: ["Nearby shops", "Good road access", "Secure community"],
    price: "$200",
    images: [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9],
  };

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % property.images.length);
    }, 4000);
    return () => clearInterval(id);
  }, [property.images.length]);

  const next = () => setCurrentIndex((p) => (p + 1) % property.images.length);
  const prev = () => setCurrentIndex((p) => (p === 0 ? property.images.length - 1 : p - 1));

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-[#3fc7d8] mb-4 text-center">{property.title}</h1>
      <p className="text-gray-700 mb-6">{property.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg font-semibold">Address:</p>
          <p className="text-gray-600 mb-4">{property.address}</p>

          <p className="text-lg font-semibold">Specifications:</p>
          <ul className="list-disc ml-6 text-gray-600 mb-4">
            {property.specifications.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>

          <p className="text-lg font-semibold">Neighborhood:</p>
          <ul className="list-disc ml-6 text-gray-600 mb-4">
            {property.neighborhood.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>

          <p className="text-2xl font-bold text-[#7B1C27] mt-6">Price: {property.price}</p>
          {property.booked ? (
            <button className="mt-4 px-6 py-3 bg-gray-400 text-white rounded cursor-not-allowed" disabled>
              Booked
            </button>
          ) : (
            <button
              className="mt-4 px-6 py-3 bg-[#3fc7d8] text-white rounded hover:bg-[#5e141b] transition"
              onClick={() => window.location.href = `mailto:agent@premiumstarrealty.com?subject=${encodeURIComponent(property.title + ' Inquiry')}`}
            >
              Contact Agent
            </button>
          )}
        </div>

        <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
          <div className="w-full h-96 relative">
            {property.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Image ${idx + 1}`}
                className={`absolute w-full h-full object-cover transition-opacity duration-700 ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </div>
          <button onClick={prev} className="absolute top-1/2 left-4 text-white p-2 rounded-full">◀</button>
          <button onClick={next} className="absolute top-1/2 right-4 text-white p-2 rounded-full">▶</button>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Image Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {property.images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-md">
              <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community14;
