export default function Item({ item }) {
  return (
    <div className="flex sm:p-2 p-1 sm:mt-12 mt-6 shadow-md rounded-lg">
      <div className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] rounded-lg">
        {" "}
        <img
          className="max-w-full h-auto rounded-2xl"
          src={`https://spoonacular.com/cdn/ingredients_100X100` + item.image}
          alt="ingredient image"
        />
      </div>
      <div className="sm:ml-12 ml-6">
        <div className="sm:text-lg font-bold text-md">{item.name}</div>
        <div className="font-bold mt-1 sm:mt-2">
          {item.amount} {item.unit}
        </div>
      </div>
    </div>
  );
}
