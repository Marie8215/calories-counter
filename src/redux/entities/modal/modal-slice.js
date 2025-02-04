import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "манго",
    calories: 60,
    proteins: 0.8,
    fats: 0.4,
    carbohydrates: 15,
  },
  {
    name: "мороженое",
    calories: 207,
    proteins: 3.5,
    fats: 11,
    carbohydrates: 24,
  },
  {
    name: "макароны",
    calories: 158,
    proteins: 5.8,
    fats: 1.1,
    carbohydrates: 31,
  },
];

export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    addFood: (state, action) => {
      state.push(action.payload);
      return state;
    },
  },
  selectors: {
    selectFoodByName: (state, searchString) =>
      state.filter((food) =>
        food.name.toLowerCase().includes(searchString.toLowerCase())
      ),
  },
});

export const { addFood } = ModalSlice.actions;
export const { selectFoodByName } = ModalSlice.selectors;
export default ModalSlice.reducer;
