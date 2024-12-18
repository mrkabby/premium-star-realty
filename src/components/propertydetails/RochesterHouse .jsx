import React, { useState } from "react";
import Image1 from "../../assets/Rochester House Community 20/NKANSA_53.jpg";
import Image2 from "../../assets/Rochester House Community 20/NKANSA_54.jpg";
import Image3 from "../../assets/Rochester House Community 20/NKANSA_55.jpg";
import Image4 from "../../assets/Rochester House Community 20/NKANSA_56.jpg";
import Image5 from "../../assets/Rochester House Community 20/NKANSA_57.jpg";
import Image6 from "../../assets/Rochester House Community 20/NKANSA_58.jpg";
// import VideoFile from "../../assets/videos/property-tour.mp4";

const RochesterHouse = ({
  title = "Rochester House",
  description = "Spacious 3 Bedrooms | Modern Kitchen | 2 Bathrooms | Security",
  location = "Community 18, Accra",
  rooms = 3,
  bathrooms = 2,
  kitchen = 1,
  amenities = ["CCTV", "Car Park", "24/7 Security"],
  shortStayPrice = 100, // Price per night
  longStayPrice = 2500, // Monthly price
}) => {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];

  // Form state
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    duration: 0,
    stayType: "short", // 'short' for short stay, 'long' for long stay
  });
  const [totalPrice, setTotalPrice] = useState(0);

  // Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Calculate Price
  const calculatePrice = () => {
    const price =
      formData.stayType === "short"
        ? formData.duration * shortStayPrice
        : formData.duration * longStayPrice;
    setTotalPrice(price);
  };

  return (
    <div>
      {/* Title and Property Info */}
      <section className="py-12 bg-[#3fc7d8] text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-4 text-lg text-white">{description}</p>
        <p className="mt-4 text-white">
          Rooms: {rooms} | Bathrooms: {bathrooms} | Kitchen: {kitchen}
        </p>
        <p className="mt-2 text-white">Amenities: {amenities.join(" | ")}</p>
        <p className="mt-4 text-sm text-white">Location: {location}</p>
      </section>

      {/* Pricing */}
      <section className="py-6 px-6 bg-white">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <div className="text-center bg-gray-200 rounded-lg p-6 shadow-md w-full sm:w-1/3">
            <h3 className="text-xl font-semibold text-[#7B1C27] mb-2">Short Stay</h3>
            <p className="text-lg text-gray-700">${shortStayPrice}/night</p>
          </div>
          <div className="text-center bg-gray-100 rounded-lg p-6 shadow-md w-full sm:w-1/3">
            <h3 className="text-xl font-semibold text-[#7B1C27] mb-2">Long Stay</h3>
            <p className="text-lg text-gray-700">${longStayPrice}/month</p>
          </div>
        </div>
        <div className="text-center mt-6">
          <button
            onClick={() => setShowForm(true)}
            className="bg-[#7B1C27] text-white py-2 px-6 rounded hover:bg-[#5a1319] transition"
          >
            Book Now
          </button>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold text-[#7B1C27] mb-6 text-center">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${title} ${index + 1}`}
              className="rounded-lg shadow-lg"
            />
          ))}
        </div>
      </section>

      {/* Video Tour */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold text-[#7B1C27] mb-6 text-center">Video Tour</h2>
        <div className="aspect-w-16 aspect-h-9">
          <video controls className="rounded-lg shadow-lg w-full">
            <source src="" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Booking Form */}
      {showForm && (
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center text-[#7B1C27] mb-6">Book Your Stay</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                calculatePrice();
              }}
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="p-3 rounded border border-gray-300 w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="p-3 rounded border border-gray-300 w-full"
                required
              />
              <div className="flex gap-4">
                <select
                  name="stayType"
                  value={formData.stayType}
                  onChange={handleInputChange}
                  className="p-3 rounded border border-gray-300 w-full"
                >
                  <option value="short">Short Stay</option>
                  <option value="long">Long Stay</option>
                </select>
                <input
                  type="number"
                  name="duration"
                  placeholder="Duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="p-3 rounded border border-gray-300 w-full"
                  min="1"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-[#3fc7d8] text-white rounded hover:bg-[#7B1C27] transition w-full"
              >
                Calculate Price
              </button>
            </form>
            {totalPrice > 0 && (
              <p className="mt-4 text-center text-lg font-semibold text-gray-700">
                Total Price: ${totalPrice}
              </p>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default RochesterHouse;
