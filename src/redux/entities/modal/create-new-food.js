import { createAsyncThunk } from "@reduxjs/toolkit";
import { ServerAdress } from "../../../apiConstant";

export const createNewFood = createAsyncThunk(
  "modal/createNewFood",
  async (inputFood, { dispatch }) => {
    const response = await fetch(`${ServerAdress}/api/product`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      credentials: "include",
      body: JSON.stringify({
        Name: inputFood.name,
        Proteins: inputFood.proteins,
        Fats: inputFood.fats,
        Carbs: inputFood.carbohydrates,
        Calories: inputFood.calories,
      }),
      method: "POST",
    });

    if (!response.ok) {
      rejectWithValue("modal/createNewFood нет данных");
      return;
    }

    const result = await response.json();

    return {
      name: result.name,
      proteins: result.proteins,
      fats: result.fats,
      carbohydrates: result.carbohydrates
    };
  }
);