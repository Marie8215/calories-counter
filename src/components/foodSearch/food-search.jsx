import { useState } from "react";
import { Button } from "../button/button.jsx";
import { Modal } from "antd";
import { CreateNewFood } from "../createNewFood/create-new-food.jsx";

const foodMock = [
  { name: "манго", calories: 60, protein: 0.8, fat: 0.4, carbohydrates: 15 },
  {
    name: "мороженое",
    calories: 207,
    protein: 3.5,
    fat: 11,
    carbohydrates: 24,
  },
  {
    name: "макароны",
    calories: 158,
    protein: 5.8,
    fat: 1.1,
    carbohydrates: 31,
  },
];

export const FoodSearch = ({onFoodSelected}) => {
  const [input, setInput] = useState("");
  const [filteredFood, setFilteredFood] = useState(foodMock);

  const handleInputChange = (event) => {
    const input = event.target.value;
    setInput(input);

    const filtered = foodMock.filter((food) =>
      food.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredFood(filtered);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Введите название продукта"
      />
      <ol>
        {filteredFood.map((food) => (
          <li key={food.name}>
            {food.name} - {food.calories} калорий, {food.protein} белков,
            {food.fat} жиров, {food.carbohydrates} углеводов
            <button onClick={onFoodSelected}>+</button>
          </li>
        ))}
      </ol>
      
  
    </>
  );
};
