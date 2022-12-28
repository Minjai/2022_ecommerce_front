import { consultationQuery } from './query/consultationQuery';
import { notificationQuery } from './query/notificationQuery';
import { productSearchQuery } from './query/productSearch';
import { categoryQuery } from './query/categoryQuery';
import { settingsQuery } from './query/settingsQuery';
import { productQuery } from './query/productQuery';
import { paymentQuery } from './query/paymentQuery';
import { pointsQuery } from './query/pointsQuery';
import { configureStore } from '@reduxjs/toolkit';
import { reviewQuery } from './query/reviewQuery';
import { orderQuery } from './query/orderQuery';
import { countryQuery } from './query/country';
import { newsQuery } from './query/newsQuery';
import { faqQuery } from './query/faqQuery';
import { rootSlice } from './slices';
import { policyQuery } from './query/policyQuery';
import { footerQuery } from './query/footerQuery';
import { termsQuery } from './query/termsQuery';
import { currencyQuery } from './query/currency';

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
      settingsQuery.middleware,
      notificationQuery.middleware,
      currencyQuery.middleware,
      countryQuery.middleware,
      paymentQuery.middleware,
      policyQuery.middleware,
      footerQuery.middleware,
      termsQuery.middleware,
    ),
});
