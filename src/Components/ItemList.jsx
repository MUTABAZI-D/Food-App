import Item from "./Item";

export default function ItemList({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        food.extendedIngredients.map((item, index) => {
          return <Item item={item} key={index}></Item>;
        })
      )}
    </div>
  );
}
