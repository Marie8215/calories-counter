import { createAsyncThunk } from "@reduxjs/toolkit";
import { ServerAdress } from "../../../apiConstant";

export const getListOfEaten = createAsyncThunk(
  "eatenFood/getListOfEaten",
  async (_, { rejectWithValue }) => {
    const response = await fetch(`${ServerAdress}/api/eaten`, {
      credentials: "include",
    });

    if (!response.ok) {
      rejectWithValue("eatenFood/getListOfEaten нет данных");
      return;
    }

    const apiResult = await response.json();

    if (!apiResult.eatenFood) {
      rejectWithValue("eatenFood/getListOfEaten нет данных");
      return;
    }

    let result = {
      totalEnergy: {
        calories: apiResult.totalEnergy.calories,
        carbohydrates: apiResult.totalEnergy.carbs,
        proteins: apiResult.totalEnergy.proteins,
        fats: apiResult.totalEnergy.fats,
      },
      listOfEaten: apiResult.eatenFood.map((food) => {
        return {
          time: parseDate(food.eatenAt),
          dish: food.name,
          weight: food.weight,
          calories: food.energyPerWeight.calories,
        };
      }),
    };

    return result;
  }
);

function parseDate(isoString) {
  const date = new Date(isoString);

  return `${date.getHours()}:${date.getMinutes()}`;
}
