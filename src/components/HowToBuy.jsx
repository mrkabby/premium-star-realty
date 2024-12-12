import React from "react";
import HowToBuyImage from "../assets/bed.jpg"; // Replace with the correct image path

const HowToBuy = () => {
  return (
    <section className="py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Image Section */}
        <div className="relative">
          <img
            src={HowToBuyImage}
            alt="How To Buy"
            className="rounded-lg shadow-lg w-full object-cover"
          />
          <h4 className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-white bg-black bg-opacity-50 rounded-lg">
            How To Buy
          </h4>
        </div>

        {/* Right Text Section */}
        <div>
          <h2 className="text-3xl font-bold text-[#7B1C27] mb-4">
            We provide expert insight to make buying a home a breeze.
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Buying a home can be overwhelming. We believe that it doesn’t have
            to be. We have crafted a purposeful process to help our clients
            navigate buying a home with ease.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            <strong>The first step is to just to reach out.</strong> Our
            seasoned sales consultants are ready to walk you through our buying
            process.
          </p>
          <div className="flex justify-center">
            <a
              href="tel:+1234567890"
              className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Let’s talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;