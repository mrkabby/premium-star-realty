// ...existing code...
import { useNavigate } from "react-router-dom";

import DanImage1 from "../assets/highlights/MNKK_102.jpg";
import PevaImage2 from "../assets/Peva/NKANSA_52.jpg";
import PereImage from "../assets/Pregrino/NKANSA_227.jpg";
import Com18Image from "../assets/Community18/Outside3.jpg";
import AspectCourtImage from "../assets/AspectCourt/outside.jpg";
import AyimensahImage from "../assets/AyiMensah/road2.jpg";
import Community20Image from "../assets/Community18/Outside1.jpg";
import EastAirportImage from "../assets/highlights/MNKK_180.jpg";

const Properties = () => {
  const navigate = useNavigate();

  const properties = [
    {
      id: "The-Daniel-Duplex",
      image: DanImage1,
      title: "The Daniel Duplex",
      description:
        "Luxury townhouses nestled in a serene environment with top-notch amenities.",
      location: "Community 18, Accra",
      price: "$50",
      type: "For Rent",
    },
    {
      id: "Six-Zigma-Court",
      image: PevaImage2,
      title: "Six Zigma Court",
      description:
        "State-of-the-art apartments offering a blend of modernity and elegance.",
      location: "Community 20, Accra",
      price: "$70",
      type: "For Rent",
    },
    
     
    {
      id: "Peregrino-Place",
      image: PereImage,
      title: "Peregrino Place",
      description:
        "A beautiful destination for the perfect honeymoon or weekend getaway.",
      location: "Ayimensah, Kweiman",
      price: "$150",
      type: "For Rent",
    },
    {
      id: "Town-House",
      image: AyimensahImage,
      title: "2 bedroom Townhouse",
      description:
        "2 bedroom Townhouse at Ayi Mensah, Oyarifa Park",
      location: "Ayi Mensah, Oyarifa Park",
      price: "$150",
      type: "For Rent",
    },
    {
      id: "Luxury-House",
      image: Com18Image,
      title: "Luxury House",
      description:
        "Newly built luxury 4-bedroom houses for sale at Spintex Community 18.",
      location: "Community 18",
      price: "$250,000",
      type: "For Sale",
    },
    {
      id: "Aspect-Court",
      image: AspectCourtImage,
      title: "Aspect Court",
      description:
        "Fully furnished luxury 3-bedroom houses for rent at Cantoments.",
      location: "Cantoments close to the US embassy",
      price: "$300",
      type: "For Rent",
    },
    {
      id: "Community-20",
      image: Community20Image,
      title: "Community 20 Residence",
      description:
        "Modern 3-bedroom house with spacious living area and serene environment.",
      location: "Community 20, Accra",
      price: "$180,000",
      type: "For Sale",
    },
    {
      id: "East-Airport",
      image: EastAirportImage,
      title: "East Airport Villa",
      description:
        "Luxury 5-bedroom villa with pool, garden, and top-notch security in East Airport.",
      location: "East Airport, Accra",
      price: "$350,000",
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
                  📍 {property.location}
                </p>
                <p className="mt-4 text-lg font-bold text-[#7B1C27]">
                  {property.price}
                </p>
                <button
                  className={`mt-4 px-6 py-2 rounded text-white font-semibold transition ${
                    property.type === "For Sale"
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                  onClick={() =>
                    navigate(`/booking/${property.id}`, {
                      state: { property },
                    })
                  }
                >
                  {property.type === "For Sale" ? "Buy Now" : "Rent Now"}
                </button>
              </div>
              <button
                className="absolute bottom-4 right-4 px-4 py-2 bg-[#7B1C27] text-white text-sm font-bold rounded  group-hover:opacity-100 transition"
                onClick={() => navigate(`/properties/${property.id}`)}
              >
                View
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-[#3fc7d8] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to find your dream property?</h2>
        <p className="text-lg">
          Contact us today to learn more about our luxurious properties and investment opportunities.
        </p>
        <button
          className="mt-6 px-8 py-3 bg-white text-[#7B1C27] font-bold rounded hover:bg-gray-100 transition"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Properties;
