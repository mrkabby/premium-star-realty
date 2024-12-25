import React, { useState, useEffect } from "react";

import HeroImage1 from "../../assets/Pregrino/NKANSA_70.jpg";
import HeroImage2 from "../../assets/Pregrino/NKANSA_61.jpg";
import HeroImage3 from "../../assets/Pregrino/NKANSA_63.jpg";
import Image7 from "../../assets/Pregrino/NKANSA_165.jpg";
import Image8 from "../../assets/Pregrino/NKANSA_179.jpg";
import Image9 from "../../assets//Pregrino/NKANSA_189.jpg";
import Image10 from "../../assets/Pregrino/NKANSA_197.jpg";
import Image11 from "../../assets/Pregrino/NKANSA_203.jpg";
import Image12 from "../../assets/Pregrino/NKANSA_211.jpg";
import Image13 from "../../assets/Pregrino/NKANSA_215.jpg";
import Image14 from "../../assets/Pregrino/NKANSA_225.jpg";
import Image15 from "../../assets/Pregrino/NKANSA_231.jpg";

const PeregrinoPlace = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const property = {
    id: 1,
    title: "Peregrino Place",
    description:
      "A beautiful destination for the perfect honeymoon or weekend getaway in the Ayi Mensah Valley, Bike or Walk up the Aburi mountains for breakfast at The Peduase Valley Resort Drive to the Safari Valley for the experience of a lifetime.",
    address: "Ayimensah, Kweiman",
    specifications: [
      "4 bed rooms",
      "2 bath rooms",
      "1 kitchen",
      "2 garage",
    ],
    neighborhood: [
      "Aburi Botanical Gardens",
      "Papaya Recreational Park",
      "Oboadaka Falls with Quad biking",
      "Asenema Falls"
    ],
    price: "$150,000",
    images: [HeroImage1, HeroImage2, HeroImage3,Image7, Image8, Image9, Image10, Image11, Image12,Image13, Image14, Image15],
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
            className="mt-4 px-6 py-3 bg-[#3fc7d8] text-white rounded hover:bg-[#5e141b] transition"
            onClick={() => window.location.href =
              "https://wa.me/233243380128?text=Hello%2C%20I%27m%20interested%20in%20Peregrino%20Place."
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

export default PeregrinoPlace;
