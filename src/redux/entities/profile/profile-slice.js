import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profile: {
        height: 160,
        weight: 0,
        age: 0,
        gender: "male",
      },

};

export const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  selectors: {
    selectProfile: (state) => state.profile,
  },
});

export const { selectProfile } = ProfileSlice.selectors;
