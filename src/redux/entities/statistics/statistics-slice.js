import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  statistics: {
    underCalories: 1,
    overCalories: 2,
    overProteins: 1,
    overFats: 0,
    overCarbohydrates: 2,
  },
};

export const StatisticsSlice = createSlice({
  name: "statistics",
  initialState,
  selectors: {
    selectStatistics: (state, period) => state.statistics,
  },
});

export const { selectStatistics } = StatisticsSlice.selectors;
