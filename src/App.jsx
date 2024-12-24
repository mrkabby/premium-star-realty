import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "../src/components/Navbar"; 
import Home from "../src/pages/Home"; 
import About from "../src/pages/About"; 
import Properties from "../src/pages/Properties"; 
import ContactUs from "../src/pages/Contact"; 
import Footer from "../src/components/Footer"; 
import HowToBuy from "./components/HowToBuy";


import SearchResults from "./pages/SearchResults";
import RochesterHouse from "./components/propertydetails/RochesterHouse ";
import SixZigmaCourt from "./components/propertydetails/SixZigmaCourt";
import TheDanielDuplex from "./components/propertydetails/TheDanielDuplex";
import PeregrinoPlace from "./components/propertydetails/Peregrino";
import LuxuryHouse from "./components/propertydetails/LuxuryHouse";
import BookingPage from "./pages/BookingPage";


const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/properties" element={<Properties />} />
        <Route path="/properties/Rochester-House" element={<RochesterHouse />} />
        <Route path="/properties/Six-Zigma-Court" element={<SixZigmaCourt/>} />
        <Route path="/properties/The-Daniel-Duplex" element={<TheDanielDuplex />} />
        <Route path="/properties/Peregrino-Place" element={<PeregrinoPlace/>} />
        <Route path="/properties/Luxury-House" element={<LuxuryHouse/>} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/booking/:id" element={<BookingPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/how-to-buy" element={<HowToBuy />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
