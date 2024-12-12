import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Changed to HashRouter
import Navbar from "../src/components/Navbar"; // Ensure correct paths
import Home from "../src/pages/Home"; // Ensure correct paths
import About from "../src/pages/About"; // Ensure correct paths
import Properties from "../src/pages/Properties"; // Ensure correct paths
import ContactUs from "../src/pages/Contact"; // Ensure correct paths
import Footer from "../src/components/Footer"; // Ensure correct paths
import HowToBuy from "./components/HowToBuy";

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
