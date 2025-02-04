import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "манго",
    calories: 60,
    protein: 0.8,
    fat: 0.4,
    carbohydrates: 15,
  },
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

export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  selectors: {
    selectFoodByName: (state, searchString) => state.filter((food) =>
        food.name.toLowerCase().includes(searchString.toLowerCase())),
  },
});

export const { selectFoodByName } = ModalSlice.selectors;
