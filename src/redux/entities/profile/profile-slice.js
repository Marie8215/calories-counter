import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {
    height: 160,
    weight: 0,
    age: 26,
    gender: "male",
  },
};

export const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      console.log(3, action)
      state.profile = action.payload;
    },
  },
  selectors: {
    selectProfile: (state) => state.profile,
  },
});

export const { selectProfile } = ProfileSlice.selectors;
export const { updateProfile } = ProfileSlice.actions;
