import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

const BookingPage = () => {
  const location = useLocation();
  const property = location.state?.property || {};

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const templateParams = {
      property_title: property.title,
      property_description: property.description,
      property_location: property.location,
      property_price: property.price,
      user_name: formData.fullName,
      user_email: formData.email,
      user_phone: formData.phone,
      user_message: formData.message,
    };
  
    try {
      // Send email to the property owner
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_OWNER,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
  
      // Send confirmation email to the user
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER,
        {
          user_name: formData.fullName,
          user_email: formData.email,
          property_title: property.title,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
  
      alert("Booking successful! Check your email for confirmation.");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send booking. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-12 px-6">
      {/* Property Details */}
      <h1 className="text-4xl font-bold text-[#3fc7d8] mb-6 text-center">
        Booking for {property.title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Property Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Property Details</h2>
          <p className="text-gray-700 mb-2">
            <strong>Description:</strong> {property.description}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Location:</strong> {property.location}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Price:</strong> {property.price}
          </p>
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-64 object-cover rounded-lg mt-4 shadow-md"
          />
        </div>

        {/* Booking Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#7B1C27] outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#7B1C27] outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#7B1C27] outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1">
                Additional Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter any additional message"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#3fc7d8] outline-none"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className={`w-full py-2 rounded-md text-white font-bold transition ${
                isSubmitting
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-[#3fc7d8] hover:bg-[#3fc7d8]"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Booking"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
