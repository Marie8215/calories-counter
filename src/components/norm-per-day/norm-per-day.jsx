import { Flex, Progress } from "antd";
import { useState } from "react";
import Calories from "../../constants/calories-class";


export const NormPerDay = () => {

  const [eatenCalories, setEatenCalories] = useState(
    {
      eaten: new Calories(),
      dailyNorm: new Calories(),
  
      getPercent: function() {
        return {
          caloriesPercent: Math.floor(this.eaten.calories * (100 / this.dailyNorm.calories)),
          carbohydratesPercent: Math.floor(this.eaten.carbohydrates * 100 / this.dailyNorm.carbohydrates),
          fatsPercent: Math.floor(this.eaten.fats * 100 / this.dailyNorm.fats),
          proteinsPercent: Math.floor(this.eaten.proteins * 100 / this.proteins)
        }
      }
    }
  )
  
  let caloriesInPercent = eatenCalories.getPercent();

  return (
    <Flex>
      <div>Белки</div>
      <Progress percent={caloriesInPercent.proteinsPercent} />
      <div>Жиры</div>
      <Progress percent={caloriesInPercent.fatsPercent} />
      <div>Углеводы</div>
      <Progress percent={caloriesInPercent.carbohydratesPercent} />
      <div>Калории</div>
      <Progress percent={caloriesInPercent.caloriesPercent} />

 
    </Flex>
  );
};
