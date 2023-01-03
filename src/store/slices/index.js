import { notificationQuery } from '../query/notificationQuery';
import { consultationQuery } from '../query/consultationQuery';
import { productSearchQuery } from '../query/productSearch';
import { settingsQuery } from '../query/settingsQuery';
import { categoryQuery } from '../query/categoryQuery';
import { paymentQuery } from '../query/paymentQuery';
import { productQuery } from '../query/productQuery';
import { pointsQuery } from '../query/pointsQuery';
import { footerQuery } from '../query/footerQuery';
import { reviewQuery } from '../query/reviewQuery';
import { combineReducers } from '@reduxjs/toolkit';
import { policyQuery } from '../query/policyQuery';
import { currencyQuery } from '../query/currency';
import { orderQuery } from '../query/orderQuery';
import { termsQuery } from '../query/termsQuery';
import { countryQuery } from '../query/country';
import { newsQuery } from '../query/newsQuery';
import consultationSlice from './consultation';
import { faqQuery } from '../query/faqQuery';
import categorySlice from './category';
import shippingSlice from './shipping';
import deliverySlice from './delivery';
import currencySlice from './currency';
import productSlice from './product';
import userSlice from './user/user';
import burgerSlice from './burger';
import searchSlice from './search';
import reviewSlice from './review';
import pointSlice from './points';
import alertSlice from './alert';
import orderSlice from './order';
import modalSlice from './modal';
import cartSlice from './cart';

export const rootSlice = combineReducers({
  consultation: consultationSlice,
  category: categorySlice,
  delivery: deliverySlice,
  product: productSlice,
  burger: burgerSlice,
  search: searchSlice,
  order: orderSlice,
  alert: alertSlice,
  points: pointSlice,
  modal: modalSlice,
  review: reviewSlice,
  user: userSlice,
  currency: currencySlice,
  cart: cartSlice,
  shipping: shippingSlice,
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
  [countryQuery.reducerPath]: countryQuery.reducer,
  [paymentQuery.reducerPath]: paymentQuery.reducer,
  [policyQuery.reducerPath]: policyQuery.reducer,
  [footerQuery.reducerPath]: footerQuery.reducer,
  [termsQuery.reducerPath]: termsQuery.reducer,
  [currencyQuery.reducerPath]: currencyQuery.reducer,
});
