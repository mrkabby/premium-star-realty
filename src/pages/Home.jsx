// ...existing code...
import Image1 from "../assets/Pregrino/NKANSA_170.jpg";

import Image3 from "../assets/Peva/NKANSA_52.jpg";
import LeroImage1 from "../assets/highlights/MNKK_180.jpg";

import LeroImage3 from "../assets/Pregrino/NKANSA_227.jpg";
import HeroSection from "../components/HeroSection";
import ContactForm from "../components/TalkToUs";
import { Link } from "react-router-dom";

const HomePage = () => {
  const properties = [
    {
      name: "Daniels Court",
      description: "Luxury apartments at Community 18 .",
      image: LeroImage1,
    },
    {
      name: "Six Sigma 1",
      description: "Sophisticated residential development at Community 20.",
      image: Image3,
    },
    
    {
      name: "Peregrino-Place",
      description: "Private Luxury apartments with garden oasis views.",
      image: LeroImage3,
    },
  ];

  return (
    <>
      <HeroSection />

      {/* Video section */}
      <section className="py-12 px-6">
  <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-16 lg:px-24 gap-8">
    <div className="md:w-1/2 w-full flex justify-center">
      <iframe
        className="rounded-lg shadow-lg w-[90%] md:w-[80%] lg:w-[100%] h-auto aspect-video"
        src="https://www.youtube.com/embed/4f6aRj3_rME"
        title="Anowaa Gardens Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl font-bold mb-4">East Airport Zero Place</h2>
      <p className="text-lg text-gray-700 mb-4">
        East Airport Zero Place, a 4-bedroom house with an Outhouse. Gated community with
        24-hour security which has easy access to Airport, Palace Mall, Accra
        Mall, and Spintex Road.
        <div className="text-red-900">
          <br />
          $1000 / month Unfurnished
          <br />
          $2500/ month Fully furnished
          <br />
          $250 a day for 4 bedrooms Fully furnished
        </div>
      </p>
      <p className="text-gray-600 mb-6">
        <strong>Location:</strong> East Airport
      </p>
      <a
        href="https://wa.me/233243380128?text=Hello%2C%20I%27m%20interested%20in%20Anowaa%20Gardens."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#3fc7d8] text-white py-2 px-6 rounded hover:bg-blue-700 transition"
      >
        Learn More
      </a>
    </div>
  </div>
</section>


      {/* About Us Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-16 lg:px-20">
          <div className="md:w-1/2 order-2 md:order-1 mt-6 md:mt-0 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <h3 className="text-3xl font-bold mb-4">IT&rsquo;S WHERE YOU BELONG</h3>
            <p className="text-gray-700 mb-4 leading-relaxed px-">
              We are a luxury real estate development and management company.
              Our mission is to develop and invest in luxury properties. We aim
              to create value for homeowners and investors by designing
              innovative products and prioritizing our clients&apos; needs.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed px-1">
              Our vision is to become the leading Real Estate Developers in
              Africa and the world.
            </p>
            <Link
              to="/about"
              className="bg-[#3fc7d8] text-white py-2 px-6 rounded hover:bg-red-700 transition"
            >
              Learn More
            </Link>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 ">
            <img
              src={Image1}
              alt="Luxury Building"
              className="rounded-lg shadow-md w-full "
            />
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 md:px-16 lg:px-24">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Discover a Place You&rsquo;ll Love to Live
          </h2>
          <h3 className="text-3xl font-bold mb-6 text-center">
            Our Properties
          </h3>
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
              At Premium Star Realty, we understand the value of acquiring prime
              lands and developing them into quality and luxurious residential
              and commercial projects.
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
