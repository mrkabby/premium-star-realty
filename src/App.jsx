// ...existing code...
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Properties from "../src/pages/Properties";
import ContactUs from "../src/pages/Contact";
import Footer from "../src/components/Footer";
import HowToBuy from "./components/HowToBuy";

import SearchResults from "./pages/SearchResults";

import SixZigmaCourt from "./components/propertydetails/SixZigmaCourt";
import TheDanielDuplex from "./components/propertydetails/TheDanielDuplex";
import PeregrinoPlace from "./components/propertydetails/Peregrino";
import LuxuryHouse from "./components/propertydetails/LuxuryHouse";
import BookingPage from "./pages/BookingPage";
import TownHouse from "./components/propertydetails/TownHouse";
import AspectCourt from "./components/propertydetails/AspectCourt";
import Community20 from "./components/propertydetails/Community20";
import EastAirport from "./components/propertydetails/EastAirport";
import Community14 from "./components/propertydetails/Community14";
import InvestmentProperty from "./components/propertydetails/InvestmentProperty";
import ChristmasBonanza from "./components/propertydetails/ChristmasBonanza";
import HostelOyibi from "./components/propertydetails/HostelOyibi";

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

            <Route
              path="/properties/Six-Zigma-Court"
              element={<SixZigmaCourt />}
            />
            <Route
              path="/properties/The-Daniel-Duplex"
              element={<TheDanielDuplex />}
            />
            <Route
              path="/properties/Peregrino-Place"
              element={<PeregrinoPlace />}
            />
            <Route path="/properties/Luxury-House" element={<LuxuryHouse />} />
            <Route path="/properties/Town-House" element={<TownHouse />} />
            <Route path="/properties/Aspect-Court" element={<AspectCourt />} />
            <Route path="/properties/Community-20" element={<Community20 />} />
            <Route path="/properties/East-Airport" element={<EastAirport />} />
            <Route path="/properties/Community-14-3-Bed" element={<Community14 />} />
            <Route path="/properties/Adenta-4-Bedroom-Remodel" element={<InvestmentProperty />} />
            <Route path="/properties/Christmas-Bonanza" element={<ChristmasBonanza />} />
            <Route path="/properties/Hostel-Oyibi" element={<HostelOyibi />} />
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
