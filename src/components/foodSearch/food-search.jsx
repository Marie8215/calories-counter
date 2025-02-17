import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFoodByName } from "../../redux/entities/modal/modal-slice";
import { getFoodList } from "../../redux/entities/modal/get-food-list";

export const FoodSearch = ({ onFoodSelected }) => {
  const [searchString, setSearchString] = useState("");

  const dispatch = useDispatch();

  let foodOnSearch = useSelector(selectFoodByName);

  useEffect(() => {
    dispatch(getFoodList(searchString));
  }, [searchString]);

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
