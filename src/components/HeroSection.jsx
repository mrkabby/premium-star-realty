import React, { useState, useEffect } from "react";
import HeroImage1 from "../assets/bedroom.jpg";
import HeroImage2 from "../assets/bed.jpg";
import HeroImage3 from "../assets/pathway.jpg";

const HeroSection = () => {
  const images = [
    HeroImage1, 
    HeroImage2,
    HeroImage3,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Pristine Gardens: Intimate And Luxury Living At Its Finest
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          The Pristine Garden Homes are an exclusive collection of family homes
          nestled within a unique regeneration neighbourhood in Spintex,
          Community 18.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#7B1C27] rounded-lg text-white hover:bg-[#a02735] transition duration-300">
          Explore Properties
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
