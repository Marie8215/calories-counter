import { createAsyncThunk } from "@reduxjs/toolkit";
import { ServerAdress } from "../../../apiConstant";

export const getStatistics = createAsyncThunk(
  "statistics/getStatistics",
  async (period, { rejectWithValue }) => {
    try {
      const response = await fetch(`${ServerAdress}/api/statistics?ForLastDaysCount=${period}`, {
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Ошибка");
      }

      const apiResult = await response.json();

      if (!apiResult) {
        throw new Error("statistics/getStatistics нет данных");
      }

      const result = {
        underCalories: apiResult.calories.daysLess,
        overCalories: apiResult.calories.daysMore,
        overProteins: apiResult.proteins.daysMore,
        overFats: apiResult.fats.daysMore,
        overCarbohydrates: apiResult.carbs.daysMore,
        mostCommonlyConsumedProduct: apiResult.mostCommonlyConsumedProduct,
      };

      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);