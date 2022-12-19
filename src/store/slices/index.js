import { notificationQuery } from '../query/notificationQuery';
import { consultationQuery } from '../query/consultationQuery';
import { productSearchQuery } from '../query/productSearch';
import { settingsQuery } from '../query/settingsQuery';
import { categoryQuery } from '../query/categoryQuery';
import { productQuery } from '../query/productQuery';
import { pointsQuery } from '../query/pointsQuery';
import { reviewQuery } from '../query/reviewQuery';
import { combineReducers } from '@reduxjs/toolkit';
import { orderQuery } from '../query/orderQuery';
import { newsQuery } from '../query/newsQuery';
import { faqQuery } from '../query/faqQuery';
import categorySlice from './category';
import productSlice from './product';
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
  product: productSlice,
  burger: burgerSlice,
  search: searchSlice,
  order: orderSlice,
  alert: alertSlice,
  modal: modalSlice,
  review: reviewSlice,
  user: userSlice,
  cart: cartSlice,
  [categoryQuery.reducerPath]: categoryQuery.reducer,
  [pointsQuery.reducerPath]: pointsQuery.reducer,
  [consultationQuery.reducerPath]: consultationQuery.reducer,
  [faqQuery.reducerPath]: faqQuery.reducer,
  [newsQuery.reducerPath]: newsQuery.reducer,
  [reviewQuery.reducerPath]: reviewQuery.reducer,
  [productQuery.reducerPath]: productQuery.reducer,
  [productSearchQuery.reducerPath]: productSearchQuery.reducer,
  [notificationQuery.reducerPath]: notificationQuery.reducer,
  [orderQuery.reducerPath]: orderQuery.reducer,
  [settingsQuery.reducerPath]: settingsQuery.reducer,
});
