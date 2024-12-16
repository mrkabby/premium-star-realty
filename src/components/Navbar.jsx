import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"; // Replace with your actual logo path

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Perform search logic here
      alert(`Searching for: ${searchQuery}`);
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="Premium Star Realty Logo"
            className="h-8 w-auto"
          />
          <span className="text-lg font-bold text-[#3fc7d8]">PREMIUM STAR REALTY</span>
        </div>

        {/* Navigation Links */}
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
              to="/how-to-buy"
              className="hover:underline hover:text-[#7B1C27] transition-colors duration-200"
            >
              How to Buy
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

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-gray-600 focus:outline-none"
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
                d="M11 17a6 6 0 100-12 6 6 0 000 12zm9 4l-3-3"
              />
            </svg>
          </button>

          {/* Hamburger Menu */}
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
        </div>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <ul className="lg:hidden bg-white shadow-md rounded mt-2 space-y-4 px-6 py-4 text-gray-700">
          <li>
            <Link
              to="/"
              className="block hover:underline hover:text-[#7B1C27] transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block hover:underline hover:text-[#7B1C27] transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/properties"
              className="block hover:underline hover:text-[#7B1C27] transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Properties
            </Link>
          </li>
          
          <li>
            <Link
              to="/how-to-buy"
              className="block hover:underline hover:text-[#7B1C27] transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              How to Buy
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block hover:underline hover:text-[#7B1C27] transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="px-6 py-4 bg-gray-100 flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            className="flex-grow p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
