import React from "react";
import { useNavigate } from "react-router-dom";
import HeroImage1 from "../assets/bedroom.jpg";
import HeroImage2 from "../assets/bed.jpg";
import HeroImage3 from "../assets/pathway.jpg";

const Properties = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Title Section */}
      <section className="py-12 bg-gray-100 text-center">
        <h1 className="text-4xl font-bold text-[#7B1C27]">Our Properties</h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover our luxurious residential and commercial developments designed to inspire.
        </p>
      </section>

      {/* Project Cards Section */}
      <section className="py-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              id: "pristine-gardens",
              image: HeroImage1,
              title: "Pristine Gardens",
              description: "Luxury townhouses in a serene environment.",
            },
            {
              id: "legacy-square",
              image: HeroImage2,
              title: "Legacy Square",
              description: "State-of-the-art apartments with modernity.",
            },
            {
              id: "brittons-residence",
              image: HeroImage3,
              title: "Britton’s Residence",
              description: "Contemporary design and functional spaces.",
            },
          ].map((project) => (
            <div key={project.id} className="rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-xl font-bold text-[#7B1C27]">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <button
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  onClick={() => navigate(`/properties/${project.id}`)} // Updated route path
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-[#7B1C27] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to find your dream property?
        </h2>
        <p className="text-lg">
          Contact us today to learn more about our luxurious properties and
          investment opportunities.
        </p>
        <button
          className="mt-6 px-8 py-3 bg-white text-[#7B1C27] font-bold rounded hover:bg-gray-100 transition"
          onClick={() => window.location.href = "/contact"}
        >
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Properties;
