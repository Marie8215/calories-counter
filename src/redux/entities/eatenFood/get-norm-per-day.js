import { createAsyncThunk } from "@reduxjs/toolkit";
import { ServerAdress } from "../../../apiConstant";

export const getNormPerDay = createAsyncThunk(
  "eatenFood/getNormPerDay",
  async (_, { getState, dispatch }) => {
    const response = await fetch(`${ServerAdress}/api/profile`, {
      credentials: "include",
    });

    const result = await response.json();

    if (!result) {
      rejectWithValue("eatenFood/getNormPerDay нет данных");
      return;
    }

    return {
      calories: result.energyDailyNorm.calories,
      proteins: result.energyDailyNorm.proteins,
      fats: result.energyDailyNorm.fats,
      carbohydrates: result.energyDailyNorm.carbs,
    };
  }
);
