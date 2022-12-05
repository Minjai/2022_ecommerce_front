import { productSearchQuery } from './query/productSearch';
import { categoryQuery } from './query/categoryQuery';
import { productQuery } from './query/productQuery';
import { configureStore } from '@reduxjs/toolkit';
import { orderQuery } from './query/orderQuery';
import { rootSlice } from './slices';

export const store = configureStore({
  reducer: rootSlice,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoryQuery.middleware,
      productQuery.middleware,
      productSearchQuery.middleware,
      orderQuery.middleware
    ),
});
