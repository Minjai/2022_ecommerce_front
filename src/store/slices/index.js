import { consultationQuery } from '../query/consultationQuery';
import { productSearchQuery } from '../query/productSearch';
import { categoryQuery } from '../query/categoryQuery';
import { productQuery } from '../query/productQuery';
import { reviewQuery } from '../query/reviewQuery';
import { combineReducers } from '@reduxjs/toolkit';
import { orderQuery } from '../query/orderQuery';
import { newsQuery } from '../query/newsQuery';
import { faqQuery } from '../query/faqQuery';
import categorySlice from './category';
import userSlice from './user/user';
import burgerSlice from './burger';
import searchSlice from './search';
import reviewSlice from './review';
import alertSlice from './alert';
import orderSlice from './order';
import modalSlice from './modal';
import cartSlice from './cart';

export const rootSlice = combineReducers({
  category: categorySlice,
  burger: burgerSlice,
  search: searchSlice,
  order: orderSlice,
  alert: alertSlice,
  modal: modalSlice,
  review: reviewSlice,
  user: userSlice,
  cart: cartSlice,
  [categoryQuery.reducerPath]: categoryQuery.reducer,
  [consultationQuery.reducerPath]: consultationQuery.reducer,
  [faqQuery.reducerPath]: faqQuery.reducer,
  [newsQuery.reducerPath]: newsQuery.reducer,
  [reviewQuery.reducerPath]: reviewQuery.reducer,
  [productQuery.reducerPath]: productQuery.reducer,
  [productSearchQuery.reducerPath]: productSearchQuery.reducer,
  [orderQuery.reducerPath]: orderQuery.reducer,
});
