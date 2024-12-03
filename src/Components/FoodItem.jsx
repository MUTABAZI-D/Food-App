import Styles from "./fooditem.module.css";
export default function FoodItem({ food, setFoodId }) {
  const handleClick = () => {
    setFoodId(food.id);
  };
  return (
    <div className="rounded-lg overflow-hidden my-5 md:mx-5 mx-4 shadow-xl md:w-[300px] w-[170px]">
      <img className={Styles.itemImage} src={food.image} alt="food image" />
      <div className={Styles.itemContent}>
        <p className="md:text-lg text-sm font-semibold text-[#393e46]">
          {food.title}
        </p>
      </div>
      <div className={Styles.buttonContainer}>
        <button
          onClick={handleClick}
          style={{
            backgroundColor: "#29bb89",
            border: "none",
            color: "white",
            cursor: "pointer",
            borderRadius: "5px",
          }}
          className="md:p-3 md:py-2 py-1 text-xs md:text-sm font-semibold px-2 mt-2"
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
