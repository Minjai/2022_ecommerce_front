import { combineReducers } from '@reduxjs/toolkit';
import burgerSlice from './burger';
import modalSlice from './modal';
import userSlice from './user/user';

export const rootSlice = combineReducers({
  burger: burgerSlice,
  modal: modalSlice,
  user: userSlice,
});
