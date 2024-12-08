import { useEffect, useState } from "react";
import Styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";

const API_KEY = import.meta.env.VITE_API_KEY;

export default function Search({ setFoodData }) {
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(
        `${URL}?query=${query || "pizza"}&apiKey=${API_KEY}`
      );
      const data = await response.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={Styles.searchContainer}>
      <input
        placeholder="Search food..."
        className={Styles.input}
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
    </div>
  );
}
