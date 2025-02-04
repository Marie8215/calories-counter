import { useState } from "react";

function AddFood ({food, onFoodAdded}) {

    const [weight, setWeight] = useState(0)

    function addFood() {

        if (weight === 0){
            return;
        }

        onFoodAdded()

    }

    return <>
        <h2>{food.name}</h2>
        <p>Белков {food.proteins} на 100 г</p>
        <p>Жиров {food.fats} на 100 г</p>
        <p>Углеводов {food.carbohydrates} на 100 г</p>
        <p>ККалорий {food.calories} на 100 г</p>
        <input placeholder="Введите вес" onChange={e => setWeight(e.target.value)} г/>

        <p>{`Итого: ${Math.floor(food.calories / 100 * weight)} ККал`}</p>
        <button onClick={addFood}>Добавить</button>
    </>
};

export default AddFood;