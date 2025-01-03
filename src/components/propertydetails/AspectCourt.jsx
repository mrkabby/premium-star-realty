import React, { useState, useEffect } from "react";

// Image Imports (Replace with actual image paths)
import Image1 from "../../assets/AspectCourt/pathway.jpg";
import Image2 from "../../assets/AspectCourt/outside.jpg";
import Image3 from "../../assets/AspectCourt/hall.jpg";
import Image4 from "../../assets/AspectCourt/hall1.jpg";
import Image5 from "../../assets/AspectCourt/kitchen.jpg";
import Image6 from "../../assets/AspectCourt/window.jpg";
import Image7 from "../../assets/AspectCourt/pool.jpg";
import Image8 from "../../assets/AspectCourt/dinning.jpg";
import Image9 from "../../assets/AspectCourt/washer.jpg";
import Image10 from "../../assets/AspectCourt/gym.jpg";
import Image11 from "../../assets/AspectCourt/gym1.jpg";
import Image12 from "../../assets/AspectCourt/gym1.jpg";
import Image13 from "../../assets/AspectCourt/bedroom.jpg";
import Image14 from "../../assets/AspectCourt/bedroom2.jpg";
import Image15 from "../../assets/AspectCourt/balcony.jpg";

const AspectCourt = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const property = {
    title: "Luxury 3-Bedroom Furnished Apartment",
    description:
      "Experience luxury living in this fully furnished 3-bedroom apartment located in the prestigious Cantonments area, opposite the W.E.B. Dubois Center and close to the US Embassy.",
    address: "Cantonments, Accra - Opposite W.E.B. Dubois Center, close to the US Embassy",
    rates: [
      "Long Lease (1 year+): $3,500/month",
      "Short Stays (3–6 months): $4,200/month",
      "Weekly Rate: $300 per day",
    ],
    specifications: [
      "3 fully furnished bedrooms with fitted wardrobes",
      "2.5 modern bathrooms",
      "Master bedroom available",
      "6 Air Conditioners (ACs) in all rooms",
      "Spacious living room with modern design",
      "Fibre Internet (Telecel - tenant buys own internet)",
      "DSTV Decoder (tenant buys subscription)",
      "Prepaid electricity meter (tenant buys own credit)",
    ],
    kitchenFacilities: [
      "1 No. Air Conditioning",
      "Bosch and Samsung Double Fridges (in-built)",
      "Bosch 4-Burner Oven",
      "Bosch Dishwasher",
      "Washing machine (at store room)",
      "Extractor",
      "Water Heater",
      "Hot Plate (Electric Stove)",
    ],
    additionalFacilities: [
      "Fitness Gym",
      "Swimming Pool",
      "Free Treated Water Supply",
      "Spacious Demarcated Car Park",
    ],
    images: [
      Image1,
      Image2,
      Image3,
      Image4,
      Image5,
      Image6,
      Image7,
      Image8,
      Image9,
      Image10,
      Image11,
      Image12,
      Image13,
      Image14,
      Image15,
    ],
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
      {/* Title and Description */}
      <h1 className="text-4xl font-bold text-[#3fc7d8] mb-4 text-center">
        {property.title}
      </h1>
      <p className="text-gray-700 mb-6 text-center">{property.description}</p>

      {/* Property Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Details Section */}
        <div>
          <p className="text-lg font-semibold">📍 Address:</p>
          <p className="text-gray-600 mb-4">{property.address}</p>

          <p className="text-lg font-semibold">💵 Rates:</p>
          <ul className="list-disc ml-6 text-gray-600 mb-4">
            {property.rates.map((rate, index) => (
              <li key={index}>{rate}</li>
            ))}
          </ul>

          <p className="text-lg font-semibold">🏠 Apartment Specifications:</p>
          <ul className="list-disc ml-6 text-gray-600 mb-4">
            {property.specifications.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>

          <p className="text-lg font-semibold">🍳 Kitchen Facilities:</p>
          <ul className="list-disc ml-6 text-gray-600 mb-4">
            {property.kitchenFacilities.map((facility, index) => (
              <li key={index}>{facility}</li>
            ))}
          </ul>

          <p className="text-lg font-semibold">🏢 Additional Facilities:</p>
          <ul className="list-disc ml-6 text-gray-600">
            {property.additionalFacilities.map((facility, index) => (
              <li key={index}>{facility}</li>
            ))}
          </ul>

          <button
            className="mt-4 px-6 py-3 bg-[#3fc7d8] text-white rounded hover:bg-[#5e141b] transition"
            onClick={() =>
              window.location.href =
                "https://wa.me/233243380128?text=Hello%2C%20I%27m%20interested%20in%20Luxury%203-Bedroom%20Apartment."
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
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white p-2 rounded-full"
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

export default AspectCourt;
