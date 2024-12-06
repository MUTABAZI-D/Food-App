import { useState } from "react";
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";
import Nav from "./Components/Nav";
import Styles from "./app.module.css";
import FoodDetails from "./Components/FoodDetails";
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("656329");
  return (
    <div>
      <Nav></Nav>
      <Search foodData={foodData} setFoodData={setFoodData}></Search>
      <div className="grid grid-cols-3 md:grid-cols-2 md:mx-5 md:gap-5">
        <FoodList setFoodId={setFoodId} foodData={foodData} />
        <FoodDetails foodId={foodId} />
      </div>
    </div>
  );
}

export default App;
