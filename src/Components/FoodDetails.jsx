import { useEffect, useState } from "react";
import Styles from "./fooddetails.module.css";
import ItemList from "./ItemList";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "dc6961c6dc1944f993ad1d5c3a05fa53";
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={Styles.recipeCard}>
        <h1 className={Styles.recipeName}>{food.title}</h1>
        <img className={Styles.recipeImage} src={food.image} alt="Food image" />
        <div className={Styles.recipeDetails}>
          <span>
            <strong>&#x1F551; {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>&#x1F46A; Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? `Vegetarian` : `  Non-vegetarian`}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          &#x24;{" "}
          <span>
            <strong>{food.pricePerServing / 100} Per serving</strong>
          </span>
        </div>
        <h1>Ingredients</h1>
        <ItemList food={food} isLoading={isLoading}></ItemList>
        <h2>Instructions</h2>
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
      </div>
    </div>
  );
}
