import { configureStore } from "@reduxjs/toolkit";
import { rootSlice } from "./slices";

export const store = configureStore({
  reducer: rootSlice
})