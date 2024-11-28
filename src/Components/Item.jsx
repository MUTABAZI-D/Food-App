import Styles from "./item.module.css";
export default function Item({ item }) {
  return (
    <>
      <div className={Styles.itemContainer}>
        <div className={Styles.imageContainer}>
          {" "}
          <img
            className={Styles.image}
            src={`https://spoonacular.com/cdn/ingredients_100X100` + item.image}
            alt="ingredient image"
          />
        </div>
        <div className={Styles.nameContainer}>
          <div className={Styles.name}>{item.name}</div>
          <div className={Styles.amount}>
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </>
  );
}
