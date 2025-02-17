import { createAsyncThunk } from "@reduxjs/toolkit";
import { ServerAdress } from "../../../apiConstant";
import { getListOfEaten } from "./get-list-of-eaten";

export const addToList = createAsyncThunk(
  "modal/addToList",
  async (food, { dispatch }) => {
    const response = await fetch(`${ServerAdress}/api/eaten`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      credentials: "include",
      body: JSON.stringify({
        Weight: food.weight,
        FoodId: food.id,
      }),
      method: "POST",
    });

    if (!response.ok) {
      rejectWithValue("modal/addToList нет данных");
      return;
    }

    dispatch(getListOfEaten());
  }
);
