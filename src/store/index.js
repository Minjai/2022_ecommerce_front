import { consultationQuery } from './query/consultationQuery';
import { productSearchQuery } from './query/productSearch';
import { categoryQuery } from './query/categoryQuery';
import { productQuery } from './query/productQuery';
import { pointsQuery } from './query/pointsQuery';
import { configureStore } from '@reduxjs/toolkit';
import { reviewQuery } from './query/reviewQuery';
import { orderQuery } from './query/orderQuery';
import { newsQuery } from './query/newsQuery';
import { faqQuery } from './query/faqQuery';
import { rootSlice } from './slices';
import { notificationQuery } from './query/notificationQuery';

export const store = configureStore({
  reducer: rootSlice,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productSearchQuery.middleware,
      consultationQuery.middleware,
      categoryQuery.middleware,
      productQuery.middleware,
      orderQuery.middleware,
      reviewQuery.middleware,
      newsQuery.middleware,
      faqQuery.middleware,
      pointsQuery.middleware,
      notificationQuery.middleware
    ),
});
