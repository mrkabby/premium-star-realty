import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const mockProperties = [
  {
    id: 1,
    title: "Pristine Gardens",
    description: "Luxury townhouses with modern amenities.",
    location: "Sakumono, Accra",
  },
  {
    id: 2,
    title: "Legacy Square",
    description: "Modern apartments in Airport Residential.",
    location: "Airport Residential, Accra",
  },
  {
    id: 3,
    title: "Britton’s Residence",
    description: "Spacious homes with contemporary design.",
    location: "East Legon, Accra",
  },
];

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const [filteredResults, setFilteredResults] = useState([]);

  React.useEffect(() => {
    if (query) {
      const results = mockProperties.filter((property) =>
        Object.values(property)
          .join(" ")
          .toLowerCase()
          .includes(query.toLowerCase())
      );
      setFilteredResults(results);
    }
  }, [query]);

  return (
    <div className="py-12 px-6">
      <h1 className="text-2xl font-bold text-[#7B1C27] mb-6">
        Search Results for "{query}"
      </h1>
      {filteredResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResults.map((property) => (
            <div key={property.id} className="rounded-lg shadow-lg overflow-hidden">
              <div className="p-4 bg-white">
                <h3 className="text-xl font-bold text-[#7B1C27]">
                  {property.title}
                </h3>
                <p className="text-gray-600 mt-2">{property.description}</p>
                <p className="mt-4 text-sm text-gray-500">{property.location}</p>
                <button
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  onClick={() => alert(`Learn more about ${property.title}`)}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No results found for "{query}".</p>
      )}
    </div>
  );
};

export default SearchResults;
