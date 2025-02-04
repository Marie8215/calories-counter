import { Modal } from "antd";
import { FoodCard } from "../FoodCard/food-card.jsx";
import { Button } from "../button/button.jsx";
import { FoodSearch } from "../foodSearch/food-search.jsx";
import { useState } from "react";
import { CreateNewFood } from "../createNewFood/create-new-food.jsx";
import AddFood from "../addFood/add-food.jsx";

let mock = [
  { time: "14:15", dish: "Макароны", weight: "200", calories: "400" },
  { time: "15:30", dish: "Салат", weight: "300", calories: "150" },
  { time: "18:00", dish: "Курица", weight: "150", calories: "300" },
];
const foodMock = {
  name: "манго",
  calories: 60,
  protein: 0.8,
  fat: 0.4,
  carbohydrates: 15,
};

export const ListOfEaten = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState("FoodSearch");
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  let modalFoodSearch;
  if (activeModal == "FoodSearch") {
    modalFoodSearch = (
      <>
        <FoodSearch
          onFoodSelected={() => {
            setActiveModal("AddFood");
          }}
        />
        <Button
          onClick={() => {
            setActiveModal("CreateNewFood");
          }}
        >
          Создать новое блюдо
        </Button>
      </>
    );
  } else if (activeModal == "CreateNewFood") {
    modalFoodSearch = (
      <CreateNewFood
        onFoodCreated={() => {
          setActiveModal("FoodSearch");
        }}
      />
    );
  } else if (activeModal == "AddFood") {
    modalFoodSearch = (
      <AddFood
        food={foodMock}
        onFoodAdded={() => {
          handleCancel();
          setActiveModal("FoodSearch");
        }}
      />
    );
  }

  return (
    <div>
      <Button onClick={showModal}>Добавить прием пищи</Button>
      {mock.map((data, index) => (
        <FoodCard key={index} {...data} />
      ))}
      <Modal open={isModalOpen} onCancel={handleCancel}>
        {modalFoodSearch}
      </Modal>
    </div>
  );
};
