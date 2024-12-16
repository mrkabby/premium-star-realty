import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1abbb9] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <img
            src={Logo}
            alt="Logo"
            className="h-44 w-auto px-5" // Adjusted size: h-16 for a larger logo
          />
        </div>

        {/* Address Section */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h3 className="text-lg font-semibold">ADDRESS</h3>
          <p className="text-sm ">
            House No. 14, First Close, <br />
            Airport Residential, Accra
          </p>
          <p className="text-sm ">+233 277 890 000</p>
          <p className="text-sm ">sales@premiumstarrealty.com</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h3 className="text-lg font-semibold">NAVIGATE</h3>
          <ul className="space-y-2 text-sm ">
            <li>Britton’s Residence</li>
            <li>One Elm</li>
            <li>Pristine Gardens</li>
            <li>233 Boulevard</li>
            <li>Legacy Square</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-lg font-semibold pl-5">JOIN OUR NEWSLETTER</h3>
          <form className="flex flex-col space-y-4 w-full max-w-xs px-5">
            <input
              type="text"
              placeholder="First name"
              className="w-full p-2 rounded bg-white text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 rounded bg-white text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="p-2 rounded bg-blue-600 hover:bg-blue-700 transition text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-8 text-center">
        <div className="flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-white transition"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-white transition"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-white transition"
          >
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-white transition"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-white transition"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
