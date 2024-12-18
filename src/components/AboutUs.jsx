import React, { useState, useEffect } from "react";
import TopImage1 from "../assets/highlights/MNKK_109.jpg";

import BottomImage1 from "../assets/highlights/MNKK_127.jpg";
import SlideImage1 from "../assets/highlights/MNKK_120.jpg";
import SlideImage2 from "../assets/highlights/MNKK_129.jpg";
import SlideImage3 from "../assets/highlights/MNKK_193.jpg";


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
          Find the perfect home or commercial space tailored to your needs.
          </h4>
          <p className="text-gray-700 text-lg leading-relaxed">
          Discover a variety of rental options for families, professionals, and businesses.
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
            Expertly managing your properties for maximum returns and minimal stress.
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
            Real estate advice to help you make informed decisions.
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
