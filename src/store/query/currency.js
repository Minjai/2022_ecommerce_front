import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../constants/axios';

export const currencyQuery = createApi({
  reducerPath: 'currencyQuery',
  tagTypes: ['CURRENCY_TAG'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getCurrency: builder.query({
      query: () => 'products/currency/',
      providesTags: () => ['CURRENCY_TAG'],
    }),
  }),
});

export const { useGetCurrencyQuery } = currencyQuery;
