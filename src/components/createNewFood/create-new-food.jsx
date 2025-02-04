import { useState } from "react";
import { Button } from "../button/button";


export const CreateNewFood = ({ onFoodCreated }) => {

const [inputFood, setInputFood] = useState({});

    function addNewFood(event) {
        let inputValue = event.target.value;
        let inputName = event.target.name;

        setInputFood(old => {
            let copy = {...old};
            copy[inputName] = inputValue;

            return copy;
        })
    };

    const onCreate = () => {
        onFoodCreated();
    }

return <>
<label>Название еды<input name="title" value={inputFood.name} onChange={addNewFood}/></label>
<label>Белки<input type="number" name = "proteins" value={inputFood.proteins} onChange={addNewFood}/></label>
<label>Жиры<input type="number" name = "fats" value={inputFood.fats} onChange={addNewFood}/></label>
<label>Углеводы<input type="number" name = "carbohydrates" value={inputFood.carbohydrates} onChange={addNewFood}/></label>
<p> Итого {inputFood.proteins * 4 + inputFood.carbohydrates * 4 + inputFood.fats * 9} калорий на 100гр</p>
<Button onClick={onCreate}>Добавить</Button>
</>

};