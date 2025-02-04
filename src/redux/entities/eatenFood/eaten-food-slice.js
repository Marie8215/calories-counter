import { createSlice } from "@reduxjs/toolkit";
import Calories from "../../../constants/calories-class";

const initialState = {
  eaten: new Calories(),
  dailyNorm: new Calories(),
  eatenPercent: {
    caloriesPercent: 10,
    carbohydratesPercent: 40,
    fatsPercent: 30,
    proteinsPercent: 18,
  },
  listOfEaten: [
    { time: "14:15", dish: "Макароны", weight: "200", calories: "400" },
    { time: "15:30", dish: "Салат", weight: "300", calories: "150" },
    { time: "18:00", dish: "Курица", weight: "150", calories: "300" },
  ],
};

export const EatenFoodSlice = createSlice({
  name: "eatenFood",
  initialState,
  selectors: {
    selectEatenPercent: (state) => state.eatenPercent,
    selectListOfEaten: (state) => state.listOfEaten,
  },
});

export const { selectEatenPercent, selectListOfEaten } = EatenFoodSlice.selectors;
