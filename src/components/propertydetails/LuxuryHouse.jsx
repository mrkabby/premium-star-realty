import { useState, useEffect } from "react";

import Image1 from "../../assets/Community18/Outside3.jpg";
import Image2 from "../../assets/Community18/Outside1.jpg";
import Image3 from "../../assets/Community18/Outside2.jpg";
import Image4 from "../../assets/Community18/Inside1.jpg";
import Image5 from "../../assets/Community18/Inside2.jpg";
import Image6 from "../../assets/Community18/Inside3.jpg";
import Image7 from "../../assets/Community18/Inside4.jpg";
import Image8 from "../../assets/Community18/Inside5.jpg";
import Image9 from "../../assets/Community18/Inside6.jpg";
import Image10 from "../../assets/Community18/Inside7.jpg";
import Image11 from "../../assets/Community18/Inside8.jpg";


const LuxuryHouse = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const property = {

    title: "Luxury House",
    description:
      "We are pleased to present newly built luxury 4 bedroom houses for sale at Spintex Community 18. These stunning properties offer a perfect blend of comfort, style, and convenience.",
    address: "Spintex Community 18, Accra",
    specifications: [
      "4 spacious bedrooms with en-suite facilities",
      "5 modern washrooms",
      "Spacious living room perfect for relaxation and entertainment",
      "2 poly tanks for water storage",
      "Built-in wardrobes in all bedrooms",
      "Solar power lights, fans, and refrigerators for a sustainable living",
      " Water heaters in all bedrooms for a relaxing bath",
    ],
    neighborhood: [
      "Community 18 KFC",
      "Amadia Shopping Center",
      "Numerous Food Joints",
      
    ],
    investment: "These luxury houses offer a great investment opportunity, with a potential rental income of between USD 1000 to USD 1,500 per month.",
    images: [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11,],
  };

  // Automatically switch images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % property.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [property.images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % property.images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-[#3fc7d8] mb-4  text-center">
        {property.title}
      </h1>
      <p className="text-gray-700 mb-6">{property.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Property Details */}
        <div>
          <p className="text-lg font-semibold">Address:</p>
          <p className="text-gray-600 mb-4">{property.address}</p>

          <p className="text-lg font-semibold">Specifications:</p>
          <ul className="list-disc ml-6 text-gray-600 mb-4">
            {property.specifications.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>

          <p className="text-lg font-semibold">Neighborhood Information:</p>
          <ul className="list-disc ml-6 text-gray-600">
            {property.neighborhood.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>

          <p className="text-2xl font mt-6">
          Investment Opportunity
          : {property.investment}
          </p>
          <button
            className="mt-4 px-6 py-3 bg-[#3fc7d8] text-white rounded hover:bg-[#5e141b] transition"
            onClick={() => window.location.href =
                "https://wa.me/233243380128?text=Hello%2C%20I%27m%20interested%20in%20Luxury%20House."
            }
          >
            Contact Owner
          </button>
        </div>

        {/* Image Carousel */}
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
          <div className="w-full h-96 relative">
            {property.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Property Image ${index + 1}`}
                className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white p-2 rounded-full"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2  text-white p-2 rounded-full"
          >
            ▶
          </button>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Image Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {property.images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LuxuryHouse;
