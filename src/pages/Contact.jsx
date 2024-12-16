import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

import ContactHeroImage from "../assets/shelf.jpg"

const ContactUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:`url(${ContactHeroImage})`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="z-10 text-white text-4xl md:text-6xl font-bold">
          Contact Us
        </h1>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-3xl font-bold text-[#7B1C27] mb-4">Get in touch</h2>
        <p className="text-gray-700 mb-8">
        Whether you have a question, need advice, or want to book a viewing, our team is here to help. Get in touch today and start your real estate journey with Premium Star Realty.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold text-[#7B1C27]">ADDRESS</h3>
            <p className="text-gray-600 mt-2">
              House No. 14, First Close, Airport Residential, Accra
            </p>
          </div>

          {/* Phone */}
          <div>
            <h3 className="text-lg font-semibold text-[#7B1C27]">CALL</h3>
            <p className="text-gray-600 mt-2">+233 27 789 0000</p>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-lg font-semibold text-[#7B1C27]">EMAIL</h3>
            <p className="text-gray-600 mt-2">info@quaorealty.com</p>
          </div>
        </div>
      </section>
{/* Social Media Section */}
<section className="py-6 bg-gray-100 text-center">
  <h3 className="text-lg font-semibold text-gray-700 mb-4">
    Stay in touch with us
  </h3>
  <div className="flex justify-center space-x-4">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebook} className="text-2xl text-blue-600 hover:text-blue-700" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} className="text-2xl text-black hover:text-gray-700" />
    </a>
    <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faWhatsapp} className="text-2xl text-green-500 hover:text-green-600" />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-blue-800 hover:text-blue-900" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTwitter} className="text-2xl text-blue-400 hover:text-blue-500" />
    </a>
  </div>
</section>


     
    </div>
  );
};

export default ContactUs;
