import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";

import ContactHeroImage from "../assets/highlights/MNKK_190.jpg"

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
          Spintex Kotobabi, Premium Star Quality Group, Accra
            </p>
          </div>

          {/* Phone */}
          <div>
            <h3 className="text-lg font-semibold text-[#7B1C27]">CALL</h3>
            <p className="text-gray-600 mt-2">+233 24 338 0128</p>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-lg font-semibold text-[#7B1C27]">EMAIL</h3>
            <p className="text-gray-600 mt-2">premiumstarrealty@gmail.com</p>
          </div>
        </div>
      </section>
{/* Social Media Section */}
<section className="py-6 bg-gray-100 text-center">
  <h3 className="text-lg font-semibold text-gray-700 mb-4">
    Stay in touch with us
  </h3>
  <div className="flex justify-center space-x-4">
    <a href="https://web.facebook.com/profile.php?id=61571593477120" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebook} className="text-2xl text-blue-600 hover:text-blue-700" />
    </a>
    <a href="https://www.instagram.com/premiumstarrealty/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} className="text-2xl text-black hover:text-gray-700" />
    </a>
    <a href="https://wa.me/233243380128" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faWhatsapp} className="text-2xl text-green-500 hover:text-green-600" />
    </a>
    
    <a href="https://www.youtube.com/@PremiumStarRealty" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faYoutube} className="text-2xl text-red-500 hover:text-red-800" />
    </a>
  </div>
</section>


     
    </div>
  );
};

export default ContactUs;
