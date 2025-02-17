import { createAsyncThunk } from "@reduxjs/toolkit";
import { ServerAdress } from "../../../apiConstant";

export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (_, { getState, dispatch }) => {
    const response = await fetch(`${ServerAdress}/api/profile`, {
      credentials: "include",
    });

    const apiResult = await response.json();

    if (!apiResult) {
      rejectWithValue("profile/getProfile нет данных");
      return;
    }

    let result = {
      profile: {
        height: apiResult.height,
        weight: apiResult.weight,
        age: apiResult.age,
        gender: apiResult.gender === 0 ? "male" : "female",
        goal: apiResult.goal === 0 ? "loose" : "gain",
      },
      energyDailyNorm: {
        calories: apiResult.energyDailyNorm.calories,
        carbohydrates: apiResult.energyDailyNorm.carbs,
        fats: apiResult.energyDailyNorm.fats,
        proteins: apiResult.energyDailyNorm.proteins,
      },
    };

    return result;
  }
);
