import { productSearchQuery } from '../query/productSearch';
import { categoryQuery } from '../query/categoryQuery';
import { productQuery } from '../query/productQuery';
import { combineReducers } from '@reduxjs/toolkit';
import { orderQuery } from '../query/orderQuery';
import userSlice from './user/user';
import burgerSlice from './burger';
import modalSlice from './modal';
import cartSlice from './cart';

export const rootSlice = combineReducers({
  burger: burgerSlice,
  modal: modalSlice,
  user: userSlice,
  cart: cartSlice,
  [categoryQuery.reducerPath]: categoryQuery.reducer,
  [productQuery.reducerPath]: productQuery.reducer,
  [productSearchQuery.reducerPath]: productSearchQuery.reducer,
  [orderQuery.reducerPath]: orderQuery.reducer,
});
