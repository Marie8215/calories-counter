import { createSlice } from "@reduxjs/toolkit";
import Calories from "../../../constants/calories-class";

const initialState = {
  eaten: {},
  dailyNorm: {
    calories: 2000,
    proteins: 40,
    fats: 100,
    carbohydrates: 200,
  },
  eatenPercent: {
    caloriesPercent: 0,
    carbohydratesPercent: 0,
    fatsPercent: 0,
    proteinsPercent: 0,
  },
  listOfEaten: [
    // { time: "14:15", dish: "Макароны", weight: "200", calories: "400" },
    // { time: "15:30", dish: "Салат", weight: "300", calories: "150" },
    // { time: "18:00", dish: "Курица", weight: "150", calories: "300" },
  ],
};

export const EatenFoodSlice = createSlice({
  name: "eatenFood",
  initialState,
  reducers: {
    addFood: (state, action) => {
      const { time, dish, weight, calories, proteins, fats, carbohydrates } =
        action.payload;

      state.listOfEaten.push(action.payload);

      const eaten = new Calories(
        state.eaten.calories,
        state.eaten.proteins,
        state.eaten.fats,
        state.eaten.carbohydrates
      );
      const newEaten = new Calories(
        calories,
        proteins,
        fats,
        carbohydrates
      ).perWeight(weight);
      eaten.add(newEaten);

      const eatenData = {
        calories: eaten.calories,
        proteins: eaten.proteins,
        fats: eaten.fats,
        carbohydrates: eaten.carbohydrates,
      };

      state.eaten = eatenData;

      state.eatenPercent = {
        caloriesPercent:
          (state.eaten.calories / state.dailyNorm.calories) * 100,
        proteinsPercent:
          (state.eaten.proteins / state.dailyNorm.proteins) * 100,
        fatsPercent: (state.eaten.fats / state.dailyNorm.fats) * 100,
        carbohydratesPercent:
          (state.eaten.carbohydrates / state.dailyNorm.carbohydrates) * 100,
      };

      return state;
    },
  },
  selectors: {
    selectEatenPercent: (state) => state.eatenPercent,
    selectListOfEaten: (state) => state.listOfEaten,
  },
});

export const { selectEatenPercent, selectListOfEaten } =
  EatenFoodSlice.selectors;
export const { addFood } = EatenFoodSlice.actions;
export default EatenFoodSlice.reducer;
