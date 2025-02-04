import { configureStore } from "@reduxjs/toolkit";
import { EatenFoodSlice } from "./entities/eatenFood/eaten-food-slice";
import { StatisticsSlice } from "./entities/statistics/statistics-slice";
import { ProfileSlice } from "./entities/profile/profile-slice";
import { ModalSlice } from "./entities/modal/modal-slice";

export const store = configureStore({
    reducer: {
        [EatenFoodSlice.name]: EatenFoodSlice.reducer,
        [StatisticsSlice.name]: StatisticsSlice.reducer,
        [ProfileSlice.name]: ProfileSlice.reducer,
        [ModalSlice.name]: ModalSlice.reducer,
    },
});