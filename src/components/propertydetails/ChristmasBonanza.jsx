import { useState, useEffect } from "react";
import Img1 from "../../assets/Christmas bonanza/WhatsApp Image 2025-10-16 at 14.11.33_2447ed05.jpg";
import Vid1 from "../../assets/Christmas bonanza/WhatsApp Video 2025-10-16 at 14.11.33_e8f08756.mp4";

const ChristmasBonanza = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const property = {
    title: "Christmas Bonanza Development",
    booked: false,
    description:
      "Seasonal / limited-time development package — mixed-use plots and units available. Contact us for special Christmas pricing and bundle offers.",
    address: "TBD",
    specifications: [
      "Mixed-use plots",
      "Flexible payment plans",
      "Near main access roads",
    ],
    neighborhood: ["TBD"],
    price: "Contact for pricing",
    images: [Img1],
    videos: [Vid1],
  };

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % property.images.length);
    }, 4500);
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
          <button
            className="mt-4 px-6 py-3 bg-[#3fc7d8] text-white rounded hover:bg-[#5e141b] transition"
            onClick={() => window.location.href = `mailto:agent@premiumstarrealty.com?subject=${encodeURIComponent(property.title + ' Inquiry')}`}
          >
            Contact Agent
          </button>
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
            <div key={`img-${idx}`} className="overflow-hidden rounded-lg shadow-md">
              <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
          {property.videos && property.videos.map((v, i) => (
            <div key={`vid-${i}`} className="overflow-hidden rounded-lg shadow-md">
              <video controls className="w-full h-48 object-cover">
                <source src={v} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChristmasBonanza;
