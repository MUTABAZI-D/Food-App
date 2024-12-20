import { useEffect, useState } from "react";
import Styles from "./fooddetails.module.css";
import ItemList from "./ItemList";
import { motion } from "motion/react";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await response.json();
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className=" sm:p-3 md:p-5 p-4 shadow-xl rounded-lg text-[#393e46] col-span-2 sm:col-span-1  sm:max-w-full max-w-[220px] ml-10 mr-4 self-start"
    >
      <h1 className="text-xl sm:text-2xl mb-2">{food.title}</h1>
      <img className={Styles.recipeImage} src={food.image} alt="Food image" />
      <div className={Styles.recipeDetails}>
        <span className="text-xs sm:text-sm md:text-lg font-semibold">
          &#x1F551; {food.readyInMinutes} Minutes
        </span>
        <span className="text-xs sm:text-sm md:text-lg font-semibold">
          &#x1F46A; Serves {food.servings}
        </span>
        <span className="ml-1 sm:ml-0 text-xs sm:text-sm md:text-lg font-semibold">
          {food.vegetarian ? `Vegetarian` : `  Non-vegetarian`}
        </span>
        <span className="text-xs sm:text-sm md:text-lg font-semibold">
          {food.vegan ? "Vegan" : ""}
        </span>
      </div>
      <div>
        <span className="text-xs sm:text-sm md:text-lg font-semibold">
          &#x24; {food.pricePerServing / 100} Per serving
        </span>
      </div>
      <h1>Ingredients</h1>
      <ItemList food={food} isLoading={isLoading}></ItemList>
      <h2 className="mt-5 font-bold">Instructions</h2>
      <div className={Styles.recipeInstructions}>
        <ol>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step, index) => (
              <li key={index}>{step.step}</li>
            ))
          )}
        </ol>
      </div>
    </motion.div>
  );
}
