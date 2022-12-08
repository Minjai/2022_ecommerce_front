import { productSearchQuery } from '../query/productSearch';
import { categoryQuery } from '../query/categoryQuery';
import { productQuery } from '../query/productQuery';
import { combineReducers } from '@reduxjs/toolkit';
import { orderQuery } from '../query/orderQuery';
import userSlice from './user/user';
import burgerSlice from './burger';
import searchSlice from './search';
import alertSlice from './alert';
import orderSlice from './order';
import modalSlice from './modal';
import cartSlice from './cart';

export const rootSlice = combineReducers({
  alert: alertSlice,
  burger: burgerSlice,
  search: searchSlice,
  modal: modalSlice,
  user: userSlice,
  order: orderSlice,
  cart: cartSlice,
  [categoryQuery.reducerPath]: categoryQuery.reducer,
  [productQuery.reducerPath]: productQuery.reducer,
  [productSearchQuery.reducerPath]: productSearchQuery.reducer,
  [orderQuery.reducerPath]: orderQuery.reducer,
});
