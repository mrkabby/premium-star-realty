import React, { useState, useEffect } from "react";
import TopImage1 from "../assets/shelf.jpg";

import BottomImage1 from "../assets/bedroom.jpg";
import SlideImage1 from "../assets/bed.jpg";
import SlideImage2 from "../assets/shelf.jpg";
import SlideImage3 from "../assets/pathway.jpg";


const AboutSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [SlideImage1, SlideImage2, SlideImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-12 px-6">
      {/* About Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h3 className="text-xl font-bold text-[#7B1C27] mb-4">ABOUT US</h3>
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">
            We are a luxury real estate development and management company
          </h4>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Quao Realty, we understand the value of acquiring prime lands and
            developing them into quality and luxurious residential and commercial
            projects. Luxury and quality are our hallmarks as we create the
            desired and suitable environment for living and commerce.
          </p>
        </div>
        <div>
          <img
            src={TopImage1}
            alt="About Us Image"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* Purchasing Real Estate Section */}
      <div className="bg-gray-100 py-12 px-6 rounded-lg mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={BottomImage1}
              alt="Purchasing Image"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#7B1C27] mb-4">
              Purchasing real estate, either as a home or as an investment is often a delicate decision.
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Quao Realty we believe that mutual trust is fundamental to success in our industry. By confiding in each other, we guarantee great results when purchasing a property with us.
            </p>
          </div>
        </div>
      </div>

      {/* Image Slideshow Section */}
      <div className="mt-12">
        <div className="relative rounded-lg overflow-hidden h-[500px]">
          <img
            src={images[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
