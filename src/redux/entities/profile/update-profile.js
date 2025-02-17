import { createAsyncThunk } from "@reduxjs/toolkit";
import { ServerAdress } from "../../../apiConstant";
import { getProfile } from "./get-profile";

export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async (profile, { getState, dispatch }) => {
    const response = await fetch(`${ServerAdress}/api/profile`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      credentials: "include",
      body: JSON.stringify({
        Height: profile.height,
        Weight: profile.weight,
        Age: profile.age,
        Gender: profile.gender === "male" ? 0 : 1,
        Goal: 0, // todo use real data
      }),
      method: "POST",
    });

    if (!response.ok) {
      rejectWithValue("profile/updateProfile нет данных");
      return;
    }

    dispatch(getProfile());
  }
);
