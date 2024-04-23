import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
    
  

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!query) {
      return;
    }

    try {
      const { data } = await axios.get(`
      https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);

      if (data.meals && data.meals.length > 0) {
        router.push(`/menus/${data.meals[0].idMeal}`);
      } else {
        alert("No recipe found. Please ty again");
      }
    } catch (error) {
      alert(error);
    }

    setQuery("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="hidden md:flex items-center justify-center text-black">
        <input
          type="text"
          placeholder="Search for a recipe"
          className="p-2 border border-gray-300 rounded-l-lg
            focus:outline-none focus:ring-2 focus:ring-restaurant-accent"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-restaurant-accent text-white p-3 rounded-r-lg
            focus:outline-none focus:ring-2 focus:ring-restaurant-accent hover:bg-opacity-75"
        >
          <FaSearch />
        </button>
      </div>
    </form>
  );
};
export default SearchBar;
