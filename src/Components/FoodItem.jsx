import Styles from "./fooditem.module.css";
import { motion } from "motion/react";
export default function FoodItem({ food, setFoodId }) {
  const handleClick = () => {
    setFoodId(food.id);
  };
  return (
    <div className="rounded-lg overflow-hidden my-5 md:mx-5 mx-4 shadow-xl md:w-[300px] w-[120px]">
      <img className={Styles.itemImage} src={food.image} alt="food image" />
      <div className={Styles.itemContent}>
        <p className="md:text-lg text-xs font-semibold text-[#393e46]">
          {food.title}
        </p>
      </div>
      <div className={Styles.buttonContainer}>
        <motion.button
          whileTap={{ scale: 1.1, opacity: 0.5 }}
          onClick={handleClick}
          style={{
            backgroundColor: "#29bb89",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
          className="md:p-3 md:py-2 px-1 py-1 text-xs md:text-sm font-semibold md:px-2 mt-2 rounded-sm md:rounded-md"
        >
          View Recipe
        </motion.button>
      </div>
    </div>
  );
}
