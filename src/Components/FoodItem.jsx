import Styles from "./fooditem.module.css";
export default function FoodItem({ food, setFoodId }) {
  const handleClick = () => {
    setFoodId(food.id);
  };
  return (
    <div className={Styles.itemContainer}>
      <img className={Styles.itemImage} src={food.image} alt="food image" />
      <div className={Styles.itemContent}>
        <p className={Styles.itemName}>{food.title}</p>
      </div>
      <div className={Styles.buttonContainer}>
        <button onClick={handleClick} className={Styles.itemButton}>
          View Recipe
        </button>
      </div>
    </div>
  );
}
