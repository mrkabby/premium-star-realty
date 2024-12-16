import React from "react";
import HeroImage1 from "../assets/bedroom.jpg";
import HeroImage2 from "../assets/bed.jpg";
import HeroImage3 from "../assets/pathway.jpg";
import { useNavigate } from "react-router-dom";

const Properties = () => {
  const navigate = useNavigate();

  const properties = [
    {
      id: "Pristine-Gardens",
      image: HeroImage1,
      title: "Pristine Gardens",
      description: "Luxury townhouses nestled in a serene environment with top-notch amenities.",
      location: "Sakumono, Accra",
      price: "$36,021",
      type: "For Sale",
    },
    {
      id: "Legacy-Square",
      image: HeroImage2,
      title: "Legacy Square",
      description: "State-of-the-art apartments offering a blend of modernity and elegance.",
      location: "Airport Residential, Accra",
      price: "$50,200",
      type: "For Rent",
    },
    {
      id: "Brittons-Residence",
      image: HeroImage3,
      title: "Britton’s Residence",
      description: "A harmonious blend of contemporary design and functional living spaces.",
      location: "East Legon, Accra",
      price: "$100,200",
      type: "For Sale",
    },
  ];

  return (
    <div>
      {/* Title Section */}
      <section className="py-12 bg-gray-100 text-center">
        <h1 className="text-4xl font-bold text-[#7B1C27]">Our Projects</h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover our luxurious residential and commercial developments designed to inspire.
        </p>
      </section>

      {/* Project Cards Section */}
      <section className="py-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="rounded-lg shadow-lg overflow-hidden relative group"
            >
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-56 object-cover"
                />
                <span
                  className={`absolute top-4 left-4 px-3 py-1 text-sm font-semibold text-white rounded ${
                    property.type === "For Sale" ? "bg-orange-500" : "bg-blue-500"
                  }`}
                >
                  {property.type}
                </span>
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-bold text-[#7B1C27]">
                  {property.title}
                </h3>
                <p className="text-gray-600 mt-2">{property.description}</p>
                <p className="mt-4 text-sm text-gray-500">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  {property.location}
                </p>
                <p className="mt-4 text-lg font-bold text-[#7B1C27]">
                  {property.price}
                </p>
                <button
                  className={`mt-4 px-6 py-2 rounded text-white font-semibold transition ${
                    property.type === "For Sale" ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"
                  }`}
                  onClick={() => alert(`${property.type === "For Sale" ? "Buying" : "Renting"} ${property.title}`)}
                >
                  {property.type === "For Sale" ? "Buy Now" : "Rent Now"}
                </button>
              </div>
              <button
                className="absolute bottom-4 right-4 px-4 py-2 bg-[#7B1C27] text-white text-sm font-bold rounded opacity-0 group-hover:opacity-100 transition"
                onClick={() => navigate(`/properties/${property.id}`)}
              >
                View
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-[#7B1C27] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to find your dream property?</h2>
        <p className="text-lg">
          Contact us today to learn more about our luxurious properties and investment opportunities.
        </p>
        <button
          className="mt-6 px-8 py-3 bg-white text-[#7B1C27] font-bold rounded hover:bg-gray-100 transition"
          onClick={() => navigate(  "/contact")}
        >
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Properties;
