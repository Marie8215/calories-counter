import { createAsyncThunk } from "@reduxjs/toolkit";
import { ServerAdress } from "../../../apiConstant";

export const getFoodList = createAsyncThunk(
  "modal/getFoodList",
  async (searchString, { rejectWithValue }) => {
    if (searchString.length == 0) {
      return [];
    }

    const response = await fetch(
      `${ServerAdress}/api/product?searchString=${searchString}`,
      {
        credentials: "include",
      }
    );

    if (!response.ok) {
      rejectWithValue("modal/getFoodList");

      return;
    }

    const result = await response.json();

    if (!result) {
      // todo првоверить корректную работу
      rejectWithValue("modal/getFoodList нет данных");
      return;
    }

    let data = result.map((product) => {
      return {
        id: product.id,
        name: product.name,
        calories: product.energyValuePer100Gram.calories,
        proteins: product.energyValuePer100Gram.proteins,
        fats: product.energyValuePer100Gram.fats,
        carbohydrates: product.energyValuePer100Gram.carbs,
      };
    });

    return data;
  }
);
