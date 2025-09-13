import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Search from "../components/Search"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
          <li><Link to="/" className="hover:underline hover:text-[#7B1C27] transition-colors duration-200">Home</Link></li>
          <li><Link to="/about" className="hover:underline hover:text-[#7B1C27] transition-colors duration-200">About Us</Link></li>
          <li><Link to="/properties" className="hover:underline hover:text-[#7B1C27] transition-colors duration-200">Properties</Link></li>
          <li><Link to="/how-to-buy" className="hover:underline hover:text-[#7B1C27] transition-colors duration-200">How to Buy</Link></li>
          <li><Link to="/contact" className="hover:underline hover:text-[#7B1C27] transition-colors duration-200">Contact</Link></li>
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
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/properties" onClick={() => setIsMenuOpen(false)}>Properties</Link></li>
          <li><Link to="/how-to-buy" onClick={() => setIsMenuOpen(false)}>How to Buy</Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
        </ul>
      )}

      {/* Search Component */}
      {isSearchOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
          <Search onClose={() => setIsSearchOpen(false)} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
