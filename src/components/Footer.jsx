import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,

  faYoutube,
 
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text- py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start space-y-4 ">
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
            Spintex Kotobai, <br />
            Premuim Star Quality Group, Accra
          </p>
          <p className="text-sm ">+233 24 338 0128</p>
          <p className="text-sm ">premiumstarrealty@gmail.com</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h3 className="text-lg font-semibold">NAVIGATE</h3>
          <ul className="space-y-2 text-sm ">
          <li>
          <Link
            to="/properties/The-Daniel-Duplex"
            className="hover:text-[#3fc7d8] transition-colors"
          >
            The Daniel Duplex
          </Link>
        </li>
        <li>
          <Link
            to="/properties/Six-Zigma-Court"
            className="hover:text-[#3fc7d8] transition-colors"
          >
            Six Zigma Court
          </Link>
        </li>
        <li>
          <Link
            to="/properties/Rochester-House"
            className="hover:text-[#3fc7d8] transition-colors"
          >
            Rochester House
          </Link>
        </li>
        <li>
          <Link
            to="/properties/Peregrino-Place"
            className="hover:text-[#3fc7d8] transition-colors"
          >
            Peregrino Place
          </Link>
        </li>
        <li>
          <Link
            to="/properties/Luxury-House"
            className="hover:text-[#3fc7d8] transition-colors"
          >
            Luxury House
          </Link>
        </li>
        <li>
          <Link
            to="/properties/Town-House"
            className="hover:text-[#3fc7d8] transition-colors"
          >
            Town House
          </Link>
        </li>
        <li>
          <Link
            to="/properties/Community-20"
            className="hover:text-[#3fc7d8] transition-colors"
          >
            Community 20 Residence
          </Link>
        </li>
        <li>
          <Link
            to="/properties/East-Airport"
            className="hover:text-[#3fc7d8] transition-colors"
          >
            East Airport Villa
          </Link>
        </li>
          </ul>
        </div>

        
        
      </div>

      {/* Social Media Icons */}
      <div className="mt-8 text-center">
        <div className="flex justify-center space-x-6">
          <a
            href="https://web.facebook.com/profile.php?id=61571593477120"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-[#3fc7d8] transition"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          
          <a
            href="https://www.youtube.com/@PremiumStarRealty"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-[#3fc7d8] transition"
          >
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </a>
         
          <a
            href="https://www.instagram.com/premiumstarrealty/"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-[#3fc7d8] transition"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
