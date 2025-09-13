import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <form
      className="flex items-center bg-gray-100 rounded-lg shadow-md px-4 py-2"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for properties..."
        className="flex-grow bg-transparent outline-none text-gray-700 px-2"
      />
      <button
        type="submit"
        className="bg-[#7B1C27] text-white px-4 py-2 rounded-lg hover:bg-[#5a121b] transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
