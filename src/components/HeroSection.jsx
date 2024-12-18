import React, { useState, useEffect } from "react";
import HeroImage1 from "../assets/highlights/MNKK_97.jpg";
import HeroImage2 from "../assets/highlights/MNKK_98.jpg";
import HeroImage3 from "../assets/highlights/MNKK_99.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
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
        Your Trusted Partner in Finding the Perfect Home
        </h1>
        <p className="mt-4 text-lg md:text-xl">
        Buy, Sell, or Rent Properties with Ease in Ghana
        </p>
        <button className="mt-6 px-6 py-3 bg-[#3fc7d8] rounded-lg text-white hover:bg-[#a02735] transition duration-300" onClick={() => navigate(`/properties`)}>
          Explore Properties
        </button > 
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
