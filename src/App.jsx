import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "../src/components/Navbar"; 
import Home from "../src/pages/Home"; 
import About from "../src/pages/About"; 
import Properties from "../src/pages/Properties"; 
import ContactUs from "../src/pages/Contact"; 
import Footer from "../src/components/Footer"; 
import HowToBuy from "./components/HowToBuy";
import PristineGardens from "./components/propertydetails/PristineGardens";
import LegacyGardens from "./components/propertydetails/LegacyGardens";
import BristonsResidence from "./components/propertydetails/BristonsResidence";
import SearchResults from "./pages/SearchResults";


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
        <Route path="/properties/pristine-gardens" element={<PristineGardens />} />
        <Route path="/properties/legacy-square" element={<LegacyGardens />} />
        <Route path="/properties/brittons-residence" element={<BristonsResidence />} />
        <Route path="/search" element={<SearchResults />} />
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
