import { combineReducers } from "@reduxjs/toolkit";
import burgerSlice from './burger'

export const rootSlice = combineReducers({
  burger: burgerSlice
})