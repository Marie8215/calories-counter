import { useState } from "react";
import { useSelector } from "react-redux";
import { selectFoodByName } from "../../redux/entities/modal/modal-slice.js";

export const FoodSearch = ({ onFoodSelected }) => {
  const [searchString, setSearchString] = useState("");
  const foodOnSearch = useSelector((state) =>
    selectFoodByName(state, searchString)
  );

  const handleInputChange = (event) => {
    const input = event.target.value;
    setSearchString(input);
  };

  return (
    <>
      <input
        type="text"
        value={searchString}
        onChange={handleInputChange}
        placeholder="Введите название продукта"
      />
      <ol>
        {foodOnSearch.map((food) => (
          <li key={food.name}>
            {food.name} - {food.calories} калорий, {food.proteins} белков,
            {food.fats} жиров, {food.carbohydrates} углеводов
            <button onClick={() => onFoodSelected(food)}>+</button>
          </li>
        ))}
      </ol>
    </>
  );
};
