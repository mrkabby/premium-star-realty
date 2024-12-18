import React from "react";
import Image1 from "../assets/outside.jpg";
import Image2 from "../assets/highlights/MNKK_115.jpg";
import Image3 from "../assets/highlights/MNKK_105.jpg";
import LeroImage1 from "../assets/highlights/MNKK_180.jpg";
import LeroImage2 from "../assets/highlights/MNKK_120.jpg";
import LeroImage3 from "../assets/highlights/MNKK_130.jpg";
import HeroSection from "../components/HeroSection";
import ContactForm from "../components/TalkToUs";
import { Link } from "react-router-dom";

const HomePage = () => {
  const properties = [
    {
      name: "The Daniel Duplex",
      description: "Luxury apartments at Community 18 .",
      image: LeroImage1,
    },
    {
      name: "Six Zigma Court",
      description: "Sophisticated residential development at Community 20.",
      image: Image3,
    },
    {
      name: "Rochester House ",
      description: "Lush greenery at Community 20.",
      image: LeroImage2,
    },
    {
      name: "The Essence",
      description: "Private rooftop infinity pool with garden oasis views.",
      image: LeroImage3,
    },
  ];

  return (
    <>
      <HeroSection />

      {/* Now Selling */}
      <section className="py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-16 lg:px-24">
          <div className="md:w-1/2">
            <img
              src={Image2}
              alt="Manora Residence"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Now Selling</h2>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Manora Residence - Airport Residential</strong> Starting at $75,000
            </p>
            <p className="text-gray-600 mb-6">
              Own an apartment just 3 minutes from Kotoka International Airport.
            </p>
            <Link
              to="/properties/manora"
              className="bg-[#3fc7d8] text-white py-2 px-6 rounded hover:bg-blue-700 transition"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-16 lg:px-24">
          <div className="md:w-1/2 order-2 md:order-1 mt-6 md:mt-0 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <h3 className="text-3xl font-bold mb-4">IT'S WHERE YOU BELONG</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We are a luxury real estate development and management company. Our mission is to develop and invest in luxury properties. We aim to create value for homeowners and investors by designing innovative products and prioritizing our clients' needs.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our vision is to become the leading Real Estate Developers in Africa and the world.
            </p>
            <Link
              to="/about"
              className="bg-[#3fc7d8] text-white py-2 px-6 rounded hover:bg-red-700 transition"
            >
              Learn More
            </Link>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <img
              src={Image1}
              alt="Luxury Building"
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 md:px-16 lg:px-24">
          <h2 className="text-4xl font-bold mb-8 text-center">Discover a Place You’ll Love to Live</h2>
          <h3 className="text-3xl font-bold mb-6 text-center">Our Properties</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.slice(0, 3).map((property, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{property.name}</h3>
                  <p className="text-gray-600 mb-4">{property.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/properties"
              className="bg-[#3fc7d8] text-white py-2 px-6 rounded hover:bg-red-700 transition"
            >
              View More
            </Link>
          </div>
        </div>
      </section>

      {/* How To Buy */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-16 lg:px-24">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6">How to Buy</h2>
            <h3 className="text-3xl font-bold mb-4">
              A Seamless & Easy Process, Made for Your Ease of Use
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Premium Star Realty, we understand the value of acquiring prime lands and
              developing them into quality and luxurious residential and
              commercial projects.
            </p>
            <Link
              to="/how-to-buy"
              className="bg-[#3fc7d8] text-white py-2 px-6 rounded hover:bg-red-700 transition"
            >
              Learn How to Buy
            </Link>
          </div>
          <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0">
            <img
              src={LeroImage3}
              alt="How to Buy"
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
};

export default HomePage;
