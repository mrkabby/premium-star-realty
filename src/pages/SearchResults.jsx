// ...existing code...
import { useLocation } from "react-router-dom";

const properties = [
  { id: 1, title: "Peregrino Place", location: "Ayimensah, Kweiman", description: "A beautiful destination for the perfect honeymoon or weekend getaway." },
  { id: 2, title: "Luxury House", location: "Accra Community 18", description: "Newly built luxury 4-bedroom houses for sale at Spintex Community 18." },
  { id: 3, title: "Rochester House", location: "Accra community 20", description: "A harmonious blend of contemporary design and functional living spaces." },
  { id: 4, title: "Six Zigma Court", location: "Accra Community 18", description: "State-of-the-art apartments offering a blend of modernity and elegance." },
  { id: 5, title: "The Daniel Duplex", location: "Accra community 18", description: "Luxury townhouses nestled in a serene environment with top-notch amenities." },
  

];

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("query")?.toLowerCase() || "";

  // Filter properties based on search term
  const filteredProperties = properties.filter(
    (property) =>
      property.title.toLowerCase().includes(searchTerm) ||
      property.location.toLowerCase().includes(searchTerm) ||
      property.description.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-4">Search Results</h1>
      <p className="text-gray-600 mb-4">Results for: <strong>{searchTerm}</strong></p>

      {filteredProperties.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <li key={property.id} className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{property.title}</h2>
              <p className="text-gray-600">{property.location}</p>
              <p className="text-sm text-gray-500">{property.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No properties match your search term.</p>
      )}
    </div>
  );
};

export default SearchResults;
