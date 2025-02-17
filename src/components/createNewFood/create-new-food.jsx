import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFood } from "../../redux/entities/modal/modal-slice.js";
import { Button } from "../button/button";
import styles from "./create-new-food.module.css";
import { createNewFood } from "../../redux/entities/modal/create-new-food.js";

export const CreateNewFood = ({ onFoodCreated }) => {
  const [inputFood, setInputFood] = useState({
    name: "",
    proteins: 0,
    fats: 0,
    carbohydrates: 0,
  });

  let countedCalories = inputFood.proteins * 4 + inputFood.carbohydrates * 4 + inputFood.fats * 9

  const dispatch = useDispatch();


  function addNewFood(event) {
    let inputValue = event.target.value;
    let inputName = event.target.name;

    setInputFood((old) => {
      let copy = { ...old };
      copy[inputName] = inputValue;

      return copy;
    });
  }

  const onCreate = () => {
    const newFood = {
      name: inputFood.name,
      calories:
        inputFood.proteins * 4 +
        inputFood.carbohydrates * 4 +
        inputFood.fats * 9,
      protein: inputFood.proteins,
      fat: inputFood.fats,
      carbohydrates: inputFood.carbohydrates,
    };

    dispatch(createNewFood({
      ...inputFood,
      calories: countedCalories
    }))
    onFoodCreated();
  };

  return (
    <div className={styles.newFoodForm}>
      <p className={styles.title}>Создать новый продукт</p>
      <label>
        <input
          className={styles.foodInput}
          name="name"
          value={inputFood.name}
          onChange={addNewFood}
        />
        Название еды
      </label>
      <label>
        <input
          className={styles.foodInput}
          type="number"
          name="proteins"
          value={inputFood.proteins}
          onChange={addNewFood}
        />
        Белки
      </label>
      <label>
        <input
          className={styles.foodInput}
          type="number"
          name="fats"
          value={inputFood.fats}
          onChange={addNewFood}
        />
        Жиры
      </label>
      <label>
        <input
          className={styles.foodInput}
          type="number"
          name="carbohydrates"
          value={inputFood.carbohydrates}
          onChange={addNewFood}
        />
        Углеводы
      </label>
      <p>
        {" "}
        Итого{" "}
        {countedCalories}{" "}
        калорий на 100гр
      </p>
      <Button onClick={onCreate}>Добавить</Button>
    </div>
  );
};
