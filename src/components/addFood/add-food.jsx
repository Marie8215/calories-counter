import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToList } from "../../redux/entities/eatenFood/add-to-list";

function AddFood({ food, onFoodAdded }) {
  const [weight, setWeight] = useState(0);

  let currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();

  function addFood() {
    if (weight === 0) {
      return;
    }

    const newFood = {
      time: `${hours}:${minutes}`,
      dish: food.name,
      weight: weight,
      calories: food.calories,
      proteins: food.proteins,
      fats: food.fats,
      carbohydrates: food.carbohydrates,
      id: food.id
    };

    onFoodAdded(newFood);
  }

  return (
    <>
      <h2>{food.name}</h2>
      <p>Белков {food.proteins} на 100 г</p>
      <p>Жиров {food.fats} на 100 г</p>
      <p>Углеводов {food.carbohydrates} на 100 г</p>
      <p>ККалорий {food.calories} на 100 г</p>
      <input
        placeholder="Введите вес"
        onChange={(e) => setWeight(e.target.value)}
      />{" "}
      <p>{`Итого: ${Math.floor((food.calories / 100) * weight)} ККал`}</p>
      <button onClick={addFood}>Добавить</button>
    </>
  );
}

export default AddFood;
