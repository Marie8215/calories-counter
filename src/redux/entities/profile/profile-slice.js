import { createSlice } from "@reduxjs/toolkit";
import { getProfile } from "./get-profile";

const initialState = {
  profile: {
    height: 160,
    weight: 0,
    age: 26,
    gender: "male",
  },
  requesStatus: "",
  energyDailyNorm: undefined,
};

export const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    // updateProfile: (state, action) => {
    //   console.log(3, action);
    //   state.profile = action.payload;
    // },
  },
  selectors: {
    selectProfile: (state) => state.profile,
    selectEnergyDailyNorm: (state) => state.energyDailyNorm,
  },
  extraReducers: (builder) =>
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.profile = action.payload.profile;
      state.energyDailyNorm = action.payload.energyDailyNorm;
    }),
});

export const { selectProfile, selectEnergyDailyNorm } = ProfileSlice.selectors;
// export const { updateProfile } = ProfileSlice.actions;
