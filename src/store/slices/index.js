import { combineReducers } from '@reduxjs/toolkit';
import burgerSlice from './burger';
import modalSlice from './modal';

export const rootSlice = combineReducers({
  burger: burgerSlice,
  modal: modalSlice,
});
