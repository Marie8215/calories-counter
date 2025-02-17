import { createSlice } from "@reduxjs/toolkit";
import { getNormPerDay } from "./get-norm-per-day";
import { getListOfEaten } from "./get-list-of-eaten";

const initialState = {
  // dailyNorm: {
  //   calories: 2000,
  //   proteins: 40,
  //   fats: 100,
  //   carbohydrates: 200,
  // },
  listOfEaten: [],
  totalEnergy: undefined,
};

export const EatenFoodSlice = createSlice({
  name: "eatenFood",
  initialState,
  selectors: {
    selectListOfEaten: (state) => state.listOfEaten,
    selectTotalEnergy: (state) => state.totalEnergy,
  },
  extraReducers: (builder) =>
    builder
      // .addCase(getNormPerDay.fulfilled, (state, action) => {
      //   state.requestStatus = "fulfilled";
      //   state.dailyNorm = action.payload;
      // })
      .addCase(getListOfEaten.fulfilled, (state, action) => {
        state.requestStatus = "fulfilled";
        state.listOfEaten = action.payload.listOfEaten;
        state.totalEnergy = action.payload.totalEnergy;
      }),
});

export const { selectListOfEaten, selectTotalEnergy } =  EatenFoodSlice.selectors;
export default EatenFoodSlice.reducer;
