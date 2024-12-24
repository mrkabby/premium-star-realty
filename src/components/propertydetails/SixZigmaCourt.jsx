import React, { useState, useEffect } from "react";
import Image1 from "../../assets/Peva/NKANSA_21.jpg";
import Image2 from "../../assets/Peva/NKANSA_29.jpg";
import Image3 from "../../assets/Peva/NKANSA_46.jpg";
import Image4 from "../../assets/Peva/NKANSA_31.jpg";
import Image5 from "../../assets/Peva/NKANSA_42.jpg";
import Image6 from "../../assets/Peva/NKANSA_22.jpg";


const SixZigmacourt= () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const property = {
    id: 1,
    title: "Six Zigma Court",
    description:
      "Discover the perfect blend of modern elegance and natural beauty at Willow Creek Residences. Designed for comfort, built for luxury.",
    address: "8502 Preston Rd. Inglewood, Maine 98380",
    specifications: [
      "4 bed rooms",
      "2 bath rooms",
      "1 kitchen",
      "2 garage",
    ],
    neighborhood: [
      "Willow Creek High School - 1 km away",
      "Bus stops and metro stations within 500m",
      "Willow Park, shopping malls, restaurant",
    ],
    price: "$150,000",
    images: [Image1, Image2, Image3, Image4, Image5, Image6],
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

          <p className="text-2xl font-bold text-[#7B1C27] mt-6">
            Price: {property.price}
          </p>
          <button
            className="mt-4 px-6 py-3 bg-[#7B1C27] text-white rounded hover:bg-[#5e141b] transition"
            onClick={() => window.location.href =
              "https://wa.me/233243380128?text=Hello%2C%20I%27m%20interested%20in%20Six%20Zigma%20Court."
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

export default SixZigmacourt;
