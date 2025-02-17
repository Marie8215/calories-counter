import { createSlice } from "@reduxjs/toolkit";
import { getStatistics } from "./get-statistics";

const initialState = {
  statistics: {},
  loading: false,
  error: null,
};

export const StatisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStatistics.fulfilled, (state, action) => {
        state.loading = false;
        state.statistics = action.payload;
      })

  },
});

export const selectStatistics = (state) => state.statistics.statistics;
export default StatisticsSlice.reducer;