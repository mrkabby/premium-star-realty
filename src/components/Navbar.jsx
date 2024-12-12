import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../assets/logo.png"; // Ensure the correct file path

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="Premium Star Realty Logo"
            className="h-8 w-auto"
          />
          <span className="text-lg font-bold text-[#7B1C27]">PREMIUM STAR REALTY</span>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-gray-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links for Desktop */}
        <ul className="hidden lg:flex space-x-6 text-gray-700">
          <li>
            <Link
              to="/"
              className="hover:underline hover:text-[#7B1C27] transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:underline hover:text-[#7B1C27] transition-colors duration-200"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/properties"
              className="hover:underline hover:text-[#7B1C27] transition-colors duration-200"
            >
              Properties
            </Link>
          </li>
          <li>
            <Link
              to="/rentals"
              className="hover:underline hover:text-[#7B1C27] transition-colors duration-200"
            >
              Rentals
            </Link>
          </li>
          <li>
            <Link
              to="/how-to-buy"
              className="hover:underline hover:text-[#7B1C27] transition-colors duration-200"
            >
              How To Buy
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="hover:underline hover:text-[#7B1C27] transition-colors duration-200"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:underline hover:text-[#7B1C27] transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <ul className="lg:hidden bg-white shadow-md rounded mt-2 space-y-4 px-6 py-4 text-gray-700">
          <li>
            <Link
              to="/"
              className="block hover:underline hover:text-[#7B1C27] transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block hover:underline hover:text-[#7B1C27] transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/properties"
              className="block hover:underline hover:text-[#7B1C27] transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              Properties
            </Link>
          </li>
          <li>
            <Link
              to="/rentals"
              className="block hover:underline hover:text-[#7B1C27] transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              Rentals
            </Link>
          </li>
          <li>
            <Link
              to="/how-to-buy"
              className="block hover:underline hover:text-[#7B1C27] transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              How To Buy
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="block hover:underline hover:text-[#7B1C27] transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block hover:underline hover:text-[#7B1C27] transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
