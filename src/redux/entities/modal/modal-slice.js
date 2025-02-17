import { createSlice } from "@reduxjs/toolkit";
import { getFoodList } from "./get-food-list";


const initialState = {
  foodList: [],
  status: 'idle',
  error: null,
};

export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    addFood: (state, action) => {
      state.foodList.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFoodList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getFoodList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.foodList = action.payload;
      })
      .addCase(getFoodList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { addFood } = ModalSlice.actions;

export const selectFoodByName = (state) => state.modal.foodList;

export default ModalSlice.reducer;